document.addEventListener('DOMContentLoaded', function() {
  const SHOWN_ARGS = ["arg0", "arg1", "arg2"];
  const data = [
  {
    "Texto": "$AEDU3 - Anhanguera ( aedu-nm ) - Esclarecimentos http://t.co/uYs0DAO6M1",
    "marks": [
      {
        "word": "Esclarecimento",
        "type": "rel"
      },
      {
        "word": "$AEDU3",
        "type": "arg0"
      }
    ],
    "subscripts": [
      {
        "word": "Esclarecimento",
        "subscript": "rel"
      },
      {
        "word": "AEDU3",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "$AEDU3",
      "arg1": "-",
      "arg2": "-"
    }
  },
  {
    "Texto": "$BBAS3 - Banco De o Brasil ( bbas-nm ) - Esclarecimentos A Consulta De a Bm&fbovespa http://t.co/UaFXNfKifj",
    "marks": [
      {
        "word": "Esclarecimento",
        "type": "rel"
      },
      {
        "word": "$BBAS3",
        "type": "arg0"
      },
      {
        "word": "A Consulta De a Bm&fbovespa",
        "type": "arg2"
      }
    ],
    "subscripts": [
      {
        "word": "Esclarecimento",
        "subscript": "rel"
      },
      {
        "word": "BBAS3",
        "subscript": "nmod"
      },
      {
        "word": "a",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "$BBAS3",
      "arg1": "-",
      "arg2": "A Consulta De a Bm&fbovespa"
    }
  },
  {
    "Texto": "$BVMF3 - Bmfbovespa ( bvmf-nm ) - Esclarecimento Sobre Noticia Veiculada Em a Midia http://t.co/dZxOwGCIDa",
    "marks": [
      {
        "word": "Esclarecimento",
        "type": "rel"
      },
      {
        "word": "$BVMF3",
        "type": "arg0"
      },
      {
        "word": "Sobre Noticia Veiculada Em a Midia",
        "type": "arg2"
      }
    ],
    "subscripts": [
      {
        "word": "Esclarecimento",
        "subscript": "rel"
      },
      {
        "word": "BVMF3",
        "subscript": "nmod"
      },
      {
        "word": "Midia",
        "subscript": "obl"
      }
    ],
    "args": {
      "arg0": "$BVMF3",
      "arg1": "-",
      "arg2": "Sobre Noticia Veiculada Em a Midia"
    }
  },
  {
    "Texto": "Um esclarecimento : minha carteira é muito sobrecarregada de VALE5 por causa de opções . PETR4 tenho 24 % . Ou seja : 80 % de a carteira PETROVALE !",
    "marks": [
      {
        "word": "esclarecimento",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "esclarecimento",
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
    "Texto": "$CSAN3 - Cosan ( csan-nm ) - Esclarecimentos http://t.co/m3qpF8clYt",
    "marks": [
      {
        "word": "Esclarecimento",
        "type": "rel"
      },
      {
        "word": "$CSAN3",
        "type": "arg0"
      }
    ],
    "subscripts": [
      {
        "word": "Esclarecimento",
        "subscript": "rel"
      },
      {
        "word": "CSAN3",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "$CSAN3",
      "arg1": "-",
      "arg2": "-"
    }
  },
  {
    "Texto": "$ELET3 - Eletrobras ( elet-n1 ) - Esclarecimentos http://t.co/MtkZZZE6DE",
    "marks": [
      {
        "word": "Esclarecimento",
        "type": "rel"
      },
      {
        "word": "$ELET3",
        "type": "arg0"
      }
    ],
    "subscripts": [
      {
        "word": "Esclarecimento",
        "subscript": "rel"
      },
      {
        "word": "ELET3",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "$ELET3",
      "arg1": "-",
      "arg2": "-"
    }
  },
  {
    "Texto": "$ELET3 - Eletrobras ( elet-n1 ) - Esclarecimento Sobre Noticia http://t.co/0WcHasfUxB",
    "marks": [
      {
        "word": "Esclarecimento",
        "type": "rel"
      },
      {
        "word": "$ELET3",
        "type": "arg0"
      },
      {
        "word": "Sobre Noticia",
        "type": "arg2"
      }
    ],
    "subscripts": [
      {
        "word": "Esclarecimento",
        "subscript": "rel"
      },
      {
        "word": "ELET3",
        "subscript": "nmod"
      },
      {
        "word": "Noticia",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "$ELET3",
      "arg1": "-",
      "arg2": "Sobre Noticia"
    }
  },
  {
    "Texto": "$CPFE3 - Cpfl Energia ( cpfe-nm ) - Esclarecimentos http://t.co/Nt4THx4zIG",
    "marks": [
      {
        "word": "Esclarecimento",
        "type": "rel"
      },
      {
        "word": "$CPFE3",
        "type": "arg0"
      }
    ],
    "subscripts": [
      {
        "word": "Esclarecimento",
        "subscript": "rel"
      },
      {
        "word": "CPFE3",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "$CPFE3",
      "arg1": "-",
      "arg2": "-"
    }
  },
  {
    "Texto": "$PETR3 - Petrobras ( petr ) - Esclarecimento Sobre A Plataforma P-55 http://t.co/sncQaeb1xB",
    "marks": [
      {
        "word": "Esclarecimento",
        "type": "rel"
      },
      {
        "word": "$PETR3",
        "type": "arg0"
      },
      {
        "word": "Sobre A Plataforma P-5",
        "type": "arg2"
      }
    ],
    "subscripts": [
      {
        "word": "Esclarecimento",
        "subscript": "rel"
      },
      {
        "word": "PETR3",
        "subscript": "nmod"
      },
      {
        "word": "5",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "$PETR3",
      "arg1": "-",
      "arg2": "Sobre A Plataforma P-5"
    }
  },
  {
    "Texto": "$BBDC3 - Bradesco ( bbdc-n1 ) - Esclarecimentos http://t.co/AxeVZM5W2k",
    "marks": [
      {
        "word": "Esclarecimento",
        "type": "rel"
      },
      {
        "word": "$BBDC3",
        "type": "arg0"
      }
    ],
    "subscripts": [
      {
        "word": "Esclarecimento",
        "subscript": "rel"
      },
      {
        "word": "BBDC3",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "$BBDC3",
      "arg1": "-",
      "arg2": "-"
    }
  },
  {
    "Texto": "$CRUZ3 - Souza Cruz ( cruz ) - Esclarecimentos http://t.co/hDQBbqn7lt",
    "marks": [
      {
        "word": "Esclarecimento",
        "type": "rel"
      },
      {
        "word": "$CRUZ3",
        "type": "arg0"
      }
    ],
    "subscripts": [
      {
        "word": "Esclarecimento",
        "subscript": "rel"
      },
      {
        "word": "CRUZ3",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "$CRUZ3",
      "arg1": "-",
      "arg2": "-"
    }
  },
  {
    "Texto": "$BISA3 - Brookfield ( bisa-nm ) - Esclarecimentos http://t.co/nrsJcZH5Nu",
    "marks": [
      {
        "word": "Esclarecimento",
        "type": "rel"
      },
      {
        "word": "$BISA3",
        "type": "arg0"
      }
    ],
    "subscripts": [
      {
        "word": "Esclarecimento",
        "subscript": "rel"
      },
      {
        "word": "BISA3",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "$BISA3",
      "arg1": "-",
      "arg2": "-"
    }
  },
  {
    "Texto": "$ENBR3 - Energias Br ( enbr-nm ) - Esclarecimentos http://t.co/bDcgYaz56z",
    "marks": [
      {
        "word": "Esclarecimento",
        "type": "rel"
      },
      {
        "word": "$ENBR3",
        "type": "arg0"
      }
    ],
    "subscripts": [
      {
        "word": "Esclarecimento",
        "subscript": "rel"
      },
      {
        "word": "ENBR3",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "$ENBR3",
      "arg1": "-",
      "arg2": "-"
    }
  },
  {
    "Texto": "$EMBR3 - Embraer ( embr-nm ) - Esclarecimentos http://t.co/NYEDvjpV7O",
    "marks": [
      {
        "word": "Esclarecimento",
        "type": "rel"
      },
      {
        "word": "$EMBR3",
        "type": "arg0"
      }
    ],
    "subscripts": [
      {
        "word": "Esclarecimento",
        "subscript": "rel"
      },
      {
        "word": "EMBR3",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "$EMBR3",
      "arg1": "-",
      "arg2": "-"
    }
  },
  {
    "Texto": "$LIGT3 - Light S/a ( ligt-nm ) - Esclarecimento Sobre Materia Veiculada Em o Broadcast http://t.co/BiBpJBjMwZ",
    "marks": [
      {
        "word": "Esclarecimento",
        "type": "rel"
      },
      {
        "word": "$LIGT3",
        "type": "arg0"
      },
      {
        "word": "Sobre Materia Veiculada Em o Broadcast",
        "type": "arg2"
      }
    ],
    "subscripts": [
      {
        "word": "Esclarecimento",
        "subscript": "rel"
      },
      {
        "word": "LIGT3",
        "subscript": "nmod"
      },
      {
        "word": "Broadcast",
        "subscript": "obl"
      }
    ],
    "args": {
      "arg0": "$LIGT3",
      "arg1": "-",
      "arg2": "Sobre Materia Veiculada Em o Broadcast"
    }
  },
  {
    "Texto": "$ALLL3 - All Amer Lat ( alll-nm ) - Esclarecimentos Sobre Processo De Arbitragem http://t.co/uRnZ4WwHv2",
    "marks": [
      {
        "word": "Esclarecimento",
        "type": "rel"
      },
      {
        "word": "$ALLL3",
        "type": "arg0"
      },
      {
        "word": "Sobre Processo De Arbitragem",
        "type": "arg2"
      }
    ],
    "subscripts": [
      {
        "word": "Esclarecimento",
        "subscript": "rel"
      },
      {
        "word": "ALLL3",
        "subscript": "nmod"
      },
      {
        "word": "Arbitragem",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "$ALLL3",
      "arg1": "-",
      "arg2": "Sobre Processo De Arbitragem"
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