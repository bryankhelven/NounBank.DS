document.addEventListener('DOMContentLoaded', function() {
  const SHOWN_ARGS = ["arg0", "arg1"];
  const data = [
  {
    "Texto": "Bora #llxl3 coragem rsrsr",
    "marks": [
      {
        "word": "coragem",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "coragem",
        "subscript": "rel"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "-"
    }
  },
  {
    "Texto": "vai fazer o mesmo q a #hrt . dá uma animadinha e dopo se enterra ! RT @Live_Trade : Bora #llxl3 coragem rsrsr",
    "marks": [
      {
        "word": "coragem",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "coragem",
        "subscript": "rel"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "-"
    }
  },
  {
    "Texto": "E quem tem coragem de vender #BRFS3 ? !",
    "marks": [
      {
        "word": "coragem",
        "type": "rel"
      },
      {
        "word": "quem",
        "type": "arg0"
      },
      {
        "word": "de vender #BRFS3",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "coragem",
        "subscript": "rel"
      },
      {
        "word": "quem",
        "subscript": "nsubj"
      },
      {
        "word": "vender",
        "subscript": "obj"
      }
    ],
    "args": {
      "arg0": "quem",
      "arg1": "de vender #BRFS3"
    }
  },
  {
    "Texto": "Cade coragem para fazer um DT em a #VALE5 aí em a casa de os 26,46 , de o jeito que as coisas andam é um stop em a certa .. #ERROR! sigo observando .",
    "marks": [
      {
        "word": "coragem",
        "type": "rel"
      },
      {
        "word": "para fazer um DT em a #VALE5",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "coragem",
        "subscript": "rel"
      },
      {
        "word": "fazer",
        "subscript": "obj"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "para fazer um DT em a #VALE5"
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