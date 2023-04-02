# Website do AmbientalIST

Este repositório contém os ficheiros necessários para a compilação do website do AmbientalIST (https://ambientalist.tecnico.ulisboa.pt). Excetuam-se os artigos, os quais são baixados pelo developer para o repositório clonado.

## Como funciona?

**Nota:** Este guia aplica-se a sistemas operativos Linux.

O conteúdo dos artigos está guardado numa conta do [Contentful](https://app.contentful.com). Por isso, para além de clonar este repositório, o utilizador com acesso à conta deverá utilizar dois pacotes para ter acesso à versão de trabalho do site.

O primeiro é o `npm`, instalado pela via normal.

Em seguida, instalar o Gatsby, correndo o comando:

`sudo npm install -g gatsby-cli@3.14.2`

Esta é a última versão conhecida do `gatsby-cli` que não dá problemas, dentro do nosso conhecimento.

Depois, na pasta deste repositório clonado, correr os comandos

`npm install`

`npm run setup`

E inserir as chaves do Contentful pedidas pelo segundo, de modo a gerar o ficheiro `.env`. Este ficheiro permitirá fazer download do conteúdo para uma nova subpasta, `public`. As chaves encontram-se disponíveis na página do website na webapp do Contentful, em Settings -> API Keys. Por óbvios motivos de segurança, o `.env` está listado no `.gitignore`.

Finalmente, fazer o download do conteúdo com o seguinte comando:

`gatsby develop`

A subpasta `public` passará a estar disponível, e pronta a ser posta no servidor, com o site a ser assim atualizado.

Como extra, enquanto o processo relativo a este último comando estiver a correr depois da compilação, o site estará disponível para pré-visualização no `localhost:8000`.
