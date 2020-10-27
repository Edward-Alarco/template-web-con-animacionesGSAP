(function () {



    var proFormulario = {

        formulario: document.getElementsByName('formulario_contacto')[0],
        elementos: document.formulario_contacto.elements,
        error: null,
        texto_error: null

    }

    var metFormulario = {

        inicio: function () {
            for (var i = 0; i < proFormulario.elementos.length; i++) {

                if (proFormulario.elementos[i].type == 'text' || proFormulario.elementos[i].type == 'email') {
                    proFormulario.elementos[i].addEventListener('focus', metFormulario.focusInput);
                    proFormulario.elementos[i].addEventListener('blur', metFormulario.blurInput);
                }

            }

            proFormulario.formulario.addEventListener('submit', metFormulario.validarInputs);

        },

        focusInput: function () {
            this.parentElement.children[1].className = 'label active';
        },

        blurInput: function () {
            if (this.value == '') {
                this.parentElement.children[1].className = 'label';
            }
        },

        validarInputs: function (e) {
            for (var i = 0; i < proFormulario.elementos.length; i++) {
                if (proFormulario.elementos[i].value == '') {
                    e.preventDefault();

                    if (proFormulario.elementos[i].parentElement.children.length < 3) {
                        proFormulario.error = document.createElement('p');
                        proFormulario.texto_error = document.createTextNode('Por favor llena el campo con tu ' + proFormulario.elementos[i].name);
                        proFormulario.error.appendChild(proFormulario.texto_error);
                        proFormulario.error.className = 'error';

                        proFormulario.elementos[i].parentElement.appendChild(proFormulario.error);
                    }
                } else {

                    if (proFormulario.elementos[i].parentElement.children.length >= 3){
                        proFormulario.error = proFormulario.elementos[i].parentElement.getElementsByTagName('p')[0];
                        proFormulario.elementos[i].parentElement.removeChild(proFormulario.error);
                    }

                }
            }
        }

    }

    metFormulario.inicio();


}())