let Clubs = [
        {
            name: "Ansenal",
            points: 99,
            GD: 45,
        },
        {
            name: "Tottenham",
            points: 99,
            GD: 45,
        },
        {
            name: "Chelsea",
            points: 80,
            GD: 29,
        },
        {
            name: "Manchester United",
            points: 60,
            GD: 29,
        },
        {
            name: "Liverpool",
            points: 88,
            GD: 39,
        },
        {
            name: "Everton",
            points: 88,
            GD: 29,
        }
]
var clubresult = [];
for (let i = 0; i < Clubs.length; i++) {
    clubresult.push(Clubs[i]);
}
function sortPosition() {
    for (let i = 0; i < Clubs.length - 1; i++) {
        for (let j = i + 1; j < Clubs.length; j++) {
            if (Clubs[i].point > Clubs[j].point) {
                let temp = Clubs[i];
                Clubs[i] = Clubs[j];
                Clubs[j] = temp;
            } else if (Clubs[i].point == Clubs[j].point) {
                if (Clubs[i].GD < Clubs[j].GD) {
                    let temp = Clubs[i];
                    Clubs[i] = Clubs[j];
                    Clubs[j] = temp;
                } if (Clubs[i].GD == Clubs[j].GD) {
                    let name1 = Clubs[i].name.toLocaleLowerCase;
                    let name2 = Clubs[j].name.toLocaleLowerCase;
                    if (name1 > name2) {
                        let temp = Clubs[i];
                        Clubs[i] = Clubs[j];
                        Clubs[j] = temp;
                    }
                }
            }
        }
    }
    for (let i = 0; i < Clubs.length; i++) {
        for (let j = 0; j < clubresult.length; j++) {
            if(Clubs[i].name == clubresult[j].name){
                let index = i+1;
                clubresult[j].position = index;
                break;
            }
         }
     }
}

sortPosition();
console.log(clubresult);




