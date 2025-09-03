document.addEventListener('DOMContentLoaded', function() {
  const SHOWN_ARGS = ["arg0", "arg1"];
  const data = [
  {
    "Texto": "Oibr4 a caminho de nova máxima",
    "marks": [
      {
        "word": "caminho",
        "type": "rel"
      },
      {
        "word": "Oibr4",
        "type": "arg0"
      },
      {
        "word": "de nova máxima",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "caminho",
        "subscript": "rel"
      },
      {
        "word": "Oibr4",
        "subscript": "root"
      },
      {
        "word": "nova",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "Oibr4",
      "arg1": "de nova máxima"
    }
  },
  {
    "Texto": "@Paty_Meirelles na PETR4 o rompimento dos R$17,75 abria caminho para uma queda até a região dos R$17,xx ... Só não pensei ver isso hoje, rs",
    "marks": [
      {
        "word": "caminho",
        "type": "rel"
      },
      {
        "word": "o rompimento dos R$17,75",
        "type": "arg0"
      },
      {
        "word": "para uma queda até a região dos R$17,xx",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "caminho",
        "subscript": "rel"
      },
      {
        "word": "R",
        "subscript": "nsubj"
      },
      {
        "word": "uma",
        "subscript": "obl"
      }
    ],
    "args": {
      "arg0": "o rompimento dos R$17,75",
      "arg1": "para uma queda até a região dos R$17,xx"
    }
  },
  {
    "Texto": "' Salvação ' de a OGX e OSX pode estar a a caminho , mais 5 empresas estão em o radar : Nível de o reser ... http://t.co/WYotABlDa5 #infomoney#vale5",
    "marks": [
      {
        "word": "caminho",
        "type": "rel"
      },
      {
        "word": "' Salvação ' de a OGX e OSX",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "caminho",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "' Salvação ' de a OGX e OSX"
    }
  },
  {
    "Texto": "#PETR4 seguindo o mesmo caminho de a #OGXP3",
    "marks": [
      {
        "word": "caminho",
        "type": "rel"
      },
      {
        "word": "#PETR4",
        "type": "arg0"
      },
      {
        "word": "seguindo o mesmo",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "caminho",
        "subscript": "rel"
      },
      {
        "word": "PETR4",
        "subscript": "nsubj"
      },
      {
        "word": "mesmo",
        "subscript": "det"
      }
    ],
    "args": {
      "arg0": "#PETR4",
      "arg1": "seguindo o mesmo"
    }
  },
  {
    "Texto": "#PETR4 indo em o mesmo caminho de a #OGXP3 http://t.co/jTNm4sfjJY",
    "marks": [
      {
        "word": "caminho",
        "type": "rel"
      },
      {
        "word": "#PETR4",
        "type": "arg0"
      },
      {
        "word": "indo em o mesmo",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "caminho",
        "subscript": "rel"
      },
      {
        "word": "PETR4",
        "subscript": "nsubj"
      },
      {
        "word": "mesmo",
        "subscript": "det"
      }
    ],
    "args": {
      "arg0": "#PETR4",
      "arg1": "indo em o mesmo"
    }
  },
  {
    "Texto": "#TOTS3 é outra a caminho de o TH , pouco mais tímida que #RENT3",
    "marks": [
      {
        "word": "caminho",
        "type": "rel"
      },
      {
        "word": "#TOTS3",
        "type": "arg0"
      },
      {
        "word": "de o TH",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "caminho",
        "subscript": "rel"
      },
      {
        "word": "TOTS3",
        "subscript": "nsubj"
      },
      {
        "word": "o",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "#TOTS3",
      "arg1": "de o TH"
    }
  },
  {
    "Texto": "#ecor3segue seu caminho rsrsr",
    "marks": [
      {
        "word": "caminho",
        "type": "rel"
      },
      {
        "word": "#ecor3",
        "type": "arg0"
      },
      {
        "word": "segue",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "caminho",
        "subscript": "rel"
      },
      {
        "word": "ecor3",
        "subscript": "nsubj"
      },
      {
        "word": "segue",
        "subscript": "root"
      }
    ],
    "args": {
      "arg0": "#ecor3",
      "arg1": "segue"
    }
  },
  {
    "Texto": "@Live_Trade se nao me perdi em o caminho , hoje foi , petr4 , klbn4 , vale5 , estc3 , mmxm3 e indice ! Amanha possivel a goll4 , certo ?",
    "marks": [
      {
        "word": "caminho",
        "type": "rel"
      },
      {
        "word": "me",
        "type": "arg0"
      },
      {
        "word": "perdi em o",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "caminho",
        "subscript": "rel"
      },
      {
        "word": "me",
        "subscript": "obj"
      },
      {
        "word": "o",
        "subscript": "det"
      }
    ],
    "args": {
      "arg0": "me",
      "arg1": "perdi em o"
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