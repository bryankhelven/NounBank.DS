document.addEventListener('DOMContentLoaded', function() {
  const SHOWN_ARGS = ["arg0", "arg1", "arg2"];
  const data = [
  {
    "Texto": "$ELET3 - Eletrobras ( elet-n1 ) - Material A Disp. ( indic. De Candidatos A Membros De o Ca ) http://t.co/myIM01vKEt",
    "marks": [
      {
        "word": "Candidato",
        "type": "rel"
      },
      {
        "word": "de Candidatos",
        "type": "arg1"
      },
      {
        "word": "De o Ca",
        "type": "arg2"
      }
    ],
    "subscripts": [
      {
        "word": "Candidato",
        "subscript": "rel"
      },
      {
        "word": "Candidatos",
        "subscript": "nmod"
      },
      {
        "word": "o",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de Candidatos",
      "arg2": "De o Ca"
    }
  },
  {
    "Texto": "$ELET3 - Eletrobras ( elet-n1 ) - Material A Disposicao ( candidatos A Membros De o Ca E Cf ) http://t.co/l9Z7Qm4mAV",
    "marks": [
      {
        "word": "candidato",
        "type": "rel"
      },
      {
        "word": "candidatos",
        "type": "arg1"
      },
      {
        "word": "De o Ca E Cf",
        "type": "arg2"
      }
    ],
    "subscripts": [
      {
        "word": "candidato",
        "subscript": "rel"
      },
      {
        "word": "candidatos",
        "subscript": "parataxis"
      },
      {
        "word": "o",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "candidatos",
      "arg2": "De o Ca E Cf"
    }
  },
  {
    "Texto": "$ELET3 - Eletrobras ( elet-n1 ) - Material A Disposicao ( indicacao De Candidatos ) http://t.co/yIXX3MnjIO",
    "marks": [
      {
        "word": "Candidato",
        "type": "rel"
      },
      {
        "word": "de Candidatos",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "Candidato",
        "subscript": "rel"
      },
      {
        "word": "Candidatos",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de Candidatos",
      "arg2": "-"
    }
  },
  {
    "Texto": "$PETR3 - Petrobras ( petr ) - candidatos Indicados Por o Acionista Controlador Para O Ca E Cf http://t.co/D7kOIsDzeZ",
    "marks": [
      {
        "word": "candidato",
        "type": "rel"
      },
      {
        "word": "Indicados Por o Acionista Controlador",
        "type": "arg0"
      },
      {
        "word": "candidatos",
        "type": "arg1"
      },
      {
        "word": "Para O Ca E Cf",
        "type": "arg2"
      }
    ],
    "subscripts": [
      {
        "word": "candidato",
        "subscript": "rel"
      },
      {
        "word": "Controlador",
        "subscript": "amod"
      },
      {
        "word": "candidatos",
        "subscript": "root"
      },
      {
        "word": "O",
        "subscript": "obl"
      }
    ],
    "args": {
      "arg0": "Indicados Por o Acionista Controlador",
      "arg1": "candidatos",
      "arg2": "Para O Ca E Cf"
    }
  },
  {
    "Texto": "$PETR3 - Petrobras ( petr ) - Candidatos Ind. Por os Acionistas Nao Controladores P. Ca E Cf http://t.co/3ikzgdwt6j",
    "marks": [
      {
        "word": "Candidato",
        "type": "rel"
      },
      {
        "word": "Ind. Por os Acionistas Nao Controladores",
        "type": "arg0"
      },
      {
        "word": "Candidatos",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "Candidato",
        "subscript": "rel"
      },
      {
        "word": "Controladores",
        "subscript": "amod"
      },
      {
        "word": "Candidatos",
        "subscript": "root"
      }
    ],
    "args": {
      "arg0": "Ind. Por os Acionistas Nao Controladores",
      "arg1": "Candidatos",
      "arg2": "-"
    }
  },
  {
    "Texto": "$PETR3 - Petrobras ( petr ) - Candidatos Indicados Por o Acionista Nao Controlador Para O Ca http://t.co/0UddVivQ3V",
    "marks": [
      {
        "word": "Candidato",
        "type": "rel"
      },
      {
        "word": "Indicados Por o Acionista Nao Controlador",
        "type": "arg0"
      },
      {
        "word": "Candidatos",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "Candidato",
        "subscript": "rel"
      },
      {
        "word": "Controlador",
        "subscript": "amod"
      },
      {
        "word": "Candidatos",
        "subscript": "root"
      }
    ],
    "args": {
      "arg0": "Indicados Por o Acionista Nao Controlador",
      "arg1": "Candidatos",
      "arg2": "-"
    }
  },
  {
    "Texto": "A Petr4 sobe porque há rumor que candidatos de a oposição estão ganhando terreno e não porque vão melhorar a gestão de ela #EuAcreditoNoMantega",
    "marks": [
      {
        "word": "candidato",
        "type": "rel"
      },
      {
        "word": "candidato",
        "type": "arg1"
      },
      {
        "word": "de a oposição",
        "type": "arg2"
      }
    ],
    "subscripts": [
      {
        "word": "candidato",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "candidato",
      "arg2": "de a oposição"
    }
  },
  {
    "Texto": "$RSID3 - Rossi Resid ( rsid-nm ) - Indicacao De Candidato A Membro De o Conselho De Admin . http://t.co/XAZrrT0xHk",
    "marks": [
      {
        "word": "Candidato",
        "type": "rel"
      },
      {
        "word": "de Candidato",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "Candidato",
        "subscript": "rel"
      },
      {
        "word": "Candidato",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de Candidato",
      "arg2": "-"
    }
  },
  {
    "Texto": "$CIEL3 - Cielo ( ciel-nm ) - Material A Disposicao ( indicacao De Candidatos A Membros De o Ca http://t.co/3GExefQijD",
    "marks": [
      {
        "word": "Candidato",
        "type": "rel"
      },
      {
        "word": "de Candidatos",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "Candidato",
        "subscript": "rel"
      },
      {
        "word": "Candidatos",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de Candidatos",
      "arg2": "-"
    }
  },
  {
    "Texto": "$PDGR3 - Pdg Realt ( pdgr-nm ) - Material A Disposicao ( indicacao De Candidatos Para O Ca ) http://t.co/8KQgdZbmKD",
    "marks": [
      {
        "word": "Candidato",
        "type": "rel"
      },
      {
        "word": "de Candidatos",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "Candidato",
        "subscript": "rel"
      },
      {
        "word": "Candidatos",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de Candidatos",
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