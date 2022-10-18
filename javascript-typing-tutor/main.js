var $letters = document.querySelectorAll('span');
var i = 0;
document.addEventListener('keydown', function (event) {
  if (event.key === $letters[i].textContent) {
    $letters[i].className = 'correct-letter';
    i++;
    $letters[i].className = 'marker';
  } else {
    $letters[i].className = 'incorrect-letter incorrect-marker';
  }
});
