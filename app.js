
let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let msg=document.querySelector("#msg");
let newgame=document.querySelector("#new");
let msgcontainer=document.querySelector(".msg-container");
let turn0=true;
let count=0;
const winning=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];
const resetgame=()=>
{
    turn0=true;
    enableboxes();
    msgcontainer.classList.add("hide");
  
};
const enableboxes=()=>
{
    for(let box of boxes)
    {
        box.disabled=false;
        box.innerText="";
    }
};
boxes.forEach((box)=>
{
  box.addEventListener("click",()=>{
    console.log("button clicked");
    if(turn0==true)
    {
        box.innerText="o";
        turn0=false;
    }else
    {
        box.innerText="X";
        turn0=true; 
    }
    box.disabled=true;
    count++;

   let i= checkwinner();
   if(count === 9 && i!=true)
   {
    gamedraw();
   }
  })
});
const gamedraw=()=>
{
    msg.innerText=`Game is Drawn`;
    msgcontainer.classList.remove("hide");
    disableboxes();
    
}
const checkwinner=()=>
{
    for(let pattern of winning)
    {
        let play1=boxes[pattern[0]].innerText;
        let play2=boxes[pattern[1]].innerText;
        let play3=boxes[pattern[2]].innerText;
        if(play1!=""&& play2!="" &&play3!="")
        {
            if(play1==play2 && play2==play3){
                showwinner(play1);
               return true;
            }
        }
    }
    return false;
};
const showwinner=(winner)=>
{
    msg.innerText=`Congratulations Winning is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableboxes();
};
const disableboxes=()=>
{
    for(let box of boxes)
    {
        box.disabled=true;
    }
};
newgame.addEventListener("click", resetgame);
reset.addEventListener("click", resetgame);