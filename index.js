const contenido = document.querySelectorAll('.nav');
const promo = document.querySelector('.promo')

contenido.forEach(contenido => console.log(contenido));
    
let nota = document.createElement('main');
nota.classList.add('lista');
nota.innerHTML = '<p> PROMOCION !! llevando dos pares el segundo tiene un descuento de un 20% </p>'
promo.append(nota);
console.log(nota);

