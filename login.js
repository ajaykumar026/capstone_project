function toggleDarkMode() {
  var body = document.body;

  if (body.classList.contains("dark-mode")) {
    body.classList.remove("dark-mode");
  } else {
    body.classList.add("dark-mode");
  }
}
function togglePassword() {
    var pass = document.getElementById("password");

    if (pass.type === "password") {
        pass.type = "text";
    } else {
        pass.type = "password";
    }
}

function toggleDarkMode() {
    var body = document.body;

    if (body.classList.contains("dark-mode")) {
        body.classList.remove("dark-mode");
    } else {
        body.classList.add("dark-mode");
    }
}
