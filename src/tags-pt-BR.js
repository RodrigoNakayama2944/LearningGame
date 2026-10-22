// Textos do guia de tags CSS em português do Brasil.
//
// A chave de cada tag é o nome da propriedade em src/levels.js.
// Os valores (values) e o exemplo de código não são traduzidos, porque
// são coisas que o navegador entende em inglês.

export const tagTranslationsPtBR = {
  display: {
    group: 'Layout',
    summary: 'Escolhe como o elemento é exibido.',
    details: 'Escolhe o modelo de layout do elemento. Com <code>display: flex</code> o elemento vira um <strong>flex container</strong> e os filhos dele viram <em>flex items</em>.'
  },
  'flex-direction': {
    group: 'Flexbox',
    summary: 'Define a direção do eixo principal.',
    details: 'Decide se os itens fluem em uma linha (<code>row</code>) ou em uma coluna (<code>column</code>). O eixo principal sempre segue essa direção.'
  },
  'flex-wrap': {
    group: 'Flexbox',
    summary: 'Decide se os itens quebram para novas linhas.',
    details: 'Por padrão todos os itens ficam em uma linha só e são espremidos. Com <code>wrap</code> os itens que não cabem passam para uma nova linha em vez de encolherem.'
  },
  'justify-content': {
    group: 'Flexbox',
    summary: 'Distribui os itens no eixo principal.',
    details: 'Move os itens na horizontal em uma linha (ou na vertical em uma coluna). <code>center</code> centraliza e <code>space-between</code> empurra o primeiro para o começo e o último para o fim.'
  },
  'align-items': {
    group: 'Flexbox',
    summary: 'Alinha os itens no eixo cruzado.',
    details: 'Move os itens na vertical em uma linha (ou na horizontal em uma coluna). É o par de <code>justify-content</code>: um cuida do eixo principal e o outro do eixo cruzado.'
  },
  'align-content': {
    group: 'Flexbox',
    summary: 'Distribui as linhas quando o container quebra.',
    details: 'Só funciona quando existem várias linhas (com <code>flex-wrap: wrap</code>). Distribui essas linhas ao longo do eixo cruzado.'
  },
  'align-self': {
    group: 'Flexbox',
    summary: 'Alinha um único item no eixo cruzado.',
    details: 'Sobrescreve o <code>align-items</code> do container só para um item, o que é prático para empurrar uma caixa para o topo ou para baixo.'
  },
  gap: {
    group: 'Flexbox',
    summary: 'Espaço entre os itens.',
    details: 'Adiciona um espaço fixo entre os itens (e ao redor deles quando você usa dois valores). É mais fácil do que colocar margin em cada item.'
  },
  order: {
    group: 'Flexbox',
    summary: 'Muda a ordem visual de um item.',
    details: 'Move um item sem mexer no HTML. O padrão é <code>0</code>, valores negativos vêm antes e valores maiores vêm depois.'
  },
  flex: {
    group: 'Flexbox',
    summary: 'Atalho para grow, shrink e basis.',
    details: 'Atalho que escreve <code>flex-grow</code>, <code>flex-shrink</code> e <code>flex-basis</code> em uma linha só. <code>flex: 1</code> significa que todos os itens crescem a mesma quantidade para preencher a linha.'
  },
  'flex-grow': {
    group: 'Flexbox',
    summary: 'Quanto um item cresce para preencher o espaço.',
    details: 'Número que define a parte do espaço livre que cada item recebe. <code>flex-grow: 0</code> significa que o item nunca cresce.'
  },
  'flex-shrink': {
    group: 'Flexbox',
    summary: 'Quanto um item encolhe quando falta espaço.',
    details: 'Define o quanto o item diminui rápido quando a linha é pequena demais. <code>flex-shrink: 0</code> impede o item de encolher.'
  },
  'flex-basis': {
    group: 'Flexbox',
    summary: 'O tamanho inicial do item no eixo principal.',
    details: 'Define o tamanho que o item tem antes de o espaço livre ser distribuído. Age como <code>width</code> em uma linha e como <code>height</code> em uma coluna.'
  },
  width: {
    group: 'Modelo de caixa',
    summary: 'A largura do elemento.',
    details: 'Define quão largo é o elemento. Só aceita um valor, e não um número sem unidade (exceto <code>0</code>).'
  },
  height: {
    group: 'Modelo de caixa',
    summary: 'A altura do elemento.',
    details: 'Define quão alto é o elemento. Sem ela a altura segue o conteúdo que está dentro do elemento.'
  },
  'max-width': {
    group: 'Modelo de caixa',
    summary: 'A largura máxima permitida.',
    details: 'O elemento pode ser menor, mas nunca maior que esse limite. É o truque clássico para manter um layout legível em telas grandes.'
  },
  padding: {
    group: 'Modelo de caixa',
    summary: 'O espaço dentro do elemento.',
    details: 'Espaço entre o conteúdo e a borda. Ele faz parte do elemento, então aumenta o tamanho dele. Um valor vale para todos os lados e dois valores valem para cima/baixo e esquerda/direita.'
  },
  margin: {
    group: 'Modelo de caixa',
    summary: 'O espaço fora do elemento.',
    details: 'Espaço entre o elemento e os outros elementos ao redor. Diferente do padding, a margin não é pintada com o fundo do elemento.'
  },
  border: {
    group: 'Modelo de caixa',
    summary: 'A borda ao redor do elemento.',
    details: 'Desenha uma linha na borda do elemento, fora do padding e dentro da margin. O atalho escreve a largura, o estilo e a cor.'
  },
  'border-radius': {
    group: 'Modelo de caixa',
    summary: 'Arredonda os cantos do elemento.',
    details: 'Deixa os cantos arredondados. Com <code>50%</code> o elemento vira um círculo quando a largura e a altura são iguais.'
  },
  'box-sizing': {
    group: 'Modelo de caixa',
    summary: 'Como a largura e a altura são calculadas.',
    details: 'Com <code>border-box</code> o padding e a borda entram dentro da largura que você definiu, o que torna os tamanhos muito mais fáceis de prever.'
  },
  background: {
    group: 'Cor e texto',
    summary: 'O fundo do elemento.',
    details: 'Define a cor de fundo, a imagem, a posição e o tamanho de uma vez só. Só uma cor já preenche o elemento.'
  },
  color: {
    group: 'Cor e texto',
    summary: 'A cor do texto.',
    details: 'Muda a cor do texto e dos ícones que usam a cor atual.'
  },
  'font-size': {
    group: 'Cor e texto',
    summary: 'O tamanho do texto.',
    details: 'Define o tamanho do texto. <code>rem</code> é melhor do que <code>px</code> porque acompanha o tamanho escolhido pelo usuário no navegador.'
  },
  'font-weight': {
    group: 'Cor e texto',
    summary: 'O quanto o texto é grosso.',
    details: 'Controla a espessura das letras. As palavras-chave normais resolvem quase tudo: <code>normal</code>, <code>bold</code> e <code>lighter</code>.'
  },
  'text-align': {
    group: 'Cor e texto',
    summary: 'O alinhamento horizontal do texto.',
    details: 'Alinha o texto dentro do elemento: à esquerda, à direita ou centralizado. Não move o elemento em si, só o texto que está dentro dele.'
  }
}
