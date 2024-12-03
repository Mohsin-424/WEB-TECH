// Form validation
function validateForm() {
    const password = document.getElementById("password").value;
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const errorMessage = document.getElementById("error-message");
  
    // Check for minimum length requirement
    if (password.length < 6) {
        errorMessage.textContent = "Password must be at least 6 characters.";
        return false;
    }
    
    if (email.length < 5) {
        errorMessage.textContent = "Email must be at least 5 characters";
        return false;
    }
  
  // if (password.length < 6) {
  //     errorMessage.textContent = "Password must be at least 6 characters.";
  //     return false;
  //   }

    if (username.length < 4) {
        errorMessage.textContent = "Username must be at least 4 characters.";
        return false;
      }
  
    errorMessage.textContent = ""; // Clear any previous error message
    alert("Login successful!");
    return true;
  }
  