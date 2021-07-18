// Designed by:  Mauricio Bucardo
// Original image: https://dribbble.com/shots/6957353-Music-Player-Widget


window.addEventListener('DOMContentLoaded', (event) => {

  // add elemnts
  const bgBody = ["#e5e7e9", "#ff4545", "#f8ded3", "#ffc382", "#f5eda6", "#ffcbdc", "#dcf3f3"];
  const body = document.body;
  const player = document.querySelector(".audio-player");
  // const playerHeader = player.querySelector(".audio-player__header");
  const playerControls = player.querySelector(".audio-player__controls");
  const playerPlayList = player.querySelectorAll(".audio-player__song");
  const playerSelect = player.querySelectorAll(".audio-player__select");

  const playerSongs = player.querySelectorAll(".audio");
  const playButton = player.querySelector(".play");
  const nextButton = player.querySelector(".next");
  const backButton = player.querySelector(".back");
  const playlistButton = player.querySelector(".playlist");
  // const slider = player.querySelector(".slider");
  const sliderContext = player.querySelector(".slider__context");
  const sliderName = sliderContext.querySelector(".slider__name");
  const sliderTitle = sliderContext.querySelector(".slider__title");
  const sliderTime = player.querySelector(".slider__time");
  const sliderContent = player.querySelector(".slider__content");
  const sliderContentLength = playerPlayList.length - 1;
  const sliderWidth = 100;
  let left = 0;
  let count = 0;
  let song = playerSongs[count];
  let isPlay = false;
  const timer = document.getElementById('current__time');
  const pauseIcon = playButton.querySelector(".icon--pause");
  const playIcon = playButton.querySelector(".icon--play");
  const progress = player.querySelector(".progress");
  const progressFilled = progress.querySelector(".progress__filled");
  let isMove = false;

  function togglePlayer() {
    playerSelect[0].classList.toggle("show-list");
  }

  function next(index) {
    count = index || count;
    if (count == sliderContentLength) {
      count = 0;
    } else {
      count++;
    }
    run();
  }

  function back(index) {
    count = index || count;
    if (count == 0) {
      count = sliderContentLength;
    } else {
      count--;
    }
    run();
  }

  function changeSliderContext() {
    sliderContext.style.animationName = "opacity";

    sliderName.textContent = playerPlayList[count].querySelector(".audio-player__title").textContent;
    sliderTitle.textContent = playerPlayList[count].querySelector(".audio-player__song-name").textContent;
    sliderTime.textContent = playerPlayList[count].querySelector(".audio-player__song-time").textContent;

  }


  function selectSong() {
    song = playerSongs[count];

    for (const item of playerSongs) {
      if (item != song) {
        item.pause();
        item.currentTime = 0;
      }

    }

    if (isPlay) {
      song.play();
    }
    playerSelect[0].classList.remove("show-list");

  }

  function run() {
    changeSliderContext();
    selectSong();
  }

  function playSong() {
    if (song.paused) {
      song.play();
      playIcon.style.display = "none";
      pauseIcon.style.display = "block";

     var update = setInterval(function() {
          var mins = Math.floor(song.currentTime / 60);
          var secs = Math.floor(song.currentTime % 60);
          if (secs < 10) {
            secs = '0' + String(secs);
          }
          newTime = mins + ':' + secs;
          timer.innerHTML = newTime;
        }, 10);

    } else {
      song.pause();
      isPlay = false;
      playIcon.style.display = "";
      pauseIcon.style.display = "";
      clearInterval(update)
      timer.innerHTML = newTime;
    }

  }

  function progressUpdate() {
    const progressFilledWidth = (this.currentTime / this.duration) * 100 + "%";
    progressFilled.style.width = progressFilledWidth;

    if (isPlay && this.duration == this.currentTime) {
      next();
    }
    // if (count == sliderContentLength && song.currentTime == song.duration) {
    if (song.currentTime == song.duration) {
      playIcon.style.display = "block";
      pauseIcon.style.display = "";
      isPlay = false;
    }
  }

 

  function scurb(e) {
    // If we use e.offsetX, we have trouble setting the song time, when the mousemove is running
    const currentTime = ((e.clientX - progress.getBoundingClientRect().left) / progress.offsetWidth) * song.duration;
    song.currentTime = currentTime;
  }

  function durationSongs() {
    let min = parseInt(this.duration / 60);
    if (min < 10) min = "0" + min;

    let sec = parseInt(this.duration % 60);
    if (sec < 10) sec = "0" + sec;

    const playerSongTime = `${min}:${sec}`;
    this.closest(".audio-player__song").querySelector(".audio-player__song-time").append(playerSongTime);
    
    run();

  }


  changeSliderContext();

  // add events

  playlistButton.addEventListener("click", togglePlayer);
  sliderContext.addEventListener("animationend", () => sliderContext.style.animationName = '');
  // playlistButton.addEventListener("click", closePlayer);

  nextButton.addEventListener("click", () => {
    next(0)
  });

  backButton.addEventListener("click", () => {
    back(0)
  });

  playButton.addEventListener("click", () => {
    isPlay = true;
    playSong();
  });

  playerSongs.forEach(song => {
    song.addEventListener("loadeddata", durationSongs);
    song.addEventListener("timeupdate", progressUpdate);
  });

  progress.addEventListener("pointerdown", (e) => {
    scurb(e);
    isMove = true;
  });

  document.addEventListener("pointermove", (e) => {
    if (isMove) {
      scurb(e);
      song.muted = true;
    }
  });

  document.addEventListener("pointerup", () => {
    isMove = false;
    song.muted = false;
  });

  playerPlayList.forEach((item, index) => {
    item.addEventListener("click", function() {
      if (index > count) {
        next(index - 1);
        return;
      }

      if (index < count) {
        back(index + 1);
        return;
      }

    });
  });

});