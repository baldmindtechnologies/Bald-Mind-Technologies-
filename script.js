const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");

if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  mainNav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

const contactForm = document.querySelector(".contact-form");

if (contactForm) {
  const submitButton = contactForm.querySelector(".contact-submit");
  const submitLabel = contactForm.querySelector(".submit-label");
  const statusMessage = contactForm.querySelector(".form-status");

  contactForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    if (!contactForm.checkValidity()) {
      contactForm.reportValidity();
      return;
    }

    submitButton.disabled = true;
    submitButton.classList.add("is-sending");
    submitLabel.textContent = "SENDING...";
    statusMessage.textContent = "";
    statusMessage.className = "form-status";

    try {
      const response = await fetch(contactForm.action, {
        method: "POST",
        body: new FormData(contactForm),
        headers: {
          "Accept": "application/json"
        }
      });

      if (response.ok) {
        contactForm.reset();
        statusMessage.textContent = "Message sent successfully. Thank you!";
        statusMessage.className = "form-status success";
        submitLabel.textContent = "MESSAGE SENT";

        setTimeout(() => {
          submitLabel.textContent = "SEND MESSAGE";
        }, 2500);
      } else {
        let message = "We couldn't send your message. Please try again.";
        try {
          const data = await response.json();
          if (data && Array.isArray(data.errors) && data.errors.length) {
            message = data.errors.map(error => error.message).join(" ");
          }
        } catch (_) {}
        statusMessage.textContent = message;
        statusMessage.className = "form-status error";
        submitLabel.textContent = "SEND MESSAGE";
      }
    } catch (_) {
      statusMessage.textContent = "We couldn't send your message. Please check your connection and try again.";
      statusMessage.className = "form-status error";
      submitLabel.textContent = "SEND MESSAGE";
    } finally {
      submitButton.disabled = false;
      submitButton.classList.remove("is-sending");
    }
  });
}
