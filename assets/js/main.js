const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const preloader = $(".preloader");
const header = $(".header");
const itemNav = $$(".nav-items .item");
const itemNavMobile = $$(".nav-items-mobile .item");
const logo = $(".header-logo img");
const headerBtn = $(".header-btn");
const scrollTop = $(".scroll-top");
const FAQItem = $$(".FAQ-button-item");
const FAQOpen = $(".FAQ-Open");
const FAQClose = $(".FAQ-Close");
const OpenNavMobile = $(".OpenNavMobile");
const CloseNavMobile = $(".CloseNavMobile");
const navItemsMobile = $(".nav-items-mobile");

console.log(itemNav);
const App = {
  hendleEvents: function () {
    // Loading
    window.onload = function () {
      window.setTimeout(fadeout, 1000);
    };
    function fadeout() {
      preloader.style.opacity = "0";
      preloader.style.display = "none";
    }

    // Scroll
    window.onscroll = function () {
      const sticky = header.offsetTop;

      if (window.pageYOffset > sticky) {
        header.classList.add("scroll");
        logo.src = "./assets/img/logo/logo.svg";
        headerBtn.classList.add("active");
        scrollTop.style.display = "block";
      } else {
        header.classList.remove("scroll");
        logo.src = "./assets/img/logo/white-logo.svg";
        headerBtn.classList.remove("active");
        scrollTop.style.display = "none";
      }
    };
    FAQItem.forEach((e) => {
      e.addEventListener("click", function () {
        FAQItem.forEach((e) => e.classList.add("FAQ-Toggle"));
        this.classList.remove("FAQ-Toggle");
      });
    });

    itemNav.forEach((e) => {
      e.addEventListener("click", function () {
        itemNav.forEach((e) => e.classList.remove("active"));
        this.classList.add("active");
      });
    });

    itemNavMobile.forEach((e) => {
      e.addEventListener("click", function () {
        itemNavMobile.forEach((e) => e.classList.remove("active"));
        this.classList.add("active");
      });
    });

    OpenNavMobile.onclick = () => {
      OpenNavMobile.style.animation = "CloseIconNavMobile 0.4s linear";
      navItemsMobile.style.animation = "NavMobile 0.4s linear";
      OpenNavMobile.style.display = "none";
      CloseNavMobile.style.display = "block";
      navItemsMobile.style.display = "flex";
      navItemsMobile.style.opacity = "1";
    };

    CloseNavMobile.onclick = () => {
      CloseNavMobile.style.animation = "CloseIconNavMobile 0.4s linear";
      navItemsMobile.style.animation = "NavMobileClose 0.4s linear";
      OpenNavMobile.style.display = "block";
      CloseNavMobile.style.display = "none";
      navItemsMobile.style.opacity = "0";
    };
  },

  start: function () {
    this.hendleEvents();
  },
};

App.start();
