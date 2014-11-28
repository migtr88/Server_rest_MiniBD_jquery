$(document).ready(function() {
	$("#formulario").change(function(){
		$.post('/consulta/'+$('#usuario').val(),function(data){
			$('#Resultado').html('Telefono del usuario buscado: '+data.resultado);
		});
	});
});

$(document).ready(function() {
	$("#formulario1").change(function(){
		$.post('/agrega/'+$('#usuario').val()+'/'+$('#telefono').val(),function(data){
			$('#Resultado').html('Resultado'+data.resultado);
		});
	});
});
