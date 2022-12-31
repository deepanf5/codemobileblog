// function myFunction() {
//   let navbar = document.getElementById('nav');
//   navbar.classList.toggle('show');
  


// }
const icons = document.querySelectorAll('.icons');
icons.forEach (icon => {  
  icon.addEventListener('click', (event) => {
    icon.classList.toggle("open");
      let navbar = document.getElementById('nav');
  navbar.classList.toggle('show');
  });
});



const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay: {
    delay: 5000,
  },
  

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
})


document.getElementById("current_year").innerHTML('') = new Date().getFullYear()



