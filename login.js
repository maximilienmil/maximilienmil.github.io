// login.js

function login() {
    var password = document.getElementById("password").value;

    var hashedPassword = CryptoJS.SHA256(password).toString();

    console.log("Entered password: " + password);
    console.log("Hashed password: " + hashedPassword);

    if (hashedPassword === "43faebc7da7c273da26c04c89ca659b181bfdfcd0015787d5713865ef43b5f2a") {
        window.location.href = "contenu.html";
    } else {
        alert("Incorrect password.");
    }
}
