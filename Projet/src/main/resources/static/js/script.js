const formulaireInscription = document.getElementById("form-inscription");

if (formulaireInscription) {

    formulaireInscription.addEventListener("submit", function(event) {

        const pseudo = document.getElementById("pseudo").value;
        const motDePasse = document.getElementById("motDePasse").value;
        const confirmation = document.getElementById("confirmation").value;

        const messageErreur = document.getElementById("message-erreur");

        messageErreur.textContent = "";

        const regexPseudo = /^[a-zA-Z0-9_]+$/;

        if (!regexPseudo.test(pseudo)) {
            event.preventDefault();
            messageErreur.textContent =
                "Le pseudo ne peut contenir que des lettres, chiffres et _.";
            return;
        }

        const regexMotDePasse =
            /^(?=.*[A-Z])(?=.*[0-9])(?=.*[^a-zA-Z0-9]).{8,20}$/;

        if (!regexMotDePasse.test(motDePasse)) {
            event.preventDefault();
            messageErreur.textContent =
                "Le mot de passe doit contenir entre 8 et 20 caractères, une majuscule, un chiffre et un caractère spécial.";
            return;
        }

        if (motDePasse !== confirmation) {
            event.preventDefault();
            messageErreur.textContent =
                "Les deux mots de passe ne correspondent pas.";
        }
    });
}