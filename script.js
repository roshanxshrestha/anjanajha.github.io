window.addEventListener("load", function () {
  /*--------------------- page loader-----------*/
  document.querySelector(".page-loader").classList.add("fade-out");
  setTimeout(function () {
    document.querySelector(".page-loader").style.display = "none";
  }, 600);
  /*------------------animation on scroll------------------------*/
  AOS.init({
    once: true,
  });
});

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 5000); // Change image every 3 seconds
}

window.onscroll = function () {
  document.getElementById("navbar").style.top = "0";
};

$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }
  });
  // typing animation script
  var typed = new Typed(".typing", {
    strings: [
      "Cloud-Native Data Engineer &amp; Product Strategist",
      "Building Scalable, Regulated, Real-Time Data Platforms",
    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });
  var typed = new Typed(".typing-2", {
    strings: ["Lead Data Engineer | Product Manager"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });
  // owl carousel script
  $(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplayTimeout: 7000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: false,
      },
    },
  });
  // animation on scroll
  AOS.init();
});
/*-----------------close nav when clicking on a  nav item------------*/
window.addEventListener(
  "hashchange",
  function () {
    window.history.replaceState(null, null, window.location.pathname);
  },
  false,
);
