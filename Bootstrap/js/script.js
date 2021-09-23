let email = document.querySelector("#email");//No Query não funciona sem a Hashtag
let assunto = document.querySelector("#assunto");
let emailOk = false;
let assuntoOk = false;

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

function validaAssunto() {
    let txtAssunto = document.querySelector("#txtAssunto");


    if(assunto.value.length >= 100) {
        txtAssunto.innerHTML = "Texto muito grande, digite no máximo 100 caracteres!";
        txtAssunto.style.color = "red";
        txtAssunto.style.display = "block";
    } else {
        txtAssunto.style.display = "none";
        assuntoOk = true;
    }

}

function enviar() {
    if(nomeOk == true && emailOk == true && assuntoOk == true){
        window.alert("Enviado com sucesso!")
    }else {
        window.alert("Falha ao enviar! Por favor confira todos os campos e tente novamente!");
    }
}