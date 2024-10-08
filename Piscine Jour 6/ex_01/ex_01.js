// Fonction pour afficher les informations de l'agent dans un paragraphe HTML
function displayAgentInfo(agent) {
    // Création de la chaîne de texte avec les informations de l'agent
    const agentInfo = `My name is ${agent.lastName}, ${agent.firstName} ${agent.lastName}! I'm the agent ${agent.code} and I'm ${agent.age} years old.`;

    // Sélectionner l'élément <p> où afficher le texte
    const pElement = document.querySelector('p');
    pElement.textContent = agentInfo;  // Mettre à jour le contenu du paragraphe
}

// Objet agent avec les informations requises
const agent = {
    age: 57,
    code: "007",
    firstName: "James",
    lastName: "Bond"
};

// Appeler la fonction pour afficher les informations de l'agent
displayAgentInfo(agent);
