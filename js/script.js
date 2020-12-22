function openregistertab() {
    document.getElementById("register-tab").style.display = "block";
    document.getElementById("login-tab").style.display = "none ";
    document.getElementById("register-btn").style.borderBottom = "4px solid #c200ff ";
    document.getElementById("login-btn").style.borderBottom = "none ";
}

function openlogintab() {
    document.getElementById("login-tab").style.display = "block";
    document.getElementById("register-tab").style.display = "none ";
    document.getElementById("login-btn").style.borderBottom = "4px solid #c200ff ";
    document.getElementById("register-btn").style.borderBottom = "none ";
}