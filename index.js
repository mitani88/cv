document.querySelector("#collapse-button").addEventListener("click", swap);

function swap() {
  var expandIcon = document.querySelector("#collapse-button");
  expandIcon.classList.toggle("fa-circle-plus");
  expandIcon.classList.toggle("fa-circle-minus");
}
