
{   let Negro = document.getElementById("PraiseNegra");
    let Blanco = document.getElementById("PraiseBlanca");
    let Gris = document.getElementById("PraiseGris");
    let Claro = document.getElementById("PraiseClara");
    let Marron = document.getElementById("PraiseMarron");
    let Image = document.getElementById("Praise");
    
    Negro.onclick = function() {

        Image.src = "../Img/Camiseta Negra.jpg";

    }
    Blanco.onclick = function() {

        Image.src = "../Img/Camiseta Blanca.jpg";

    }
    Gris.onclick = function() {

        Image.src = "../Img/Camiseta Gris.jpg";

    }
    Claro.onclick = function() {

        Image.src = "../Img/Camiseta Gris Claro.jpg";

    }
    Marron.onclick = function() {

        Image.src = "../Img/Camiseta Marron.jpg";

    }

}

{   let Negro = document.getElementById("DS1Negra");
    let Blanco = document.getElementById("DS1Blanca");
    let Gris = document.getElementById("DS1Gris");
    let Claro = document.getElementById("DS1Clara");
    let Marron = document.getElementById("DS1Marron");
    let Image = document.getElementById("DS1");
    
    Negro.onclick = function() {

        Image.src = "../Img/Camiseta Ds1 Negra.jpg";

    }
    Blanco.onclick = function() {

        Image.src = "../Img/Camiseta Ds1 Blanca.jpg";

    }
    Gris.onclick = function() {

        Image.src = "../Img/Camiseta Ds1 Gris.jpg";

    }
    Claro.onclick = function() {

        Image.src = "../Img/Camiseta Ds1 Gris Clara.jpg";

    }
    Marron.onclick = function() {

        Image.src = "../Img/Camiseta Ds1 Marron.jpg";

    }

}

{   let Negro = document.getElementById("DS2Negra");
    let Blanco = document.getElementById("DS2Blanca");
    let Gris = document.getElementById("DS2Gris");
    let Claro = document.getElementById("DS2Clara");
    let Marron = document.getElementById("DS2Marron");
    let Image = document.getElementById("DS2");
    
    Negro.onclick = function() {

        Image.src = "../Img/Camiseta Ds2 Negra.jpg";

    }
    Blanco.onclick = function() {

        Image.src = "../Img/Camiseta Ds2 Blanca.jpg";

    }
    Gris.onclick = function() {

        Image.src = "../Img/Camiseta Ds2 Gris.jpg";

    }
    Claro.onclick = function() {

        Image.src = "../Img/Camiseta Ds2 Gris Clara.jpg";

    }
    Marron.onclick = function() {

        Image.src = "../Img/Camiseta Ds2 Marron.jpg";

    }

}

{   let Negro = document.getElementById("SolaireNegra");
    let Blanco = document.getElementById("SolaireBlanca");
    let Gris = document.getElementById("SolaireGris");
    let Claro = document.getElementById("SolaireClara");
    let Marron = document.getElementById("SolaireMarron");
    let Image = document.getElementById("Solaire");
    
    Negro.onclick = function() {

        Image.src = "../Img/Camiseta Solaire Negra.jpg";

    }
    Blanco.onclick = function() {

        Image.src = "../Img/Camiseta Solaire Blanca.jpg";

    }
    Gris.onclick = function() {

        Image.src = "../Img/Camiseta Solaire Gris.jpg";

    }
    Claro.onclick = function() {

        Image.src = "../Img/Camiseta Solaire Gris Clara.jpg";

    }
    Marron.onclick = function() {

        Image.src = "../Img/Camiseta Solaire Marron.jpg";

    }

}

{   let Negro = document.getElementById("SynthSunNegra");
    let Blanco = document.getElementById("SynthSunBlanca");
    let Gris = document.getElementById("SynthSunGris");
    let Claro = document.getElementById("SynthSunClara");
    let Marron = document.getElementById("SynthSunMarron");
    let Image = document.getElementById("SynthSun");
    
    Negro.onclick = function() {

        Image.src = "../Img/Camiseta SynthSun Negra.jpg";

    }
    Blanco.onclick = function() {

        Image.src = "../Img/Camiseta SynthSun Blanca.jpg";

    }
    Gris.onclick = function() {

        Image.src = "../Img/Camiseta SynthSun Gris.jpg";

    }
    Claro.onclick = function() {

        Image.src = "../Img/Camiseta SynthSun Gris Claro.jpg";

    }
    Marron.onclick = function() {

        Image.src = "../Img/Camiseta SynthSun Marron.jpg";

    }

}

{
var botones = document.getElementsByClassName("Compra");
var video = document.getElementById("Video");

for (var i = 0; i < botones.length; i++) {
  botones[i].addEventListener("click", function() {
    mostrarVideo();
  });
}

function mostrarVideo() {
  video.style.display = "flex";
  video.style.opacity = "1";
  video.play();
}

video.addEventListener("pause", function() {
  video.style.display = "none";
  video.style.opacity = "0";
});

video.addEventListener("ended", function() {
  video.style.display = "none";
  video.style.opacity = "0";
});
}