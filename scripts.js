const logo = document.querySelector('.logo-header');

window.addEventListener("scroll", function() {
    var rect = logo.getBoundingClientRect();
    if (rect.top < 0) {
      logo.style.filter = 'blur(1px)';
    } else {
      logo.style.filter = 'blur(0px)';
    }
  });


