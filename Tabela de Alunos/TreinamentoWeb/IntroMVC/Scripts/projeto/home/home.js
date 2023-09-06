/*
 * Define o namespace para objetos e funções JavaScript da tela Home.
 */
Europa.Controllers.Home = {};

/*
 * O seletor $() executa uma função (passada como parâmetro)
 * ao carregar a página.
 */ 
$(function () {
    // As funções abaixo são executadas ao carregar a página.
    Europa.Controllers.Home.AlertGreetings();
});

/*
 * Define uma função que realiza uma requisição GET para o Controller Home
 * e recebe um objeto JSON no formato:
 * {
 *      Message: "string"
 * }
 * e executa a função alert() com o conteúdo da propriedade 'Message'.
 */
Europa.Controllers.Home.AlertGreetings = function () {
    $.get(Europa.Controllers.Home.GreetingsUrl, function (res) {
        console.log(res);
        alert(res.Message);
    });
};