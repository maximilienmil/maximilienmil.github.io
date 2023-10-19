// login.js

function login() {
    var password = document.getElementById("password").value;

    var hashedPassword = CryptoJS.SHA256(password).toString();

    console.log("Entered password: " + password);
    console.log("Hashed password: " + hashedPassword);

    if (hashedPassword === "8f434346648f6b96df89dda901c5176b10a6d83961dd3c1ac88b59b2dc327aa4") {
        window.location.href = "contenu.html";
    } else {
        alert("Incorrect password.");
    }
}
