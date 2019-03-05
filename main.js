// Fonction pour afficher le menu quand on scroll
window.onscroll = function () { scroll() };

function scroll() {
    if (document.documentElement.scrollTop > 140) {
        document.getElementById('navbar').className = "navbar";
    } else {
        document.getElementById('navbar').className = "";
    }
}