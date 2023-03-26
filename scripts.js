function login() {
    const password = document.getElementById("login-password").value;
  
    let accounts = JSON.parse(localStorage.getItem("accounts")) || [];
  
    const account = accounts.find(
      (acc) => acc.email === email && acc.password === password
    );
  
    if (account) {

      sessionStorage.setItem("username", account.name);
  
    
      const formData = {
        email: email,
        password: password,
        rememberMe: document.getElementById("remember-me").checked,
        message: document.getElementById("message").value,
        option: document.getElementById("option").value,
      };
      sessionStorage.setItem("formData", JSON.stringify(formData));
  
      document.getElementById("login-form").style.display = "none";
      document.getElementById("welcome-message").innerHTML = `Selamat datang, ${account.name}!`;
      document.getElementById("welcome-container").style.display = "block";
    } else {
 
      alert("Email atau password salah!");
    }
  }