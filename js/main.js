const txtName = document.getElementById("Name");
const txtNumber = document.getElementById("Number");
const btnAgregar = document.getElementById("btnAgregar");
const alertValidacionesTexto = document.getElementById("alertValidacionesTexto")
const alertValidaciones = document.getElementById("alertValidaciones");
const contadorProductos = document.getElementById("contadorProductos");
const productosTotal = document.getElementById("productosTotal");
const precioTotal = document.getElementById("precioTotal")
const tablaListaCompras = document.getElementById("tablaListaCompras");
const cuerpoTabla = tablaListaCompras.getElementsByTagName("tbody").item(0);

let cont = 0;
let totalEnProductos = 0;
let costoTotal = 0;

function validarCantidad(cantidad) {
    if (cantidad.length == 0) {
        return false;
    }//length==0
    if (isNaN(cantidad)) {
        return false;
    }//isNan
    if (Number(cantidad) <= 0) {
        return false;
    }//

}//validarCantidad

if (isValid) {
    let precio = get precio();
    console.log(precio);
    cont++;
}

btnAgregar.addEventListener("click", function (event) {
    event.preventDefault();

    if (txtName.value < 3) {
        txtName.style.border = "solid thin red";
        alertValidacionesTexto.innerHTML =
            "<strong>El nombre del producto es incorrecto</strong>"

        alertValidaciones.style.display = "block";
    }//Name < 3
    if (validarCantidad(txtNumber.value)) {
        txtNumber.style.border = "solid medium red";
        alertValidacionesTexto.innerHTML += "<strong> la cantidad no es correcta</strong>";
        alertValidaciones.style.display = "block";
        isValid = false;
    }//!validar



    if (isValid) {
        let precio = getPrecio();
        cont++;
        let row = `<tr>
        <td>${cont}</td>
        <td>${txtName.value}</td>
        <td>${txtNumber.value}</td>
        <td>${precio}</td>
            </tr>`;


        totalEnProductos += Number(txtNumber.value);
        costoTotal += Number(txtNumber.value);

        cuerpoTabla.insertAdjacentHTML("beforeend", row);
        contadorProductos.innerText = cont;
        productosTotal.innerText = totalEnProductos;
        precioTotal.innerText = new Intl.NumberFormat("es-MX", {
            style: "currency", currency: "MXN"
        }).format(costoTotal);

        let resumen = {
            "cont": cont,
            "totalEnProductos": totalEnProductos,
            "costoTotal": costoTotal,

        };

        localStorage.setItem("resumen", JSON.stringify(resumen));



        txtName.value = "";
        txtNumber.value = "";
        txtName.focus();
    }//isValid



}); //btnAgregar click


window.addEventListener("load", function (event) {
    event.preventDefault();

    if (this.localStorage.getItem("resumen") != null) {
        let resumen = JSON.parse(this.localStorage.getItem("resumen"));
        cont = resumen.cont;
        totalEnProductos = resumen.totalEnProductos;
        costoTotal = resumen.costoTotal;
    } //null


    contadorProductos.innerText = cont;
    productosTotal.innerText = totalEnProductos;
    precioTotal.innerText = new Intl.NumberFormat("es-MX", {
        style: "currency", currency: "MXN" }).format(costoTotal);


});//Window load. Cuando hay un load se agrega un this