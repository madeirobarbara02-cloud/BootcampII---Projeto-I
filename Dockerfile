# 1. Escolhe a imagem base: um servidor web Nginx super leve (alpine)
FROM nginx:alpine

# 2. Copia os seus 3 arquivos do computador para a pasta onde o Nginx lê os sites
COPY index.html style.css script.js /usr/share/nginx/html/

# 3. Avisa que este container vai escutar na porta 80 (porta padrão HTTP)
EXPOSE 80