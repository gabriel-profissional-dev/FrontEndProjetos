$(document).ready(function () {
    // Máscara para o campo CEP
    $('#cep').mask('00000-000');

    $('#searchButton').click(function () {
        var cep = $('#cep').val().replace('-', '');
        $.get('https://viacep.com.br/ws/' + cep + '/json/', function (data) {
            if (!data.erro) {
                // Preencher o formulário do modal com os dados do CEP
                $('#logradouro').val(data.logradouro);
                $('#bairro').val(data.bairro);
                $('#cidade').val(data.localidade);
                $('#estado').val(data.uf);

                //Gerar a informação aproximada para o campo "Complemento"
                var complemento = 'Im\u00F3vel pr\u00F3ximo ao(a) '
                    + data.logradouro + ', bairro ' + data.bairro
                    + ', ' + data.localidade + ' - ' + data.uf;
                $('#complemento').val(complemento);

                //Preencher o campo DDD com base no estado
                var ddd = obterDDD(data.uf);
                $('#ddd').val(ddd);

                // Abrir o modal com os dados
                $('#addressModal').modal('show');
            } else {
                // Abrir o modal de erro
                $('#errorModal').modal('show');
            }
        });
    });
});

function obterDDD(estado) {
    // Mapeamento de estados para DDDs
    var ddds = {
        'AC': '68',
        'AL': '82',
        'AP': '96',
        'AM': '92',
        'BA': '71',
        'CE': '85',
        'DF': '61',
        'ES': '27',
        'GO': '62',
        'MA': '98',
        'MT': '65',
        'MS': '67',
        'MG': '31',
        'PA': '91',
        'PB': '83',
        'PR': '41',
        'PE': '81',
        'PI': '86',
        'RJ': '21',
        'RN': '84',
        'RS': '51',
        'RO': '69',
        'RR': '95',
        'SC': '48',
        'SP': '11',
        'SE': '79',
        'TO': '63'
    };

    return ddds[estado] || 'N/A'; // Retorna 'N/A' se o estado não estiver mapeado
}

