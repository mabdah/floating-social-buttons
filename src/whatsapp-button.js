
export function initializeWhatsAppButton(buttonId, phoneNumber, message = '') {
    const whatsappButton = document.getElementById(buttonId);
    if (!whatsappButton) {
        console.error(`Button with ID "${buttonId}" not found!`);
        return;
    }

    const img = document.createElement('img');
    img.src = "https://freepnglogo.com/images/all_img/1716574719whatsapp-logo-transparent.png"
    whatsappButton.style.color = '#fff';
    whatsappButton.style.border = 'none';
    whatsappButton.style.cursor = 'pointer';
    img.style.width = "38px"

    // Add logo to the button
    whatsappButton.insertBefore(img, whatsappButton.firstChild);

    // Construct the WhatsApp URL
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    // Add click functionality
    whatsappButton.onclick = function () {
        window.open(whatsappURL, '_blank');
    };
}
export function initializeMessengerButton(buttonId, pageName, message = "") {
    const messengerButton = document.getElementById(buttonId)
    if (!messengerButton) {
        console.error(`Button with ID "${buttonId}" not found!`);
        return;
    }
    const img = document.createElement('img')
    img.src = "https://1000logos.net/wp-content/uploads/2021/11/Messenger-Logo-500x281.png"
    messengerButton.style.color = '#fff';
    messengerButton.style.border = 'none';
    messengerButton.style.cursor = 'pointer';
    img.style.width = "58px"

    messengerButton.insertBefore(img, messengerButton.firstChild);

    const messengerURL = `https://m.me/${pageName}?text=${encodeURIComponent(message)}`;

    // Add click functionality
    messengerButton.onclick = function () {
        window.open(messengerURL, '_blank');
    };


}

