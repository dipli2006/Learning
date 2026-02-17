let boxes = document.querySelectorAll(".box");
let resetButton = document.querySelector("#reset");
let newgameButton = document.querySelector("#new-game");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;
let count = 0;

const win=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

const resetGame = () => {
    turnO = true;
    count=0;
    enableBoxes();
    msgContainer.classList.add("hide");
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turnO){
            box.innerText = "O";
            turnO = false;
        } else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        count++;

        let winner = checkWin();
        
        if(count===9 && !winner){
            draw();
        }
    });
});

const draw = () => {
    msg.innerText = "It's a Draw! No Winner this time!";
    msgContainer.classList.remove("hide");
    disableBoxes();
};


const disableBoxes = () => {
    boxes.forEach((box) => {
        box.disabled = true;
    });
};

const enableBoxes = () => {
    boxes.forEach((box) => {
        box.disabled = false;
        box.innerText = "";
    });
};

const showWinner = (winner) => {
    msg.innerText = `Hurray! We got A Winner! ${winner} is the winner! Congratulations!`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const checkWin = () => {
    for(let pattern of win){

        let box1 = boxes[pattern[0]].innerText;
        let box2 = boxes[pattern[1]].innerText;
        let box3 = boxes[pattern[2]].innerText; 

        if(box1 != "" && box2 != "" && box3 != "" ){
            if(box1 === box2 && box2 === box3 ){
                showWinner(box1);
                return true;
            }
        }
    }
};


newgameButton.addEventListener("click", resetGame);
resetButton.addEventListener("click", resetGame);