/*let x=parseInt(prompt("Ingresa el primer número de la progresión aritmética"));

let r=parseInt(prompt("Ingresa la razón de la progresión aritmética"));*/

function progresion(x,r,z,y,termino,suma) {


x=parseFloat(prompt("Ingresa el primer número de la progresión aritmética"));

z=parseInt(x);

if (x-z!=0 && isNaN(x)) {

alert("Debes introducir números enteros no decimales o letras");

} else {

   r=parseFloat(prompt("Ingresa la razón de la progresión aritmética"));

}

y=parseInt(r);

if (r-y!=0) {

alert("Debes introducir números enteros no decimales o letras");

} else {

for (i=0;i<10;i++) {

termino=z+y*i;



}

suma = 10*(z+termino)/2;

}


return alert("el valor de la suma es"+"  "+suma);


}

progresion();