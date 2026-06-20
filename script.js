document.addEventListener("DOMContentLoaded", () => {
  const signinForm = document.querySelector(".auth-form.sign-in");
  const signupForm = document.querySelector(".auth-form.sign-up");

  if (!signinForm && !signupForm) {
    return;
  }

  function showMessage(form, text, type) {
    const message = form.querySelector(".form-message");
    if (!message) return;
    message.textContent = text;
    message.className = `form-message ${type}`;
  }

  if (signinForm) {
    signinForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const email = signinForm.querySelector("#email").value.trim();
      const password = signinForm.querySelector("#password").value.trim();

      if (!email || !password) {
        showMessage(signinForm, "Please enter both email and password.", "error");
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
    event.preventDefault();
    const email = signinForm.querySelector("#email").value.trim();
    const password = signinForm.querySelector("#password").value.trim();

    if (!email || !password) {
      showMessage(signinForm, "Please enter both email and password.", "error");
      return;
    }

    showMessage(signinForm, "Welcome back! Signing you in...", "success");
  });

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
});
