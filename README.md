# Caelum NodeJS

## Git


    git@gitlab.com:edandaniel/caelum-node-course-1.git
    https://gitlab.com/edandaniel/caelum-node-course-.git

    pra mandar do local pro remote

    git push origin master

## bibliotecas npm
http
nodemon
mysql

## dicas
     npm-install <pacote> --save
**--save** garante que pacote continua sendo usado sempre

### Variaveis com underline no começo

Padrão ser **private** pela comunidade, não ficar usando como public.



### Versoes de software
  - ^ garante compatibilidade pros 2 ultimos  
    - ^1.13.2
  - ~ garante compatibilidade pro ultimo apenas
    - ~1.13.2
  - [citation needed]

## Mysql

```sql
  mysql -u root;
	show databases;
  create database cdc;
  create table produtos
    (id int(11) NOT NULL AUTO_INCREMENT,
    titulo varchar(255) DEFAULT NULL,
    descricao text,
    preco decimal(10,2) DEFAULT NULL,
    PRIMARY KEY(id)  );
  desc produtos;
  INSERT INTO produtos(titulo, descricao, preco) VALUES('o senhor dos harry potters', 'historia sobre jedis', 10.90);
  INSERT INTO produtos(titulo, descricao, preco) VALUES('jogos famintos', 'historia sobre fome', 100.90);
  INSERT INTO produtos(titulo, descricao, preco) VALUES('50 touros cinzas', 'toureiro cinza', 0.90);
  INSERT INTO produtos(titulo, descricao, preco) VALUES('estevão rei', 'coletanea de historias dele', 1.90);
  INSERT INTO produtos(titulo, descricao, preco) VALUES('fases da lua', 'vampiros e batman', 10.90);
```

## Curl

### List

    curl -H "Accept:application/json" http://localhost:3000/produtos

### Insert

    curl -H "Content-Type: application/json" -X POST  -d '{"titulo":"titulo","preco":"10","descricao":"descricao"}' http://localhost:3000/produtos

## HTTP requests

- GET
  - **Não** modifica param na underline

- POST
  - Modifica, **cria** params no body

- PUT
  - Modifica, **altera** no body

- DELETE
  - Modifica, **deleta**

## Testes Automatizados

Testes

1. outros
  - manual
  - canary/smoke (passa pelo caminho principal, canario em mina de gás)

2. aceitação
  - simula cliente
  - caixa preta

3. integração
  - partes
  - interno / externo
  - caixa branca

4. unidade
  - function
  - arquivo

```
         {1}    $$$$$$$$ manual | $$$ canary/smoke
        / 2 \   $$$$$$
       /  3  \  $$
      /___4___\ $
```

Jasmine & Mocha
Mocha -> Supertest

### Como rodar os testes **(IMPORTANTE ESTAR TUDO NAS PASTAS CERTAS e.g. : /test/routes/)**
    $ /caelum-node-course-1 > node_modules/mocha/bin/mocha --recursive

## Variaveis de ambiente

NODE_ENV = test
         = prod

## Websockets
```
              Server
______________________
|   _____________    |
|   | _________ |    |
|   | |  HTPP | |    |
|   | |_______| |    |
|   |           |    |
|   | express   |    |
|   |___________|    |
|   |           |    |
|   |     WS    |    |
|   |___________|    |
|____________________|

```
### Motivacao pra usar neste projeto

- Problema : Produtos precisam ser atualizados para os clientes sempre verem ultimas 9dades
  - Atualizar a pagina é muito pesado em recurso, request do documento inteiro e chamadas de todos produtos
  - AJAX funciona mas as chamadas concorrem junto com o node

- Solucao
  - Sockets resolvem isso, mantendo conexoes direto com os clientes

## Deploy

```bash
cd <pastadoprojeto>
npm install
```
## Banco de dados

Parar exportar db com estrutura e dados

    mysqldump database_name > database_name.sql
