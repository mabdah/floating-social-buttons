function createFloatingContainer() {
    const containerId = "floatingButtonsContainer";
    let container = document.getElementById(containerId);

    if (!container) {
        container = document.createElement("div");
        container.id = containerId;
        container.style.position = "fixed";
        container.style.bottom = "20px";
        container.style.right = "20px";
        container.style.zIndex = "9999";
        container.style.display = "flex";
        container.style.flexDirection = "column";
        container.style.gap = "12px";
        document.body.appendChild(container);
    }

    return container;
}

function createFloatingButton(buttonId, imgSrc, altText, url, bgColor) {
    // Avoid duplicate buttons
    if (document.getElementById(buttonId)) return;

    const wrapper = document.createElement("div");
    wrapper.id = buttonId;
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
    img.style.width = "100%";
    img.style.height = "32px";

    wrapper.appendChild(img);

    wrapper.onclick = () => {
        window.open(url, "_blank");
    };

    const container = createFloatingContainer();
    container.appendChild(wrapper);
}

export function initializeWhatsAppButton(phoneNumber, message) {
    const buttonId = "whatsappButton";
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    createFloatingButton(
        buttonId,
        "https://freepnglogo.com/images/all_img/1716574719whatsapp-logo-transparent.png",
        "Chat on WhatsApp",
        whatsappURL,
        "#23663c"
    );
}

export function initializeMessengerButton(pageName, message) {
    const buttonId = "messengerButton";
    const messengerURL = `https://m.me/${pageName}?text=${encodeURIComponent(message)}`;
    createFloatingButton(
        buttonId,
        "https://1000logos.net/wp-content/uploads/2021/11/Messenger-Logo-500x281.png",
        "Chat on Messenger",
        messengerURL,
        "#ffffff"
    );
}
