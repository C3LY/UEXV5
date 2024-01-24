 /* ---------- float image --------- */
// function isInViewport(element) {
//     const rect = element.getBoundingClientRect();
//     return (
//       rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
//       rect.bottom >= 0
//     );
//   }

//   function checkVisibility() {
//     const img = document.getElementById('floatImage');
//     if (isInViewport(img)) {
//       img.classList.add('visible');
//     } else {
//       img.classList.remove('visible');
//     }
//   }

  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.bottom >= 0
    );
  }
  
  function checkVisibility() {
    const images = document.querySelectorAll('.floatingImage');
    images.forEach(img => {
      if (isInViewport(img)) {
        img.classList.add('visible');
      } else {
        img.classList.remove('visible');
      }
    });
  }
  

   /* ---------- navbar --------- */

  /* Set the width of the sidebar to 250px (show it) */
  function openNav() {
    var navbar = document.getElementById("nav-side");
    navbar.style.width = "10px";
    navbar.style.opacity = "100";
  }

  /* Set the width of the sidebar to 0 (hide it) */
  function closeNav() {
    var navbar = document.getElementById("nav-side");
    navbar.style.width = "0";
    navbar.style.opacity = "0";
  }


  function changeBackgroundImage() {
let bgElement = document.getElementById('dynamic-bg');
    let imagePath = bgElement.getAttribute('data-image-path');

    bgElement.style.backgroundImage = `url('${imagePath}')`;  
  }

  window.addEventListener('scroll', checkVisibility);

  function initialize() {
    changeBackgroundImage();
    checkVisibility();
  }
  
  window.addEventListener('scroll', checkVisibility);
  window.addEventListener('DOMContentLoaded', initialize);


 /* ---------- card script --------- */

  document.querySelectorAll('.card').forEach(function(card) {
  card.addEventListener('mouseenter', function(event) {
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const w = card.offsetWidth;
    const h = card.offsetHeight;
    let direction = '';
    const slope = h / w;
    if(y < slope * x && y < -slope * x + h) {
      direction = 'top';
    } else if(y < slope * x && y > -slope * x + h) {
      direction = 'right';
    } else if(y > slope * x && y < -slope * x + h) {
      direction = 'left';
    } else {
      direction = 'bottom';
    }
    const info = card.querySelector('.info');
    info.style.opacity = 1;
    info.style.transform = 'none';
    card.setAttribute('data-direction', direction);
  });

  card.addEventListener('mouseleave', function(event) {
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const w = card.offsetWidth;
    const h = card.offsetHeight;
    let direction = '';
    const slope = h / w;
    if(y < slope * x && y < -slope * x + h) {
      direction = 'top';
    } else if(y < slope * x && y > -slope * x + h) {
      direction = 'right';
    } else if(y > slope * x && y < -slope * x + h) {
      direction = 'left';
    } else {
      direction = 'bottom';
    }
    const info = card.querySelector('.info');
    info.style.opacity = 0;
    if(direction === 'top') {
      info.style.transform = 'translateY(-100%)';
    } else if(direction === 'right') {
      info.style.transform = 'translateX(100%)';
    } else if(direction === 'left') {
      info.style.transform = 'translateX(-100%)';
    } else {
      info.style.transform = 'translateY(100%)';
    }
  });
});