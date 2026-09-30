/* ==================================================================
   T.A.A.G. — menu.js
   Apre/chiude il menu su mobile. Aggiorna aria-expanded (accessibilità).
   Chiude con Esc. Nessuna dipendenza.
   ================================================================== */
(function () {
	'use strict';

	var toggle = document.querySelector('.taag-nav-toggle');
	var nav = document.getElementById('taag-nav');
	if (!toggle || !nav) return;

	function setOpen(open) {
		toggle.setAttribute('aria-expanded', String(open));
		nav.classList.toggle('is-open', open);
	}

	toggle.addEventListener('click', function () {
		setOpen(toggle.getAttribute('aria-expanded') !== 'true');
	});

	document.addEventListener('keydown', function (e) {
		if (e.key === 'Escape' && nav.classList.contains('is-open')) {
			setOpen(false);
			toggle.focus();
		}
	});
})();
