/*
Case Sensitive

por Tag: getElementByTagName()

por Id: getElementById()

por Nome: getElementsByName()

por Classe: getElementsByClassName()

por Seletor: querySelector()
*/

let nome = window.document.getElementById("nome");
let email = document.querySelector("#email");//No Query não funciona sem a Hashtag
let assunto = document.querySelector("#assunto");
let nomeOk = false;
let emailOk = false;
let assuntoOk = false;
let mapa = document.querySelector("#mapa")

nome.style.width = "60%";
email.style.width = "60%";

function validaNome() {

    let txtNome = document.querySelector("#txtNome");
    if(nome.value.length < 3){
        txtNome.innerHTML = "Nome Inválido!"
        txtNome.style.color = "red"
    }else{
        txtNome.innerHTML = "Nome Válido!"
        txtNome.style.color = "rgb(51, 255, 44)"
        nomeOk = true;
    }

}

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

function mapaZoomIn(){
    mapa.style.width = "600px"
    mapa.style.height = "500px"
    mapa.style.transition = "0.5s"
}

function mapaZoomOut() {
    mapa.style.width = "400px"
    mapa.style.height = "300px"
    mapa.style.transition = "0.5s"
}