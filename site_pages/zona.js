document.addEventListener('DOMContentLoaded', function() {
  const SHOWN_ARGS = ["arg0", "arg1", "arg2"];
  const data = [
  {
    "Texto": "Day trade VALE5 Previsto e evitado zona de alto risco e falta de liquidez absurda 27-03-14 http://t.co/FZV3HPrEG3",
    "marks": [
      {
        "word": "zona",
        "type": "rel"
      },
      {
        "word": "alto risco",
        "type": "arg0"
      },
      {
        "word": "falta de liquidez absurda",
        "type": "arg2"
      }
    ],
    "subscripts": [
      {
        "word": "zona",
        "subscript": "rel"
      },
      {
        "word": "risco",
        "subscript": "nmod"
      },
      {
        "word": "liquidez",
        "subscript": "amod"
      }
    ],
    "args": {
      "arg0": "alto risco",
      "arg1": "-",
      "arg2": "falta de liquidez absurda"
    }
  },
  {
    "Texto": "vale5 ta numa zona de preço complicado. nem compra nem venda",
    "marks": [
      {
        "word": "zona",
        "type": "rel"
      },
      {
        "word": "preço complicado",
        "type": "arg0"
      }
    ],
    "subscripts": [
      {
        "word": "zona",
        "subscript": "rel"
      },
      {
        "word": "complicado",
        "subscript": "amod"
      }
    ],
    "args": {
      "arg0": "preço complicado",
      "arg1": "-",
      "arg2": "-"
    }
  },
  {
    "Texto": "Vale5 - Diário ::: Linha de Tendência de baixa, zona de sobre-venda! http://t.co/m5dEkcVXf3",
    "marks": [
      {
        "word": "zona",
        "type": "rel"
      },
      {
        "word": "sobre-venda",
        "type": "arg0"
      }
    ],
    "subscripts": [
      {
        "word": "zona",
        "subscript": "rel"
      },
      {
        "word": "venda",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "sobre-venda",
      "arg1": "-",
      "arg2": "-"
    }
  },
  {
    "Texto": "ELET6 corrigiu e chegou na zona de suporte em fibo http://t.co/E6M95yYksW",
    "marks": [
      {
        "word": "zona",
        "type": "rel"
      },
      {
        "word": "suporte",
        "type": "arg0"
      },
      {
        "word": "em fibo",
        "type": "arg2"
      }
    ],
    "subscripts": [
      {
        "word": "zona",
        "subscript": "rel"
      },
      {
        "word": "suporte",
        "subscript": "nmod"
      },
      {
        "word": "fibo",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "suporte",
      "arg1": "-",
      "arg2": "em fibo"
    }
  },
  {
    "Texto": "#USIM5 está se segurando bem , zona muito boa de suporte . Se furar 9,07 o movimento pode começar a ganhar força .",
    "marks": [
      {
        "word": "zona",
        "type": "rel"
      },
      {
        "word": "suporte",
        "type": "arg0"
      }
    ],
    "subscripts": [
      {
        "word": "zona",
        "subscript": "rel"
      },
      {
        "word": "suporte",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "suporte",
      "arg1": "-",
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