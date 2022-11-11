'use strict';
const modalHidden = document.querySelector('.hidden');
const btnClose = document.querySelector('.close-modal');
const overlayHidden = document.querySelector('.overlay');
const BtnModal = document.querySelectorAll('.show-modal');
console.log(BtnModal);
let closeMsgBox = function () {
  modalHidden.classList.add('hidden');
  overlayHidden.classList.add('hidden');
};

for (let i = 0; i < BtnModal.length; i++) {
  BtnModal[i].addEventListener('click', function () {
    //first method call
    // modalHidden.style.display = 'block';
    //second method call
    modalHidden.classList.remove('hidden');
    overlayHidden.classList.remove('hidden');
  });
}
btnClose.addEventListener('click', closeMsgBox);
overlayHidden.addEventListener('click', closeMsgBox);
//for closing overlays using "escape key"
document.addEventListener('keydown', function (e) {
  console.log(e.key);

  if (e.key == 'Escape' && !modalHidden.classList.contains('.hidden')) {
    closeMsgBox();
  }
});
