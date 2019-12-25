var email = window.opener.document.getElementById("email");
var realname = window.opener.document.getElementById("RName");
var receive = window.opener.document.getElementById("receive");
var closeBtn = document.getElementById("close");
var nameinput = document.getElementsByTagName("span")[0];
var receiveText = document.getElementsByTagName("h6")[0];

function getName() {
  nameinput.innerHTML = realname.value;
}
function getText() {
  if (receive.checked) {
    receiveText.innerHTML = "You will receive our News letter every month";
  } else {
    receiveText.innerHTML = "We will not send you our News Letter";
  }
}
function Close() {
  window.close();
}

function event() {
  getName();
  getText();
  closeBtn.addEventListener("click", Close, false);
}
window.addEventListener("load", event, false);
