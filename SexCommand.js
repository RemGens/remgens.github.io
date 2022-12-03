const box = document.getElementById("inputBox");
const sex = document.getElementById("imageSex");

let sexCount = 0;
let isError = false;
box.addEventListener("keyup", function (e) {
  if (e.which == 13 || e.keyCode == 13) {
    if (sexCount == 0 && box.value.trim() == "s/e/x" && isError == false) {
      sex.src = "./Sex1.png";
      sexCount = 1;
      box.value = "";
    } else if (sexCount == 1 && box.value.trim() == "s/e/x" && isError == false) {
      sex.src = "./Sex2.png";
      sexCount = 2;
      box.value = "";
    } else if (sexCount == 1 && box.value.trim() == "s/x/e" && isError == false) {
      sex.src = "./Cat.gif";
      sexCount = 0;
      box.value = "";
    } else if (box.value.trim() == "reset" && isError == false) {
      sex.src = "./Cat.gif";
      sexCount = 0;
      box.value = "";
    } else {
      isError = true;
      box.value = "Not Valid Command";
      box.style.color = "red";
      box.readOnly = true;
      setTimeout(() => {
        box.value = "";
        box.readOnly = false;
        box.style.color = "black";
        isError = false;
      }, 1000);
    }
  }
});
