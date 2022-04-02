module.exports = {streak}

function streak(team1) {
    if (team1.streak >= 3){
        return true;
    }
    else{
        return null;
    }
}