function showProjectContent(){
    let icon = event.target;
    let projectTextDiv = event.target.parentElement.parentElement
    let anteriorProjectDiv = projectTextDiv.parentElement
    let projectContentDiv = anteriorProjectDiv.children[1]
    let projectContentDivHeight = projectContentDiv.style.maxHeight

    let finalMaxHeight = "999px";
    let initialMaxHeight = "0px";

    icon.style.transition = "transform 1s";
    projectContentDiv.style.transition = "max-height 1.5s ease";
    if (projectContentDivHeight == finalMaxHeight){
        icon.style.transform = "rotate(0deg)";
        projectContentDiv.style.maxHeight = initialMaxHeight;
    }
    else{
        icon.style.transform = "rotate(180deg)";
        projectContentDiv.style.maxHeight = finalMaxHeight;
    }
}