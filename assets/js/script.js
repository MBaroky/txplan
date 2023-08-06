(function () {
  "use strict"; // Start of use strict

  var mainNav = document.querySelector("#mainNav");

  if (mainNav) {
    var navbarCollapse = mainNav.querySelector(".navbar-collapse");

    if (navbarCollapse) {
      var collapse = new bootstrap.Collapse(navbarCollapse, {
        toggle: false,
      });

      var navbarItems = navbarCollapse.querySelectorAll("a");

      // Closes responsive menu when a scroll trigger link is clicked
      for (var item of navbarItems) {
        item.addEventListener("click", function (event) {
          collapse.hide();
        });
      }
    }

    // Collapse Navbar
    var collapseNavbar = function () {
      var scrollTop =
        window.pageYOffset !== undefined
          ? window.pageYOffset
          : (
              document.documentElement ||
              document.body.parentNode ||
              document.body
            ).scrollTop;

      if (scrollTop > 100) {
        mainNav.classList.add("navbar-shrink");
      } else {
        mainNav.classList.remove("navbar-shrink");
      }
    };
    // Collapse now if page is not at top
    collapseNavbar();
    // Collapse the navbar when page is scrolled
    document.addEventListener("scroll", collapseNavbar);
  }
  // rellax parallex
  var rellax = new Rellax(".rellax", {
    speed: -4,
    center: true,
  });
  const sectionHeight = document.getElementById("section-4");
  const getSectionHeight = () => {
    return document.getElementById("bullets").clientHeight;
  };
  window.addEventListener("resize", () => {
    sectionHeight.style.minHeight = getSectionHeight() + "px";
  });
  window.addEventListener("load", () => {
    sectionHeight.style.minHeight = getSectionHeight() + "px";
  });

  // set target for mouse event
  const target = document.getElementById("cover");

  // listening to mouse movement
  target.addEventListener("mousemove", parallax);

  // changing element accordingly
  function parallax(event) {
    // run only on desktop
    var hasTouchScreen = false;

    if ("maxTouchPoints" in navigator) {
      hasTouchScreen = navigator.maxTouchPoints > 0;
    }

    if (!hasTouchScreen) {
      setTimeout(() => {
        target.querySelectorAll(".mouse").forEach(shift => {
          const position = shift.getAttribute("value");
          const x = (window.innerWidth - event.pageX * position) / 90;
          const y =
            (window.innerHeight - event.pageY * position) / 90;

          shift.style.transform = `translateX(${x}px) translateY(${y}px)`;
        });
      }, 200);
    }
  }
})(); // End of use strict
