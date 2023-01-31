const imagenes = document.querySelectorAll('.img-galeria')
const imageneslight = document.querySelector('.agregar-imagen')
const contenedorlight = document.querySelector('.imagen-light')
const navegacioniconz = document.querySelector('.navegacionicono');

/*
console.log(imagenes)
console.log(imageneslight)
console.log(contenedorlight)*/

imagenes.forEach(imagen =>{
    imagen.addEventListener('click', ()=>{
        aparecerImagen(imagen.getAttribute('src'))
    })
})

contenedorlight.addEventListener('click', (e)=>{
    if(e.target !==imageneslight){
        contenedorlight.classList.toggle('show')
        imageneslight.classList.toggle('showImage')
        navegacioniconz.style.opacity = '1'
    }
})

const aparecerImagen = (imagen)=>{
    imageneslight.src = imagen
    contenedorlight.classList.toggle('show')
    imageneslight.classList.toggle('showImage')
    navegacioniconz.style.opacity = '0'
}