document.addEventListener('DOMContentLoaded', function() {
  const SHOWN_ARGS = ["arg0", "arg1", "arg2"];
  const data = [
  {
    "Texto": "$LREN3 - Lojas Renner ( lren-nm ) - Declaracao E Pagamento De Juros Sobre O Capital Proprio http://t.co/flXNxtpbT1",
    "marks": [
      {
        "word": "declaração",
        "type": "rel"
      },
      {
        "word": "De Juros Sobre O Capital Proprio",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "declaração",
        "subscript": "rel"
      },
      {
        "word": "Juros",
        "subscript": "amod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "De Juros Sobre O Capital Proprio",
      "arg2": "-"
    }
  },
  {
    "Texto": "Dica para a Mega-Sena : o número de o recibo de a sua declaração de Imposto de renda tem 6 dígitos joga em a Mega Sena #ibov #vale5 #petr4 #sorte",
    "marks": [
      {
        "word": "declaração",
        "type": "rel"
      },
      {
        "word": "de Imposto de renda tem 6 dígitos",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "declaração",
        "subscript": "rel"
      },
      {
        "word": "Imposto",
        "subscript": "obj"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de Imposto de renda tem 6 dígitos",
      "arg2": "-"
    }
  },
  {
    "Texto": "Dica de Declaração de o Imposto de Renda > Situação em 31/12/2013 [ bêbado vendo os fogos de artifício ] #ibov #petr4 #vale5 receita federal",
    "marks": [
      {
        "word": "Declaração",
        "type": "rel"
      },
      {
        "word": "de o Imposto de Renda",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "Declaração",
        "subscript": "rel"
      },
      {
        "word": "o",
        "subscript": "flat:name"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de o Imposto de Renda",
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