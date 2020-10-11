
var d = getElementById('dibujito');
var lienzo = d.getContext('2d');
var l;
var lineas = 30;
var ys, yf;
	
	function dibujarLinea (color, xstart, ystart, xfinal, yfinal) {
		lienzo.beginPath();
		lienzo.strokeStyle = color;
		linezo.moveTo(xstart, ystart);
		lienzo.lineTo(xfinal, yfinal);
		lienzo.stroke();
		lienzo.closePath();
	}

	for (l = 0; l < lineas; l++) {
		dibujarLinea
	}

 function createPeople(nombre, apellido, edad) {
 	return {
 		'nombre': nombre,
 		'apellido': apellido,
 		'edad': edad
 	};
 }
 var arrayPeople = [];

 	arrayPeople.push(createPeople('Matias', 'Iacono', 39));
 	arrayPeople.push(createPeople('Juan', 'Perez', 25));
 	arrayPeople.push(createPeople('Clark', 'Kent', 80));
 	arrayPeople.push(createPeople('Hedy', 'Lamarr', 46));
 	arrayPeople.push(createPeople('Grace', 'Hopper', 16));

 	function selecionarMayoresA(edad){
 		var array_temporal = [];

 		for (var i = 0; i < arrayPeople.length; i++) {
 			if (arrayPeople[i].edad > edad) {
 				array_temporal.push(arrayPeople[i]);
 			}
 		}

 		return array_temporal;
 	}


 var mayores = selecionarMayoresA(30);

 		console.log('Mayores a 30: '+ mayores);
