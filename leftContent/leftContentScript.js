function showContent(){
    let icon = event.target;
    let resumeTextDiv = event.target.parentElement.parentElement
    let resumeContentDiv = resumeTextDiv.parentElement
    let resumeContentContent = resumeContentDiv.children[1]
    let resumeContentContentHeight = resumeContentContent.style.maxHeight
    let finalMaxHeight = "9999999px";

    icon.style.transition = "transform 1s";
    resumeContentContent.style.transition = "max-height 2s ease";

    if (resumeContentContentHeight == finalMaxHeight){
        icon.style.transform = "rotate(0deg)";
        resumeContentContent.style.maxHeight = "0px";
    }
    else{
        icon.style.transform = "rotate(180deg)";
        resumeContentContent.style.maxHeight = finalMaxHeight;
    }
}