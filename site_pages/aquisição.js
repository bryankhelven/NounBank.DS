document.addEventListener('DOMContentLoaded', function() {
  const SHOWN_ARGS = ["arg0", "arg1", "arg2"];
  const data = [
  {
    "Texto": "Cade aprova aquisição de direitos minerários de a Novelis por a Vale : Em documento submetido a o ... http://t.co/WZ9SfuDW9J #infomoney #vale5",
    "marks": [
      {
        "word": "aquisição",
        "type": "rel"
      },
      {
        "word": "Vale",
        "type": "arg0"
      },
      {
        "word": "de direitos minerários de a Novelis",
        "type": "arg1"
      },
      {
        "word": "Novelis",
        "type": "arg2"
      }
    ],
    "subscripts": [
      {
        "word": "aquisição",
        "subscript": "rel"
      },
      {
        "word": "Vale",
        "subscript": "nmod"
      },
      {
        "word": "direitos",
        "subscript": "nmod"
      },
      {
        "word": "Novelis",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "Vale",
      "arg1": "de direitos minerários de a Novelis",
      "arg2": "Novelis"
    }
  },
  {
    "Texto": "$ESTC3 - Estacio Part ( estc-nm ) - fato Relevante - aquisicao Uniseb - reapres ( redivulgacao ) http://t.co/alIlIRxgUk",
    "marks": [
      {
        "word": "aquisição",
        "type": "rel"
      },
      {
        "word": "Estacio Part ( estc-nm",
        "type": "arg0"
      },
      {
        "word": "Uniseb",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "aquisição",
        "subscript": "rel"
      },
      {
        "word": "nm",
        "subscript": "nmod"
      },
      {
        "word": "Uniseb",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "Estacio Part ( estc-nm",
      "arg1": "Uniseb",
      "arg2": "-"
    }
  },
  {
    "Texto": "$DASA3 - Dasa ( dasa-nm ) - Aquisicao De Acoes Remanescentes De o Leilao http://t.co/0HuaywrCqa",
    "marks": [
      {
        "word": "aquisição",
        "type": "rel"
      },
      {
        "word": "de Acoes Remanescentes De o Leilao",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "aquisição",
        "subscript": "rel"
      },
      {
        "word": "Acoes",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de Acoes Remanescentes De o Leilao",
      "arg2": "-"
    }
  },
  {
    "Texto": "Wikileaks : Casa Branca consultou Dilma antes de autorizar aquisição de refinaria por Petrobrás #PETR4 http://t.co/Bq8aKioBnC",
    "marks": [
      {
        "word": "aquisição",
        "type": "rel"
      },
      {
        "word": "Petrobrás",
        "type": "arg0"
      },
      {
        "word": "de refinaria",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "aquisição",
        "subscript": "rel"
      },
      {
        "word": "Petrobrás",
        "subscript": "nmod"
      },
      {
        "word": "refinaria",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "Petrobrás",
      "arg1": "de refinaria",
      "arg2": "-"
    }
  },
  {
    "Texto": "“ @ferrisss : VALE estaria de olho em a MMX . Aquisição faz sentido mesmo . Opa . Me serve e muito . @bovespabrokers @Smarttrade10 ” e petr4 em a ogxp3",
    "marks": [
      {
        "word": "Aquisição",
        "type": "rel"
      },
      {
        "word": "VALE",
        "type": "arg0"
      },
      {
        "word": "MMX",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "Aquisição",
        "subscript": "rel"
      },
      {
        "word": "VALE",
        "subscript": "nsubj"
      },
      {
        "word": "MMX",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "VALE",
      "arg1": "MMX",
      "arg2": "-"
    }
  },
  {
    "Texto": "$TBLE3 - Tractebel ( tble-nm ) - Aquisicao De a Clwp Brasil Iii Participacoes Ltda http://t.co/aEbGF4Enme",
    "marks": [
      {
        "word": "aquisição",
        "type": "rel"
      },
      {
        "word": "Tractebel ( tble-nm )",
        "type": "arg0"
      },
      {
        "word": "Clwp Brasil Iii Participacoes Ltda",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "aquisição",
        "subscript": "rel"
      },
      {
        "word": "nm",
        "subscript": "nmod"
      },
      {
        "word": "Ltda",
        "subscript": "flat:name"
      }
    ],
    "args": {
      "arg0": "Tractebel ( tble-nm )",
      "arg1": "Clwp Brasil Iii Participacoes Ltda",
      "arg2": "-"
    }
  },
  {
    "Texto": "$BRFS3 - Brf Sa ( brfs-nm ) - Conclusao De a Aquisicao De Direitos Economicos - federal Foods http://t.co/X4MZC7Y8FC",
    "marks": [
      {
        "word": "aquisição",
        "type": "rel"
      },
      {
        "word": "Brf Sa ( brfs-nm )",
        "type": "arg0"
      },
      {
        "word": "de Direitos Economicos - federal Foods",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "aquisição",
        "subscript": "rel"
      },
      {
        "word": "nm",
        "subscript": "nmod"
      },
      {
        "word": "Direitos",
        "subscript": "flat:name"
      }
    ],
    "args": {
      "arg0": "Brf Sa ( brfs-nm )",
      "arg1": "de Direitos Economicos - federal Foods",
      "arg2": "-"
    }
  },
  {
    "Texto": "$RENT3 - Localiza ( rent-nm ) - Age - 29/04/2014 - 15h00 / Aquisicao E Incorporacao De Cias http://t.co/tiGCF5BFg9",
    "marks": [
      {
        "word": "aquisição",
        "type": "rel"
      },
      {
        "word": "Localiza ( rent-nm )",
        "type": "arg0"
      },
      {
        "word": "de Cias",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "aquisição",
        "subscript": "rel"
      },
      {
        "word": "nm",
        "subscript": "nmod"
      },
      {
        "word": "Cias",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "Localiza ( rent-nm )",
      "arg1": "de Cias",
      "arg2": "-"
    }
  },
  {
    "Texto": "$RENT3 - Localiza ( rent-nm ) - Aquisicao De Quotas E Incorporacao De Subsidiarias http://t.co/nA90jlYptH",
    "marks": [
      {
        "word": "aquisição",
        "type": "rel"
      },
      {
        "word": "Localiza ( rent-nm )",
        "type": "arg0"
      },
      {
        "word": "de Quotas",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "aquisição",
        "subscript": "rel"
      },
      {
        "word": "nm",
        "subscript": "nmod"
      },
      {
        "word": "Quotas",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "Localiza ( rent-nm )",
      "arg1": "de Quotas",
      "arg2": "-"
    }
  },
  {
    "Texto": "$RENT3 - Localiza ( rent-nm ) - Aquisicao De Quotas E Incorporacao De Subsidiarias http://t.co/nA90jlYptHc",
    "marks": [
      {
        "word": "aquisição",
        "type": "rel"
      },
      {
        "word": "ações",
        "type": "arg1"
      },
      {
        "word": "Banco Santander ( SANB11 )",
        "type": "arg2"
      }
    ],
    "subscripts": [
      {
        "word": "aquisição",
        "subscript": "rel"
      },
      {
        "word": "ações",
        "subscript": "nmod"
      },
      {
        "word": "SANB11",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "ações",
      "arg2": "Banco Santander ( SANB11 )"
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