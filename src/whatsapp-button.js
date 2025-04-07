function createFloatingButton(buttonId, imgSrc, altText, url, bgColor) {
    // If already exists, don't create again
    if (document.getElementById(buttonId)) return;

    const wrapper = document.createElement("div");
    wrapper.id = buttonId;
    wrapper.style.position = "fixed";
    wrapper.style.bottom = "20px";
    wrapper.style.right = "20px";
    wrapper.style.zIndex = "9999";
    wrapper.style.backgroundColor = bgColor;
    wrapper.style.width = "60px";
    wrapper.style.height = "60px";
    wrapper.style.borderRadius = "50%";
    wrapper.style.boxShadow = "0 4px 8px rgba(0,0,0,0.2)";
    wrapper.style.display = "flex";
    wrapper.style.alignItems = "center";
    wrapper.style.justifyContent = "center";
    wrapper.style.cursor = "pointer";

    const img = document.createElement("img");
    img.src = imgSrc;
    img.alt = altText;
    img.style.width = "32px";
    img.style.height = "32px";

    wrapper.appendChild(img);

    wrapper.onclick = () => {
        window.open(url, "_blank", "noopener,noreferrer");
    };

    document.body.appendChild(wrapper);
}

export function initializeWhatsAppButton(buttonId = "whatsappButton", phoneNumber, message = "") {
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    createFloatingButton(
        buttonId,
        "https://freepnglogo.com/images/all_img/1716574719whatsapp-logo-transparent.png",
        "Chat on WhatsApp",
        whatsappURL,
        "#25D366" // WhatsApp green
    );
}

export function initializeMessengerButton(buttonId = "messengerButton", pageName, message = "") {
    const messengerURL = `https://m.me/${pageName}?text=${encodeURIComponent(message)}`;
    createFloatingButton(
        buttonId,
        "https://1000logos.net/wp-content/uploads/2021/11/Messenger-Logo-500x281.png",
        "Chat on Messenger",
        messengerURL,
        "#0078FF" // Messenger blue
    );
}
