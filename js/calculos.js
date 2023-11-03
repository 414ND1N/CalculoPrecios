input_precio = document.getElementById("precio")
input_envio = document.getElementById("envio")

txtcalc1 = document.getElementById("calc1")
txtcalc2 = document.getElementById("calc2")
txtcalc3 = document.getElementById("calc3")
txtfinal = document.getElementById("calcfinal")

btn_calcular = document.getElementById("btn_calcular")


btn_calcular.addEventListener("click", function(){

    try {
        precioProducto = parseFloat(input_precio.value)
        costoEnvio = parseFloat(input_envio.value)

        if(isNaN(precioProducto)){
            alert("Ingrese un precio valido")
            return
        }
        if(isNaN(costoEnvio)){
            alert("Ingrese un costo de envio valido")
            return
        }

        //Calcular que sean mayor a 0
        if(precioProducto <= 0){
            alert("Precio debe ser mayor a 0")
            return
        }
        if(costoEnvio <= 0){
            alert("Costo de envio debe ser mayor a 0")
            return
        }

        //Envio debe ser menor a precio
        if(costoEnvio >= precioProducto){
            alert("Costo de envio debe ser menor al precio")
            return
        }


        precio_menos_porcentaje = precioProducto - (precioProducto * 0.04)
        precio_menos_envio = precio_menos_porcentaje - costoEnvio
        precio_menos_iva = precio_menos_envio - (precio_menos_envio/1.12)*0.12

        precio_final = precio_menos_iva;

        txtcalc1.innerText = "Precio - 4%: Q" + precio_menos_porcentaje.toFixed(2)
        txtcalc2.innerText = "Precio - envio: Q" + precio_menos_envio.toFixed(2)
        txtcalc3.innerText = "Precio - Iva: Q" + precio_menos_iva.toFixed(2)
        txtfinal.innerText = "Precio final: Q" + precio_final.toFixed(2)
        return
        
    } catch (error) {
        alert("Error al calcular el precio")
        clearInputs()
    }

})


function clearInputs(){
    console.log("Limpiando textos")
    txtcalc1.innerText = "Precio - 4%: Q0.00"
    txtcalc2.innerText = "Precio - envio: Q0.00"
    txtcalc3.innerText = "Precio - Iva: Q0.00"
    txtfinal.innerText = "Precio final: Q0.00"
}

//Cuando el dom se cargue

document.addEventListener("DOMContentLoaded", function(){
    clearInputs()

    input_envio.value = 35

})
