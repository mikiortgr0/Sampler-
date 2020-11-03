var angX = 0;
var angY = 0;

$('.boto').on('click', function () {
    switch ($(this).attr("id")) {
        case "nord":
            angX = (angX + 90) % 360;
            break;
        case "sud":
            angX = (angX - 90) % 360;
            break;
        case "est":
            angY = (angY + 90) % 360;
            break;
        case "oest":
            angY = (angY - 90) % 360;
            break;
    }
    $('#cub').attr('style', 'transform: rotateX(' + angX + 'deg) rotateY(' + angY + 'deg);');


    console.log("x:" + angX + " y:" + angY);
});


document.getElementById("post").onclick = monitorMusicaPost;
document.getElementById("esq").onclick = monitorMusicaEsq;
document.getElementById("drt").onclick = monitorMusicaDrt;
document.getElementById("sup").onclick = monitorMusicaSup;
document.getElementById("inf").onclick = monitorMusicaIn;
document.getElementById("ant").onclick = monitorMusicaAnt;

let reproductorA = document.getElementById("musicaa");
let reproductorB = document.getElementById("musicab");
let reproductorC = document.getElementById("musicac");
let reproductorD = document.getElementById("musicad");
let reproductorE = document.getElementById("musicae");
let reproductorF = document.getElementById("musicaf");
let slider = document.getElementById("myRange");


slider.oninput = canviaVolum


function monitorMusicaAnt() {
    if (reproductorA.paused == true) {
        reproductorA.play();
        document.getElementById("antimg").src = "../IMG_VIDEO/Pause.png";

    } else {
        reproductorA.pause();
        document.getElementById("antimg").src = "../IMG_VIDEO/Play.png";
    }
}

function monitorMusicaPost() {
    if (reproductorB.paused == true) {
        reproductorB.play();
        document.getElementById("postimg").src = "../IMG_VIDEO/Pause.png";

    } else {
        reproductorB.pause();
        document.getElementById("postimg").src = "../IMG_VIDEO/Play.png";
    }
}

function monitorMusicaEsq() {
    if (reproductorC.paused == true) {
        reproductorC.play();
        document.getElementById("esqimg").src = "../IMG_VIDEO/Pause.png";

    } else {
        reproductorC.pause();
        document.getElementById("esqimg").src = "../IMG_VIDEO/Play.png";
    }
}

function monitorMusicaDrt() {
    if (reproductorD.paused == true) {
        reproductorD.play();
        document.getElementById("drtimg").src = "../IMG_VIDEO/Pause.png";

    } else {
        reproductorD.pause();
        document.getElementById("drtimg").src = "../IMG_VIDEO/Play.png";
    }
}

function monitorMusicaIn() {
    if (reproductorE.paused == true) {
        reproductorE.play();
        document.getElementById("infimg").src = "../IMG_VIDEO/Pause.png";

    } else {
        reproductorE.pause();
        document.getElementById("infimg").src = "../IMG_VIDEO/Play.png";
    }
}

function monitorMusicaSup() {
    if (reproductorF.paused == true) {
        reproductorF.play();
        document.getElementById("supimg").src = "../IMG_VIDEO/Pause.png";

    } else {
        reproductorF.pause();
        document.getElementById("supimg").src = "../IMG_VIDEO/Play.png";
    }
}



function canviaVolum() {
    //    console.log(slider.value);
    reproductorA.volume = slider.value; reproductorB.volume = slider.value;
    reproductorC.volume = slider.value;
    reproductorD.volume = slider.value;
    reproductorE.volume = slider.value;
    reproductorF.volume = slider.value;

}




document.getElementById("videoa").muted = true;




document.getElementById("nord").onclick = movimenta;



function movimenta() {
           

   gsap.to("#videoa", {
        duration: 2,
        x: -290,
            
          
    });
        
    
}

document.getElementById("sud").onclick = movimentb;
function movimentb() {
    
   gsap.to("#videoa", {
        duration: 2,
        x: 0,
            
          
    });
        
}


document.getElementById("est").onclick = canvi;
document.getElementById("oest").onclick = canvi;
function canvi() {
    
      if (document.getElementById("videoa").getAttribute("src")=="../IMG_VIDEO/videoa.mp4") {

     
       
        
        document.getElementById("videoa").setAttribute("src", "../IMG_VIDEO/videob.mp4");
    }else{
        
        document.getElementById("videoa").setAttribute("src", "../IMG_VIDEO/videoa.mp4");
      

   
       
        
    }
}
        
       
  

       
        



