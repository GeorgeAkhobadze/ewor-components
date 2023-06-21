var acc = document.getElementsByClassName("modal-dropdown-btn");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    console.log("wooh")
    this.classList.toggle("modal-dropdown-active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = "120px";
    } 
  });
}