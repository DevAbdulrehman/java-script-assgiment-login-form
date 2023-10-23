let users = [];

function register() {
  users.push({
    firstName: document.getElementById("name").value,
    email: document.getElementById("email").value,
    pass: document.getElementById("pass").value,
  });
  window.alert("succesfully registered")
  console.log(users);
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("pass").value = "";
}

function login() {
  let loginEmail = document.getElementById("login-email").value;
  let loginPass = document.getElementById("login-pass").value;
  for (let i = 0; i < users.length; i++) {
    if (loginEmail == users[i].email) {
      if (loginPass == users[i].pass) {
        window.alert("succesfully login");
      } else {
        window.alert("Please enter correct email or password");
      }
    }
  }
  document.getElementById("login-email").value = "";
  document.getElementById("login-pass").value = "";
  
}

