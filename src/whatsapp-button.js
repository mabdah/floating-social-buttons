/**
 * Initialize WhatsApp Button with styles and logo
 * @param {string} buttonId - The ID of the button element.
 * @param {string} phoneNumber - WhatsApp phone number (international format without + or leading zeros).
 * @param {string} message - Pre-filled message for WhatsApp.
 */
function initializeWhatsAppButton(buttonId, phoneNumber, message = '') {
    const whatsappButton = document.getElementById(buttonId);
    if (!whatsappButton) {
        console.error(`Button with ID "${buttonId}" not found!`);
        return;
    }

    // Dynamically add Font Awesome stylesheet to the page
    const img = document.createElement('img');
    img.src = "https://cdn-icons-png.flaticon.com/512/174/174879.png"
    document.head.appendChild(img);

    // Add styles directly to the button
    // whatsappButton.style.padding = '10px 20px';
    whatsappButton.style.backgroundColor = '#ffffff';  // WhatsApp green color
    whatsappButton.style.color = '#fff';
    whatsappButton.style.border = 'none';
    // whatsappButton.style.borderRadius = '5px';
    // whatsappButton.style.fontSize = '5px';
    whatsappButton.style.cursor = 'pointer';
    // whatsappButton.style.display = 'flex';
    // whatsappButton.style.alignItems = 'center';  // Align logo and text horizontally
    // whatsappButton.style.fontWeight = 'bold';
    img.style.width = "38px"

    // Create WhatsApp logo element using Font Awesome
    // const logo = document.createElement('i');
    // logo.classList.add('fab', 'fa-whatsapp');
    // logo.style.marginRight = '10px';  // Space between logo and text
    // logo.style.fontSize = '20px';  // Adjust size of the logo

    // Add logo to the button
    whatsappButton.insertBefore(img, whatsappButton.firstChild);

    // Construct the WhatsApp URL
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    // Add click functionality
    whatsappButton.onclick = function () {
        window.open(whatsappURL, '_blank');
    };
}

export default initializeWhatsAppButton;
