$(document).ready(function () {
    $("#btnForm").click(function () {
        EnviarEmail();
    });

    var SPMaskBehavior = function (val) {
        return val.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009';
    },
        spOptions = {
            onKeyPress: function (val, e, field, options) {
                field.mask(SPMaskBehavior.apply({}, arguments), options);
            }
        };

    $('#telefoneForm').mask(SPMaskBehavior, spOptions);
});

var regEmail = /^[\w.\+]+@\w+.\w{2,}(?:.\w{2})?$/;
var regTelefone = /^\(\d{2}\) \d{4,5}-\d{4}$/gi;
//var regTelefone = new RegExp('^\\([0-9]{2}\\)((3[0-9]{3}-[0-9]{4})|(9[0-9]{3}-[0-9]{5}))$');

function testEmail(email) {
    return regEmail.test(email);
}

function testTelefone(telefone) {
    return regTelefone.test(telefone);
}

function EnviarEmail() {

    if ($('#nomeForm').val().trim() == '') {
        alert('Nome Obrigatorio');
        $("#nomeForm").focus();
        return false;
    }
    if ($('#emailForm').val().trim() == '') {
        alert('Email Obrigatorio');
        $("#emailForm").focus();
        return false;
    }
    if ($('#telefoneForm').val().trim() == '') {
        alert('Telefone Obrigatorio');
        $("#telefoneForm").focus();
        return false;
    }
    if ($('#assuntoForm').val().trim() == '') {
        alert('Assunto Obrigatorio');
        return false;
    }
    if ($('#msgForm').val().trim() == '') {
        alert('Mensagem Obrigatorio');
        $("#msgForm").focus();
        return false;
    }

    validEmail = testEmail($('#emailForm').val());

    if (validEmail == false) {
        alert('Email não permitido');
        $("#emailForm").focus();
        return false;
    }
    validTelefone = testTelefone($('#telefoneForm').val());

    if (validTelefone == false) {
        alert('Telefone não permitido');
        $("#telefoneForm").focus();
        return false;
    }


    $.ajax({
        url: 'https://localhost:44326/api/Contato/',
        type: 'get',
        data: {
            nome: $("#nomeForm").val(),
            email: $("#emailForm").val(),
            telefone: $("#telefoneForm").val(),
            assunto: $("#assuntoForm").val(),
            mensagem: $("#msgForm").val()
        },
        success: function (dados) {
            alert('E-mail Enviado com sucesso!')
            document.location.href = 'index.html';
            $("#nomeForm").val('');
            $("#emailForm").val('');
            $("#telefoneForm").val('');
            $("#assuntoForm").val('');
            $("#msgForm").val('');
        },

        error: function (erro) {
            alert('Ocorreu algum no envio do E-mail.\nTente novamente mais tarde.')
        }
    });
}