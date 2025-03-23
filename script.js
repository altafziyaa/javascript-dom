// learning DOM in JavaScript !
const heading = document.getElementById("heading");
heading.innerText = "welcome to javaScript DOM";
// const classPara = document.getElementsByClassName("para");
// const fisrtPara = document.querySelector(".para");
// console.log(fisrtPara);
// const allPara = document.querySelectorAll(".para");
// const body=document.getElementsByTagName('body')
// // styling
// console.log(allPara);
// heading.style.color = "white";
// heading.style.fontSize = "3rem";
// heading.style.background = "black";
// // 
// heading.setAttribute('class', 'new-class')
// const newpara=document.createElement('p')
// newpara.innerHTML='this is our new paragraph'
// document.body.appendChild(newpara)
// let removePara=document.querySelector('.para')
// // removePara.remove()

// // Event Listeners (Click, Mouse Hover, etc.)
// const btn=document.getElementById('btn')
// const text=document.getElementById('text')

// btn.addEventListener('click',function(){
//     btn.style.color='purple'
//     btn.style.background='yellow'
//     btn.innerText='btn clicked';
// });

// heading.addEventListener('mouseover',function(){
//     heading.style.color='purple'
// })

// heading.addEventListener('mouseout',()=>{
//     heading.style.color='blue'
// });

// const input=document.getElementById('nameInput');
// const output=document.getElementById('output');

// input.addEventListener('keyup',()=>{
//     output.innerText='you type: '+event.target.value;
// })


let form=document.getElementById('myForm')

form.addEventListener('submit',(event)=>{
    event.preventDefault();
    let name=document.getElementById('username').value;
    document.getElementById('msg').innerText=`hello ${name} !`
})

const name1= document.getElementById('username')
name1.addEventListener('keydown',function(event){
    console.log(`your typing ${event.key}`)

})