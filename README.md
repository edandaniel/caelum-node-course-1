# Caelum NodeJS

## Git

    git@gitlab.com:edandaniel/caelum-node-course-1.git
    https://gitlab.com/edandaniel/caelum-node-course-.git

    pra mandar do local pro remote
     //
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

    curl -H "Accept:application/json" http://localhost:3000/produtos

## HTTP requests

- GET
  - **Não** modifica param na underline

- POST
  - Modifica, **cria** params no body

- PUT
  - Modifica, **altera** no body

- DELETE
  - Modifica, **deleta**
