/* ---------- float image ability --------- */
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

function openNav() {
  var navbar = document.getElementById("project-nav");
  navbar.style.width = "10px";
  navbar.style.opacity = "100";
}

function closeNav() {
  var navbar = document.getElementById("project-nav");
  navbar.style.width = "0";
  navbar.style.opacity = "0";
}


window.addEventListener('scroll', checkVisibility);


function initialize() {
  checkVisibility();
  addingEnlarging();
  addCardFunctionality();
}

window.addEventListener('scroll', checkVisibility);
window.addEventListener('DOMContentLoaded', initialize);

document.getElementById('project-nav').addEventListener('mouseleave', closeNav);
document.getElementById('logo').addEventListener('mouseenter', openNav);
// document.getElementById('nav-side-closebtn').addEventListener('click', closeNav);



/* -------------------- enlarging images --------------------  */
function addingEnlarging() {
  const images = document.querySelectorAll('.enlargeImageAbility');


  function handleImageClick(event) {
    const image = event.currentTarget;


    const isEnlarged = image.classList.contains('enlarged');


    if (!isEnlarged) {
      image.classList.add('enlarged');
    } else {
      image.classList.remove('enlarged');
    }
  }


  images.forEach(image => {
    image.addEventListener('click', handleImageClick);
  });


  document.addEventListener('click', function (event) {
    images.forEach(image => {
      if (!image.contains(event.target)) {
        image.classList.remove('enlarged');
      }
    });
  });

}


/* ---------- card script --------- */

function addCardFunctionality() {
  document.querySelectorAll('.card').forEach(function (card) {
    card.addEventListener('mouseenter', function (event) {
      const rect = card.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const w = card.offsetWidth;
      const h = card.offsetHeight;
      let direction = '';
      const slope = h / w;
      if (y < slope * x && y < -slope * x + h) {
        direction = 'top';
      } else if (y < slope * x && y > -slope * x + h) {
        direction = 'right';
      } else if (y > slope * x && y < -slope * x + h) {
        direction = 'left';
      } else {
        direction = 'bottom';
      }
      const info = card.querySelector('.info');
      info.style.opacity = 1;
      info.style.transform = 'none';
      card.setAttribute('data-direction', direction);
    });

    card.addEventListener('mouseleave', function (event) {
      const rect = card.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const w = card.offsetWidth;
      const h = card.offsetHeight;
      let direction = '';
      const slope = h / w;
      if (y < slope * x && y < -slope * x + h) {
        direction = 'top';
      } else if (y < slope * x && y > -slope * x + h) {
        direction = 'right';
      } else if (y > slope * x && y < -slope * x + h) {
        direction = 'left';
      } else {
        direction = 'bottom';
      }
      const info = card.querySelector('.info');
      info.style.opacity = 0;
      if (direction === 'top') {
        info.style.transform = 'translateY(-100%)';
      } else if (direction === 'right') {
        info.style.transform = 'translateX(100%)';
      } else if (direction === 'left') {
        info.style.transform = 'translateX(-100%)';
      } else {
        info.style.transform = 'translateY(100%)';
      }
    });
  });
}

