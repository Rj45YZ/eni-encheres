const formulaireInscription = document.getElementById("form-inscription");

const dateDuJour = document.getElementById("date");

if (dateDuJour) {
    dateDuJour.textContent = new Intl.DateTimeFormat("fr-FR").format(new Date());
}

if (formulaireInscription) {

    formulaireInscription.addEventListener("submit", function(event) {

        const pseudo = document.getElementById("pseudo").value;
        const motDePasse = document.getElementById("motDePasse").value;
        const confirmation = document.getElementById("confirmation").value;

        const messageErreur = document.getElementById("message-erreur");

        messageErreur.textContent = "";
        messageErreur.hidden = true;

        const regexPseudo = /^[a-zA-Z0-9_]+$/;

        if (!regexPseudo.test(pseudo)) {
            event.preventDefault();
            messageErreur.textContent =
                "Le pseudo ne peut contenir que des lettres, chiffres et _.";
            messageErreur.hidden = false;
            return;
        }

        const regexMotDePasse =
            /^(?=.*[A-Z])(?=.*[0-9])(?=.*[^a-zA-Z0-9]).{8,20}$/;

        if (!regexMotDePasse.test(motDePasse)) {
            event.preventDefault();
            messageErreur.textContent =
                "Le mot de passe doit contenir entre 8 et 20 caractères, une majuscule, un chiffre et un caractère spécial.";
            messageErreur.hidden = false;
            return;
        }

        if (motDePasse !== confirmation) {
            event.preventDefault();
            messageErreur.textContent =
                "Les deux mots de passe ne correspondent pas.";
            messageErreur.hidden = false;
            return;
        }

        if (window.location.protocol === "file:") {
            event.preventDefault();
            messageErreur.textContent =
                "Les champs sont valides, mais l'inscription ne peut pas être enregistrée sans le serveur.";
            messageErreur.hidden = false;
        }
    });
}