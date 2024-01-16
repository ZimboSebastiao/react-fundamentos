# Fundamentos de React

## 12-Gerenciamentos-de-efeitos-colaterais

`Efeitos Colaterais` no React são operações que não tem ligação direita com a renderizção do componente, como por exemplo, solicitações de API e manipulação de eventos.

Usamos o **hook** `useEffect` para garantir que esses efeitos colaterais ocorram no momemnto adequado do ciclo de vida do componente, evitando execuções repetitivas e problemas de carregamento e desempenho.

### Sobre o array de dependências

- Array vazio []: O efeito será executado apenas uma vez após a montagem do componente.

- Array com elementos/variáveis [variável]: o efeito será executado quando os elementos/variáveis mudarem.

## 11-navegacao-usando-rotas

O React suporta a navegação/links como Single Page Application (SPA)

usando uma biblioteca adicional chamada **React Router DOM**
`npm install react-router-dom`

---

## 09-gerenciamento-de-estados-dos-componentes

`Estado` ou `State` é uma propriedade especial de um componente que pode ser alterado ao longo do tempo. Por exemplo, um componente que exibe um contador de **likes** precisa de um gerenciamento de `states` para controlar a quantidade de **likes** recebidos.

O uso de `states` permite ao React reagir às mudanças de renderização dos componentes.

### Exemplos de mudanças que podem ser gerenciados por states

- Captura de dados de formulário
- Visibilidade de componentes
- Contadores
- Temas/estilos
- Pontuação/vida de um jogador num jogo

  --

## 06-props

São parâmetros/argumentos com valores/expressão passados para os componentes React, normalmente usados para injeção de dados dinâmicos.
As props funcionam como objetos, e cada `prop` criada por você passa a ter propriedades deste objeto.

As `props` são criadas manualmente, embora também exista uma `prop` especial chamada `children` que permite ler/transmitir o conteúdo que fica entre as tags de abertura/fechamento de um componente.

## 05-styled-components

Biblioteca (ou lib) muito comum para estilização CSS in JS de componentes.

Para instalação, execute: `npm install styled-components`

Para utilização, crie componentes estilizados usando a sintaxe:

```javascript
const StyledNome = styled.tag`
  propriedadecss: valorDaPropriedade;
  propriedadecss: valorDaPropriedade;
`;
```

---

## Resumo/Revisão

JSX -> HTML + JS para criar componentes

- App.jsx (Componente PRINCIPAL)
- main.jsx (Inicialização do React)
- index.html (elemento raíz e chamada do script)

## 04-estilos

### CSS in JS

- CSS inline: aplicado via atributo style da tag usando sintaxe JS, ou seja, objeto com propriedades.

- CSS externo e global usando arquivo.css e importando no main.jsx

- CSS Module: arquivo CSS especial relacionado ao componente que desejamos estilizar. Normalmente, nomeia-se o arquivo como "NomeComponente.module.css". A vantagem de usar CSS Modules é criar um escopo de estilização evitando conflitos de classes com mesmo nome.

---

## 00-projeto-resetado

### Informações gerais

A renderização ocorre na seguinte sequencia:

index.html <- main.jsx <- App.jsx
