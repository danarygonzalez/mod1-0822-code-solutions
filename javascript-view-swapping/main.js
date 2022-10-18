var $tabContainer = document.querySelector('.tab-container');
var $tab = document.querySelectorAll('.tab');
var $view = document.querySelectorAll('.view');

$tabContainer.addEventListener('click', function (event) {
  if (event.target.matches('.tab')) {
    for (var i = 0; i < $tab.length; i++) {
      if (event.target === ($tab[i])) {
        $tab[i].setAttribute('class', 'tab active');
      } else {
        $tab[i].setAttribute('class', 'tab');
      }
    }
    var $dataView = event.target.getAttribute('data-view');
    for (var j = 0; j < $view.length; j++) {
      if ($dataView === $view[j].getAttribute('data-view')) {
        $view[j].setAttribute('class', 'view');
      } else {
        $view[j].setAttribute('class', 'view hidden');
      }
    }
  }
});
