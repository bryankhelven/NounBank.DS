document.addEventListener('DOMContentLoaded', function() {
  const SHOWN_ARGS = ["arg1", "arg2"];
  const data = [
  {
    "Texto": "Spread de 0,08 em a #PETR4 que bosta de mercado ! 0,51 % de variação entre a compra e a venda",
    "marks": [
      {
        "word": "Spread",
        "type": "rel"
      },
      {
        "word": "de 0,08",
        "type": "arg2"
      }
    ],
    "subscripts": [
      {
        "word": "Spread",
        "subscript": "rel"
      },
      {
        "word": "0",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg1": "-",
      "arg2": "de 0,08"
    }
  },
  {
    "Texto": "Spread entre ITUB4 x BBDC4 abrindo novamente . Oportunidades a vista ?",
    "marks": [
      {
        "word": "Spread",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "Spread",
        "subscript": "rel"
      }
    ],
    "args": {
      "arg1": "-",
      "arg2": "-"
    }
  },
  {
    "Texto": "#ITUB4 muito interessante acompanhar de perto um ativo , até estes dias atrás Itaú só subia , e tinha um spread em a ... http://t.co/wzdYVUGFa7",
    "marks": [
      {
        "word": "spread",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "spread",
        "subscript": "rel"
      }
    ],
    "args": {
      "arg1": "-",
      "arg2": "-"
    }
  },
  {
    "Texto": "Entrando em Long&Short PETR4 x PETR3 com spread de R$ 0,57 ! Fica a dica e quem quiser o relatorio é só pedir !",
    "marks": [
      {
        "word": "spread",
        "type": "rel"
      },
      {
        "word": "de R$ 0,57",
        "type": "arg2"
      }
    ],
    "subscripts": [
      {
        "word": "spread",
        "subscript": "rel"
      },
      {
        "word": "R",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg1": "-",
      "arg2": "de R$ 0,57"
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