document.addEventListener('DOMContentLoaded', function() {
  const SHOWN_ARGS = ["arg0", "arg1", "arg2"];
  const data = [
  {
    "Texto": "Petrobras vendeu refinaria em a Argentina por menos de o q valia . Qdo compra , paga m+ , qdo vende , pede m- . Se PT perder eleição , PETR4 vai a 35 !",
    "marks": [
      {
        "word": "eleição",
        "type": "rel"
      },
      {
        "word": "PT",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "eleição",
        "subscript": "rel"
      },
      {
        "word": "PT",
        "subscript": "nsubj"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "PT",
      "arg2": "-"
    }
  },
  {
    "Texto": "Em a Bovespa , gestores definem para época de as eleições ações de boa liquidez , como ABEV3 , BBAS3 , CCRO3 , ITUB4 , PCAR4 , RENT3 , UGPA3 , e outras",
    "marks": [
      {
        "word": "eleição",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "eleição",
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
    "Texto": "RT @garimpodeacoes : Em a Bovespa , gestores definem para época de as eleições ações de boa liquidez , como ABEV3 , BBAS3 , CCRO3 , ITUB4 , PCAR4 , REN …",
    "marks": [
      {
        "word": "eleição",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "eleição",
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
    "Texto": "BBSE3 - ' É muito cedo para basear a recomendação em o resultado de as eleições ' , diz BTG - InfoMoney Veja mais em : http://t.co/thncBwA5YP",
    "marks": [
      {
        "word": "eleição",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "eleição",
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
    "Texto": "IBOPE + CPI = ELET3 + 8 % / PETR4 + 6 % Pense em a alegria de os comprados se a Dilma perde as eleições ! :) http://t.co/FjiRXgDmJf",
    "marks": [
      {
        "word": "eleição",
        "type": "rel"
      },
      {
        "word": "Dilma",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "eleição",
        "subscript": "rel"
      },
      {
        "word": "Dilma",
        "subscript": "nsubj"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "Dilma",
      "arg2": "-"
    }
  },
  {
    "Texto": "Velho , se Petr4 sobreviver a essa eleição nada + vai destruí - la ! é mta putaria estão literalmente ' estuprando ' a credibilidade @clubedopairico",
    "marks": [
      {
        "word": "eleição",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "eleição",
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
    "Texto": "@ferrisss petr4 paradinho em os 11 depois 8,5 ate as eleições .",
    "marks": [
      {
        "word": "eleição",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "eleição",
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
    "Texto": "Bom , o pessoal recomendando compra de petr4 sei ! ! isso ta cheirando a pesquisas novas para eleição a presidente e não deve ser favorável ...",
    "marks": [
      {
        "word": "eleição",
        "type": "rel"
      },
      {
        "word": "a presidente",
        "type": "arg2"
      }
    ],
    "subscripts": [
      {
        "word": "eleição",
        "subscript": "rel"
      },
      {
        "word": "presidente",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "-",
      "arg2": "a presidente"
    }
  },
  {
    "Texto": "#petr4 sem medo de errar , ou essa alta marcou o fim de a queda de uma década , ou é só mais um repique momentâneo . Esse ano ainda tem eleições !",
    "marks": [
      {
        "word": "eleição",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "eleição",
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
    "Texto": "$BRFS3 - Brf Sa ( brfs ) - Renuncia E Eleicao De Membros De o C.a. http://t.co/f41iizYOak",
    "marks": [
      {
        "word": "eleição",
        "type": "rel"
      },
      {
        "word": "De Membros De o C.a.",
        "type": "arg2"
      }
    ],
    "subscripts": [
      {
        "word": "eleição",
        "subscript": "rel"
      },
      {
        "word": "Membros",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "-",
      "arg2": "De Membros De o C.a."
    }
  },
  {
    "Texto": "$BRFS3 - Brf Sa ( brfs-nm ) - Renuncia E Eleicao De Membros De o C.a. ( complemento ) http://t.co/0uRQWZmhv5",
    "marks": [
      {
        "word": "eleição",
        "type": "rel"
      },
      {
        "word": "De Membros De o C.a.",
        "type": "arg2"
      }
    ],
    "subscripts": [
      {
        "word": "eleição",
        "subscript": "rel"
      },
      {
        "word": "Membros",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "-",
      "arg2": "De Membros De o C.a."
    }
  },
  {
    "Texto": "Teria curiosidade de saber o que a Dilma achou de a #PETR4 subir mais de 7 % com a perspectiva de que ela pode perder a eleição ...",
    "marks": [
      {
        "word": "eleição",
        "type": "rel"
      },
      {
        "word": "Dilma",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "eleição",
        "subscript": "rel"
      },
      {
        "word": "Dilma",
        "subscript": "nsubj"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "Dilma",
      "arg2": "-"
    }
  },
  {
    "Texto": "RT @chrinvestor : Teria curiosidade de saber o que a Dilma achou de a #PETR4 subir mais de 7 % com a perspectiva de que ela pode perder a el …",
    "marks": [
      {
        "word": "eleição",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "eleição",
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
    "Texto": "@SakaSakamori @edmilsonpapo10 Restrições : Eleição , CPI #PETR4 * mais alguma que vcs tenham em mente ?",
    "marks": [
      {
        "word": "Eleição",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "Eleição",
        "subscript": "rel"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "-",
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