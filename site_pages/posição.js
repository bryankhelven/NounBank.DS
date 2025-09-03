document.addEventListener('DOMContentLoaded', function() {
  const SHOWN_ARGS = ["arg0", "arg1", "arg2"];
  const data = [
  {
    "Texto": "@ferrisss @dfittarelli @HudsonPF Correção : Posição aberta #PETR3 E as duas PETR estão em destaque em a procura de D-1",
    "marks": [
      {
        "word": "Posição",
        "type": "rel"
      },
      {
        "word": "aberta",
        "type": "arg2"
      }
    ],
    "subscripts": [
      {
        "word": "Posição",
        "subscript": "rel"
      },
      {
        "word": "aberta",
        "subscript": "amod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "-",
      "arg2": "aberta"
    }
  },
  {
    "Texto": "GOLL4 . 40 zerando posição comprada . Errei a o digitar .",
    "marks": [
      {
        "word": "posição",
        "type": "rel"
      },
      {
        "word": "zerando",
        "type": "arg1"
      },
      {
        "word": "comprada",
        "type": "arg2"
      }
    ],
    "subscripts": [
      {
        "word": "posição",
        "subscript": "rel"
      },
      {
        "word": "zerando",
        "subscript": "root"
      },
      {
        "word": "comprada",
        "subscript": "amod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "zerando",
      "arg2": "comprada"
    }
  },
  {
    "Texto": "@Live_Trade Marcos , o que você acha de compra em a petr4 para posição ?",
    "marks": [
      {
        "word": "posição",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "posição",
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
    "Texto": "Posições que ja alcançaram realização parcial , ajuste em os stops ! vale5 linda a venda ! hehe http://t.co/bAFgR9MAfV",
    "marks": [
      {
        "word": "posição",
        "type": "rel"
      },
      {
        "word": "que já alcançaram realização parcial",
        "type": "arg2"
      }
    ],
    "subscripts": [
      {
        "word": "posição",
        "subscript": "rel"
      },
      {
        "word": "parcial",
        "subscript": "amod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "-",
      "arg2": "que já alcançaram realização parcial"
    }
  },
  {
    "Texto": "Quem mais comprou e vendeu PETR4 hoje ? Posição líquida . http://t.co/8QaAYruiG4",
    "marks": [
      {
        "word": "Posição",
        "type": "rel"
      },
      {
        "word": "líquida",
        "type": "arg2"
      }
    ],
    "subscripts": [
      {
        "word": "Posição",
        "subscript": "rel"
      },
      {
        "word": "líquida",
        "subscript": "amod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "-",
      "arg2": "líquida"
    }
  },
  {
    "Texto": "#BBAS3.SA anunciou hoje #JSCP em a #BOVESPA . Hora de manter posição , cancelei minhas vendas .",
    "marks": [
      {
        "word": "posição",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "posição",
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
    "Texto": "VALE5 tá muito barata . Mas eu não aumento posição perdedora . Vamos administrandoas opções . Encerrei VALED31 c/ lucro de $ 0,52 cada . Not bad ..",
    "marks": [
      {
        "word": "posição",
        "type": "rel"
      },
      {
        "word": "eu",
        "type": "arg0"
      },
      {
        "word": "perdedora",
        "type": "arg2"
      }
    ],
    "subscripts": [
      {
        "word": "posição",
        "subscript": "rel"
      },
      {
        "word": "eu",
        "subscript": "nsubj"
      },
      {
        "word": "perdedora",
        "subscript": "amod"
      }
    ],
    "args": {
      "arg0": "eu",
      "arg1": "-",
      "arg2": "perdedora"
    }
  },
  {
    "Texto": "@Marceloinacios só vou torcer pra não tirar essa posição de a PETR4 , hehehe ,)",
    "marks": [
      {
        "word": "posição",
        "type": "rel"
      },
      {
        "word": "de a PETR4",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "posição",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de a PETR4",
      "arg2": "-"
    }
  },
  {
    "Texto": "Minhas posições : #alll3 stop 8,41 . #hype3 stop 17,69 . #mglu3 stop 8,23 . #bbas3 23,71 . #petr4 não sei oq fazer hehe . Bons negócios a todos .",
    "marks": [
      {
        "word": "posição",
        "type": "rel"
      },
      {
        "word": "minhas",
        "type": "arg0"
      }
    ],
    "subscripts": [
      {
        "word": "posição",
        "subscript": "rel"
      },
      {
        "word": "minhas",
        "subscript": "det"
      }
    ],
    "args": {
      "arg0": "minhas",
      "arg1": "-",
      "arg2": "-"
    }
  },
  {
    "Texto": "#goau4 cruzou média móvel para subir , mas como andou de lado em os últimos dias , vou aguardar para formar posição . Pouco volume de movimento .",
    "marks": [
      {
        "word": "posição",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "posição",
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
    "Texto": "Mercado subiu bem ontem e hoje , geou mudanças em nossas posições : stop em bvmf3 , ccro3 . RP em mrve3 . Posições com rp ja feita continua",
    "marks": [
      {
        "word": "posição",
        "type": "rel"
      },
      {
        "word": "nossas",
        "type": "arg0"
      }
    ],
    "subscripts": [
      {
        "word": "posição",
        "subscript": "rel"
      },
      {
        "word": "nossas",
        "subscript": "det"
      }
    ],
    "args": {
      "arg0": "nossas",
      "arg1": "-",
      "arg2": "-"
    }
  },
  {
    "Texto": "Mercado subiu bem ontem e hoje , geou mudanças em nossas posições : stop em bvmf3 , ccro3 . RP em mrve3 . Posições com rp ja feita continua",
    "marks": [
      {
        "word": "posição",
        "type": "rel"
      },
      {
        "word": "nossas",
        "type": "arg0"
      }
    ],
    "subscripts": [
      {
        "word": "posição",
        "subscript": "rel"
      },
      {
        "word": "nossas",
        "subscript": "det"
      }
    ],
    "args": {
      "arg0": "nossas",
      "arg1": "-",
      "arg2": "-"
    }
  },
  {
    "Texto": "#PCAR4 GRANDE INVESTIDOR PODE TER REDUZIDO POSIÇÃO ITAU hoje fez uma desova de quase 297 milhões de reais a o preço médio de 104,06 .",
    "marks": [
      {
        "word": "POSIÇÃO",
        "type": "rel"
      },
      {
        "word": "REDUZIDO",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "POSIÇÃO",
        "subscript": "rel"
      },
      {
        "word": "REDUZIDO",
        "subscript": "xcomp"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "REDUZIDO",
      "arg2": "-"
    }
  },
  {
    "Texto": "GOLL4 . 40 zerando posição vendida . por o sim por o não , hora de colocar em o bolso .",
    "marks": [
      {
        "word": "posição",
        "type": "rel"
      },
      {
        "word": "zerando",
        "type": "arg1"
      },
      {
        "word": "vendida",
        "type": "arg2"
      }
    ],
    "subscripts": [
      {
        "word": "posição",
        "subscript": "rel"
      },
      {
        "word": "zerando",
        "subscript": "root"
      },
      {
        "word": "vendida",
        "subscript": "acl"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "zerando",
      "arg2": "vendida"
    }
  },
  {
    "Texto": "@DuctorMarcus 19,2 to saindo de o DT comprado 3hs de trade em o BBAS3 , mas to segurando uma posição em swing .",
    "marks": [
      {
        "word": "posição",
        "type": "rel"
      },
      {
        "word": "to",
        "type": "arg0"
      },
      {
        "word": "em swing",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "posição",
        "subscript": "rel"
      },
      {
        "word": "to",
        "subscript": "aux"
      },
      {
        "word": "swing",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "to",
      "arg1": "em swing",
      "arg2": "-"
    }
  },
  {
    "Texto": "Entramos em a compra para a posição de CSNA3 hoje a 9.60 . Estamos em o game .",
    "marks": [
      {
        "word": "posição",
        "type": "rel"
      },
      {
        "word": "de CSNA3 hoje a 9.60",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "posição",
        "subscript": "rel"
      },
      {
        "word": "CSNA3",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de CSNA3 hoje a 9.60",
      "arg2": "-"
    }
  },
  {
    "Texto": "De qualquer forma tento uma compra com posição menor , stop fundo de o dia #petr4",
    "marks": [
      {
        "word": "posição",
        "type": "rel"
      },
      {
        "word": "menor",
        "type": "arg2"
      }
    ],
    "subscripts": [
      {
        "word": "posição",
        "subscript": "rel"
      },
      {
        "word": "menor",
        "subscript": "amod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "-",
      "arg2": "menor"
    }
  },
  {
    "Texto": "Após cair 25 % em o ano , Petrobras perde posição em o Ibovespa e é ultrapassada por o Itaú : As açõ ... http://t.co/NEq1D1xgzM #infomoney #vale5",
    "marks": [
      {
        "word": "posição",
        "type": "rel"
      },
      {
        "word": "em o ibovespa",
        "type": "arg1"
      },
      {
        "word": "perde",
        "type": "arg2"
      }
    ],
    "subscripts": [
      {
        "word": "posição",
        "subscript": "rel"
      },
      {
        "word": "ibovespa",
        "subscript": "nmod"
      },
      {
        "word": "perde",
        "subscript": "root"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "em o ibovespa",
      "arg2": "perde"
    }
  },
  {
    "Texto": "@Live_Trade eu to cagando de medo de essa #PETR4 ! ! ! to com posição grnade desde o rompimento de os 14,20 dia 24/03 ! king kong adestrado por o PT",
    "marks": [
      {
        "word": "posição",
        "type": "rel"
      },
      {
        "word": "to",
        "type": "arg0"
      },
      {
        "word": "grnade",
        "type": "arg2"
      }
    ],
    "subscripts": [
      {
        "word": "posição",
        "subscript": "rel"
      },
      {
        "word": "to",
        "subscript": "aux"
      },
      {
        "word": "grnade",
        "subscript": "amod"
      }
    ],
    "args": {
      "arg0": "to",
      "arg1": "-",
      "arg2": "grnade"
    }
  },
  {
    "Texto": "#VALE5 lembram de aquele GAP que estou alertando desde AGOSTO , pois é ... foi fechado hoje . Agora fica menos perigoso posição em a VALE5",
    "marks": [
      {
        "word": "posição",
        "type": "rel"
      },
      {
        "word": "em a VALE5",
        "type": "arg1"
      },
      {
        "word": "menos perigoso",
        "type": "arg2"
      }
    ],
    "subscripts": [
      {
        "word": "posição",
        "subscript": "rel"
      },
      {
        "word": "VALE5",
        "subscript": "nmod"
      },
      {
        "word": "perigoso",
        "subscript": "amod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "em a VALE5",
      "arg2": "menos perigoso"
    }
  },
  {
    "Texto": "Bom , blz , stops ligados em as posições compradas ( ITUB4 , BBDC4 e BVMF3 ) . Lucro em a mão . Para o alto e avante , meninas ! Papai vai trabalhar !",
    "marks": [
      {
        "word": "posição",
        "type": "rel"
      },
      {
        "word": "compradas",
        "type": "arg2"
      }
    ],
    "subscripts": [
      {
        "word": "posição",
        "subscript": "rel"
      },
      {
        "word": "compradas",
        "subscript": "amod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "-",
      "arg2": "compradas"
    }
  },
  {
    "Texto": "@Live_Trade ontem quase sai de a BRFS3 , mas o sistema ainda dava posição comprada ... vc realizou ?",
    "marks": [
      {
        "word": "posição",
        "type": "rel"
      },
      {
        "word": "comprada",
        "type": "arg2"
      }
    ],
    "subscripts": [
      {
        "word": "posição",
        "subscript": "rel"
      },
      {
        "word": "comprada",
        "subscript": "amod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "-",
      "arg2": "comprada"
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