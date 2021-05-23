
let engineIndicatorLight = 'red blinking'
let spaceSuitsOn =	true
let shuttleCabinReady =	true
let crewStatus =	spaceSuitsOn && shuttleCabinReady
let computerStatusCode =	200
let shuttleSpeed = 15000

//
if (engineIndicatorLight === "green") {
   console.log("engines have started");
} else if (engineIndicatorLight === "green blinking") {
   console.log("engines are preparing to start");
} else {
   console.log("engines are off");
}
//
if (crewStatus === true) { 
  console.log('crew ready');
  } else {
    console.log('crew not ready');
  }
  //
  if (computerStatusCode === 200) {
    console.log("please standby! compuetr is rebboting");
  } else if (computerStatusCode === 400); {
    console.log("success! computer is online");
  }
  