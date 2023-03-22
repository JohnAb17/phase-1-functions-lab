// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
    if (someValue > 42) {
        return (someValue - 42);
 } else {
        return (42 - someValue);
}
}


function distanceFromHqInFeet(someValue) {
    distanceFromHqInBlocks(someValue);
    return (distanceFromHqInBlocks(someValue) * 264);
}

function distanceTravelledInFeet(start, destination) {
    if (destination > start) {
        return ((destination - start) * 264);
 } else {
        return ((start - destination) * 264);
    }
    
}

function calculatesFarePrice(start, destination) {
    if ((Math.abs(destination - start) * 264) < 400) {
    return (0);
}  else if  ((Math.abs(destination - start) * 264 > 400) && (Math.abs(destination - start) * 264 < 2000)) {
        return ((Math.abs(destination - start) * 264 - 400) * .02);
}  else if  ((Math.abs(destination - start) * 264 > 2000) && (Math.abs(destination - start) * 264 < 2500)) {
    return (25);
}   else { (Math.abs(destination - start) * 264 > 2500) 
    return ('cannot travel that far');
}
}