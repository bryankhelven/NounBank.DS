document.addEventListener('DOMContentLoaded', function() {
  const SHOWN_ARGS = ["arg0", "arg1", "arg2"];
  const data = [
  {
    "Texto": "$MRVE3 - Mrv ( mrve-nm ) - Pagamento De Dividendo / Ajuste Em o Valor http://t.co/OLYAVgQz1Q",
    "marks": [
      {
        "word": "Pagamento",
        "type": "rel"
      },
      {
        "word": "$MRVE3 - Mrv ( mrve-nm )",
        "type": "arg0"
      }
    ],
    "subscripts": [
      {
        "word": "Pagamento",
        "subscript": "rel"
      },
      {
        "word": "nm",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "$MRVE3 - Mrv ( mrve-nm )",
      "arg1": "-",
      "arg2": "-"
    }
  },
  {
    "Texto": "Empresas de pagamento e tranf. de recursos terão grandes desafios em os próximos anos ... @chrinvestor Abre o olho #CIEL3",
    "marks": [
      {
        "word": "pagamento",
        "type": "rel"
      },
      {
        "word": "Empresas",
        "type": "arg0"
      }
    ],
    "subscripts": [
      {
        "word": "pagamento",
        "subscript": "rel"
      },
      {
        "word": "Empresas",
        "subscript": "nsubj"
      }
    ],
    "args": {
      "arg0": "Empresas",
      "arg1": "-",
      "arg2": "-"
    }
  },
  {
    "Texto": "PCAR P.ACUCAR-CBD ON * div | | aprov 16/04/2014 | | dataex 17/04/2014 | | pagto n/d | | PCAR3 R$ 0,5353953451 | | PCAR4 R$ 0.5889348796 http://t.co/jzFt69KGo0",
    "marks": [
      {
        "word": "pagamento",
        "type": "rel"
      },
      {
        "word": "PCAR P.ACUCAR-CBD ON * div",
        "type": "arg0"
      }
    ],
    "subscripts": [
      {
        "word": "pagamento",
        "subscript": "rel"
      },
      {
        "word": "div",
        "subscript": "root"
      }
    ],
    "args": {
      "arg0": "PCAR P.ACUCAR-CBD ON * div",
      "arg1": "-",
      "arg2": "-"
    }
  },
  {
    "Texto": "CRUZ SOUZA CRUZ dividendos | | aprov 21/03/2014 | | dataex 24/03/2014 | | pagto 21/05/2014 | | CRUZ3 R$ 0,01631 http://t.co/lXxqtlb1Rv",
    "marks": [
      {
        "word": "pagamento",
        "type": "rel"
      },
      {
        "word": "CRUZ SOUZA CRUZ",
        "type": "arg0"
      }
    ],
    "subscripts": [
      {
        "word": "pagamento",
        "subscript": "rel"
      },
      {
        "word": "CRUZ",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "CRUZ SOUZA CRUZ",
      "arg1": "-",
      "arg2": "-"
    }
  },
  {
    "Texto": "ECOR3 - ECORODOVIAS ON jscp | | aprov 25/03/2014 | | dataex 26/03/2014 | | pagto n/d | | ECOR3 R$ 0,037497502 http://t.co/XRxkJbNvZ4",
    "marks": [
      {
        "word": "pagamento",
        "type": "rel"
      },
      {
        "word": "ECOR3 - ECORODOVIAS ON jscp",
        "type": "arg0"
      }
    ],
    "subscripts": [
      {
        "word": "pagamento",
        "subscript": "rel"
      },
      {
        "word": "jscp",
        "subscript": "root"
      }
    ],
    "args": {
      "arg0": "ECOR3 - ECORODOVIAS ON jscp",
      "arg1": "-",
      "arg2": "-"
    }
  },
  {
    "Texto": "ELPL ELETROPAULO dividendos | | aprov 25/4/2014 | | dataex 28/4/2014 | | pagto n/d | | ELPL3 R$ 0,388977082 | | ELPL4 R$ 0,427874790 http://t.co/FhJ4SZQxMA",
    "marks": [
      {
        "word": "pagamento",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "pagamento",
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
    "Texto": "SANTANDER div | apro 26/3/2014 | ex 27/3/2014 | pg 28/8/2014 | SANB3 R$ 0,289686752 | SANB4 R$ 0,318655427 | SANB11 R$ 31,86554272 http://t.co/wN5XP1lQox",
    "marks": [
      {
        "word": "pagamento",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "pagamento",
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
    "Texto": "CPFE CPFL ENERGIA dividendos | | aprov 26/3/2014 | | dataex 30/4/2014 | | pagto n/d | | CPFE3 R$ 0,590062200 http://t.co/hW0GTPCvy5",
    "marks": [
      {
        "word": "pagamento",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "pagamento",
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
    "Texto": "ELETROBRAS jscp | apro 27/03/2014 | ex 30/04/2014 | | pg n/d | ELET3 R$ 0,399210837 | ELET5 R$ 2,178256587 | ELET6 R$ 1,63369244 http://t.co/PGllxA71xr",
    "marks": [
      {
        "word": "pagamento",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "pagamento",
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
    "Texto": "RT @dividendo_br : ELPL ELETROPAULO dividendos | | aprov 25/04/2014 | | dataex 28/04/2014 | | pagto n/d | | ELPL3 R$ 0,388977082 | | ELPL4 R$ 0,42787479 http …",
    "marks": [
      {
        "word": "pagamento",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "pagamento",
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
    "Texto": "RT @dividendo_br : CRUZ SOUZA CRUZ dividendos | | aprov 19/3/2014 | | dataex 20/3/2014 | | pagto 22/4/2014 | | CRUZ3 R$ 0,53600 http://t.co/VSgnbIRjKO",
    "marks": [
      {
        "word": "pagamento",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "pagamento",
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
    "Texto": "RT @dividendo_br : PCAR P.ACUCAR-CBD ON * div | | aprov 16/4/2014 | | dataex 17/4/2014 | | pagto n/d | | PCAR3 R$ 0,5353953451 | | PCAR4 R$ 0,5889348796 http …",
    "marks": [
      {
        "word": "pagamento",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "pagamento",
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
    "Texto": "RT @dividendo_br : SANTANDER div | apro 26/3/2014 | ex 27/3/2014 | pg 28/8/2014 | SANB3 R$ 0,289686752 | SANB4 R$ 0,318655427 | SANB11 R$ 31,86554272 http …",
    "marks": [
      {
        "word": "pagamento",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "pagamento",
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
    "Texto": "ELETROBRAS jscp | aprov 30/04/2014 | ex 02/05/2014 | | pg n/d | ELET3 R$ 0,399210837 | ELET5 R$ 2,178256587 | ELET6 R$ 1,63369244 http://t.co/IjtHKlQlfr",
    "marks": [
      {
        "word": "pagamento",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "pagamento",
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
    "Texto": "MRVE MRV dividendos | | aprov 30/04/2014 | | dataex 16/05/2014 | | pagto 16/06/2014 | | MRVE3 R$ 0,301514331 http://t.co/YEuPBCReqe",
    "marks": [
      {
        "word": "pagamento",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "pagamento",
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
    "Texto": "CPFE CPFL ENERGIA dividendos | | aprov 29/4/2014 | | dataex 30/4/2014 | | pagto n/d | | CPFE3 R$ 0,590062200 http://t.co/ekkPZMOGZw",
    "marks": [
      {
        "word": "pagamento",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "pagamento",
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
    "Texto": "ECOR ECORODOVIAS dividendos | | aprov 29/04/2014 | | dataex 30/04/2014 | | pagto 15/05/2014 | | ECOR3 R$ 0,873067589 http://t.co/UP9I8XRFL9",
    "marks": [
      {
        "word": "pagamento",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "pagamento",
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
    "Texto": "HGTX CIA HERING dividendos | | aprov 23/04/2014 | | dataex 24/04/2014 | | pagto 28/05/2014 | | HGTX3 R$ 0,3037 http://t.co/nN7pFUCoM3",
    "marks": [
      {
        "word": "pagamento",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "pagamento",
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
    "Texto": "PCAR P.ACUCAR-CBD ON dividendos | | aprov 24/4/2014 | | dataex 06/5/2014 | | pagto 15/5/2014 | | PCAR3 R$ 0,127272 | | PCAR4 R$ 0,14 http://t.co/nFHvPrUXRj",
    "marks": [
      {
        "word": "pagamento",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "pagamento",
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
    "Texto": "RT @dividendo_br : CPLE COPEL dividendos | | aprov 24/4/2014 | | ex 25/4/2014 | | pagto n/d | | CPLE3 R$ 0,82136 | | CPLE5 R$ 127,708 | | CPLE6 R$ 0,90366 http: …",
    "marks": [
      {
        "word": "pagamento",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "pagamento",
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
    "Texto": "RT @dividendo_br : ECOR ECORODOVIAS dividendos | | aprov 29/04/2014 | | dataex 30/04/2014 | | pagto 15/05/2014 | | ECOR3 R$ 0,873067589 http://t.co/UP9I8XR…",
    "marks": [
      {
        "word": "pagamento",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "pagamento",
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
    "Texto": "RT @dividendo_br : ELETROBRAS jscp | aprov 30/04/2014 | ex 02/05/2014 | | pg n/d | ELET3 R$ 0,399210837 | ELET5 R$ 2,178256587 | ELET6 R$ 1,63369244 htt …",
    "marks": [
      {
        "word": "pagamento",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "pagamento",
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
    "Texto": "RT @dividendo_br : ENBR ENERGIAS BR dividendos | | aprov 29/4/2014 | | dataex 30/4/2014 | | pagto n/d | | ENBR3 R$ 0,717165 http://t.co/IJzOtrdAz7",
    "marks": [
      {
        "word": "pagamento",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "pagamento",
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
    "Texto": "RT @dividendo_br : SUZB SUZANO PAPEL div | | aprov 30/4/2014 | ex 2/5/2014 | | pagto n/d | | SUZB3 R$ 0,10545 | | SUZB5 R$ 0,116 | | SUZB6 R$ 0,34523 http://…",
    "marks": [
      {
        "word": "pagamento",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "pagamento",
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
    "Texto": "$PETR3 - Petrobras ( petr ) - Pagamento De Juros Sobre Capital Proprio / Valor Atualizado http://t.co/8x8D9VAAAn",
    "marks": [
      {
        "word": "Pagamento",
        "type": "rel"
      },
      {
        "word": "$PETR3 - Petrobras ( petr )",
        "type": "arg0"
      }
    ],
    "subscripts": [
      {
        "word": "Pagamento",
        "subscript": "rel"
      },
      {
        "word": "petr",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "$PETR3 - Petrobras ( petr )",
      "arg1": "-",
      "arg2": "-"
    }
  },
  {
    "Texto": "$BBDC3 - Bradesco ( bbdc-n1 ) - Pagamento De Juros Sobre O Capital Proprio Mensais http://t.co/GF51kOxLRu",
    "marks": [
      {
        "word": "Pagamento",
        "type": "rel"
      },
      {
        "word": "$BBDC3 - Bradesco ( bbdc-n1 )",
        "type": "arg0"
      }
    ],
    "subscripts": [
      {
        "word": "Pagamento",
        "subscript": "rel"
      },
      {
        "word": "n1",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "$BBDC3 - Bradesco ( bbdc-n1 )",
      "arg1": "-",
      "arg2": "-"
    }
  },
  {
    "Texto": "$BBDC3 - Bradesco ( bbdc-n1 ) - Pagamento De Juros Sobre O Capital Proprio Mensais http://t.co/wJBfW4Fvvz",
    "marks": [
      {
        "word": "Pagamento",
        "type": "rel"
      },
      {
        "word": "$BBDC3 - Bradesco ( bbdc-n1 )",
        "type": "arg0"
      }
    ],
    "subscripts": [
      {
        "word": "Pagamento",
        "subscript": "rel"
      },
      {
        "word": "n1",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "$BBDC3 - Bradesco ( bbdc-n1 )",
      "arg1": "-",
      "arg2": "-"
    }
  },
  {
    "Texto": "#BR #BOVESPA #EMBR3 Embraer divulga aviso a os acionistas referente a o pagamento de juros sobre o capital próprio . http://t.co/9TKGW0Mube",
    "marks": [
      {
        "word": "pagamento",
        "type": "rel"
      },
      {
        "word": "Embraer",
        "type": "arg0"
      }
    ],
    "subscripts": [
      {
        "word": "pagamento",
        "subscript": "rel"
      },
      {
        "word": "Embraer",
        "subscript": "nsubj"
      }
    ],
    "args": {
      "arg0": "Embraer",
      "arg1": "-",
      "arg2": "-"
    }
  },
  {
    "Texto": "$LREN3 - Lojas Renner ( lren-nm ) - Declaracao E Pagamento De Juros Sobre O Capital Proprio http://t.co/flXNxtpbT1",
    "marks": [
      {
        "word": "Pagamento",
        "type": "rel"
      },
      {
        "word": "$LREN3 - Lojas Renner ( lren-nm )",
        "type": "arg0"
      }
    ],
    "subscripts": [
      {
        "word": "Pagamento",
        "subscript": "rel"
      },
      {
        "word": "nm",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "$LREN3 - Lojas Renner ( lren-nm )",
      "arg1": "-",
      "arg2": "-"
    }
  },
  {
    "Texto": "$SBSP3 - SABESP anuncia pagamento de juros sobre capital próprio http://t.co/pxkdBw0jm0",
    "marks": [
      {
        "word": "pagamento",
        "type": "rel"
      },
      {
        "word": "$SBSP3 - SABESP",
        "type": "arg0"
      }
    ],
    "subscripts": [
      {
        "word": "pagamento",
        "subscript": "rel"
      },
      {
        "word": "SABESP",
        "subscript": "nsubj"
      }
    ],
    "args": {
      "arg0": "$SBSP3 - SABESP",
      "arg1": "-",
      "arg2": "-"
    }
  },
  {
    "Texto": "$HGTX3 - Cia Hering ( hgtx-nm ) - Pagamento De Juros Sobre O Capital Proprio http://t.co/ddGCyfEjNc",
    "marks": [
      {
        "word": "Pagamento",
        "type": "rel"
      },
      {
        "word": "$HGTX3 - Cia Hering ( hgtx-nm )",
        "type": "arg0"
      }
    ],
    "subscripts": [
      {
        "word": "Pagamento",
        "subscript": "rel"
      },
      {
        "word": "nm",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "$HGTX3 - Cia Hering ( hgtx-nm )",
      "arg1": "-",
      "arg2": "-"
    }
  },
  {
    "Texto": "#HGTX3 - Varejista anuncia pagamento de R$ 23 milhões em proventos a os acionistas - http://t.co/GpbAryELGh",
    "marks": [
      {
        "word": "pagamento",
        "type": "rel"
      },
      {
        "word": "Varejista",
        "type": "arg0"
      },
      {
        "word": "de R$ 23 milhões",
        "type": "arg1"
      },
      {
        "word": "a os acionistas",
        "type": "arg2"
      }
    ],
    "subscripts": [
      {
        "word": "pagamento",
        "subscript": "rel"
      },
      {
        "word": "Varejista",
        "subscript": "nsubj"
      },
      {
        "word": "R",
        "subscript": "nmod"
      },
      {
        "word": "acionistas",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "Varejista",
      "arg1": "de R$ 23 milhões",
      "arg2": "a os acionistas"
    }
  },
  {
    "Texto": "$CRUZ3 - Souza Cruz ( cruz ) - Pagamento De Dividendo ( valor Atualizado ) http://t.co/cfGtKSZ07F",
    "marks": [
      {
        "word": "Pagamento",
        "type": "rel"
      },
      {
        "word": "$CRUZ3 - Souza Cruz ( cruz )",
        "type": "arg0"
      }
    ],
    "subscripts": [
      {
        "word": "Pagamento",
        "subscript": "rel"
      },
      {
        "word": "cruz",
        "subscript": "flat:name"
      }
    ],
    "args": {
      "arg0": "$CRUZ3 - Souza Cruz ( cruz )",
      "arg1": "-",
      "arg2": "-"
    }
  },
  {
    "Texto": "$CIEL3 - Cielo ( ciel-nm ) - Pgto . Dividendo E Juros ( alteracao De os Valores Por Acao ) http://t.co/pNIoX1dKA3",
    "marks": [
      {
        "word": "pagamento",
        "type": "rel"
      },
      {
        "word": "$CIEL3 - Cielo ( ciel-nm )",
        "type": "arg0"
      }
    ],
    "subscripts": [
      {
        "word": "pagamento",
        "subscript": "rel"
      },
      {
        "word": "nm",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "$CIEL3 - Cielo ( ciel-nm )",
      "arg1": "-",
      "arg2": "-"
    }
  },
  {
    "Texto": "Localiza ( RENT3 ) autoriza pagamento de R$ 13,9 mi em juros sobre capital próprio ...",
    "marks": [
      {
        "word": "pagamento",
        "type": "rel"
      },
      {
        "word": "Localiza ( RENT3 )",
        "type": "arg0"
      },
      {
        "word": "de R$ 13,9 mi",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "pagamento",
        "subscript": "rel"
      },
      {
        "word": "RENT3",
        "subscript": "nsubj"
      },
      {
        "word": "R",
        "subscript": "nummod"
      }
    ],
    "args": {
      "arg0": "Localiza ( RENT3 )",
      "arg1": "de R$ 13,9 mi",
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