window.addEventListener("load", () => {
  const sounds = document.querySelectorAll(".sound");
  const pads = document.querySelectorAll(".pads div");
  console.log(typeof sounds);
  console.log(sounds[0]);
  const visual = document.querySelector(".visual");
  const colors = [
    "#60d394",
    "#d36060",
    "#c060d3",
    "#d3d160",
    "#606bd3",
    "#410c4ec5"
  ];

  //sounds
  pads.forEach((pad, index) => {
    pad.addEventListener("click", function() {
      sounds[index].currentTime = 0;
      sounds[index].play();

      createBubbles(index);
    });
  });

  //bubbles
  const createBubbles = index => {
    const bubble = document.createElement("div");
    visual.appendChild(bubble);
    bubble.style.background = colors[index];
    bubble.style.animation = "jump 1s ease";
  };
});
