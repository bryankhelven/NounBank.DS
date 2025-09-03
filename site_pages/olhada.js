document.addEventListener('DOMContentLoaded', function() {
  const SHOWN_ARGS = ["arg0", "arg1", "arg2"];
  const data = [
  {
    "Texto": "PETR4 : acabei de atualizar mais um post em o fórum sobre a PETR4 . Quem quiser dar uma olhada , acesse o link : ... http://t.co/67gH4nXRID",
    "marks": [
      {
        "word": "olhada",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "olhada",
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
    "Texto": "@Live_Trade dá só uma olhadinha em o gráfico semanal de a vale5 e veja que bonito o padrão de reversão de os candles .",
    "marks": [
      {
        "word": "olhada",
        "type": "rel"
      },
      {
        "word": "Live_trade",
        "type": "arg0"
      },
      {
        "word": "em o gráfico semanal de a vale5",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "olhada",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "Live_trade",
      "arg1": "em o gráfico semanal de a vale5",
      "arg2": "-"
    }
  },
  {
    "Texto": "@Live_Trade marcos , depois tem como uma olhada vem vale5 ? comprado em os 27 .",
    "marks": [
      {
        "word": "olhada",
        "type": "rel"
      },
      {
        "word": "marcos",
        "type": "arg0"
      },
      {
        "word": "vem vale5?",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "olhada",
        "subscript": "rel"
      },
      {
        "word": "marcos",
        "subscript": "nmod"
      },
      {
        "word": "vale5",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "marcos",
      "arg1": "vem vale5?",
      "arg2": "-"
    }
  },
  {
    "Texto": "RT @Jgrafista11 : @webtraderx @BlackWizardX Vou dar uma olhada com calma depois de as 9 de a noite por as Ondas de Elliot e fiquei te devendo de a …",
    "marks": [
      {
        "word": "olhada",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "olhada",
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
    "Texto": "@Live_Trade Marcos , pode dar uma olhada em a OIBR4 ? ? ?",
    "marks": [
      {
        "word": "olhada",
        "type": "rel"
      },
      {
        "word": "em a OIBR4",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "olhada",
        "subscript": "rel"
      },
      {
        "word": "OIBR4",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "em a OIBR4",
      "arg2": "-"
    }
  },
  {
    "Texto": "@CaciqueInvest E #brfs3 então ... vc já deu uma olhada ?",
    "marks": [
      {
        "word": "olhada",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "olhada",
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