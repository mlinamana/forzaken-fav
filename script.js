/* ================= SCROLL ================= */

function scrollToSection(id) {

    const section = document.getElementById(id);

    if (section) {

        section.scrollIntoView({
            behavior: "smooth"
        });

    }

}


/* ================= SOUND ================= */

let soundEnabled = true;


function toggleSound() {

    soundEnabled = !soundEnabled;

    const button = document.querySelector(".sound-button");

    if (soundEnabled) {

        button.innerHTML = "🔊";

    } else {

        button.innerHTML = "🔇";

    }

}


/* ================= MODAL ================= */

function showWarning() {

    const modal =
        document.getElementById("warningModal");

    modal.classList.add("active");

}


function closeWarning() {

    const modal =
        document.getElementById("warningModal");

    modal.classList.remove("active");

}


/* ================= CHARACTER HOVER ================= */

const cards =
    document.querySelectorAll(".character-card");


cards.forEach(card => {

    card.addEventListener("mousemove", function(event) {

        const rect =
            card.getBoundingClientRect();

        const x =
            event.clientX - rect.left;

        const y =
            event.clientY - rect.top;

        const centerX =
            rect.width / 2;

        const centerY =
            rect.height / 2;

        const rotateX =
            (y - centerY) / 25;

        const rotateY =
            (centerX - x) / 25;

        card.style.transform =
            `perspective(800px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-8px)
             scale(1.02)`;

    });


    card.addEventListener("mouseleave", function() {

        card.style.transform =
            "perspective(800px) rotateX(0) rotateY(0) translateY(0) scale(1)";

    });

});


/* ================= RANDOM GLITCH ================= */

const logo =
    document.querySelector(".logo");


setInterval(() => {

    if (!logo) return;

    logo.style.transform =
        "translateX(-2px)";

    setTimeout(() => {

        logo.style.transform =
            "translateX(2px)";

    }, 60);


    setTimeout(() => {

        logo.style.transform =
            "translateX(0)";

    }, 120);

}, 7000);


/* ================= TERMINAL ================= */

const terminalLines =
    document.querySelectorAll(".terminal-body p");


terminalLines.forEach((line, index) => {

    line.style.opacity = "0";

    setTimeout(() => {

        line.style.transition =
            "opacity 0.5s ease";

        line.style.opacity = "1";

    }, 400 + index * 500);

});


/* ================= KEYBOARD ================= */

document.addEventListener("keydown", event => {

    if (event.key === "Escape") {

        closeWarning();

    }

});


/* ================= SECRET ================= */

let clicks = 0;


const footerLogo =
    document.querySelector(".footer-logo");


if (footerLogo) {

    footerLogo.addEventListener("click", () => {

        clicks++;

        if (clicks === 5) {

            alert(
                "ARCHIVO OCULTO DESBLOQUEADO...\n\n" +
                "NO CONFÍES EN NADIE."
            );

            clicks = 0;

        }

    });

}


/* ================= CONSOLE ================= */

console.log(
`
███████╗ ██████╗ ██████╗ ███████╗ █████╗ ██╗  ██╗███████╗███╗   ██╗
██╔════╝██╔═══██╗██╔══██╗██╔════╝██╔══██╗██║ ██╔╝██╔════╝████╗  ██║
█████╗  ██║   ██║██████╔╝███████╗███████║█████╔╝ █████╗  ██╔██╗ ██║
██╔══╝  ██║   ██║██╔══██║╚════██║██╔══██║██╔═██╗ ██╔══╝  ██║╚██╗██║
██║     ╚██████╔╝██║  ██║███████║██║  ██║██║  ██╗███████║██║ ╚████║
╚═╝      ╚═════╝ ╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═══╝

FORSAKEN ARCHIVES
SYSTEM ONLINE
`
);

/* =====================================================
   PERSONAJE ALEATORIO
   SUPERVIVIENTES + KILLERS
   ===================================================== */

const randomButton =
    document.getElementById("randomCharacter");

const randomResult =
    document.getElementById("randomResult");

