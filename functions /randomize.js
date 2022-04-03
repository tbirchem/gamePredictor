module.exports = {randomizeTeam1}

let randomNumber;
let i = 0;

function randomizeTeam1(){
        for(i; i <= 1; i++){
            randomNumber = Math.ceil(Math.random()*12)
        }
        return randomNumber;
}
