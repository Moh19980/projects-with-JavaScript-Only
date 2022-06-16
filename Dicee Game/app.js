
let btn= document.querySelector("button")
let h1=document.querySelector("h1")
btn.addEventListener("click",(eo) => { 
    let randomNumber1=Math.floor(Math.random()*6 )+1
    let images="dice"+randomNumber1+".png"
    let imageNum="images/"+images
    let image1=document.querySelectorAll("img")[0].setAttribute("src",imageNum)
    let randomNum2=Math.floor(Math.random()*6)+1
    let images2="dice"+randomNum2+".png"
    let imageNum2="images/"+images2
    let image2=document.querySelectorAll("img")[1].setAttribute("src",imageNum2)
    if (randomNumber1>randomNum2){
        h1.innerHTML="Player 1 is the Winner "
        
        }else if(randomNumber1< randomNum2){
            h1.innerHTML="Player 2 is the Winner"
        }else{
            h1.innerHTML="Draw"
        }
        
    preventDefault();
    

 })


 