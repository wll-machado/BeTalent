# React + TypeScript + Vite

Bem-vindo(a) ao Teste Prático Front-end BeTalent!
Projeto criado com Vite utilizando react 18 e typescript

📱 Sobre
A aplicação consiste em uma unica tela, possui um input para filtrar a lista de funcionarios e a renderização da lista logo abaixo .

Funcionalidades:
- Input de pesquisa que filtra por cargo, nome e telefone
   filtro feito em tempo real utilizando onChange podendo ser alterado se necessario.
  
- Formatação de datas e telefones no front-end
  funções de formatação recebendo o valor direto da api por props, podem ser encontradas da pasta utils do projeto.
  
- Layout responsivo (desktop, tablet e mobile)
  responsividade feita com media queries e com styled components e tipadas

📋 Como executar a aplicação
Apos clonar o repositorio executar npm install para instalar as dependencias ,
caso algum erro aconteça instalar manualmente : styled-components , type/styled-component e axios.

executar o servidor com : json-server --watch db.json 
executar o projeto com : npm run dev
