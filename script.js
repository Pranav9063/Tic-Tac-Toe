let boxes= document.querySelectorAll(".box");
let resetBtn= document.querySelector("#reset-btn");
let newGameBtn= document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let main=document.querySelector("main");
let turn0=true;

const winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
var count=0;
boxes.forEach((box) => {
    box.addEventListener("click",() => {
        
        console.log("Block was clicked");
        if(turn0){
            box.innerText="O";
            turn0=false;
        }
        else{
            box.innerText="X";
            turn0=true;
        }
        box.disabled=true;
        count++;
        checkWinner();
        if(count==9){
            console.log(count);
            showDraw();
        }

    })
});

const resetGame= () =>{
    turn0=true;
    enableBoxes();
    msgContainer.classList.add("hide");
    main.classList.remove("hide");
}

const disableBoxes =() =>{
    boxes.forEach(box => {
        box.disabled=true;
    });
    main.classList.add("hide");
}

const enableBoxes =() =>{
    boxes.forEach(box => {
        box.disabled=false;
        box.innerText="";
    });
}
const showDraw= ()=>{
    msg.innerText="Draw!"
    msgContainer.classList.remove("hide");
    count=0;
}

const showWinner= (winner) =>{
    count=0;
    msg.innerText=`Congratulations! , Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
    
}

const checkWinner=()=>{
    for (let pattern of winpatterns) {
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;

        if(pos1val != "" && pos2val != "" && pos3val != ""){
            if(pos1val==pos2val && pos2val==pos3val){
                showWinner(pos1val);
            }
        }
    }
}

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);