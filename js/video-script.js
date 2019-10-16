let btns = document.querySelectorAll(".play-pause");

function togglePlayPause(e) {
  const el = e.currentTarget.parentNode.parentNode.querySelector(
    ".inner-video"
  );
  if (el.paused) {
    e.target.className = "pause";
    el.play();
  } else {
    e.target.className = "play";
    el.pause();
  }
}

for (const btn of btns) {
  btn.addEventListener('click', function(e) {
    togglePlayPause(e);
  })
}