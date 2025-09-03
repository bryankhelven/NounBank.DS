document.addEventListener('DOMContentLoaded', function() {
  const SHOWN_ARGS = ["arg0", "arg1", "arg2"];
  const data = [
  {
    "Texto": "BBDC4 Linda WW em o Daytrade , mesmo entrando atrasado ... e saindo cedo .. \";D\" http://t.co/WQPK5B1lNL",
    "marks": [
      {
        "word": "Daytrade",
        "type": "rel"
      },
      {
        "word": "BBDC4",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "Daytrade",
        "subscript": "rel"
      },
      {
        "word": "BBDC4",
        "subscript": "root"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "BBDC4",
      "arg2": "-"
    }
  },
  {
    "Texto": "@Live_Trade Marcos , qual o objetivo daytrade de OIBR4 ? Abs",
    "marks": [
      {
        "word": "daytrade",
        "type": "rel"
      },
      {
        "word": "de OIBR4",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "daytrade",
        "subscript": "rel"
      },
      {
        "word": "OIBR4",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de OIBR4",
      "arg2": "-"
    }
  },
  {
    "Texto": "é quem entrou vendido , day-trade em PETR4 se deu bem !",
    "marks": [
      {
        "word": "daytrade",
        "type": "rel"
      },
      {
        "word": "em PETR4",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "daytrade",
        "subscript": "rel"
      },
      {
        "word": "PETR4",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "em PETR4",
      "arg2": "-"
    }
  },
  {
    "Texto": "Day trade VALE5 Previsto e evitado zona de alto risco e falta de liquidez absurda 27-03-14 http://t.co/FZV3HPrEG3",
    "marks": [
      {
        "word": "daytrade",
        "type": "rel"
      },
      {
        "word": "VALE5",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "daytrade",
        "subscript": "rel"
      },
      {
        "word": "VALE5",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "VALE5",
      "arg2": "-"
    }
  },
  {
    "Texto": "Day trade VALE5 Espetacular – 6 prejuízos previstos e evitados ( - 1,6 % de perda evitada ! ) 24/03/2014 http://t.co/OOP3CcpEDF",
    "marks": [
      {
        "word": "daytrade",
        "type": "rel"
      },
      {
        "word": "VALE5",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "daytrade",
        "subscript": "rel"
      },
      {
        "word": "VALE5",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "VALE5",
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