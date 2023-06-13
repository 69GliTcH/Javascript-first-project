let ra1 = Math.floor((Math.random() * 6) + 1);
let ra1_dice="dice"+ra1+".png";
let image1=document.querySelector(".dice1");
image1.setAttribute("src",ra1_dice);

let ra2 = Math.floor((Math.random() * 6) + 1);
let ra2_dice="dice"+ra2+".png";
let image2=document.querySelector(".dice2");
image2.setAttribute("src",ra2_dice);



if(ra1>ra2){
    document.querySelector("h1").innerHTML="Player 1 Wins";
}
else if(ra1==ra2){
    document.querySelector("h1").innerHTML="Draw!";
}
else{
    document.querySelector("h1").innerHTML="Player 2 Wins";
}