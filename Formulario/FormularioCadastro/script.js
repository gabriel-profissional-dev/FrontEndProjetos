$(document).ready(function () {
    var diaSelect = $("#dia");
    diaSelect.append('<option value="" disabled selected>Dia</option>');
    for (var dia = 1; dia <= 31; dia++) {
        var optionValue = dia.toString().padStart(2, '0');
        diaSelect.append(`<option value="${optionValue}">${optionValue}</option>`);
    }

    var mesSelect = $("#mes");
    mesSelect.append('<option value="" disabled selected>M\u00eas</option>');
    var meses = [
        "Janeiro", "Fevereiro", "Mar\u00e7o", "Abril", "Maio", "Junho",
        "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
    ];
    meses.forEach(function (mes, index) {
        var optionValue = (index + 1).toString().padStart(2, '0');
        mesSelect.append(`<option value="${optionValue}">${mes}</option>`);
    });

    var anoSelect = $("#ano");
    anoSelect.append('<option value="" disabled selected>Ano</option>');
    for (var ano = 1990; ano <= 1999; ano++) {
        var optionValue = ano.toString().padStart(2, '0');
        anoSelect.append(`<option value="${optionValue}">${optionValue}</option>`);
    }

    $("#enviar").click(function () {
        var fields = [
            { id: "nome", label: "Nome" },
            { id: "sobrenome", label: "Sobrenome" },
            { id: "email", label: "Email" },
            { id: "telefone", label: "Telefone" },
            { id: "descricao", label: "Descri\u00e7\u00e3o" }
        ];

        var missingFields = [];

        fields.forEach(function (field) {
            var value = $(`#${field.id}`).val();
            if (!value) {
                missingFields.push(field.label);
            }
        });

        if (!$("#dia").val()) {
            missingFields.push("Dia de Nascimento");
        }

        if (!$("#mes").val()) {
            missingFields.push("M\u00eas de Nascimento");
        }

        if (!$("#ano").val()) {
            missingFields.push("Ano de Nascimento");
        }

        if (missingFields.length === 0) {
            var dataNascimento = `${$("#dia").val()}/${$("#mes").val()}/${$("#ano").val()}`;
            var dadosCadastrados = fields.map(function (field) {
                var value = $(`#${field.id}`).val();
                return `${field.label}: ${value}`;
            });

            dadosCadastrados.push(`Data de Nascimento: ${dataNascimento}`);

            alert(`Usu\u00e1rio cadastrado com sucesso:\n${dadosCadastrados.join("\n")}`);
        } else {
            var missingFieldsText = missingFields.map(function (field) {
                var decodedLabel = decodeURIComponent(field);
                return `O campo [${decodedLabel}] \u00e9 necess\u00e1rio.`;
            }).join("\n");
            alert(missingFieldsText);
        }
    });

    $("#limpar").click(function () {
        $("#cadastro-form")[0].reset();
    });
});
