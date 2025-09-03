document.addEventListener('DOMContentLoaded', function() {
  const SHOWN_ARGS = ["arg1"];
  const data = [
  {
    "Texto": "Safra decide diminuir número de ativos de sua carteira , veja as trocas : A instituição decidi ... http://t.co/arnpufVQob #infomoney #vale5",
    "marks": [
      {
        "word": "número",
        "type": "rel"
      },
      {
        "word": "de ativos",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "número",
        "subscript": "rel"
      },
      {
        "word": "ativos",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg1": "de ativos"
    }
  },
  {
    "Texto": "BBSE3 - Safra decide diminuir número de ativos de sua carteira , veja as trocas - InfoMoney Veja mais em : http://t.co/BXD2IkR4E5",
    "marks": [
      {
        "word": "número",
        "type": "rel"
      },
      {
        "word": "de ativos",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "número",
        "subscript": "rel"
      },
      {
        "word": "ativos",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg1": "de ativos"
    }
  },
  {
    "Texto": "\" @itau : E aí , preparado para 2050 ? Até lá , o número de pessoas acima de 60 anos deve triplicar : http://t.co/FxDpaVp4dr ” $QUAL3 ?",
    "marks": [
      {
        "word": "número",
        "type": "rel"
      },
      {
        "word": "de pessoas acima de 60 anos",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "número",
        "subscript": "rel"
      },
      {
        "word": "pessoas",
        "subscript": "obl"
      }
    ],
    "args": {
      "arg1": "de pessoas acima de 60 anos"
    }
  },
  {
    "Texto": "Nº de papéis tomados de BBAS3 subiu 45 % em os últimos 4 pregões .",
    "marks": [
      {
        "word": "número",
        "type": "rel"
      },
      {
        "word": "de papéis tomados de BBAS3",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "número",
        "subscript": "rel"
      },
      {
        "word": "papéis",
        "subscript": "obl"
      }
    ],
    "args": {
      "arg1": "de papéis tomados de BBAS3"
    }
  },
  {
    "Texto": "#PETROBRAS ON PETR3 Preço R$ 15,12 #Oscilação - 1,11 % Nº de Negócios 16.661",
    "marks": [
      {
        "word": "número",
        "type": "rel"
      },
      {
        "word": "de Negócios",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "número",
        "subscript": "rel"
      },
      {
        "word": "Negócios",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg1": "de Negócios"
    }
  },
  {
    "Texto": "O mercado acionário brasileiro é desanimador , um número pífio de investidores cada vez menos empresas listadas , hoje SANB11 entra para a lista .",
    "marks": [
      {
        "word": "número",
        "type": "rel"
      },
      {
        "word": "de investidores",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "número",
        "subscript": "rel"
      },
      {
        "word": "investidores",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg1": "de investidores"
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