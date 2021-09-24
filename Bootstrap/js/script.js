let email = document.querySelector("#email");//No Query não funciona sem a Hashtag
let assunto = document.querySelector("#assunto");
let texto = document.querySelector("#texto")
let emailOk = false;
let assuntoOk = false;
let textoOk = false;

function validaEmail() {

    let txtEmail = document.querySelector("#txtEmail");

    // 1 == existe / -1 == não existe / indexOf
    if(email.value.indexOf("@") == -1 || email.value.indexOf(".com") == -1){
        txtEmail.innerHTML = "E-mail inválido!";
        txtEmail.style.color = "red";
    } else{
        txtEmail.innerHTML = "E-mail válido!";
        txtEmail.style.color = "rgb(51, 255, 44)";
        emailOk = true;
    }
}

function validaTexto() {
    let txtTexto = document.querySelector("#txtTexto");

    if(texto.value.length >= 150) {
        txtTexto.innerHTML = "Texto muito grande, digite no máximo 100 caracteres!";
        txtTexto.style.color = "red";
        txtTexto.style.display = "block";
    } else {
        txtTexto.style.display = "none";
        textoOk = true;
    }

}

function validaAssunto() {
    let txtAssunto = document.querySelector("#txtAssunto");

    if(assunto.value.length >= 50) {
        txtAssunto.innerHTML = "Assunto muito grande, digite no máximo 50 caracteres!";
        txtAssunto.style.color = "red";
        txtAssunto.style.display = "block";
    } else {
        txtAssunto.style.display = "none";
        assuntoOk = true;
    }

}

function enviar() {
    if(emailOk == true && assuntoOk == true && textoOk == true){
        window.alert("Enviado com sucesso!")
    }else {
        window.alert("Falha ao enviar! Por favor confira todos os campos e tente novamente!");
    }
}