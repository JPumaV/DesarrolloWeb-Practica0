function calcular(){
    
    let cuenta = document.getElementById("cuenta").value;
    let porcentaje = document.getElementById("porcentaje").value;
    
    if (porcentaje > 100){
        alert("Numero de porcentaje invalido");
    } else {
        let propina = (cuenta * porcentaje) / 100;
        let total = parseFloat(cuenta) + parseFloat(propina);

        alert('Monto de la propina: '+propina +
            '\nTotal a pagar: '+ total
        );
    }

    
}