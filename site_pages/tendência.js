document.addEventListener('DOMContentLoaded', function() {
  const SHOWN_ARGS = ["arg0", "arg1"];
  const data = [
  {
    "Texto": "Antes de o anúncio de o CADE era possível observar em o gráfico diário de #CSNA3 que a tendência já ( cont ) http://t.co/ATIuGyLLGq",
    "marks": [
      {
        "word": "tendência",
        "type": "rel"
      },
      {
        "word": "já ( cont )",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "tendência",
        "subscript": "rel"
      },
      {
        "word": "cont",
        "subscript": "parataxis"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "já ( cont )"
    }
  },
  {
    "Texto": "Publiquei estudo de a #HGTX3 em o gráfico diário . Rompendo tendência de baixa ? ? ? Veja em http://t.co/oRA4bA8Qye",
    "marks": [
      {
        "word": "tendência",
        "type": "rel"
      },
      {
        "word": "de baixa",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "tendência",
        "subscript": "rel"
      },
      {
        "word": "baixa",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de baixa"
    }
  },
  {
    "Texto": "antes de confirmar tendência de alta em CIEL3 eu ja sabia que ia aumentar",
    "marks": [
      {
        "word": "tendência",
        "type": "rel"
      },
      {
        "word": "de alta em CIEL3",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "tendência",
        "subscript": "rel"
      },
      {
        "word": "alta",
        "subscript": "obl"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de alta em CIEL3"
    }
  },
  {
    "Texto": "#BBAS3 olhem a linha de tendência mensal , PONTO CRÍTICO ou FUNDO . http://t.co/K03MhZTWlY http://t.co/OCV7jkie8s",
    "marks": [
      {
        "word": "tendência",
        "type": "rel"
      },
      {
        "word": "linha de",
        "type": "arg0"
      },
      {
        "word": "mensal",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "tendência",
        "subscript": "rel"
      },
      {
        "word": "de",
        "subscript": "case"
      },
      {
        "word": "mensal",
        "subscript": "amod"
      }
    ],
    "args": {
      "arg0": "linha de",
      "arg1": "mensal"
    }
  },
  {
    "Texto": "#BBAS3 MENSAL Ponto Crítico porque a linha de tendência mensal foi perdida . Final de o mês vamos confirmar a perda . http://t.co/NAcq3RyTEn",
    "marks": [
      {
        "word": "tendência",
        "type": "rel"
      },
      {
        "word": "linha de",
        "type": "arg0"
      },
      {
        "word": "mensal",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "tendência",
        "subscript": "rel"
      },
      {
        "word": "de",
        "subscript": "case"
      },
      {
        "word": "mensal",
        "subscript": "amod"
      }
    ],
    "args": {
      "arg0": "linha de",
      "arg1": "mensal"
    }
  },
  {
    "Texto": "@ojappadonodo6 Hoje monitorando ABEV3 , BBAS3 , CCRO3 , ITUB4 , PCAR4 , RENT3 , UGPA3 ... Para tendência imediata e de curto prazo ...",
    "marks": [
      {
        "word": "tendência",
        "type": "rel"
      },
      {
        "word": "imediata e de curto prazo",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "tendência",
        "subscript": "rel"
      },
      {
        "word": "curto",
        "subscript": "parataxis"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "imediata e de curto prazo"
    }
  },
  {
    "Texto": "GGBR4 perde linha de tendência e entra em alerta http://t.co/9Hti4sHxJW",
    "marks": [
      {
        "word": "tendência",
        "type": "rel"
      },
      {
        "word": "linha de",
        "type": "arg0"
      }
    ],
    "subscripts": [
      {
        "word": "tendência",
        "subscript": "rel"
      },
      {
        "word": "de",
        "subscript": "case"
      }
    ],
    "args": {
      "arg0": "linha de",
      "arg1": "-"
    }
  },
  {
    "Texto": "Vale5 - Diário ::: Linha de Tendência de baixa , zona de sobre-venda ! http://t.co/m5dEkcVXf3",
    "marks": [
      {
        "word": "Tendência",
        "type": "rel"
      },
      {
        "word": "Linha de",
        "type": "arg0"
      },
      {
        "word": "de baixa",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "Tendência",
        "subscript": "rel"
      },
      {
        "word": "de",
        "subscript": "case"
      },
      {
        "word": "baixa",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "Linha de",
      "arg1": "de baixa"
    }
  },
  {
    "Texto": "@clubedopairico Zé , qual seria a confirmação de que os shootings stars estão indicando uma reversão de tendência para a PETR4 ? ?",
    "marks": [
      {
        "word": "tendência",
        "type": "rel"
      },
      {
        "word": "reversão de",
        "type": "arg0"
      },
      {
        "word": "para a PETR4",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "tendência",
        "subscript": "rel"
      },
      {
        "word": "de",
        "subscript": "mark"
      },
      {
        "word": "a",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "reversão de",
      "arg1": "para a PETR4"
    }
  },
  {
    "Texto": "Fevereiro 2014 : Ainda não é o momento de entrar : VALE5 , CSNA3 ou PETR4 . Tendência e resultados favoráveis : ESTC3 , PSSA3 , EMBR3 e WEGE3 .",
    "marks": [
      {
        "word": "Tendência",
        "type": "rel"
      },
      {
        "word": "e resultados favoráveis",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "Tendência",
        "subscript": "rel"
      },
      {
        "word": "favoráveis",
        "subscript": "amod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "e resultados favoráveis"
    }
  },
  {
    "Texto": "#CRUZ3 : pode estar revertendo tendência de baixa após romper canal . Melhor se superar os 23.52 . #Whoknows ? http://t.co/tZVAMpMQVG",
    "marks": [
      {
        "word": "tendência",
        "type": "rel"
      },
      {
        "word": "revertendo",
        "type": "arg0"
      },
      {
        "word": "de baixa após romper canal",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "tendência",
        "subscript": "rel"
      },
      {
        "word": "revertendo",
        "subscript": "xcomp"
      },
      {
        "word": "baixa",
        "subscript": "obj"
      }
    ],
    "args": {
      "arg0": "revertendo",
      "arg1": "de baixa após romper canal"
    }
  },
  {
    "Texto": "LLXL3 vai fazer fundo duplo se ela não consegue romper os 0.98 . Desde 09-2010 em linda tend. de baixa .",
    "marks": [
      {
        "word": "tendência",
        "type": "rel"
      },
      {
        "word": "em linda",
        "type": "arg0"
      },
      {
        "word": "de baixa",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "tendência",
        "subscript": "rel"
      },
      {
        "word": "linda",
        "subscript": "amod"
      },
      {
        "word": "baixa",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "em linda",
      "arg1": "de baixa"
    }
  },
  {
    "Texto": "Entrei em #petr4 , com projeção de crescimento . #hype3 ta maravilhosa , continua em a tendência de alta .",
    "marks": [
      {
        "word": "tendência",
        "type": "rel"
      },
      {
        "word": "continua em a",
        "type": "arg0"
      },
      {
        "word": "de alta",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "tendência",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "det"
      },
      {
        "word": "alta",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "continua em a",
      "arg1": "de alta"
    }
  },
  {
    "Texto": "Em o diário #VALE5 deixou a tendência de baixa para trás mas permanece tendo problema com a #MediaROCK - Leia mais em http://t.co/eMq6N9TOJC",
    "marks": [
      {
        "word": "tendência",
        "type": "rel"
      },
      {
        "word": "deixou a",
        "type": "arg0"
      },
      {
        "word": "de baixa",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "tendência",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "det"
      },
      {
        "word": "baixa",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "deixou a",
      "arg1": "de baixa"
    }
  },
  {
    "Texto": "Ontem em o diário de a #PETR4 fêz candle de reversão de tendência e respeirou suporte em os 15,4 e alvos 16,5 e 17,2 http://t.co/ReowwtCzqj",
    "marks": [
      {
        "word": "tendência",
        "type": "rel"
      },
      {
        "word": "reversão de",
        "type": "arg0"
      }
    ],
    "subscripts": [
      {
        "word": "tendência",
        "subscript": "rel"
      },
      {
        "word": "de",
        "subscript": "case"
      }
    ],
    "args": {
      "arg0": "reversão de",
      "arg1": "-"
    }
  },
  {
    "Texto": "#HYPE3 ficando bonita para sair de a tendência de baixa , descontão fabuloso . Em os ~ 15,8 deve corrigir e de ai vamos buscar o fundo para entrar .",
    "marks": [
      {
        "word": "tendência",
        "type": "rel"
      },
      {
        "word": "sair de a",
        "type": "arg0"
      },
      {
        "word": "de baixa",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "tendência",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "det"
      },
      {
        "word": "baixa",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "sair de a",
      "arg1": "de baixa"
    }
  },
  {
    "Texto": "@RaphaFigueredo tem que romper os 9.03 inicialmente . CTIP3 também me parece uma boa . Tend. alta e após correção , próximo a mm20 .",
    "marks": [
      {
        "word": "tendência",
        "type": "rel"
      },
      {
        "word": "alta",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "tendência",
        "subscript": "rel"
      },
      {
        "word": "alta",
        "subscript": "amod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "alta"
    }
  },
  {
    "Texto": "@Andresmoraes @YouTube Segundo violino em a estc3 . Ser estopado em um ativo com essa tendência de alta doi ...",
    "marks": [
      {
        "word": "tendência",
        "type": "rel"
      },
      {
        "word": "de alta",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "tendência",
        "subscript": "rel"
      },
      {
        "word": "alta",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de alta"
    }
  }
];

  const tableBody = document.getElementById('relations-table').getElementsByTagName('tbody')[0];
  tableBody.innerHTML = ''; // evita duplicar quando o HTML já trouxe linhas

  data.forEach((item, index) => {
    let textWithMarks = item.Texto;

    // aplicar cores
    item.marks.forEach(mark => {
      const pattern = new RegExp(`\b(${
        mark.word
      })\b`, 'g');
      textWithMarks = textWithMarks.replace(pattern, `<span class="${mark.type}">$1</span>`);
    });

    // subscritos
    item.subscripts.forEach(sub => {
      const pattern = new RegExp(`\b(${
        sub.word
      })\b`, 'g');
      textWithMarks = textWithMarks.replace(pattern, `$1<sub>${sub.subscript}</sub>`);
    });

    // monta a linha com # + Args mostrados + Texto
    const row = document.createElement('tr');
    let cells = `<td>${index + 1}</td>`;
    SHOWN_ARGS.forEach(a => {
      const v = (item.args[a] ?? '-');
      const cls = (v && v !== '-') ? a : '';
      cells += `<td class="${cls}">${v}</td>`;
    });
    cells += `<td>${textWithMarks}</td>`;
    row.innerHTML = cells;
    tableBody.appendChild(row);

    // linha divisória (colspan dinâmico)
    if (index < data.length - 1) {
      const dividerRow = document.createElement('tr');
      const dividerCell = document.createElement('td');
      dividerCell.colSpan = SHOWN_ARGS.length + 2; // # + args + Texto
      dividerCell.style.borderBottom = '1px solid #ccc';
      dividerRow.appendChild(dividerCell);
      tableBody.appendChild(dividerRow);
    }
  });
});