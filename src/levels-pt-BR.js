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
    title: 'Quebra de Linha com Flexbox',
    description: 'As tags transbordam o container. Faça elas quebrarem para a próxima linha quando não houver espaço. O espaço entre as tags já está definido.',
    hint: 'As tags devem formar várias linhas em vez de uma linha comprida. Quando os itens não cabem, o flexbox pode empurrá-los para uma nova linha. O gap já está no código inicial.',
    starterCSS: `.container {
  width: 100%;
  max-width: 16rem;
  padding: 1rem;
  background: #e2e8f0;
  border-radius: 0.5rem;
  display: flex;
  gap: 0.75rem;

  /* ?? fazer as tags quebrarem linha ?? */
}

.box {
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
            label: 'div.container',
            text: 'O flex container. A largura dele é limitada, e as seis tags juntas pedem mais espaço do que ele pode oferecer.'
          },
          {
            label: 'div.box',
            text: 'Seis flex items com palavras curtas. Cada tag tira o tamanho do texto e do padding, então o layout se adapta ao conteúdo.'
          },
          {
            label: 'display: flex',
            text: 'Já está no código inicial. Ele transforma as seis tags em flex items em vez de blocos normais.'
          },
          {
            label: 'flex-wrap: wrap',
            text: 'Por padrão os flex items <em>encolhem</em> (<code>flex-shrink: 1</code>) para caber em uma única linha. Com <code>wrap</code>, o item que não cabe vai para uma nova linha em vez de ser espremido.'
          },
          {
            label: 'gap',
            text: 'Já está no código inicial. Ele mantém o mesmo espaço entre os itens de uma linha e entre as próprias linhas, então o desenho das tags fica regular.'
          },
          {
            label: 'padding',
            text: 'Espaço <em>dentro</em> de cada tag, entre a borda e o texto. O padding pertence ao elemento, enquanto a margin fica fora dele.'
          }
        ],
        tip: 'A quebra de linha acontece sempre no eixo principal: em um layout de linha os itens viram novas linhas, e em um layout de coluna eles viram novas colunas. Mude a largura do container no editor e veja as linhas se reorganizando sozinhas.'
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
    title: 'Espalhando Itens com space-between',
    description: 'Os quatro botões estão grudados na esquerda. Espalhe eles pela linha inteira com o mesmo espaço entre eles.',
    hint: 'Existe espaço vazio dentro do container e os quatro botões precisam usar tudo. O flexbox tem três jeitos de distribuir esse espaço entre os itens, e só um deles cola o primeiro e o último botão nas bordas.',
    starterCSS: `.container {
  width: 100%;
  max-width: 24rem;
  padding: 1rem;
  background: #e2e8f0;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;

  /* ?? espalhar os botões pela linha ?? */
}

