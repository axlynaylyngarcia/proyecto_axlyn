var producto1 = document.getElementById("180");
var producto2 = document.getElementById("250");
var producto3 = document.getElementById("500");
var producto4 = document.getElementById("80");
var producto5 = document.getElementById("2000");
var producto6 = document.getElementById("125");
var total = document.getElementById("precio").innerText;
var bolsa = document.getElementById("bolsa");
var total = document.getElementById("total");
var cantidad = parseInt(document.getElementById("contador-productos").innerText);
console.log(cantidad);

bolsa.addEventListener("click", function(){
    if(total.style.display = "none"){
        total.style.display = "flex";
    }else{
        total.style.display = "none";
    }
    
});

producto1.addEventListener('click', function(){
    total= total + 180;
    cantidad = cantidad + 1;
    document.getElementById("contador-productos").innerText = cantidad
});
producto2.addEventListener('click', function(){
    total= total + 250;
    cantidad = cantidad + 1;
    document.getElementById("contador-productos").innerText = cantidad
});
producto3.addEventListener('click', function(){
    total= total + 500;
    cantidad = cantidad + 1;
    document.getElementById("contador-productos").innerText = cantidad
});
producto4.addEventListener('click', function(){
    total= total + 80;
    cantidad = cantidad + 1;
    document.getElementById("contador-productos").innerText = cantidad
});
producto5.addEventListener('click', function(){
    total= total + 2000;
    cantidad = cantidad + 1;
    document.getElementById("contador-productos").innerText = cantidad
});
producto6.addEventListener('click', function(){
    total= total + 125;
    cantidad = cantidad + 1;
    document.getElementById("contador-productos").innerText = cantidad
});