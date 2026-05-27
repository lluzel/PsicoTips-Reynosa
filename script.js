const tipsData = {
    seguridad: "Es normal sentirte en alerta cuando el entorno no es tranquilo. Trata de limitar cuánto consumes noticias negativas y busca espacios donde te sientas seguro, como tu casa o con personas de confianza.",

    familia: "Los problemas en casa pueden ser pesados. No cargues todo tú solo/a. Hablar con alguien de confianza o escribir lo que sientes puede ayudarte a liberar esa presión.",

    ansiedad: "Cuando sientas ansiedad, intenta hacer pausas. Respira lento, enfócate en lo que estás viviendo en ese momento y recuerda que esa sensación va a pasar.",

    bullying: "No mereces pasar por eso. Busca apoyo en alguien que te escuche y te respalde. No estás solo/a, y pedir ayuda es un paso importante.",

    escuela: "El estrés escolar es común. Organiza tu tiempo en partes pequeñas y date descansos. No tienes que hacerlo todo perfecto, solo avanzar poco a poco."
};

async function guardarResultado(resultadoTexto){

    const usuario = "Usuario";

    await fetch("http://localhost:3000/guardarResultado", {

        method: "POST",

        headers:{
            "Content-Type":"application/json"
        },

        body: JSON.stringify({
            usuario: usuario,
            resultado: resultadoTexto
        })

    });

}

function mostrarTips() {
    let tema = document.getElementById("tema").value;
    document.getElementById("tips").innerText = tipsData[tema];
}

function evaluarTest() {

    let p1 = document.getElementById("p1").value;
    let p2 = document.getElementById("p2").value;
    let p3 = document.getElementById("p3").value;
    let p4 = document.getElementById("p4").value;
    let p5 = document.getElementById("p5").value;
    let p6 = document.getElementById("p6").value;

    let resultado = document.getElementById("resultadoTest");

    if (p1 === "" || p2 === "" || p3 === "" || p4 === "" || p5 === "" || p6 === "") {
        resultado.innerText = "Responde todas las preguntas para ver tu resultado.";
        return;
    }

    // CASO SIN APOYO (prioridad)
    if (p3 === "no") {
        resultado.innerText = "Puede que te estés sintiendo solo/a. No tienes que cargar con todo tú solo/a. Hablar con alguien puede ayudarte mucho";
        return;
    }

    //  SI SÍ TIENE APOYO → ahora analizamos lo demás

    if (p1 === "seguridad") {
        resultado.innerText = "Vivir en un entorno tenso puede generar preocupación. Intenta enfocarte en lo que puedes controlar y busca momentos de calma.";
    } 
    else if (p1 === "familia") {
        resultado.innerText = "Los problemas familiares pueden ser pesados. Apóyate en alguien de confianza y busca espacios para desahogarte.";
    } 
    else if (p1 === "escuela") {
        resultado.innerText = "El estrés escolar es común. Organiza tu tiempo y avanza poco a poco.";
    } 
    else if (p1 === "social") {
        resultado.innerText = "La presión social puede afectar mucho. Recuerda que tu valor no depende de la opinión de otros.";
    } 
    else if (p2 === "callado") {
        resultado.innerText = "Tiendes a guardarte lo que sientes. Expresarlo poco a poco puede ayudarte a sentirte mejor.";
    } 
    else if (p2 === "enojo") {
        resultado.innerText = "Sentir enojo es válido, pero intenta canalizarlo de forma sana como respirar o darte un momento.";
    } 
    else if (p5 === "diario") {
    resultado.innerText = "Parece que te sientes así muy seguido. Sería buena idea buscar apoyo y darte momentos para descansar emocionalmente.";
}
else if (p4 === "aislar") {
    resultado.innerText = "Aislarte puede hacer que te sientas peor. Intenta poco a poco acercarte a alguien de confianza.";
}
else if (p6 === "no_se") {
    resultado.innerText = "No saber qué hacer es válido. Puedes empezar con cosas pequeñas como hablar con alguien o darte un momento para ti.";
}
    else {
        resultado.innerText = "Vas bien, sigue cuidando tu bienestar emocional ";
    }

    document.getElementById(
"seccionDiario"
).style.display = "block";

}

function mostrarInfo(tipo) {
    let info = document.getElementById("infoEmocion");

    info.style.display = "block";

    // quitar colores anteriores SIN borrar todo
    info.classList.remove("info-ansiedad", "info-tristeza", "info-estres", "info-bienestar");

    if (tipo === "ansiedad") {
        info.innerText = "La ansiedad es una respuesta emocional natural de miedo, temor, o inquietud ante situaciones estresantes o de amenaza, que prepara el cuerpo para reaccionar.";
        info.classList.add("info-ansiedad");
    } 
    else if (tipo === "tristeza") {
        info.innerText = "La tristeza es una emoción humana básica y natural, se caracteriza por sentimientos de desánimo, pérdida o dolor emocional.";
        info.classList.add("info-tristeza");
    } 
    else if (tipo === "estres") {
        info.innerText = "El estrés es una reacción física y mental natural del cuerpo ante desafíos, amenazas o demandas.";
        info.classList.add("info-estres");
    } 
    else if (tipo === "bienestar") {
        info.innerText = "El bienestar es un estado en el que te sientes en equilibrio emocional, tranquilo, en paz y bien contigo mismo.";
        info.classList.add("info-bienestar");
    }
}
function mostrarContenido() {
    let contenido = document.getElementById("contenidoPrincipal");
    let boton = document.getElementById("btnEntrar");

    contenido.style.display = "block";
    boton.style.display = "none";
}
//  MÚSICA (NUEVO)
let reproduciendo = false;

