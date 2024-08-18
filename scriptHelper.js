// Write your helper functions here!

require("cross-fetch/polyfill");

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
  if (testInput === "") {
    return "Empty";
  } else if (isNaN(testInput)) {
    return "Not a Number";
  } else {
    return "Is a Number";
  }
}

function formSubmission(
  document,
  list,
  pilotName,
  copilotName,
  fuelLevel,
  cargoMass
) {
  //  Make sure to call your formSubmission() function at the appropriate time in your script.js file!

  let faultyItems = document.querySelector("#faultyItems");
  faultyItems.style = { visibility: "visible" };

  let launchStatus = document.querySelector("#launchStatus");
  let fuelStatus = document.querySelector("#fuelStatus");
  let cargoStatus = document.querySelector("#cargoStatus");
  let pilotStatus = document.querySelector("#pilotStatus");
  let copilotStatus = document.querySelector("#copilotStatus");

  pilotStatus.innerHTML = `Pilot ${pilotName} is ready for launch`;
  copilotStatus.innerHTML = `Co-pilot ${copilotName} is ready for launch`;
  cargoStatus.innerHTML = "Cargo mass low enough for launch";
  fuelStatus.innerHTML = "Fuel level high enough for launch";

  let hasError = false;

  if (validateInput(pilotName) === "Is a Number") {
    hasError = true;
    pilotStatus.innerHTML = `Pilot is Not Ready for Launch`;
  }
  if (validateInput(copilotName) === "Is a Number") {
    hasError = true;
    copilotStatus.innerHTML = `Co-pilot is Not Ready for Launch`;
  }
  if (validateInput(fuelLevel) === "Not a Number") {
    hasError = true;
  }

  if (fuelLevel < 10000) {
    hasError = true;
    fuelStatus.innerHTML = "Fuel level too low for launch";
  }

  if (validateInput(cargoMass) === "Not a Number") {
    hasError = true;
  }

  if (cargoMass > 10000) {
    hasError = true;
    cargoStatus.innerHTML = "Cargo mass too heavy for launch";
  }

  if (hasError) {
    launchStatus.innerHTML = "Shuttle Not Ready for Launch";
    launchStatus.style.color = "red";
  } else {
    pilotStatus.innerHTML = `Pilot ${pilotName} is ready for launch`;
    copilotStatus.innerHTML = `Co-pilot ${copilotName} is ready for launch`;
    cargoStatus.innerHTML = "Cargo mass low enough for launch";
    fuelStatus.innerHTML = "Fuel level high enough for launch";
    launchStatus.innerHTML = "Shuttle is Ready for Launch";
    launchStatus.style.color = "green";
  }
}

async function myFetch() {
  let planetsReturned;

  planetsReturned = await fetch(
    "https://handlers.education.launchcode.org/static/planets.json"
  ).then(function (response) {
    return response.json();
  });

  return planetsReturned;
}

function pickPlanet(planets) {
  let randomPlanet = Math.floor(Math.random() * planets.length);
  return planets[randomPlanet];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
