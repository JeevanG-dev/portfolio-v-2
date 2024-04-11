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

var correctPassword = "jatin123"; // Change this to your desired password

// Function to check the entered password and toggle the locked/unlocked state
function checkPassword() {
  var passwordInput = document.getElementById("passwordInput");
  var enteredPassword = passwordInput.value.trim();

  if (enteredPassword === correctPassword) {
    // If password is correct, unlock the div
    var divElement = document.getElementById("lockedDiv");
    divElement.classList.remove("locked");
    divElement.classList.add("unlocked");
    divElement.textContent = "Unlocked - Click to lock";
    passwordInput.style.display = "none"; // Hide the password input
  } else {
    alert("Incorrect password. Please try again.");
    passwordInput.value = ""; // Clear the input field
  }
}
