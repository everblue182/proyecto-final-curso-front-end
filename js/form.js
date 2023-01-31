
var inputs = document.getElementsByClassName('formulario-input');
for (var i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('keyup', function(){
        if(this.value.length>=1) {
            this.nextElementSibling.classList.add('fijar');
        } else {
            this.nextElementSibling.classList.remove('fijar');
        }
    });
}


var inputs = document.getElementsByClassName('formulario-area-input');
for (var i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('keyup', function(){
        if(this.value.length>=1) {
            this.nextElementSibling.classList.add('fijar-area');
        } else {
            this.nextElementSibling.classList.remove('fijar-area');
        }
    });
}