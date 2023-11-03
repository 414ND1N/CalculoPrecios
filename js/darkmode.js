(function(){

	const toggle = document.getElementById('input_toggle');
	const body = document.querySelector('body');

	// Verificar el estado almacenado en localStorage al cargar la página
    const darkModeEnabled = localStorage.getItem('darkModeEnabled') === 'true';
    toggle.checked = darkModeEnabled;
    validarInput(darkModeEnabled);

	toggle.addEventListener('click', () => {
		const darkModeEnabled = toggle.checked;
        validarInput(darkModeEnabled);

        // Guardar el estado en localStorage
        localStorage.setItem('darkModeEnabled', darkModeEnabled);
	});

	function validarInput(darkModeEnabled){
		if(darkModeEnabled){
			body.className = 'darkmode'
		}else{
			body.className = ''
		}
	}

}())