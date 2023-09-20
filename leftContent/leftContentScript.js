function showContent(){
    let icon = event.target;
    let resumeTextDiv = event.target.parentElement.parentElement
    let resumeContentDiv = resumeTextDiv.parentElement
    let resumeContentContent = resumeContentDiv.children[1]
    let resumeContentContentHeight = resumeContentContent.style.maxHeight

    let ids = ["pythonLoad", "htmlLoad", "reactLoad"];

    let finalMaxHeight = "999px";
    let finalMaxWidth = "299px";

    icon.style.transition = "transform 1s";
    resumeContentContent.style.transition = "max-height 2s ease";
    for (let i = 0; i < ids.length; i++){
        let element = document.getElementById(ids[i]);
        element.style.transition = "max-width 2s ease 1." + i*2 + "s";
    }
    
    if (resumeContentContentHeight == finalMaxHeight){
        icon.style.transform = "rotate(0deg)";
        resumeContentContent.style.maxHeight = "0px";
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