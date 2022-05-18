// Code your solution in this file!

function distanceFromHqInBlocks(numBlocks) {
  const destination = 42;

  if (numBlocks > destination) {
    return numBlocks - destination;
  } else if (numBlocks < destination) {
    return destination - numBlocks;
  } else if (numBlocks === destination) {
    return 0;
  }
}

function distanceFromHqInFeet(numBlocks) {
  distanceFromHqInBlocks(numBlocks);
  const blockDistanceInFt = 264;

  return distanceFromHqInBlocks(numBlocks) * blockDistanceInFt;
}

//   function distanceFromHqInFeet(numBlocks) {
//     distanceFromHqInBlocks(numBlocks);
//     const destination = 42;
//     const blockDistanceInFt = 264;

//     if (numBlocks > destination) {
//         return (numBlocks - destination) * blockDistanceInFt;
//     }

//     else if (numBlocks < destination) {
//         return (destination - numBlocks) * blockDistanceInFt;
//     }

//     else if (numBlocks === destination) {
//         return 1 * blockDistanceInFt;
//     }
//  }

function distanceTravelledInFeet(start, destination) {
  const distanceInFeet = 264;

  if (destination > start) {
    return (destination - start) * distanceInFeet;
  } else if (destination < start) {
    return (start - destination) * distanceInFeet;
  } else {
    return 1 * distanceInFeet;
  }
}

function calculatesFarePrice(start, destination) {
    let distanceTraveled = distanceTravelledInFeet(start, destination);


  if (distanceTraveled > 2500) {
    return "cannot travel that far";
  } else if (distanceTraveled > 2000 && distanceTraveled <= 2500) {
    return 25;
  } else if (distanceTraveled > 400 && distanceTraveled <= 2000) {
    return (distanceTraveled - 400) * 0.02;
  } else {
    return 0;
  }
}
