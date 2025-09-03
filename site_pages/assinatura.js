document.addEventListener('DOMContentLoaded', function() {
  const SHOWN_ARGS = ["arg0", "arg1", "arg2"];
  const data = [
  {
    "Texto": "$CCRO3 - Ccr Sa ( ccro-nm ) - Fato Relevante - Assinatura De o Aditivo De o Acrodo De Acionista http://t.co/xzQyZPPbBL",
    "marks": [
      {
        "word": "Assinatura",
        "type": "rel"
      },
      {
        "word": "De o Aditivo De o Acrodo De Acionista",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "Assinatura",
        "subscript": "rel"
      },
      {
        "word": "o",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "De o Aditivo De o Acrodo De Acionista",
      "arg2": "-"
    }
  },
  {
    "Texto": "#BOVESPA #CCRO3 CCR divulga fato relevante sobre assinatura de o contrato de concessão - Aeroporto de Confins . http://t.co/hFQSZwrqSn #BR",
    "marks": [
      {
        "word": "assinatura",
        "type": "rel"
      },
      {
        "word": "de o contrato de concessão",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "assinatura",
        "subscript": "rel"
      },
      {
        "word": "o",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de o contrato de concessão",
      "arg2": "-"
    }
  },
  {
    "Texto": "Quero ver quem vai se vender e tirar a assinatura de a CPI de a Petr4 ... Comunas são os + propensos #EuApoioCPIdaPetrobras",
    "marks": [
      {
        "word": "assinatura",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "assinatura",
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
    "Texto": "$CCRO3 - Ccr Sa ( ccro-nm ) - Assinatura De o Contrato De Concessao De o Aeroporto De Confins http://t.co/GRgDTOBXof",
    "marks": [
      {
        "word": "Assinatura",
        "type": "rel"
      },
      {
        "word": "De o Contrato De Concessao De o Aeroporto De Confins",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "Assinatura",
        "subscript": "rel"
      },
      {
        "word": "o",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "De o Contrato De Concessao De o Aeroporto De Confins",
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