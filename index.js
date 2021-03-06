import { fifaData } from './fifa.js';
console.log(fifaData);

console.log('its working');
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */
const finals2014 = fifaData.filter(item =>
    item["Year"] === 2014 && item.Stage === 'Final')
 console.log('Task a:', finals2014[0]['Home Team Name']);
 console.log('Task b:', finals2014[0]['Away Team Name']);
 console.log('Task c:', finals2014[0]['Home Team Goals']);
 console.log('Task d:', finals2014[0]['Away Team Goals']);
 console.log('Task e:', finals2014[0]['Win conditions']);

/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(data) {
    return data.filter(item => {
        return item.Stage == 'Final'
    })
};
console.log('Task 2', getFinals(fifaData));

/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(callback) {
    const years = callback.map(item => {
        return item.Year
    })
    return years
};

console.log('Task 3', getYears(getFinals(fifaData)));

/* Task 4: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

function getWinners(callback) {
    const winners = callback.map(item => {
        if(item['Home Team Goals'] > item['Away Team Goals']) {
            return item['Home Team Name']
        } else if(item['Home Team Goals'] < item['Away Team Goals']) {
            return item['Away Team Name']
        } else {
            return item['Win conditions'].slice(0,6)
        }
    })
    return winners
};

console.log("Task 4", getWinners(getFinals(fifaData)));

/* Task 5: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(country, year) {
    for( let i = 0; i < country.length; i++){
        console.log(`In ${year[i]}, ${country[i]} won the world cup!`)
    }
};

console.log('Task 5:')
getWinnersByYear(getWinners(getFinals(fifaData)), getYears(getFinals(fifaData)));

/* Task 6: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(data) {
    // Solution 1
//    const home = data.map(item => {
//         return item['Home Team Goals']
//     })
//     const away = data.map(item => {
//         return item['Away Team Goals']
//     })

//     const homeTotal = Math.round(home.reduce((total, cur) => {
//         return total += cur
//     }, 0) / home.length);
//     const awayTotal = Math.round(away.reduce((total, cur) => {
//         return total += cur
//     }, 0) / away.length);
//     return `Home Goal Average: ${homeTotal}. Away Team Goals Average: ${awayTotal} `


    // Solution 2
    const home = [];
    const away = [];

    data.forEach( item => {
        home.push(item['Home Team Goals']);
        away.push(item['Away Team Goals']);
    })

    const homeTotal = Math.round(home.reduce((total, cur) => total + cur) / home.length);
    const awayTotal = Math.round(away.reduce((total, cur) => total + cur) / away.length);
    return `Home Goal Average: ${homeTotal}. Away Team Goals Average: ${awayTotal} `

};

console.log('Task 6', getAverageGoals(fifaData));

/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(data, teamInitials) {
    const team = data.map(item => {
        if(item['Home Team Goals'] > item['Away Team Goals']){
            return item["Home Team Initials"]
        } else if(item['Home Team Goals'] < item['Away Team Goals']){
            return item["Away Team Initials"]
        } else {
            return item['Win conditions'].slice(0,3).toUpperCase()
        }
    })
    const wins = team.filter(item => {
        return item === teamInitials
    })
    return wins.length;
};

console.log(getCountryWins(getFinals(fifaData), 'BRA'));


/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
