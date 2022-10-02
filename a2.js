const videoHtml = document.getElementById("video");
const decisions = [];

const mainHtml = document.getElementById("main")


//My modules

import hideVideoPlayer from "./hideVideoPlayer.js";


const videoListener = () => {
  hideVideoPlayer(videoHtml)
  takeDecision("upss esta no fue una buena eleccion","index.html")
    
}

const takeDecision = (decision1,video1)=>{
    const decisionsdiv = document.createElement("div")
    
    decisions.id = "decisions"
    const btn1 = document.createElement("a")
  
    btn1.innerHTML = decision1

    btn1.href =  video1

    btn1.dataset.type = "button"
    btn1.dataset.video = video1
   
  
    decisionsdiv.appendChild(btn1)

    mainHtml.appendChild(decisionsdiv)
  
   
  
  }
  



//videoHtml.play()

videoHtml.addEventListener("ended", videoListener);

