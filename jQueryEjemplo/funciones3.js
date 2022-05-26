
let x = $(document);
x.ready(inicializarEventos);

function inicializarEventos() {
 let x = $("#enviar");
 x.click(presionSubmit);
}

function presionSubmit() {
 let v = $("#numero").val();
 $.get("pagina3.php", { numero: v }, llegadaDatos);
 return false;
}

function llegadaDatos(datos) {
 alert(datos);
}