if (randomButton) {
    randomButton.addEventListener(
        "click",
        () => {

            const allCharacters =
                document.querySelectorAll(
                    ".character-card"
                );

            if (allCharacters.length === 0) {

                randomResult.textContent =
                    "NO SE ENCONTRARON PERSONAJES";

                return;

            }

            allCharacters.forEach(card => {

                card.classList.remove(
                    "random-selected"
                );

            });

            const randomIndex =
                Math.floor(
                    Math.random() *
                    allCharacters.length
                );

            const selectedCard =
                allCharacters[randomIndex];

            const nameElement =
                selectedCard.querySelector("h3");

            const characterName =
                nameElement
                    ? nameElement.textContent.trim()
                    : "PERSONAJE DESCONOCIDO";

            const parentSection =
                selectedCard.closest("section");

            let characterType =
                "PERSONAJE";

            if (
                parentSection &&
                parentSection.id ===
                "supervivientes"
            ) {

                characterType =
                    "SUPERVIVIENTE";

            }

            if (
                parentSection &&
                parentSection.id ===
                "killers"
            ) {

                characterType =
                    "KILLER";

            }

            randomResult.textContent =
                `🎲 ${characterType}: ${characterName}`;

            randomResult.className =
                "random-result active";

            selectedCard.scrollIntoView({

                behavior: "smooth",

                block: "center"

            });

            setTimeout(() => {

                selectedCard.classList.add(
                    "random-selected"
                );

            }, 400);

            setTimeout(() => {

                selectedCard.classList.remove(
                    "random-selected"
                );

            }, 1700);

        });
}

/* =====================================================
   SISTEMA DE MODO CLARO / MODO OSCURO
   ===================================================== */

const lightMode =
    document.getElementById("lightMode");

const darkMode =
    document.getElementById("darkMode");

if (lightMode && darkMode) {
    lightMode.addEventListener(
        "click",
        () => {

            document.body.classList.add(
                "light-mode"
            );

            lightMode.classList.add(
                "active"
            );

            darkMode.classList.remove(
                "active"
            );

        }
    );

    darkMode.addEventListener(
        "click",
        () => {

            document.body.classList.remove(
                "light-mode"
            );

            darkMode.classList.add(
                "active"
            );

            lightMode.classList.remove(
                "active"
            );

        }
    );
}

/* ==================== CONFIGURACIÓN DE AUDIO ==================== */


const musica = document.getElementById("musicaFondo");
const boton = document.getElementById("botonMusica");

let reproduciendo = false;
let inicioSolicitado = false;

async function iniciarMusica() {
    if (reproduciendo) return;

    try {
        await musica.play();
        reproduciendo = true;
        actualizarBoton();
    } catch (error) {
        console.log("Haz clic en la página para activar la música.");
    }
}

function actualizarBoton() {
    boton.textContent = reproduciendo
        ? "⏸ Pausar música"
        : "▶ Reanudar música";
}

document.addEventListener("click", function primerClic() {
    if (!inicioSolicitado) {
        inicioSolicitado = true;
        iniciarMusica();
    }
}, { once: true });

boton.addEventListener("click", async (evento) => {
    evento.stopPropagation();

    if (musica.paused) {
        await iniciarMusica();
    } else {
        musica.pause();
        reproduciendo = false;
        actualizarBoton();
    }
});

musica.addEventListener("play", () => {
    reproduciendo = true;
    actualizarBoton();
});

musica.addEventListener("pause", () => {
    reproduciendo = false;
    actualizarBoton();
});

// Intentar reproducir al abrir la página.
iniciarMusica();




/* =========================================
   FAVORITOS FORSAKEN
   Clic para agregar / clic para quitar
========================================= */



document.addEventListener("click", function (event) {
    const boton = event.target.closest(".favorite-btn");
    if (!boton) return;

    const agregado = boton.dataset.favorito !== "si";

    boton.dataset.favorito = agregado ? "si" : "no";
    boton.textContent = agregado
        ? "★ Quitar de favoritos"
        : "☆ Agregar a favoritos";

    boton.style.backgroundColor = agregado ? "#ffd700" : "#21112b";
    boton.style.color = agregado ? "#201010" : "#e2b8ff";
    boton.style.borderColor = agregado ? "#fff0a3" : "#f75555";
});


/* BUSCADOR FORSAKEN */


/* =====================================
   BUSCADOR FORSAKEN
   Buscar, ocultar y restaurar personajes
===================================== */
 


