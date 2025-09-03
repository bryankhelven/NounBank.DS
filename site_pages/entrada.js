document.addEventListener('DOMContentLoaded', function() {
  const SHOWN_ARGS = ["arg0", "arg1"];
  const data = [
  {
    "Texto": "#PETR4 já deu entrada e deu 1 % Trade fechado !",
    "marks": [
      {
        "word": "entrada",
        "type": "rel"
      },
      {
        "word": "#PETR4",
        "type": "arg0"
      }
    ],
    "subscripts": [
      {
        "word": "entrada",
        "subscript": "rel"
      },
      {
        "word": "PETR4",
        "subscript": "nsubj"
      }
    ],
    "args": {
      "arg0": "#PETR4",
      "arg1": "-"
    }
  },
  {
    "Texto": "#FicaDica para quem é novo e quer investir , compre ações de a Petrobras #PETR4 esse valor esta muito atrativo para entrada .",
    "marks": [
      {
        "word": "entrada",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "entrada",
        "subscript": "rel"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "-"
    }
  },
  {
    "Texto": "@Live_Trade Marcos , o que vc acha de #FIBR3 ? vale uma entrada em a cp ?",
    "marks": [
      {
        "word": "entrada",
        "type": "rel"
      },
      {
        "word": "em a cp",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "entrada",
        "subscript": "rel"
      },
      {
        "word": "cp",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "em a cp"
    }
  },
  {
    "Texto": "@CaciqueInvest @Live_Trade galera , elet6 ainda vale entrada ?",
    "marks": [
      {
        "word": "entrada",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "entrada",
        "subscript": "rel"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "-"
    }
  },
  {
    "Texto": "@WallFigueiredo Entrada EVEN3 ( 25/02/2014 ) até o décimo dia 22 % de ganho ,)",
    "marks": [
      {
        "word": "Entrada",
        "type": "rel"
      },
      {
        "word": "EVEN3",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "Entrada",
        "subscript": "rel"
      },
      {
        "word": "EVEN3",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "EVEN3"
    }
  },
  {
    "Texto": "@malcaetano : vários papéis com IMA - Entrada intetessante : GGBR4 a 0.85 , VALE5 a 0.85 . Surgindo compradores em o mercado ?",
    "marks": [
      {
        "word": "Entrada",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "Entrada",
        "subscript": "rel"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "-"
    }
  },
  {
    "Texto": "#cmig4 entrada por o diário , mas comi bola ! ! !",
    "marks": [
      {
        "word": "entrada",
        "type": "rel"
      },
      {
        "word": "#cmig4",
        "type": "arg0"
      },
      {
        "word": "por o diário",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "entrada",
        "subscript": "rel"
      },
      {
        "word": "cmig4",
        "subscript": "nmod"
      },
      {
        "word": "diário",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "#cmig4",
      "arg1": "por o diário"
    }
  },
  {
    "Texto": "EMBR3 - Entrada http://t.co/3cK7jmozkU",
    "marks": [
      {
        "word": "Entrada",
        "type": "rel"
      },
      {
        "word": "EMBR3",
        "type": "arg0"
      }
    ],
    "subscripts": [
      {
        "word": "Entrada",
        "subscript": "rel"
      },
      {
        "word": "EMBR3",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "EMBR3",
      "arg1": "-"
    }
  },
  {
    "Texto": "#cemig4 ta interessante . Recuperou a perda e mm já recomendou entrada . #goll4 perde força e tem suporte a 13,15 .",
    "marks": [
      {
        "word": "entrada",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "entrada",
        "subscript": "rel"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "-"
    }
  },
  {
    "Texto": "$TBLE3 - Tractebel ( tble-nm ) - Entrada Em Operacao Comercial De a Central Eolica Mundau http://t.co/zejzckVYtT",
    "marks": [
      {
        "word": "Entrada",
        "type": "rel"
      },
      {
        "word": "$TBLE3",
        "type": "arg0"
      },
      {
        "word": "Em Operacao Comercial",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "Entrada",
        "subscript": "rel"
      },
      {
        "word": "TBLE3",
        "subscript": "nmod"
      },
      {
        "word": "Comercial",
        "subscript": "amod"
      }
    ],
    "args": {
      "arg0": "$TBLE3",
      "arg1": "Em Operacao Comercial"
    }
  },
  {
    "Texto": "Galera , ótima oportunidade de entrada em a VALE5 , Vale de o Rio Doce . Gráfico formando a famosa figura … http://t.co/9NFGz77jUG",
    "marks": [
      {
        "word": "entrada",
        "type": "rel"
      },
      {
        "word": "em a VALE5",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "entrada",
        "subscript": "rel"
      },
      {
        "word": "VALE5",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "em a VALE5"
    }
  },
  {
    "Texto": "Analisem KROT3 que está performando o IFR multiplo conjugado com o FAD anormal para entradas - em as máximas - múltiplas em a ponta vendedora",
    "marks": [
      {
        "word": "entrada",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "entrada",
        "subscript": "rel"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "-"
    }
  },
  {
    "Texto": "@ferrisss : meus números para JBSS3 foram entrada ontem a 7.87 com obj = 8.07 ( + 2.5 % ) e 8.47 ( 7.6 % ) . Hj bateu 8.03 . Abx http://t.co/amuFApN1IK",
    "marks": [
      {
        "word": "entrada",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "entrada",
        "subscript": "rel"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "-"
    }
  },
  {
    "Texto": "BTOW3 E CTIP3 performando setup de o IFR múltiplo com FAD anormal p/ venda - entradas múltiplas em as máximas de cada dia se continuar subindo",
    "marks": [
      {
        "word": "entrada",
        "type": "rel"
      },
      {
        "word": "em as máximas",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "entrada",
        "subscript": "rel"
      },
      {
        "word": "máximas",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "em as máximas"
    }
  },
  {
    "Texto": "Goau4 recuperou as perdas e indica entrada por as MM . Volume de compra está aumentando , porém acho que vou diminuir a exposição .",
    "marks": [
      {
        "word": "entrada",
        "type": "rel"
      },
      {
        "word": "por as MM",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "entrada",
        "subscript": "rel"
      },
      {
        "word": "MM",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "por as MM"
    }
  },
  {
    "Texto": "Todos papeis postados aqui e em o Facebook deram entrada hj : Brkm5 Petr4 Winj14 ... fora os de ontem Goll4 e Klbn4 Show ! ! !",
    "marks": [
      {
        "word": "entrada",
        "type": "rel"
      },
      {
        "word": "Todos Papeis",
        "type": "arg0"
      }
    ],
    "subscripts": [
      {
        "word": "entrada",
        "subscript": "rel"
      },
      {
        "word": "Papeis",
        "subscript": "nsubj"
      }
    ],
    "args": {
      "arg0": "Todos Papeis",
      "arg1": "-"
    }
  },
  {
    "Texto": "#BBAS3 #PlimPlim DT entrada e saída compartilhada em o TWITTER quem acreditou fez uma bocada . http://t.co/K03MhZTWlY http://t.co/BJrQI1smCt",
    "marks": [
      {
        "word": "entrada",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "entrada",
        "subscript": "rel"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "-"
    }
  },
  {
    "Texto": "#pdgr3 fez PB 1,51 se não perder fundo , já começo a monitorar possível entrada ...",
    "marks": [
      {
        "word": "entrada",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "entrada",
        "subscript": "rel"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "-"
    }
  },
  {
    "Texto": "E isso em um prazo de 1 mês . Imaginem o tamanho de a força compradora ? Vale entrada pra manter em carteira em curto prazo ' CP ' . #CSNA3",
    "marks": [
      {
        "word": "entrada",
        "type": "rel"
      },
      {
        "word": "pra manter em carteira em curto prazo",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "entrada",
        "subscript": "rel"
      },
      {
        "word": "prazo",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "pra manter em carteira em curto prazo"
    }
  },
  {
    "Texto": "@Live_Trade PARABENS ! ! ! Vale uma entrada em PETR4 ?",
    "marks": [
      {
        "word": "entrada",
        "type": "rel"
      },
      {
        "word": "em PETR4",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "entrada",
        "subscript": "rel"
      },
      {
        "word": "PETR4",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "em PETR4"
    }
  },
  {
    "Texto": "@Live_Trade qual ponto de entrada em #Oibr4 ?",
    "marks": [
      {
        "word": "entrada",
        "type": "rel"
      },
      {
        "word": "em #Oibr4",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "entrada",
        "subscript": "rel"
      },
      {
        "word": "Oibr4",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "em #Oibr4"
    }
  },
  {
    "Texto": "@Live_Trade depois ainda diz q ñ dou os ptos de entrada nem saída ... Olha aí o pto de entrada em #VALE5 a os R$ 26,XX e ainda mantendo ela ..",
    "marks": [
      {
        "word": "entrada",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "entrada",
        "subscript": "rel"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "-"
    }
  },
  {
    "Texto": "@Live_Trade depois ainda diz q ñ dou os ptos de entrada nem saída ... Olha aí o pto de entrada em #VALE5 a os R$ 26,XX e ainda mantendo ela ..",
    "marks": [
      {
        "word": "entrada",
        "type": "rel"
      },
      {
        "word": "em #VALE5 a os R$ 26,XX",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "entrada",
        "subscript": "rel"
      },
      {
        "word": "XX",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "em #VALE5 a os R$ 26,XX"
    }
  },
  {
    "Texto": "SBSP3 com um belo sinal de entrada de uma WW #volume http://t.co/ONawWUOwE3",
    "marks": [
      {
        "word": "entrada",
        "type": "rel"
      },
      {
        "word": "de uma WW",
        "type": "arg0"
      }
    ],
    "subscripts": [
      {
        "word": "entrada",
        "subscript": "rel"
      },
      {
        "word": "uma",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "de uma WW",
      "arg1": "-"
    }
  },
  {
    "Texto": "@ferrisss Agora vc não pode negar e viu eu postar petr4 a 12,5 , mmxm3 a 3,34 , artr3 ecor3 e tantas outras entradas e objetivos",
    "marks": [
      {
        "word": "entrada",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "entrada",
        "subscript": "rel"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "-"
    }
  },
  {
    "Texto": "#VALE5 para quem se interessou esta foi a operação q montei ontem , meu ponto de entrada foi justamente a onde a ... http://t.co/mgseUyA35t",
    "marks": [
      {
        "word": "entrada",
        "type": "rel"
      },
      {
        "word": "foi justamente a onde a",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "entrada",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "det"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "foi justamente a onde a"
    }
  },
  {
    "Texto": "VALE5 performando IFR multiplo conjugado com FAD anormal - setup de entradas múltiplas - caso continue a queda amanhã tem nova analise",
    "marks": [
      {
        "word": "entrada",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "entrada",
        "subscript": "rel"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "-"
    }
  },
  {
    "Texto": "@Live_Trade klbn4 , aciona entrada também ?",
    "marks": [
      {
        "word": "entrada",
        "type": "rel"
      },
      {
        "word": "klbn4",
        "type": "arg0"
      }
    ],
    "subscripts": [
      {
        "word": "entrada",
        "subscript": "rel"
      },
      {
        "word": "klbn4",
        "subscript": "nsubj"
      }
    ],
    "args": {
      "arg0": "klbn4",
      "arg1": "-"
    }
  },
  {
    "Texto": "#cyre3 e Rsid3 cfe postado de manhã , entrada e com um bom lucro",
    "marks": [
      {
        "word": "entrada",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "entrada",
        "subscript": "rel"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "-"
    }
  },
  {
    "Texto": "RT @felipefdeaguiar : #FicaDica para quem é novo e quer investir , compre ações de a Petrobras #PETR4 esse valor esta muito atrativo para entra …",
    "marks": [
      {
        "word": "entrada",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "entrada",
        "subscript": "rel"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "-"
    }
  },
  {
    "Texto": "#petr4 King Kong segurou ... hummmm observo p/ entrada",
    "marks": [
      {
        "word": "entrada",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "entrada",
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