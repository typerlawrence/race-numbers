let raceNumber = Math.floor(Math.random() * 1000)
var Registration = 'early'
var Age = '14'

if (Age > 18 && Registration === 'early') {
console.log(raceNumber + 1000);
} if (Age > 18 && Registration === 'early') {
console.log('You will race at 9:30am as an adult over 18');
} else if (Age > 18 && Registration !== 'early') {
console.log('You will race at 11:00am as an adult over 18');
    console.log(raceNumber + 1000);
}

if (Age < 18) 
console.log ('You will race at 12:30pm as a child');
console.log(raceNumber);
