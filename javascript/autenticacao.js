
// // configurando urls
// var urlBaseSite = '/'

// //verifica se o cookie existe
// if (Cookies.get('site_autenticacao') !== undefined) {
//     //configura o header para as requisições ajax
//     $.ajaxSetup({
//         headers: { 'Authorization': 'Bearer ' + Cookies.get('site_autenticacao') }
//     });
// }
//  else if (window.location.href.indexOf('login.html') === -1) 
// {    
//     //redireciona para o login caso não esteja na tela de login
//     window.location.href = urlBaseSite + 'login.html';
// }
//Configuramdo URL
var urlBaseSite = '/';

//Verificar se o cookie existe
if(Cookies.get('site_autenticacao')!== undefined){
    //Configura o header para as requisições ajax
    $.ajaxSetup({
        headers: {'Authorization': 'Bearer '+Cookies.get('site_autenticacao')}
    });
}
else if(window.location.href.indexOf('index.html')===-1){
    //Redireciona para o login caso não esteja na tela de login
    window.location.href = urlBaseSite + 'index.html';
}