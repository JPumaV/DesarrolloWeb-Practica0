let celsiusAFarenheit = document.getElementById("celsiusAFarenheit");
let farenheitACelsius = document.getElementById("farenheitACelsius");
//funciones
function celsius(){
    celsiusAFarenheit.style.display = "none"
    farenheitACelsius.style.display = "block";
}

function farenheit(){
    farenheitACelsius.style.display = "none";
    celsiusAFarenheit.style.display = "block";
}

function calcularFarenheit(){
    let celsius = document.getElementById("celsius").value;
    let resultado = document.getElementById("resultadoFarenheit");

    let res = (parseFloat(celsius) * (9 / 5)) + 32;

    resultado.value = 'Resultado de la conversion: '+res;
    //imprime en consola
    console.log("Resultado de la conversion: "+res);

}

function calcularCelsius(){
    let farenheit = document.getElementById("farenheit").value;
    let resultado = document.getElementById("resultadoCelsius");

    let res = (parseFloat(farenheit) - 32) / (9 / 5);

    resultado.value = 'Resultado de la conversion: '+res;
    //imprime en consola
    console.log("Resultado de la conversion: "+res);
}