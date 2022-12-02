let hiddenInput = document.getElementsByClassName("hidden")[0];
let hiddenP = document.getElementsByClassName("hiddenp")[0];
let editInput = document.getElementsByClassName("edit")[0];
let editP = document.getElementsByClassName("editp")[0];
let conHid = document.getElementsByClassName("convertHin")[0];
let conEd = document.getElementsByClassName("convertEd")[0];

const editSym = "‫";
const hiddenSym =
  "||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​|| _ _ _ _ _ _ ";

function hiddenEditor() {
  let content = hiddenInput.value.replace("**", hiddenSym);
  hiddenP.value = content;
}

function copyData(e) {
  let a = document.getElementsByClassName(e)[0];
  navigator.clipboard
    .writeText(a.value)
    .then(() => {
      print("Successfully copied: " + a.value);
    })
    .catch((e) => {
      alert("Error occured copying, please contact over Vermin1ty#0224 on Discord\nERROR: " + e);
    });
}

function editEditor() {
  let content = editInput.value.replace("(edited)", editSym);
  editP.value = content;
}

function copy(classN) {
  var copyText = document.getElementByClassName(classN)[0];

  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

   // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);
}

conHid.addEventListener("click", hiddenEditor);
conEd.addEventListener("click", editEditor);
