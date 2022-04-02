module.exports = {tBA}

function tBA(team1, team2) {
    if (team1.tBA > team2.tBA){
        return true;
    }
    else if (team1.tBA < team2.tBA){
        return false;
    }
    else{
        return null;
    }
}
