document.addEventListener('DOMContentLoaded', function() {
  const SHOWN_ARGS = ["arg0", "arg1"];
  const data = [
  {
    "Texto": "HSBC mostra como ganhar dinheiro em a Bolsa com os riscos de ' apagão ' em o Brasil : Quem pensa qu ... http://t.co/3gDnlmElHF #infomoney #vale5",
    "marks": [
      {
        "word": "risco",
        "type": "rel"
      },
      {
        "word": "de ' apagão ' em o Brasi",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "risco",
        "subscript": "rel"
      },
      {
        "word": "Brasi",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de ' apagão ' em o Brasi"
    }
  },
  {
    "Texto": "Boa tarde ! Acompanhe nossa análise de a PETR4 em https://t.co/DxZYot1LSC Clubefinanceiro , risco levado a sério .",
    "marks": [
      {
        "word": "risco",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "risco",
        "subscript": "rel"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "-"
    }
  },
  {
    "Texto": "RT @chrinvestor : Com o provável racionamento de água em SP , atualmente investir em a Sabesp representa um risco elevado . #SBSP3 - 23 % em 2014 .",
    "marks": [
      {
        "word": "risco",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "risco",
        "subscript": "rel"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "-"
    }
  },
  {
    "Texto": "Com o provável racionamento de água em #SP , atualmente #investir em a #Sabesp representa um risco elevado . #SBSP3 - 23 % em 2014 .",
    "marks": [
      {
        "word": "risco",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "risco",
        "subscript": "rel"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "-"
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