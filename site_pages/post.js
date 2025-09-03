document.addEventListener('DOMContentLoaded', function() {
  const SHOWN_ARGS = ["arg0", "arg1", "arg2"];
  const data = [
  {
    "Texto": "PETR4 : acabei de atualizar mais um post em o fórum sobre a PETR4 . Quem quiser dar uma olhada , acesse o link : ... http://t.co/67gH4nXRID",
    "marks": [
      {
        "word": "post",
        "type": "rel"
      },
      {
        "word": "sobre a PETR4",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "post",
        "subscript": "rel"
      },
      {
        "word": "PETR4",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "sobre a PETR4",
      "arg2": "-"
    }
  },
  {
    "Texto": "Olha o Post ! ! ! RT @Live_Trade : #petr4 agora que vi , o King Kong tem briga em 15,35",
    "marks": [
      {
        "word": "Post",
        "type": "rel"
      },
      {
        "word": "RT @Live_Trade : #petr4 agora que vi , o King Kong tem briga em 15,35",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "Post",
        "subscript": "rel"
      },
      {
        "word": "35",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "RT @Live_Trade : #petr4 agora que vi , o King Kong tem briga em 15,35",
      "arg2": "-"
    }
  },
  {
    "Texto": "@clubedopairico Podia rolar um post sobre isso , heim Zé ? ! A perda de o peso de a Petr4 , as causas e possíves efeitos . #ERROR!",
    "marks": [
      {
        "word": "post",
        "type": "rel"
      },
      {
        "word": "sobre isso",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "post",
        "subscript": "rel"
      },
      {
        "word": "isso",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "sobre isso",
      "arg2": "-"
    }
  },
  {
    "Texto": "FOI ! ! ! OBJ CUMPRIDO ! ! ! RT @Live_Trade: Quem lembra de o Post #Vale5armando uma linda venda de diário ? pois é 27,35 obj de a queda .",
    "marks": [
      {
        "word": "Post",
        "type": "rel"
      },
      {
        "word": "#Vale5armando uma linda venda de diário",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "Post",
        "subscript": "rel"
      },
      {
        "word": "diário",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "#Vale5armando uma linda venda de diário",
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