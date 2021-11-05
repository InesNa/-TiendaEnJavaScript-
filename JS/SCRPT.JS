alert(' ¡BIENVENIDO CLIENTE!');

if (window.confirm("¿Deseas comprar algo?​")) { 
window.open("index.html", "Muchas gracias!");
}
var nom;
nom=prompt ("Como te llamas cliente", "NOMBRE");
alert('HOLA'+ ""+ nom );

function mueveReloj(){ 
    momentoActual = new Date() 
    hora = momentoActual.getHours() 
    minuto = momentoActual.getMinutes() 
    segundo = momentoActual.getSeconds() 

    horaImprimible = hora + " : " + minuto + " : " + segundo 

    document.form_reloj.reloj.value = horaImprimible 
 setTimeout("mueveReloj()",1000) 
}


