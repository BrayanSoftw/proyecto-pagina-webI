//Funcion que permite unir textos
function datos(){
    let titulo=document.getElementById('titulo').value;
    let autor=document.getElementById('autor').value;
    //Invocar la funcion unir
    let text=unir(titulo,autor);
    document.getElementById('msj').innerHTML=text;
}

function unir(text1,text2){
    return "Titulo: "+text1+"<br/>"+"autor: "+text2;
}
document.addEventListener("DOMContentLoaded", function() {
    var miDiv = document.getElementById("miDiv");
    miDiv.style.backgroundImage = "url('E:/descargar (2).jfif')";
    miDiv.style.backgroundSize = "cover"; // Ajusta la imagen para cubrir todo el div
    miDiv.style.backgroundPosition = "center"; // Centra la imagen
});