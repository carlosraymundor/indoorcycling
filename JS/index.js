const ipad = window.matchMedia('screen and (min-width: 320px)');

const menu = document.querySelector('.menu');
const burgerButton = document.querySelector('#burger-menu');
const closeMenu = document.querySelector('.menu-close-img');    

const linkReserve = document.querySelector('.link-reserve');
const linkBuySession = document.querySelector('.link-buySession');
const linkWeAre = document.querySelector('.link-weAre');
const linkCoaches = document.querySelector('.link-coaches');
const linkContact = document.querySelector('.link-contact');

const nextClasses = document.querySelector('.next-classes-title');
const finishedClasses = document.querySelector('.finished-classes-title');
const canceledClasses = document.querySelector('.canceled-classes-title');

const tableNext = document.querySelector('.next-classes-table');
const tableFinished = document.querySelector('.finished-classes-table');
const tableCanceled = document.querySelector('.canceled-classes-table');

// const plans = document.querySelector('.plan-click');
// const planInfo = document.querySelector('.plan-info-wrapper');
// const plans = document.querySelector('.plan-click');

// const password = document.querySelector(".register-input-password"), confirm_password = document.querySelector("register-input-password-confirm");

ipad.addListener(validation);



function validation(event) {
  if (event.matches) {
    // plans.addEventListener('click', showPlans);
    burgerButton.addEventListener('click', hideShow);
    closeMenu.addEventListener('click', hideShow);
    linkReserve.addEventListener('click', hideShow);
    linkBuySession.addEventListener('click', hideShow);
    linkWeAre.addEventListener('click', hideShow);
    linkCoaches.addEventListener('click', hideShow);
    linkContact.addEventListener('click', hideShow);
    nextClasses.addEventListener('click', optNextActive);
    finishedClasses.addEventListener('click', optFinishedActive);
    canceledClasses.addEventListener('click', optCanceledActive);
  } else {
    plans.addEventListener('click', showPlans);
    burgerButton.removeEventListener('click', hideShow);
    closeMenu.removeEventListener('click', hideShow);
    nextClasses.removeEventListener('click', optNextActive);
    finishedClasses.removeEventListener('click', optFinishedActive);
    canceledClasses.removeEventListener('click', optCanceledActive);
  }
}

validation(ipad);

function hideShow() {
  if (menu.classList.contains('is-active')) {
    menu.classList.remove('is-active');    
  } else {
    menu.classList.add('is-active');
  }
}

function optNextActive() {
  nextClasses.classList.add('is-active');
  finishedClasses.classList.remove('is-active');
  canceledClasses.classList.remove('is-active');
  tableNext.classList.add('is-active');
  tableFinished.classList.remove('is-active');
  tableCanceled.classList.remove('is-active');
}

function optFinishedActive() {
  nextClasses.classList.remove('is-active');
  finishedClasses.classList.add('is-active');
  canceledClasses.classList.remove('is-active');
  tableNext.classList.remove('is-active');
  tableFinished.classList.add('is-active');
  tableCanceled.classList.remove('is-active');
}

function optCanceledActive() {
  nextClasses.classList.remove('is-active');
  finishedClasses.classList.remove('is-active');
  canceledClasses.classList.add('is-active');
  tableNext.classList.remove('is-active');
  tableFinished.classList.remove('is-active');
  tableCanceled.classList.add('is-active');
}

// function showPlans() {
//   if (planInfo.style.display === 'none') {
//     planInfo.style.display = 'block'; 
//   } else {
//     planInfo.style.display = 'none';
//   }
// }

