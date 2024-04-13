document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;


    if (username === "admin" && password === "admin") {
        document.getElementById("message").textContent = "Inicio de sesión exitoso!";
         window.location.href = "veterinaria.html";
    } else {
        document.getElementById("message").textContent = "Credenciales incorrectas. Inténtalo de nuevo.";
    }
});
