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
  width: 300px;
  height: 200px;
  background: #e2e8f0;
  border-radius: 8px;
  display: flex;

  /* ?? centralizar a caixa ?? */
}

.box {
  width: 80px;
  height: 80px;
  background: #3b82f6;
  border-radius: 8px;
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
            label: 'width / height',
            text: 'O container tem 300x200px e a caixa tem 80x80px. O flexbox centraliza o <em>espaço livre</em> em volta do item, então o tamanho da caixa diz só o quanto ela é grande, nunca onde ela fica.'
          },
          {
            label: 'border-radius: 8px',
            text: 'Arredonda os cantos. Muda só a aparência e nunca o layout, um bom exemplo de uma propriedade que pode ser adicionada sem quebrar o quebra-cabeça.'
          }
        ],
        tip: 'Eixo principal vs eixo cruzado: o eixo principal é a direção escolhida por <code>flex-direction</code> (<code>row</code> = horizontal, <code>column</code> = vertical). <code>justify-content</code> age no eixo principal e <code>align-items</code> age no eixo cruzado. É por isso que as mesmas duas propriedades conseguem centralizar uma caixa nas duas direções.'
      }
    ]
  },
  2: {
    title: 'Coluna com Flexbox',
    description: 'Empilhe as três caixas na vertical, com espaço por igual entre elas e centralizadas na horizontal.',
    hint: 'As três caixas precisam ficar uma embaixo da outra em vez de lado a lado, espalhadas pela altura do container. O flexbox tem uma propriedade que muda a direção do fluxo e outra que espalha os itens dentro dele.',
    starterCSS: `.container {
  width: 200px;
  height: 280px;
  background: #e2e8f0;
  border-radius: 8px;
  display: flex;

  /* ?? empilhar na vertical, espaço por igual, centralizar ?? */
}

.box {
  width: 60px;
  height: 60px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: sans-serif;
  font-weight: bold;
  color: white;
}

.box-1 { background: #3b82f6; }
.box-2 { background: #8b5cf6; }
.box-3 { background: #ec4899; }`,
    solutions: [
      {
        explanation: [
          {
            label: 'div.container',
            text: 'O flex container. Ele tem 200x280px e as três caixas ocupam 180px dessa altura, então sobram 100px de espaço livre para distribuir na vertical.'
          },
          {
            label: 'div.box.box-1 / 2 / 3',
            text: 'Três flex items. As classes extras só dão uma cor diferente para cada um, e os números 1, 2 e 3 são apenas texto dentro das caixas.'
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
            label: '.box { display: flex }',
            text: 'Cada caixa também é um flex container. É assim que o número 1, 2 ou 3 fica centralizado dentro do seu quadrado.'
          },
          {
            label: '.box { justify-content: center; align-items: center }',
            text: 'As mesmas duas propriedades aplicadas ao número: uma centraliza na horizontal (eixo principal) e a outra na vertical (eixo cruzado). O flexbox se comporta igual em todos os níveis da página.'
          }
        ],
        tip: 'Os nomes dos valores dizem exatamente o que eles fazem: <code>space</code> significa espaço entre os itens e <code>evenly</code> significa quantidades iguais em todo lugar, inclusive nas bordas. Como a direção mudou mas as propriedades não, dá para usar o mesmo raciocínio em linhas e em colunas.'
      }
    ]
  },
  3: {
    title: 'Espaçamento com gap',
    description: 'Coloque as três caixas em uma linha horizontal com exatamente 20px de espaço entre elas, centralizadas no container.',
    hint: 'As três caixas precisam ficar em linha, centralizadas como um grupo, com exatamente 20px entre cada par. O flexbox tem uma propriedade para o espaço entre os itens e outra para centralizar o grupo.',
    starterCSS: `.container {
  width: 320px;
  height: 120px;
  background: #e2e8f0;
  border-radius: 8px;
  display: flex;

  /* ?? centralizar, gap de 20px ?? */
}

.box {
  width: 70px;
  height: 70px;
  border-radius: 8px;
}

.box-1 { background: #3b82f6; }
.box-2 { background: #8b5cf6; }
.box-3 { background: #ec4899; }`,
    solutions: [
      {
        explanation: [
          {
            label: 'div.container',
            text: 'O flex container. Ele tem 320px de largura, então depois das caixas e dos gaps ainda sobra espaço livre para dividir.'
          },
          {
            label: 'div.box',
            text: 'Três flex items de 70x70px cada. Todos têm o mesmo tamanho, então a linha fica regular.'
          },
          {
            label: 'display: flex',
            text: 'Já está no código inicial. Ele coloca as três caixas em uma linha horizontal, porque <code>row</code> é a direção padrão do flexbox.'
          },
          {
            label: 'justify-content: center',
            text: 'Centraliza a linha ao longo do eixo principal (horizontal). A linha mede 3 x 70px + 2 x 20px = 250px, então os 70px de espaço livre que sobram se dividem em 35px na esquerda e 35px na direita.'
          },
          {
            label: 'align-items: center',
            text: 'Centraliza as caixas no eixo cruzado (vertical), então elas ficam no meio da altura de 120px do container.'
          },
          {
            label: 'gap: 20px',
            text: 'Coloca exatamente 20px entre cada par de itens no eixo principal. Nada é adicionado antes da primeira caixa nem depois da última, e nenhuma margin é necessária.'
          }
        ],
        tip: 'A propriedade <code>gap</code> é o jeito moderno de espaçar flex items. O truque antigo era <code>margin-right: 20px</code> em cada caixa mais <code>margin-right: -20px</code> no container para tirar o espaço extra do final. Com <code>gap</code> você nunca precisa desfazer nada, e <code>row-gap</code> / <code>column-gap</code> deixam controlar cada eixo separadamente.'
      }
    ]
  },
  4: {
    title: 'Quebra de Linha com Flexbox',
    description: 'As caixas transbordam o container. Faça elas quebrarem para a próxima linha quando não houver espaço, com gaps de 10px.',
    hint: 'As caixas devem formar três linhas de duas em vez de uma linha comprida. Quando os itens não cabem, o flexbox pode empurrá-los para uma nova linha, e a distância entre as linhas também pode ser controlada.',
    starterCSS: `.container {
  width: 200px;
  padding: 10px;
  background: #e2e8f0;
  border-radius: 8px;
  display: flex;

  /* ?? quebrar linha e gap de 10px ?? */
}

.box {
  width: 55px;
  height: 55px;
  background: #3b82f6;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: sans-serif;
  font-weight: bold;
  color: white;
}`,
    solutions: [
      {
        explanation: [
          {
            label: 'div.container',
            text: 'O flex container. Ele tem 200px de largura com 10px de padding de cada lado, então sobram só 180px de verdade para as caixas.'
          },
          {
            label: 'div.box',
            text: 'Seis flex items de 55px cada (6 x 55px = 330px), que é mais do que os 180px disponíveis. Alguma coisa tem que ceder: é exatamente isso que o <code>flex-wrap</code> resolve.'
          },
          {
            label: 'display: flex',
            text: 'Já está no código inicial. Ele transforma as seis caixas em flex items em vez de blocos normais.'
          },
          {
            label: 'flex-wrap: wrap',
            text: 'Por padrão os flex items <em>encolhem</em> (<code>flex-shrink: 1</code>) para caber em uma única linha. Com <code>wrap</code>, o item que não cabe vai para uma nova linha em vez de ser espremido.'
          },
          {
            label: 'gap: 10px',
            text: 'Adiciona 10px entre os itens de uma linha e entre as próprias linhas, então o desenho das letras fica regular.'
          },
          {
            label: 'padding: 10px',
            text: 'Espaço <em>dentro</em> do container, entre a borda e o conteúdo. O padding pertence ao elemento, enquanto a margin fica fora dele.'
          }
        ],
        tip: 'A quebra de linha acontece sempre no eixo principal: em um layout de linha os itens viram novas linhas, e em um layout de coluna eles viram novas colunas. Mude a largura do container no editor e veja as linhas se reorganizando sozinhas.'
      }
    ]
  },
  5: {
    title: 'Propriedade order',
    description: 'As caixas aparecem na ordem do HTML, 1-2-3. Usando a propriedade order do CSS, inverta para aparecer como 3-2-1 sem mudar o HTML.',
    hint: 'A posição final de um item não precisa ser a posição dele no código. O flexbox pode reorganizar os itens sem mexer no HTML.',
    starterCSS: `.container {
  width: 280px;
  height: 100px;
  background: #e2e8f0;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0 15px;
}

.box {
  width: 60px;
  height: 60px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: sans-serif;
  font-weight: bold;
  color: white;
  font-size: 1.2rem;
}

.box-1 { background: #3b82f6; /* ?? inverter a ordem ?? */ }
.box-2 { background: #8b5cf6; /* ?? inverter a ordem ?? */ }
.box-3 { background: #ec4899; /* ?? inverter a ordem ?? */ }`,
    solutions: [
      {
        explanation: [
          {
            label: 'div.container',
            text: 'O flex container. Ele já usa <code>align-items: center</code>, <code>gap: 10px</code> e <code>padding: 0 15px</code> (só esquerda e direita), então você só precisa se preocupar com a ordem.'
          },
          {
            label: 'div.box.box-1 / 2 / 3',
            text: 'Três flex items. No HTML eles aparecem como 1, 2, 3; na tela vão aparecer como 3, 2, 1.'
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
            label: 'gap: 10px',
            text: 'O espaço entre as caixas continua sendo 10px, não importa em que ordem elas são mostradas, porque o gap é medido entre os itens, não entre as tags.'
          }
        ],
        tip: 'A propriedade <code>order</code> muda só o que você <em>vê</em>, nunca o HTML. A ordem do DOM continua sendo 1, 2, 3, e é essa a ordem usada por leitores de tela e pela tecla Tab, então, quando possível, mantenha a ordem do HTML igual à ordem visual.'
      }
    ]
  },
  6: {
    title: 'Flexbox Responsivo',
    description: 'Faça os seis cards preencherem o container de forma responsiva, quebrando para novas linhas para sempre caberem, qualquer que seja a largura.',
    hint: 'Cada card deve ser o mais largo possível, mas nunca mais estreito que 100px, e os cards devem passar para a próxima linha quando não couber. O flexbox decide o tamanho dos itens e também se eles quebram em novas linhas.',
    starterCSS: `.grid {
  width: 340px;
  background: #e2e8f0;
  border-radius: 8px;
  padding: 10px;
  display: flex;

  /* ?? layout responsivo com flexbox ?? */
}

.card {
  background: #3b82f6;
  color: white;
  border-radius: 6px;
  padding: 20px;
  text-align: center;
  font-family: sans-serif;
  font-weight: bold;
  font-size: 0.85rem;
}`,
    solutions: [
      {
        explanation: [
          {
            label: 'div.grid',
            text: 'O flex container. Ele tem 340px de largura com 10px de padding, então 320px ficam disponíveis para os cards. A classe se chama <code>grid</code>, mas o layout é feito com flexbox.'
          },
          {
            label: 'div.card',
            text: 'Seis flex items. Cada card tem 20px de padding e uma largura mínima, então o layout sempre tem um tamanho confortável para trabalhar.'
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
            label: 'gap: 10px',
            text: 'Exatamente 10px entre os cards, tanto na horizontal quanto na vertical.'
          },
          {
            label: 'min-width: 100px',
            text: 'A menor largura que um card pode ter. Os cards nunca ficam com menos de 100px, o que mantém o texto legível.'
          },
          {
            label: 'flex: 1',
            text: 'Atalho para <code>flex: 1 1 0%</code>: <code>grow: 1</code> (o card cresce para dividir o espaço livre), <code>shrink: 1</code> (ele pode encolher) e <code>basis: 0%</code> (ele começa do zero e o crescimento define o tamanho final). Aqui é o mesmo que escrever <code>flex: 1 1 100px</code>, porque o <code>min-width</code> já garante os 100px.'
          },
          {
            label: 'padding: 20px / text-align: center',
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
            label: 'minmax(100px, 1fr)',
            text: 'Cada coluna tem no mínimo 100px de largura (<code>min</code>) e recebe uma parte igual do espaço livre (<code>1fr</code>, uma <em>fração</em>).'
          },
          {
            label: 'auto-fill',
            text: 'Mantém as colunas vazias quando sobra espaço, então os cards conservam o tamanho mínimo em vez de esticarem demais.'
          },
          {
            label: 'gap: 10px',
            text: 'O mesmo espaçamento entre as trilhas (as linhas e colunas) e os cards.'
          },
          {
            label: '.card { padding: 20px }',
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
  width: 360px;
  height: 100px;
  background: #e2e8f0;
  border-radius: 8px;
  display: flex;
  gap: 10px;

  /* ?? deixar a barra roxa com o dobro da largura ?? */
}

.bar {
  height: 100%;
  border-radius: 6px;
}

.bar-1 { background: #3b82f6; }
.bar-2 { background: #8b5cf6; }
.bar-3 { background: #ec4899; }`,
    solutions: [
      {
        explanation: [
          {
            label: 'div.container',
            text: 'O flex container. Tem 360px de largura e um gap de 10px, então as três barras dividem 340px de espaço livre.'
          },
          {
            label: 'div.bar',
            text: 'Três flex items. Eles não têm largura própria, então o tamanho vem só da propriedade flex.'
          },
          {
            label: 'display: flex',
            text: 'Já está no código inicial. É ele que transforma o container em flex container e as barras em flex items.'
          },
          {
            label: 'flex: 1',
            text: 'Atalho de <code>flex: 1 1 0%</code>. Cada barra com <code>flex: 1</code> recebe uma parte do espaço livre, e a base de 0% faz o tamanho depender só das partes.'
          },
          {
            label: 'flex: 2',
            text: 'A barra roxa tem o dobro do fator de crescimento, então recebe duas partes. Aqui são 4 partes no total (1 + 2 + 1) e cada uma vale 340 / 4 = 85px.'
          },
          {
            label: 'flex-grow',
            text: 'O número que define a parte do espaço livre que cada item recebe. Só importa quando existe espaço livre para dividir.'
          },
          {
            label: 'gap: 10px',
            text: 'Os 10px entre as barras não fazem parte do espaço livre: as barras dividem 340px e o gap fica por fora dessa conta.'
          }
        ],
        tip: 'O flex-grow funciona como uma cota do espaço que sobrou: quanto maior o número, maior a fatia. Se todas as barras tivessem <code>flex: 1</code> elas teriam a mesma largura, e trocar apenas um número para 2 deixa aquela barra exatamente com o dobro da largura das outras.'
      }
    ]
  },
  8: {
    title: 'Espalhando Itens com space-between',
    description: 'Os quatro botões estão grudados na esquerda. Espalhe eles pela linha inteira com o mesmo espaço entre eles.',
    hint: 'Existe espaço vazio dentro do container e os quatro botões precisam usar tudo. O flexbox tem três jeitos de distribuir esse espaço entre os itens, e só um deles cola o primeiro e o último botão nas bordas.',
    starterCSS: `.container {
  width: 400px;
  height: 80px;
  background: #e2e8f0;
  border-radius: 8px;
  display: flex;
  align-items: center;

  /* ?? espalhar os botões pela linha ?? */
}

.button {
  width: 40px;
  height: 40px;
  background: #3b82f6;
  border-radius: 6px;
}`,
    solutions: [
      {
        explanation: [
          {
            label: 'div.container',
            text: 'O flex container. Tem 400px de largura e os quatro botões ocupam 160px, então sobram 240px de espaço livre para distribuir.'
          },
          {
            label: 'div.button',
            text: 'Quatro flex items de 40x40px. Com o <code>justify-content</code> padrão eles ficam todos grudados na borda esquerda.'
          },
          {
            label: 'display: flex',
            text: 'Já está no código inicial. É ele que coloca os quatro botões em uma única linha.'
          },
          {
            label: 'justify-content: space-between',
            text: 'Coloca o primeiro botão no começo da linha e o último no fim, distribuindo o espaço livre igualmente entre os botões. Aqui isso dá 240px / 3 = 80px entre cada par.'
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
            text: 'Já está no código inicial. Centraliza os botões na vertical dentro da linha de 80px de altura.'
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
  width: 300px;
  height: 200px;
  background: #e2e8f0;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 20px;

  /* ?? mover só a caixa roxa para baixo ?? */
}

.box {
  width: 60px;
  height: 60px;
  border-radius: 8px;
}

.box-1 { background: #3b82f6; }
.box-2 { background: #8b5cf6; }
.box-3 { background: #ec4899; }`,
    solutions: [
      {
        explanation: [
          {
            label: 'div.container',
            text: 'O flex container. Tem 300x200px e as caixas têm 60x60px, então sobra espaço para movê-las para cima e para baixo.'
          },
          {
            label: 'div.box',
            text: 'Três flex items. Todos têm 60x60px, então o que muda é a posição na vertical, nunca o tamanho.'
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
  width: 320px;
  height: 240px;
  background: #e2e8f0;
  border-radius: 8px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  /* ?? empurrar o footer para baixo ?? */
}

.content {
  height: 80px;
  background: #3b82f6;
  border-radius: 6px;
}

.footer {
  height: 40px;
  background: #8b5cf6;
  border-radius: 6px;
}`,
    solutions: [
      {
        explanation: [
          {
            label: 'div.page',
            text: 'O flex container, na direção coluna. Tem 240px de altura com 16px de padding, então a área interna tem 208px.'
          },
          {
            label: 'div.content',
            text: 'O primeiro flex item. Tem 80px de altura e fica no topo da coluna.'
          },
          {
            label: 'div.footer',
            text: 'O segundo flex item. Tem 40px de altura e deve ficar na parte de baixo da coluna.'
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
            label: 'gap: 16px',
            text: 'O espaço mínimo entre os itens. A margem automática não tira o gap, ela soma todo o espaço extra em cima dele.'
          }
        ],
        tip: 'A margem automática é o truque do flexbox para empurrar um elemento para o fim de uma coluna. É a mesma ideia da receita "footer no rodapé da página" que todo framework de CSS usa.'
      }
    ]
  },
  11: {
    title: 'Mantendo um Tamanho com flex-shrink',
    description: 'O botão roxo está sendo espremido. Mantenha ele com 80px de largura enquanto a barra azul longa encolhe para caber.',
    hint: 'Quando falta espaço, o flexbox encolhe os itens para tudo caber. Um item precisa manter o tamanho de qualquer jeito, e existe uma propriedade do flexbox que protege ele de encolher.',
    starterCSS: `.container {
  width: 260px;
  height: 80px;
  background: #e2e8f0;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 10px;

  /* ?? manter o botão com 80px ?? */
}

.bar {
  width: 300px;
  height: 40px;
  background: #3b82f6;
  border-radius: 6px;
}

.button {
  width: 80px;
  height: 40px;
  background: #8b5cf6;
  border-radius: 6px;
}`,
    solutions: [
      {
        explanation: [
          {
            label: 'div.container',
            text: 'O flex container. Tem 260px de largura, então com o gap de 10px sobram só 250px para os dois itens, mas eles pedem 380px.'
          },
          {
            label: 'div.bar',
            text: 'O primeiro flex item. Quer ter 300px de largura, mais do que o espaço disponível, então precisa encolher.'
          },
          {
            label: 'div.button',
            text: 'O segundo flex item. Quer ter 80px de largura, e é ele que precisa manter esse tamanho.'
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
            text: 'O valor padrão. Quando falta espaço, todo item com <code>flex-shrink: 1</code> cede uma parte do seu tamanho, de forma proporcional à sua largura.'
          },
          {
            label: 'gap: 10px',
            text: 'Os 10px entre os itens nunca são flexíveis: eles não encolhem, estão sempre lá.'
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
  width: 320px;
  height: 200px;
  background: #e2e8f0;
  border-radius: 8px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.header {

  /* ?? colocar o avatar e o título lado a lado ?? */
  gap: 12px;
  align-items: center;
}

.avatar {
  width: 48px;
  height: 48px;
  background: #3b82f6;
  border-radius: 50%;
}

.title {
  width: 160px;
  height: 16px;
  background: #8b5cf6;
  border-radius: 4px;
}

.body {
  flex: 1;
  background: #ec4899;
  border-radius: 6px;
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
            text: 'O primeiro flex item do header. Tem 48x48px, o avatar redondo.'
          },
          {
            label: 'div.title',
            text: 'O segundo flex item. Tem 160x16px, a barra roxa que faz o papel de título.'
          },
          {
            label: 'display: flex',
            text: 'A peça que faltava. Transforma o header em flex container, então o avatar e o título viram flex items em uma linha.'
          },
          {
            label: 'gap: 12px',
            text: 'Já está no código inicial. Só funciona em um flex container, por isso o gap não fazia nada até o <code>display: flex</code> ser adicionado.'
          },
          {
            label: 'align-items: center',
            text: 'Já está no código inicial. Centraliza o título na vertical em relação ao avatar, que é mais alto.'
          },
          {
            label: 'flex: 1',
            text: 'Dentro do .body, ela ocupa a altura que sobra no card, porque o card é um flex container em coluna.'
          }
        ],
        tip: 'Flexbox funciona dentro de flexbox: qualquer elemento pode virar flex container. A regra prática é simples: sempre que você escrever <code>gap</code> ou <code>align-items</code>, confirme se aquele elemento tem mesmo <code>display: flex</code>, senão essas propriedades não fazem nada.'
      }
    ]
  }
}
