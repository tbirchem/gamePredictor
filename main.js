// Starting points for both teams rating

const t1Points = 0;

const t2Points = 0;

// * Teams receive + 2 points if Starting pitchers ERA is 3.35 or lower *

//Team 1 = Astros

let team1 = {
    spERA: 3.14, //weight of 1
    tPR: 7,     //weight of 2,1,0
    tOPS: .783,  //weight of 2
    tERA: 3.8,  //weight of 2
    tBA: .267,   //weight of 1
    lhpBA: .270, //weight of 2
    rhpBA: .266, //weight of 2
    streak: 0,   //weight of 1
    bigInjuries: 0, //weight of -1
}

//Team 2 = Angels

let team2 = {
    spERA: 3.18, //weight of 1
    tPR: 15,     //weight of 2,1 or 0
    tOPS: .717,  //weight of 2
    tERA: 4.69,  //weight of 2
    tBA: .245,   //weight of 1
    lhpBA: .248, //weight of 2
    rhpBA: .243, //weight of 2
    streak: 0,   //weight of 1
    bigInjuries: 0, // weight of -1
}


//Statistical Functions
//Function for comparing Starting Pitchers ERA

const {era} = require("./functions /spEra");

//Function for comparing teams OPS

const {tOPS} = require('./functions /tOPS');

//Function for comparing Teams ERA

const {tERA} = require('./functions /tERA');

//Function for comparing Teams Batting Average

const {tBA} = require('./functions /tBA');

//Function's for factoring in Team 1's winning streak

const {streak} = require('./functions /streak');

//Function's for factoring in Team 1's winning streak over 5 games

const {bigStreak} = require('./functions /bigStreak');

//Function's for factoring in Team 2's winning streak

const {streak2} = require('./functions /streak2')

//Function's for factoring in Team 2's winning streak over 5 games

const {bigStreak2} = require('./functions /bigStreak2');

//Function for factoring in a star pitcher pitching for team 1

const {starPitcher} = require('./functions /starPitcher');

//Function for factoring in a star pitcher pitching for team 2

const {starPitcher2} = require('./functions /starPitcher2');


//Function to add up Team 1's points

function t1PT(t1Points){
    while(t1Points <= 0) {
        if (era(team1, team2) === true) {
            t1Points = t1Points + 1;
        }
        if (tOPS(team1, team2) === true) {
            t1Points = t1Points + 2;
        }
        if (tERA(team1, team2) === true) {
            t1Points = t1Points + 2;
        }
        if (tBA(team1, team2) === true) {
            t1Points = t1Points + 1;
        }
        if (streak(team1) === true) {
            t1Points = t1Points + 1;
        }
        if (bigStreak(team1) === true) {
            t1Points = t1Points + 1
        }
        if (team1.tPR <= 10) {
            t1Points = t1Points + 2;
        }
        if (team1.tPR <= 20) {
            t1Points = t1Points + 1;
        }

        //CHECK BEFORE RUNNING
        //Enter "+ 0" if team 2 is throwing a Right-handed pitcher
        if (team1.lhpBA >= .250) {
            t1Points = t1Points + 0;
        }
        //Enter "+ 0" if team 2 is throwing a Left-handed pitcher
        if (team1.rhpBA >= .242) {
            t1Points = t1Points + 2;
        }

        if (team1.bigInjuries >= 2) {
            t1Points = t1Points - 1;
        }
        if (team1.bigInjuries >= 3) {
            t1Points = t1Points - 1;
        }
        if (starPitcher(team1) === true) {
            t1Points = t1Points + 2;
        }
    }
    return t1Points;
}

//Function to add up Team 2's points

function t2PT(t2Points){
    while(t2Points <= 0) {
        if (era(team1, team2) === false) {
            t2Points = t2Points + 1;
        }
        if (tOPS(team1, team2) === false) {
            t2Points = t2Points + 2;
        }
        if (tERA(team1, team2) === false) {
            t2Points = t2Points + 2;
        }
        if (tBA(team1, team2) === false) {
            t2Points = t2Points + 1;
        }
        if (streak2(team2) === true) {
            t2Points = t2Points + 1;
        }
        if (bigStreak2(team2) === true) {
            t2Points = t2Points + 1;
        }
        if (team2.tPR <= 10) {
            t2Points = t2Points + 2;
        }
        if (team2.tPR <= 20) {
            t2Points = t2Points + 1;
        }

        //CHECK BEFORE RUNNING
        //Enter "+ 0" if team 1 is throwing a Right-handed pitcher
        if (team2.lhpBA >= .250) {
            t2Points = t2Points + 2;
        }
        //Enter "+ 0" if team 1 is throwing a Left-handed pitcher
        if (team2.rhpBA >= .242) {
            t2Points = t2Points + 0;
        }

        if (team2.bigInjuries >= 2) {
            t2Points = t2Points - 1;
        }
        if (team2.bigInjuries >= 3) {
            t2Points = t2Points - 1;
        }
        if (starPitcher2(team2) === true) {
            t2Points = t2Points + 2;
        }
    }
    return t2Points;
}

