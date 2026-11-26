# Site Estático Containerizado com Docker

Projeto de um site estático (HTML, CSS, JavaScript e imagem) servido por um container **Nginx** via Docker.

## Estrutura do projeto

- `public/`: arquivos estáticos (`index.html`, `style.css`, `script.js` e `image.png`).
- `Dockerfile`: define a imagem baseada em `nginx:alpine` e copia os arquivos estáticos para o diretório padrão do servidor web.
- `README.md`: documentação do projeto e instruções de uso.

## Como fazer o build da imagem

Na raiz do repositório, execute:

```bash
docker build -t meu-site-estatico .
```

## Como executar o container

Na raiz dos repositório, execute:

```bash
docker run -d --name site-estatico-container -p 8080:80 meu-site-estatico
```

Acesse: localhost:8080

## Diferença entre Imagem e Container

A Imagem é um modelo estático e criado somente para leitura, com o código, as dependências e todas as configurações de uma certa aplicação. Container é uma instância em execução que é feita a partir de uma imagem. Enquanto uma Imagem é usada para distribuir aplicações, um Container é focado em rodar o ambiente isolado a partir dessa imagem.
