// Fonction qui ajoute une voiture à un agent
function addCar(agentString, car) {
    // Convertir la chaîne JSON en objet
    let agent = JSON.parse(agentString);

    // Ajouter la nouvelle propriété 'car'
    agent.car = car;

    // Retourner l'objet agent mis à jour
    return agent;
}

// Exemple d'utilisation :
const agentJSON = '{"age": 57, "code": "007", "firstName": "James", "lastName": "Bond"}';
const carBrand = "Aston Martin";

// Appeler la fonction pour ajouter la voiture
const updatedAgent = addCar(agentJSON, carBrand);

// Fonction pour afficher les informations de l'agent dans le HTML
function displayAgent(agent) {
    const container = document.querySelector('.container');

    // Créer un élément <p> pour afficher les informations de l'agent
    const agentInfo = document.createElement('p');
    agentInfo.textContent = `Agent: ${agent.firstName} ${agent.lastName}, Code: ${agent.code}, Age: ${agent.age}, Car: ${agent.car}`;
    
    // Ajouter le paragraphe à la page
    container.appendChild(agentInfo);
}

// Appeler la fonction pour afficher l'agent mis à jour dans la page
displayAgent(updatedAgent);
