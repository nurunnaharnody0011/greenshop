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

  const CART_KEY = "greenshopCart";

  function getCart() {
    return JSON.parse(localStorage.getItem(CART_KEY) || "[]");
  }

  function saveCart(cart) {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
  }

  function showToast(message) {
    const toast = document.createElement("div");
    toast.className = "cart-toast";
    toast.textContent = message;
    document.body.appendChild(toast);
    requestAnimationFrame(() => toast.classList.add("visible"));
    setTimeout(() => {
      toast.classList.remove("visible");
      toast.addEventListener("transitionend", () => toast.remove(), {
        once: true,
      });
    }, 2200);
  }

  function addToCart(item) {
    const cart = getCart();
    cart.push(item);
    saveCart(cart);
    showToast(`Added ${item.name} to cart`);
  }

  function renderCartPage() {
    const cartList = document.getElementById("cartItems");
    const cartTotal = document.getElementById("cartTotal");
    if (!cartList || !cartTotal) return;

    const cart = getCart();
    cartList.innerHTML = "";

    if (!cart.length) {
      cartList.innerHTML =
        '<div class="cart-empty"><p>Your cart is empty. Add a tree to get started.</p></div>';
      cartTotal.textContent = "0.00";
      return;
    }

    let total = 0;
    cart.forEach((item, index) => {
      const itemPrice = parseFloat(item.price.replace(/[^0-9.]/g, "") || "0");
      total += itemPrice;

      const row = document.createElement("div");
      row.className = "cart-item";
      row.innerHTML = `
        <div class="cart-item-image">
          <img src="${item.image}" alt="${item.name}" />
        </div>
        <div class="cart-item-info">
          <h3>${item.name}</h3>
          <p class="price">${item.price}</p>
        </div>
      `;
      cartList.appendChild(row);
    });

    cartTotal.textContent = total.toFixed(2);
  }

  document.querySelectorAll(".product-card").forEach((card) => {
    const title = card.querySelector("h3")?.textContent.trim() || "Plant";
    const price = card.querySelector(".price")?.textContent.trim() || "";
    const image = card.querySelector(".product-image")?.src || "";
    const buyButton = document.createElement("button");
    buyButton.type = "button";
    buyButton.className = "button button-buy";
    buyButton.textContent = "Buy";

    buyButton.addEventListener("click", () => {
      addToCart({ name: title, price, image });
    });

    card.appendChild(buyButton);
  });

  renderCartPage();

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
