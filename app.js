function pesquisar() {
    // Obtém a seção HTML onde os resultados da pesquisa serão exibidos
    let section = document.getElementById
    ("resultados-pesquisa");
  
    let campoPesquisa = document.getElementById
    ("campo-pesquisa").value

    // Quando clicar campo pesquisa não aparece nada
    if (campoPesquisa == "") {
        section.innerHTML = "<p>Nada foi encontrado. Vocé precisa digitar o nome correto</p>"
        return

    }

    campoPesquisa = campoPesquisa.toLowerCase()


    console.log(campoPesquisa);

    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    // Itera sobre cada elemento (dado) do array 'dados'
    for (let dado of dados) {
        titulo = dado.titulo.toLocaleLowerCase()
        descricao = dado.descricao.toLocaleLowerCase()    
        tags = dado.tags.toLocaleLowerCase()

        if(titulo.includes(campoPesquisa) || descricao.includes
    (campoPesquisa)|| tags.includes
    (campoPesquisa)){
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <h2>" sustentabilidade não quer interromper o desenvolvimento, mas corresponde a uma nova forma de pensar,"</h2> <p class="descricao-meta">${dado.descricao}</p>
                <a href=${dado.link} target="_blank">Mais informações</a>
            </div>
        `;
        }      
    }

    if (!resultados) {
        resultados = "<p>Nada foi encontrado</p>"
    }

    
    section.innerHTML = resultados;
}