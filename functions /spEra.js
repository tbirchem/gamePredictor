module.exports = {era}

function era(team1, team2) {
    if (team1.spERA < team2.spERA){
        return true;
    }
    else if (team1.spERA > team2.spERA){
        return false;
    }
    else{
        return null;
    }
}