module.exports = {starPitcher}

function starPitcher(team1) {
    if (team1.spERA <= 3.35){
        return true;
    }
    else{
        return null;
    }
}