document.addEventListener("click", loadMedia);

function loadMedia(event) {

    if (event.target.tagName === "IMG")
        {
            const fileName = event.target.id;
            const extension = fileName.slice(-3);

            document.getElementById("currentlyPlaying").textContent = fileName;

            if (extension === "mp3")
                {
                    const audioPlayer = document.getElementById("audioPlayer");
                    const audioFile = document.getElementById("audioFile");
                    
                    audioFile.src = fileName;
                    audioFile.type = "audio/mpeg";

                    audioPlayer.load();
                    audioPlayer.play();
                    
                }
            else if (extension === "mp4")
                {
                    const videoPlayer = document.getElementById("videoPlayer");
                    const videoFile = document.getElementById("videoFile");
                    
                    videoFile.src = fileName;
                    videoFile.type = "video/mp4";

                    videoPlayer.load();
                    videoPlayer.play();
                }

        }
}