.button {
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
            label: 'div.container',
            text: 'O flex container. Os quatro botões tiram o próprio tamanho do texto e do padding, então o resto da largura é espaço livre para distribuir.'
          },
          {
            label: 'div.button',
            text: 'Quatro flex items. Com o <code>justify-content</code> padrão eles ficam todos grudados na borda esquerda.'
          },
          {
            label: 'display: flex',
            text: 'Já está no código inicial. É ele que coloca os quatro botões em uma única linha.'
          },
          {
            label: 'justify-content: space-between',
            text: 'Coloca o primeiro botão no começo da linha e o último no fim, distribuindo o espaço livre igualmente entre os botões.'
          },
          {
            label: 'justify-content: space-around',
            text: 'Quase a mesma ideia, mas também adiciona metade do espaço nas bordas, então o primeiro botão não encosta na borda esquerda.'
          },
          {
            label: 'justify-content: space-evenly',
            text: 'Distribui o espaço livre igualmente em todo lugar, incluindo as bordas, então o espaço da borda é igual ao espaço entre os botões.'
          },
          {
            label: 'align-items: center',
            text: 'Já está no código inicial. Centraliza os botões na vertical dentro da linha.'
          }
        ],
        tip: 'As três opções com "space" só mudam o que acontece com o espaço que sobrou: <code>space-between</code> gruda o primeiro e o último item nas bordas, <code>space-around</code> deixa metade de um espaço nas bordas, e <code>space-evenly</code> deixa um espaço inteiro nas bordas.'
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
    title: 'Flexbox Dentro de Flexbox',
    description: 'O avatar e o título deveriam ficar lado a lado no header do card, mas estão empilhados.',
    hint: 'O header já tem uma distância entre os itens e centraliza eles na vertical, mas nada disso tem efeito. As duas coisas são ignoradas quando o elemento não é mesmo um flex container.',
    starterCSS: `.card {
  width: 100%;
  max-width: 22rem;
  background: #e2e8f0;
  border-radius: 0.5rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.header {

  /* ?? colocar o avatar e o título lado a lado ?? */
  gap: 0.75rem;
  align-items: center;
}

.avatar {
  padding: 1rem;
  background: #3b82f6;
  color: white;
  border-radius: 0.5rem;
  font-weight: bold;
}

.title {
  margin: 0;
  font-size: 1.25rem;
}

.body {
  flex: 1;
  margin: 0;
  padding: 1rem;
  background: #ec4899;
  color: white;
  border-radius: 0.5rem;
}`,
    solutions: [
      {
        explanation: [
          {
            label: 'div.card',
            text: 'O flex container de fora, na direção coluna. Ele empilha o header e o body na vertical.'
          },
          {
            label: 'div.header',
            text: 'Ele também deveria ser um flex container, mas está faltando o <code>display: flex</code>. Sem ele o avatar e o título são blocos normais.'
          },
          {
            label: 'div.avatar',
            text: 'O primeiro flex item do header. É um selo arredondado com uma letra, e o tamanho vem do texto e do padding.'
          },
          {
            label: 'h2.title',
            text: 'O segundo flex item. É um título de verdade com texto, então o layout é construído a partir do conteúdo em vez de uma barra vazia.'
          },
          {
            label: 'display: flex',
            text: 'A peça que faltava. Transforma o header em flex container, então o avatar e o título viram flex items em uma linha.'
          },
          {
            label: 'gap',
            text: 'Já está no código inicial. Só funciona em um flex container, por isso o gap não fazia nada até o <code>display: flex</code> ser adicionado.'
          },
          {
            label: 'align-items: center',
            text: 'Já está no código inicial. Centraliza o título na vertical em relação ao avatar.'
          },
          {
            label: 'flex: 1',
            text: 'Dentro do .body, ela ocupa a altura que sobra no card, porque o card é um flex container em coluna.'
          }
        ],
        tip: 'Flexbox funciona dentro de flexbox: qualquer elemento pode virar flex container. A regra prática é simples: sempre que você escrever <code>gap</code> ou <code>align-items</code>, confirme se aquele elemento tem mesmo <code>display: flex</code>, senão essas propriedades não fazem nada.'
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
    description: 'Seis cards precisam quebrar em pelo menos duas linhas, todos com a mesma largura inicial, e as linhas devem usar a altura toda da galeria. Este é um chefe: combine wrap, flex-basis e align-content.',
    hint: 'Junte as duas ideias deste mundo: dê a todos os cards a mesma largura inicial com flex-basis e distribua as linhas quebradas com align-content. O gap também precisa ser descontado da largura do card para caberem três cards por linha.',
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

  /* ?? distribuir as linhas quebradas pela altura ?? */
}

.card {
  padding: 0.75rem;
  background: #3b82f6;
  color: white;
  border-radius: 0.5rem;
  font-weight: bold;
  text-align: center;

  /* ?? largura inicial igual para três cards por linha ?? */
}`,
    solutions: [
      {
        explanation: [
          {
            label: 'div.gallery',
            text: 'O flex container. Ele quebra os cards em linhas e distribui essas linhas no eixo cruzado.'
          },
          {
            label: 'flex: 0 0 calc(33.333% - 0.5rem) (.card)',
            text: 'Cada card começa com um terço da linha, menos uma parte do gap. Sem descontar o gap, três cards mais dois gaps ficariam mais largos que a galeria e só dois caberiam.'
          },
          {
            label: 'flex-basis e calc()',
            text: '<code>calc()</code> deixa o navegador fazer a conta com unidades diferentes. Aqui ele mistura porcentagem com comprimento, que é exatamente o que uma grade responsiva precisa.'
          },
          {
            label: 'align-content: space-between',
            text: 'Os cards criam duas linhas. Esta propriedade manda a primeira linha para o topo, a última para o fundo e divide o espaço livre entre elas.'
          },
          {
            label: 'flex-wrap: wrap',
            text: 'Já está no código inicial. É o que transforma seis cards em várias linhas em vez de espremer todos numa só.'
          },
          {
            label: 'gap',
            text: 'O espaço fixo entre os cards. Ele também explica o <code>- 0.5rem</code> dentro do <code>calc()</code>: o gap precisa ser descontado da porcentagem.'
          }
        ],
        tip: 'Para uma grade de cards responsiva com flexbox: <code>flex-wrap: wrap</code>, um <code>flex-basis</code> que já desconta o gap e <code>align-content</code> para distribuir as linhas. A mesma largura de card funciona quando o container fica mais estreito, porque a porcentagem encolhe junto.'
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
    description: 'Construa a casca final do app: uma topbar com a marca à esquerda e o usuário à direita, uma sidebar ao lado de uma área principal que cresce, e um footer no fundo. Cada seção é um flex container, e o app é uma coluna.',
    hint: 'Pense em camadas. O app é uma coluna. A topbar e o layout são linhas. Uma dessas camadas precisa comer a altura livre para o footer chegar ao fundo, e a área principal precisa comer a largura livre ao lado da sidebar.',
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
  /* ?? marca à esquerda, usuário à direita, menu no meio ?? */
  gap: 0.5rem;
  align-items: center;
  padding: 0.5rem;
  background: white;
  border-radius: 0.5rem;
}

.brand {
  font-weight: bold;
}

.menu {
  display: flex;
  gap: 0.5rem;
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
  /* ?? ocupar a largura que sobra ?? */
  padding: 0.75rem;
  background: #3b82f6;
  color: white;
  border-radius: 0.5rem;
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
          {
            label: 'div.app',
            text: 'O flex container externo, na direção <strong>column</strong>. Ele empilha a topbar, o layout e o footer na vertical, e o <code>gap</code> mantém eles separados.'
          },
          {
            label: 'div.topbar',
            text: 'Um flex container aninhado. Ele coloca a marca, o menu e o usuário numa linha. <code>justify-content: space-between</code> manda o primeiro item para a esquerda e o último para a direita.'
          },
          {
            label: 'div.layout',
            text: 'Outro flex container aninhado. Coloca a sidebar e a área principal lado a lado. <code>flex: 1</code> faz essa linha inteira comer a altura livre do app.'
          },
          {
            label: 'flex: 0 0 30% (.sidebar)',
            text: 'A sidebar mantém uma largura inicial de 30% e não cresce nem encolhe. É um navegador fixo ao lado de uma área de conteúdo flexível.'
          },
          {
            label: 'flex: 1 (.content)',
            text: 'A área principal cresce para toda a largura que sobra depois da sidebar e do gap. É isso que torna o layout responsivo sem um único valor em pixels.'
          },
          {
            label: 'footer no fundo',
            text: 'O app é uma coluna e o layout cresce, então o footer é empurrado para o fim. Se o layout não crescesse, <code>margin-top: auto</code> no footer faria o mesmo trabalho.'
          },
          {
            label: 'A interface inteira',
            text: 'Cada nível deste app é um flex container: a página é uma coluna, a topbar é uma linha, o layout é uma linha, e o menu é uma linha dentro da topbar. É assim que interfaces reais são montadas.'
          }
        ],
        tip: 'Layouts reais são feitos de flex containers aninhados. Comece pela direção maior (a coluna do app), depois faça cada seção uma linha ou uma coluna própria. Use <code>flex: 1</code> na parte que deve crescer e <code>flex: 0 0 &lt;tamanho&gt;</code> nas partes que devem manter o tamanho.'
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
    description: 'Monte o cartão de perfil: avatar e nome na mesma linha, status encostado na direita, bio preenchendo a altura livre e o rodapé com as tags à esquerda e o botão Edit à direita.',
    hint: 'Quatro ajustes pequenos: faça o cabeçalho virar uma linha flex, use uma margin automática no status, deixe a bio crescer na coluna do cartão e distribua o rodapé com justify-content.',
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
  gap: 0.75rem;
  align-items: center;

  /* ?? avatar e nome lado a lado ?? */
}

.avatar {
  padding: 0.75rem;
  background: #3b82f6;
  color: white;
  border-radius: 0.5rem;
  font-weight: bold;
}

.name { font-weight: bold; }

.status {
  padding: 0.35rem 0.6rem;
  background: #50fa7b;
  color: #14121f;
  border-radius: 999px;
  font-weight: bold;

  /* ?? empurrar o status para a direita ?? */
}

.bio {
  padding: 0.75rem;
  background: white;
  border-radius: 0.5rem;

  /* ?? preencher a altura livre ?? */
}

.footer {
  gap: 0.5rem;
  align-items: center;

  /* ?? tags à esquerda, edit à direita ?? */
}

.tags { display: flex; gap: 0.35rem; }
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
          {
            label: 'div.profile',
            text: 'O flex container externo, na direção <strong>column</strong>. O <code>min-height</code> dele cria o espaço livre que a bio pode ocupar.'
          },
          {
            label: '.header { display: flex }',
            text: 'O <code>gap</code> e o <code>align-items</code> já estavam escritos, mas não faziam nada porque o cabeçalho era um bloco normal. Agora avatar, nome e status são flex items numa linha.'
          },
          {
            label: 'margin-left: auto (.status)',
            text: 'A margin automática come o espaço entre o nome e o status, então o status encosta na borda direita do cabeçalho.'
          },
          {
            label: 'flex: 1 (.bio)',
            text: 'Na coluna externa isso faz a bio pegar toda a altura que sobra. Com isso o rodapé é empurrado para o fundo sem precisar de margin automática.'
          },
          {
            label: '.footer { display: flex; justify-content: space-between }',
            text: 'O rodapé vira outro flex container aninhado. <code>space-between</code> manda as tags para a esquerda e o botão Edit para a direita.'
          },
          {
            label: 'div.tags',
            text: 'Um terceiro nível de flexbox: o <code>display: flex</code> e o <code>gap</code> dele mantêm as duas tags juntas como um só grupo.'
          }
        ],
        tip: 'Um chefe é só vários quebra-cabeças pequenos empilhados no mesmo layout. Resolva de fora para dentro: primeiro a coluna externa, depois cada linha aninhada e por fim as margins automáticas que decidem quem fica com o espaço livre.'
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
    title: 'Chefe: A Tabela de Planos',
    description: 'O plano em destaque deve ocupar a primeira linha inteira, os outros quatro devem formar duas linhas de dois, as linhas devem ter mais espaço que as colunas e todas devem se espalhar pela altura.',
    hint: 'Um cartão de largura total é um cartão com basis de 100%, e o order pode colocá-lo na primeira linha. Os outros precisam de um basis que caiba dois por linha. Depois defina dois gaps diferentes e espalhe as linhas.',
    starterCSS: `.plans {
  width: 100%;
  max-width: 26rem;
  min-height: 18rem;
  padding: 1rem;
  background: #e2e8f0;
  border-radius: 0.5rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;

  /* ?? gap maior nas linhas e espalhar ?? */
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

  /* ?? primeira linha, largura total ?? */
}`,
    solutions: [
      {
        explanation: [
          {
            label: 'gap: 1rem 0.5rem',
            text: 'O gap das linhas é o dobro do gap das colunas. Como os cartões formam três linhas quebradas, isso deixa a separação entre os planos bem legível.'
          },
          {
            label: 'align-content: space-between',
            text: 'Existem três linhas (a do destaque mais duas normais). Essa propriedade manda a primeira para o topo, a última para o fundo e divide a altura restante entre elas.'
          },
          {
            label: 'flex: 0 0 calc(50% - 0.25rem) (.plan)',
            text: 'Cada plano normal pega metade da linha menos metade do gap de coluna. Dois planos mais um gap cabem exatamente, então eles formam duas colunas.'
          },
          {
            label: 'order: -1 e flex-basis: 100% (.plan-featured)',
            text: 'O plano em destaque já é o primeiro no HTML, mas <code>order: -1</code> garante que ele fique na primeira linha. O basis de 100% faz ele ocupar a linha inteira, empurrando todos os outros para baixo.'
          },
          {
            label: 'flex-wrap: wrap',
            text: 'Já estava no código inicial. Sem a quebra, o plano de largura total espremeria todos os outros na mesma linha.'
          }
        ],
        tip: 'Combine os truques pequenos que você já conhece: um basis de 100% cria uma linha cheia, <code>order</code> escolhe qual vem primeiro, <code>calc()</code> encaixa um número fixo de cartões por linha e <code>align-content</code> distribui as linhas. Isso é um layout responsivo inteiro só com flexbox.'
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
    description: 'Chefe final. Construa uma página com a marca à esquerda, o nav no meio e as ações à direita; um hero que cresce; quatro cartões em duas linhas com um gap maior entre linhas, espalhados pela altura; e um rodapé com uma nota à esquerda e um link à direita.',
    hint: 'Trabalhe de fora para dentro: a página é uma coluna, o hero cresce, a topbar e o rodapé são linhas, os cartões quebram dois por linha e o gap das linhas dos cartões é maior que o das colunas.',
    starterCSS: `.page {
  width: 100%;
  max-width: 26rem;
  min-height: 22rem;
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

  /* ?? marca à esquerda, nav no meio, ações à direita ?? */
}

.brand { font-weight: bold; }
.nav { display: flex; gap: 0.5rem; }
.nav span { color: #475569; font-weight: bold; }
.actions { padding: 0.35rem 0.6rem; background: #3b82f6; color: white; border-radius: 0.5rem; font-weight: bold; }

.hero {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  /* ?? preencher a altura livre da página ?? */
}

.intro { padding: 0.5rem; background: #8b5cf6; color: white; border-radius: 0.5rem; font-weight: bold; }

.cards {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;

  /* ?? gap maior nas linhas, espalhar e preencher o hero ?? */
}

.card {
  padding: 0.75rem;
  background: #3b82f6;
  color: white;
  border-radius: 0.5rem;
  font-weight: bold;
  text-align: center;

  /* ?? dois cartões por linha ?? */
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
          {
            label: 'div.page',
            text: 'A coluna externa. Ela empilha a topbar, o hero e o rodapé, com um gap entre eles.'
          },
          {
            label: '.topbar { justify-content: space-between }',
            text: 'Três grupos vivem nessa linha. <code>space-between</code> coloca a marca na borda esquerda, as ações na borda direita e deixa o nav no meio.'
          },
          {
            label: '.hero { flex: 1 }',
            text: 'O hero cresce para a altura livre da página, então o rodapé vai para o fundo. Dentro dele ficam o título e a área dos cartões.'
          },
          {
            label: '.cards { flex: 1; gap: 1.25rem 0.5rem; align-content: space-between }',
            text: 'A área dos cartões cresce dentro do hero, quebra os cartões em duas linhas, usa um gap de linha maior que o de coluna e espalha as duas linhas do topo ao fundo.'
          },
          {
            label: '.card { flex: 0 0 calc(50% - 0.25rem) }',
            text: 'Dois cartões mais o gap de coluna cabem exatamente na linha. A largura deles é fixa, então a quebra acontece porque existem quatro cartões, não porque eles encolhem.'
          },
          {
            label: '.bottom { display: flex; justify-content: space-between }',
            text: 'O rodapé é mais uma linha aninhada, com a nota à esquerda e o link à direita.'
          }
        ],
        tip: 'Todos os níveis desta página são flex containers: a coluna da página, a linha da topbar, a coluna do hero, a área dos cartões quebrados e a linha do rodapé. Quando um layout parece grande demais, desenhe as caixas primeiro e depois escolha uma direção e uma distribuição para cada caixa.'
      }
    ]
  }
}
