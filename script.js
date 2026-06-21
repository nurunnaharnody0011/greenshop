document.addEventListener("DOMContentLoaded", () => {
  const signinForm = document.querySelector(".auth-form.sign-in");
  const signupForm = document.querySelector(".auth-form.sign-up");
  const viewerOverlay = document.getElementById("imageViewer");
  const viewerImage = document.getElementById("imageViewerImage");
  const viewerCaption = document.getElementById("imageViewerCaption");
  const viewerClose = document.getElementById("imageViewerClose");

  function showMessage(form, text, type) {
    const message = form.querySelector(".form-message");
    if (!message) return;
    message.textContent = text;
    message.className = `form-message ${type}`;
  }

  function openImageViewer(href, caption) {
    if (!viewerOverlay || !viewerImage) return;
    viewerImage.src = href;
    viewerImage.alt = caption;
    viewerCaption.textContent = caption;
    viewerOverlay.classList.add("active");
  }

  function closeImageViewer() {
    if (!viewerOverlay || !viewerImage) return;
    viewerOverlay.classList.remove("active");
    viewerImage.src = "";
    viewerImage.alt = "";
    viewerCaption.textContent = "";
  }

  if (viewerClose) {
    viewerClose.addEventListener("click", closeImageViewer);
  }

  if (viewerOverlay) {
    viewerOverlay.addEventListener("click", (event) => {
      if (event.target === viewerOverlay) {
        closeImageViewer();
      }
    });
  }

  document.querySelectorAll(".product-link").forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const image = link.querySelector("img");
      const caption = image?.alt || "Plant image";
      openImageViewer(link.href, caption);
    });
  });

  document.querySelectorAll(".product-card").forEach((card) => {
    const title = card.querySelector("h3")?.textContent.trim() || "Plant";
    const price = card.querySelector(".price")?.textContent.trim() || "";
    const buyButton = document.createElement("a");
    buyButton.className = "button button-buy";
    buyButton.href = `mailto:hello@greenshop.example?subject=Purchase%20request%20for%20${encodeURIComponent(
      title,
    )}&body=I%20would%20like%20to%20buy%20${encodeURIComponent(
      title,
    )}%20${encodeURIComponent(price)}.`;
    buyButton.target = "_blank";
    buyButton.rel = "noopener noreferrer";
    buyButton.textContent = "Buy";
    card.appendChild(buyButton);
  });

  if (signinForm) {
    signinForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const email = signinForm.querySelector("#email").value.trim();
      const password = signinForm.querySelector("#password").value.trim();

      if (!email || !password) {
        showMessage(
          signinForm,
          "Please enter both email and password.",
          "error",
        );
        return;
      }

      showMessage(signinForm, "Welcome back! Signing you in...", "success");
    });
  }

  if (signupForm) {
    signupForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const name = signupForm.querySelector("#name").value.trim();
      const email = signupForm.querySelector("#new-email").value.trim();
      const password = signupForm.querySelector("#new-password").value.trim();

      if (!name || !email || !password) {
        showMessage(
          signupForm,
          "Please complete all fields to create an account.",
          "error",
        );
        return;
      }

      showMessage(
        signupForm,
        "Success! Your account has been created.",
        "success",
      );
    });
  }
});
