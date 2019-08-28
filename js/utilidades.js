  function publicar() {
      var txtArea = document.getElementById('txtPost');
      var contenido = document.getElementById('txtPost').value;
  	document.getElementById('post').innerHTML = contenido;
  	alert("Listo tu artículo se publicara");
  	txtArea.value = "";
}

function cambiarIframe(pagina) {
	var iframe = document.getElementById('area');
	iframe.src = pagina;
}



window.onload = function () {
	document.getElementById('campos').focus();
	document.getElementById('campos').addEventListener('submit',camposVacio);
}
	
function camposVacio(evObject) {
	
	var noVacios = true;
	var formulario = document.getElementById('campos');
	
	for (var i=0; i<formulario.length; i++) {
		if(formulario[i].type =='text') {
			if (formulario[i].value == null || formulario[i].value.length == 0 || /^\s*$/.test(formulario[i].value)){
					alert ('El campo ' + formulario[i].name + ' no puede quedar vacío');
					noVacios=false;
			}
		}
	}

	if (noVacios == true) {
		formulario.submit();

	}
}