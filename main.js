//By: Rickard Ötvös

let menuArray = ["Start", "Load", "Options", "Exit"];

function submit() {
  var x = document.getElementById("fname").value;
  if (x.length < 3 || hasNumber(x)) {
    document.getElementById("constraint").style.visibility = "visible";
  } else {
    // Maybe it is unnecessary to remove the visibility if the user is redirected to another page
    document.getElementById("constraint").style.visibility = "hidden";
    document.location.href = "./index.html";
  }
}

function hasNumber(myString) {
  return /\d/.test(myString);
}
