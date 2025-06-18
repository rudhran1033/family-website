/**
* Template Name: Gp
* Template URL: https://bootstrapmade.com/gp-free-multipurpose-html-bootstrap-template/
* Updated: Aug 15 2024 with Bootstrap v5.3.3
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

(function () {
  "use strict";

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }

  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);

  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
  }
  if (mobileNavToggleBtn) {
    mobileNavToggleBtn.addEventListener('click', mobileNavToogle);
  }

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function (e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);



  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Init isotope layout and filters
   */
  document.querySelectorAll('.isotope-layout').forEach(function (isotopeItem) {
    let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
    let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
    let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';

    let initIsotope;
    imagesLoaded(isotopeItem.querySelector('.isotope-container'), function () {
      initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
        itemSelector: '.isotope-item',
        layoutMode: layout,
        filter: filter,
        sortBy: sort
      });
    });

    isotopeItem.querySelectorAll('.isotope-filters li').forEach(function (filters) {
      filters.addEventListener('click', function () {
        isotopeItem.querySelector('.isotope-filters .filter-active').classList.remove('filter-active');
        this.classList.add('filter-active');
        initIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        if (typeof aosInit === 'function') {
          aosInit();
        }
      }, false);
    });

  });

  /**
   * Initiate Pure Counter
   */
  new PureCounter();

  /**
   * Correct scrolling position upon page load for URLs containing hash links.
   */
  window.addEventListener('load', function (e) {
    if (window.location.hash) {
      if (document.querySelector(window.location.hash)) {
        setTimeout(() => {
          let section = document.querySelector(window.location.hash);
          let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
          window.scrollTo({
            top: section.offsetTop - parseInt(scrollMarginTop),
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  });

  /**
   * Navmenu Scrollspy
   */
  let navmenulinks = document.querySelectorAll('.navmenu a');

  function navmenuScrollspy() {
    navmenulinks.forEach(navmenulink => {
      if (!navmenulink.hash) return;
      let section = document.querySelector(navmenulink.hash);
      if (!section) return;
      let position = window.scrollY + 200;
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
        navmenulink.classList.add('active');
      } else {
        navmenulink.classList.remove('active');
      }
    })
  }
  window.addEventListener('load', navmenuScrollspy);
  document.addEventListener('scroll', navmenuScrollspy);


  let next = document.querySelector('.next')
  let prev = document.querySelector('.prev')
  let slide = document.querySelector('.slide1')


  next.addEventListener('click', function () {
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide1').appendChild(items[0])
  })

  prev.addEventListener('click', function () {
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide1').prepend(items[items.length - 1]) // here the length of items = 6
  })



  const nodes = [].slice.call(document.querySelectorAll('li'), 0);
  const directions = { 0: 'top', 1: 'right', 2: 'bottom', 3: 'left' };
  const classNames = ['in', 'out'].map((p) => Object.values(directions).map((d) => `${p}-${d}`)).reduce((a, b) => a.concat(b));

  const getDirectionKey = (ev, node) => {
    const { width, height, top, left } = node.getBoundingClientRect();
    const l = ev.pageX - (left + window.pageXOffset);
    const t = ev.pageY - (top + window.pageYOffset);
    const x = (l - (width / 2) * (width > height ? (height / width) : 1));
    const y = (t - (height / 2) * (height > width ? (width / height) : 1));
    return Math.round(Math.atan2(y, x) / 1.57079633 + 5) % 4;
  }

  class Item {
    constructor(element) {
      this.element = element;
      this.element.addEventListener('mouseover', (ev) => this.update(ev, 'in'));
      this.element.addEventListener('mouseout', (ev) => this.update(ev, 'out'));
    }

    update(ev, prefix) {
      this.element.classList.remove(...classNames);
      this.element.classList.add(`${prefix}-${directions[getDirectionKey(ev, this.element)]}`);
    }
  }

  nodes.forEach(node => new Item(node));
  var swiper = new Swiper(".swiper", {
    effect: "cards",
    grabCursor: true,
    initialSlide: 2,
    speed: 500,
    loop: true,
    rotate: true,
    mousewheel: {
      invert: false,
    },
  });


  var swiper = new Swiper(".swiper-container", {
    effect: "coverflow",
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 20,
      stretch: 0,
      depth: 350,
      modifier: 1,
      slideShadows: true
    },
    pagination: {
      el: ".swiper-pagination"
    }
  });


})();
$(".option").hover(function () {
  $(".option").removeClass("active");
  $(this).addClass("active");
});


const track = document.getElementById('carouselTrack');
const cards = track.querySelectorAll('.profile-card');
const cardWidth = 300; // width + margin
const visibleCards = 1;

let currentSlide = 0;
const totalSlides = Math.ceil(cards.length / visibleCards);

function scrollCarousel(direction) {
  currentSlide += direction;

  if (currentSlide < 0) currentSlide = 0;
  if (currentSlide >= totalSlides) currentSlide = totalSlides - 1;

  const scrollAmount = currentSlide * cardWidth * visibleCards;
  track.style.transform = `translateX(-${scrollAmount}px)`;
}

window.addEventListener('resize', () => {
  scrollCarousel(0); // Reset position on resize
});





const startSlideShow = () => {
  slideInterval = setInterval(() => {
    currentSlide = (currentSlide % totalSlides) + 1;
    const nextSlide = document.querySelector(`#slide_${currentSlide}`);
    if (nextSlide) nextSlide.checked = true;
  }, 2000);
};

const stopSlideShow = () => {
  clearInterval(slideInterval);
};

const toggleSlideShow = (isRunning) => {
  isRunning ? startSlideShow() : stopSlideShow();
};

const autoSlideShow = (checkbox) => {
  toggleSlideShow(checkbox.checked);
};

const onSlideChange = (button) => {
  currentSlide = parseInt(button.id.substring(6), 10);
  const playCheckbox = document.querySelector("#play");

  if (playCheckbox?.checked) {
    stopSlideShow();
    playCheckbox.checked = false;

    // Force reflow to ensure the change is registered
    void playCheckbox.offsetWidth;

    playCheckbox.checked = true;
    startSlideShow();
  }
};


$(function () {
  $('.popup-youtube, .popup-vimeo').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false
  });
});

$(".box").click(function () {
  $(".box").removeClass("active1");
  $(this).addClass("active1");
});


