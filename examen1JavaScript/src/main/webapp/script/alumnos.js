function ejercicio1(){
	
	//No hace falta asegurar el tipo string con el método prompt ya que siempre 
	// el dato capturado es de ese tipo, no es el caso para capturar un tipo number

	let contieneNum = /[0-9]+/;
	let nombre = prompt("Introduce un nombre: ");
	
	//Se controla que no se quedan vacíos los campos y
	//que no introduce valor numerico en el campo nombre y apellidos.

	while(nombre==null)
		nombre = prompt("No puede dejar vacío el campo nombre, introduzca nombre: ");
	while(contieneNum.test(nombre))
		nombre = prompt("Error, ha introducido números. Introduzca nombre: ");
	
	let apellidos = prompt("Introduce los apellidos: ");
	while(apellidos==null)
		apellidos = prompt("No puede dejar vacío el campo apellidos, introduzca apellidos: ");
	while(contieneNum.test(apellidos))
		apellidos = prompt("Error, ha introducido números. Introduzca apellidos: ");
		
	//Se controla que el usuario no introduzca la edad con un dato erroneo
	let edad = Number(prompt("Introduce la edad: "));		
	while(edad<=0 || isNaN(edad) || edad == null){
		if(edad<=0)
			edad = Number(prompt("La edad de una persona no puede ser menor que 1 o dejar el campo vacío, introduce la edad: "));
		else if(isNaN(edad))
			edad = Number(prompt("Ha introducido letras, introduce la edad: "));
		else
			edad=Number(prompt("Ha dejado el campo vacío, introduce la edad: "));
	}
	
	//Muestra por consola la concatenación de los datos capturados
	console.log("Nombre y apellidos: "+nombre+", "+apellidos+".");
	console.log("Edad: "+edad+" años.");
	console.log("Edad es un tipo: "+ typeof(edad)+".");
}
