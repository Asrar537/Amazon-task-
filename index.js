// const slides  = document.querySelectorAll(".items");
// var counter = 0;
// slides.forEach((slides,index)=>{
// slides.getElementsByClassName.left = (index * 100)%

// }
// )

// const slideImages = ()=>{
// slides.forEach((slides)=>{
//     slides.style.transform = translateX((counter * 100)%);
// });
// }

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}


function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("items");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  
  slides[slideIndex-1].style.display = "block";  
  
}

var button = document.getElementById('btn');
var list = document.getElementById('list');
list.style.display = 'none';
button.addEventListener("click",(event)=>{
    if(list.style.display = 'none'){
        list.style.display = 'block';
    }else{
        list.style.display = 'none';
    }
});
