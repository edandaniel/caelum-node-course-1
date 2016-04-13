Caelum NodeJS

Require http

variavelquecomecacomunderline => é private

>git@gitlab.com:edandaniel/caelum-node-course-1.git

>https://gitlab.com/edandaniel/caelum-node-course-1.git


git push origin master

Versoes de software

^ garante compatibilidade pros 2 ultimos
^1.13.2
~ garante compatibilidade pro ultimo apenas
~1.13.2
[citation needed]

Require

Mysql
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
