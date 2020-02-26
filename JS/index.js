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
    nextClasses.addEventListener('click', optActive);
    finishedClasses.addEventListener('click', opt2Active);
    canceledClasses.addEventListener('click', opt3Active);
  } else {
    plans.addEventListener('click', showPlans);
    burgerButton.removeEventListener('click', hideShow);
    closeMenu.removeEventListener('click', hideShow);
    nextClasses.removeEventListener('click', optActive);
    finishedClasses.removeEventListener('click', opt2Active);
    canceledClasses.removeEventListener('click', opt3Active);
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

function optActive() {
  nextClasses.classList.add('is-active');
  finishedClasses.classList.remove('is-active');
  canceledClasses.classList.remove('is-active');
}

function opt2Active() {
  nextClasses.classList.remove('is-active');
  finishedClasses.classList.add('is-active');
  canceledClasses.classList.remove('is-active');
}

function opt3Active() {
  nextClasses.classList.remove('is-active');
  finishedClasses.classList.remove('is-active');
  canceledClasses.classList.add('is-active');
}

// function showPlans() {
//   if (planInfo.style.display === 'none') {
//     planInfo.style.display = 'block'; 
//   } else {
//     planInfo.style.display = 'none';
//   }
// }

