// Write your JavaScript code here!

const { pickPlanet, myFetch } = require("./scriptHelper");

window.addEventListener("load", function () {
  let form = document.querySelector("form");
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    let pilotNameInput = document.querySelector("input[name=pilotName]");
    let copilotNameInput = document.querySelector("input[name=copilotName]");
    let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
    let cargoMassInput = document.querySelector("input[name=cargoMass]");
    if (
      pilotNameInput.value === "" ||
      copilotNameInput.value === "" ||
      fuelLevelInput.value === "" ||
      cargoMassInput.value === ""
    ) {
      window.alert("All fields are required!");
    } else {
      formSubmission(document, {
        pilotName: pilotNameInput.value,
        copilotName: copilotNameInput.value,
        fuelLevel: fuelLevelInput.value,
        cargoMass: cargoMassInput.value,
      });
    }
  });

  let listedPlanets;
  // Set listedPlanetsResponse equal to the value returned by calling myFetch() --v
  let listedPlanetsResponse = myFetch();
  listedPlanetsResponse.then(function (result) {
      listedPlanets = result;
      console.log(listedPlanets);
  }).then(function () {
      console.log(listedPlanets);
      pickPlanet()
//   Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
  })

});
