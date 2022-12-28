// configurando url
var urlBaseApi = 'https://localhost:44326/api/Login/';
var urlBaseSite = '/'

//executado ao efetuar o envio do formulário
$("#btnLogin").click(function () {
    
    var dados = {
        Usuario: $('#Login').val(),
        Senha: $('#Senha').val()
    }

    $.ajax({
        url: urlBaseApi + 'login', //url a ser executada
        method: "POST", //tipo de método a ser executado
        contentType: 'application/json', //define o formato json para envio de dados
        data: JSON.stringify(dados),//converte objeto de dados para formato json
        success: function (dados) {
            //grava o cookie
            Cookies.set('site_autenticacao', dados.Token, { expires: 1 });
            //redireciona para página index.html
            window.location.href = urlBaseSite + 'index.html';
            alert('Login Efetuado!');
        },
        error: function (data) {
            //se o erro for 401 dá mensagem de usuário ou senha inválidos
            if (data.status == 401) {
                alert('Usuário e/ou senha inválidos');
            } else {
                alert('Ocorreu um erro ao efetuar login');
            }
        }
    })
});

$(document).ready(function () {
    $("#btnLogin").click(function () {
        $.ajax({
            url: 'https://localhost:44326/api/Login/',
            type: "POST",
            data: {
                Usuario: $("#Login").val(),
                Senha: $("#Senha").val()
            },
            success: function (data) {
                if (data === 'Login') {
                    window.location.replace('perfil.html');
                    alert('Login Efetuado!');
                }
                else {
                    alert('Senha incorreta');
                }
            }
        });
    });
});