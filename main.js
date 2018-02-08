window.onscroll = function(event) {
	// console.log(event);
	var fromTop = -window.pageYOffset;
	// console.log(fromTop);
	var par = document.querySelectorAll('.parallax');
	for (var i = 0; i < par.length; i++) {
		par[i].style.backgroundPosition = 'center '+(fromTop/20)+'px';
		animateText(-fromTop, i);
	}
}

function animateText(pageY, i) {
	var l = document.querySelectorAll('._text');
	for (var i = 0; i < l.length; i++) {
		l[i].style.position = 'absolute';
		animate(l[i], pageY, i);
	}
}

function animate(elem, pageY, i) {
	if (i == 0) {
		elem.parentNode.querySelector('span').style.color = getRandomColor();
	} else if (i == 1) {
		if (isScrolledIntoView(elem)) {
			elem.style.left = pageY-elem.getBoundingClientRect().top+'px';
		}
	} else if (i == 2) {
		elem.querySelector('span').style.fontSize = pageY/40+'px';
	} else {
		if (isScrolledIntoView(elem)) {
			console.log(i, 'in view');
			elem.style.WebkitAnimation = 'pulseLarge 10s 1';
			elem.style.animation = 'pulseLarge 10s 1';
			// elem.classList.add('pulse-large-add');
		} else {
			elem.style.WebkitAnimation = '';
			elem.style.animation = '';
			// elem.classList.remove('pulse-large-add');
		}
	}
}


function isScrolledIntoView(el) {
    var rect = el.getBoundingClientRect();
    var elemTop = rect.top;
    var elemBottom = rect.bottom;
    var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
    return isVisible;
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}