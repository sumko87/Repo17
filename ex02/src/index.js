// Only change code bwlow this line
const workdays= ['MON','TUE','WED','THU','FRI'];
function myWeek(days) {
    let week =[...days, 'SAT', 'SUN'];
    return week;
}
console.log(myWeek(workdays));
// Only change code above this line
module.exports = myWeek;