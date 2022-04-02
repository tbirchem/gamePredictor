module.exports = {starPitcher2}

function starPitcher2(team2) {
    if (team2.spERA <= 3.35){
        return true;
    }
    else{
        return null;
    }
}