'use strict';

///////////////////////////////////////
// Navigation Bar
const navBar = document.querySelector('.nav');
const navLinks = document.querySelector('.nav__links');
const navLink = document.querySelector('.nav__link');
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const header = document.querySelector('header');
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

// Cookie Message
const message = document.createElement('div');
message.classList.add('cookie-message');
message.innerHTML =
  'We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';
header.append(message);

// Remove cookie message
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    message.remove();
  });

// Styles
message.style.backgroundColor = '#37383d';
message.style.width = '100vw';
console.log(getComputedStyle(message).color);
message.style.height =
  Number.parseFloat(getComputedStyle(message).height) + 30 + 'px';
console.log(getComputedStyle(message).height);

// document.documentElement.style.setProperty('--color-primary', 'orangered');

// Attributes
const log = document.querySelector('.nav__logo');

//! START SECTION 13: Advanced DOM and Events
//! Selecting, Creating, and Deleting Elements
//! Styles, Attributes and Classes
//! Implementing Smooth Scrolling

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

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

//! Types of Events and Event Handlers
//! Bubbling and Capturing

/*
1. Capturing Phase -  Event goes from root all the way down the DOM tree
    until reaching target element

2. Target Phase - Event triggers at eventlistener target

3. Bubbling Phase - The event echos/bubbles up through entire DOM tree
    until it reaches root.

Therefore it is the same as triggering the event in each of the parent nodes.
This can also be stated as propagating.
*/

//! Event Propagation in Practice

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);
const randomColor = () =>
  `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)},${randomInt(0, 255)})`;
console.log(randomColor(0, 255));

navBar.addEventListener('click', function (e) {});

navLink.addEventListener('click', function (e) {});

navLinks.addEventListener('click', function (e) {});

//! Event Delegation: Implementing Page Navigation
