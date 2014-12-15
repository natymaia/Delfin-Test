// En JavaScript NO HAY SOPORTE NATIVO para clases
// class Delfin -- NO
// Emular el comportamiento de una clase

// ECMAScript

// Modulo (conjunto de "clases")
var AnimalMarino = AnimalMarino || {};

// Clase Emulada
AnimalMarino.Delfin = function(){
	var years;
	var name;
	return{
		years: this.years,
		name: this.name,
		sayHello: function(){
			return "iiiiiiigggggghhhhh"
		}
	}
}();

/**
* class Delfin{
*
*	public int years;
*	public String name;
*
* Para los metodos usamos notacion
* camelCase -> estoEsUnMetodoNuevo
*	
*	public void sayHello(){
*		"iiiiiiigggggghhhhh"
*	}
* }
*/
/**
* Pruebas:
*	caSayHello() -> returns "iiiiiiigggggghhhhh"
*/