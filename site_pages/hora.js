document.addEventListener('DOMContentLoaded', function() {
  const SHOWN_ARGS = ["arg1", "arg2"];
  const data = [
  {
    "Texto": "Hora de a troca de papéis . A ordem de ALLL3 e BVMF3 equivale a ' vender a mercado ' , isto é , sairá por o preço de o ... http://t.co/gqf12W4XnP",
    "marks": [
      {
        "word": "Hora",
        "type": "rel"
      },
      {
        "word": "troca de papéis",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "Hora",
        "subscript": "rel"
      },
      {
        "word": "papéis",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg1": "troca de papéis",
      "arg2": "-"
    }
  },
  {
    "Texto": "Piores ações de março se descolaram muito de o índice , é hora de comprar ? : As cinco maiores qu ... http://t.co/Cf9XCzdiN1 #infomoney #vale5",
    "marks": [
      {
        "word": "hora",
        "type": "rel"
      },
      {
        "word": "de comprar",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "hora",
        "subscript": "rel"
      },
      {
        "word": "comprar",
        "subscript": "acl"
      }
    ],
    "args": {
      "arg1": "de comprar",
      "arg2": "-"
    }
  },
  {
    "Texto": "Hora de comprar mais PETR4 RT @JornalOGlobo : Ações de a Petrobras caem mais de 3 % e derrubam Bolsa . http://t.co/LJluyesRk5",
    "marks": [
      {
        "word": "Hora",
        "type": "rel"
      },
      {
        "word": "de comprar",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "Hora",
        "subscript": "rel"
      },
      {
        "word": "comprar",
        "subscript": "acl"
      }
    ],
    "args": {
      "arg1": "de comprar",
      "arg2": "-"
    }
  },
  {
    "Texto": "#BBAS3.SA anunciou hoje #JSCP em a #BOVESPA . Hora de manter posição , cancelei minhas vendas .",
    "marks": [
      {
        "word": "Hora",
        "type": "rel"
      },
      {
        "word": "de manter posição",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "Hora",
        "subscript": "rel"
      },
      {
        "word": "manter",
        "subscript": "obj"
      }
    ],
    "args": {
      "arg1": "de manter posição",
      "arg2": "-"
    }
  },
  {
    "Texto": "@Live_Trade tenho um ponto a fazer que é sobre a petr4 , de aqui a pouco será a hora de ela desabar , e o mini junto , é possível em a sua análise ?",
    "marks": [
      {
        "word": "hora",
        "type": "rel"
      },
      {
        "word": "de ela desabar",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "hora",
        "subscript": "rel"
      },
      {
        "word": "ela",
        "subscript": "acl"
      }
    ],
    "args": {
      "arg1": "de ela desabar",
      "arg2": "-"
    }
  },
  {
    "Texto": "GOLL4 . 40 zerando posição vendida . por o sim por o não , hora de colocar em o bolso .",
    "marks": [
      {
        "word": "hora",
        "type": "rel"
      },
      {
        "word": "de colocar em o bolso",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "hora",
        "subscript": "rel"
      },
      {
        "word": "colocar",
        "subscript": "obl"
      }
    ],
    "args": {
      "arg1": "de colocar em o bolso",
      "arg2": "-"
    }
  },
  {
    "Texto": "Está em a hora de pensar em a PETR3 e em a PETR4 com mais carinho ?",
    "marks": [
      {
        "word": "hora",
        "type": "rel"
      },
      {
        "word": "de pensar em a PETR4",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "hora",
        "subscript": "rel"
      },
      {
        "word": "pensar",
        "subscript": "obl"
      }
    ],
    "args": {
      "arg1": "de pensar em a PETR4",
      "arg2": "-"
    }
  },
  {
    "Texto": "@ferrisss Quando deu call não entrei em ccx3 , mas agora acho que talvez esteja em a hora , vc ainda tem ? E alll3 , ouvi que pode voar ...",
    "marks": [
      {
        "word": "hora",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "hora",
        "subscript": "rel"
      }
    ],
    "args": {
      "arg1": "-",
      "arg2": "-"
    }
  },
  {
    "Texto": "@DuctorMarcus ainda bem que eu estava comprado em #vale5 e aproveitei toda essa alta . Bora pensar em a melhor hora de realizar @lambari_trader",
    "marks": [
      {
        "word": "hora",
        "type": "rel"
      },
      {
        "word": "de realizar",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "hora",
        "subscript": "rel"
      },
      {
        "word": "realizar",
        "subscript": "acl"
      }
    ],
    "args": {
      "arg1": "de realizar",
      "arg2": "-"
    }
  },
  {
    "Texto": "#suzb5 ainda em queda , mas esboça alta em essa manha . #ibov parece animado com efeito Lula , então parece ser hora de ir as compras",
    "marks": [
      {
        "word": "hora",
        "type": "rel"
      },
      {
        "word": "de ir as compras",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "hora",
        "subscript": "rel"
      },
      {
        "word": "ir",
        "subscript": "obl"
      }
    ],
    "args": {
      "arg1": "de ir as compras",
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