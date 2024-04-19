const images = [
  {
    image: "img/01.webp",
    title: "Marvel's Spiderman Miles Morale",
    text: "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.",
  },
  {
    image: "img/02.webp",
    title: "Ratchet & Clank: Rift Apart",
    text: "Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.",
  },
  {
    image: "img/03.webp",
    title: "Fortnite",
    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
  },
  {
    image: "img/04.webp",
    title: "Stray",
    text: "Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city",
  },
  {
    image: "img/05.webp",
    title: "Marvel's Avengers",
    text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
  },
];

//utilizzo ciclo for per visualizzare in pagina tutte le immagini
const sliderContainer = document.querySelector(".my-carousel-images");
for (let i = 0 ; i < images.length ; i++) {
  const curImages = images[i];
  console.log(curImages);
  const sliderElem = `
  <div class="my-carousel-item" carousel-item="${i}">
  <img
    class="img-fluid"
    src="./${curImages.image}"
    alt="${curImages.title}"
  />
  <div class="item-description px-3">
    <h2>${curImages.title}</h2>
    <p> ${curImages.text} </p>
  </div>
</div>`
sliderContainer.innerHTML += sliderElem;
}

//imposto lo stato di partenza 
const slider = document.querySelectorAll(".my-carousel-item");
console.log(slider);
let activeIndex = 0;
slider[activeIndex].classList.add("active");

//clik sul bottone avanti 
document.querySelector(".my-next-hook").addEventListener("click", function(){
  
  slider[activeIndex].classList.remove("active");

  if (activeIndex < images.length - 1) { //avrei potuto usare slider.lenght 
    activeIndex++;
  } else {
    activeIndex = 0;
  }

  slider[activeIndex].classList.add("active");

});

//clik sul bottone indietro 
document.querySelector(".my-prev-hook").addEventListener("click", function(){

  slider[activeIndex].classList.remove("active");
  
  if (activeIndex === 0) {
    activeIndex = images.length - 1;
  }  else {
    activeIndex--;
  }
  
  slider[activeIndex].classList.add("active");
});