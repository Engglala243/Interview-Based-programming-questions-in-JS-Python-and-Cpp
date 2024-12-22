// Write to code to check whether a given year is leap year or not.
function isLeapYear(year){
    if((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) return true;
    return false;
}

const year = 2025;
console.log(`${year} is ${isLeapYear(year) ? '' : 'not'} a Leap year`);
