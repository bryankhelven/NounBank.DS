document.addEventListener('DOMContentLoaded', function() {
  const SHOWN_ARGS = ["arg0", "arg1", "arg2"];
  const data = [
  {
    "Texto": "Top 10 de a Semana A PETROBRAS ( PETR4 ) encerrou a as investigações internas para apurar as denúncias de supostos ... http://t.co/HRkGHCNrnl",
    "marks": [
      {
        "word": "denúncia",
        "type": "rel"
      },
      {
        "word": "de supostos",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "denúncia",
        "subscript": "rel"
      },
      {
        "word": "supostos",
        "subscript": "nmod:strunc"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de supostos",
      "arg2": "-"
    }
  },
  {
    "Texto": "#PETR4 indo p picas @SakaSakamori : Denúncia . Estrangulamento $ $ $ de a Petrobras http://t.co/RMBjR9d80F Beira de o colapso ! #DilmaTemMedoDaCPI",
    "marks": [
      {
        "word": "Denúncia",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "Denúncia",
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
    "Texto": "PETR4 6,61 % hoje 16,46 + altas de a semana passada . Hã ? Denúncias ? Passadena ? Cerveró ?",
    "marks": [
      {
        "word": "Denúncia",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "Denúncia",
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
    "Texto": "Parece que essas denúncias contra a PODRIDÃO que o PT tem feito com a PeTebrás ( PETR4 ) têm dado ânimo a os investidores . Continua subindo !",
    "marks": [
      {
        "word": "denúncia",
        "type": "rel"
      },
      {
        "word": "contra a PODRIDÃO que o PT tem feito com a PeTebrás ( PETR4 )",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "denúncia",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "obl"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "contra a PODRIDÃO que o PT tem feito com a PeTebrás ( PETR4 )",
      "arg2": "-"
    }
  },
  {
    "Texto": "#PETR4 RT @agenciabrasil : Petrobras : ministros de a Justiça e de a CGU vão a a Câmara para falar sobre denúncias http://t.co/zhV2Gty8Ny",
    "marks": [
      {
        "word": "denúncia",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "denúncia",
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