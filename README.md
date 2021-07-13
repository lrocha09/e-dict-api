<h1 align="center">
  <img alt="Logo" src="https://user-images.githubusercontent.com/30050909/125375349-48efb780-e35f-11eb-8ff8-2a0accffe452.png" width="300px">
</h1>

<h3 align="center">
   e-Dict API 
</h3>

<p align="center">Dicionário Toponímico Bilíngue (Português/Libras)</p>

<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/lrocha09/e-dict-api?color=4ca2ea">

  <a href="https://github.com/lrocha09" target="_blank" rel="noopener noreferrer">
    <img alt="Made by" src="https://img.shields.io/badge/made%20by-lucas%20rocha-4ca2ea">
  </a>

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/lrocha09/e-dict-api?color=4ca2ea">

  <a href="https://github.com/lrocha09/e-dict-api/commits/main">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/lrocha09/e-dict-api?color=4ca2ea">
  </a>

  <a href="https://github.com/lrocha09/e-dict-api/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/lrocha09/e-dict-api?color=4ca2ea">
  </a>

  <img alt="GitHub" src="https://img.shields.io/github/license/lrocha09/e-dict-api?color=4ca2ea">
</p>

<p align="center">
  <a href="#%EF%B8%8F-about-the-project">Sobre o projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-technologies">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-getting-started">Iniciando o projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-how-to-contribute">Como contribuir</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-license">Licença</a>
</p>

## 📋 Sobre o projeto

Esta API é responsável por administrar as requisições feitas pelo aplicativo e-Dict e seu painel de controle web,
enviando dados de usuários, fichas toponímicas da cidade de Feira de Sanatana-BA e demais informações como resposta.

As fichas toponímicas são formadas por dados dos topônimos da cidade, bem como nomes, imagens, sinais em libras, 
contextos históricos, enciclopédias, histórias, localização, entre outros. Através desse projeto é possível estudar 
e entender como funciona as nomeclaturas dos bairros, ruas, avenidas e etc. Visando facilitar o dia a dia da comunidade 
de surdos e deficientes auditivos.

## 🚀 Tecnologias

Tecnologias utilizadas para o desenvolvimeno da API:

- [Node.js](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [TypeORM](https://typeorm.io/#/)
- [PostgreSQL](https://www.postgresql.org/)
- [JWT-token](https://jwt.io/)
- [Express](https://expressjs.com/pt-br/)
- [Multer](https://github.com/expressjs/multer)
- [uuid v4](https://github.com/thenativeweb/uuidv4/)

## 💻 Iniciando o projeto

Importe o `e-dict_Insomnia.json` no aplicativo Insomnia ou clique no botão abaixo:

[![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=e-Dict%20API&uri=https%3A%2F%2Fraw.githubusercontent.com%2Flrocha09%2Fe-dict-api%2Fmain%2Fe-dict_Insomnia.json%3Ftoken%3DAHFIUXMMVIZHTKGKAHNFLS3A5TW2I)

### Requisitos

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://classic.yarnpkg.com/) ou [npm](https://www.npmjs.com/)
- Ter o [PostgreSQL](https://www.postgresql.org/) instalado em sua máquina

> Obs.: Recomendado utilizar o docker, as configurações para conexão estão no arquivo `ormconfig.json`

**Clone o projeto e acesse a pasta**

```bash
$ git clone https://github.com/lrocha09/e-dict-api.git && e-dict-api
```

**Siga os passos abaixo**

```bash
# Instale as dependências:
$ yarn

# Crie um container do postgreSQL usando docker:
$ docker run --name e-dict_postgres -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres

# Logo após execute as migrações:
$ yarn typeorm migration:run

# Por fim, inicie o servidor da API:
$ yarn dev:server

# Muito bem, o projeto foi iniciado e pronto para ser utilizado!
```

## ❓ Como contribuir

**Faça um fork do repositório**

```bash
# Você poderá fazer o fork usando a linha de comando,
# Ou caso não tenha a CLI do GitHub, use o site para fazer isso.

$ gh repo fork lrocha09/e-dict-api
```

**Siga os passos abaixo**

```bash
# Clone o repositório que fez o fork:
$ git clone url-seu-fork && cd e-dict-api

# Crie uma branch com a feature que deseja adicionar:
$ git checkout -b sua-feature

# Faça o commit com suas mudanças
$ git commit -m 'Minha contribuição no e-Dict'

# Envie o código para o repositório remoto:
$ git push origin sua-feature
```

## 📝 Licença

Este projeto está licenciado sob a Licença MIT - Consulte o arquivo [LICENSE](LICENSE) para obter detalhes.

---

Projeto Desenvolvido por Lucas Rocha 🖥 
