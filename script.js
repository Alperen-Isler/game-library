const container = document.querySelector(".game-container");
const bookTitle = document.querySelector("h2");
const addNewGameButton = document.querySelector(".add-game");
const addNewGameDialog = document.querySelector(".add-game-dialog");
const closeModalButton = document.querySelector("#close-modal");
const newGameForm = document.querySelector("#new-game-form");

const myLibrary = [];

function Game(name, gamePlatform, hoursPlayed, finished){
    if(!new.target){
        throw Error("you must use the 'new' operator to call the constructor")
    }
    this.name = name;
    this.gamePlatform = gamePlatform;
    this.hoursPlayed = hoursPlayed;
    this.id = crypto.randomUUID();
    if(finished === "true"){
        this.finished = "finished the Game"
    } else if (finished === "false"){
        this.finished = "didn't finish the game yet"
    };
};

function addGameToLibrary(name, gamePlatform, hoursPlayed, finished){
    return myLibrary.push(new Game(name, gamePlatform, hoursPlayed, finished));
};

function renderLibrary(){
    container.innerHTML = "";
    myLibrary.forEach(game => {
        let card = document.createElement("div");
        card.classList.add("card");
        container.appendChild(card);
        let gameTitle = document.createElement("h2");
        card.appendChild(gameTitle);
        gameTitle.textContent = game.name;
        let gameDevelopers = document.createElement("p");
        card.appendChild(gameDevelopers);
        gameDevelopers.textContent = "Platform: " + game.gamePlatform;
        let gameHoursPlayed = document.createElement("p");
        card.appendChild(gameHoursPlayed);
        gameHoursPlayed.textContent = "Hours played: " + game.hoursPlayed;
        let gameStatus = document.createElement("p");
        card.appendChild(gameStatus);
        gameStatus.textContent = "Game status: " + game.finished;
    });
}

addNewGameButton.addEventListener("click", function(){
    addNewGameDialog.showModal();
});

closeModalButton.addEventListener("click", function(){
    addNewGameDialog.close();
});

newGameForm.onsubmit = function(e){
    e.preventDefault();
    const newGameName = document.querySelector("#new-game-name").value;
    const newGamePlatform = document.querySelector("input[name='game-platform']:checked").value;
    const newGameHoursPlayed = document.querySelector("#game-time-played").value;
    const newGameStatus = document.querySelector("input[name='is-finished']:checked").value;
    addGameToLibrary(newGameName, newGamePlatform, newGameHoursPlayed, newGameStatus);
    renderLibrary();
    newGameForm.reset();
    addNewGameDialog.close();
};
