module.exports = {bigStreak}

function bigStreak(team1) {
    if(team1.streak >= 5){
        return true;
    }
    else{
        return null;
    }
}