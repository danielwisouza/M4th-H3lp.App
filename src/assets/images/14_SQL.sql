-- Logue com o usuário SYSTEM, senha: fatec, nome do host: localhost, porta: 1521, SID: xe

-- Crie um usuario IMB003 com a senha 123
CREATE USER IMB003 IDENTIFIED BY 123;

-- De todas as permissoes ao usuario
GRANT ALL PRIVILEGES TO IMB003;

-- Crie uma nova conexão e logue com o usuario IMB003

-- Crie algumas tabelas
CREATE TABLE PES_PESSOA (
	PES_ID NUMBER(30),
	PES_NOME VARCHAR2(100) NOT NULL,
	CONSTRAINT PES_PESSOA_PK PRIMARY KEY(PES_ID),
	CONSTRAINT PES_NOME_UK UNIQUE(PES_NOME)
);

-- NUMBER é um tipo numerico - o valor entre parênteses (30) indica que possui 30 dígitos.
-- VARCHAR2 é um tipo texto - o valor entre parênteses (100) indica que seu tamanho máximo é 100 caracteres.
-- NOT NULL indica que a coluna é obrigatória.
-- CONSTRAINT PES_PESSOA_PK PRIMARY KEY(PES_ID) indica que a chave primária, de nome PES_PESSOA_PK, é composta pela coluna PES_ID.
-- CONSTRAINT PES_NOME_UK UNIQUE(PES_NOME) indica que PES_NOME é uma coluna que não aceita valores duplicados.

CREATE TABLE CAC_CACHORRO (
	CAC_ID NUMBER(30),
	CAC_NOME VARCHAR2(100) NOT NULL,
	CONSTRAINT CAC_CACHORRO_PK PRIMARY KEY(CAC_ID)
);

CREATE TABLE CON_CONTATO (
	CON_TIPO VARCHAR2(30),
	CON_VALOR VARCHAR2(100),
	PES_ID NUMBER(30) NOT NULL,
	CONSTRAINT CON_CONTRATO_PK PRIMARY KEY (CON_TIPO, CON_VALOR),
	CONSTRAINT CON_PES_FK FOREIGN KEY (PES_ID) REFERENCES PES_PESSOA(PES_ID)
);

-- Repare que a chave primária e composta por duas colunas nessa tabela (CON_TIPO e CON_VALOR)!
-- CONSTRAINT CON_PES_FK FOREIGN KEY (PES_ID) REFERENCES PES_PESSOA(PES_ID) indica que a coluna PES_ID é uma chave estrangeira que referencia a coluna PES_ID da tabela PES_PESSOA.

CREATE TABLE DOC_DOCUMENTO (
	DOC_ID NUMBER(30),
	DOC_TIPO VARCHAR2(10) NOT NULL,
	DOC_NUMERO VARCHAR2(100) NOT NULL,
	PES_ID NUMBER(30) NOT NULL,
	CONSTRAINT DOC_DOCUMENTO_PK PRIMARY KEY (DOC_ID)
);

-- Apague a tabela CAC_CACHORRO
DROP TABLE CAC_CACHORRO;

-- Apague a tabela PES_PESSOA
DROP TABLE PES_PESSOA;

-- Ops! Essa tabela não pode ser excluída, pois tem uma chave estrangeira que a referencia (em CON_CONTATO). Para apagar essa tabela é preciso eliminar a chave estrangeira em CON_CONTATO ou apagar a tabela CON_CONTATO inteira.

-- Insira mais colunas em PES_PESSOA
ALTER TABLE PES_PESSOA ADD PES_DT_NASCIMENTO DATE;
ALTER TABLE PES_PESSOA ADD PES_STATUS VARCHAR2(10);

-- Altere a coluna PES_STATUS para que possua um valor padrão
ALTER TABLE PES_PESSOA MODIFY PES_STATUS VARCHAR2(10) DEFAULT 'NOV' NOT NULL;

-- Insira uma chave estrangeira em DOC_DOCUMENTO
ALTER TABLE DOC_DOCUMENTO ADD CONSTRAINT DOC_PES_FK FOREIGN KEY (PES_ID) REFERENCES PES_PESSOA(PES_ID);

-- Insira alguns registros nas tabelas
INSERT INTO PES_PESSOA(PES_ID, PES_NOME)
VALUES (1, 'A');
INSERT INTO PES_PESSOA(PES_ID, PES_NOME, PES_DT_NASCIMENTO)
VALUES (2, 'B', TO_DATE('01/01/1990', 'dd/mm/yyyy'));
INSERT INTO PES_PESSOA(PES_ID, PES_NOME, PES_DT_NASCIMENTO, PES_STATUS)
VALUES (3, 'C', TO_DATE('02/02/1991', 'dd/mm/yyyy'), 'ATI');
	
INSERT INTO PES_PESSOA(PES_ID, PES_NOME)
VALUES (1, 'D');
-- Esse dá erro porque a chave primária não pode repetir

INSERT INTO PES_PESSOA(PES_ID, PES_NOME)
VALUES (4, 'A');
-- Esse dá erro porque a chave única não pode repetir

INSERT INTO CON_CONTATO(CON_TIPO, CON_VALOR, PES_ID)
VALUES('Telefone', '33334422', 1);
INSERT INTO CON_CONTATO(CON_TIPO, CON_VALOR, PES_ID)
VALUES('Email', 'abcd@kkkk.com', 1);
INSERT INTO CON_CONTATO(CON_TIPO, CON_VALOR, PES_ID)
VALUES('Email', 'abce@kkkk.com', 2);
INSERT INTO CON_CONTATO(CON_TIPO, CON_VALOR, PES_ID)
VALUES('Telefone', '43232122', 3);

INSERT INTO CON_CONTATO(CON_TIPO, CON_VALOR, PES_ID)
VALUES('Telefone', '12341234', 4);

-- Esse dá erro porque não existe registro em PES_PESSOA com PES_ID 4.

-- Verificando o que foi inserido em PES_PESSOA
SELECT * FROM PES_PESSOA;

-- Verificando o que foi inserido em CON_CONTATO
SELECT * FROM CON_CONTATO;

-- Juntando pessoas e suas informações de contato
SELECT * 
FROM PES_PESSOA, CON_CONTATO
WHERE PES_PESSOA.PES_ID = CON_CONTATO.PES_ID;

-- Selecionando o nome das pessoas que possuem Email
SELECT PES_NOME
FROM PES_PESSOA, CON_CONTATO
WHERE PES_PESSOA.PES_ID = CON_CONTATO.PES_ID
AND CON_TIPO = 'Email';

-- Selecionando o id e o nome das pessoas que possuem data de nascimento
SELECT PES_ID, PES_NOME
FROM PES_PESSOA
WHERE PES_DT_NASCIMENTO IS NOT NULL;