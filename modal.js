let acc = document.getElementsByClassName("modal-dropdown-btn");
let modalBackground = document.getElementById("modal-bg");

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    document.body.style.overflow = "hidden";
    console.log(document.body);
    this.classList.toggle("modal-dropdown-active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = "120px";
    }
  });

  if (i === 0) {
    acc[i].classList.add("modal-dropdown-active");
    var panel = acc[i].nextElementSibling;
    panel.style.maxHeight = "120px";
  }
}

function hideModalContainer() {
  var modalBg = document.getElementById("modal-bg");
  var modalContainer = document.querySelector(".modal-container");

  modalBg.addEventListener("click", function () {
    modalContainer.style.display = "none";
    document.body.style.overflow = "initial";
  });
}

function showModal() {
  var cardInners = document.getElementsByClassName("card-inner");
  var modalContainer = document.querySelector(".modal-container");
  var modalCloseBtn = document.getElementById("modal-close-btn");

  for (var i = 0; i < cardInners.length; i++) {
    cardInners[i].addEventListener("click", function () {
      modalContainer.style.display = "flex";
      document.body.style.overflow = "hidden";
    });
  }

  modalCloseBtn.addEventListener("click", function () {
    modalContainer.style.display = "none";
    document.body.style.overflow = "initial";
  });
}

window.addEventListener("DOMContentLoaded", function () {
  hideModalContainer();
  showModal();
});
