function addCarInfo(agent, carBrand) {

    if (
      typeof agent === "object" &&
      agent !== null &&
      "firstName" in agent &&
      "lastName" in agent &&
      "age" in agent
    ) {
    
      agent.car = carBrand;
      return agent;
    } else {
      console.error("Error: Invalid agent object.");
      return null;
    }
  }
  
  var agent = {
    firstName: "James",
    lastName: "Bond",
    age: 45,
  };
  
  var carBrand = "Aston Martin";
  
  var updatedAgent = addCarInfo(agent, carBrand);
  
  if (updatedAgent) {
    console.log(updatedAgent);
   
    shareThatBeauty(updatedAgent);
  } else {
    console.log("An error occurred.");
  }
  