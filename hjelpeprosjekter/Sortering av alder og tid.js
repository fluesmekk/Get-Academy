//random number for Numbers on back
let raceNumber = Math.floor(Math.random() * 1000);
//early or late registration
const earlyR = true;
//Age of runner. if 18 go to regristration desk
const runnerAge = 19;
if (runnerAge > 18 && earlyR); {
    raceNumber += 1000

}

if (runnerAge > 18 && earlyR) {
    console.log(`Your are number ${raceNumber} and will start at 9.30 AM`);

} else if (runnerAge > 18 && !earlyR) {
    console.log(`Your are number ${raceNumber} and will start at 11.00 AM`);



} else if (runnerAge < 18) {
    console.log(`Your are number ${raceNumber -= 1000}  and will start at 12.30 AM`)
} else {
    console.log('Meet up in registration desk')
}




