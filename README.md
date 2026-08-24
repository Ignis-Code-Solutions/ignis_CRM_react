# Ignis Core - Frontend 

<br />

<div align="center">
    <img src="https://ik.imagekit.io/carlosTeste/ignis%20core.png" title="source: imgur.com" width="50%"/>
</div>

<br /><br />

## 1. Descrição

O IgnisCore é um CRM voltado para pequenos e médios empreendedores, segmento que representa a maior parte das empresas brasileiras e que enfrenta elevados índices de encerramento precoce das atividades.

o sistema atende aos princípios de um CRM ao centralizar o relacionamento com clientes e potenciais clientes, organizando oportunidades de negócio, o processo de vendas e o histórico de interações.

Como diferencial, o sistema utiliza indicadores inteligentes para identificar o melhor momento de contato, emitir alertas sobre clientes sem acompanhamento, apontar os principais motivos de perda de vendas e apresentar mapas de calor com padrões de conversão, auxiliando o empreendedor na tomada de decisões.

------

## 2. Recursos

1. Cadastro e gerenciamento de clientes e potenciais clientes em um único ambiente;

2. Registro completo de atendimentos, ligações, e-mails e reuniões para acompanhar todo o relacionamento com o cliente;

3. Solução desenvolvida para aumentar a organização do processo comercial, melhorar a experiência do cliente e elevar a taxa de conversão de vendas;

4. Garantir organização e segurança das informações;

5. Disponibilizar uma API REST para integração com outras aplicações.

------

## 3. Protótipo e Capturas de Tela

<div align="center">
    <img src="https://ik.imagekit.io/carlosTeste/homeIgnisCore.png" title="source: imgur.com" width="50%"/>
</div>

<br />

------

## 4. Tecnologias

| Item                         | Descrição  |
| ---------------------------- | ---------- |
| **Servidor**                 | Node JS    |
| **Linguagem de programação** | TypeScript |
| **Biblioteca**               | React JS   |
| **Build**                    | Vite       |
| **Framework de Estilização** | Tailwind   |

---

## 5. Pré-requisitos

Antes de iniciar, certifique-se de ter as seguintes ferramentas instaladas:

- [Node.js](https://nodejs.org/) (v16+)
- [yarn](https://yarnpkg.com/)
- API NestJS API NestJS ([Repositório da API](link do repositório da api))

---

## 6. Configuração e Execução

1. Clone o repositório do Projeto
2. Instale as dependências: `npm install`
3. Clone o repositório do Projeto Backend: [Link](https://github.com/Ignis-Code-Solutions/ignis_CRM_react.git)
4. Siga as instruções de **Configuração e Execução** descritas no README do Projeto Backend
5. Adicione o endereço de execução do projeto na variável de ambiente **VITE_API_URL**, no projeto React
6. Execute o Projeto React: `npm run dev`
7. A aplicação React estará disponível no endereço: `http://localhost:5173`

---

## 7. Estrutura do Projeto

```plaintext
src/
│
├── components/       # Componentes reutilizáveis
├── contexts/         # Gerenciamento de estado global (ex: autenticação)
├── models/           # Estrutura de dados da aplicação-
├── pages/            # Páginas da aplicação
├── services/         # Integração com a API (requisições HTTP)
├── utils/            # Funções auxiliares (alerts)
└── App.tsx           # Componente principal da aplicação
```

---

## 8. Como Contribuir

1. Faça um fork do projeto
2. Crie uma branch com a sua feature (`git checkout -b minha-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Faça um push para a branch (`git push origin minha-feature`)
5. Abra um Pull Request

---

## 9. Equipe

O **Ignis Core** foi desenvolvido pela equipe Ignis Code Solutions, formada por estudantes do Bootcamp Java Full Stack da Generation Brasil, com foco na aplicação de boas práticas de desenvolvimento de software e metodologias ágeis.


### Desenvolvedores

- *André Nunes*
- *Daniel Araújo*
- *Elaine Alves*
- *Jonathan Leão*
- *João Pedro Duo*
- *Luiza Paolinelli*
- *Patrick Carneiro*

---