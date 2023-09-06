$(document).ready(function () {
    // Função para fazer a requisição GET e preencher a tabela
    function listarAlunos() {
        $.get('/Home/ListarAlunos', function (data) {
            // Limpa a tabela
            $('#alunos-list').empty();

            // Preenche a tabela com os dados dos alunos
            $.each(data, function (index, aluno) {
                $('#alunos-list').append(`
                    <tr>
                        <td>${aluno.Nome}</td>
                        <td>${aluno.Sobrenome}</td>
                        <td>${aluno.Idade}</td>
                    </tr>
                `);
            });
        });
    }

    // Chama a função para listar os alunos quando a página carregar
    listarAlunos();
});
