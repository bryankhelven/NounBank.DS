document.addEventListener('DOMContentLoaded', function() {
  const SHOWN_ARGS = ["arg0", "arg1"];
  const data = [
  {
    "Texto": "#GOLL4 - Gol pretende reduzir alavancagem em 2014 - http://t.co/3NOyTwIUyu",
    "marks": [
      {
        "word": "alavancagem",
        "type": "rel"
      },
      {
        "word": "Gol",
        "type": "arg0"
      }
    ],
    "subscripts": [
      {
        "word": "alavancagem",
        "subscript": "rel"
      },
      {
        "word": "Gol",
        "subscript": "nsubj"
      }
    ],
    "args": {
      "arg0": "Gol",
      "arg1": "-"
    }
  },
  {
    "Texto": "#petr4 = alta de 6,11 % a as 11:47 a o preço de R$ 15,27 , alavancagem de 20X em a CLEAR , MELHOR TRADE DE O ANO ! Parecido c/ dia de o Investment Grade",
    "marks": [
      {
        "word": "alavancagem",
        "type": "rel"
      },
      {
        "word": "de 20X em a CLEAR",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "alavancagem",
        "subscript": "rel"
      },
      {
        "word": "20X",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de 20X em a CLEAR"
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