function toggleMusica() {
    let audio = document.getElementById("musica");
    let boton = document.getElementById("btnMusica");

    if (!reproduciendo) {
        audio.play();
        boton.innerText = "⏸ Pausar música";
        reproduciendo = true;
    } else {
        audio.pause();
        boton.innerText = "🎵 Activar música";
        reproduciendo = false;
    }
}

function entrarPagina() {
    document.getElementById("pantallaInicio").style.display = "none";
    document.getElementById("pantallaContenido").style.display = "block";
}
function entrar() {
    document.getElementById("pantallaInicio").style.display = "none";
    document.getElementById("pantallaContenido").style.display = "block";

    // mostrar emociones por defecto
    mostrarSeccion("seccionEmociones");
}

function mostrarSeccion(id) {

    let secciones = document.querySelectorAll(".seccion");

    secciones.forEach(sec => {
        sec.style.display = "none";
    });

    document.getElementById(id).style.display = "block";
}

let usuarioGuardado = {
    nombre: "",
    correo: "",
    password: ""
};

async function registrarUsuario(){

    let nombre =
    document.getElementById("nombreRegistro").value;

    let correo =
    document.getElementById("correoRegistro").value;

    let password =
    document.getElementById("passwordRegistro").value;

    if(nombre === "" || correo === "" || password === ""){

        alert("Completa todos los campos");
        return;
    }

    const respuesta = await fetch(
        "http://localhost:3000/registro",

        {

            method: "POST",

            headers:{
                "Content-Type":"application/json"
            },

            body: JSON.stringify({
                nombre,
                correo,
                password
            })

        }
    );

    const mensaje = await respuesta.text();

    alert(mensaje);

}

async function iniciarSesion(){

    let correo =
    document.getElementById("correoLogin").value;

    let password =
    document.getElementById("passwordLogin").value;

    if(correo === "" || password === ""){

        alert("Completa todos los campos");
        return;
    }

    const respuesta = await fetch(
        "http://localhost:3000/login",

        {

            method: "POST",

            headers:{
                "Content-Type":"application/json"
            },

            body: JSON.stringify({
                correo,
                password
            })

        }
    );

    const datos = await respuesta.json();

    if(datos.success){

        document.getElementById("pantallaLogin")
        .style.display = "none";

        document.getElementById("pantallaInicio")
        .style.display = "flex";

    } else {

        alert("Correo o contraseña incorrectos");

    }

}

async function guardarComentario() {

    const nombre =
    document.getElementById("nombre").value;

    const comentario =
    document.getElementById("comentario").value;

    if(comentario === ""){

        alert("Escribe un comentario");
        return;
    }

    const respuesta = await fetch(
        "http://localhost:3000/comentarios",

        {
            method:"POST",

            headers:{
                "Content-Type":"application/json"
            },

            body: JSON.stringify({

                nombre: nombre || "Anónimo",
                mensaje: comentario

            })

        }
    );

    const mensaje = await respuesta.text();

    alert(mensaje);

    document.getElementById("comentario").value = "";
    document.getElementById("nombre").value = "";

    cargarComentarios();
}

async function cargarComentarios(){

    const respuesta = await fetch(
        "http://localhost:3000/comentarios"
    );

    const comentarios = await respuesta.json();

    const lista =
    document.getElementById("listaComentarios");

    lista.innerHTML = "";

    comentarios.forEach(comentario => {

        const div = document.createElement("div");

        div.classList.add("card");

        div.innerHTML = `

        <p>
        <strong>${comentario.nombre}</strong>
        </p>

        <p>${comentario.mensaje}</p>

        <small>
        ${new Date(comentario.fecha).toLocaleString()}
        </small>

        <br><br>

        <button onclick="darAyuda(${comentario.id})">
        💙 Me ayudó (${comentario.ayuda})
        </button>

        `;

        lista.appendChild(div);

    });

}

async function darAyuda(id){

    await fetch(
        `http://localhost:3000/comentarios/${id}`,

        {
            method:"PUT"
        }
    );

    cargarComentarios();
}

cargarComentarios();

async function guardarDiario(){

const nombre =
document.getElementById(
"nombreDiario"
).value;

const emocion =
document.getElementById(
"emocion"
).value;

const mensaje =
document.getElementById(
"mensajeDiario"
).value;

if(
emocion===""
||
mensaje===""

){

alert(
"Completa los campos"
);

return;

}

const respuesta =
await fetch(

"http://localhost:3000/diario",

{

method:"POST",

headers:{

"Content-Type":
"application/json"

},

body:
JSON.stringify({

nombre:
nombre
||
"Anónimo",

emocion,

mensaje

})

}

);

alert(
await respuesta.text()
);

document.getElementById(
"mensajeDiario"
).value="";

cargarDiario();

}

async function cargarDiario(){

const respuesta =
await fetch(
"http://localhost:3000/diario"
);

const datos =
await respuesta.json();

const lista =
document.getElementById(
"listaDiario"
);

lista.innerHTML="";

datos.forEach(item=>{

lista.innerHTML+=`

<div class="card">

<h3>
${item.emocion}
</h3>

<p>
${item.mensaje}
</p>

<small>
${item.nombre}
</small>

<br>

<small>
${new Date(
item.fecha
).toLocaleString()}
</small>

</div>

`;

});

}

cargarDiario();

function toggleDiario(){

const contenedor =
document.getElementById(
"contenedorDiario"
);

const boton =
document.getElementById(
"btnDiario"
);

if(
contenedor.style.display
==="none"
){

contenedor.style.display=
"block";

boton.innerText=
"Ocultar diarios";

}
else{

contenedor.style.display=
"none";

boton.innerText=
"Ver mis diarios";

}

}
