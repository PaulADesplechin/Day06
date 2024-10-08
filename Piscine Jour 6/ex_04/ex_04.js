// Fonction pour ajouter les plaques d'immatriculation à la voiture d'un agent
function updateLicensePlates(agent, plates) {
    // Vérification que la voiture existe dans l'objet agent
    if (!agent.car) {
        console.error("L'agent n'a pas de voiture.");
        return null;
    }

    // Ajouter les plaques d'immatriculation à la propriété 'car'
    agent.car.licensePlates = plates;

    // Retourner l'agent mis à jour
    return agent;
}

// Fonction pour afficher les plaques d'immatriculation dans la page HTML
function showLicensePlates(agent) {
    // Vérification que la voiture et les plaques existent
    if (!agent.car || !agent.car.licensePlates) {
        console.error("Aucune plaque d'immatriculation à afficher.");
        return;
    }

    // Sélectionner le conteneur des plaques
    const platesContainer = document.querySelector('.plates-container');
    platesContainer.innerHTML = ''; // Réinitialiser le contenu

    // Parcourir les plaques et les ajouter à la liste HTML
    agent.car.licensePlates.forEach(plate => {
        const li = document.createElement('li');
        li.textContent = plate;
        platesContainer.appendChild(li);
    });
}

// Exemple d'utilisation :
const agent = {
    firstName: "James",
    lastName: "Bond",
    car: {
        brand: "Aston Martin",
        model: "DB5",
        color: "Silver",
        power: "510hp"
    }
};

// Ajouter des plaques d'immatriculation à l'agent
updateLicensePlates(agent, ["LU 6789", "4711-EA-62", "BMT 216A"]);

// Afficher les plaques dans la page
showLicensePlates(agent);
