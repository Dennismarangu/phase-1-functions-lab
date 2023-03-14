// Code your solution in this file!
function distanceFromHqInBlocks(pickupLocation) {
  return Math.abs(pickupLocation - 42);
}

function distanceFromHqInFeet(pickupLocation) {
  return Math.abs(pickupLocation - 42) * 264;
}

function distanceTravelledInFeet(startBlock, endBlock) {
  return Math.abs(endBlock - startBlock) * 264;
}

function calculatesFarePrice(startBlock, endBlock) {
  const distance = distanceTravelledInFeet(startBlock, endBlock);
  let fare;
  
  if (distance <= 400) {
    fare = 0;
  } else if (distance > 400 && distance <= 2000) {
    fare = (distance - 400) * 0.02;
  } else if (distance > 2000 && distance <= 2500) {
    fare = 25;
  } else {
    fare = "cannot travel that far";
  }
  
  return fare;
}

