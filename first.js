// // //console.log(window);
// // console.dir(document.body);
// // console.dir(document.body.childNodes[1]);
// // console.dir(document.head);

// // //dom manipulation
// // let s=document.getElementById("heading");
// // console.log(s);
// // //usingdoc class name
// // let c=document.getElementsByClassName("heading");
// // console.log(c);

// // let x=document.querySelector(".p");
// // //let x1=document.querySelector("div")
// // console.dir(x);
// // let v=document.querySelector("div");
// // console.dir(v);
// // let s1=document.querySelector("h2");

// // s1.innerText=s1.innerText+"from clg";
// // console.dir(s1.innerText);

// // //add in div container
// // //let div=document.querySelectorAll(".box");
// // //console.log(divs);
// // //for(divs of divs){
// //   //  console.log(divs);
// // //}
// // //div[0].innerText="1";
// // //div[1].innerText="2";
// // //div[2].innerText="3";

// // let div=document.querySelector("div");
// // console.log(div);
// // let id=div.getAttribute("id");
// // // console.log(id);
// let newbtn=document.createElement("Button");
// newbtn.innerText="click ok";
// console.log(newbtn);
// let div=document.querySelector("div");
// div.prepend(newbtn);

// let newh=document.createElement("Heading");
// newh.innerHTML="<i>Hi </i>";
// document.querySelector("body").prepend(newh);


// let box=document.querySelector("box1");
// //box.remove;

// let newbt1=document.createElement("Button");
// newbt1.innerText="Hello";
// newbt1.style.backgroundColor="red";
// newbt1.style.color="white";
// document.querySelector("body").prepend(newbt1);

// //assignment 2
// let para=document.querySelector("p");
// console.log(para);
// para.setAttribute("class","newclass");
// para.classList.add("newclass");
// //events in java script
 let btn1=document.querySelector("#btn1");
//  btn1.onclick=()=>{
//     console.log("btn1 clicked")
//     let a=25;
//     a++;
//     console.log(a);
//  }
btn1.addEventListener("click",()=>{
    console.log("button 1 was clicked");
});

 let div=document.querySelector("div");
//  div.onmouseover=()=>{
//     console.log("on div");
//  }
div.addEventListener("mouseover",()=>{
    console.log("Div container used");
});
let mode="light";//dark
let changer=document.querySelector("#changer");
changer.addEventListener("mouseover",()=>{
    if(mode==="light"){
        mode="dark";
        document.querySelector("body").style.backgroundColor="red";
    }else{
        mode="light";
        document.querySelector("body").style.backgroundColor="blue";
    }
    console.log(mode);
});



 