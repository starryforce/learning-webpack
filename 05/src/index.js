import helloWorld from "./hello-world";
import imgsrc from "./assets/1.png";
import logoSvg from "./assets/2.svg";
import exampleTxt from "./assets/3.txt";
import jpgMap from "./assets/4.jpg";
import "./style.css";
import "./style.less";
import Data from "./assets/data.xml";
import Notes from "./assets/data.csv";

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
// block.style.cssText = "color:red";
block.textContent = exampleTxt;
block.classList.add("block-bg");
document.body.appendChild(block);

const img3 = document.createElement("img");
img3.style.cssText = "width:400px;height:300px";
img3.src = jpgMap;
document.body.appendChild(img3);

document.body.classList.add("hello");

const span = document.createElement("span");
span.classList.add("icon");
span.innerHTML = "&#xe62b;";
document.body.appendChild(span);

console.log("Data", Data);
console.log("Notes", Notes);
