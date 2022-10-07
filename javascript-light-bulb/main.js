var $lightBulb = document.querySelector('.circle');
var $background = document.querySelector('.background');

function turnOnLight(event) {
  if ($lightBulb.className === 'circle circle-on') {
    $lightBulb.className = 'circle circle-off';
    $background.className = 'background light-off';
  } else {
    $lightBulb.className = 'circle circle-on';
    $background.className = 'background light-on';
  }
}
$lightBulb.addEventListener('click', turnOnLight);
