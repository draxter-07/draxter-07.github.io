function showProjectContent(){
    let icon = event.target;
    let resumeTextDiv = event.target.parentElement.parentElement
    let resumeContentDiv = resumeTextDiv.parentElement
    let resumeContentContent = resumeContentDiv.children[1]
    let resumeContentContentHeight = resumeContentContent.style.maxHeight

    let finalMaxHeight = "999px";
    let initialMaxHeight = "0px";
    let finalMaxWidth = "299px";

    icon.style.transition = "transform 1s";
    resumeContentContent.style.transition = "max-height 1.5s ease";
    if (resumeContentContentHeight == finalMaxHeight){
        icon.style.transform = "rotate(0deg)";
        resumeContentContent.style.maxHeight = initialMaxHeight;
        for (let i = 0; i < ids.length; i++){
            let element = document.getElementById(ids[i]);
            element.style.maxWidth = "0px";
        }
    }
    else{
        icon.style.transform = "rotate(180deg)";
        resumeContentContent.style.maxHeight = finalMaxHeight;
        for (let i = 0; i < ids.length; i++){
            let element = document.getElementById(ids[i]);
            element.style.maxWidth = finalMaxWidth;
        }
    }
}