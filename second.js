// const student={
//     FullName:"Madhur",
//     Marks:94,
//     printmarks:function(){
//         console.log("Marks: ",this.Marks);
//     },
// }; 

// //prototype
// const emp={
//     calcTax(){
//         console.log("Tax Rate is 30 %")
//     },
// };
// const karan={
//     salary:5000,
   
// }
// karan.__proto__=emp; 

// //classes in js'
// class Toyotacar{

//     constructor(brand){
//         console.log("create new objevct");
//         this.brand=brand;
//     }
//    start(){
//     console.log("Start");
//    }
//    stop(){
//      console.log("Stop");
//    }
// //    setBrand(brand){
// //     this.brandname=brand;
// //    }
// }
// let fortuner=new Toyotacar();



// callback
//  function hello(){
//     console.log("hello");
//  }
//  setTimeout(hello,2000); 
 
//promise
const factpara=document.querySelector('#fact');

function getData(dataId){
   return new Promise((resolve,reject)=>{
      setTimeout(()=>{
         console.log(dataId);
         resolve("success");
      },3000);
      });
   }
   async function getAll(){
      await getData(1);
      await getData(2);
      await getData(3);
   }
   //fetch api
   const url='https://trace.moe/?url=https://raw.githubusercontent.com/soruly/trace.moe/master/demo.jpg';
   // let promise=fetch('https://trace.moe/?url=https://raw.githubusercontent.com/soruly/trace.moe/master/demo.jpg');
   // console.log(promise);
   const getfact=async()=>{
      let response=await fetch(url);
      console.log(response);
     let data=await response.json();
     factpara.innerText()=data[0].text;
   };



