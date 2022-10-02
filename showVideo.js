const showVideo = (videoName,videosRoute,videoHtml)=>{
    videoHtml.innerHTML = ""

    const sourceElem = document.createElement("source")
    sourceElem.src = videosRoute+"/"+videoName
    sourceElem.type = "video/mp4"
    console.log(sourceElem.src,"sss")

    videoHtml.appendChild(sourceElem)
    videoHtml.dataset.inforeproducing = videoName

    videoHtml.play()



}

export default showVideo