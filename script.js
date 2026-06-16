let container = document.querySelector(".container");
let bookTitle = document.querySelector("h2");

const myLibrary = [];

function Game(name, developedBy, hoursPlayed, finished){
    if(!new.target){
        throw Error("you must use the 'new' operator to call the constructor")
    }
    this.name = name;
    this.developedBy = developedBy;
    this.hoursPlayed = hoursPlayed;
    this.id = crypto.randomUUID();
    if(finished === true){
        this.finished = "finished the Game"
    } else if (finished === false){
        this.finished = "didn't finish the game yet"
    };
};

function addGametoLibrary(name, developedBy, hoursPlayed, finished){
    return myLibrary.push(new Game(name, developedBy, hoursPlayed, finished));
};

addGametoLibrary("GTA 6", "Rockstar games", 0, false);
addGametoLibrary("The Witcher 4", "CD Project Red", 0, false);

console.log(myLibrary);

for (let i = 0; i < myLibrary.length; i++){
    let card = document.createElement("div");
    card.classList.add("card");
    container.appendChild(card);
    let gameTitle = document.createElement("h2");
    card.appendChild(gameTitle);
    gameTitle.textContent = myLibrary[i].name;
    let gameDevelopers = document.createElement("p");
    card.appendChild(gameDevelopers);
    gameDevelopers.textContent = "developed by: " + myLibrary[i].developedBy;
    let gameHoursPlayed = document.createElement("p");
    card.appendChild(gameHoursPlayed);
    gameHoursPlayed.textContent = "Hours played: " + myLibrary[i].hoursPlayed;
    let gameStatus = document.createElement("p");
    card.appendChild(gameStatus);
    gameStatus.textContent = "Game status: " + myLibrary[i].finished;
};
