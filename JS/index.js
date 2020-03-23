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
// const canceledClasses = document.querySelector('.canceled-classes-title');

const tableNext = document.querySelector('.next-classes-table');
const tableFinished = document.querySelector('.finished-classes-table');
// const tableCanceled = document.querySelector('.canceled-classes-table');

const bike = document.querySelector('.room-place-link');
const roomOverlay = document.querySelector('.overlay-bike');
const cancelBike = document.querySelector('.cancel');

const menuUser = document.querySelector(".menu-user-container");
const iconUser = document.getElementById("icon-user");

const editPackage = document.querySelector(".package-edit");
const deletePackage = document.querySelector(".package-delet");
const saveChanges = document.querySelector(".package-save");
const cancelChanges = document.querySelector(".package-cancel");
const pTxtName = document.querySelector(".package-name-txt");
const pTxtTotal = document.querySelector(".package-amount-txt");
const pTxtExpiration = document.querySelector(".package-expiration-txt");
const pInputName = document.querySelector(".package-input-name");
const pInputTotal = document.querySelector(".package-input-total");
const pInputExpiration = document.querySelector(".package-input-expiration");

const formBasicData = document.getElementById('basicData-form');
const formCard = document.getElementById("form-CardData");
const formShowData = document.getElementById("form-PaymentData");
const security = document.querySelector(".security");

Conekta.setPublicKey('key_KJysdbf6PotS2ut2');

var conektaSuccessResponseHandler = function(token) {
  // var $form = $("#card-form");
  
  $("#conektaTokenId").val(token.id);

  document.getElementById('form-CardData').style.display = 'none';
    security.style.display = 'none';
    formShowData.style.display = 'block';
      
    var cardName = document.getElementById('name').value;
    var cardNumber = parseInt(document.getElementById('card').value);
    var userEmail = document.getElementById('userEmail').value;
    var cardCVC = parseInt(document.getElementById('cardCVC').value);
    var cardMonth = parseInt(document.getElementById('cardMonth').value);
    var cardYear = parseInt(document.getElementById('cardYear').value);
      
    document.getElementById('showName').innerText = cardName;
    document.getElementById('showCard').innerText = cardNumber;
    document.getElementById('showEmail').innerText = userEmail;
    document.getElementById('showCVC').innerText = cardCVC;
    document.getElementById('showMonth').innerText = cardMonth;
    document.getElementById('showYear').innerText = cardYear;


  
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

// if(canceledClasses) {
  //   canceledClasses.addEventListener('click', optCanceledActive);
  // }
  
  if(editPackage) {
    editPackage.addEventListener('click', showInputsPackage);
  }
  
  if(cancelChanges) {
    cancelChanges.addEventListener('click', hideInputsPackage);
  }
  
  if(formBasicData) {
    formBasicData.addEventListener('submit', (e) => {
      e.preventDefault();
      formCard.style.display = 'block';
      document.querySelector(".security").style.display = 'block';
      document.getElementById('form-BasicData').style.display = 'none';
    });
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
  // canceledClasses.classList.remove('is-active');
  tableNext.classList.add('is-active');
  tableFinished.classList.remove('is-active');
  // tableCanceled.classList.remove('is-active');
}

function optFinishedActive() {
  nextClasses.classList.remove('is-active');
  finishedClasses.classList.add('is-active');
  // canceledClasses.classList.remove('is-active');
  tableNext.classList.remove('is-active');
  tableFinished.classList.add('is-active');
  // tableCanceled.classList.remove('is-active');
}

// function optCanceledActive() {
  //   nextClasses.classList.remove('is-active');
  //   finishedClasses.classList.remove('is-active');
  //   canceledClasses.classList.add('is-active');
  //   tableNext.classList.remove('is-active');
  //   tableFinished.classList.remove('is-active');
  //   tableCanceled.classList.add('is-active');
  // }
  
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
  
  function showInputsPackage() {
    pTxtName.style.display = 'none';
    pTxtTotal.style.display = 'none';
    pTxtExpiration.style.display = 'none';
    pInputName.style.display = 'block';
    pInputName.placeholder = pTxtName.textContent;
    pInputTotal.style.display = 'block';
    pInputTotal.placeholder = pTxtTotal.textContent;
    pInputExpiration.style.display = 'block';
    pInputExpiration.placeholder = pTxtExpiration.textContent;
    editPackage.style.display = 'none';
    deletePackage.style.display = 'none';
    saveChanges.style.display = 'block';
    cancelChanges.style.display = 'block';
  }
  
  function hideInputsPackage() {
    pTxtName.style.display = 'block';
    pTxtTotal.style.display = 'block';
    pTxtExpiration.style.display = 'block';
    pInputName.style.display = 'none';
    pInputTotal.style.display = 'none';
    pInputExpiration.style.display = 'none';
    editPackage.style.display = 'block';
    deletePackage.style.display = 'block';
    saveChanges.style.display = 'none';
    cancelChanges.style.display = 'none';
  }