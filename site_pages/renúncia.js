document.addEventListener('DOMContentLoaded', function() {
  const SHOWN_ARGS = ["arg0", "arg1"];
  const data = [
  {
    "Texto": "TEMPO REAL : Via Varejo despenca mais de 5 % após renúncia de CEO , Vale ON cai quase 2 % : Confi ... http://t.co/uDSHvArXvb #infomoney #vale5",
    "marks": [
      {
        "word": "renúncia",
        "type": "rel"
      },
      {
        "word": "CEO",
        "type": "arg0"
      }
    ],
    "subscripts": [
      {
        "word": "renúncia",
        "subscript": "rel"
      },
      {
        "word": "CEO",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "CEO",
      "arg1": "-"
    }
  },
  {
    "Texto": "$BRFS3 - Brf Sa ( brfs ) - Renuncia E Eleicao De Membros De o C.a. http://t.co/f41iizYOak",
    "marks": [
      {
        "word": "renúncia",
        "type": "rel"
      },
      {
        "word": "De Membros De o C.a.",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "renúncia",
        "subscript": "rel"
      },
      {
        "word": "Membros",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "De Membros De o C.a."
    }
  },
  {
    "Texto": "$BRFS3 - Brf Sa ( brfs-nm ) - Renuncia E Eleicao De Membros De o C.a. ( complemento ) http://t.co/0uRQWZmhv5",
    "marks": [
      {
        "word": "renúncia",
        "type": "rel"
      },
      {
        "word": "De Membros De o C.a.",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "renúncia",
        "subscript": "rel"
      },
      {
        "word": "Membros",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "De Membros De o C.a."
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