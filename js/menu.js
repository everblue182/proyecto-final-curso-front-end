const navegacionicon = document.querySelector('.navegacionicono');
const menu = document.querySelector('.menu-navegacion');

/*console.log(menu)
console.log(navegacionicon)*/

/*navegacionicon.addEventListener('click', ()=>{
    alert("click")
})*/

navegacionicon.addEventListener('click', ()=>{
    menu.classList.toggle("spread")
})

window.addEventListener('click', e=>{
    if(menu.classList.contains('spread')
        && e.target != menu && e.target != navegacionicon){
            menu.classList.toggle("spread")
        }
})

