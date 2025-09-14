// Form submission with loading animation
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const btn = document.getElementById("loginBtn");
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (!email || !password) {
    alert("Please fill in all fields");
    return;
  }

  // Add loading state
  btn.classList.add("loading");
  btn.innerHTML = "";

  // Simulate login process
  setTimeout(() => {
    btn.classList.remove("loading");
    btn.innerHTML = "Sign In";
    alert("Login successful! (This is a demo)");
  }, 2000);
});

// Toggle password visibility
function togglePassword() {
  const passwordField = document.getElementById("password");
  const toggleBtn = document.querySelector(".toggle-password");

  if (passwordField.type === "password") {
    passwordField.type = "text";
    toggleBtn.textContent = "🙈";
  } else {
    passwordField.type = "password";
    toggleBtn.textContent = "👁️";
  }
}

// Social login handlers
function socialLogin(provider) {
  alert(
    `${
      provider.charAt(0).toUpperCase() + provider.slice(1)
    } login clicked! (This is a demo)`
  );
}

// Navigation handlers
function showForgotPassword() {
  alert("Forgot password clicked! (This is a demo)");
}

function showSignup() {
  alert("Sign up clicked! (This is a demo)");
}

// Add input focus animations
const inputs = document.querySelectorAll("input");
inputs.forEach((input) => {
  input.addEventListener("focus", function () {
    this.parentElement.style.transform = "scale(1.02)";
  });

  input.addEventListener("blur", function () {
    this.parentElement.style.transform = "scale(1)";
  });
});
