document.addEventListener('DOMContentLoaded', function() {
  const SHOWN_ARGS = ["arg0", "arg1", "arg2"];
  const data = [
  {
    "Texto": "#SBSP3 E cadê o racionamento ! ! ! http://t.co/ApULfZt5Sr",
    "marks": [
      {
        "word": "racionamento",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "racionamento",
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
    "Texto": "Sabesp faz manobra para evitar racionamento , Vale e mais 3 estão em o radar : Ainda entre os de ... http://t.co/3dIZzbmqGA #infomoney #vale5",
    "marks": [
      {
        "word": "racionamento",
        "type": "rel"
      },
      {
        "word": "Sabesp",
        "type": "arg0"
      }
    ],
    "subscripts": [
      {
        "word": "racionamento",
        "subscript": "rel"
      },
      {
        "word": "Sabesp",
        "subscript": "nsubj"
      }
    ],
    "args": {
      "arg0": "Sabesp",
      "arg1": "-",
      "arg2": "-"
    }
  },
  {
    "Texto": "RT @chrinvestor : Com o provável racionamento de água em SP , atualmente investir em a Sabesp representa um risco elevado . #SBSP3 - 23 % em 2014 .",
    "marks": [
      {
        "word": "racionamento",
        "type": "rel"
      },
      {
        "word": "de água",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "racionamento",
        "subscript": "rel"
      },
      {
        "word": "água",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de água",
      "arg2": "-"
    }
  },
  {
    "Texto": "A estimativa de prejuízo para a Petrobras em o caso de racionamento é de R$ 620 milhões de dólares . Pobre acionista minoritário ! ! ! #PETR4",
    "marks": [
      {
        "word": "racionamento",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "racionamento",
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
    "Texto": "RT @chrinvestor : A estimativa de prejuízo para a Petrobras em o caso de racionamento é de R$ 620 milhões de dólares . Pobre acionista minoritá …",
    "marks": [
      {
        "word": "racionamento",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "racionamento",
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
    "Texto": "#SBSP3 imagina a rapaziada em o ônibus em São Paulo com racionamento de água ! ! ! PQP ! ! ! vai feder ! ! !",
    "marks": [
      {
        "word": "racionamento",
        "type": "rel"
      },
      {
        "word": "de água",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "racionamento",
        "subscript": "rel"
      },
      {
        "word": "água",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de água",
      "arg2": "-"
    }
  },
  {
    "Texto": "Com o provável racionamento de água em #SP , atualmente #investir em a #Sabesp representa um risco elevado . #SBSP3 - 23 % em 2014 .",
    "marks": [
      {
        "word": "racionamento",
        "type": "rel"
      },
      {
        "word": "de água",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "racionamento",
        "subscript": "rel"
      },
      {
        "word": "água",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de água",
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