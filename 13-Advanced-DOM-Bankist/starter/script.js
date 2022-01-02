'use strict';

//* //////////////////////////////////////////////////

// SELECTORS
// Nav Selectors
const navBar = document.querySelector('.nav');
const navLinks = document.querySelector('.nav__links');
const navLink = document.querySelectorAll('.nav__link');
const section1 = document.querySelector('#section--1');
// Modal window selectors
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const header = document.querySelector('header');
// Scroll Button Selector
const btnScrollTo = document.querySelector('.btn--scroll-to');
// Operations Selectors
const opsTabs = document.querySelectorAll('.operations__tab');
const opsTabsContainer = document.querySelector('.operations__tab-container');
const opsTabsContent = document.querySelectorAll('.operations__content');
//* //////////////////////////////////////////////////////

// Modal Window
const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//* //////////////////////////////////////////////////////

// Button Scrolling
btnScrollTo.addEventListener('click', function (e) {
  e.preventDefault;
  const s1coords = section1.getBoundingClientRect();
  //scrolling old school way
  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset
  // );
  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });
  // Modern Way Scroll
  section1.scrollIntoView({ behavior: 'smooth' });
});

// Page Navigation

navLinks.addEventListener('click', function (e) {
  e.preventDefault();
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

// Sticky Navigation
window.addEventListener('scroll', function (e) {
  console.log(e);
});

// Tabbed Component
opsTabsContainer.addEventListener('click', function (e) {
  e.preventDefault();
  const clicked = e.target.closest('.operations__tab');
  // Guard Clause
  if (!clicked) return;

  //Remove Active Classes
  opsTabs.forEach(t => t.classList.remove('operations__tab--active'));
  opsTabsContent.forEach(cont =>
    cont.classList.remove('operations__content--active')
  );

  ////Add Active Classes

  //Tab
  clicked.classList.add('operations__tab--active');

  //Content Area

  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});
// Nav Menu Fade

const handleHover = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};
// Passing value for "this" into Handler
navLinks.addEventListener('mouseover', handleHover.bind(0.5));
navLinks.addEventListener('mouseout', handleHover.bind(1));
//* ///////////////////////////////////////////////////////////////
//* ///////////////////////////////////////////////////////////////
//* ///////////////////////////////////////////////////////////////
//* ///////////////////////////////////////////////////////////////

// // Cookie Message
// const message = document.createElement('div');
// message.classList.add('cookie-message');
// message.innerHTML =
//   'We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';
// header.append(message);

// // Remove cookie message
// document
//   .querySelector('.btn--close-cookie')
//   .addEventListener('click', function () {
//     message.remove();
//   });

// // Styles
// message.style.backgroundColor = '#37383d';
// message.style.width = '100vw';
// console.log(getComputedStyle(message).color);
// message.style.height =
//   Number.parseFloat(getComputedStyle(message).height) + 30 + 'px';
// console.log(getComputedStyle(message).height);

// // document.documentElement.style.setProperty('--color-primary', 'orangered');

// // Attributes
// const log = document.querySelector('.nav__logo');

// //! START SECTION 13: Advanced DOM and Events
// //! Selecting, Creating, and Deleting Elements
// //! Styles, Attributes and Classes
// //! Implementing Smooth Scrolling

// //! Types of Events and Event Handlers
// //! Bubbling and Capturing

// /*
// 1. Capturing Phase -  Event goes from root all the way down the DOM tree
//     until reaching target element

// 2. Target Phase - Event triggers at eventlistener target

// 3. Bubbling Phase - The event echos/bubbles up through entire DOM tree
//     until it reaches root.

// Therefore it is the same as triggering the event in each of the parent nodes.
// This can also be stated as propagating.
// */

// //! Event Propagation in Practice

// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min + 1) + min);
// const randomColor = () =>
//   `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)},${randomInt(0, 255)})`;
// console.log(randomColor(0, 255));

// navBar.addEventListener('click', function (e) {});

// navLink.addEventListener('click', function (e) {});

// navLinks.addEventListener('click', function (e) {});

// //! Event Delegation: Implementing Page Navigation
//! DOM Traversing

// const h1 = document.querySelector('h1');

// // Going Downwards: child   //! This works no matter how deep
// console.log(h1.querySelectorAll('.highlight'));
// console.log(h1.childNodes);
// console.log(h1.children); // Live collection

// // h1.firstElementChild.style.color = 'white';
// // h1.lastElementChild.style.color = 'orangered';

// // Going upwards: Parent

// console.log(h1.parentNode); // header__title
// console.log(h1.parentElement); // Same as above ibn this instance

// h1.closest('.header').style.background = 'var(--gradient-secondary';
//h1.closest('h1').style.background = 'var(--gradient-primary';

// Going Sideways: Siblings  //! You can only select previous and next siblings

//elements
// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);
// //everything
// console.log(h1.previousSibling);
// console.log(h1.nextSibling);

// console.log(h1.parentElement.children); // This gives all siblings including itself

// [...h1.parentElement.children].forEach(function (el) {
//   if (el !== h1) {
//     // This is how you can exclude the h1 (element you called children on)
//     el.style.transform = 'scale(0.5)';
//   }
// });

//! Building a Tabbed Component
//! Passing Arguments to Event Handlers
//! Implementing a Sticky Navigation: The Scroll Event
//! The Intersection Observer API