//Function to find projected winner

function findWinner() {
    if (t1PT(t1Points) > t2PT(t2Points)){
        return("-> Team 1 is projected to win");
    }
    else if (t1PT(t1Points) < t2PT(t2Points)){
        return("-> Team 2 is projected to win");
    }
    else{
        return("-> Bet on team with a higher record... could go either way, don't bet more than 1 unit")
    }
}


// *Function's to determine how many units to bet on team 1*

//Function to suggest betting 1 unit at your own risk

function fiftyFiftyTeam1(){
    if (findWinner() === "-> Team 1 is projected to win" && t1PT(t1Points) === t2PT(t2Points) + 1 || t1PT(t1Points) === t2PT(t2Points) + 2){
        return("--> bet 1 unit at your own risk");
    }
    else{
        return ("");
    }
}

//Function to suggest betting 1 unit

function confidenceTeam1Unit1(){
    if (findWinner() === "-> Team 1 is projected to win" && t1PT(t1Points) === t2PT(t2Points) + 3 || t1PT(t1Points) === t2PT(t2Points) + 4){
        return("--> bet 1 unit");
    }
    else{
        return ("");
    }
}

//Function to suggest betting 2 units

function confidenceTeam1Unit2(){
    if(findWinner() === "-> Team 1 is projected to win" && t1PT(t1Points) === t2PT(t2Points) + 5 || t1PT(t1Points) === t2PT(t2Points) + 6 || t1PT(t1Points) === t2PT(t2Points) + 7){
        return("--> bet 2 units");
    }
    else{
        return ("");
    }
}

//Function to suggest betting 3 units

function confidenceTeam1Unit3(){
    if(findWinner() === "-> Team 1 is projected to win" && t1PT(t1Points) === t2PT(t2Points) + 8 || t1PT(t1Points) === t2PT(t2Points) + 9 || t1PT(t1Points) === t2PT(t2Points) + 10 || t1PT(t1Points) === t2PT(t2Points) + 11 || t1PT(t1Points) === t2PT(t2Points) + 11){
        return("--> bet 3 units");
    }
    else{
        return ("");
    }
}



// *Function's to determine how many units to bet on team 2*

//Function to suggest betting 1 unit at your own risk on team 2

function fiftyFiftyTeam2(){
    if (findWinner() === "-> Team 2 is projected to win" && t2PT(t2Points) === t1PT(t1Points) + 1 || t2PT(t2Points) === t1PT(t1Points) + 2){
        return("--> bet 1 unit at your own risk");
    }
    else{
        return ("");
    }
}

//Function to suggest betting 1 unit on team 2

function confidenceTeam2Unit1(){
    if (findWinner() === "-> Team 2 is projected to win" && t2PT(t2Points) === t1PT(t1Points) + 3 || t2PT(t2Points) === t1PT(t1Points) + 4){
        return("--> bet 1 unit");
    }
    else{
        return ("");
    }
}

//Function to suggest betting 2 units on team 2

function confidenceTeam2Unit2(){
    if(findWinner() === "-> Team 2 is projected to win" && t2PT(t2Points) === t1PT(t1Points) + 5 || t2PT(t2Points) === t1PT(t1Points) + 6 || t2PT(t2Points) === t1PT(t1Points) + 7){
        return("--> bet 2 units");
    }
    else{
        return ("");
    }
}

//Function to suggest betting 3 units on team 2

function confidenceTeam2Unit3(){
    if(findWinner() === "-> Team 2 is projected to win" && t2PT(t2Points) === t1PT(t1Points) + 8 || t2PT(t2Points) === t1PT(t1Points) + 9 || t2PT(t2Points) === t1PT(t1Points) + 10 || t2PT(t2Points) === t1PT(t1Points) + 11 || t2PT(t2Points) === t1PT(t1Points) + 12){
        return("--> bet 3 units");
    }
    else{
        return ("");
    }
}

console.log("Team 1 Points: ",t1PT(t1Points))
console.log("Team 2 Points: ",t2PT(t2Points))
console.log(findWinner())
console.log(fiftyFiftyTeam1())
console.log(confidenceTeam1Unit1())
console.log(confidenceTeam1Unit2())
console.log(confidenceTeam1Unit3())
console.log(fiftyFiftyTeam2())
console.log(confidenceTeam2Unit1())
console.log(confidenceTeam2Unit2())
console.log(confidenceTeam2Unit3())