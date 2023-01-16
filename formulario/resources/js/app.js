import "./bootstrap";

const formularioDeDados = document.getElementById("formulario");

function obterDadosDaTela() {
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const telefone = document.getElementById("telefone").value;
    const genero = document.getElementById("genero").value;
    const data_nascimento = document.getElementById("data_nascimento").value;
    const cidade = document.getElementById("cidade").value;
    const estado = document.getElementById("estado").value;
    const endereco = document.getElementById("endereco").value;

     return {
         nome,
        email,
        telefone,
        genero,
        data_nascimento,
        cidade,
        estado,
        endereco
    };
}
formularioDeDados.addEventListener("submit", function (event) {
    event.preventDefault();
    document.getElementById("valor_form_nome_usuario").innerHTML = obterDadosDaTela().nome;
    document.getElementById("valor_form_email_usuario").innerHTML = obterDadosDaTela().email;
    document.getElementById("valor_form_telefone_usuario").innerHTML = obterDadosDaTela().telefone;
    document.getElementById("valor_form_genero_usuario").innerHTML = obterDadosDaTela().genero;
    document.getElementById("valor_form_data_usuario").innerHTML = obterDadosDaTela().data_nascimento;
    document.getElementById("valor_form_cidade_usuario").innerHTML = obterDadosDaTela().cidade;
    document.getElementById("valor_form_estado_usuario").innerHTML = obterDadosDaTela().estado;
    document.getElementById("valor_form_endereco_usuario").innerHTML = obterDadosDaTela().endereco;

    console.log(obterDadosDaTela());
});
