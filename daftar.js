const registerForm = document.getElementById("register-form");

if (typeof(Storage) !== "undefined") {
 
  let users = JSON.parse(localStorage.getItem("users")) || [];

  registerForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const fullname = document.getElementById("fullname").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const phone = document.getElementById("phone").value;
    const address = document.getElementById("address").value;
    const gender = document.getElementById("gender").value;

    const newUser = {
      fullname,
      email,
      password,
      phone,
      address,
      gender
    };
    users.push(newUser);

    localStorage.setItem("users", JSON.stringify(users));

    window.location.href = "index.html";
  });

  const loggedInUser = JSON.parse(sessionStorage.getItem("loggedInUser"));
  if (loggedInUser) {
   
    const welcomeContainer = document.querySelector(".welcome-container");
    const usernameElement = document.createElement("p");
    usernameElement.textContent = "Welcome, " + loggedInUser.fullname;
    welcomeContainer.appendChild(usernameElement);
    welcomeContainer.style.display = "block";
  }

  console.log("Local storage not available");
}