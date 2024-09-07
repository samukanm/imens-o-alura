function pesquisar() {
    // Obtém a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value
    
    if(!campoPesquisa ) {
        section.innerHTML = "<p>Nada Foi Encontrado. Você precisa digitar o nome de um atleta</p>"
        return 
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados formatados
    let result = "";
    let titulo = "";
    let descricao = "";
    let tags ="";

    // Itera sobre cada dado da pesquisa e gera o HTML para cada resultado
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()
        // se titulo includes campoPesquisa
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            result += `
            <div class="item-resultado">
                <h2>
                    <a href="${dado.instagram}" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href="${dado.wiki}" target="_blank">Saiba mais</a>
            </div>
        `;
        }
       
    }
     
    if (!result) {
        result = "<p>Nada foi Encontrado. O pesquisa não encontrada </p>"
        
       }

    // Atualiza o conteúdo da seção com os resultados formatados
    section.innerHTML = result;
}





