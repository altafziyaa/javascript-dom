// learning DOM in JavaScript !
const heading = document.getElementById("heading");
console.log(heading);
const classPara = document.getElementsByClassName("para");
console.log(classPara);
const fisrtPara = document.querySelector(".para");
console.log(fisrtPara);
const allPara = document.querySelectorAll(".para");
const body=document.getElementsByTagName('body')
// styling
console.log(allPara);
heading.innerText = "welcome to javaScript DOM";
heading.style.color = "white";
heading.style.fontSize = "3rem";
heading.style.background = "black";
// 
heading.setAttribute('class', 'new-class')
const newpara=document.createElement('p')
newpara.innerHTML='this is our new paragraph'
document.body.appendChild(newpara)
let removePara=document.querySelector('.para')
removePara.remove()