var $modal = document.querySelector('.modal-off');
var $overlay = document.querySelector('.overlay-off');
var $button = document.querySelector('.btn-on');
var $buttonModal = document.querySelector('.btn-modal');

function turnModalOn(event) {
  if ($button.className === 'btn-on btn') {
    $modal.className = 'modal-on';
    $overlay.className = 'overlay-on';
    $button.className = 'btn-off btn';
    $buttonModal.className = 'btn-modal on';
  } else {
    $modal.className = 'modal-off';
    $overlay.className = 'overlay-off';
    $button.className = 'btn-on btn';
    $buttonModal.className = 'btn-modal off';
  }
}

function turnModalOff(event) {
  if ($buttonModal.className === 'btn-modal on') {
    $modal.className = 'modal-off';
    $overlay.className = 'overlay-off';
    $button.className = 'btn-on btn';
  }
}

$button.addEventListener('click', turnModalOn);
$buttonModal.addEventListener('click', turnModalOff);
