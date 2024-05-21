function validate() {
  var email = document.getElementById("floatingInput").value;
  var password = document.getElementById("floatingPassword").value;

  if (email == "admin@admin.com" && password == "admin") {
    window.location = "index.html"; 
  } else {
    alert("Credenciales incorrectas");
  }
}