//variable const
const title=document.getElementById('title')
const image=document.getElementById('image')

// console.log("Arslan AKmal");
title.addEventListener('click',function(){
    title.classList.add('name')
})

title.addEventListener('mouseout',function(){
    title.classList.remove('name')
})
image.addEventListener('mouseover',function(){
    image.classList.add('img')
})
image.addEventListener('mouseout',function(){
    image.classList.remove('img')

})