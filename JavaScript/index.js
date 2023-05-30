//variable const
// const title=document.getElementById('title')
// const image=document.getElementById('image')

// console.log("Arslan AKmal");
// title.addEventListener('click',function(){
//     title.classList.add('name')
// })

// title.addEventListener('mouseout',function(){
//     title.classList.remove('name')
// })
// // image.addEventListener('mouseover',function(){
// //     image.classList.add('img')
// //     image.innerHTML=''
// // })
// image.addEventListener('mouseout',function(){
//     image.classList.remove('img')
//     image.innerHTML='click me'
// })

// data types : var, let const;
// var a=90;
// var a=100
//  console.log(a);
//  result=100;
//  var can be redeclare or re initialized
//  it can override the values which are stored in variables.
//  const can not be redeclared or reinitialized
// let can not be reinitialized but it can be re declared
 //fuction
//  function used to reduce the usability of code
//  we write a piece of code in function and call the function whenever we need it
  // function add(a,b){
  //   return  console.log(a+b);
  // }
  // add(10,20);
//   console.log(add(100,20));
  
  // function a() {
  //   console.log("Muhammad Hussnain");
  // }
  // a();
  // for(let i = 0; i <10; i++) {
  //   a();
  // }

//   to create element ( tags )in run time on browser 
// function createElement(){
// const para=document.createElement('h1');
// para.innerHTML="Hello world";
// para.style.color="red"
// document.body.appendChild(para);
// }
// for(let i = 0; i < 10; i++) {
//     createElement();
// }

//arrays in js
// const students= ["John","Ibrahim","Hassan","majid","julian"];
// console.log(students);
// to find length of array we use .lenght

// for(let i = 0; i < students.length; i++) {
//   const sArray=document.createElement('h1')
//   sArray.innerHTML=students[i];
//   document.body.appendChild(sArray);
//   console.log(students[i]);
// }

// const month=document.getElementById("month");


// month.addEventListener('click',function(){
 
//     month.classList.add('month')
// })

// function months(){
// const months= ["January","February","March","April","May","June","July","August","September","October","November","December"]
// for(let i = 0; i < months.length; i++) {
//   const m=document.createElement('h1')
//   m.innerHTML=months[i]
//   m.classList.add('month')//add class from js.css
//   m.style.backgroundColor="red"
  
//   document.body.appendChild(m);
// }
// }





function stud(){
  const student=[
    {
      name:"Arslan AKmal",
      age:20,
      country:"Pakistan",
    },
    {
      name:"Hussnain",
      age:10,
      country:"Germany",
    },
    {
      name:"hanan",
      age:10,
      country:"italy",
    },
    ]
    const s= document.createElement('h1')
    s.innerHTML=student[0].name
    document.body.appendChild(s)
    console.log(s);

for(let i = 0; i <student.length; i++) {
    const st=document.createElement('h1')
  st.innerHTML=`The name of student is : ${student[i].name}.<br> The age of student is :${student[i].age}.<br>  Country is :${student[i].country}.`
    //  st.innerHTML="Name :"+student[i].name + " Age : " + student[i].age + " Country :" + student[i].country 
    
  document.body.appendChild(st);
  console.log(student[i]);
}
}
stud();

