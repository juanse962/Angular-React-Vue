class Coche {
    constructor(modelo,velocidad,antiguedad){
        this.modelo = modelo;
        this.velocidad = velocidad;
        this.antiguedad = antiguedad;
    }
    aumentarVelocidad(){
        this.velocidad += 1;
    }
    reducirVelocidad(){
        this.velocidad -= 1;
    }
}

class Autobus extends Coche{
    constructor(modelo,velocidad,antiguedad){
        super(modelo,velocidad,antiguedad);
        this.altura = 5;
    }
    mostrarAltura(){
        return 'La altura del bus es ' + this.altura;
    }
}

var Autobus1 = new Autobus("Pegasus", 50,2015);

var coche1 = new Coche('Audi',200,2017);
var coche2 = new Coche('Renault',190,2015);
var coche3 = new Coche('Mercedes',110,2012);

document.write(`<h1> Velocidad carro 1 = `+ coche1.velocidad+`</h1>`)

coche1.aumentarVelocidad()
coche1.aumentarVelocidad()
coche1.aumentarVelocidad()

console.log(Autobus1);
console.log(Autobus1.mostrarAltura());
console.log(coche1.velocidad);
console.log(coche2.modelo);
console.log(coche3.modelo);

document.write(`<h1> Velocidad carro 1 = `+ coche1.velocidad+`</h1>`)