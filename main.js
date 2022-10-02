const videoHtml = document.getElementById("video");
const decisions = [];

const mainHtml = document.getElementById("main")


//My modules

import hideVideoPlayer from "./hideVideoPlayer.js";


const videoListener = () => {
  hideVideoPlayer(videoHtml)
  takeDecision("Modalidad LOR","despegue1.html","Modalidad vuelo directo","despegue2.html")
    
}

const takeDecision = (decision1,video1,decision2,video2)=>{
    const decisionsdiv = document.createElement("div")
    
    decisions.id = "decisions"
    const btn1 = document.createElement("a")
    const btn2 = document.createElement("a")
  
    btn1.innerHTML = decision1
    btn2.innerHTML = decision2
    btn1.href =  video1
    btn2.href = video2
    btn1.dataset.type = "button"
    btn1.dataset.video = video1
    btn2.dataset.type = "button"
    btn2.dataset.video = video2
  
    decisionsdiv.appendChild(btn1)
    decisionsdiv.appendChild(btn2)
    mainHtml.appendChild(decisionsdiv)
  
   
  
  }
  





videoHtml.addEventListener("ended", videoListener);

