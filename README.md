<h1 align="center">
  <img src="https://www.gazin.com.br/images/svg/new-logo.svg" alt="Logo">
</h1>

<h3 align="center">
  <!-- alterar link para Gazin -->
  Challenge potential-crud <a href="https://www.gazin.com.br/">Gazin</a>
</h3>

<p align="center">
  <a href="https://www.linkedin.com/in/lucasfdcampos/">
    <img alt="Made by" src="https://img.shields.io/badge/made%20by-Lucas%20Campos-%23ff9d2e">
  </a>
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/lucasfdcampos/gazin-tech-potential-crud?color=%23ff9d2e">
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/lucasfdcampos/gazin-tech-potential-crud?color=%23ff9d2e">
  <a href="https://github.com/lucasfdcampos/gazin-tech-potential-crud/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/lucasfdcampos/gazin-tech-potential-crud?color=%23ff9d2e">
  </a>
  <a href="https://github.com/lucasfdcampos/gazin-tech-potential-crud/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/lucasfdcampos/gazin-tech-potential-crud?color=%23ff9d2e">
  </a>
</p>

<p align="center">
  <a href="#sobre">Sobre</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rodando">Rodando</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#end-points">End-points</a>
</p>

<p align="center">
<a href="https://insomnia.rest/run/?label=&uri=https%3A%2F%2Fraw.githubusercontent.com%2Flucasfdcampos%2Fgazin-tech-potential-crud%2Fmaster%2FInsomnia.json" target="_blank"><img src="https://insomnia.rest/images/run.svg" alt="Run in Insomnia"></a>
</p>

## Sobre

API JSON Rest - CRUD de desenvolvedores.

## Tecnologias

- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [TypeScript](https://www.typescriptlang.org/)
- [Docker](https://www.docker.com/)
- [PostgreSQL](https://www.postgresql.org/)
- [Yarn](https://yarnpkg.com/)
- [Jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
- [Axios](https://www.npmjs.com/package/axios)
- [TypeORM](https://typeorm.io/#/)
- [Multer](https://www.npmjs.com/package/multer)
- [Celebrate](https://github.com/arb/celebrate)
- [Styled-components](https://styled-components.com/)

Utilizei a Stack: Node.js (backend) e React.js (Front-end) por ser as tecnologias que venho estudando e estou mais familiarizado. Tamb??m utilizei o `TypeScript`, pois prefiro tipagens dos retornos das fun????es, par??metros e a utiliza????o de _interfaces_. Acredito que mesmo o c??digo se tornando mais verboso, fica muito mais organizado, por saber realmente o que esperar de cada fun????o.

## Rodando

### **Baixando o reposit??rio**

```bash
git clone https://github.com/lucasfdcampos/gazin-tech-potential-crud.git
```

### **Docker**

N??o coloquei toda aplica????o no Docker compose por n??o ter - ainda - familiaridade com o mesmo.

```bash
docker run --name gazin_postgres -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres
```

### **DataBase**

```bash
CREATE DATABASE gazin_dev
```

### **Back-end**

```bash
cd backend 
```

### Instalar as depend??ncias 

```bash
yarn
```

### Rodar as migrations 

```bash
yarn typeorm migration:run
```

### Projeto
> Para start o servidor

```bash
yarn dev:server
```

Adicionei rotas de usu??rio e autentica????o, por??m o `middleware` que faz a valida????o do token (jwt) nas rotas de _developer_ est?? comentado. Pois n??o adicionei as p??ginas de login/logout no front-end. Mas o login e autentica????o das rotas est?? funcionando corretamente.

Tomei a liberdade de adicionar um avatar ao _developer_, por??m n??o adicionei o update do mesmo no front-end. Via api est?? funcionando corretamente com o `Multer`. Adicionei com a ideia de deixar o _layout_ da lista de desenvolvedores no front-end mais agrad??vel.

Tamb??m n??o adicionei pagina????o, pois - ainda - n??o sei como faze-lo com o TypeORM. Vou buscar como funciona essa particularidade.

### Insomnia

Importe o `Insomnia.json` no Insomnia ou clique em [Run in Insomnia](#insomniaButton)

### Testes

```bash
yarn test
```

### **Front-end**

No front-end utilizei o `styled-components` para escrever o CSS, pois acredito que h?? uma melhor separa????o dos componentes e seus estilos, eliminando bugs devido a colis??o de nomes de classes e tamb??m acredito numa melhor manuten????o do CSS.

Particularmente gostei do front-end. Tamb??m adicionei alguns `@media` para deixar o layout com responsividade. Caracter??stica que observo bastante nas p??ginas web atuais. Ficaria melhor se tivesse adicionado a p??gina de Sign In.

<p align="center">
  <img src="web/public/dashboard-01.png" style="max-width:70%;">
  <img src="web/public/dashboard-02.png" style="max-width:70%;">
  <img src="web/public/dashboard-03.png" style="max-width:70%;">
</p>


<p align="center">
  Utilizei um tema <i>dark</i> e as cores da <a href="https://www.gazin.com.br/">Gazin</a>.<br />
  <img src="web/public/dashboard-04.png" style="max-width:70%;">
</p>


```bash
cd web 
```
### Instalar as depend??ncias 

```bash
yarn
```

### Projeto
> Para start 

```bash
yarn start
```

## End-points

### **Usu??rio**

**Sign In [POST]**
```bash
/sessions
```

**Create [POST]**
```bash
/users
```

### **Desenvolvedores**

**Create [POST]**
```bash
/developers
```

**Update [PUT]**
```bash
/developers/{id}
```

**Delete [DELETE]**
```bash
/developers/{id}
```

**Update Avatar [PATCH]**
```bash
/developers/avatar?id=
```

**List [GET]**
```bash
/developers
```

**Find One [GET]**
```bash
/developers/{id}
```

**Find By Name [GET]**
```bash
/developers/?name=
```

