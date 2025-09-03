document.addEventListener('DOMContentLoaded', function() {
  const SHOWN_ARGS = ["arg0", "arg1", "arg2"];
  const data = [
  {
    "Texto": "#VALE5 : O mau humor em torno de a China e notícias de que algumas siderúrgicas de o País sofreram corte de ... http://t.co/0rnoXMSuoZ",
    "marks": [
      {
        "word": "corte",
        "type": "rel"
      },
      {
        "word": "de",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "corte",
        "subscript": "rel"
      },
      {
        "word": "de",
        "subscript": "fixed"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de",
      "arg2": "-"
    }
  },
  {
    "Texto": "$BBAS3 - Novo corte : BB , Bradesco e Itaú rebaixados [ Newsletter ADVFN ] http://t.co/t9T6MkzNhI",
    "marks": [
      {
        "word": "corte",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "corte",
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
    "Texto": "$ITUB4 - Novo corte : BB , Bradesco e Itaú rebaixados [ Newsletter ADVFN ] http://t.co/3Jddfo4dUz",
    "marks": [
      {
        "word": "corte",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "corte",
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
    "Texto": "$BBDC4 - Novo corte : BB , Bradesco e Itaú rebaixados [ Newsletter ADVFN ] http://t.co/zh1zDo1eQ1",
    "marks": [
      {
        "word": "corte",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "corte",
        "subscript": "rel"
      }
    ],
    "args": {
      "arg0": "-",
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