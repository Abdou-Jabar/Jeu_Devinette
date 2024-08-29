const nombreMystere = Math.floor(Math.random() * 100) + 1;

let tentatives = 5;
let essai = 0

function devinerNombre() {
    const saisie = document.getElementById("nombresaisie").value;
    const nombreDevine = parseInt(saisie, 10);

    let message = "";

    if (isNaN(nombreDevine)) {
        message = "Veuillez entrer un nombre valide.";
    } else {
        tentatives--;
        essai
        if (nombreDevine === nombreMystere) {
            message = `Bravo! Vous avez deviné le nombre.`;
            tentatives = 0; // Fin du jeu
        } else if (nombreDevine < nombreMystere) {
            message = "Trop petit! Essayez un nombre plus grand.";
        } else if (nombreDevine > nombreMystere) {
            message = "Trop grand! Essayez un nombre plus petit.";
        }

        if (tentatives === 0 && nombreDevine !== nombreMystere) {
            redemarrer();
        }
    }

    document.getElementById("message").innerText = message;
    document.getElementById("tentative").innerText = `Vous avez ${tentatives} tentatives restantes.`;
}

function redemarrer() {
    alert(`Nombre de tentatives épuisé. Le nombre mystère était ${nombreMystere} Un nouveau nombre mystère a été choisi.`);
    tentatives = 5;
    document.getElementById("message").innerText = "";
    document.getElementById("tentative").innerText = `Vous avez ${tentatives} tentatives restantes.`;
    // Générer un nouveau nombre mystère
    nombreMystere = Math.floor(Math.random() * 100) + 1;
}
