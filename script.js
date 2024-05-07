

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

function updateTime() {
  let currentTime = new Date().toLocaleTimeString();
  document.getElementById("time").innerText = currentTime;
}

updateTime();

let interValid = setInterval(updateTime, 1000);



function updateDate() {
  let currentDate = new Date().toLocaleDateString();
  document.getElementById("date").innerText = currentDate;
}

updateDate();





