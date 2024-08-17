// Write your helper functions here!

require("cross-fetch/polyfill");

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
}

function validateInput(testInput) {
  window.addEventListener("load", function () {
    let form = document.querySelector("testForm");
    form.addEventListener("submit", function (event) {
      let pilotNameInput = document.querySelector("input[name=pilotName]");
      let copilotNameInput = document.querySelector("input[name=copilotName]");
      let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
      let cargoMassInput = document.querySelector("input[name=cargoMass]");
      if (pilotNameInput.value === "" || copilotNameInput.value === ""|| fuelLevelInput.value === ""|| cargoMassInput.value === "") {
        alert("All fields are required!");
        event.preventDefault();
      }
    });
        if(pilotNameInput.value.isNaN(testInput) = true) {
            alert("Is a Number")
        } else if (copilotNameInput.value.isNaN(testInput) = true) {
            alert("Is a Number")
        }    else if (fuelLevelInput.value.isNaN(testInput) = false) {
                alert("Not a Number")
            }    else if (cargoMassInput.value.isNaN(testInput) = false) {
                alert("Not a Number") }
                else (testInput = ""){alert("Empty")}
    
// validateInput() should take in a string as a parameter and return "Empty", "Not a Number", or "Is a Number" as appropriate.
  // In scriptHelper.js, you will use validateInput() to complete the formSubmission() function.
  });
}

function formSubmission(document, input) {

Update "faultyItems" 

let pilotNameInput = document.querySelector("input[name=pilotName]");
let copilotNameInput = document.querySelector("input[name=copilotName]");
let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
let cargoMassInput = document.querySelector("input[name=cargoMass]");

li.pilotStatus includes pilot's name
li.copilotStatus includes copilot's name

if (fuelLevelInput < 10000) {
    let faultyItems = visible;
    "launchStatus" == “Shuttle not ready for launch”
    color: red;
} else if (cargoMassInput > 10000) {
    let faultyItems = visible;
    "launchStatus" == “Shuttle not ready for launch”
    color: red;
} else (launchStatus == “Shuttle is ready for launch”)



`${}`

    document,
    list,
    pilot,
    copilot,
    fuelLevel,
    cargoLevel
}

async function myFetch() {
  let planetsReturned;

  planetsReturned = await fetch(
      "https://handlers.education.launchcode.org/static/planets.json"
    ).then(function (response) {
      response.json().then(function (json) {
        const container = document.getElementById("container");
        for (i = 0; i < json.length; i++) {
          container.innerHTML += `

          <div class="container">
 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: ${json.name}</li>
                     <li>Diameter: ${json.diameter}</li>
                     <li>Star: ${json.star}</li>
                     <li>Distance from Earth: ${json.distance}</li>
                     <li>Number of Moons: ${json.moons}</li>
                 </ol>
                 <img src="${json.image}"> 
                  </div>` ;
        }
      });
    });
  };


  return planetsReturned;
}

function pickPlanet(planets) {}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
