let email = document.querySelector("#email")
let nome = window.document.getElementById("nome")
let nomepet = window.document.getElementById("nomepet")
let assunto = document.querySelector("#assunto")

let emailOk = false
let nomeOk = false
let nomepetOk = false
let assuntoOk = false


function validaEmail(){
    let txtEmail = document.querySelector("#txtEmail")
    if(email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1 ){
        txtEmail.innerHTML = "E-mail invalido"
        txtEmail.style.color = "red"
    } else{
        txtEmail.innerHTML = "E-mail válido"
        txtEmail.style.color = "green"
        emailOk = true
    }
}

function validaNome(){
    let txtNome = document.querySelector("#txtNome")
    if(nome.value.length < 2){
        txtNome.innerHTML = "Nome invalido, minimo 2 letras!"
        txtNome.style.color = "red"
    } else {
        txtNome.innerHTML = "Nome válido!"
        txtNome.style.color = "green"
        nomeOk = true
    }
}

function validaNomePet(){
    let txtNomePet = document.querySelector("#txtNomePet")
    if(nomepet.value.length < 2){
        txtNomePet.innerHTML = "Nome invalido, minimo 2 letras!"
        txtNomePet.style.color = "red"
    } else {
        txtNomePet.innerHTML = "Nome válido!"
        txtNomePet.style.color = "green"
        nomepetOk = true
    }
}

function validaAssunto() {
    let txtAssunto = document.querySelector('#txtAssunto')
    if (assunto.value.length >= 100) {
        txtAssunto.innerHTML = 'Texto é muito grande, digite no máximo 100 caracteres'
        txtAssunto.style.color = 'red'
        txtAssunto.style.display = 'block'
    } else {
        txtAssunto.style.display = 'none' /* tira o espaço da mensagem de erro.*/
        assuntoOk = true
    }
}

function enviar(){
    if(emailOk == true && nomeOk == true && nomepetOk == true && assuntoOk == true){
        alert("Formulario enviado com sucesso!")
    }else{
        alert("Preencha o formulario completo antes de enviar...")
    }
}

