// function distanceFromHqInBlocks(someValue) {
//     if (someValue > 42){
//         return someValue - 42
//     }
//     if (someValue < 42){
//         return 42 - someValue
//     }
//   }

function distanceFromHqInBlocks(someValue) {
    return Math.abs(someValue - 42)
}

// function distanceFromHqInFeet(someValue) {

//     let amountOfBlocks = distanceFromHqInBlocks(someValue)
    
//     return amountOfBlocks * 264
// }

function distanceFromHqInFeet(someValue) {
    return distanceFromHqInBlocks(someValue)*264
}

// function distanceTravelledInFeet(start, destination) {
//     if (start > destination){
//         return (start - destination)*264
//     }
//     if (start < destination){
//         return (destination - start)*264
//     }
// }

function distanceTravelledInFeet (start, destination) {
    return Math.abs(start - destination)*264
}

function calculatesFarePrice(start, destination) {

    let distance = distanceTravelledInFeet(start,destination)

    if (distance < 400){
        return 0
    }
    if (distance <= 2000){
        return (distance - 400)*.02
    }
    if (distance > 2000 && distance <= 2500){
        return 25
    }
    if (distance > 2500){
        return 'cannot travel that far'
    }
}
