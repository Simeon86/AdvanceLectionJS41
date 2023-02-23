// winsow.addEventListener('DOMContentLoaded', () => {
	
// });	

console.log('Football Game');

// win = 3 poits
// drow = 1 points
// loses = 0 points

const participiants1 = [
    {teamName: 'Man. United', wins: 10, draw: 4, loses: 7, scoredGoals: 32, concededGoals: 40},
    {teamName: 'Chealsea', wins: 7, draw: 10, loses: 4, scoredGoals: 15, concededGoals: 14},
    {teamName: 'Liverpool', wins: 12, draw: 4, loses: 5, scoredGoals: 37, concededGoals: 25},
]

function points(wins, draws) {
    return wins * 3 + draws;
}

function goalsDifferent(scoredGoals, concededGoals){
    return scoredGoals - concededGoals;
}

function leagueWinner1(teams) {
    teams.forEach(team => {
        console.log(team.teamName, points(team.wins, team.draw), goalsDifferent(team.scoredGoals, team.concededGoals));
    });

    console.log(teams.sort((a,b) => points(a) - points(b)))
}

console.log(leagueWinner1(participiants1));

console.log('/////////////////////////////////////////////////////////////////////////')

const participiants = [
    {teamName: 'Man. United', wins: 10, draw: 4, loses: 7, scoredGoals: 32, concededGoals: 40},
    {teamName: 'Chealsea', wins: 7, draw: 10, loses: 4, scoredGoals: 15, concededGoals: 14},
    {teamName: 'Liverpool', wins: 12, draw: 4, loses: 5, scoredGoals: 37, concededGoals: 25},
]

function points({wins, draw}) {
    return wins * 3 + draw;
}

function goalsDifferent1(scoredGoals, concededGoals){
    return scoredGoals - concededGoals;
}

function leagueWinner2(teams) {
    teams.forEach(team => {
        console.log(team.teamName, points(team), goalsDifferent1(team.scoredGoals, team.concededGoals));
    });

    console.log(teams.sort((a,b) => points(a) - points(b)))
}

console.log(leagueWinner2(participiants));

console.log('/////////////////////////////////////////////////////////////////////////')

const participiants2 = [
    {teamName: 'Man. United', wins: 10, draw: 4, loses: 7, scoredGoals: 32, concededGoals: 40},
    {teamName: 'Chealsea', wins: 7, draw: 10, loses: 4, scoredGoals: 15, concededGoals: 14},
    {teamName: 'Liverpool', wins: 12, draw: 4, loses: 5, scoredGoals: 37, concededGoals: 25},
]

function points({wins, draw}) {
    return wins * 3 + draw;
}

function goalsDifferent2(scoredGoals, concededGoals){
    return scoredGoals - concededGoals;
}

function leagueWinner3(teams) {
    teams.forEach(team => {
        console.log(team.teamName, points(team), goalsDifferent2(team.scoredGoals, team.concededGoals));
    });

    console.log(teams.sort((a,b) => points(b) - points(a)))
}

console.log(leagueWinner3(participiants2));

console.log('/////////////////////////////////////////////////////////////////////////')

const participiants3 = [
    {teamName: 'Man. United', wins: 10, draw: 4, loses: 7, scoredGoals: 32, concededGoals: 40},
    {teamName: 'Chealsea', wins: 12, draw: 4, loses: 5, scoredGoals: 15, concededGoals: 14},
    {teamName: 'Liverpool', wins: 12, draw: 4, loses: 5, scoredGoals: 37, concededGoals: 25},
]

function points({wins, draw}) {
    return wins * 3 + draw;
}

function goalsDifferent3(scoredGoals, concededGoals){
    return scoredGoals - concededGoals;
}

function leagueWinner4(teams) {

        teams.sort((a,b) => points(b) - points(a) || goalsDifferent3(b) - goalsDifferent3(a));
    }

console.log(leagueWinner4(participiants3));

console.log('/////////////////////////////////////////////////////////////////////////')

const participiants4 = [
    {teamName: 'Man United', wins: 10, draw: 4, loses: 7, scoredGoals: 32, concededGoals: 40},
    {teamName: 'Chelsea', wins: 12, draw: 4, loses: 5, scoredGoals: 15, concededGoals: 14},
    {teamName: 'Liverpool', wins: 12, draw: 4, loses: 5, scoredGoals: 37, concededGoals: 25},
]

function leagueWinner5(teams) {
    const points = ({wins, draw}) => 3 * wins + draw;
    const diff = ({scoredGoals, concededGoals}) => scoredGoals - concededGoals;
    return teams.sort((a,b) => points(b) - points(a) || diff(b) - diff(a))[0].teamName;
}

console.log(leagueWinner5(participiants4));