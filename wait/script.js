function afficherDate() {
    const aujourdHui = new Date();

    const jour = String(aujourdHui.getDate()).padStart(2, '0');
    const mois = String(aujourdHui.getMonth() + 1).padStart(2, '0');
    const annee = String(aujourdHui.getFullYear()).slice(-2);

    document.getElementById("date").textContent =
        jour + "/" + mois + "/" + annee;
}

afficherDate();