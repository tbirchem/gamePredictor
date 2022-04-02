module.exports = {tERA}

function tERA(team1, team2) {
    if (team1.tERA < team2.tERA){
        return true;
    }
    else if (team1.tERA > team2.tERA){
        return false;
    }
    else{
        return null;
    }
}
