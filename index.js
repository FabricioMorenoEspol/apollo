const videoHtml = document.getElementById("video");
const decisions = [];
const decisionKey = true;
const videosRoute = "videos";
const mainHtml = document.getElementById("main")

//Module
const swup = new Swup();

//My modules
import videosLinks from "./videosLinks.js";
import showVideo from "./showVideo.js";
import hideVideoPlayer from "./hideVideoPlayer.js";

const allDecisions = []

const visibleVideo = (videoHtml)=>{
  videoHtml.width = 1000
  videoHtml.style.visibility = "visible"
}

const videoListener = () => {
  hideVideoPlayer(videoHtml)

  videoHtml.removeEventListener('ended',videoListener);
  takeDecision("Despegue directo",videosLinks.despegue[0],"Depegue LOR",videosLinks.despegue[1])
  
    
    
}

const takeDecision = (decision1,video1,decision2,video2)=>{
  const decisionsdiv = document.createElement("div")
  
  decisions.id = "decisions"
  const btn1 = document.createElement("button")
  const btn2 = document.createElement("button")

  btn1.innerHTML = decision1
  btn2.innerHTML = decision2
  btn1.dataset.type = "button"
  btn1.dataset.video = video1
  btn2.dataset.type = "button"
  btn2.dataset.video = video2

  decisionsdiv.appendChild(btn1)
  decisionsdiv.appendChild(btn2)
  mainHtml.appendChild(decisionsdiv)

  decisionsdiv.addEventListener("click",e=>{
    const decisionSelected = e.target
    if(decisionSelected.dataset.type === "button"){
      visibleVideo(videoHtml)
      
      showVideo(decisionSelected.dataset.video,videosRoute,videoHtml)
      videoHtml.addEventListener("ended",videoListener)
    }
    console.log(decisionSelected);
  })

}


showVideo(videosLinks.intro, videosRoute, videoHtml);

videoHtml.addEventListener("ended", videoListener);

const chooseDecision = async () => {
  return setTimeout(() => {
    console.log("reprocuciendo");
  }, 2000);
};
