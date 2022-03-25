function discount(precio, descuento) {
    const valor1 = precio;
    const valor2 = 100 - descuento;
    const valor3 = valor1 * valor2;
    const resultado = valor3 / 100;
    return resultado;
}



function calcularDescuento(){
    const precio = document.getElementById("precio");
    const precioF = parseInt(precio.value);

    const desc = document.getElementById("descuento");
    const descuentoF = parseInt(desc.value);

    const resultado = discount(precioF, descuentoF);
    alert("Vas a pagar: " +"$"+ resultado);
}