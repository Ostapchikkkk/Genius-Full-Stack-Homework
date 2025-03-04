const name = document.getElementById("contact-form-name");
const phone = document.getElementById("contact-form-phone");
const email = document.getElementById("contact-form-email");


// NAME
name.addEventListener("focus", function () {
  if (this.value === "Введіть ваше ім'я") {
    this.value = "";
  }
});

name.addEventListener("blur", function () {
  if (this.value === "") {
    this.value = "Введіть ваше ім'я";
  }
});


// PHONE
phone.addEventListener("focus", function () {
    if (this.value === "Ваш номер телефону") {
      this.value = "";
    }
});
  
phone.addEventListener("blur", function () {
    if (this.value === "") {
    this.value = "Ваш номер телефону";
    }
});


// EMAIL
email.addEventListener("focus", function () {
    if (this.value === "Ваша електронна пошта") {
      this.value = "";
    }
});
  
email.addEventListener("blur", function () {
    if (this.value === "") {
    this.value = "Ваша електронна пошта";
    }
});