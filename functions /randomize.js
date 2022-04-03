module.exports = {randomizeTeam1}

let randomNumber;
let i = 0;

function randomizeTeam1(t1Points,t2Points){
    if ((t1Points) + 2  || (t1Points) + 1 || (t1Points) === (t2Points)){
        for(i; i <= 5; i++){
            randomNumber = Math.ceil(Math.random()*12)
        }
        return randomNumber;
    }
}


