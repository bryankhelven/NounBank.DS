document.addEventListener('DOMContentLoaded', function() {
  const SHOWN_ARGS = ["arg0", "arg1", "arg2"];
  const data = [
  {
    "Texto": "Dasa (#DASA3): Edson Bueno vai à arbitragem contra oferta de compra de ações. http://t.co/OcNo5Tgf15   (Valor)",
    "marks": [
      {
        "word": "oferta",
        "type": "rel"
      },
      {
        "word": "Dasa",
        "type": "arg0"
      },
      {
        "word": "de ações",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "oferta",
        "subscript": "rel"
      },
      {
        "word": "Dasa",
        "subscript": "parataxis"
      },
      {
        "word": "ações",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "Dasa",
      "arg1": "de ações",
      "arg2": "-"
    }
  },
  {
    "Texto": "Petrobras (PETR4) lançou nesta segunda-feira (10) oferta de US$ 8,5 bilhões em bônus, em uma operação em seis etapas http://t.co/it9boXQdSp",
    "marks": [
      {
        "word": "oferta",
        "type": "rel"
      },
      {
        "word": "bônus no exterior",
        "type": "arg1"
      },
      {
        "word": "US$ 8,5 bihões",
        "type": "arg2"
      }
    ],
    "subscripts": [
      {
        "word": "oferta",
        "subscript": "rel"
      },
      {
        "word": "exterior",
        "subscript": "nmod"
      },
      {
        "word": "bihões",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "bônus no exterior",
      "arg2": "US$ 8,5 bihões"
    }
  },
  {
    "Texto": "#PETR4 RT @ativacorretora: Petrobras faz oferta de US$ 8,5 bi em bônus no exterior. Confira a matéria do Jornal da Globo com nosso...",
    "marks": [
      {
        "word": "oferta",
        "type": "rel"
      },
      {
        "word": "bônus no exterior",
        "type": "arg1"
      },
      {
        "word": "US$ 8,5 bi",
        "type": "arg2"
      }
    ],
    "subscripts": [
      {
        "word": "oferta",
        "subscript": "rel"
      },
      {
        "word": "exterior",
        "subscript": "nmod"
      },
      {
        "word": "bi",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "bônus no exterior",
      "arg2": "US$ 8,5 bi"
    }
  },
  {
    "Texto": "$OIBR4 - CVM suspende oferta de ações da Oi [Newsletter ADVFN] http://t.co/mMd8l9j3ZH",
    "marks": [
      {
        "word": "oferta",
        "type": "rel"
      },
      {
        "word": "CVM",
        "type": "arg0"
      },
      {
        "word": "de ações",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "oferta",
        "subscript": "rel"
      },
      {
        "word": "CVM",
        "subscript": "nsubj"
      },
      {
        "word": "ações",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "CVM",
      "arg1": "de ações",
      "arg2": "-"
    }
  },
  {
    "Texto": "As ações da Oi sobem forte, um dia depois da CVM ter revogado a suspensão da oferta de ações: OIBR4, +4,51% e OIBR3, +4,95%",
    "marks": [
      {
        "word": "oferta",
        "type": "rel"
      },
      {
        "word": "CVM",
        "type": "arg0"
      },
      {
        "word": "de ações",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "oferta",
        "subscript": "rel"
      },
      {
        "word": "CVM",
        "subscript": "nsubj"
      },
      {
        "word": "ações",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "CVM",
      "arg1": "de ações",
      "arg2": "-"
    }
  },
  {
    "Texto": "#JBSS3 SOBE &gt; Fitch disse hoje que a oferta de compra da Hillshire Brands pela Pilgrims Pride (PPC) é neutra para o crédito da JBS.",
    "marks": [
      {
        "word": "oferta",
        "type": "rel"
      },
      {
        "word": "Hillshire Brands",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "oferta",
        "subscript": "rel"
      },
      {
        "word": "Brands",
        "subscript": "flat:name"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "Hillshire Brands",
      "arg2": "-"
    }
  },
  {
    "Texto": "(+) Banco Santander (SANB11): oferta para aquisição de ações. O banco anunciou nesta terça-feira que está... http://t.co/4beWp1clzY",
    "marks": [
      {
        "word": "oferta",
        "type": "rel"
      },
      {
        "word": "Banco Santander",
        "type": "arg0"
      },
      {
        "word": "de ações",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "oferta",
        "subscript": "rel"
      },
      {
        "word": "Santander",
        "subscript": "flat:name"
      },
      {
        "word": "ações",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "Banco Santander",
      "arg1": "de ações",
      "arg2": "-"
    }
  },
  {
    "Texto": "$BRFS3 - Brf Sa (brfs-nm)  - Resultados Da oferta De Recompra http://t.co/DBLJswVFeZ",
    "marks": [
      {
        "word": "oferta",
        "type": "rel"
      },
      {
        "word": "De Recompra",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "oferta",
        "subscript": "rel"
      },
      {
        "word": "Recompra",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "De Recompra",
      "arg2": "-"
    }
  },
  {
    "Texto": "Documento mostra que Petrobras fez oferta bilionária por refinaria de Pasadena ANTES de a arbitragem http://t.co/VPQiXUgF6b #Petr4 #Petr3",
    "marks": [
      {
        "word": "oferta",
        "type": "rel"
      },
      {
        "word": "refinaria de Pasadena",
        "type": "arg1"
      },
      {
        "word": "bilionária",
        "type": "arg2"
      }
    ],
    "subscripts": [
      {
        "word": "oferta",
        "subscript": "rel"
      },
      {
        "word": "Pasadena",
        "subscript": "nmod"
      },
      {
        "word": "bilionária",
        "subscript": "amod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "refinaria de Pasadena",
      "arg2": "bilionária"
    }
  },
  {
    "Texto": "@garimpodeacoes vazou preço de a oferta oibr4 - 2,4 - 2,8",
    "marks": [
      {
        "word": "oferta",
        "type": "rel"
      },
      {
        "word": "oibr4",
        "type": "arg1"
      },
      {
        "word": "-5.199999999999999",
        "type": "arg2"
      }
    ],
    "subscripts": [
      {
        "word": "oferta",
        "subscript": "rel"
      },
      {
        "word": "oibr4",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "oibr4",
      "arg2": "-5.199999999999999"
    }
  },
  {
    "Texto": "Afunda OIBR4 acionistas chora RT @infomoney : Bradesco e Itaú avaliam retirar apoio a a oferta de a Oi",
    "marks": [
      {
        "word": "oferta",
        "type": "rel"
      },
      {
        "word": "de a Oi",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "oferta",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de a Oi",
      "arg2": "-"
    }
  },
  {
    "Texto": "#OIBR4 - Portugal Telecom ficará com 24,87 % de a Oi após oferta - http://t.co/a2vBUej2Qe",
    "marks": [
      {
        "word": "oferta",
        "type": "rel"
      },
      {
        "word": "Oi",
        "type": "arg0"
      }
    ],
    "subscripts": [
      {
        "word": "oferta",
        "subscript": "rel"
      },
      {
        "word": "Oi",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "Oi",
      "arg1": "-",
      "arg2": "-"
    }
  },
  {
    "Texto": "#BR #IBOV #OIBR4 Oi precifica maior oferta subsequente de o BR em quase 4 anos : http://t.co/AaQIj1CYax",
    "marks": [
      {
        "word": "oferta",
        "type": "rel"
      },
      {
        "word": "Oi",
        "type": "arg0"
      },
      {
        "word": "subsequente de o BR",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "oferta",
        "subscript": "rel"
      },
      {
        "word": "Oi",
        "subscript": "nsubj"
      },
      {
        "word": "o",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "Oi",
      "arg1": "subsequente de o BR",
      "arg2": "-"
    }
  },
  {
    "Texto": "RT @AryAntiPT : Documento mostra que Petrobras fez oferta bilionária por refinaria de Pasadena ANTES de a arbitragem http://t.co/VPQiXUgF6b …",
    "marks": [
      {
        "word": "oferta",
        "type": "rel"
      },
      {
        "word": "Petrobras",
        "type": "arg0"
      },
      {
        "word": "por refinaria de Pasadena",
        "type": "arg1"
      },
      {
        "word": "bilionária",
        "type": "arg2"
      }
    ],
    "subscripts": [
      {
        "word": "oferta",
        "subscript": "rel"
      },
      {
        "word": "Petrobras",
        "subscript": "nsubj"
      },
      {
        "word": "Pasadena",
        "subscript": "nmod"
      },
      {
        "word": "bilionária",
        "subscript": "amod"
      }
    ],
    "args": {
      "arg0": "Petrobras",
      "arg1": "por refinaria de Pasadena",
      "arg2": "bilionária"
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