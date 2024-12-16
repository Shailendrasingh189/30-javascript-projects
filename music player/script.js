let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlIcon = document.getElementById("ctrl-icon");

song.onloadedmetadata = () => {
  progress.max = song.duration;
  progress.value = song.currentTime;
};

const updateProgress = () => {
  setInterval(() => {
    progress.value = song.currentTime;
  }, 500);
};

try {
    progress.onchange = () => {
        song.play();
        song.currentTime = progress.value;
        ctrlIcon.classList.remove("fa-play");
        ctrlIcon.classList.add("fa-pause");
      };
} catch (error) {
    console.log(error)
}

const playPause = () => {
  if (ctrlIcon.classList.contains("fa-pause")) {
    song.pause();
    console.log("work");
    ctrlIcon.classList.remove("fa-pause");
    ctrlIcon.classList.add("fa-play");
  } else {
    song.play();
    updateProgress();
    ctrlIcon.classList.remove("fa-play");
    ctrlIcon.classList.add("fa-pause");
  }
};
