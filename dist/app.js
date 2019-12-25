var subbtn = document.getElementById("submit");
var ifReceive = document.getElementById("receive");
var email = document.getElementById("email");
var realname = document.getElementById("RName");
var errorMessage = document.getElementById("errorMsg");
var password = document.getElementById("password");
var ifValide = true;

function validity() {
  try {
    if (realname.value == "" || email.value == "" || password.value == "") {
      ifValide = false;
      throw "Please fill the form";
    } else {
      ifValide = true;
      errorMessage.style.display = "none";
    }
  } catch (msg) {
    errorMessage.innerHTML = msg;
    errorMessage.style.display = "block";
    ifValide = false;
  }
}

function submitted() {
  var propertyWidth = 600;
  var propertyHeight = 400;
  var winLeft = (screen.width - propertyWidth) / 2;
  var winTop = (screen.height - propertyHeight) / 2;
  var winOptions = "width=600,height=400";
  winOptions = winOptions + ",left=" + winLeft;
  winOptions = winOptions + ",top=" + winTop;
  var zoomWindow = window.open("zoomIn.html", "_blank", winOptions);
  zoomWindow.focus();
}
function events() {
  validity();
  if (ifValide != false) {
    submitted();
  }
}

window.addEventListener(
  "load",
  subbtn.addEventListener("click", events, false)
);
