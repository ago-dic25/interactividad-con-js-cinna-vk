//====Variables=====//
var arreglo = [1, 2, 3, 4, 5];
var entero = 1;
var cadena_texto = "Hola Mundo";
var booleano = true;

//===Constantes====//
const PI = 3.1416;


//====Funciones====//
function suma(x, y){
    var resultado = x + y;
    console.log("El resultado de la suma es: " + resultado);
    return resultado;
}

function imprimirMensaje(mensaje){
    console.log("Este es mi mensaje " + mensaje);
}

imprimirMensaje("Hola");
imprimirMensaje("Vacaciones 1 semana :D");
imprimirMensaje(true);

suma(1, 2);
suma(10, 20);
suma(100, 200);


//===Elementos de la pagina como variables===///
var botonBuscar = document.getElementById("buscar");
var mas=document.getElementById("mas");
var verPosts=document.getElementById("verPosts");
var verFotos=document.getElementById("verFotos");
var menu=document.getElementById("menu");
var articles=document.getElementById("articles");
var radio=document.getElementById("radio");
var podcast=document.getElementById("podcast");
var registro=document.getElementById("registro");
var beAWriter=document.getElementById("beAWriter");
var talkToUs=document.getElementById("talkToUs");
var screenMode=document.getElementById("screenMode");
var body=document.body;
var title=document.getElementById("title");
var post=document.getElementById("post");
var date=document.getElementById("date");
var travel1=document.getElementById("travel1");
var travel2=document.getElementById("travel2");
var arrowButton=document.getElementById("arrowButton");
var logo=document.getElementById("logo");
var imagen=document.getElementById("imagen");
var busqueda=document.getElementById("busqueda");
var tarjetas=document.getElementsByClassName("tarjeta");
var fotoActual=document.getElementById("fotoActual");
var fotos=["imgs/default_2.jpg", "imgs/default_3.avif", 
        "imgs/default_4.avif", "imgs/default_5.avif",
        "imgs/default_6.avif", "imgs/default_7.avif", 
        "imgs/default_8.avif", "imgs/default_9.avif",
        "imgs/default_10.avif", "imgs/default_11.avif",
        "imgs/default_12.avif", "imgs/default_1.jpg"];
var likes=0;
var i = 0;

console.log(botonBuscar);

//==== Eventos===== //
botonBuscar.addEventListener("click", function(){
    if(busqueda.classList.contains("ocultar")){
        busqueda.classList.remove("ocultar");
        busqueda.classList.add("mostrar");
    }else{
        busqueda.classList.remove("mostrar");
        busqueda.classList.add("ocultar");
    }
});

verPosts.addEventListener("click",function(){
    if(post.classList.contains("ocultar")){
        post.classList.remove("ocultar");
        post.classList.add("mostrar");
    }else{
        post.classList.remove("mostrar");
        post.classList.add("ocultar");
    }
});

/*verFotos.addEventListener("click",function(){
    if(imagen.classList.contains("ocultar")){
        imagen.classList.remove("ocultar");
        imagen.classList.add("mostrar");
    }else{
        imagen.classList.remove("mostrar");
        imagen.classList.add("ocultar");
    }
});*/

function changeImage(){
    fotoActual.src = fotos[i++];
    if(i == fotos.length){
        i = 0;
    }
}

verFotos.addEventListener("mouseover", function(){
    changePic = setInterval(changeImage, 2000);
});

verFotos.addEventListener("mouseout", function(){
    clearInterval(changePic);
    changePic = null;
});

mas.addEventListener("click",function(){
    likes+=1;
    mas.innerHTML="+" + likes;
});

busqueda.addEventListener("keyup", function(event){
    if(event.key === "Enter"){
        for(i=0; i<tarjetas.length; i++){
            if(tarjetas[i].innerText.toLowerCase().includes(busqueda.value.toLowerCase())){
                tarjetas[i].classList.remove("ocultar");
                tarjetas[i].classList.add("mostrar");
            }else{
                tarjetas[i].classList.remove("mostrar");
                tarjetas[i].classList.add("ocultar");
            }
        }
    }
});

//====Modo Nocturno y Diurno===//
screenMode.addEventListener("click",function(){
    contents = [body, logo, articles, radio, podcast, beAWriter, 
        talkToUs, botonBuscar, screenMode, menu, title, post, 
        verPosts, verFotos, date, travel1, travel2, arrowButton];
    for(i=0; i<contents.length; i++){
        if(contents[i].classList.contains("dia")){
            contents[i].classList.remove("dia");
            contents[i].classList.add("noche");
        }else{
            contents[i].classList.remove("noche");
            contents[i].classList.add("dia");
        }
    }
});

menu.addEventListener("click",function(){
    alert("Seccion en progreso...")
});

articles.addEventListener("click",function(){
    alert("Seccion en progreso...")
});

radio.addEventListener("click",function(){
    alert("Seccion en progreso...")
});

podcast.addEventListener("click",function(){
    alert("Seccion en progreso...")
}); 

beAWriter.addEventListener("click",function(){
    alert("Seccion en progreso...")
});

talkToUs.addEventListener("click",function(){
    alert("Seccion en progreso...")
});