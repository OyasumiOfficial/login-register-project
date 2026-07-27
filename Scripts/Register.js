import express from `express`

const Email = document.querySelector('#Email');
const Username = document.querySelector('#Username');
const Password = document.querySelector('#Password');
const ConfirmPassword = document.querySelector('#ConfirmPassword');

const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    // Obriga preencher o campo
    if (!Email.value || !Username.value || !Password.value || !ConfirmPassword.value) {
        console.log("Porfavor, preencha todos os campos.");
        SendForm = false;
    }

    // Verifica se o usuario tem de 4 a 15 caracteres
    if (Username.value.length < 4 || Username.value.length > 15) {
        console.log("O Username deve ter entre 4 e 15 caracteres.");
        SendForm = false;
    }

    // Verifica o tamanho da senha
    if (Password.value.length < 8 || Password.value.length > 36) {
        console.log("A senha deve ter entre 8 e 36 caracteres.");
        SendForm = false;
    }

    // Verifica se tem letras minusculas e maiúsculas na senha
    if (!Password.value.match(/[a-z]/) || !Password.value.match(/[A-Z]/)) {
        console.log("A senha deve ter pelo menos uma letra  minúscula e maiúsculas.");
        SendForm = false;
    }

    // Verifica se tem 1 número na senha
    if (!Password.value.match(/[0-9]/)) {
        console.log("A senha deve ter pelo menos um número");
        SendForm = false;
    }

    // Verifica se tem 1 caracter especial na senha
    if (!Password.value.match(/[^a-z A-Z 0-9]/)) {
        console.log("A senha deve ter pelo menos um caractere especial.");
        SendForm = false;
    }

    // Verifica se as senhas são iguais
    if (Password.value !== ConfirmPassword.value) {
        console.log("As senhas não coincidem, por favor, tente novamente.");
        SendForm = false;
    }


    if (!SendForm) {
        event.preventDefault();

    }
});

console.log("JavaScript carregado!");