function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.bottom >= 0
    );
  }

  function checkVisibility() {
    const img = document.getElementById('floatImage');
    if (isInViewport(img)) {
      img.classList.add('visible');
    } else {
      img.classList.remove('visible');
    }
  }

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


  window.addEventListener('scroll', checkVisibility);

  // Check on initial load
  window.addEventListener('DOMContentLoaded', checkVisibility);

  // Card script
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