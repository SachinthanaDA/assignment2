function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    if (username === "user" && password === "password") {
      window.location.href = "./index2.html";
    } else {
      alert("Incorrect username or password!");
    }
  }