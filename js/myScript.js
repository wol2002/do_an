// Swiper
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 4.5,
  spaceBetween: 0,
  loopFillGroupWithBlank: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },  
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
const swiperAboutus = new Swiper('.swiper-container-aboutus', {
  loopFillGroupWithBlank: true,
  loop: true,
  pagination: {
    el: ".swiper-aboutus-pagination",
    clickable: true,
  },  
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-aboutus-next',
    prevEl: '.swiper-aboutus-prev',
  },
});
const swiperFooter = new Swiper('.swiper-container-footer', {
  slidesPerView: 5,
  loopFillGroupWithBlank: true,
  loop: true,
  pagination: {
    el: ".swiper-footer-pagination",
    clickable: true,
  },  
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-footer-next',
    prevEl: '.swiper-footer-prev',
  },
});

const swiperHotel = new Swiper('.swiper-container-hotel', {
  slidesPerView: 2,
  // slidesPerGroup: 1,
  loop: true,
  centeredSlides: true,
  slideToClickedSlide: true,  
  navigation: {
    nextEl: '.swiper-hotel-next',
    prevEl: '.swiper-hotel-prev',
  },
  breakpoints: {
    1280: {
      // slidesPerView: '2',
      // centeredSlides: false,
      // slidesPerView: 2
    },
    960: {
      // slidesPerView: '1',
      centeredSlides: false,
      slidesPerView: 1,
      spaceBetween: 0
    }
  }  
});

// END Swiper

//Scroll top
var mybutton = document.getElementById("show-scroll-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.opacity = "1";
  } else {  
    mybutton.style.opacity = "0";
  }
}
$(".scroll-top-button").click(function () {
   $("html, body").animate({scrollTop: 0}, 1000);
});
//END Scroll top

