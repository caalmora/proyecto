window.addEventListener("DOMContentLoaded", function() {
	
  const txtNombre = document.getElementById("txtNombre");
  
  txtNombre.addEventListener("click", function(){
    let Lv_mensaje = "Probando primer evento";
    alert(Lv_mensaje);
  });
	
  const txtCorreo = document.getElementById("txtCorreo");
  
  txtCorreo.addEventListener("input", function(){ 
    // Cambia el color de fondo cuando se escribe el correo
	txtCorreo.style.backgroundColor = "#fff0f5";
  });
  
  const selectPais = document.getElementById("SitPais");
  selectPais.addEventListener("change", function() {
    alert("Has seleccionado: " + selectPais.value);
  });
});

					