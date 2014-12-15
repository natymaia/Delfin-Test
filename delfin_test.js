// Test delfin.js -- canSayHello

// Qunit.test -> define caso de prueba unitario
// espera: nombre, comportamiento
QUnit.test("can say hello", function(assert){
	assert.equal(AnimalMarino.Delfin.sayHello(), "iiiiiiigggggghhhhh", "Delfin puede saludar!")

});