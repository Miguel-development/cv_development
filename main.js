// alert("hola");

var desplegado = false;
var miMenu = document.getElementById("div-nav");
var mainContent = document.getElementsByTagName("main")[0];
var footerContent = document.getElementsByTagName("footer")[0];

document.getElementById("menu-desplegable").addEventListener("click",()=>{
        if (desplegado == true){
            //esconde
            miMenu.style.top = "80vh";
            desplegado = false;
        }else{
            //aparece
            miMenu.style.top = "0vh";
            desplegado = true;
        }
    });

footerContent.addEventListener("click",(e)=>{
    //esconde
    miMenu.style.top = "80vh";
    desplegado = false;

},false);

mainContent.addEventListener("click",(e)=>{
    //esconde
    miMenu.style.top = "80vh";
    desplegado = false;

},false);

miMenu.addEventListener("click",(e)=>{
    if (e.target.nodeName === "A"){
       //esconde
       miMenu.style.top = "80vh";
       desplegado = false;
        // console.log(e.target.nodeName);
    }
},false);
