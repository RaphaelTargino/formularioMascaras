$(document).ready(function() {

    $("#telefone").mask("(00) 00000-0000");
    $("#cpf").mask("000.000.000-00");
    $("#cep").mask("00000-000");

    $(".botoes button").click(function() {
        const destino = $("#formulario");

        const nomeProblema = $(this).parent().find("h3").text()

        $("#reclamacao").val(nomeProblema);

        $("html").animate({
            scrollTop: destino.offset().top
        }, 1000)
    })

})