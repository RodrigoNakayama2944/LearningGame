// Textos dos níveis em português do Brasil.
//
// A chave de cada nível é o id dele em src/levels.js. Cada solução segue
// a mesma ordem das soluções em inglês: o CSS e o código de validação
// não são traduzidos, só as explicações.

export const levelTranslationsPtBR = {
  1: {
    title: 'Centralizando com Flexbox',
    description: 'O container já é um flex container. Centralize perfeitamente a caixa azul dentro dele usando flexbox.',
    hint: 'O container já é um flex container. O flexbox alinha os itens em dois eixos ao mesmo tempo: um move para o lado, o outro move para cima e para baixo. Sua caixa precisa dos dois.',
    starterCSS: `.container {
  min-height: 12rem;
  padding: 1rem;
  background: #e2e8f0;
  border-radius: 0.5rem;
  display: flex;

  /* ?? centralizar a caixa ?? */
}

.box {
  padding: 1rem 1.5rem;
  background: #3b82f6;
  color: white;
  border-radius: 0.5rem;
  font-weight: bold;
}`,
    solutions: [
      {
        explanation: [
          {
            label: 'div.container',
            text: 'O elemento <strong>pai</strong>. Quando você coloca <code>display: flex</code> nele, ele vira o <em>flex container</em>: o elemento que decide como os filhos são organizados.'
          },
          {
            label: 'div.box',
            text: 'O elemento <strong>filho</strong>. Dentro de um flex container todo filho vira um <em>flex item</em>, e são as propriedades do flexbox que movem ele.'
          },
          {
            label: 'display: flex',
            text: 'Transforma o container em flex container. Os filhos param de se empilhar como blocos normais e passam a seguir as regras do flexbox: eixo principal, eixo cruzado, espaçamento e ordem.'
          },
          {
            label: 'justify-content: center',
            text: 'Distribui os itens ao longo do <strong>eixo principal</strong>. Aqui o eixo principal é horizontal (a direção padrão é <code>row</code>), então isso centraliza a caixa azul da esquerda para a direita.'
          },
          {
            label: 'align-items: center',
            text: 'Alinha os itens no <strong>eixo cruzado</strong>. Em uma linha o eixo cruzado é vertical, então isso centraliza a caixa azul de cima para baixo.'
          },
          {
            label: 'padding',
            text: 'O espaço dentro da caixa, ao redor do texto. A caixa cresce com o próprio conteúdo, então nunca precisa de uma largura ou altura fixa para ficar bonita.'
          },
          {
            label: 'border-radius',
            text: 'Arredonda os cantos. Muda só a aparência e nunca o layout, um bom exemplo de uma propriedade que pode ser adicionada sem quebrar o quebra-cabeça.'
          }
        ],
        tip: 'Eixo principal vs eixo cruzado: o eixo principal é a direção escolhida por <code>flex-direction</code> (<code>row</code> = horizontal, <code>column</code> = vertical). <code>justify-content</code> age no eixo principal e <code>align-items</code> age no eixo cruzado. É por isso que as mesmas duas propriedades conseguem centralizar uma caixa nas duas direções.'
      }
    ]
  },
  2: {
    title: 'Coluna com Flexbox',
    description: 'Empilhe as três caixas na vertical, com o mesmo espaço antes, entre e depois delas, e centralizadas na horizontal.',
    hint: 'As três caixas precisam ficar uma embaixo da outra em vez de lado a lado, espalhadas pela altura do container. O flexbox tem uma propriedade que muda a direção do fluxo e outra que espalha os itens dentro dele.',
    starterCSS: `.container {
  width: 100%;
  max-width: 14rem;
  min-height: 18rem;
  padding: 1rem;
  background: #e2e8f0;
  border-radius: 0.5rem;
  display: flex;

  /* ?? empilhar na vertical, espaço por igual, centralizar ?? */
}

.box {
  padding: 0.75rem 1.25rem;
  border-radius: 0.5rem;
  color: white;
  font-weight: bold;
  text-align: center;
}

.box-1 { background: #3b82f6; }
.box-2 { background: #8b5cf6; }
.box-3 { background: #ec4899; }`,
    solutions: [
      {
        explanation: [
          {
            label: 'div.container',
            text: 'O flex container. A altura dele vem do <code>min-height</code>, então existe espaço livre para distribuir na vertical entre as caixas.'
          },
          {
            label: 'div.box.box-1 / 2 / 3',
            text: 'Três flex items. As classes extras só dão uma cor diferente para cada um, e as palavras One, Two e Three são apenas texto dentro das caixas.'
          },
          {
            label: 'display: flex',
            text: 'Já está no código inicial. Ele transforma o container em flex container, então as três caixas viram flex items.'
          },
          {
            label: 'flex-direction: column',
            text: 'Muda o eixo principal para a direção vertical, então as caixas se empilham de cima para baixo. Repare que <code>justify-content</code> e <code>align-items</code> não mudaram: só mudou o eixo em que eles agem.'
          },
          {
            label: 'justify-content: space-evenly',
            text: 'Distribui o espaço livre ao longo do eixo principal (agora vertical) com a <em>mesma</em> quantidade de espaço antes da primeira caixa, entre as caixas e depois da última. Outras opções: <code>space-between</code> (espaço só entre as caixas) e <code>space-around</code> (espaço de metade do tamanho nas bordas).'
          },
          {
            label: 'align-items: center',
            text: 'Alinha os itens no eixo cruzado, que em modo coluna é horizontal, então as três caixas ficam centralizadas da esquerda para a direita.'
          },
          {
            label: 'padding',
            text: 'Cada caixa tem espaço ao redor do texto, então ela cresce com o conteúdo em vez de depender de um tamanho fixo.'
          }
        ],
        tip: 'Os nomes dos valores dizem exatamente o que eles fazem: <code>space</code> significa espaço entre os itens e <code>evenly</code> significa quantidades iguais em todo lugar, inclusive nas bordas. Como a direção mudou mas as propriedades não, dá para usar o mesmo raciocínio em linhas e em colunas.'
      }
    ]
  },
  3: {
    title: 'Espaçamento com gap',
    description: 'Coloque as três tags em uma linha horizontal, centralizadas, com o mesmo espaço entre cada par delas.',
    hint: 'As três tags precisam ficar em linha, centralizadas como um grupo, com o mesmo espaço entre cada par. O flexbox tem uma propriedade para o espaço entre os itens e outra para centralizar o grupo.',
    starterCSS: `.container {
  width: 100%;
  max-width: 20rem;
  min-height: 8rem;
  padding: 1rem;
  background: #e2e8f0;
  border-radius: 0.5rem;
  display: flex;

  /* ?? centralizar a linha e espaçar os itens ?? */
}

.box {
  padding: 0.75rem 1.25rem;
  background: #3b82f6;
  color: white;
  border-radius: 0.5rem;
  font-weight: bold;
}`,
    solutions: [
      {
        explanation: [
          {
            label: 'div.container',
            text: 'O flex container. As três tags já têm o próprio tamanho, tirado do texto e do padding, então o resto da largura é espaço livre.'
          },
          {
            label: 'div.box',
            text: 'Três flex items com as palavras HTML, CSS e JS. O tamanho delas segue o conteúdo, então continuam legíveis em qualquer largura.'
          },
          {
            label: 'display: flex',
            text: 'Já está no código inicial. Ele coloca as três tags em uma linha horizontal, porque <code>row</code> é a direção padrão do flexbox.'
          },
          {
            label: 'justify-content: center',
            text: 'Centraliza a linha ao longo do eixo principal (horizontal). O espaço livre que sobra é dividido em duas partes iguais, uma na esquerda e outra na direita.'
          },
          {
            label: 'align-items: center',
            text: 'Centraliza as tags no eixo cruzado (vertical), então elas ficam no meio da altura do container.'
          },
          {
            label: 'gap',
            text: 'Coloca o mesmo espaço entre cada par de itens no eixo principal. Nada é adicionado antes da primeira tag nem depois da última, e nenhuma margin é necessária.'
          }
        ],
        tip: 'A propriedade <code>gap</code> é o jeito moderno de espaçar flex items. O truque antigo era uma margin em cada caixa mais uma margin negativa no container para tirar o espaço extra do final. Com <code>gap</code> você nunca precisa desfazer nada, e <code>row-gap</code> / <code>column-gap</code> deixam controlar cada eixo separadamente.'
      }
    ]
  },
  4: {
    title: 'Chefe: O Quadro de Missões',
    description: 'Seis selos de missão devem formar duas colunas centralizadas de três. Empilhe em coluna, deixe quebrar em duas colunas, centralize cada coluna na vertical e cada selo dentro da sua coluna, mantendo um gap igual.',
    hint: 'Este chefe usa todas as ideias do Mundo 1. Mude a direção para o eixo principal ficar vertical, permita a quebra para formar duas colunas e use uma propriedade de alinhamento para a coluna inteira e outra para os itens dentro dela.',
    starterCSS: `.board {
  width: 100%;
  max-width: 16rem;
  height: 11rem;
  padding: 1rem;
  background: #e2e8f0;
  border-radius: 0.5rem;
  display: flex;
  gap: 0.75rem;

  /* ?? empilhar em duas colunas centralizadas ?? */
}

.badge {
  padding: 0.6rem 0.8rem;
  background: #3b82f6;
  color: white;
  border-radius: 0.5rem;
  font-weight: bold;
  text-align: center;
}`,
    solutions: [
      {
        explanation: [
          { label: 'display: flex', text: 'Já está no código inicial. Transforma o quadro em flex container e os seis selos em flex items.' },
          { label: 'flex-direction: column', text: 'Do nível 2: o eixo principal vira vertical, então os selos tentam se empilhar de cima para baixo.' },
          { label: 'flex-wrap: wrap', text: 'Do nível 4: os seis selos não cabem na altura fixa, então formam uma segunda coluna em vez de transbordar.' },
          { label: 'justify-content: center', text: 'Do nível 1: centraliza os selos dentro de cada coluna no eixo principal, que agora é vertical.' },
          { label: 'align-items: center', text: 'Do nível 1: centraliza cada selo dentro da sua coluna no eixo cruzado, que agora é horizontal.' },
          { label: 'gap', text: 'Do nível 3: o mesmo espaço entre os selos de uma coluna e entre as duas colunas.' }
        ],
        tip: 'Um chefe é vários quebra-cabeças pequenos juntos: direção do nível 2, quebra do nível 4 e os dois alinhamentos do nível 1. Pense primeiro em qual direção aponta o eixo principal.'
      }
    ]
  },
  5: {
    title: 'Propriedade order',
    description: 'As caixas aparecem na ordem do HTML, First-Second-Third. Usando a propriedade order do CSS, inverta para aparecer como Third-Second-First sem mudar o HTML.',
    hint: 'A posição final de um item não precisa ser a posição dele no código. A propriedade order pode reorganizar os itens sem mexer no HTML.',
    starterCSS: `.container {
  width: 100%;
  max-width: 20rem;
  padding: 1rem;
  background: #e2e8f0;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.box {
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  color: white;
  font-weight: bold;
}

.box-1 { background: #3b82f6; /* ?? inverter a ordem ?? */ }
.box-2 { background: #8b5cf6; /* ?? inverter a ordem ?? */ }
.box-3 { background: #ec4899; /* ?? inverter a ordem ?? */ }`,
    solutions: [
      {
        explanation: [
          {
            label: 'div.container',
            text: 'O flex container. Ele já usa <code>align-items: center</code>, <code>gap</code> e <code>padding</code>, então você só precisa se preocupar com a ordem.'
          },
          {
            label: 'div.box.box-1 / 2 / 3',
            text: 'Três flex items com as palavras First, Second e Third. No HTML eles aparecem nessa ordem; na tela vão aparecer como Third, Second, First.'
          },
          {
            label: 'display: flex',
            text: 'Já está pronto. Reordenar com a propriedade <code>order</code> só existe no flexbox: no fluxo normal de blocos a posição de um elemento sempre segue o HTML.'
          },
          {
            label: 'order: 3 (.box-1)',
            text: 'Define a ordem visual deste item. Os itens são colocados do valor de <strong>order</strong> <strong>menor</strong> para o <strong>maior</strong>, então a caixa com <code>order: 3</code> é a última na tela.'
          },
          {
            label: 'order: 2 (.box-2) e order: 1 (.box-3)',
            text: 'Cada item precisa do seu valor. O padrão é <code>0</code>, então um item sem <code>order</code> apareceria antes dessas três caixas.'
          },
          {
            label: 'gap',
            text: 'O espaço entre as caixas continua o mesmo, não importa em que ordem elas são mostradas, porque o gap é medido entre os itens, não entre as tags.'
          }
        ],
        tip: 'A propriedade <code>order</code> muda só o que você <em>vê</em>, nunca o HTML. A ordem do DOM continua sendo First, Second, Third, e é essa a ordem usada por leitores de tela e pela tecla Tab, então, quando possível, mantenha a ordem do HTML igual à ordem visual.'
      }
    ]
  },
  6: {
    title: 'Flexbox Responsivo',
    description: 'Faça os seis cards preencherem o container de forma responsiva, quebrando para novas linhas para sempre caberem, qualquer que seja a largura.',
    hint: 'Cada card deve ser o mais largo possível, com uma largura mínima legível, e os cards devem passar para a próxima linha quando não couber. O flexbox decide o tamanho dos itens e também se eles quebram em novas linhas.',
    starterCSS: `.grid {
  width: 100%;
  max-width: 22rem;
  background: #e2e8f0;
  border-radius: 0.5rem;
  padding: 1rem;
  display: flex;

  /* ?? layout responsivo com flexbox ?? */
}

.card {
  background: #3b82f6;
  color: white;
  border-radius: 0.5rem;
  padding: 1rem;
  text-align: center;
  font-weight: bold;
}`,
    solutions: [
      {
        explanation: [
          {
            label: 'div.grid',
            text: 'O flex container. Os cards dividem a largura disponível. A classe se chama <code>grid</code>, mas o layout é feito com flexbox.'
          },
          {
            label: 'div.card',
            text: 'Seis flex items com texto. Cada card tem padding, então a altura segue o conteúdo e o layout fica confortável.'
          },
          {
            label: 'display: flex',
            text: 'Já está pronto. O container vira flex container e cada card vira flex item.'
          },
          {
            label: 'flex-wrap: wrap',
            text: 'Quando os cards não cabem mais na largura disponível, eles vão para a próxima linha em vez de serem espremidos.'
          },
          {
            label: 'gap',
            text: 'O mesmo espaço entre os cards, tanto na horizontal quanto na vertical.'
          },
          {
            label: 'min-width',
            text: 'A menor largura que um card pode ter. Os cards nunca ficam abaixo desse mínimo, o que mantém o texto legível sem uma largura fixa.'
          },
          {
            label: 'flex: 1',
            text: 'Atalho para <code>flex: 1 1 0%</code>: <code>grow: 1</code> (o card cresce para dividir o espaço livre), <code>shrink: 1</code> (ele pode encolher) e <code>basis: 0%</code> (ele começa do zero e o crescimento define o tamanho final).'
          },
          {
            label: 'padding / text-align',
            text: 'O padding é o espaço dentro do card ao redor do texto, e <code>text-align: center</code> centraliza o texto na horizontal.'
          }
        ],
        tip: 'Este layout é responsivo porque nada tem largura fixa: os cards têm um mínimo (<code>min-width</code>) e dividem o espaço que sobrar (<code>flex: 1</code>), enquanto o <code>flex-wrap</code> manda eles para a próxima linha. Mude a largura do container no editor e a quantidade de cards por linha muda sozinha.'
      },
      {
        explanation: [
          {
            label: 'display: grid',
            text: 'Transforma o container em um container de <em>Grid</em>. O Grid coloca os itens em linhas e colunas ao mesmo tempo, enquanto o flexbox age em um eixo por vez.'
          },
          {
            label: 'grid-template-columns',
            text: 'Descreve as colunas do grid. A função <code>repeat()</code> repete um padrão e o <code>auto-fill</code> decide quantas vezes o padrão é repetido para preencher o espaço disponível.'
          },
          {
            label: 'minmax(7rem, 1fr)',
            text: 'Cada coluna tem uma largura mínima legível (<code>min</code>) e recebe uma parte igual do espaço livre (<code>1fr</code>, uma <em>fração</em>).'
          },
          {
            label: 'auto-fill',
            text: 'Mantém as colunas vazias quando sobra espaço, então os cards conservam o tamanho mínimo em vez de esticarem demais.'
          },
          {
            label: 'gap',
            text: 'O mesmo espaçamento entre as trilhas (as linhas e colunas) e os cards.'
          },
          {
            label: '.card { padding }',
            text: 'Os cards mantêm o espaçamento interno, e o grid cuida do layout externo deles.'
          }
        ],
        tip: 'As duas respostas dão o mesmo resultado visual, mas o foco deste jogo é o flexbox. O Grid brilha em layouts de duas dimensões (linhas e colunas ao mesmo tempo), enquanto o flexbox é perfeito para os de uma dimensão (uma linha ou uma coluna de itens).'
      }
    ]
  },
  7: {
    title: 'Larguras Proporcionais com flex-grow',
    description: 'Três barras dividem a mesma linha. Deixe a barra roxa com o dobro da largura das barras azul e rosa.',
    hint: 'O espaço livre pode ser dividido em proporções diferentes entre os itens. Existe uma propriedade do flexbox que decide quantas partes do espaço livre cada item recebe.',
    starterCSS: `.container {
  width: 100%;
  max-width: 22rem;
  padding: 1rem;
  background: #e2e8f0;
  border-radius: 0.5rem;
  display: flex;
  gap: 0.5rem;
}

.bar {
  flex: 1;
  min-width: 0;
  padding: 0.75rem 0;
  border-radius: 0.5rem;
  color: white;
  font-weight: bold;
  text-align: center;
  overflow: hidden;
}

.bar-1 { background: #3b82f6; }
.bar-2 { background: #8b5cf6; /* ?? deixar esta barra com o dobro da largura ?? */ }
.bar-3 { background: #ec4899; }`,
    solutions: [
      {
        explanation: [
          {
            label: 'div.container',
            text: 'O flex container. O gap ocupa o espaço dele primeiro, e tudo o que sobra vira espaço livre para as barras.'
          },
          {
            label: 'div.bar',
            text: 'Três flex items com texto. Eles não têm largura fixa, então o tamanho vem só da propriedade flex.'
          },
          {
            label: 'display: flex',
            text: 'Já está no código inicial. É ele que transforma o container em flex container e as barras em flex items.'
          },
          {
            label: 'flex: 1',
            text: 'Já está no código inicial. Cada barra com <code>flex: 1</code> recebe uma parte do espaço livre, então as três começam com a mesma largura. A base de 0% faz o tamanho depender só das partes.'
          },
          {
            label: 'flex: 2',
            text: 'Só a barra roxa passa a receber duas partes. Com as outras duas recebendo uma parte cada, a barra roxa termina com o dobro da largura delas.'
          },
          {
            label: 'flex-grow',
            text: 'O número que define a parte do espaço livre que cada item recebe. Só importa quando existe espaço livre para dividir.'
          },
          {
            label: 'gap',
            text: 'O espaço entre as barras não faz parte do espaço livre: o gap fica fixo e as barras dividem o que sobra.'
          }
        ],
        tip: 'O flex-grow funciona como uma cota do espaço que sobrou: quanto maior o número, maior a fatia. Como todas as barras começam com <code>flex: 1</code>, elas têm a mesma largura; trocar apenas a barra roxa para 2 deixa ela exatamente com o dobro da largura das outras.'
      }
    ]
  },
  8: {
    title: 'Chefe: O Painel de Controle',
    description: 'Junte as quatro ideias do Mundo 2. Os três passos devem ir às bordas, mas aparecer em ordem invertida, e as três barras abaixo devem quebrar linha, manter uma largura mínima legível, com a barra do meio recebendo o dobro da parte que cresce.',
    hint: 'A linha de cima precisa de uma distribuição e de uma ordem. A linha de baixo precisa de quebra, largura mínima em cada barra e um número de crescimento que dê duas partes para a barra do meio.',
    starterCSS: `.container {
  width: 100%;
  max-width: 24rem;
  padding: 1rem;
  background: #e2e8f0;
  border-radius: 0.5rem;
  display: flex;
  gap: 0.75rem;

  /* ?? empilhar as duas linhas ?? */
}

.steps {
  gap: 0.5rem;

  /* ?? espalhar os passos e inverter a ordem ?? */
}

.step {
  padding: 0.6rem 0.8rem;
  background: #3b82f6;
  color: white;
  border-radius: 0.5rem;
  font-weight: bold;
}

.bars {
  gap: 0.5rem;

  /* ?? quebrar as barras e definir a largura mínima ?? */
}

.bar {
  padding: 0.6rem 0.4rem;
  background: #8b5cf6;
  color: white;
  border-radius: 0.5rem;
  font-weight: bold;
  text-align: center;
}`,
    solutions: [
      {
        explanation: [
          { label: 'div.container', text: 'O flex container de fora, em coluna. Ele empilha as duas linhas com um gap entre elas.' },
          { label: 'justify-content: space-between (.steps)', text: 'Do nível 8: o primeiro passo encosta na esquerda e o último na direita, com espaço igual entre eles.' },
          { label: 'order: 3 / 2 / 1', text: 'Do nível 5: a ordem visual vira Ship, Build, Plan enquanto o HTML continua Plan, Build, Ship.' },
          { label: 'flex-wrap: wrap (.bars)', text: 'Do nível 6: as barras podem ir para uma nova linha em vez de serem espremidas para sempre.' },
          { label: 'min-width: 4rem (.bar)', text: 'Do nível 6: nenhuma barra fica mais estreita que isso, então o texto continua legível.' },
          { label: 'flex-grow: 2 (.bar-2)', text: 'Do nível 7: a barra do meio recebe duas partes do espaço livre e as outras recebem uma cada.' }
        ],
        tip: 'Leia o alvo como dois quebra-cabeças: ordem e distribuição na primeira linha, tamanho e quebra na segunda. Um chefe fica mais fácil quando você resolve um flex container por vez.'
      }
    ]
  },
  9: {
    title: 'Alinhando um Item Só com align-self',
    description: 'Todas as caixas estão centralizadas na linha. Mova apenas a caixa roxa para a parte de baixo do container.',
    hint: 'A regra que centraliza todos os itens está no container, mas um item só pode decidir não seguir essa regra. A propriedade que faz isso fica no item, e não no container.',
    starterCSS: `.container {
  width: 100%;
  max-width: 20rem;
  min-height: 14rem;
  padding: 1rem;
  background: #e2e8f0;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;

  /* ?? mover só a caixa roxa para baixo ?? */
}

.box {
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  color: white;
  font-weight: bold;
}

.box-1 { background: #3b82f6; }
.box-2 { background: #8b5cf6; }
.box-3 { background: #ec4899; }`,
    solutions: [
      {
        explanation: [
          {
            label: 'div.container',
            text: 'O flex container. A altura dele vem do <code>min-height</code>, então sobra espaço para mover as caixas para cima e para baixo.'
          },
          {
            label: 'div.box',
            text: 'Três flex items com texto. Todos crescem a partir do conteúdo, então o que muda é a posição na vertical, nunca o tamanho.'
          },
          {
            label: 'display: flex',
            text: 'Já está no código inicial. É ele que coloca as três caixas em uma única linha.'
          },
          {
            label: 'align-items: center',
            text: 'Já está no código inicial. Centraliza todos os itens no eixo transversal, que dentro de uma linha é o eixo vertical.'
          },
          {
            label: 'align-self: flex-end',
            text: 'Sobrescreve o <code>align-items</code> só neste item. O <code>flex-end</code> empurra a caixa roxa para o fim do eixo transversal, que aqui é a parte de baixo do container.'
          },
          {
            label: 'align-self: flex-start',
            text: 'O contrário: empurraria a caixa para a parte de cima do container.'
          },
          {
            label: 'align-self: center',
            text: 'Manteria a caixa roxa centralizada, exatamente como as outras duas.'
          }
        ],
        tip: 'align-items é a regra do container inteiro e align-self é a exceção para um item. É a mesma relação entre uma classe e um estilo inline: o container decide a regra e o item pode quebrá-la.'
      }
    ]
  },
  10: {
    title: 'Empurrando o Footer para Baixo',
    description: 'O footer deve ficar na parte de baixo do card e todo o espaço vazio deve ficar acima dele.',
    hint: 'O footer deve ficar na parte de baixo do card mesmo se o conteúdo mudar. Margens podem ser auto, e uma margem automática dentro de um flex container come todo o espaço livre do eixo.',
    starterCSS: `.page {
  width: 100%;
  max-width: 22rem;
  min-height: 16rem;
  background: #e2e8f0;
  border-radius: 0.5rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  /* ?? empurrar o footer para baixo ?? */
}

.content {
  padding: 1rem;
  background: #3b82f6;
  color: white;
  border-radius: 0.5rem;
}

.footer {
  padding: 0.75rem 1rem;
  background: #8b5cf6;
  color: white;
  border-radius: 0.5rem;
  font-weight: bold;
}`,
    solutions: [
      {
        explanation: [
          {
            label: 'div.page',
            text: 'O flex container, na direção coluna. A altura dele vem do <code>min-height</code>, então existe espaço livre para empurrar o footer para baixo.'
          },
          {
            label: 'div.content',
            text: 'O primeiro flex item. Ele fica no topo da coluna, e a altura segue o texto e o padding.'
          },
          {
            label: 'div.footer',
            text: 'O segundo flex item. Ele deve ficar na parte de baixo da coluna, não importa quanto conteúdo exista acima.'
          },
          {
            label: 'flex-direction: column',
            text: 'Já está no código inicial. A direção coluna é o que faz o espaço livre aparecer entre o conteúdo e o footer.'
          },
          {
            label: 'margin-top: auto',
            text: 'Uma margem automática come todo o espaço livre do container. No footer ela o empurra para baixo, e o conteúdo continua no topo.'
          },
          {
            label: 'justify-content: space-between',
            text: 'Outra forma de chegar ao mesmo resultado: distribui o espaço livre entre os itens, então o footer termina embaixo.'
          },
          {
            label: 'gap',
            text: 'O espaço mínimo entre os itens. A margem automática não tira o gap, ela soma todo o espaço extra em cima dele.'
          }
        ],
        tip: 'A margem automática é o truque do flexbox para empurrar um elemento para o fim de uma coluna. É a mesma ideia da receita "footer no rodapé da página" que todo framework de CSS usa.'
      }
    ]
  },
  11: {
    title: 'Mantendo um Tamanho com flex-shrink',
    description: 'O botão roxo está sendo espremido. Proteja ele para manter o tamanho do texto enquanto a barra azul longa encolhe para caber.',
    hint: 'Quando falta espaço, o flexbox encolhe os itens para tudo caber. Um item precisa manter o tamanho natural de qualquer jeito, e existe uma propriedade do flexbox que protege ele de encolher.',
    starterCSS: `.container {
  width: 100%;
  max-width: 18rem;
  padding: 1rem;
  background: #e2e8f0;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;

  /* ?? manter o botão sem encolher ?? */
}

.bar {
  flex: 1 1 auto;
  min-width: 0;
  padding: 0.75rem 1rem;
  background: #3b82f6;
  color: white;
  border-radius: 0.5rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.button {
  min-width: 0;
  padding: 0.75rem 1rem;
  background: #8b5cf6;
  color: white;
  border-radius: 0.5rem;
  font-weight: bold;
  white-space: nowrap;
}`,
    solutions: [
      {
        explanation: [
          {
            label: 'div.container',
            text: 'O flex container. Os dois itens juntos pedem mais espaço do que o container tem, então alguma coisa precisa ceder.'
          },
          {
            label: 'div.bar',
            text: 'O primeiro flex item. Ele tem um texto longo, então quer a largura natural, mas precisa encolher para tudo caber.'
          },
          {
            label: 'div.button',
            text: 'O segundo flex item. Ele tem um texto curto e precisa manter a largura desse texto, mesmo quando falta espaço.'
          },
          {
            label: 'display: flex',
            text: 'Já está no código inicial. É ele que coloca a barra e o botão na mesma linha.'
          },
          {
            label: 'flex-shrink: 0',
            text: 'Avisa ao navegador que este item se recusa a encolher. O padrão é 1, que significa "encolha se precisar".'
          },
          {
            label: 'flex-shrink: 1',
            text: 'O valor padrão. Quando falta espaço, todo item com <code>flex-shrink: 1</code> cede uma parte do seu tamanho.'
          },
          {
            label: 'gap',
            text: 'O espaço entre os itens nunca é flexível: ele não encolhe, está sempre lá.'
          }
        ],
        tip: 'Shrink e grow são dois lados da mesma moeda: o flex-grow pega o espaço extra quando sobra, e o flex-shrink devolve espaço quando falta. Usar <code>flex-shrink: 0</code> é a forma de proteger um tamanho que não pode ser negociado.'
      }
    ]
  },
  12: {
    title: 'Chefe: O Card de Painel',
    description: 'Termine o card. O header deve ser uma linha em que o selo quebra a regra de centralização e vai para baixo, à direita. O footer mantém um rótulo longo à esquerda e um botão que se recusa a encolher.',
    hint: 'Quatro correções do Mundo 3: coloque display:flex no header, use um alinhamento próprio no selo, dê a ele uma margem automática à esquerda e proteja o botão de encolher na linha aninhada do footer.',
    starterCSS: `.card {
  width: 100%;
  max-width: 22rem;
  background: #e2e8f0;
  border-radius: 0.5rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.header {
  align-items: center;
  gap: 0.75rem;

  /* ?? linha, selo à direita e embaixo ?? */
}

.avatar {
  padding: 1.25rem 1rem;
  background: #3b82f6;
  color: white;
  border-radius: 0.5rem;
  font-weight: bold;
}

.title {
  margin: 0;
  font-size: 1.25rem;
}

.badge {
  padding: 0.35rem 0.6rem;
  background: #ec4899;
  color: white;
  border-radius: 999px;
  font-weight: bold;

  /* ?? quebrar a regra e ir para a direita ?? */
}

.body {
  flex: 1;
  margin: 0;
  padding: 0.75rem;
  background: #f1f5f9;
  border-radius: 0.5rem;
}

.footer {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.label {
  flex: 1;
  min-width: 0;
  padding: 0.6rem 0.75rem;
  background: #e2e8f0;
  border-radius: 0.5rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.button {
  padding: 0.6rem 0.8rem;
  background: #8b5cf6;
  color: white;
  border-radius: 0.5rem;
  font-weight: bold;
  white-space: nowrap;

  /* ?? manter o botão sem encolher ?? */
}`,
    solutions: [
      {
        explanation: [
          { label: 'div.card', text: 'A coluna de fora, que já está no código inicial. Ela empilha o header, o body e o footer.' },
          { label: 'display: flex (.header)', text: 'Do nível 12: sem isso o gap e o align-items não fazem nada e o avatar, o título e o selo ficam empilhados.' },
          { label: 'align-items: center (.header)', text: 'A regra para o header inteiro: avatar e título ficam centralizados no eixo cruzado.' },
          { label: 'align-self: flex-end (.badge)', text: 'Do nível 9: um item quebra a regra e vai para o fim do eixo cruzado, que aqui é a parte de baixo da linha.' },
          { label: 'margin-left: auto (.badge)', text: 'Do nível 10: a margem automática come o espaço livre à esquerda e empurra o selo para a borda direita.' },
          { label: 'flex-shrink: 0 (.button)', text: 'Do nível 11: o botão mantém a largura do texto enquanto o rótulo longo do footer encolhe.' }
        ],
        tip: 'O container define a regra, o item pode quebrá-la com align-self e uma margem automática decide quem fica com o espaço livre. Junte isso a um tamanho protegido e você monta quase qualquer barra de ferramentas.'
      }
    ]
  },
  13: {
    title: 'Alinhando Linhas com Wrap',
    description: 'Os blocos já estão quebrando em várias linhas, mas as linhas ficam coladas no topo. Distribua as linhas pela altura do tabuleiro, mantendo a primeira linha no topo e a última embaixo.',
    hint: 'Quando os itens quebram, eles criam várias linhas. Existe uma propriedade que distribui essas linhas no eixo cruzado. Sem ela, as linhas ficam sempre juntas no início.',
    starterCSS: `.board {
  width: 100%;
  max-width: 22rem;
  min-height: 15rem;
  padding: 1rem;
  background: #e2e8f0;
  border-radius: 0.5rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;

  /* ?? distribuir as linhas quebradas pela altura ?? */
}

.tile {
  padding: 0.75rem 1rem;
  background: #3b82f6;
  color: white;
  border-radius: 0.5rem;
  font-weight: bold;
}`,
    solutions: [
      {
        explanation: [
          {
            label: 'div.board',
            text: 'O flex container. Ele mantém a direção padrão (<code>row</code>), então os blocos fluem para o lado e quebram em novas <strong>linhas</strong> quando falta espaço.'
          },
          {
            label: 'div.tile',
            text: 'Seis flex items. Eles são todos parecidos, então a quebra depende da largura do tabuleiro, não do conteúdo de um item especial.'
          },
          {
            label: 'flex-wrap: wrap',
            text: 'Já está no código inicial. Permite que os itens passem para uma nova linha em vez de encolherem para sempre. Sem ele haveria só uma linha e nada para distribuir.'
          },
          {
            label: 'align-content: space-between',
            text: 'Distribui as <strong>linhas</strong> no eixo cruzado. A primeira linha vai para o topo, a última vai para o fundo e o espaço livre é dividido entre as linhas do meio.'
          },
          {
            label: 'align-items vs align-content',
            text: 'Parecem iguais, mas agem em coisas diferentes: <code>align-items</code> alinha os itens dentro de uma linha, enquanto <code>align-content</code> distribui as próprias linhas. Por isso este nível precisou da segunda.'
          },
          {
            label: 'gap',
            text: 'O gap é o espaço entre os blocos dentro de uma linha. O espaço entre as linhas é controlado pelo <code>align-content</code>, não pelo <code>gap</code>.'
          }
        ],
        tip: 'Use <code>flex-wrap: wrap</code> para criar várias linhas e <code>align-content</code> para distribuir essas linhas. O <code>justify-content</code> continua distribuindo cada linha na horizontal, e o <code>align-items</code> continua alinhando os itens dentro de cada linha.'
      }
    ]
  },
  14: {
    title: 'Tamanho Inicial com flex-basis',
    description: 'Dê aos dois painéis laterais o mesmo tamanho inicial e faça o painel principal ter exatamente o dobro da largura de cada lateral. Não deixe os painéis crescerem nem encolherem; o tamanho deve vir do flex-basis.',
    hint: 'O flex-grow divide o espaço que sobra. Antes disso, você pode dar a cada item um tamanho inicial no eixo principal. Esse tamanho inicial é o flex-basis, e o atalho flex pode escrevê-lo junto com grow e shrink.',
    starterCSS: `.layout {
  width: 100%;
  max-width: 24rem;
  padding: 1rem;
  background: #e2e8f0;
  border-radius: 0.5rem;
  display: flex;
}

.panel {
  padding: 1rem;
  color: white;
  font-weight: bold;
  text-align: center;
  border-radius: 0.5rem;
}

.side {
  background: #3b82f6;
  /* ?? tamanho inicial: 1 parte ?? */
}

.main {
  background: #8b5cf6;
  /* ?? tamanho inicial: 2 partes ?? */
}`,
    solutions: [
      {
        explanation: [
          {
            label: 'div.layout',
            text: 'O flex container. Ele não tem gaps aqui, então os itens podem dividir a largura inteira com suas porcentagens.'
          },
          {
            label: 'flex: 0 0 25% (.side)',
            text: 'O atalho significa <code>flex-grow: 0</code>, <code>flex-shrink: 0</code> e <code>flex-basis: 25%</code>. O painel lateral começa com um quarto da linha e se recusa a mudar esse tamanho.'
          },
          {
            label: 'flex: 0 0 50% (.main)',
            text: 'O painel principal começa com metade da linha. Como não cresce nem encolhe, fica exatamente duas vezes mais largo que cada painel lateral.'
          },
          {
            label: 'flex-basis',
            text: 'É o tamanho inicial no eixo principal, antes de qualquer espaço livre ser dividido. Numa linha funciona como width; numa coluna funcionaria como height.'
          },
          {
            label: 'flex-grow: 0 e flex-shrink: 0',
            text: 'Congelam o tamanho inicial. Com os valores padrão os painéis poderiam crescer para o espaço livre ou encolher quando a linha ficasse pequena, e as proporções mudariam.'
          },
          {
            label: 'box-sizing: border-box',
            text: 'O preview já usa isso, então o padding e a borda ficam dentro da porcentagem. Sem isso os painéis ficariam mais largos que 25% e 50% juntos.'
          }
        ],
        tip: 'Pense nesta ordem: <code>flex-basis</code> define o tamanho inicial, <code>flex-grow</code> divide o espaço extra e <code>flex-shrink</code> remove espaço quando o container é pequeno demais. O atalho <code>flex: 0 0 25%</code> é uma forma compacta de congelar um tamanho inicial.'
      }
    ]
  },
  15: {
    title: 'Space Around vs Evenly',
    description: 'As tags estão distribuídas com espaços iguais, incluindo as bordas. Mude a distribuição para que os espaços externos fiquem com metade do tamanho dos espaços entre as tags.',
    hint: 'Três valores de espaçamento parecem quase iguais. Um não deixa espaço nas bordas, um deixa o mesmo espaço em todo lugar e um deixa metade do espaço interno nas bordas. Você precisa do último.',
    starterCSS: `.row {
  width: 100%;
  max-width: 22rem;
  padding: 0.75rem;
  background: #e2e8f0;
  border-radius: 0.5rem;
  display: flex;
  justify-content: space-evenly;

  /* ?? deixar os espaços externos com metade dos internos ?? */
}

.tag {
  padding: 0.5rem;
  background: #3b82f6;
  color: white;
  border-radius: 0.5rem;
  font-weight: bold;
  font-size: 0.85rem;
}`,
    solutions: [
      {
        explanation: [
          {
            label: 'div.row',
            text: 'O flex container. As quatro tags ficam numa linha, então <code>justify-content</code> distribui elas no eixo principal.'
          },
          {
            label: 'justify-content: space-around',
            text: 'Cada item recebe a mesma quantidade de espaço dos dois lados. O primeiro e o último acabam com metade desse espaço nas bordas, porque só um item fica ao lado de cada borda.'
          },
          {
            label: 'space-evenly',
            text: 'O valor do código inicial. Dá o mesmo tamanho a todos os gaps, incluindo as duas bordas. Por isso os espaços externos pareciam tão grandes quanto os internos.'
          },
          {
            label: 'space-between',
            text: 'O outro valor comum. Coloca o primeiro item no início e o último no fim, então os espaços externos ficam zero.'
          },
          {
            label: 'gap',
            text: 'Os valores de <code>justify-content</code> distribuem o espaço livre. Se você também adicionar um <code>gap</code>, esse espaço fixo é somado entre os itens antes de o espaço livre ser dividido.'
          }
        ],
        tip: '<code>space-between</code> não tem espaço nas bordas, <code>space-evenly</code> tem espaço igual nas bordas e entre os itens, e <code>space-around</code> tem metade do espaço interno nas bordas. Ler o alvo com atenção mostra qual usar.'
      }
    ]
  },
  16: {
    title: 'Chefe: Galeria Responsiva',
    description: 'Seis cards quebram em duas linhas de três. Dê a todos a mesma largura inicial, desconte o gap dessa largura, distribua as linhas pela altura e deixe os espaços externos com metade do espaço entre os cards.',
    hint: 'Este chefe mistura os níveis 13 a 15: quebra e align-content para as linhas, flex-basis com calc() para a largura e o valor de espaço cujas bordas têm metade do espaço interno.',
    starterCSS: `.gallery {
  width: 100%;
  max-width: 26rem;
  min-height: 16rem;
  padding: 1rem;
  background: #e2e8f0;
  border-radius: 0.5rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;

  /* ?? distribuir as linhas e os cards dentro delas ?? */
}

.card {
  padding: 0.75rem;
  background: #3b82f6;
  color: white;
  border-radius: 0.5rem;
  font-weight: bold;
  text-align: center;

  /* ?? largura inicial igual, com o gap descontado ?? */
}`,
    solutions: [
      {
        explanation: [
          { label: 'flex-wrap: wrap', text: 'Do nível 13: seis cards não cabem em uma linha, então formam duas.' },
          { label: 'align-content: space-between', text: 'Do nível 13: a primeira linha vai para o topo e a última para o fundo da galeria.' },
          { label: 'flex: 0 0 calc(30% - 0.5rem)', text: 'Do nível 14: cada card começa abaixo de um terço, então três cabem e sobra espaço para a distribuição. O gap é descontado para não transbordar.' },
          { label: 'justify-content: space-around', text: 'Do nível 15: o espaço extra dentro de cada linha é dividido, deixando as bordas com metade do espaço entre os cards.' },
          { label: 'gap', text: 'O espaço fixo entre os cards. A distribuição soma espaço livre em cima dele, por isso o espaço interno é maior que o externo.' }
        ],
        tip: 'Uma propriedade para as linhas, outra para os itens de cada linha e uma base que deixe espaço para as duas. Essa é a receita do Mundo 4 inteira em uma galeria.'
      }
    ]
  },
  17: {
    title: 'Empurrando com Margens Automáticas',
    description: 'O logo e os botões de ação estão colados à esquerda. Mantenha o logo à esquerda e mova o grupo de ações para a borda direita.',
    hint: 'Uma margem automática absorve todo o espaço livre do lado em que é aplicada. Você não precisa mudar a ordem nem o HTML, apenas a quantidade de espaço livre de um lado das ações.',
    starterCSS: `.navbar {
  width: 100%;
  max-width: 24rem;
  padding: 0.75rem 1rem;
  background: #e2e8f0;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  /* ?? manter o logo à esquerda e empurrar as ações para a direita ?? */
}

.logo {
  color: #1e293b;
  font-weight: bold;
}

.actions {
  display: flex;
  gap: 0.5rem;

  /* ?? comer o espaço livre do lado esquerdo ?? */
}

.nav-btn {
  padding: 0.5rem 0.75rem;
  background: #3b82f6;
  color: white;
  border-radius: 0.5rem;
  font-weight: bold;
}`,
    solutions: [
      {
        explanation: [
          {
            label: 'div.navbar',
            text: 'O flex container. O logo e o grupo de ações são seus dois filhos, e o grupo de ações é ele mesmo um flex container para os dois botões.'
          },
          {
            label: 'margin-left: auto (.actions)',
            text: 'Uma margem automática é gulosa: ela pega todo o espaço livre disponível do seu lado. Aqui ela come o espaço vazio entre o logo e as ações, empurrando as ações para a borda direita.'
          },
          {
            label: 'justify-content: space-between',
            text: 'Uma solução alternativa. Também empurraria os dois filhos para as bordas opostas, sem mudar a margem. O jogo aceita qualquer CSS que produza o mesmo layout.'
          },
          {
            label: 'div.actions',
            text: 'Um flex container aninhado. O <code>gap</code> dele mantém os dois botões juntos, então mover o grupo não separa eles.'
          },
          {
            label: 'gap no navbar',
            text: 'O gap do container ainda adiciona uma distância mínima entre os dois grupos. A margem automática trabalha com o espaço que sobra depois desse gap.'
          }
        ],
        tip: 'Uma margem automática é a forma mais simples de empurrar um único item para longe dos outros. <code>margin-left: auto</code> empurra para a direita, <code>margin-right: auto</code> empurra para a esquerda e <code>margin-top: auto</code> empurra para baixo. É a mesma ideia que você usou no footer.'
      }
    ]
  },
  18: {
    title: 'Invertendo a Direção',
    description: 'Os passos estão escritos como Start, Build e Ship no HTML, mas devem aparecer como Ship, Build e Start na tela. Inverta a direção da linha inteira sem alterar o HTML nem usar order.',
    hint: 'Existe uma propriedade do container que vira o eixo principal. Ela não é o mesmo que a propriedade order: em vez de mudar um item, ela muda onde a linha começa e onde termina.',
    starterCSS: `.steps {
  width: 100%;
  max-width: 20rem;
  padding: 1rem;
  background: #e2e8f0;
  border-radius: 0.5rem;
  display: flex;
  gap: 0.5rem;

  /* ?? inverter a ordem visual da linha ?? */
}

.step {
  padding: 0.75rem 1rem;
  background: #3b82f6;
  color: white;
  border-radius: 0.5rem;
  font-weight: bold;
  text-align: center;
}`,
    solutions: [
      {
        explanation: [
          {
            label: 'div.steps',
            text: 'O flex container. Os três passos são flex items, e a ordem no DOM continua Start, Build e Ship.'
          },
          {
            label: 'flex-direction: row-reverse',
            text: 'Vira o eixo principal. A linha continua colocando os itens na horizontal, mas o início agora fica à direita e o fim à esquerda, então o primeiro item do HTML aparece à direita.'
          },
          {
            label: 'Por que não order?',
            text: '<code>order</code> muda a posição de itens individuais. <code>row-reverse</code> muda o fluxo inteiro de uma vez, o que é útil para linhas do tempo, mensagens de chat e qualquer layout que seja lido do fim para o início.'
          },
          {
            label: 'gap',
            text: 'O gap é medido entre os itens na ordem visual, então o espaçamento continua igual mesmo depois de inverter a direção.'
          },
          {
            label: 'Acessibilidade',
            text: 'O HTML continua Start, Build e Ship. Leitores de tela e a tecla Tab seguem o DOM, não a direção visual, então use esta propriedade quando a inversão visual combinar com o significado.'
          }
        ],
        tip: '<code>flex-direction: row-reverse</code> inverte o eixo principal inteiro. <code>order</code> reorganiza itens individuais. Os dois mudam apenas a apresentação visual; o HTML e a ordem do teclado continuam intactos.'
      }
    ]
  },
  19: {
    title: 'Texto que Cabe',
    description: 'O rótulo longo está empurrando o contador para fora do card. Mantenha o avatar e o contador visíveis, e deixe o rótulo encolher e mostrar reticências em vez de transbordar.',
    hint: 'Um flex item tem, por padrão, um tamanho mínimo igual ao seu conteúdo, então ele se recusa a encolher abaixo do texto. Existe uma propriedade cujo valor padrão é auto que controla esse mínimo; defina como zero no rótulo.',
    starterCSS: `.list-item {
  width: 100%;
  max-width: 20rem;
  padding: 0.75rem;
  background: #e2e8f0;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.avatar {
  flex: 0 0 auto;
  padding: 0.5rem;
  background: #3b82f6;
  color: white;
  border-radius: 0.5rem;
  font-weight: bold;
}

.label {
  flex: 1;

  /* ?? permitir que o texto encolha abaixo da largura natural ?? */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.count {
  flex: 0 0 auto;
  padding: 0.35rem 0.6rem;
  background: #8b5cf6;
  color: white;
  border-radius: 999px;
  font-weight: bold;
}`,
    solutions: [
      {
        explanation: [
          {
            label: 'div.list-item',
            text: 'Um flex container em linha. O avatar, o rótulo e o contador são os três itens, e a linha precisa caber dentro do card.'
          },
          {
            label: 'min-width: 0 (.label)',
            text: 'Um flex item tem por padrão <code>min-width: auto</code>, o que significa que ele se recusa a ficar menor que o próprio conteúdo. Definir como <code>0</code> dá permissão ao navegador para encolher o rótulo abaixo da largura natural do texto.'
          },
          {
            label: 'flex: 1 (.label)',
            text: 'Já está no código inicial. Faz o rótulo ocupar o espaço livre que o avatar e o contador não usam.'
          },
          {
            label: 'overflow: hidden e text-overflow: ellipsis',
            text: 'Decidem o que acontece com o texto depois que o rótulo pode encolher: o texto extra fica escondido e é substituído por <code>…</code> no final.'
          },
          {
            label: 'flex: 0 0 auto (.avatar e .count)',
            text: 'Esses dois itens protegem o próprio tamanho. Sem isso, o navegador poderia encolher eles também e o avatar ou o contador sumiriam.'
          },
          {
            label: 'min-width e flex-shrink',
            text: 'Trabalham juntos: <code>flex-shrink</code> diz que o item pode encolher, e <code>min-width</code> diz até onde ele pode ir. Com o padrão <code>auto</code>, o texto é o limite.'
          }
        ],
        tip: 'Quando um flex item tem texto longo e se recusa a encolher, lembre do par: <code>min-width: 0</code> no item, mais <code>overflow: hidden</code> e <code>text-overflow: ellipsis</code> para mostrar o corte. É uma das correções de flexbox mais comuns no mundo real.'
      }
    ]
  },
  20: {
    title: 'Chefe: A Interface Inteira',
    description: 'Monte a casca do app do Mundo 5. O topbar empurra o usuário para a direita com uma margem automática e mostra o menu invertido. Na área de conteúdo, um nome de arquivo longo encolhe com reticências enquanto o contador continua visível.',
    hint: 'Trabalhe de fora para dentro: o app é uma coluna, o topbar e o layout são linhas, o menu inverte a direção, o usuário usa uma margem automática à esquerda e o nome do arquivo precisa de permissão para encolher abaixo do texto.',
    starterCSS: `.app {
  width: 100%;
  max-width: 24rem;
  min-height: 20rem;
  padding: 0.75rem;
  background: #e2e8f0;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.topbar {
  gap: 0.5rem;
  align-items: center;
  padding: 0.5rem;
  background: white;
  border-radius: 0.5rem;

  /* ?? transformar em uma linha ?? */
}

.brand { font-weight: bold; }

.menu {
  display: flex;
  gap: 0.5rem;

  /* ?? mostrar os itens ao contrário ?? */
}

.menu-item {
  color: #475569;
  font-weight: bold;
}

.user {
  padding: 0.4rem 0.55rem;
  background: #3b82f6;
  color: white;
  border-radius: 0.5rem;
  font-weight: bold;

  /* ?? empurrar o usuário para a direita ?? */
}

.layout {
  display: flex;
  gap: 0.5rem;

  /* ?? preencher a altura livre do app ?? */
}

.sidebar {
  flex: 0 0 30%;
  padding: 0.75rem;
  background: #8b5cf6;
  color: white;
  border-radius: 0.5rem;
  font-weight: bold;
}

.content {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem;
  background: #3b82f6;
  color: white;
  border-radius: 0.5rem;

  /* ?? pegar a largura que sobra ?? */
}

.file {
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  /* ?? permitir que o texto encolha ?? */
}

.count {
  flex: 0 0 auto;
  padding: 0.3rem 0.5rem;
  background: #ec4899;
  color: white;
  border-radius: 999px;
  font-weight: bold;
}

.footer {
  padding: 0.6rem 0.75rem;
  background: #1e293b;
  color: white;
  border-radius: 0.5rem;
  font-weight: bold;
}`,
    solutions: [
      {
        explanation: [
          { label: 'div.app', text: 'A coluna de fora. Cada seção dentro dela é outro flex container, que é a ideia central do flexbox aninhado.' },
          { label: 'display: flex (.topbar)', text: 'Do nível 12: a marca, o menu e o usuário finalmente viram flex items em uma linha.' },
          { label: 'flex-direction: row-reverse (.menu)', text: 'Do nível 18: o menu inteiro inverte, então Tags aparece antes de Levels sem mudar o HTML.' },
          { label: 'margin-left: auto (.user)', text: 'Do nível 17: a margem automática come o espaço depois do menu e empurra o usuário para a borda direita.' },
          { label: 'display: flex (.content)', text: 'A área principal é uma linha aninhada: o nome do arquivo e o contador ficam lado a lado.' },
          { label: 'min-width: 0 (.file)', text: 'Do nível 19: o nome longo pode encolher abaixo da largura natural e as reticências substituem o texto escondido.' },
          { label: 'flex: 1 (.layout e .content)', text: 'O layout come a altura livre do app e o conteúdo come a largura livre ao lado da sidebar, deixando o footer embaixo.' }
        ],
        tip: 'Este chefe é o Mundo 5 inteiro: inverter uma linha, empurrar um item com margem automática, deixar texto longo encolher e manter cada nível da interface como flex container.'
      }
    ]
  },
  21: {
    title: 'Espaços Diferentes em Cada Eixo',
    description: 'As peças quebram em duas linhas de três. Mantenha esse layout, mas faça o espaço entre as linhas ser o dobro do espaço entre as peças.',
    hint: 'O atalho gap aceita dois valores: o primeiro é para linhas e o segundo é para colunas. Também existem as propriedades separadas row-gap e column-gap se você preferir escrever por extenso.',
    starterCSS: `.gallery {
  width: 100%;
  max-width: 24rem;
  padding: 1rem;
  background: #e2e8f0;
  border-radius: 0.5rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;

  /* ?? as linhas precisam do dobro do espaço das colunas ?? */
}

.tile {
  flex: 0 0 calc(33.333% - 0.5rem);
  padding: 0.75rem;
  background: #3b82f6;
  color: white;
  border-radius: 0.5rem;
  font-weight: bold;
  text-align: center;
}`,
    solutions: [
      {
        explanation: [
          {
            label: 'div.gallery',
            text: 'O flex container. Ele já quebra as peças em duas linhas, então existe um gap horizontal (entre as peças de uma linha) e outro vertical (entre as linhas).'
          },
          {
            label: 'gap: 1rem 0.5rem',
            text: 'O atalho com dois valores: o primeiro é <code>row-gap</code> (vertical aqui) e o segundo é <code>column-gap</code> (horizontal aqui). As linhas ficam com o dobro do espaço das colunas.'
          },
          {
            label: 'row-gap / column-gap',
            text: 'A forma longa de escrever a mesma coisa. <code>row-gap: 1rem; column-gap: 0.5rem;</code> produz exatamente o mesmo layout do atalho.'
          },
          {
            label: 'flex: 0 0 calc(33.333% - 0.5rem) (.tile)',
            text: 'Já estava no código inicial. Três peças mais dois gaps de coluna precisam caber exatamente na linha, então cada uma pega um terço da largura menos um gap. O valor do gap não mudou, então as peças continuam cabendo.'
          }
        ],
        tip: 'Um único valor de <code>gap</code> vale para os dois eixos. Dois valores significam <code>row-gap</code> primeiro e <code>column-gap</code> depois. É o mesmo atalho de <code>padding: 1rem 2rem</code>, em que o primeiro número é vertical e o segundo é horizontal.'
      }
    ]
  },
  22: {
    title: 'Alinhando Linhas de Texto',
    description: 'Os três preços têm tamanhos de texto diferentes. Alinhe a base das letras em vez do centro das caixas.',
    hint: 'Alinhar as caixas não é o mesmo que alinhar o texto dentro delas. Um valor de align-items usa a linha invisível onde as letras ficam apoiadas.',
    starterCSS: `.prices {
  width: 100%;
  max-width: 22rem;
  padding: 1rem;
  background: #e2e8f0;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;

  /* ?? alinhar o texto, não as caixas ?? */
}

.price {
  padding: 0.75rem 1rem;
  background: #3b82f6;
  color: white;
  border-radius: 0.5rem;
}

.amount { font-weight: bold; line-height: 1; }
.price-small .amount { font-size: 0.9rem; }
.price-medium .amount { font-size: 1.3rem; }
.price-large .amount { font-size: 1.8rem; }`,
    solutions: [
      {
        explanation: [
          {
            label: 'div.prices',
            text: 'O flex container. Os três cartões são flex items e os textos têm tamanhos diferentes de propósito, para deixar o alinhamento bem visível.'
          },
          {
            label: 'align-items: center',
            text: 'O valor do código inicial. Ele centraliza as caixas no eixo cruzado, então o texto pequeno e o texto grande ficam em alturas diferentes.'
          },
          {
            label: 'align-items: baseline',
            text: 'Alinha a linha invisível onde as letras se apoiam. As caixas ficam com posições diferentes no topo, mas os três preços parecem uma única linha de texto reta.'
          },
          {
            label: 'span.amount',
            text: 'O texto dentro de cada cartão. Os tamanhos de fonte são diferentes, e é por isso que alinhar as caixas e alinhar o texto dão resultados diferentes.'
          },
          {
            label: 'gap',
            text: 'Mantém a mesma distância entre os cartões. Ele funciona da mesma forma não importa qual valor de alinhamento você escolha.'
          }
        ],
        tip: '<code>baseline</code> é o valor de alinhamento para texto. Use quando os itens tiverem textos de tamanhos diferentes, como um preço ao lado de um rótulo ou um título ao lado de uma legenda pequena. Continua sendo um valor de <code>align-items</code>, no eixo cruzado.'
      }
    ]
  },
  23: {
    title: 'Cartões que Esticam',
    description: 'Os três cartões têm quantidades diferentes de texto, mas precisam ter a mesma altura e cada botão precisa ficar no fundo do seu cartão.',
    hint: 'O alinhamento padrão do eixo cruzado faz os itens preencherem a altura, mas o código inicial muda isso. Depois cada cartão precisa virar uma coluna para que uma margin automática empurre o botão para baixo.',
    starterCSS: `.cards {
  width: 100%;
  max-width: 26rem;
  padding: 1rem;
  background: #e2e8f0;
  border-radius: 0.5rem;
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;

  /* ?? mesma altura para todos os cartões ?? */
}

.card {
  padding: 0.75rem;
  background: white;
  border-radius: 0.5rem;

  /* ?? fazer o botão ir para o fundo ?? */
}

.card-title { font-weight: bold; }
.card-text { margin-top: 0.5rem; font-size: 0.85rem; }
.action {
  margin-top: 0.75rem;
  padding: 0.5rem 0.75rem;
  background: #3b82f6;
  color: white;
  border-radius: 0.5rem;
  font-weight: bold;
}`,
    solutions: [
      {
        explanation: [
          {
            label: 'div.cards',
            text: 'O flex container. Com <code>align-items: flex-start</code> cada cartão tinha a sua altura natural, então a linha ficava desigual.'
          },
          {
            label: 'align-items: stretch',
            text: 'O valor padrão do flexbox. Sem <code>flex-start</code>, todo cartão preenche a altura do mais alto, então os três ficam iguais.'
          },
          {
            label: '.card { display: flex; flex-direction: column }',
            text: 'O cartão também vira um flex container. O título, o texto e o botão empilham na vertical, o que permite usar propriedades do flexbox dentro dele.'
          },
          {
            label: 'margin-top: auto (.action)',
            text: 'A margin automática come todo o espaço livre acima do botão dentro da coluna. O botão vai para o fundo, mesmo quando o texto acima é curto.'
          },
          {
            label: 'gap no cartão',
            text: 'Um espaço mínimo fixo entre o título, o texto e o botão. A margin automática soma o espaço livre em cima desse gap.'
          }
        ],
        tip: 'Esse padrão aparece em quase todo cartão de interface: estique os cartões por fora, faça cada cartão uma coluna por dentro e use <code>margin-top: auto</code> no último elemento. O resultado parece um grid, mas é só flexbox aninhado.'
      }
    ]
  },
  24: {
    title: 'Chefe: O Widget de Perfil',
    description: 'Monte o card de perfil com quatro ideias do Mundo 6: o header alinha bases de texto, as tags quebram em duas linhas com o dobro de row gap, as duas estatísticas esticam para a mesma altura e o status é empurrado para a direita no header aninhado.',
    hint: 'O header precisa de um alinhamento de texto e de uma margem automática no status. As tags precisam de quebra e de dois valores de gap. As estatísticas precisam do valor stretch em vez de flex-start.',
    starterCSS: `.profile {
  width: 100%;
  max-width: 24rem;
  min-height: 17rem;
  padding: 1rem;
  background: #e2e8f0;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.header {
  align-items: center;
  gap: 0.75rem;

  /* ?? criar linha, alinhar o texto e empurrar o status ?? */
}

.avatar {
  padding: 0.75rem;
  background: #3b82f6;
  color: white;
  border-radius: 0.5rem;
  font-weight: bold;
}

.name { font-weight: bold; font-size: 1.05rem; }
.status {
  padding: 0.35rem 0.6rem;
  font-size: 0.75rem;
  background: #50fa7b;
  color: #14121f;
  border-radius: 999px;
  font-weight: bold;

  /* ?? empurrar o status para a direita ?? */
}

.bio {
  flex: 1;
  padding: 0.75rem;
  background: white;
  border-radius: 0.5rem;
}

.stats {
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;

  /* ?? deixar as duas caixas com a mesma altura ?? */
}

.stat {
  flex: 1;
  padding: 0.6rem;
  background: white;
  border-radius: 0.5rem;
  font-weight: bold;
}

.footer {
  gap: 0.5rem;
  align-items: center;

  /* ?? tags à esquerda, editar à direita ?? */
}

.tags {
  display: flex;
  flex-wrap: wrap;
  max-width: 9rem;
  gap: 0.35rem;

  /* ?? as linhas precisam do dobro do espaço das colunas ?? */
}

.tags span {
  padding: 0.25rem 0.5rem;
  background: #e2e8f0;
  border-radius: 999px;
  font-weight: bold;
}

.edit {
  padding: 0.35rem 0.6rem;
  background: #8b5cf6;
  color: white;
  border-radius: 0.5rem;
  font-weight: bold;
}`,
    solutions: [
      {
        explanation: [
          { label: 'display: flex (.header e .footer)', text: 'Do nível 12: as duas seções viram flex containers, então seus valores de gap e alinhamento finalmente funcionam.' },
          { label: 'align-items: baseline (.header)', text: 'Do nível 22: o nome e o status têm tamanhos de fonte diferentes, então alinhar a base do texto fica melhor que centralizar as caixas.' },
          { label: 'margin-left: auto (.status)', text: 'Do nível 17: a margem automática come o espaço livre e mantém o status na borda direita.' },
          { label: 'align-items: stretch (.stats)', text: 'Do nível 23: o valor padrão deixa as duas caixas de estatística tão altas quanto a mais alta.' },
          { label: 'flex-wrap: wrap + gap: 0.7rem 0.35rem (.tags)', text: 'Dos níveis 21 e 13: as quatro pills quebram em duas linhas e o row gap é o dobro do column gap.' },
          { label: 'justify-content: space-between (.footer)', text: 'As tags ficam à esquerda e o botão de editar à direita nesta linha aninhada.' }
        ],
        tip: 'Chefes reaproveitam truques pequenos: baseline para texto, dois valores de gap para itens quebrados, stretch para alturas iguais e margem automática para o item que vai para a borda.'
      }
    ]
  },
  25: {
    title: 'Quebrando em Colunas',
    description: 'Os seis itens estão empilhados numa coluna alta e estouram o painel. Faça eles fluírem em duas colunas e espalhe essas colunas da borda esquerda até a borda direita.',
    hint: 'O eixo principal pode ser vertical. Se você quebrar uma coluna, os itens formam novas colunas em vez de novas linhas, e o align-content distribui essas colunas.',
    starterCSS: `.panel {
  width: 100%;
  max-width: 26rem;
  height: 11rem;
  padding: 1rem;
  background: #e2e8f0;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  /* ?? quebrar em colunas e espalhar ?? */
}

.item {
  padding: 0.6rem 0.75rem;
  background: #3b82f6;
  color: white;
  border-radius: 0.5rem;
  font-weight: bold;
}`,
    solutions: [
      {
        explanation: [
          {
            label: 'div.panel',
            text: 'O flex container. A direção é <code>column</code>, então o eixo principal é vertical e os seis itens não cabem na altura fixa.'
          },
          {
            label: 'flex-wrap: wrap',
            text: 'Numa coluna os itens quebram em <strong>colunas</strong> em vez de linhas. Os três primeiros preenchem a coluna da esquerda e os outros três começam uma nova.'
          },
          {
            label: 'align-content: space-between',
            text: 'Depois da quebra existem duas linhas (duas colunas). <code>align-content</code> distribui essas linhas no eixo cruzado, que aqui é horizontal, então a primeira coluna vai para a esquerda e a última para a direita.'
          },
          {
            label: 'height vs min-height',
            text: 'Uma <code>height</code> fixa é o que força a quebra: os itens não têm para onde crescer. Com <code>min-height</code> o painel simplesmente cresceria e nada quebraria.'
          }
        ],
        tip: 'A quebra sempre segue o eixo principal: uma linha quebra em linhas, uma coluna quebra em colunas. As propriedades mantêm o mesmo nome, mas mudam de direção visual, então pergunte sempre: para onde aponta o eixo principal?'
      }
    ]
  },
  26: {
    title: 'O Modal que Cabe',
    description: 'O corpo do modal é alto demais e empurra o rodapé para fora do cartão. Faça o corpo pegar a altura que sobra, rolar por dentro e manter o cabeçalho e o rodapé visíveis.',
    hint: 'Num flex container em coluna um filho pode crescer com flex: 1. Para ele realmente poder ficar menor que o conteúdo, o tamanho mínimo dele nesse eixo também precisa ser zero: a versão vertical do truque do texto longo.',
    starterCSS: `.modal {
  width: 100%;
  max-width: 22rem;
  height: 14rem;
  padding: 1rem;
  background: #e2e8f0;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.modal-header {
  padding: 0.5rem;
  background: #3b82f6;
  color: white;
  border-radius: 0.5rem;
  font-weight: bold;
}

.modal-body {
  padding: 0.75rem;
  background: white;
  border-radius: 0.5rem;

  /* ?? crescer, permitir encolher e rolar por dentro ?? */
}

.modal-footer {
  padding: 0.5rem;
  background: #8b5cf6;
  color: white;
  border-radius: 0.5rem;
  font-weight: bold;
  text-align: center;
}`,
    solutions: [
      {
        explanation: [
          {
            label: 'div.modal',
            text: 'Um flex container em coluna com altura fixa. O cabeçalho e o rodapé têm o tamanho natural, então o corpo precisa viver com a altura que sobra.'
          },
          {
            label: 'flex: 1 (.modal-body)',
            text: 'Faz o corpo crescer para o espaço livre da coluna. Ele recebe toda a altura que o cabeçalho e o rodapé não usam.'
          },
          {
            label: 'min-height: 0 (.modal-body)',
            text: 'Um flex item tem <code>min-height: auto</code> por padrão, o que impede ele de ficar mais baixo que o conteúdo. Colocar zero deixa o corpo ser menor que o parágrafo longo.'
          },
          {
            label: 'overflow: auto',
            text: 'Quando o corpo fica menor que o conteúdo, o texto extra precisa de um lugar. <code>auto</code> cria uma barra de rolagem só quando ela é necessária.'
          },
          {
            label: 'rodapé do modal',
            text: 'Como o corpo para de crescer na altura disponível, o rodapé fica dentro do modal e mantém o seu tamanho natural.'
          }
        ],
        tip: 'Essa é a versão vertical da correção do texto longo: <code>flex: 1</code> para pegar o espaço, <code>min-height: 0</code> para permitir encolher abaixo do conteúdo e <code>overflow: auto</code> para rolar. Você vê essa tríade exata em modais e sidebars reais.'
      }
    ]
  },
  27: {
    title: 'Mensagem Mais Nova no Topo',
    description: 'As mensagens estão em ordem cronológica no HTML, mas o chat deve mostrar a mais nova no topo e manter todas alinhadas à direita.',
    hint: 'Você pode inverter o eixo principal de uma coluna. O primeiro item do HTML vai para o fundo e o último vai para o topo; o align-items continua cuidando do outro eixo.',
    starterCSS: `.chat {
  width: 100%;
  max-width: 20rem;
  min-height: 14rem;
  padding: 1rem;
  background: #e2e8f0;
  border-radius: 0.5rem;
  display: flex;
  gap: 0.5rem;

  /* ?? mais nova no topo, mensagens à direita ?? */
}

.message {
  padding: 0.5rem 0.75rem;
  background: #3b82f6;
  color: white;
  border-radius: 0.5rem;
  font-weight: bold;
}`,
    solutions: [
      {
        explanation: [
          {
            label: 'div.chat',
            text: 'O flex container. A ordem do HTML é a ordem real do tempo: Message 1 é a mais antiga e Message 4 é a mais nova.'
          },
          {
            label: 'flex-direction: column-reverse',
            text: 'Inverte o eixo principal na vertical. O começo da coluna agora está embaixo, então o primeiro item do HTML aparece no fundo e o último no topo.'
          },
          {
            label: 'align-items: flex-end',
            text: 'O eixo cruzado de uma coluna é horizontal. <code>flex-end</code> manda cada mensagem para o lado direito do chat.'
          },
          {
            label: 'gap',
            text: 'O gap continua medido na ordem visual, então as mensagens mantêm uma distância uniforme mesmo com a coluna invertida.'
          },
          {
            label: 'justify-content',
            text: 'O padrão <code>flex-start</code> agora significa o fundo do chat, então todas as mensagens ficam juntas embaixo em vez de espalhadas.'
          }
        ],
        tip: '<code>column-reverse</code> e <code>row-reverse</code> invertem o eixo principal inteiro; <code>order</code> move itens individuais. Os dois mudam só a imagem: o HTML e a ordem do leitor de tela continuam cronológicos.'
      }
    ]
  },
  28: {
    title: 'Chefe: A Tabela de Preços',
    description: 'Final do Mundo 7. O plano em destaque ocupa a primeira linha inteira e os outros quatro formam duas colunas com row gap maior. Dentro dele, seis vantagens quebram em duas colunas verticais espalhadas, e abaixo dos planos uma lista de atualizações mostra a mais nova no topo, alinhada à direita.',
    hint: 'Mantenha a quebra de linha, o order e o calc() dos mundos anteriores. Depois adicione uma coluna de altura fixa com flex-wrap para as vantagens e uma coluna invertida com alinhamento no fim para as atualizações.',
    starterCSS: `.catalog {
  width: 100%;
  max-width: 26rem;
  padding: 1rem;
  background: #e2e8f0;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.plans {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;

  /* ?? row gap maior e linhas espalhadas ?? */
}

.plan {
  padding: 0.75rem;
  background: #3b82f6;
  color: white;
  border-radius: 0.5rem;
  font-weight: bold;
  text-align: center;

  /* ?? dois planos por linha ?? */
}

.plan-featured {
  background: #8b5cf6;

  /* ?? primeira linha cheia e depois empilhar o conteúdo ?? */
}

.plan-name { font-weight: bold; }

.perks {
  height: 8rem;
  gap: 0.35rem;

  /* ?? quebrar em duas colunas verticais espalhadas ?? */
}

.perk {
  padding: 0.4rem 0.5rem;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 0.35rem;
  font-weight: bold;
}

.updates {
  min-height: 6rem;
  gap: 0.35rem;

  /* ?? mais nova no topo, mensagens à direita ?? */
}

.update {
  padding: 0.4rem 0.6rem;
  background: #8b5cf6;
  color: white;
  border-radius: 0.5rem;
  font-weight: bold;
}`,
    solutions: [
      {
        explanation: [
          { label: 'display: flex (.plans)', text: 'Os cards de plano quebram em linhas: uma linha cheia em destaque e duas linhas de dois cards.' },
          { label: 'gap: 1rem 0.5rem + align-content: space-between', text: 'As linhas ficam mais afastadas que as colunas e se espalham pela altura disponível.' },
          { label: 'order: -1 e flex-basis: 100% (.plan-featured)', text: 'O card em destaque ocupa a primeira linha inteira, e o order garante que ele fique primeiro.' },
          { label: 'display: flex (.plan-featured)', text: 'O card em destaque é uma coluna aninhada, então o nome e as vantagens ficam empilhados dentro dele.' },
          { label: 'flex-direction: column + flex-wrap: wrap (.perks)', text: 'Do nível 25: a altura fixa força seis vantagens a quebrarem em duas colunas verticais.' },
          { label: 'align-content: space-between (.perks)', text: 'As duas colunas de vantagens são empurradas para as bordas esquerda e direita do card.' },
          { label: 'flex-direction: column-reverse + align-items: flex-end (.updates)', text: 'Do nível 27: a atualização mais nova aparece no topo e todas ficam alinhadas à direita.' }
        ],
        tip: 'A quebra acontece no eixo principal: linhas em um container de linha, colunas em um container de coluna. Inverta uma coluna quando o item mais novo precisa ficar no topo.'
      }
    ]
  },
  29: {
    title: 'O Ambiente do Editor',
    description: 'Monte o ambiente do editor: um cabeçalho com o título à esquerda e os botões à direita, uma barra de arquivos fixa, uma área de código que cresce uma vez, uma área de prévia que cresce o dobro e uma barra de status no fundo.',
    hint: 'Mais uma vez são quatro camadas: a página é uma coluna, o cabeçalho é uma linha, a linha do meio precisa comer a altura livre e, dentro dela, os dois painéis dividem a largura restante na proporção 1 para 2.',
    starterCSS: `.workspace {
  width: 100%;
  max-width: 26rem;
  min-height: 20rem;
  padding: 0.75rem;
  background: #e2e8f0;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.bar {
  gap: 0.5rem;
  align-items: center;
  padding: 0.5rem;
  background: white;
  border-radius: 0.5rem;

  /* ?? título à esquerda, ferramentas à direita ?? */
}

.title { font-weight: bold; }
.tools { display: flex; gap: 0.35rem; }
.tools span { padding: 0.25rem 0.5rem; background: #e2e8f0; border-radius: 0.35rem; font-weight: bold; }

.main {
  display: flex;
  gap: 0.5rem;

  /* ?? preencher a altura livre do ambiente ?? */
}

.rail {
  flex: 0 0 25%;
  padding: 0.75rem;
  background: #8b5cf6;
  color: white;
  border-radius: 0.5rem;
  font-weight: bold;
}

.code {
  padding: 0.75rem;
  background: #3b82f6;
  color: white;
  border-radius: 0.5rem;
  font-weight: bold;

  /* ?? uma parte da largura que sobra ?? */
}

.preview {
  padding: 0.75rem;
  background: #10b981;
  color: white;
  border-radius: 0.5rem;
  font-weight: bold;

  /* ?? duas partes da largura que sobra ?? */
}

.status {
  padding: 0.5rem;
  background: #1e293b;
  color: white;
  border-radius: 0.5rem;
  font-weight: bold;
}`,
    solutions: [
      {
        explanation: [
          {
            label: '.bar { display: flex; justify-content: space-between }',
            text: 'O cabeçalho é uma linha. <code>space-between</code> mantém o título na borda esquerda do conteúdo e o grupo de ferramentas na borda direita.'
          },
          {
            label: '.main { flex: 1 }',
            text: 'Dentro da coluna da página isso faz a linha do meio crescer para toda a altura livre. A barra de status é empurrada para o fundo.'
          },
          {
            label: '.rail { flex: 0 0 25% }',
            text: 'Já estava no código inicial. A barra de arquivos mantém um quarto da linha principal e não cresce nem encolhe com os dois painéis.'
          },
          {
            label: 'flex: 1 e flex: 2',
            text: 'Depois da barra e dos dois gaps, a largura restante é dividida em três partes iguais. O código pega uma e a prévia pega duas, então a prévia fica com o dobro da largura.'
          },
          {
            label: 'div.tools',
            text: 'Um flex container aninhado. O gap dele mantém Save e Run juntos enquanto o cabeçalho move o grupo inteiro para a direita.'
          }
        ],
        tip: 'É o app shell do nível 20 com larguras proporcionais. Use <code>flex: 0 0 &lt;tamanho&gt;</code> nas partes que devem manter o tamanho e números que crescem como <code>1</code> e <code>2</code> nas partes que dividem o que sobra.'
      }
    ]
  },
  30: {
    title: 'Chefe: A Página Completa',
    description: 'Chefe final. Monte uma página que usa o jogo inteiro: um nav invertido em um topbar espalhado, um hero que cresce com uma barra de arquivos fixa e painéis de código e prévia na proporção 1 para 2, quatro cards quebrados com bordas na metade do espaço interno e um footer com nota à esquerda e link à direita.',
    hint: 'Desenhe as caixas primeiro. A página é uma coluna, o hero cresce, o topbar e o footer são linhas, o nav é invertido, o workspace tem uma barra fixa e dois painéis que crescem, e os cards quebram com row gap maior.',
    starterCSS: `.page {
  width: 100%;
  max-width: 26rem;
  min-height: 28rem;
  padding: 0.75rem;
  background: #e2e8f0;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.topbar {
  gap: 0.5rem;
  align-items: center;
  padding: 0.5rem;
  background: white;
  border-radius: 0.5rem;

  /* ?? marca à esquerda, ações à direita ?? */
}

.brand { font-weight: bold; }
.nav {
  display: flex;
  gap: 0.5rem;

  /* ?? mostrar os links do nav ao contrário ?? */
}
.nav span { color: #475569; font-weight: bold; }
.actions { padding: 0.35rem 0.6rem; background: #3b82f6; color: white; border-radius: 0.5rem; font-weight: bold; }

.hero {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  /* ?? preencher a altura livre da página ?? */
}

.intro { padding: 0.5rem; background: #8b5cf6; color: white; border-radius: 0.5rem; font-weight: bold; }

.workspace {
  min-height: 6rem;
  gap: 0.5rem;

  /* ?? transformar em uma linha ?? */
}

.rail {
  flex: 0 0 20%;
  padding: 0.6rem;
  background: #8b5cf6;
  color: white;
  border-radius: 0.5rem;
  font-weight: bold;
}

.code {
  padding: 0.6rem;
  background: #3b82f6;
  color: white;
  border-radius: 0.5rem;
  font-weight: bold;

  /* ?? uma parte da largura restante ?? */
}

.preview {
  padding: 0.6rem;
  background: #10b981;
  color: white;
  border-radius: 0.5rem;
  font-weight: bold;

  /* ?? duas partes da largura restante ?? */
}

.cards {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;

  /* ?? row gap maior, bordas com metade do espaço, preencher o hero ?? */
}

.card {
  padding: 0.6rem;
  background: #3b82f6;
  color: white;
  border-radius: 0.5rem;
  font-weight: bold;
  text-align: center;

  /* ?? dois cards por linha com espaço para distribuir ?? */
}

.bottom {
  gap: 0.5rem;
  align-items: center;
  padding: 0.5rem;
  background: #1e293b;
  color: white;
  border-radius: 0.5rem;

  /* ?? nota à esquerda, link à direita ?? */
}`,
    solutions: [
      {
        explanation: [
          { label: 'div.page', text: 'A coluna de fora, a maior caixa do desenho. Ela empilha o topbar, o hero e o footer.' },
          { label: 'justify-content: space-between (.topbar)', text: 'Do nível 20: a marca vai à esquerda e as ações à direita. O nav fica no meio.' },
          { label: 'flex-direction: row-reverse (.nav)', text: 'Do nível 18: os links do nav aparecem em ordem visual invertida sem mexer no HTML.' },
          { label: 'flex: 1 (.hero)', text: 'O hero come a altura livre, deixando o footer na parte de baixo da página.' },
          { label: 'display: flex (.workspace)', text: 'Do nível 12: a barra de arquivos, o painel de código e a prévia viram flex items em uma linha.' },
          { label: 'flex: 0 0 20% / flex: 1 / flex: 2', text: 'Do nível 29: a barra mantém o tamanho e os dois painéis dividem a largura restante na proporção 1 para 2.' },
          { label: 'flex-wrap: wrap + gap: 1.25rem 0.5rem (.cards)', text: 'Dos níveis 21 e 15: dois cards por linha, row gap maior e bordas com metade do espaço interno.' },
          { label: 'justify-content: space-between (.bottom)', text: 'A última linha aninhada mantém a nota à esquerda e o link à direita.' }
        ],
        tip: 'Se um layout final parece impossível, desenhe as caixas e resolva uma por vez: direção primeiro, depois crescimento, alinhamento e gaps. Todo truque deste jogo é uma propriedade pequena do flexbox.'
      }
    ]
  },
}
