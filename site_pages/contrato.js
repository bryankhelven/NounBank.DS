document.addEventListener('DOMContentLoaded', function() {
  const SHOWN_ARGS = ["arg0", "arg1", "arg2"];
  const data = [
  {
    "Texto": "Notas gerais A PETROBRAS ( PETR4 ) assinou com o Grupo Électricité de France contrato para a venda de sua ... http://t.co/h3dMUjViMQ",
    "marks": [
      {
        "word": "contrato",
        "type": "rel"
      },
      {
        "word": "A PETROBRAS ( PETR4 )",
        "type": "arg0"
      },
      {
        "word": "para a venda de sua",
        "type": "arg1"
      },
      {
        "word": "com o Grupo Électricité de France",
        "type": "arg2"
      }
    ],
    "subscripts": [
      {
        "word": "contrato",
        "subscript": "rel"
      },
      {
        "word": "PETR4",
        "subscript": "nsubj"
      },
      {
        "word": "a",
        "subscript": "nmod:strunc"
      },
      {
        "word": "o",
        "subscript": "flat:name"
      }
    ],
    "args": {
      "arg0": "A PETROBRAS ( PETR4 )",
      "arg1": "para a venda de sua",
      "arg2": "com o Grupo Électricité de France"
    }
  },
  {
    "Texto": "#BOVESPA #CCRO3 CCR divulga fato relevante sobre assinatura de o contrato de concessão - Aeroporto de Confins . http://t.co/hFQSZwrqSn #BR",
    "marks": [
      {
        "word": "contrato",
        "type": "rel"
      },
      {
        "word": "de concessão - Aeroporto de Confin",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "contrato",
        "subscript": "rel"
      },
      {
        "word": "concessão",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de concessão - Aeroporto de Confin",
      "arg2": "-"
    }
  },
  {
    "Texto": "Hoje tem leilão emergencial de energia , que depende largamente de ELET6 . Boa oportunidade para fechar contratos estáveis e de margem maior .",
    "marks": [
      {
        "word": "contrato",
        "type": "rel"
      },
      {
        "word": "Boa oportunidade",
        "type": "arg0"
      }
    ],
    "subscripts": [
      {
        "word": "contrato",
        "subscript": "rel"
      },
      {
        "word": "oportunidade",
        "subscript": "parataxis"
      }
    ],
    "args": {
      "arg0": "Boa oportunidade",
      "arg1": "-",
      "arg2": "-"
    }
  },
  {
    "Texto": "#CPFE3 - CPFL fecha contrato de energia de Serra de a Mesa e não disputará leilão A-0 - http://t.co/Hk3v5n3Xap",
    "marks": [
      {
        "word": "contrato",
        "type": "rel"
      },
      {
        "word": "CPFL",
        "type": "arg0"
      },
      {
        "word": "de energia de Serra de a Mesa",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "contrato",
        "subscript": "rel"
      },
      {
        "word": "CPFL",
        "subscript": "nsubj"
      },
      {
        "word": "energia",
        "subscript": "flat:name"
      }
    ],
    "args": {
      "arg0": "CPFL",
      "arg1": "de energia de Serra de a Mesa",
      "arg2": "-"
    }
  },
  {
    "Texto": "#SANB11 - Santander Brasil assina contrato para compra de a Getnet - http://t.co/H56HB4FQ41",
    "marks": [
      {
        "word": "contrato",
        "type": "rel"
      },
      {
        "word": "para compra",
        "type": "arg1"
      },
      {
        "word": "de a Getnet",
        "type": "arg2"
      }
    ],
    "subscripts": [
      {
        "word": "contrato",
        "subscript": "rel"
      },
      {
        "word": "compra",
        "subscript": "nmod"
      },
      {
        "word": "a",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "para compra",
      "arg2": "de a Getnet"
    }
  },
  {
    "Texto": "$CCRO3 - Ccr Sa ( ccro-nm ) - Assinatura De o Contrato De Concessao De o Aeroporto De Confins http://t.co/GRgDTOBXof",
    "marks": [
      {
        "word": "Contrato",
        "type": "rel"
      },
      {
        "word": "De Concessao De o Aeroporto De Confins",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "Contrato",
        "subscript": "rel"
      },
      {
        "word": "Concessao",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "De Concessao De o Aeroporto De Confins",
      "arg2": "-"
    }
  },
  {
    "Texto": "#PETR4 A Petrobras contestou hoje que o conselho de a estatal tenha aprovado , em apenas 14 dias , dois contratos sem ... http://t.co/AJpnCodlAV",
    "marks": [
      {
        "word": "contrato",
        "type": "rel"
      },
      {
        "word": "sem",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "contrato",
        "subscript": "rel"
      },
      {
        "word": "sem",
        "subscript": "nmod:strunc"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "sem",
      "arg2": "-"
    }
  },
  {
    "Texto": "#IBOV #KLBN4 Klabin fecha contrato com a Pöyry para Projeto Puma : http://t.co/WPqvXaEQB2",
    "marks": [
      {
        "word": "contrato",
        "type": "rel"
      },
      {
        "word": "Klabin",
        "type": "arg0"
      },
      {
        "word": "para Projeto Puma",
        "type": "arg1"
      },
      {
        "word": "com a Pöyry",
        "type": "arg2"
      }
    ],
    "subscripts": [
      {
        "word": "contrato",
        "subscript": "rel"
      },
      {
        "word": "Klabin",
        "subscript": "nsubj"
      },
      {
        "word": "Projeto",
        "subscript": "flat:name"
      },
      {
        "word": "a",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "Klabin",
      "arg1": "para Projeto Puma",
      "arg2": "com a Pöyry"
    }
  },
  {
    "Texto": "PETR4 sobe 8 % e a gremistada preocupada com o contrato de as estruturas temporárias ... Vida injusta essa !",
    "marks": [
      {
        "word": "contrato",
        "type": "rel"
      },
      {
        "word": "de as estruturas temporárias",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "contrato",
        "subscript": "rel"
      },
      {
        "word": "as",
        "subscript": "amod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de as estruturas temporárias",
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