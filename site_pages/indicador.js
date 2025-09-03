document.addEventListener('DOMContentLoaded', function() {
  const SHOWN_ARGS = ["arg0", "arg1", "arg2"];
  const data = [
  {
    "Texto": "@malcaetano : ITUB4 com IMA-CRASH em 0.88 . É alerta de queda forte , correto ? Mas tem que esperar o indicador virar para baixo , correto ? Abs",
    "marks": [
      {
        "word": "indicador",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "indicador",
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
    "Texto": "RT “ @PedroCerize : Um de os maiores indicadores de o mercado : Capa de a Exame http://t.co/gBRLkPUHaa”// tô vendendo BRFS3 agora . Tem PUT liquida ?",
    "marks": [
      {
        "word": "indicador",
        "type": "rel"
      },
      {
        "word": "mercado",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "indicador",
        "subscript": "rel"
      },
      {
        "word": "mercado",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "mercado",
      "arg2": "-"
    }
  },
  {
    "Texto": "LAME4 em o swing acima de R$ 14,85 parece dar compra ! Recompra de ações é mais um indicador ...",
    "marks": [
      {
        "word": "indicador",
        "type": "rel"
      },
      {
        "word": "Recompra de ações",
        "type": "arg0"
      }
    ],
    "subscripts": [
      {
        "word": "indicador",
        "subscript": "rel"
      },
      {
        "word": "ações",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "Recompra de ações",
      "arg1": "-",
      "arg2": "-"
    }
  },
  {
    "Texto": "OPORTUNIDADE #PETROBRAS : O MENOR PREÇO EM 20 ANOS ? #PETR4 Em a semana passada , vários indicadores de péssima ... http://t.co/o57yNlV4WC",
    "marks": [
      {
        "word": "indicador",
        "type": "rel"
      },
      {
        "word": "de péssima",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "indicador",
        "subscript": "rel"
      },
      {
        "word": "péssima",
        "subscript": "nmod:strunc"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de péssima",
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