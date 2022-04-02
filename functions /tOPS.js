module.exports = {tOPS}

function tOPS(team1, team2) {
    if (team1.tOPS > team2.tOPS){
        return true;
    }
    else if (team1.tOPS < team2.tOPS){
        return false;
    }
    else{
        return null;
    }
}