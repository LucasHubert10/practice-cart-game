// Esperamos a que el documento esté listo 
// De esta forma nos aseguramos que todo el HTML va a estar disponible
$(document).ready(function () {

    var intentosJuego = 3;
    var cartaAleatoria;
    var cartaSeleccionada;
    var nombre;

    var iniciarJuego = function () {
        intentosJuego = 3;
        $("#intentos").text(intentosJuego);

    }

    var MezclaCartas = function () {
        if (Math.floor(Math.random() * 10) < 3) {
            $(".carta1Frente")[0].src = "./img/trebol.png"
            $(".carta2Frente")[0].src = "./img/corazones.png"
            $(".carta3Frente")[0].src = "./img/diamante.png"
        } else if (Math.floor(Math.random() * 10) < 6 || Math.floor(Math.random() * 10) >= 4) {
            $(".carta1Frente")[0].src = "./img/diamante.png"
            $(".carta2Frente")[0].src = "./img/trebol.png"
            $(".carta3Frente")[0].src = "./img/corazones.png"
        } else {
            $(".carta1Frente")[0].src = "./img/corazones.png"
            $(".carta2Frente")[0].src = "./img/diamante.png"
            $(".carta3Frente")[0].src = "./img/trebol.png"
        }
    }

    var mostrarFrente = function () {
        setTimeout(function () {
            $(".espalda").addClass("hide");
            $(".frente").removeClass("hide");
        }, 500);
    }

    var ocultarFrente = function () {
        setTimeout(function () {
            $(".frente").addClass("hide");
            $(".espalda").removeClass("hide");
        }, 2000);
    }

    var mostrarCartel = function () {
        $("#cartel").removeClass("hide");
        setTimeout(function () {
            $("#cartel").addClass("hide");
        }, 2000);

    }

    $("#login").click(function () {
        nombre = $("#nombreInput").val();

        if (nombre.length > 0) {
            $(".intro").hide();
            $(".instructions").removeClass("hide");
            $("#nombre").text(nombre);
        } else {
        }
    });


    $("#comenzar").click(function () {
        $(".instructions").addClass("hide");
        $(".game").removeClass("hide");
        iniciarJuego();
        $(".frente").addClass("hide");
        $(".espalda").removeClass("hide");
        MezclaCartas()

    })

    /*
        Carta 1
    */

    $(".carta1").click(function () {
        if ($(".carta1Frente")[0].src.includes("corazones") === true) {
            $(".espalda").addClass("hide");
            $(".frente").removeClass("hide");
            setTimeout(function () {
                $(".game").addClass("hide");
                $(".win").removeClass("hide");
            }, 1000);
        } else {
            mostrarFrente();
            ocultarFrente();
            mostrarCartel();
            intentosJuego--;
            $("#intentos").text(intentosJuego);
        }
        if (intentosJuego === 0) {
            mostrarFrente();
            ocultarFrente();
            $(".game").addClass("hide");
            $(".gameover").removeClass("hide");
        }
    })

    /*
        Carta 2
    */

    $(".carta2").click(function () {
        if ($(".carta2Frente")[0].src.includes("corazones") === true) {
            $(".espalda").addClass("hide");
            $(".frente").removeClass("hide");
            setTimeout(function () {
                $(".game").addClass("hide");
                $(".win").removeClass("hide");
            }, 1000);
        } else {
            mostrarFrente();
            ocultarFrente();
            mostrarCartel();
            intentosJuego--;
            $("#intentos").text(intentosJuego);
            MezclaCartas();
        }

        if (intentosJuego === 0) {
            mostrarFrente();
            ocultarFrente();
            $(".game").addClass("hide");
            $(".gameover").removeClass("hide");
        }
    })

    /*
        Carta 3
    */
    $(".carta3").click(function () {
        if ($(".carta3Frente")[0].src.includes("corazones") === true) {
            $(".espalda").addClass("hide");
            $(".frente").removeClass("hide");
            setTimeout(function () {
                $(".game").addClass("hide");
                $(".win").removeClass("hide");
            }, 1000);
        } else {
            mostrarFrente();
            ocultarFrente();
            MezclaCartas();
            mostrarCartel();
            intentosJuego--;
            $("#intentos").text(intentosJuego);
        }
        if (intentosJuego === 0) {
            mostrarFrente();
            ocultarFrente();
            $(".game").addClass("hide");
            $(".gameover").removeClass("hide");
        }
    })

    $("#botonReintentar").click(function () {
        $(".intro").addClass("hide");
        $(".instructions").addClass("hide");
        $(".win").addClass("hide");
        $(".gameover").addClass("hide");
        $(".game").removeClass("hide");
        iniciarJuego();
        $(".frente").addClass("hide");
        $(".espalda").removeClass("hide");
        MezclaCartas()
    })

    $("#botonReintentar2").click(function () {
        $(".intro").addClass("hide");
        $(".instructions").addClass("hide");
        $(".win").addClass("hide");
        $(".gameover").addClass("hide");
        $(".game").removeClass("hide");
        iniciarJuego();
        $(".frente").addClass("hide");
        $(".espalda").removeClass("hide");
        MezclaCartas()
    })

});