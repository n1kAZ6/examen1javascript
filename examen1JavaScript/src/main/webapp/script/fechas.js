function ejercicio2(){
	
	//Instanciamos un objeto tipo Date con la fecha/hora actual
	let ahora = new Date();
	
	//Construimos la fecha como string añadiendo 1 al mes que empieza por cero
	let fecha = ahora.getDate()+"-"+(ahora.getMonth()+1)+"-"+ahora.getFullYear();
	
	//Construimos las dos posibles horas a mostrar, uso horario cero y UTC+1
	let horaUtcCero= ahora.getUTCHours()+":"+ahora.getUTCMinutes()+":"+ahora.getUTCSeconds();
	let horaUctMasUno = ahora.getHours()+":"+ahora.getMinutes()+":"+ahora.getSeconds();
	
	//Pedimos al usuario que introduzca la ciudad a mostrar su fecha/hora
	let ciudad = prompt("Introduce la ciudad la cual se quiera obtener fecha y hora, las opciones son Madrid, Paris y Londres: ");
	
	//Controlamos que el usuario introduce las opciones posibles
	while(ciudad.toLowerCase() != "madrid" && ciudad.toLowerCase() != "paris" && ciudad.toLowerCase() != "parís" && ciudad.toLowerCase() != "londres")
		ciudad = prompt("No se reconoce la ciudad "+ciudad+" introduzca de nuevo: ");

	//Presentamos la info según lo introducido
	if(ciudad.toLowerCase() == "madrid"){
		document.write("Ciudad: Madrid<br>Fecha: "+fecha+"<br>Hora: "+horaUctMasUno);
	}
	else if(ciudad.toLowerCase() == "paris" || ciudad.toLowerCase() == "parís"){
		document.write("Ciudad: París<br>Fecha: "+fecha+"<br>Hora: "+horaUctMasUno);
	}
	else if(ciudad.toLowerCase() == "londres"){
		document.write("Ciudad: Londres<br>Fecha: "+fecha+"<br>Hora: "+horaUtcCero);
	}
}