// Contact Witb Us
$(document).ready(function(){

    $(function(){
        var chatWithUS = $(".chat-witb-us")[0];
        var b = document.createElement('button');
        $(b).addClass("close-enquiry")
            .html("Close")
            .appendTo(chatWithUS)
            .click(function(){
                $(".chat-witb-us").css({
                                      left: "-100%",
                                      transition: "2s"
                                    });
        });

        var d = document.createElement('div');
        $(d).addClass("wrap-enquiry").appendTo(chatWithUS);
    });

    $(function(){
          var closeEnquiry = $(".close-enquiry")[0];
          var wic = document.createElement('div');
          $(wic).addClass("wrap-icon-close")
                .appendTo(closeEnquiry);

           // icon x Closs  
          var i = document.createElement('i');
          var wrapIconClose = $(".wrap-icon-close")[0];
          $(i).addClass("fas fa-times").appendTo(wrapIconClose); 
    });

    $(function(){
          var wrapEnquiry = $(".wrap-enquiry")[0];

          // title
          var h3 = document.createElement('h3');
          $(h3).addClass("enquiry-title")
               .css({
                  transform: "translate(0px, 0%)",
                  opacity: 1
               })
               .html("Have a chat with our team")
               .appendTo(wrapEnquiry);

          // Section
          var s = document.createElement('section');
          $(s).addClass("contact-details")
              .css({
                  transform: "translate(0px, 0%)",
                  opacity: 1
              })
              .append([
                  '<p><a href="tel:999999999"> E-mail: abcvasdasd@gmail.com </p></a>',
                  '<p><a href="tel:999999999"> Facebook: facebook.comacbc.7301/ </p></a>',
                  '<p><a href="tel:999999999"> Hotline: 0932 999 666 </p></a>',
                  '<p><a href="tel:999999999"> Address: 110 Tran Phu - ha Dong - Ha Noi </p></a>',
              ])
              .appendTo(wrapEnquiry);

          // subtitle    
          var p = document.createElement('p');
          $(p).addClass("subtitle")
              .css({
                transform: "translate(0px, 0%)", 
                opacity: 1
              })
              .html("Or fill in the form below and we'll be in touch")
              .appendTo(wrapEnquiry);

          // wrap from
          var d = document.createElement('div');
          $(d).addClass("wrap-form")
              .css({
                 transform: "translate(0px, 0%)", 
                 opacity: 1
              })
              .append([
                  $('<div/>',{ "class": "wrap-form-input" })
                    .append([
                        $('<div/>',{ "class": "form-anchor" }),
                        $('<form/>',{ "id": "form-contact",
                                      "medthod": "POST",
                                      "action": "action.js",
                                      "onsubmit": "return false"
                          })
                          .append([
                              $('<div/>',{ "class": "form-body" })
                                  .append([
                                      $('<ul/>',{ "class": "form_fields" })
                                          .append([
                                              $('<li/>',{ "class": "field" })
                                                  .append([
                                                      $('<div/>',{ "class": "input_container" })
                                                          .append([
                                                              $('<input/>',{ 
                                                                  "id": "contact_firstName",
                                                                  "class": "large",
                                                                  "name": "input_1",
                                                                  "placeholder": "First Name",
                                                                  "type": "text",
                                                                  "tabindex": 1  
                                                              })
                                                          ])
                                                  ]),
                                              $('<li/>',{ "class": "field" })
                                                  .append([
                                                      $('<div/>',{ "class": "input_container" })
                                                          .append([
                                                              $('<input/>',{
                                                                  "id": "contact_lastName", 
                                                                  "class": "large",
                                                                  "name": "input_2",
                                                                  "placeholder": "Last Name",
                                                                  "type": "text",
                                                                  "tabindex": 2  
                                                              })
                                                          ])
                                                  ]),
                                              $('<li/>',{ "class": "field" })
                                                  .append([
                                                      $('<div/>',{ "class": "input_container" })
                                                          .append([
                                                              $('<input/>',{
                                                                  "id": "contact_email",
                                                                  "class": "large",
                                                                  "name": "input_3",
                                                                  "placeholder": "Email Name",
                                                                  "type": "email",
                                                                  "tabindex": 3 
                                                              })
                                                          ])
                                                  ]),
                                              $('<li/>',{ "class": "field" })
                                                  .append([
                                                      $('<div/>',{ "class": "input_container" })
                                                          .append([
                                                              $('<input/>',{ 
                                                                  "id": "contact_phone",
                                                                  "class": "large",
                                                                  "name": "input_4",
                                                                  "placeholder": "Phone",
                                                                  "type": "tel",
                                                                  "tabindex": 4 
                                                              }),
                                                              $('<span/>',{ 
                                                                    "id": "valid-msg",
                                                                    "class": "hide" 
                                                                  }),
                                                              $('<span/>',{ 
                                                                    "id": "error-msg",
                                                                    "class": "hide" 
                                                                  })
                                                          ])
                                                  ]),
                                              $('<li/>',{ "class": "field" })
                                                  .append([
                                                      $('<div/>',{ "class": "input_container" })
                                                          .append([
                                                              $('<textarea/>',{
                                                                  "id": "contact_note", 
                                                                  "class": "textarea medium",
                                                                  "name": "input_5",
                                                                  "placeholder": "Where would you like to go?",
                                                                  "rows": 10,
                                                                  "cols": 10,
                                                                  "tabindex": 5
                                                              })
                                                          ])
                                                  ]), 
                                              $('<li/>',{ "class": "field" })
                                                  .append([
                                                      $('<div/>',{ "class": "input_container input_container_consent" })
                                                          .append([
                                                              $('<input/>',{
                                                                  "id": "contact_checkbox_register",
                                                                  "class": "large",
                                                                  "name": "input_5",
                                                                  "type": "checkbox",
                                                                  "value": 1,
                                                                  "tabindex": 6
                                                              }),
                                                              $('<label/>',{ "class": "content_label", 
                                                                              "for": "input_6"
                                                              }).html("Sign up to receive travel inspiration, exclusive offers &amp; our latest news.")
                                                          ])
                                                  ]),                                                
                                          ])
                                  ])

                              ,
                              $('<div/>',{ "class": "form-footer" })
                                  .append([
                                      $('<input/>',{ 
                                          "class": "input-form-contact",
                                           "type": "submit",
                                           "value": "Submit",
                                           "name": "contactPost"
                                      }).click(
                                            function(){
                                                var   fields = {};
                                                      fields.firstName = document.getElementById('contact_firstName');
                                                      fields.lastName = document.getElementById('contact_lastName');
                                                      fields.email = document.getElementById('contact_email');
                                                      fields.phone = document.getElementById('contact_phone');
                                                      fields.note = document.getElementById('contact_note');
                                                      fields.regis = document.getElementById('contact_checkbox_register');
                                                //Kiểm tra xem giá trị trường có phải là một số không
                                                function isNotEmpty(value) {
                                                   if (value == null || typeof value == 'undefined' ) return false;
                                                   return (value.length > 0);
                                                }
                                                //Kiểm tra xem một chuỗi có phải là một email không
                                                function isEmail(email) {
                                                   let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
                                                   return regex.test(String(email).toLowerCase());
                                                }
                                                //Kiểm tra xem mật khẩu có hợp lệ không -- ít nhất phải có 5 kí tự trở lên
                                                function isNote(note) {
                                                   if (note.length > 5) {
                                                      return true;
                                                   }
                                                   return false
                                                }
                                                //Kiểm tra xem có phải là sđt việt nam hay ko
                                                // function isPhone(phone){
                                                //     let vnf_regex = /((09|03|07|08|05)+([0-9]{8})\b)/g;
                                                //     return vnf_regex.test(String(phone))
                                                // }
                                                //Kiểm tra đồng ý regis
                                                function isRegis(regis){
                                                    if (regis == null) return false;

                                                    if (regis.getAttribute("id") == "contact_checkbox_register" && regis.checked != false) {
                                                        return regis.value;
                                                    }
                                                    return false;
                                                }                          
                                                //Chức năng xác nhận trường
                                                function fieldValidation(field, validationFunction) {
                                                   if (field == null) return false;

                                                   let isFieldValid = validationFunction(field.value)
                                                   if (!isFieldValid) {
                                                      field.classList.add('placeholderRed');
                                                   } else {
                                                      field.classList.remove(('placeholderRed'));
                                                   }

                                                   return isFieldValid;
                                                }
                                                //Hàm isValid - kết hợp tất cả các kiểm tra
                                                function isValid() {
                                                   var valid = true;
                                                   
                                                   valid &= fieldValidation(fields.firstName, isNotEmpty);
                                                   valid &= fieldValidation(fields.lastName, isNotEmpty);
                                                   valid &= fieldValidation(fields.email, isEmail);                                           
                                                   valid &= fieldValidation(fields.phone, isNotEmpty);
                                                   valid &= fieldValidation(fields.note, isNote);
                                                   valid &= isRegis(fields.regis);

                                                   return valid;
                                                }
                                                class User {
                                                   constructor(firstName, lastName, email, phone, note, regis) {
                                                      this.firstName = firstName.value;
                                                      this.lastName = lastName.value;
                                                      this.email = email.value;
                                                      this.phone = phone.value;
                                                      this.note = note.value;
                                                      this.regis = regis.value;
                                                 }
                                                }
                                                if (isValid()) {
                                                  let usr = new User(fields.firstName, fields.lastName, fields.email, fields.phone, fields.note, fields.regis);
                                                  alert(`${usr.firstName} Thanks for registering`)
                                                }else{
                                                  alert("There was an error")
                                                }
                                            }
                                      )
                                  ])
                          ])
                    ])
              ])
              .appendTo(wrapEnquiry);
    });

    // Select phone country
    $(function(){
        var telInput = $("#contact_phone"),
            errorMsg = $("#error-msg"),
            validMsg = $("#valid-msg");   

        // initialise plugin
        telInput.intlTelInput({
            utilsScript:"https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/11.0.4/js/utils.js"
        });
    })

    $('button.speak-to-team').click(function(){
        $(".chat-witb-us").css({
                            left: "0%",
                            transition: "2s"
                          });
    });
});
