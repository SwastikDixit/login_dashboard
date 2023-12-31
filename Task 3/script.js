document.addEventListener("DOMContentLoaded", function () {
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");

  // Add event listener for username input
  usernameInput.addEventListener("blur", function () {
    validateUsername();
  });

  // Add event listener for password input
  passwordInput.addEventListener("input", function () {
    validatePassword();
  });

  function validateUsername() {
    const usernameValue = usernameInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail = emailRegex.test(usernameValue);

    if (!isValidEmail) {
      alert("Please enter a valid email address for the username.");
      usernameInput.value = "";
    }
  }

  function validatePassword() {
    const passwordValue = passwordInput.value.trim();
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d@]*$/;
    const isValidPassword = passwordRegex.test(passwordValue);

    if (!isValidPassword) {
      alert(
        "Password must contain an uppercase letter, a number, and no special characters other than @."
      );
    }
  }
});
