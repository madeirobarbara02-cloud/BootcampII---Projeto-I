<div align="center">

# 📚 Biblioteca & Estante Virtual

### *Bootcamp II · Etapa 02 · Persistência de Dados & Conteinerização com Docker*

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live%20Demo-brightgreen?style=for-the-badge&logo=github)](https://madeirobarbara02-cloud.github.io/BootcampII---Projeto-I/)
[![Docker Hub](https://img.shields.io/badge/Docker%20Hub-Repository-blue?style=for-the-badge&logo=docker)](https://hub.docker.com/r/barbaramadeiro/bootcamp2-app)
[![Supabase](https://img.shields.io/badge/Supabase-PostgreSQL-green?style=for-the-badge&logo=supabase)](https://supabase.com)

</div>

---

## 📑 Sumário
- [📌 Sobre o Projeto](#-sobre-o-projeto)
- [🔗 Links Rápidos](#-links-rápidos)
- [🚀 Execução Rápida via Docker](#-execução-rápida-via-docker)
- [💾 Persistência de Dados (Supabase)](#-persistência-de-dados-supabase)
- [🐳 Conteinerização & Docker](#-conteinerização--docker)
- [🎯 Sidequests Obliteradas (SQ1 – SQ4)](#-sidequests-obliteradas-sq1--sq4)
- [🛠️ Tecnologias Utilizadas](#️-tecnologias-utilizadas)
- [👤 Autora](#-autora)

---

## 📌 Sobre o Projeto

O **Buscador de Livros & Estante Virtual** é uma evolução direta da Etapa 01 do Bootcamp. A aplicação consome a API pública da **Open Library** para pesquisar obras literárias globais e, nesta **Etapa 02**, ganhou "memória" com persistência de dados em tempo real através do **Supabase (PostgreSQL)** e independência de infraestrutura com **Docker**.

---

## 🔗 Links Rápidos

| Recurso | Link |
| :--- | :--- |
| 💻 **Repositório GitHub** | [madeirobarbara02-cloud/BootcampII---Projeto-I](https://github.com/madeirobarbara02-cloud/BootcampII---Projeto-I) |
| 🌐 **Aplicação no Ar (GitHub Pages)** | [Acessar Demonstração Web](https://madeirobarbara02-cloud.github.io/BootcampII---Projeto-I/) |
| 📦 **Repositório Docker Hub** | [barbaramadeiro/bootcamp2-app](https://hub.docker.com/r/barbaramadeiro/bootcamp2-app) |

---

## 🚀 Execução Rápida via Docker

Para rodar a aplicação imediatamente em qualquer ambiente sem necessidade de instalação de dependências locais, execute:

```bash
docker run -d -p 8080:80 barbaramadeiro/bootcamp2-app:1.0
