document.addEventListener('DOMContentLoaded', function() {
  const SHOWN_ARGS = ["arg0", "arg1", "arg2"];
  const data = [
  {
    "Texto": "#vale5 lucra 5,91 bi em o trimestre , a estimativa de mercado por a agência Bloomberg era de um lucro líquido de R$ 6,23 bilhões em o período .",
    "marks": [
      {
        "word": "estimativo",
        "type": "rel"
      },
      {
        "word": "por a agência Bloomberg",
        "type": "arg0"
      },
      {
        "word": "de mercado",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "estimativo",
        "subscript": "rel"
      },
      {
        "word": "Bloomberg",
        "subscript": "nmod"
      },
      {
        "word": "mercado",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "por a agência Bloomberg",
      "arg1": "de mercado",
      "arg2": "-"
    }
  },
  {
    "Texto": "A estimativa de prejuízo para a Petrobras em o caso de racionamento é de R$ 620 milhões de dólares . Pobre acionista minoritário ! ! ! #PETR4",
    "marks": [
      {
        "word": "estimativo",
        "type": "rel"
      },
      {
        "word": "de prejuízo para a Petrobras em o caso de racionamento",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "estimativo",
        "subscript": "rel"
      },
      {
        "word": "prejuízo",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de prejuízo para a Petrobras em o caso de racionamento",
      "arg2": "-"
    }
  },
  {
    "Texto": "RT @chrinvestor : A estimativa de prejuízo para a Petrobras em o caso de racionamento é de R$ 620 milhões de dólares . Pobre acionista minoritá …",
    "marks": [
      {
        "word": "estimativo",
        "type": "rel"
      },
      {
        "word": "de prejuízo para a Petrobras em o caso de racionamento",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "estimativo",
        "subscript": "rel"
      },
      {
        "word": "prejuízo",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de prejuízo para a Petrobras em o caso de racionamento",
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