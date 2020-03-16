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

const bike = document.querySelector('.room-place-link');
const roomOverlay = document.querySelector('.overlay-bike');
const cancelBike = document.querySelector('.cancel');

const menuUser = document.querySelector(".menu-user-container");
const iconUser = document.getElementById("icon-user");

Conekta.setPublicKey('key_KJysdbf6PotS2ut2');

var conektaSuccessResponseHandler = function(token) {
  // var $form = $("#card-form");

  $("#conektaTokenId").val(token.id);

  //Inserta el token_id en la forma para que se envíe al servidor
  // $form.append($('<input type="hidden" name="conektaTokenId" id="conektaTokenId">').val(token.id));
  // $form.get(0).submit(); //Hace submit
};

var conektaErrorResponseHandler = function(response) {
  var $form = $("#card-form");

  alert(response.message_to_purchaser);
  // $form.find(".card-errors").text(response.message_to_purchaser);
  // $form.find("button").prop("disabled", false);
};

$(document).ready(function() {
  $('#card-form').submit(function(e) {
    e.preventDefault();

    var $form = $("#card-form");

    Conekta.Token.create($form, conektaSuccessResponseHandler, conektaErrorResponseHandler);
  })
})

//jQuery para que genere el token después de dar click en submit
// $(function () {
//   $("#card-form").submit(function(event) {
//     var $form = $(this);
//     // Previene hacer submit más de una vez
//     $form.find("button").prop("disabled", true);
//     Conekta.Token.create($form, conektaSuccessResponseHandler, conektaErrorResponseHandler);
//     return false;
//   });
// });

ipad.addListener(validation);


if(bike) {
  bike.addEventListener('click', showDialog);
}

if(cancelBike) {
  cancelBike.addEventListener('click', showDialog);
}

if(iconUser) {
  iconUser.addEventListener('click', showUserMenu);
}

if(nextClasses) {
  nextClasses.addEventListener('click', optNextActive);
}

if(finishedClasses) {
  finishedClasses.addEventListener('click', optFinishedActive);
}

if(canceledClasses) {
  canceledClasses.addEventListener('click', optCanceledActive);
}

function validation(event) {
  if (event.matches) {
    burgerButton.addEventListener('click', hideShow);
    closeMenu.addEventListener('click', hideShow);
    linkReserve.addEventListener('click', hideShow);
    linkBuySession.addEventListener('click', hideShow);
    linkWeAre.addEventListener('click', hideShow);
    linkCoaches.addEventListener('click', hideShow);
    linkContact.addEventListener('click', hideShow);
  } else {
    burgerButton.removeEventListener('click', hideShow);
    closeMenu.removeEventListener('click', hideShow);
    linkReserve.removeEventListener('click', hideShow);
    linkBuySession.removeEventListener('click', hideShow);
    linkWeAre.removeEventListener('click', hideShow);
    linkCoaches.removeEventListener('click', hideShow);
    linkContact.removeEventListener('click', hideShow);
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
      
function showUserMenu() {
  if (menuUser.classList.contains('is-active')) {
    menuUser.classList.remove('is-active');    
  } else {
    menuUser.classList.add('is-active');
  }
}

function showDialog() {
  if (roomOverlay.classList.contains('is-active')) {
    roomOverlay.classList.remove('is-active');    
  } else {
    roomOverlay.classList.add('is-active');
  }
}