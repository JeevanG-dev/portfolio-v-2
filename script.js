// const wrap = document.getElementById("wrapper");

// wrap.addEventListener("pointermove", (e) => {
//   const { currentTarget: el, clientX: x, clientY: y } = e;
//   const { top: t, left: l, width: w, height: h } = el.getBoundingClientRect();
//   el.style.setProperty("--posX", x - l - w / 2);
//   el.style.setProperty("--posY", y - t - h / 2);
// });

// let haha = new Audio(".assests/Microsoft Windows 7 Startup Sound.mp3")

var soud = document.querySelectorAll(".iconClick");

// Add a click event listener to the anchor tag
soud.forEach(function (press) {
  press.addEventListener("click", function (event) {
    event.preventDefault();

    var href = press.getAttribute("href");

    var clickSound = document.getElementById("clickSound");
    clickSound.play();

    setTimeout(function () {
      // Navigate to the URL specified in the href attribute
      window.location.href = href;
    }, 300);
  });
});

document.getElementById("windows-pop").addEventListener("click", function () {
  var clickSound = document.getElementById("clickSound");
  clickSound.play();
});
