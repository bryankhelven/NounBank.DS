document.addEventListener('DOMContentLoaded', function() {
  const SHOWN_ARGS = ["arg0", "arg1", "arg2"];
  const data = [
  {
    "Texto": "Notas gerais A COMPANHIA SIDERÚRGICA NACIONAL ( CSNA3 ) abriu um novo programa de recompra de até 10 % suas ... http://t.co/4O0ePAN2Av",
    "marks": [
      {
        "word": "recompra",
        "type": "rel"
      },
      {
        "word": "A COMPANHIA SIDERÚRGICA NACIONAL",
        "type": "arg0"
      },
      {
        "word": "de até 10 % suas",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "recompra",
        "subscript": "rel"
      },
      {
        "word": "NACIONAL",
        "subscript": "flat:name"
      },
      {
        "word": "até",
        "subscript": "nmod:strunc"
      }
    ],
    "args": {
      "arg0": "A COMPANHIA SIDERÚRGICA NACIONAL",
      "arg1": "de até 10 % suas",
      "arg2": "-"
    }
  },
  {
    "Texto": "Pica entrou em o short seller de CSNA3 com o anuncio de o programa de recompra de ações , + 12 %",
    "marks": [
      {
        "word": "recompra",
        "type": "rel"
      },
      {
        "word": "de ações",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "recompra",
        "subscript": "rel"
      },
      {
        "word": "ações",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de ações",
      "arg2": "-"
    }
  },
  {
    "Texto": "#CSN ( CSNA3 ) : Conselho aprova recompra de até 70.2 mi ações em 1 mês",
    "marks": [
      {
        "word": "recompra",
        "type": "rel"
      },
      {
        "word": "ações",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "recompra",
        "subscript": "rel"
      },
      {
        "word": "ações",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "ações",
      "arg2": "-"
    }
  },
  {
    "Texto": "$FIBR3 - Fibria ( fibr-nm ) - Conclusao De Recompra De o Bond 2020 http://t.co/hykq9oFahY",
    "marks": [
      {
        "word": "Recompra",
        "type": "rel"
      },
      {
        "word": "De o Bond 2020",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "Recompra",
        "subscript": "rel"
      },
      {
        "word": "o",
        "subscript": "flat:name"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "De o Bond 2020",
      "arg2": "-"
    }
  },
  {
    "Texto": "TEMPO REAL : China puxa alta de a Vale , CSN sobe mais de 3 % com recompra de ações : Acompanhe aq ... http://t.co/dSOg2frxJQ #infomoney #vale5",
    "marks": [
      {
        "word": "recompra",
        "type": "rel"
      },
      {
        "word": "de ações",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "recompra",
        "subscript": "rel"
      },
      {
        "word": "ações",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de ações",
      "arg2": "-"
    }
  },
  {
    "Texto": "será que a csna3 vai lançar o terceiro programa de recompra ?",
    "marks": [
      {
        "word": "recompra",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "recompra",
        "subscript": "rel"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "-",
      "arg2": "-"
    }
  },
  {
    "Texto": "RT @chrinvestor : #BRFS3 anunciou a recompra de até 1 milhão de ações . O surpreendente é o período p/ a recompra ... apenas 1 semana ( 20/mai - …",
    "marks": [
      {
        "word": "recompra",
        "type": "rel"
      },
      {
        "word": "de ações",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "recompra",
        "subscript": "rel"
      },
      {
        "word": "ações",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de ações",
      "arg2": "-"
    }
  },
  {
    "Texto": "RT @chrinvestor : #BRFS3 anunciou a recompra de até 1 milhão de ações . O surpreendente é o período p/ a recompra ... apenas 1 semana ( 20/mai - …",
    "marks": [
      {
        "word": "recompra",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "recompra",
        "subscript": "rel"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "-",
      "arg2": "-"
    }
  },
  {
    "Texto": "O mistério de a #CSN : o que explica três recompras monstruosas de #ações em apenas dois meses ( e se ocorreram ) ? http://t.co/rcYtFUyuLr $CSNA3",
    "marks": [
      {
        "word": "recompra",
        "type": "rel"
      },
      {
        "word": "de #ações",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "recompra",
        "subscript": "rel"
      },
      {
        "word": "ações",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de #ações",
      "arg2": "-"
    }
  },
  {
    "Texto": "#petr4Recompra : R$ 15,17 . Hoje LAVEI A ÉGUA !",
    "marks": [
      {
        "word": "Recompra",
        "type": "rel"
      },
      {
        "word": "#petr4",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "Recompra",
        "subscript": "rel"
      },
      {
        "word": "petr4",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "#petr4",
      "arg2": "-"
    }
  },
  {
    "Texto": "LAME4 em o swing acima de R$ 14,85 parece dar compra ! Recompra de ações é mais um indicador ...",
    "marks": [
      {
        "word": "Recompra",
        "type": "rel"
      },
      {
        "word": "de ações",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "Recompra",
        "subscript": "rel"
      },
      {
        "word": "ações",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de ações",
      "arg2": "-"
    }
  },
  {
    "Texto": "$BRFS3 - Brf Sa ( brfs-nm ) - Resultados De a Oferta De Recompra http://t.co/DBLJswVFeZ",
    "marks": [
      {
        "word": "Recompra",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "Recompra",
        "subscript": "rel"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "-",
      "arg2": "-"
    }
  },
  {
    "Texto": "#CSNA3 Programa de Recompra de acoes ate 70.205.661 acoes . Prazo para a realização de as operações de 14/03/2014 e 14/04/2014 .",
    "marks": [
      {
        "word": "Recompra",
        "type": "rel"
      },
      {
        "word": "de acoes",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "Recompra",
        "subscript": "rel"
      },
      {
        "word": "acoes",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de acoes",
      "arg2": "-"
    }
  },
  {
    "Texto": "$MRVE3 - Mrv ( mrve-nm ) - Novo Programa De Recompra De Acoes http://t.co/qxl3SJQ6yo",
    "marks": [
      {
        "word": "Recompra",
        "type": "rel"
      },
      {
        "word": "De Acoes",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "Recompra",
        "subscript": "rel"
      },
      {
        "word": "Acoes",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "De Acoes",
      "arg2": "-"
    }
  },
  {
    "Texto": "CSN boa oportunidade com o anúncio de recompra de 70,2 milhões de ações por a empresa . Valeu ficar bem de olho . #CSNA3",
    "marks": [
      {
        "word": "recompra",
        "type": "rel"
      },
      {
        "word": "por a empresa",
        "type": "arg0"
      },
      {
        "word": "de 70,2 milhões de ações",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "recompra",
        "subscript": "rel"
      },
      {
        "word": "empresa",
        "subscript": "nmod"
      },
      {
        "word": "70",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "por a empresa",
      "arg1": "de 70,2 milhões de ações",
      "arg2": "-"
    }
  },
  {
    "Texto": "CSNA3 deve subir bem com dados bons de a China e anúncio de recompra de 10 % de as ações em os próximos dias",
    "marks": [
      {
        "word": "recompra",
        "type": "rel"
      },
      {
        "word": "de 10 % de as ações",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "recompra",
        "subscript": "rel"
      },
      {
        "word": "10",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de 10 % de as ações",
      "arg2": "-"
    }
  },
  {
    "Texto": "Momento de comprar #csna3 Valor Econômico - CSN aprova novo programa para recompra de até 10 % de suas ações - http://t.co/IQi77wL326",
    "marks": [
      {
        "word": "recompra",
        "type": "rel"
      },
      {
        "word": "de até 10 % de suas ações",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "recompra",
        "subscript": "rel"
      },
      {
        "word": "até",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de até 10 % de suas ações",
      "arg2": "-"
    }
  },
  {
    "Texto": "CSN ( #CSNA3 ) : Programa de Recompra de Ações . http://t.co/TJshHLJGxw",
    "marks": [
      {
        "word": "Recompra",
        "type": "rel"
      },
      {
        "word": "de Ações",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "Recompra",
        "subscript": "rel"
      },
      {
        "word": "Ações",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de Ações",
      "arg2": "-"
    }
  },
  {
    "Texto": "#CSNA3 apresenta um 2º programa de recompra de ações só que parece nem ter concluído o 1º programa de recompra de 10 % de as ações .",
    "marks": [
      {
        "word": "recompra",
        "type": "rel"
      },
      {
        "word": "#CSNA3",
        "type": "arg0"
      },
      {
        "word": "de ações",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "recompra",
        "subscript": "rel"
      },
      {
        "word": "CSNA3",
        "subscript": "nsubj"
      },
      {
        "word": "ações",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "#CSNA3",
      "arg1": "de ações",
      "arg2": "-"
    }
  },
  {
    "Texto": "#CSNA3 apresenta um 2º programa de recompra de ações só que parece nem ter concluído o 1º programa de recompra de 10 % de as ações .",
    "marks": [
      {
        "word": "recompra",
        "type": "rel"
      },
      {
        "word": "de 10 % de as ações",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "recompra",
        "subscript": "rel"
      },
      {
        "word": "10",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de 10 % de as ações",
      "arg2": "-"
    }
  },
  {
    "Texto": "CSN ( #CSNA3 ) mantém processo de recompra de ações com novo programa . http://t.co/0fbhLOv6uK ( Exame )",
    "marks": [
      {
        "word": "recompra",
        "type": "rel"
      },
      {
        "word": "CSN",
        "type": "arg0"
      },
      {
        "word": "de ações",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "recompra",
        "subscript": "rel"
      },
      {
        "word": "CSN",
        "subscript": "nsubj"
      },
      {
        "word": "ações",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "CSN",
      "arg1": "de ações",
      "arg2": "-"
    }
  },
  {
    "Texto": "A #CSNA3 Companhia Siderúrgica Nacional anunciou seu terceiro plano de recompra de ações de maneira bem agressiva . A ação sobe quase 5 % ! !",
    "marks": [
      {
        "word": "recompra",
        "type": "rel"
      },
      {
        "word": "A #CSNA3",
        "type": "arg0"
      },
      {
        "word": "de ações",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "recompra",
        "subscript": "rel"
      },
      {
        "word": "CSNA3",
        "subscript": "nsubj"
      },
      {
        "word": "ações",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "A #CSNA3",
      "arg1": "de ações",
      "arg2": "-"
    }
  },
  {
    "Texto": "Terceiro programa de recompra de ações de a #CSN #CSNA3 anunciado em um total de recompra de 53.326.161 ações . Ativo sobe quase + 5 % .",
    "marks": [
      {
        "word": "recompra",
        "type": "rel"
      },
      {
        "word": "de a #CSN",
        "type": "arg0"
      },
      {
        "word": "de ações",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "recompra",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod"
      },
      {
        "word": "ações",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "de a #CSN",
      "arg1": "de ações",
      "arg2": "-"
    }
  },
  {
    "Texto": "Terceiro programa de recompra de ações de a #CSN #CSNA3 anunciado em um total de recompra de 53.326.161 ações . Ativo sobe quase + 5 % .",
    "marks": [
      {
        "word": "recompra",
        "type": "rel"
      },
      {
        "word": "de 53.326.161 ações",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "recompra",
        "subscript": "rel"
      },
      {
        "word": "53",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de 53.326.161 ações",
      "arg2": "-"
    }
  },
  {
    "Texto": "Terceiro programa de recompra de ações de a #CSN #CSNA3 anunciado em um total de recompra de 53.326.161 ações . Ativo sobe mais de 5,5 % .",
    "marks": [
      {
        "word": "recompra",
        "type": "rel"
      },
      {
        "word": "de a #CSN",
        "type": "arg0"
      },
      {
        "word": "de ações",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "recompra",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod"
      },
      {
        "word": "ações",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "de a #CSN",
      "arg1": "de ações",
      "arg2": "-"
    }
  },
  {
    "Texto": "Terceiro programa de recompra de ações de a #CSN #CSNA3 anunciado em um total de recompra de 53.326.161 ações . Ativo sobe mais de 5,5 % .",
    "marks": [
      {
        "word": "recompra",
        "type": "rel"
      },
      {
        "word": "de 53.326.161 ações",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "recompra",
        "subscript": "rel"
      },
      {
        "word": "53",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de 53.326.161 ações",
      "arg2": "-"
    }
  },
  {
    "Texto": "Várias empresas que anunciam recompra de ações em a verdade não recompram absolutamente nada . Não há nenhum controle sobre isso #CSN #CSNA3",
    "marks": [
      {
        "word": "recompra",
        "type": "rel"
      },
      {
        "word": "Várias empresas",
        "type": "arg0"
      },
      {
        "word": "de ações",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "recompra",
        "subscript": "rel"
      },
      {
        "word": "empresas",
        "subscript": "nsubj"
      },
      {
        "word": "ações",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "Várias empresas",
      "arg1": "de ações",
      "arg2": "-"
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