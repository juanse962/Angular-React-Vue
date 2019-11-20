/* var nombre  = "Juan Sbastian Gomez";
var altura = 189;

var concatenacion = nombre + ' ' + altura

/* document.write(nombre);
document.write(altura); */
/* var datos = document.getElementById("datos");
datos.innerHTML = `
    <h1> Hola mundo ${concatenacion}</h1>
    <p> Mi altura es ${altura} cm </p>
`;
if (altura >= 190) {
    datos.innerHTML += `<h2> Eeres alto </h2>`;
}else {
    datos.innerHTML += `<h2> Eeres bajito </h2>`;

}
for (var i = 0; i<= 2020; i++){
    datos.innerHTML += `<h2> Estamos en el año = ${i} `;
}
 */ 
var nombre  = "Juan Sbastian Gomez";
var altura = 189;

function muestra_mi_nombre(nombre, altura){

var concatenacion = nombre + ' ' + altura

    var datos = document.getElementById("datos");
    datos.innerHTML = `
        <h1> Hola mundo ${concatenacion}</h1>
        <p> Mi altura es ${altura} cm </p>
    `;
}
muestra_mi_nombre(nombre,altura);
document.write(`<h2> Nombres </h2>`)
var nombre = ['Pedo','Pablo','Francisco'];
/* for (let i = 0; i < nombre.length; i++) {
    document.write(nombre[i]+`<br>`);    
}
 */
nombre.forEach((name) => {
    document.write(name+`<br>`);    
});

var coches = {
    modelo: 'Mercedes',
    maxima: 200,
    antiguedad: 2020,

    mostrar_datos(){
        console.log(this.modelo, this.maxima, this.antiguedad);
    }
};

document.write(`<h3>` + coches.antiguedad +`</h2>`);
coches.mostrar_datos();
console.log (coches);

var saludar  = new Promise((resolve, reject) => {
    setTimeout( () => {
        let saludo = "Hola muy buenas";
        saludo = false;
        if(saludo){
            resolve(saludo)
        }else {
            reject("No hay saludo")
        }

    }, 2000);
});

saludar.then(resultado => {
    alert(resultado);
})
.catch(err => {
    alert(err);
});