localStorage.clear();
const tipsData = {
    seguridad: "Es normal sentirte en alerta cuando el entorno no es tranquilo. Trata de limitar cuánto consumes noticias negativas y busca espacios donde te sientas seguro, como tu casa o con personas de confianza.",

    familia: "Los problemas en casa pueden ser pesados. No cargues todo tú solo/a. Hablar con alguien de confianza o escribir lo que sientes puede ayudarte a liberar esa presión.",

    ansiedad: "Cuando sientas ansiedad, intenta hacer pausas. Respira lento, enfócate en lo que estás viviendo en ese momento y recuerda que esa sensación va a pasar.",

    bullying: "No mereces pasar por eso. Busca apoyo en alguien que te escuche y te respalde. No estás solo/a, y pedir ayuda es un paso importante.",

    escuela: "El estrés escolar es común. Organiza tu tiempo en partes pequeñas y date descansos. No tienes que hacerlo todo perfecto, solo avanzar poco a poco."
};

function mostrarTips() {
    let tema = document.getElementById("tema").value;
    document.getElementById("tips").innerText = tipsData[tema];
}

function guardarComentario() {
    let texto = document.getElementById("comentario").value;

    if (texto === "") {
        alert("Escribe algo primero");
        return;
    }

    let comentarios = JSON.parse(localStorage.getItem("comentarios")) || [];

    comentarios.push({ texto: texto, likes: 0 });

    localStorage.setItem("comentarios", JSON.stringify(comentarios));

    document.getElementById("comentario").value = "";

    mostrarComentarios();
}

function mostrarComentarios() {
    let lista = document.getElementById("listaComentarios");
    lista.innerHTML = "";

    let comentarios = JSON.parse(localStorage.getItem("comentarios")) || [];

    comentarios.forEach((c, index) => {
        let div = document.createElement("div");

        let p = document.createElement("p");
        p.innerText = "💬 " + c.texto;

        let btn = document.createElement("button");
        btn.innerText = "👍 " + c.likes;
        btn.onclick = () => darLike(index);

        div.appendChild(p);
        div.appendChild(btn);

        lista.appendChild(div);
    });
}

function darLike(index) {
    let comentarios = JSON.parse(localStorage.getItem("comentarios"));

    comentarios[index].likes++;

    localStorage.setItem("comentarios", JSON.stringify(comentarios));

    mostrarComentarios();
}

mostrarComentarios();
function evaluarTest() {
    let p1 = document.getElementById("p1").value;
    let p2 = document.getElementById("p2").value;
    let p3 = document.getElementById("p3").value;

    let resultado = document.getElementById("resultadoTest");

    if (p1 === "" || p2 === "" || p3 === "") {
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
    else {
        resultado.innerText = "Vas bien, sigue cuidando tu bienestar emocional ";
    }
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