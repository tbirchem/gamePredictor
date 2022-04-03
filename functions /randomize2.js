module.exports = {randomizeTeam2}

let randomNumber;
let i = 0;

function randomizeTeam2(t1Points,t2Points){
    if ((t2Points) + 2  || (t2Points) + 1 || (t2Points) === (t1Points)){
        for(i; i <= 5; i++){
            randomNumber = Math.ceil(Math.random()*12)
        }
        return randomNumber;
    }
}