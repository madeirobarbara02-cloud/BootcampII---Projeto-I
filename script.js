// Substitua pelas suas chaves do Supabase
const SUPABASE_URL = "https://SEU-PROJETO.supabase.co";
const SUPABASE_KEY = "SUA_CHAVE_ANON_PUBLIC_AQUI";
const _supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

let livroAtual = null;

// 1. READ — Carregar Favoritos do Banco
async function carregarFavoritos() {
  const conteiner = document.getElementById("lista-favoritos");
  conteiner.innerHTML = "<p style='text-align:center;'>Carregando estante...</p>";

  const { data: favoritos, error } = await _supabase
    .from("favoritos")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    conteiner.innerHTML = "<p class='erro'>Erro ao carregar favoritos.</p>";
    return;
  }

  if (!favoritos || favoritos.length === 0) {
    conteiner.innerHTML = "<p style='text-align:center; color:#888;'>Sua estante está vazia.</p>";
    return;
  }

  conteiner.innerHTML = favoritos.map(item => `
    <div class="item-favorito">
      <div class="item-favorito-info">
        <img src="${item.capa_url}" alt="${item.titulo}">
        <div>
          <strong>${item.titulo}</strong>
          <p style="font-size:0.85rem; color:#666;">${item.autor}</p>
        </div>
      </div>
      <button class="btn-remover" onclick="removerFavorito('${item.id}')">Excluir</button>
    </div>
  `).join("");
}

// 2. CREATE — Salvar Livro Favorito no Banco
async function salvarFavorito() {
  if (!livroAtual) return;

  const { error } = await _supabase.from("favoritos").insert([{
    titulo: livroAtual.titulo,
    autor: livroAtual.autor,
    capa_url: livroAtual.capa
  }]);

  if (error) {
    alert("Erro ao favoritar o livro.");
    console.error(error);
  } else {
    alert("Livro adicionado à sua estante com sucesso!");
    carregarFavoritos();
  }
}

// 3. DELETE — Remover do Banco
async function removerFavorito(id) {
  const { error } = await _supabase.from("favoritos").delete().eq("id", id);
  if (error) {
    alert("Erro ao remover favorito.");
  } else {
    carregarFavoritos();
  }
}

// Buscar Livro na API da Open Library
async function buscarLivro(termo) {
  const area = document.getElementById("resultado");
  area.innerHTML = "<p>Buscando na biblioteca...</p>";

  try {
    const url = `https://openlibrary.org/search.json?q=${encodeURIComponent(termo)}`;
    const resposta = await fetch(url);
    if (!resposta.ok) throw new Error("Erro de conexão.");

    const dados = await resposta.json();
    if (!dados.docs || dados.docs.length === 0) {
      throw new Error("Nenhum livro encontrado.");
    }

    const livro = dados.docs[0];
    const titulo = livro.title || "Título indisponível";
    const autor = livro.author_name ? livro.author_name.join(", ") : "Autor desconhecido";
    const ano = livro.first_publish_year || "N/A";
    const capa = livro.cover_i 
      ? `https://covers.openlibrary.org/b/id/${livro.cover_i}-M.jpg`
      : "https://via.placeholder.com/110x160?text=Sem+Capa";

    livroAtual = { titulo, autor, capa };

    area.innerHTML = `
      <img src="${capa}" alt="Capa">
      <h2>${titulo}</h2>
      <p><strong>Autor:</strong> ${autor}</p>
      <p><strong>Ano:</strong> ${ano}</p>
      <button class="btn-fav" onclick="salvarFavorito()">⭐ Adicionar à Estante</button>
    `;
  } catch (erro) {
    area.innerHTML = `<p class="erro">⚠️ ${erro.message}</p>`;
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

// Carrega os favoritos do Supabase assim que abre a página
carregarFavoritos();