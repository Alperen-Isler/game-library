const container = document.querySelector(".game-container");
const bookTitle = document.querySelector("h2");
const addNewGameButton = document.querySelector(".add-game");
const addNewGameDialog = document.querySelector(".add-game-dialog");
const closeModalButton = document.querySelector("#close-modal");
const newGameForm = document.querySelector("#new-game-form");

const myLibrary = [];

class Game{
    constructor(name, gamePlatform, hoursPlayed, finished){
        this.name = name;
        this.gamePlatform = gamePlatform;
        this.hoursPlayed = hoursPlayed;
        this.id = crypto.randomUUID();
        if(finished === "true"){
        this.finished = "✅ finished"
        } else if (finished === "false"){
        this.finished = "⚠️ not finished"
        };
    }
};

function addGameToLibrary(name, gamePlatform, hoursPlayed, finished){
    return myLibrary.push(new Game(name, gamePlatform, hoursPlayed, finished));
};

function removeGameFromLibrary(){
};

function renderLibrary(){
    container.innerHTML = "";
    myLibrary.forEach(game => {
        let card = document.createElement("div");
        card.classList.add("card");
        container.appendChild(card);
        if(game.finished === "✅ finished"){
            card.classList.add("status-finished")
        } else if(game.finished === "⚠️ not finished"){
            card.classList.add("status-not-finished")
        };
        let gameTitle = document.createElement("h2");
        card.appendChild(gameTitle);
        gameTitle.textContent = game.name;
        let deleteCardButton = document.createElement("button");
        deleteCardButton.textContent = "X";
        card.appendChild(deleteCardButton);
        deleteCardButton.classList.add("delete-card-button");
        deleteCardButton.dataset.id = game.id;
        let gamePlatform = document.createElement("p");
        card.appendChild(gamePlatform);
        gamePlatform.textContent = "Platform: " + game.gamePlatform;
        gamePlatform.classList.add("game-platform");
        let gameHoursPlayed = document.createElement("p");
        gameHoursPlayed.classList.add("game-hours-played");
        card.appendChild(gameHoursPlayed);
        gameHoursPlayed.textContent = "Hours played: " + game.hoursPlayed;
        let gameStatus = document.createElement("p");
        card.appendChild(gameStatus);
        gameStatus.textContent = "Game status: " + game.finished;
        gameStatus.classList.add("game-status");
        let finishedNowButton = document.createElement("button");
        card.appendChild(finishedNowButton);
        finishedNowButton.textContent = "Toggle Game Status"
        finishedNowButton.classList.add("finished-now-button");
        

        deleteCardButton.addEventListener("click", function(){
            const index = myLibrary.findIndex(
            gameInLibrary => gameInLibrary.id === game.id
            );

            myLibrary.splice(index, 1);
            renderLibrary();
            });

        finishedNowButton.addEventListener("click", function(){
            if (game.finished === "✅ finished"){
                game.finished = "⚠️ not finished";
                renderLibrary();
            } else if (game.finished === "⚠️ not finished"){
                game.finished = "✅ finished";
                renderLibrary();
            }
        });
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

addGameToLibrary("GTA 6", "PS5", "0", "false");
renderLibrary();
