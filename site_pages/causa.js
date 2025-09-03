document.addEventListener('DOMContentLoaded', function() {
  const SHOWN_ARGS = ["arg0", "arg1", "arg2"];
  const data = [
  {
    "Texto": "Um esclarecimento : minha carteira é muito sobrecarregada de VALE5 por causa de opções . PETR4 tenho 24 % . Ou seja : 80 % de a carteira PETROVALE !",
    "marks": [
      {
        "word": "causa",
        "type": "rel"
      },
      {
        "word": "de opções",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "causa",
        "subscript": "rel"
      },
      {
        "word": "opções",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de opções",
      "arg2": "-"
    }
  },
  {
    "Texto": "Mas não dá para ficar sem PETR4 em a carteira , por causa de a liquidez em opções . Essas últimas altas reaqueceram violentamente o mercado .",
    "marks": [
      {
        "word": "causa",
        "type": "rel"
      },
      {
        "word": "de a liquidez em opções",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "causa",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de a liquidez em opções",
      "arg2": "-"
    }
  },
  {
    "Texto": "RT @lambari_trader : Mas não dá para ficar sem PETR4 em a carteira , por causa de a liquidez em opções . Essas últimas altas reaqueceram violentame …",
    "marks": [
      {
        "word": "causa",
        "type": "rel"
      },
      {
        "word": "de a liquidez em opções",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "causa",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de a liquidez em opções",
      "arg2": "-"
    }
  },
  {
    "Texto": "Jean Willas tá esperneando em o TT por causa de a debandada de o PMDB em a votação de a Petr4 ... Espera q vem mais , ser nojento ! !",
    "marks": [
      {
        "word": "causa",
        "type": "rel"
      },
      {
        "word": "Jean Willis",
        "type": "arg0"
      },
      {
        "word": "de a debandada de o PMDB",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "causa",
        "subscript": "rel"
      },
      {
        "word": "Willis",
        "subscript": "nsubj"
      },
      {
        "word": "a",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "Jean Willis",
      "arg1": "de a debandada de o PMDB",
      "arg2": "-"
    }
  },
  {
    "Texto": "#PETR4 por R$ 16,00 em o leilão ? Caraca ... o fechamento ajustado - por causa de o JCP - de ontem foi em os R$ 15,57 ... o.O",
    "marks": [
      {
        "word": "causa",
        "type": "rel"
      },
      {
        "word": "de o JCP",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "causa",
        "subscript": "rel"
      },
      {
        "word": "o",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de o JCP",
      "arg2": "-"
    }
  },
  {
    "Texto": "Arrisquei em abev3 por causa de uma shooting star meio falsa . Por o menos as Mm estão quase revertendo para subida , mas foi arriscado .",
    "marks": [
      {
        "word": "causa",
        "type": "rel"
      },
      {
        "word": "de uma shooting star meio falsa",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "causa",
        "subscript": "rel"
      },
      {
        "word": "uma",
        "subscript": "amod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de uma shooting star meio falsa",
      "arg2": "-"
    }
  },
  {
    "Texto": "vamos ver como a #PETR4 se comporta em o teste de os R$ 14,7 agora ... ( que arrancada doida ... 2x por causa de o IBOPE , que legal ... )",
    "marks": [
      {
        "word": "causa",
        "type": "rel"
      },
      {
        "word": "de o IBOPE",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "causa",
        "subscript": "rel"
      },
      {
        "word": "o",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de o IBOPE",
      "arg2": "-"
    }
  },
  {
    "Texto": "@AlexCanoas13 por sinal , viste a PETR4 hj ? Tá disparando justamente por causa de um boato de que a Datafolha deve apontar outra queda de a D.",
    "marks": [
      {
        "word": "causa",
        "type": "rel"
      },
      {
        "word": "de um boato de que a Datafolha deve apontar outra queda de a D.",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "causa",
        "subscript": "rel"
      },
      {
        "word": "um",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de um boato de que a Datafolha deve apontar outra queda de a D.",
      "arg2": "-"
    }
  },
  {
    "Texto": "@danielschettin0 Tô com ti ... VALE5 tem um peso MONSTRUOSO em a minha carteira , por causa de a venda coberta de opções . abç !",
    "marks": [
      {
        "word": "causa",
        "type": "rel"
      },
      {
        "word": "de a venda coberta de opções",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "causa",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "obl"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de a venda coberta de opções",
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