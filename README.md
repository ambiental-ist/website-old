# Website do AmbientalIST

Este repositório contém os ficheiros necessários para a compilação do website do AmbientalIST (https://ambientalist.tecnico.ulisboa.pt). Excetuam-se os artigos, os quais são baixados pelo developer para o repositório clonado.

## Gerar o site

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

## Publicar o site

O site em si encontra-se hospedado no domínio do IST, no cluster [Sigma](https://si.tecnico.ulisboa.pt/servicos/servidores-e-dados/unix-shell/acesso-ao-cluster-sigma/). Após ativação do serviço AFS na [página de self-service dos Serviços de Informática](https://ciist.ist.utl.pt/ciistadmin/user/), o utilizador pode ser adicionado ao grupo AFS do ambientalist, assim ganhando administração da página. Bastará então copiar os conteúdos da pasta `public` gerada na secção anterior para a pasta `web` do grupo `ambientalist` por SSH:

`scp public/* istXXXXXX@sigma.ist.utl.pt:/afs/ist.utl.pt/groups/ambientalist/web`

Tendo o cuidado de iniciar uma sessão SSH para apagar ficheiros já não usados se tal for o caso.
