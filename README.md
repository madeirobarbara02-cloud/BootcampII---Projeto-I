Biblioteca Vitual 📚

Autora

Bárbara Madeiro

Descrição

Aplicação web interativa para busca de livros no acervo global da Open Library. Na Etapa 02 do Bootcamp, o projeto evoluiu para incluir uma estante virtual com persistência de dados em banco de dados relacional PostgreSQL (via Supabase) e conteinerização completa para implantação com Docker e Nginx.

🔗 Links do Projeto

Repositório GitHub: https://github.com/madeirobarbara02-cloud/BootcampII---Projeto-I

Aplicação no Ar (GitHub Pages): https://madeirobarbara02-cloud.github.io/BootcampII---Projeto-I/

Repositório no Docker Hub: https://hub.docker.com/r/barbaramadeiro/bootcamp2-app

🚀 Comando para Execução Rápida (Docker)

Para rodar a aplicação instantaneamente em qualquer servidor com Docker instalado, execute o comando abaixo:

docker run -d -p 8080:80 barbaramadeiro/bootcamp2-app:1.0


Após executar, acesse no navegador: http://localhost:8080

💾 Persistência de Dados (Supabase)

Banco de Dados Escolhido: PostgreSQL hospedado e gerenciado via Supabase.

Estrutura da Tabela: favoritos

id (int8 / primary key): Identificador único gerado automaticamente.

created_at (timestamp): Data e hora de inclusão do livro na estante.

titulo (text): Título do livro retornado pela API da Open Library.

autor (text): Nome do autor ou autores do livro.

capa_url (text): Link para a imagem da capa do livro.

Operações CRUD Implementadas:

Create (C): O botão "⭐ Adicionar à Estante" insere o livro pesquisado na tabela favoritos do banco de dados.

Read (R): A função carregarFavoritos() faz o SELECT de todos os livros salvos e renderiza a estante assim que a página é aberta.

Delete (D): O botão "Excluir" remove o registro correspondente diretamente no banco pelo seu id.

Limitação Conhecida: As políticas de acesso (RLS) da tabela favoritos foram configuradas com permissão de leitura/escrita pública (anon), o que é aceitável para este protótipo de demonstração sem autenticação de usuários.

🎮 Evidências das Sidequests

SQ1 · .dockerignore

Criado o arquivo .dockerignore na raiz do projeto para ignorar pastas pesadas ou desnecessárias no processo de build, como .git, README.md e a pasta de assets/. Isso torna a imagem final mais enxuta e reduz o tempo de transferência e criação da imagem Nginx.

SQ2 · Versionamento de Imagens

Foram geradas e publicadas três tags públicas no Docker Hub:

1.0: Primeira versão estável contendo integração com Supabase.

1.1: Versão com atualizações e ajustes de interface.

latest: Aponta sempre para a última versão disponível.

SQ3 · Descrição no Docker Hub

O campo Overview do repositório no Docker Hub foi devidamente preenchido com a explicação detalhada da aplicação, instruções do docker run e link direto para o repositório no GitHub.

SQ4 · Explorando a Orquestração

Foram executadas duas instâncias simultâneas do container mapeadas nas portas 8080 e 8081 da máquina local.

Reflexão sobre Orquestração em Larga Escala (Kubernetes):

"Se eu tivesse 100 containers em produção, a gestão manual com comandos individuais de docker run seria inviável. Nesse cenário, utilizaria o Kubernetes (K8s) para realizar a orquestração. No Kubernetes, os containers são organizados dentro de Pods e executados em um Cluster de servidores. A quantidade de instâncias seria controlada definindo Réplicas em um Deployment, permitindo balanceamento de carga automático, escalabilidade sob demanda (autoscaling) e autorrecuperação (self-healing) no caso de falha em qualquer container."
