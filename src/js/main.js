import TabsManager from './tabs.js';
import ExpandableText from './expandable.js';
import OrderForm from './forms/order-form';

/** menu popup */
const $menuPopup = $('.menu-popup');

function slideToggleElement(element) {
  element.slideToggle(300, function () {
    $('body').toggleClass('body_pointer', element.is(':hidden'));
  });
  return false;
}

/** плавный переход по ссылкам */
//example from https://gnatkovsky.com.ua/yakorya-i-plavnyj-perexod-po-yakornym-ssylkam.html

function scrollTo(id_navigation) {
  $(id_navigation).on('click', 'a', function (event) {
    event.preventDefault();
    const id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1500);
    if (id_navigation === '#navigation-popup') {
      slideToggleElement($menuPopup);
    }
  });
}

$(function () {
  scrollTo('#navigation-popup');
  scrollTo('#navigation-top');
  scrollTo('#navigation-footer');


  /** slick slider */
  $('.carousel').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 200,
    prevArrow: document.getElementById('slick-prev'),
    nextArrow: document.getElementById('slick-next'),
    responsive: [
      {
        breakpoint: 1110,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  /** menu popup */
  $('.navigation-humb, .menu-popup__close').on('click', function () {
    slideToggleElement($menuPopup);
    return false;
  });

  $(document).on('click', function (e) {
    if (!$(e.target).closest('.menu-popup').length) {
      $('body').removeClass('body_pointer');
      $menuPopup.slideUp(300);
    }
  });

  /** Contact form text */
  /*const form = document.getElementById('contact-form');

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    const { name, phone } = form.elements;
    console.log({
      name: name.value,
      phone: phone.value
    });
  });*/

  /** Expandable text */
  const textElems = document.querySelectorAll('.expandable-text');

  for (const el of textElems) {
    new ExpandableText(el, 395);
  }

  /** Price Tabs */
  const tabsElem = document.getElementById('price');
  new TabsManager(tabsElem);

  new OrderForm('order-form');
  new OrderForm('order-form-short');
});