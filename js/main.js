$(document).ready(function(){
	$("#envia").click(function(){

		var nombre = $("#itname").val();
		var apellido = $("#itlast").val();
		var email = $("#itemail").val();
		var expre = /^[A-Za-z\.][A-Za-z0-9_\.]*@[A-Za-z0-9_]+\.[A-Za-z0-9_.]+[A-za-z]$/;
		var nom = /^[A-Za-záéíóúñ]{2,}([\s][A-Za-záéíóúñ]{2,})+$/;
		
		if(nombre == "" || !nom.test(nombre))
		{
			$("#men__nombre").fadeIn();
			return false;
		}
		if(apellido == "" || !nom.test(apellido))
		{
			$("#men__nombre").fadeOut();
			$("#men__apellido").fadeIn();
			return false;	
		}
		if(email == "" || !expre.test(email))
		{
			$("#men__apellido").fadeOut();
			$("#men__email").fadeIn();
			return false;
		}
	});
});

