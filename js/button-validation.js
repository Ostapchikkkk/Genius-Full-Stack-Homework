function checkInputs() {
    const name = document.getElementById("form-name").value.trim();
    const phone = document.getElementById("form-phone").value.trim();
    const email = document.getElementById("form-email").value.trim();
    const button = document.getElementById("form-button");

    // Регулярний вираз для імені (два слова, розділені пробілом)
    const nameRegex = /^[A-Za-zА-Яа-яЁёІіЇїЄє]+(?:\s[A-Za-zА-Яа-яЁёІіЇїЄє]+)$/;

    // Регулярний вираз для номера за міжнародним форматом (+380 та 9 цифр)
    const phoneRegex = /^\+380\d{9}$/;

    // Регулярний вираз для електронної пошти
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Перевіряємо всі умови
    if (nameRegex.test(name) && phoneRegex.test(phone) && emailRegex.test(email)) {
        button.disabled = false;
    } else {
        button.disabled = true;
    }

    console.log("Name valid:", nameRegex.test(name), "Phone valid:", phoneRegex.test(phone), "Email valid:", emailRegex.test(email));
}
