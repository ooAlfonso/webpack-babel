"use strict";

require("fslightbox");

fsLightboxInstances['first-lightbox'].open(0);

fsLightboxInstances['second-lightbox'].props.onOpen = function () {
  return console.log('Lightbox open!');
};
/*import {suma, saludo} from './operaciones.js';
import Swal from 'sweetalert2'
Swal.fire({
    title: 'Alfonso cruz!',
    text: 'Alfonso cruz.',
    imageUrl: 'https://unsplash.it/400/200',
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: 'Custom image',
  })
/*document.write(`<h1>${suma(1, 2)}</h1>`)
console.log(suma(1, 2));
console.log(saludo);
Swal.fire({
    title: 'Error!',
    text: 'Do you want to continue',
    icon: 'error',
    confirmButtonText: 'Cool'
})*/

/*import _ from 'lodash';
function component() {
    const element = document.createElement('div');
  
    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  
    return element;
}
  
document.body.appendChild(component());*/