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





// function stud(){
//   const student=[
//     {
//       name:"Arslan AKmal",
//       age:20,
//       country:"Pakistan",
//     },
//     {
//       name:"Hussnain",
//       age:10,
//       country:"Germany",
//     },
//     {
//       name:"hanan",
//       age:10,
//       country:"italy",
//     },
//     ]
//     const s= document.createElement('h1')
//     s.innerHTML=student[0].name
//     document.body.appendChild(s)
//     console.log(s);

// for(let i = 0; i <student.length; i++) {
//     const st=document.createElement('h1')
//   st.innerHTML=`The name of student is : ${student[i].name}.<br> The age of student is :${student[i].age}.<br>  Country is :${student[i].country}.`
//     //  st.innerHTML="Name :"+student[i].name + " Age : " + student[i].age + " Country :" + student[i].country 
    
//   document.body.appendChild(st);
//   console.log(student[i]);
// }
// }
// stud();

// array of objects 
const product=
  [
    {
        "id": 1,
        "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        "price": 109.95,
        "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        "rating": {
            "rate": 3.9,
            "count": 120
        }
    },
    {
        "id": 2,
        "title": "Mens Casual Premium Slim Fit T-Shirts ",
        "price": 22.3,
        "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        "rating": {
            "rate": 4.1,
            "count": 259
        }
    },
    {
        "id": 3,
        "title": "Mens Cotton Jacket",
        "price": 55.99,
        "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
        "rating": {
            "rate": 4.7,
            "count": 500
        }
    },
    {
        "id": 4,
        "title": "Mens Casual Slim Fit",
        "price": 15.99,
        "description": "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
        "rating": {
            "rate": 2.1,
            "count": 430
        }
    },
    {
        "id": 5,
        "title": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
        "price": 695,
        "description": "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
        "category": "jewelery",
        "image": "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
        "rating": {
            "rate": 4.6,
            "count": 400
        }
    },
]



function productFetching(){
  const container=document.getElementById('container-card')
  container.classList.add('container-card')
  for(let i = 0; i < product.length; i++){
    const cards=document.createElement('div')
    cards.classList.add('card')
    const id=document.createElement('p')
    const title=document.createElement('h2')
    const price=document.createElement('h3')
    const description=document.createElement('p')
    const category=document.createElement('h5')
    const image=document.createElement('img')

    id.innerHTML=product[i].id;
    title.innerHTML=product[i].title;
    price.innerHTML=product[i].price;
    description.innerHTML=product[i].description;
    category.innerHTML=product[i].category;
    image.src=product[i].image;
    
    container.appendChild(cards)
    cards.appendChild(id)
    cards.appendChild(title)
    cards.appendChild(price)
    cards.appendChild(description)
    cards.appendChild(category)
    cards.appendChild(image)

    image.style.width='200px'
    image.style.height='200px'
  }
}
productFetching()