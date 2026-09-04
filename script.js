async function buscarLivro(termo) {
  const area = document.getElementById("resultado");
  area.innerHTML = "<p>Buscando na biblioteca...</p>";

  try {
    const url = `https://openlibrary.org/search.json?q=${encodeURIComponent(termo)}`;
    const resposta = await fetch(url);

    if (!resposta.ok) {
      throw new Error("Erro na conexão com o servidor da biblioteca.");
    }

    const dados = await resposta.json();

    if (!dados.docs || dados.docs.length === 0) {
      throw new Error("Nenhum livro encontrado com esse termo.");
    }

    // Pega o primeiro livro retornado
    const livro = dados.docs[0];

    // Trata os dados com valores padrão para evitar erros na tela
    const titulo = livro.title || "Título indisponível";
    const autor = livro.author_name ? livro.author_name.join(", ") : "Autor desconhecido";
    const ano = livro.first_publish_year || "Ano não informado";
    const editora = livro.publisher ? livro.publisher[0] : "Editora não informada";
    
    // Imagem da capa (usando o serviço da Open Library Covers API)
    const capa = livro.cover_i 
      ? `https://covers.openlibrary.org/b/id/${livro.cover_i}-M.jpg`
      : "https://via.placeholder.com/120x170?text=Sem+Capa";

    area.innerHTML = `
      <img src="${capa}" alt="Capa de ${titulo}">
      <h2>${titulo}</h2>
      <p><strong>Autor(es):</strong> ${autor}</p>
      <p><strong>Primeira Publicação:</strong> ${ano}</p>
      <p><strong>Editora:</strong> ${editora}</p>
    `;
  } catch (erro) {
    area.innerHTML = `<p class="erro">⚠️ ${erro.message || "Ops! Algo deu errado ao buscar o livro."}</p>`;
  }
}

document.getElementById("botao-buscar").addEventListener("click", () => {
  const termo = document.getElementById("campo-busca").value.trim();
  if (termo) buscarLivro(termo);
});

document.getElementById("campo-busca").addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    const termo = e.target.value.trim();
    if (termo) buscarLivro(termo);
  }
});