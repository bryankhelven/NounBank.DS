document.addEventListener('DOMContentLoaded', function() {
  const SHOWN_ARGS = ["arg0", "arg1", "arg2"];
  const data = [
  {
    "Texto": "$MRVE3 - Mrv ( mrve-nm ) - Fato Relevante - Alteracao Em a Administracao De a Companhia http://t.co/PdxXl414Wg",
    "marks": [
      {
        "word": "alteração",
        "type": "rel"
      },
      {
        "word": "Em a Administracao De a Companhia",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "alteração",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "Em a Administracao De a Companhia",
      "arg2": "-"
    }
  },
  {
    "Texto": "$RSID3 - Rossi Resid ( rsid-nm ) - Alteracao De a Politica De Divulgacao De Fato Relevante http://t.co/gJVTbOY0uA",
    "marks": [
      {
        "word": "alteração",
        "type": "rel"
      },
      {
        "word": "e a Politica De Divulgacao De Fato Relevante",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "alteração",
        "subscript": "rel"
      },
      {
        "word": "Divulgacao",
        "subscript": "amod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "e a Politica De Divulgacao De Fato Relevante",
      "arg2": "-"
    }
  },
  {
    "Texto": "$CIEL3 - Cielo ( ciel-nm ) - ago/e - 31/03/14 - 10h00 - bonificacao / alteracao De o Estatuto Social http://t.co/ZODi2E6KmJ",
    "marks": [
      {
        "word": "alteração",
        "type": "rel"
      },
      {
        "word": "De o Estatuto Social",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "alteração",
        "subscript": "rel"
      },
      {
        "word": "o",
        "subscript": "amod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "De o Estatuto Social",
      "arg2": "-"
    }
  },
  {
    "Texto": "$BBAS3 - Banco De o Brasil ( bbas-nm ) Ago/e - 29/04/2014 - 15h00 - Alteracao Estatutaria http://t.co/uUll5L7MIh",
    "marks": [
      {
        "word": "alteração",
        "type": "rel"
      },
      {
        "word": "Estatutaria",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "alteração",
        "subscript": "rel"
      },
      {
        "word": "Estatutaria",
        "subscript": "amod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "Estatutaria",
      "arg2": "-"
    }
  },
  {
    "Texto": "$GFSA3 - Gafisa ( gfsa-nm ) - Alteracao De o Valor De o Dividendo http://t.co/v2rfyvQTCV",
    "marks": [
      {
        "word": "alteração",
        "type": "rel"
      },
      {
        "word": "De o Valor De o Dividendo",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "alteração",
        "subscript": "rel"
      },
      {
        "word": "o",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "De o Valor De o Dividendo",
      "arg2": "-"
    }
  },
  {
    "Texto": "$ALLL3 - All Amer Lat ( alll-nm ) - Alteracao De Participacao Acionaria http://t.co/jTshh6boJ6",
    "marks": [
      {
        "word": "alteração",
        "type": "rel"
      },
      {
        "word": "De Participacao Acionaria",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "alteração",
        "subscript": "rel"
      },
      {
        "word": "Participacao",
        "subscript": "amod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "De Participacao Acionaria",
      "arg2": "-"
    }
  },
  {
    "Texto": "Concórdia indica 15 papéis para investir em este mês : A corretora optou por fazer apenas uma a ... http://t.co/TVV9DckmRs #infomoney #vale5",
    "marks": [
      {
        "word": "alteração",
        "type": "rel"
      },
      {
        "word": "A corretora",
        "type": "arg0"
      }
    ],
    "subscripts": [
      {
        "word": "alteração",
        "subscript": "rel"
      },
      {
        "word": "corretora",
        "subscript": "nsubj"
      }
    ],
    "args": {
      "arg0": "A corretora",
      "arg1": "-",
      "arg2": "-"
    }
  },
  {
    "Texto": "Socopa indica 10 ações para comprar em esta semana , confira : De esta vez nenhuma alteração foi f ... http://t.co/IST5raJ9FV #infomoney #vale5",
    "marks": [
      {
        "word": "alteração",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "alteração",
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
    "Texto": "$LIGT3 - Light S/a ( ligt-nm ) - Alteracao De o Calendario De Eventos Corporativos http://t.co/XjNJgpnqcw",
    "marks": [
      {
        "word": "alteração",
        "type": "rel"
      },
      {
        "word": "De o Calendario De Eventos Corporativos",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "alteração",
        "subscript": "rel"
      },
      {
        "word": "o",
        "subscript": "amod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "De o Calendario De Eventos Corporativos",
      "arg2": "-"
    }
  },
  {
    "Texto": "$MRVE3 - Mrv ( mrve-nm ) - Alteracao De o Calendario De Eventos Corporativos http://t.co/sHRYZSHees",
    "marks": [
      {
        "word": "alteração",
        "type": "rel"
      },
      {
        "word": "De o Calendario De Eventos Corporativos",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "alteração",
        "subscript": "rel"
      },
      {
        "word": "o",
        "subscript": "amod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "De o Calendario De Eventos Corporativos",
      "arg2": "-"
    }
  },
  {
    "Texto": "$HYPE3 - Hypermarcas ( hype-nm ) - Alteracao De o Calendario De Eventos Corporativos http://t.co/HP72g7Zb6z",
    "marks": [
      {
        "word": "alteração",
        "type": "rel"
      },
      {
        "word": "De o Calendario De Eventos Corporativos",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "alteração",
        "subscript": "rel"
      },
      {
        "word": "o",
        "subscript": "flat:name"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "De o Calendario De Eventos Corporativos",
      "arg2": "-"
    }
  },
  {
    "Texto": "$SBSP3 - Sabesp ( sbsp-nm ) - Alteracao De o Calendario De Eventos Corporativos http://t.co/LzkdSaXOqv",
    "marks": [
      {
        "word": "alteração",
        "type": "rel"
      },
      {
        "word": "De o Calendario De Eventos Corporativos",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "alteração",
        "subscript": "rel"
      },
      {
        "word": "o",
        "subscript": "amod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "De o Calendario De Eventos Corporativos",
      "arg2": "-"
    }
  },
  {
    "Texto": "$BRML3 - Br Malls Par ( brml-nm ) - Alteracao De o Calendario De Eventos Corporativos http://t.co/eiu1Kw2n8r",
    "marks": [
      {
        "word": "alteração",
        "type": "rel"
      },
      {
        "word": "De o Calendario De Eventos Corporativos",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "alteração",
        "subscript": "rel"
      },
      {
        "word": "o",
        "subscript": "amod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "De o Calendario De Eventos Corporativos",
      "arg2": "-"
    }
  },
  {
    "Texto": "$HGTX3 - Cia Hering ( hgtx-nm ) - Alteracao De o Calendario De Eventos Corporativos http://t.co/za6C2Ivjox",
    "marks": [
      {
        "word": "alteração",
        "type": "rel"
      },
      {
        "word": "De o Calendario De Eventos Corporativos",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "alteração",
        "subscript": "rel"
      },
      {
        "word": "o",
        "subscript": "amod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "De o Calendario De Eventos Corporativos",
      "arg2": "-"
    }
  },
  {
    "Texto": "$RENT3 - Localiza ( rent-nm ) - Alteracao De o Calendario De Eventos Corporativos http://t.co/PqS8lH5rDJ",
    "marks": [
      {
        "word": "alteração",
        "type": "rel"
      },
      {
        "word": "De o Calendario De Eventos Corporativos",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "alteração",
        "subscript": "rel"
      },
      {
        "word": "o",
        "subscript": "amod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "De o Calendario De Eventos Corporativos",
      "arg2": "-"
    }
  },
  {
    "Texto": "$ESTC3 - Estacio Part ( estc-nm ) - Alteracao De o Calendario De Eventos Corporativos http://t.co/U1QWmMSuRg",
    "marks": [
      {
        "word": "alteração",
        "type": "rel"
      },
      {
        "word": "De o Calendario De Eventos Corporativos",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "alteração",
        "subscript": "rel"
      },
      {
        "word": "o",
        "subscript": "amod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "De o Calendario De Eventos Corporativos",
      "arg2": "-"
    }
  },
  {
    "Texto": "$CIEL3 - Cielo ( ciel-nm ) - Pgto . Dividendo E Juros ( alteracao De os Valores Por Acao ) http://t.co/pNIoX1dKA3",
    "marks": [
      {
        "word": "alteração",
        "type": "rel"
      },
      {
        "word": "De os Valores Por Acao",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "alteração",
        "subscript": "rel"
      },
      {
        "word": "os",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "De os Valores Por Acao",
      "arg2": "-"
    }
  },
  {
    "Texto": "$CYRE3 - Cyrela Realt ( cyre-nm ) - Alteracao De Participacao Acionaria http://t.co/59nFZQCKgw",
    "marks": [
      {
        "word": "alteração",
        "type": "rel"
      },
      {
        "word": "De Participacao Acionaria",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "alteração",
        "subscript": "rel"
      },
      {
        "word": "Participacao",
        "subscript": "amod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "De Participacao Acionaria",
      "arg2": "-"
    }
  },
  {
    "Texto": "$AEDU3 - Anhanguera ( aedu-nm ) - Alteracao de o Calendario De Eventos Corporativos http://t.co/jBvTIfKBBF",
    "marks": [
      {
        "word": "alteração",
        "type": "rel"
      },
      {
        "word": "de o Calendario De Eventos Corporativos",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "alteração",
        "subscript": "rel"
      },
      {
        "word": "o",
        "subscript": "amod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de o Calendario De Eventos Corporativos",
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