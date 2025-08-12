let div =document.getElementById("division");
document.getElementById("division").addEventListener("click", function(){
     event.stopPropagation();
    alert("Hola! Soy el Div");
});