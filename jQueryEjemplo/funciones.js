
let x = $(document);

x.ready(inicializarEventos);

function inicializarEventos() {
    let x = $("#boton1");
    x.click(extraerTexto);
    x = $("#boton2");
    x.click(modificarTexto);
    x = $("#boton3");
    x.click(modificarDatosTabla);
}

function extraerTexto() {
     let x = $("#parrafo0");
    alert(x.text());
}

function modificarTexto() {
    let x = $("#parrafo1");
    x.text("Texto Modificado");
}

function modificarDatosTabla() {
    let x = $("td");
    x.text("Hola Mundo");
}