(() => {
    function iniciarBuscador() {
        const entrada = document.getElementById("buscadorPersonajes");
        const boton = document.getElementById("botonBuscar");

        if (!entrada || !boton) {
            console.error("Revisa los IDs del buscador en index.html");
            return;
        }

        let anterior = null;

        function buscar() {
            const nombreBuscado = entrada.value.trim();

            if (anterior) {
                anterior.classList.remove("personaje-encontrado");
                anterior = null;
            }

            if (!nombreBuscado) return;

            const tarjetas = document.querySelectorAll(".character-card");
            let encontrado = null;

            tarjetas.forEach(tarjeta => {
                const titulo = tarjeta.querySelector("h3");

                if (titulo && titulo.textContent.trim() === nombreBuscado) {
                    encontrado = tarjeta;
                }
            });

            if (encontrado) {
                anterior = encontrado;
                encontrado.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });
                encontrado.classList.add("personaje-encontrado");
            } else {
                alert("Personaje no encontrado. Revisa cómo escribiste el nombre.");
            }
        }

        boton.addEventListener("click", buscar);

        entrada.addEventListener("keydown", event => {
            if (event.key === "Enter") buscar();
        });
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", iniciarBuscador);
    } else {
        iniciarBuscador();
    }
})();









/* ===== BUSCADOR FORSAKEN CON BRILLO MORADO ===== */

(() => {
    const iniciarBuscador = () => {
        const entrada = document.getElementById("buscadorPersonajes");
        const boton = document.getElementById("botonBuscar");

        if (!entrada || !boton) {
            console.error("No se encontró el buscador o el botón BUSCAR.");
            return;
        }

        let personajeAnterior = null;

        function buscarPersonaje() {
            const nombreBuscado = entrada.value.trim();

            // Quitar el resaltado anterior
            if (personajeAnterior) {
                personajeAnterior.classList.remove("personaje-encontrado");
                personajeAnterior = null;
            }

            if (nombreBuscado === "") {
                alert("Escribe el nombre de un personaje.");
                return;
            }

            const tarjetas = document.querySelectorAll(".character-card");

            // Comparar el nombre exacto, respetando mayúsculas y minúsculas
            let encontrado = null;

            tarjetas.forEach(tarjeta => {
                const titulo = tarjeta.querySelector("h3");

                if (titulo && titulo.textContent.trim() === nombreBuscado) {
                    encontrado = tarjeta;
                }
            });

            if (encontrado) {
                personajeAnterior = encontrado;

                encontrado.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });

                // Esperar un instante para aplicar el brillo
                encontrado.classList.add("personaje-encontrado");
            } else {
                alert("No se encontró el personaje: " + nombreBuscado);
            }
        }

        boton.addEventListener("click", buscarPersonaje);

        entrada.addEventListener("keydown", event => {
            if (event.key === "Enter") {
                buscarPersonaje();
            }
        });
    };

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", iniciarBuscador);
    } else {
        iniciarBuscador();
    }
})();


alert("JavaScript funciona");


document.getElementById("botonBuscar")?.addEventListener("click", function () {
    const entrada = document.getElementById("buscadorPersonajes");
    const nombre = entrada.value.trim();

    document.querySelectorAll(".character-card").forEach(tarjeta => {
        tarjeta.classList.remove("personaje-encontrado");
    });

    if (!nombre) {
        alert("Escribe el nombre del personaje.");
        return;
    }

    const tarjetas = document.querySelectorAll(".character-card");

    let encontrado = null;

    tarjetas.forEach(tarjeta => {
        const titulo = tarjeta.querySelector("h3");

        if (titulo && titulo.textContent.trim() === nombre) {
            encontrado = tarjeta;
        }
    });

    if (encontrado) {
        encontrado.classList.add("personaje-encontrado");
        encontrado.scrollIntoView({ behavior: "smooth", block: "center" });
    } else {
        console.log("FORSAKEN: script.js se está ejecutando");
    }
});


function irPersonaje(nombre) {
    const tarjetas = document.querySelectorAll(".character-card");

    for (const tarjeta of tarjetas) {
        const titulo = tarjeta.querySelector("h3");

        if (
            titulo &&
            titulo.textContent.trim().toLowerCase() === nombre.toLowerCase()
        ) {
            tarjeta.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

            tarjeta.style.outline = "3px solid #a020f0";
            tarjeta.style.boxShadow = "0 0 25px #a020f0";

            setTimeout(() => {
                tarjeta.style.outline = "";
                tarjeta.style.boxShadow = "";
            }, 2500);

            return;
        }
    }

    console.log("No se encontró el personaje: " + nombre);
}
