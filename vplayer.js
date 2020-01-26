function textBoxKeyDownHandler(event) {
    if(event.code === "Enter") {
        addItem();
    }
}

addVideoToPlay = videoUrl => {
    var videoContainerElement = document.querySelector('#videoContainer');
    videoContainerElement.src = videoUrl;
}

validateUrl = videoUrl =>{
    var youtubeUrlRegex = /^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
    return videoUrl.match(youtubeUrlRegex);    
}

getModifiedUrl = videoUrl =>{
    const videoId = videoUrl.split('v=')[1];
    return `https://www.youtube.com/embed/${videoId}?autoplay=1&amp;mute=0`;
}

function addItem() {
    var videoUrl = document.getElementById('addLinkTextBox').value.trim();
    if(!videoUrl) return alert('Enter the Link');
    const isUrlValid = validateUrl(videoUrl);
    if(isUrlValid){
        const modifiedUrl = getModifiedUrl(videoUrl);
        var playlistLinkContainerElement = document.getElementById('playlistLinkContainer');
        if(playlistLinkContainerElement.children.length === 1){
            addVideoToPlay(modifiedUrl);
        }
        var newLink = document.createElement('div'); 
        newLink.innerHTML = videoUrl;
        newLink.style.margin = '15px';
        newLink.addEventListener('click', function(event){
            const videoUrl = event.target.innerHTML;
            addVideoToPlay(getModifiedUrl(videoUrl));
        })
        playlistLinkContainerElement.appendChild(newLink);
        clearInputField();
        return;
    }
    else{
        return alert('The Url provided is not valid. Please recheck');
    }   
}

function clearInputField() {
    document.getElementById('addLinkTextBox').value = "";
}  

function onVideoEnd(videoUrl){
    debugger;
}
