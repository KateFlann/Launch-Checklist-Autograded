// Write your helper functions here!

// require("cross-fetch/polyfill");

// put the validation code for input here

function addDestinationInfo(
  document,
  name,
  diameter,
  star,
  distance,
  moons,
  imageUrl
) {
  // Here is the HTML formatting for our mission target div.
  /*
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: </li>
                     <li>Diameter: </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: </li>
                     <li>Number of Moons: </li>
                 </ol>
                 <img src="">
    */
  document.querySelector(
    "#missionTarget"
  ).innerHTML = `<h2>Mission Destination</h2>
                 <ol>
                     <li>Name: ${name}</li>
                     <li>Diameter: ${diameter}</li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: ${distance}</li>
                     <li>Number of Moons: ${moons}</li>
                 </ol>
                 <img src="${imageUrl}">`;
}

function validateInput(testInput) {
  if (isNaN(testInput)) {
    if (testInput === "") {
      return "Empty";
    }
    return "Not a Number";
  } else {
    return "Is a Number";
  }
}

function formSubmission(document, input) {
  //  Make sure to call your formSubmission() function at the appropriate time in your script.js file!

  let faultyItems = document.querySelector("#faultyItems");
  faultyItems.style = { visibility: "visible" };

  let launchStatus = document.querySelector("#launchStatus");
  let fuelStatus = document.querySelector("#fuelStatus");
  let cargoStatus = document.querySelector("#cargoStatus");
  let pilotStatus = document.querySelector("#pilotStatus");
  let copilotStatus = document.querySelector("#copilotStatus");

  pilotStatus.innerHTML = `Pilot ${input.pilotName} is ready for launch`;
  copilotStatus.innerHTML = `Copilot ${input.copilotName} is ready for launch`;

  let hasError = false;

  if (validateInput(input.pilotName) === "Is a Number") {
    hasError = true;
    pilotStatus.innerHTML = `Pilot is not ready for launch`;
    launchStatus.innerHTML = "Shuttle not ready for launch";
    launchStatus.style.color = "red";
  }
  if (validateInput(input.copilotName) === "Is a Number") {
    hasError = true;
    copilotStatus.innerHTML = `Copilot is not ready for launch`;
    launchStatus.innerHTML = "Shuttle not ready for launch";
    launchStatus.style.color = "red";
  }
  if (validateInput(input.fuelLevel) === "Not a Number") {
    hasError = true;
    launchStatus.innerHTML = "Shuttle not ready for launch";
    launchStatus.style.color = "red";
  }

  if (input.fuelLevel < 10000) {
    hasError = true;
    fuelStatus.innerHTML = "Fuel Level too low for launch";
    launchStatus.innerHTML = "Shuttle not ready for launch";
    launchStatus.style.color = "red";
  }

  if (validateInput(input.cargoMass) === "Not a Number") {
    hasError = true;
    //line for invalid cargo entry, e.g. "K"?
    launchStatus.innerHTML = "Shuttle not ready for launch";
    launchStatus.style.color = "red";
  }

  if (input.cargoMass > 10000) {
    hasError = true;
    cargoStatus.innerHTML = "Cargo mass too heavy for launch";
    launchStatus.innerHTML = "Shuttle not ready for launch";
    launchStatus.style.color = "red";
  }

  if (!hasError) {
    pilotStatus.innerHTML = `Pilot ${input.pilotName} is ready for launch`;
    copilotStatus.innerHTML = `Copilot ${input.copilotName} is ready for launch`;
    cargoStatus.innerHTML = "Cargo mass low enough for launch";
    fuelStatus.innerHTML = "Fuel Level high enough for launch";
    launchStatus.innerHTML = "Shuttle is ready for launch";
    launchStatus.style.color = "green";
  }
}

async function myFetch() {
  let planetsReturned;

  planetsReturned = await fetch(
    "https://handlers.education.launchcode.org/static/planets.json"
  ).then(function (response) {
    response.json().then(function (json) {
      
    });
  });
  // per instructions: return response.json() ??
  return planetsReturned;
}

function pickPlanet(planets) {
  let planets = planetsReturned;
  for (i = 0; i < planets.length; i++) {
    Math.random(planetsReturned[i]);
  }
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
