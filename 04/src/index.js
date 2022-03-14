import helloWorld from "./hello-world";
import imgsrc from "./assets/1.png";
import logoSvg from "./assets/2.svg";
import exampleTxt from "./assets/3.txt";
import jpgMap from "./assets/4.jpg";

helloWorld();

const img = document.createElement("img");
img.style.cssText = "width:40px;height:30px";
img.src = imgsrc;
document.body.appendChild(img);

const img2 = document.createElement("img");
img2.style.cssText = "width:400px;height:300px";
img2.src = logoSvg;
document.body.appendChild(img2);

const block = document.createElement("div");
block.style.cssText = "color:red";
block.textContent = exampleTxt;
document.body.appendChild(block);

const img3 = document.createElement("img");
img3.style.cssText = "width:400px;height:300px";
img3.src = jpgMap;
document.body.appendChild(img3);
