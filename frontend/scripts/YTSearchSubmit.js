function YTSearchSubmit(){
    var youtubeLink= document.getElementById("YTSearch").value;

    //check if valid link
    if(!youtubeLink )
        alert("Please enter YT Link first");

    var embedyoutubeLink = youtubeLink.replace("watch?v=", "embed/");

    document.getElementById("videoIFrame").src=embedyoutubeLink;
}