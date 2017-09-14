document.addEventListener("DOMContentLoaded", function(){

  var slideIndex = 0;
  showSlides();

  function showSlides() {
      var i;
      var slides = document.getElementsByClassName("mySlides");
      for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none"; 
      }
      slideIndex++;
      if (slideIndex > slides.length) {slideIndex = 1} 
      slides[slideIndex-1].style.display = "block"; 
      setTimeout(showSlides, 3500); // Change image every 2 seconds
  }



  function userInfo(){
    'use strict';

    let fullname = document.getElementById("fullname_input");
    let email = document.getElementById("email_input");
    let letters = /^[A-Za-z]+$/;
    var emailVal = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    if(fullname.value.match(letters) && email.value.match(emailVal)){
      console.log("hello");
    }
  }

  //Hides Form

  function formHide(){
    let elForm = document.getElementById("form");
    let elPayment = document.getElementById("payment");
    elForm.style.display = "none";
    elPayment.style.display = "block";

  }

  //When user clicks button, displays the fullname/email and displays the content of payment

  document.getElementById("next").addEventListener("click", function() {
    event.preventDefault();
    userInfo();
    formHide();
  });

  document.getElementById("one_d").addEventListener("click", function(){
    document.getElementById("donation_value").innerText = "$1.00";

  });

  document.getElementById("five_d").addEventListener("click", function(){
    document.getElementById("donation_value").innerText = "$5.00";

  });

  document.getElementById("ten_d").addEventListener("click", function(){
    document.getElementById("donation_value").innerText = "$10.00";

  });

  document.getElementById("twentyfive_d").addEventListener("click", function(){
    document.getElementById("donation_value").innerText = "$25.00";

  });

  document.getElementById("fifty_d").addEventListener("click", function(){
    document.getElementById("donation_value").innerText = "$50.00";

  });

   document.getElementById("hun_d").addEventListener("click", function(){
    document.getElementById("donation_value").innerText = "$100.00";

  });

   document.getElementById("fivehun_d").addEventListener("click", function(){
    document.getElementById("donation_value").innerText = "$500.00";

  });

   document.getElementById("thous").addEventListener("click", function(){
    document.getElementById("donation_value").innerText = "$1,000.00";

  });

  function paymentShow(){
    let userPayment = document.getElementById("mastercard_form");
    let elPayment = document.getElementById("payment");
    elPayment.style.display = "none";
    userPayment.style.display = "block";
  }

  document.getElementById("mc").addEventListener("click", function(){
    paymentShow();
  });

});


