const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerWebpackPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./build"),
    clean: true,
    assetModuleFilename: "images/[contenthash][ext]",
  },
  mode: "development",
  devtool: "inline-source-map",
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
      filename: "app.html",
      inject: "body",
    }),
    new MiniCssExtractPlugin({
      filename: "styles/[contenthash].css",
    }),
  ],
  devServer: {
    static: "./build",
  },
  module: {
    rules: [
      {
        test: /\.png$/,
        type: "asset/resource",
        generator: {
          filename: "images/[contenthash][ext]",
        },
      },
      {
        test: /\.svg$/,
        type: "asset/inline",
      },
      {
        test: /\.txt$/,
        type: "asset/source",
      },
      {
        test: /\.jpg$/,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 4 * 1024 * 1024,
          },
        },
      },
      {
        test: /\.(css|less)$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "less-loader"],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        type: "asset/resource",
      },
      {
        test: /\.(csv|tsv)$/,
        use: "csv-loader",
      },
      {
        test: /\.xml$/,
        use: "xml-loader",
      },
    ],
  },
  optimization: {
    minimizer: [new CssMinimizerWebpackPlugin()],
  },
};
