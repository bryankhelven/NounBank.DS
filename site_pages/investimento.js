document.addEventListener('DOMContentLoaded', function() {
  const SHOWN_ARGS = ["arg0", "arg1", "arg2"];
  const data = [
  {
    "Texto": "Logo depois de os papéis PETR4 RT @arrowp : sim RT @UOLNoticias : Homem mais feliz de o mundo recomenda o amor como investimento mais seguro",
    "marks": [
      {
        "word": "investimento",
        "type": "rel"
      },
      {
        "word": "o amor",
        "type": "arg2"
      }
    ],
    "subscripts": [
      {
        "word": "investimento",
        "subscript": "rel"
      },
      {
        "word": "amor",
        "subscript": "obj"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "-",
      "arg2": "o amor"
    }
  },
  {
    "Texto": "Discussão sobre Investimentos : Carteira Simulada , CSNA3 , USIM5 e GRND3 . http://t.co/9XXKzByFls",
    "marks": [
      {
        "word": "Investimento",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "Investimento",
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
    "Texto": "Discussão sobre Investimentos : Carteira Simulada , USIM5 , CSNA3 e GRND3 http://t.co/q5pYdmRKIA",
    "marks": [
      {
        "word": "Investimento",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "Investimento",
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
    "Texto": "#OIL #PETR4 Petrobras aumenta investimento em a Argentina , diz site , empresa nega . http://t.co/vasP1DxOM8",
    "marks": [
      {
        "word": "investimento",
        "type": "rel"
      },
      {
        "word": "Petrobras",
        "type": "arg0"
      },
      {
        "word": "em a Argentina",
        "type": "arg2"
      }
    ],
    "subscripts": [
      {
        "word": "investimento",
        "subscript": "rel"
      },
      {
        "word": "Petrobras",
        "subscript": "nsubj"
      },
      {
        "word": "Argentina",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "Petrobras",
      "arg1": "-",
      "arg2": "em a Argentina"
    }
  },
  {
    "Texto": "Gráfico #petrd16 reversão ? ! ? Petrobras #petr4 #ibov investimentos http://t.co/dOXR7k0Uls",
    "marks": [
      {
        "word": "investimento",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "investimento",
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
    "Texto": "Cada vez que ouço a G. Foster defendendo o plano de investimento de a @petrobras , mais me certifico que devemos comprar PETR3 e 4 em a BOVESPA",
    "marks": [
      {
        "word": "investimento",
        "type": "rel"
      },
      {
        "word": "de a @petrobras",
        "type": "arg0"
      }
    ],
    "subscripts": [
      {
        "word": "investimento",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "de a @petrobras",
      "arg1": "-",
      "arg2": "-"
    }
  },
  {
    "Texto": "#BOVESPA #GOLL4 Gol faz aumento de capital de R$ 185,7 mi e prevê investimento de a AirFrance . http://t.co/0Kro8OpwaD",
    "marks": [
      {
        "word": "investimento",
        "type": "rel"
      },
      {
        "word": "de a AirFrance",
        "type": "arg0"
      }
    ],
    "subscripts": [
      {
        "word": "investimento",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "de a AirFrance",
      "arg1": "-",
      "arg2": "-"
    }
  },
  {
    "Texto": "Opinião - 10 ideias de investimento , segundo o BTG Pactual : Em o lugar de os papéis de a CPFL ( CPFE3 ) e de a Minerva ( ... http://t.co/9IlIpuO96l",
    "marks": [
      {
        "word": "investimento",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "investimento",
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
    "Texto": "10 ideias de investimento , segundo o BTG Pactual : Em o lugar de os papéis de a CPFL ( CPFE3 ) e de a Minerva ( BEEF3 ) , o BTG ... http://t.co/UAdRxUEEU2",
    "marks": [
      {
        "word": "investimento",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "investimento",
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
    "Texto": "10 ideias de investimento , segundo o BTG Pactual : Em o lugar de os papéis de a CPFL ( CPFE3 ) e de a Minerva ... http://t.co/0UpUhDawsm #infomoney",
    "marks": [
      {
        "word": "investimento",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "investimento",
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
    "Texto": "Se fosse investimentos ( ñ é ) 3.5 x receita é d+ ' @exame_noticias : #PETR4 faz alerta sobre dívida e rating de crédito http://t.co/Nz50xccbTH '",
    "marks": [
      {
        "word": "investimento",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "investimento",
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
    "Texto": "@StephenKanitz @ricam #Petrobrás #PETR4 : Se ref. Pasadeña é superfaturada , então invest. pré-sal estão mais ! http://t.co/8wIGJxKbao",
    "marks": [
      {
        "word": "investimento",
        "type": "rel"
      },
      {
        "word": "#Petrobrás",
        "type": "arg0"
      },
      {
        "word": "pré-sal",
        "type": "arg2"
      }
    ],
    "subscripts": [
      {
        "word": "investimento",
        "subscript": "rel"
      },
      {
        "word": "Petrobrás",
        "subscript": "parataxis:hashtag"
      },
      {
        "word": "sal",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "#Petrobrás",
      "arg1": "-",
      "arg2": "pré-sal"
    }
  },
  {
    "Texto": "@GutoAbranches @denisebarbosa #Petrobrás #PETR4 : Se ref. Pasadeña é superfaturada , então invest. pré-sal estão mais ! http://t.co/8wIGJxKbao",
    "marks": [
      {
        "word": "investimento",
        "type": "rel"
      },
      {
        "word": "#Petrobrás",
        "type": "arg0"
      },
      {
        "word": "pré-sal",
        "type": "arg2"
      }
    ],
    "subscripts": [
      {
        "word": "investimento",
        "subscript": "rel"
      },
      {
        "word": "Petrobrás",
        "subscript": "parataxis:hashtag"
      },
      {
        "word": "sal",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "#Petrobrás",
      "arg1": "-",
      "arg2": "pré-sal"
    }
  },
  {
    "Texto": "Vale pode perder US$ 500 milhões com o investimento feito em a Guinea , Africa ocidental . O país pretende revogar o direito minerário . #VALE5",
    "marks": [
      {
        "word": "investimento",
        "type": "rel"
      },
      {
        "word": "Vale",
        "type": "arg0"
      },
      {
        "word": "em a Guinea , Africa ocidental",
        "type": "arg2"
      }
    ],
    "subscripts": [
      {
        "word": "investimento",
        "subscript": "rel"
      },
      {
        "word": "Vale",
        "subscript": "nsubj"
      },
      {
        "word": "ocidental",
        "subscript": "obl"
      }
    ],
    "args": {
      "arg0": "Vale",
      "arg1": "-",
      "arg2": "em a Guinea , Africa ocidental"
    }
  },
  {
    "Texto": "RT @chrinvestor : Vale pode perder US$ 500 milhões com o investimento feito em a Guinea , Africa ocidental . O país pretende revogar o direito m …",
    "marks": [
      {
        "word": "investimento",
        "type": "rel"
      },
      {
        "word": "Vale",
        "type": "arg0"
      },
      {
        "word": "em a Guinea , Africa ocidental",
        "type": "arg2"
      }
    ],
    "subscripts": [
      {
        "word": "investimento",
        "subscript": "rel"
      },
      {
        "word": "Vale",
        "subscript": "nsubj"
      },
      {
        "word": "ocidental",
        "subscript": "obl"
      }
    ],
    "args": {
      "arg0": "Vale",
      "arg1": "-",
      "arg2": "em a Guinea , Africa ocidental"
    }
  },
  {
    "Texto": "$DTEX3 - Duratex ( dtex-nm ) - Investimentos Em Unidade De Paineis Industrializados http://t.co/VBbLPpvHIN",
    "marks": [
      {
        "word": "Investimento",
        "type": "rel"
      },
      {
        "word": "$DTEX3 - Duratex ( dtex-nm )",
        "type": "arg0"
      },
      {
        "word": "Em Unidade De Paineis Industrializados",
        "type": "arg2"
      }
    ],
    "subscripts": [
      {
        "word": "Investimento",
        "subscript": "rel"
      },
      {
        "word": "nm",
        "subscript": "nmod"
      },
      {
        "word": "Paineis",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "$DTEX3 - Duratex ( dtex-nm )",
      "arg1": "-",
      "arg2": "Em Unidade De Paineis Industrializados"
    }
  },
  {
    "Texto": "Esqueçam PETR3 e PETR4 , melhor investimento : Itaú Unibanco e Brasesco",
    "marks": [
      {
        "word": "investimento",
        "type": "rel"
      },
      {
        "word": "Itaú Unibanco e Brasesco",
        "type": "arg2"
      }
    ],
    "subscripts": [
      {
        "word": "investimento",
        "subscript": "rel"
      },
      {
        "word": "Brasesco",
        "subscript": "parataxis"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "-",
      "arg2": "Itaú Unibanco e Brasesco"
    }
  },
  {
    "Texto": "#SUZB5 - Suzano : Investimento de 2014 ficará em R$ 1,75 bilhão , queda de 33 % - http://t.co/id9R8MCGE4",
    "marks": [
      {
        "word": "Investimento",
        "type": "rel"
      },
      {
        "word": "Suzano",
        "type": "arg0"
      },
      {
        "word": "R$ 1,75 bilhão",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "Investimento",
        "subscript": "rel"
      },
      {
        "word": "Suzano",
        "subscript": "appos"
      },
      {
        "word": "bilhão",
        "subscript": "obl"
      }
    ],
    "args": {
      "arg0": "Suzano",
      "arg1": "R$ 1,75 bilhão",
      "arg2": "-"
    }
  },
  {
    "Texto": "To vendo os numeros de a compra de a refinaria por a petr4 em o JN . Nao parece muito fora . Os belgas tiveram invest. + capex. 01/02",
    "marks": [
      {
        "word": "investimento",
        "type": "rel"
      },
      {
        "word": "Os belgas",
        "type": "arg0"
      }
    ],
    "subscripts": [
      {
        "word": "investimento",
        "subscript": "rel"
      },
      {
        "word": "belgas",
        "subscript": "nsubj"
      }
    ],
    "args": {
      "arg0": "Os belgas",
      "arg1": "-",
      "arg2": "-"
    }
  },
  {
    "Texto": "Standard & Poor’s revê classificação de risco e mantém o Grau de Investimento . http://t.co/1ZnxOUvXV7 #PETR4",
    "marks": [
      {
        "word": "Investimento",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "Investimento",
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
    "Texto": "CSN #CSNA3 A cia e o consórcio asiático sócio de a Namisa estão próximos de um consenso em relação a o investimento ... http://t.co/NggvIdgl3I",
    "marks": [
      {
        "word": "investimento",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "investimento",
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
    "Texto": "RT @chrinvestor : Preocupações com a #PETR4 não param de crescer : produção , sumiço de investimentos , caixa e o endividamento . Quem arrisca u …",
    "marks": [
      {
        "word": "investimento",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "investimento",
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
    "Texto": "Tenho papéis de a PETR4 e , por o jeito , vai demorar 1 decada para recuperar meu investimento . Estou ganhando um ' jabaculê ' lançando ' opção ' .",
    "marks": [
      {
        "word": "investimento",
        "type": "rel"
      },
      {
        "word": "meu",
        "type": "arg0"
      }
    ],
    "subscripts": [
      {
        "word": "investimento",
        "subscript": "rel"
      },
      {
        "word": "meu",
        "subscript": "det"
      }
    ],
    "args": {
      "arg0": "meu",
      "arg1": "-",
      "arg2": "-"
    }
  },
  {
    "Texto": "Foco de empresas de o Brasil em eficiência passa por menos investimento em 2014 : Até agora o a ... http://t.co/GziH575KhU #infomoney #vale5",
    "marks": [
      {
        "word": "investimento",
        "type": "rel"
      },
      {
        "word": "empresas de o Brasil",
        "type": "arg0"
      }
    ],
    "subscripts": [
      {
        "word": "investimento",
        "subscript": "rel"
      },
      {
        "word": "o",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "empresas de o Brasil",
      "arg1": "-",
      "arg2": "-"
    }
  },
  {
    "Texto": "@joseserra_ Petr4 é investimento pra LP , depois de 9 anos , voltou a o preço de 2005 , milhares de trabalhadores enganados com o FGTS .",
    "marks": [
      {
        "word": "investimento",
        "type": "rel"
      },
      {
        "word": "Petr4",
        "type": "arg2"
      }
    ],
    "subscripts": [
      {
        "word": "investimento",
        "subscript": "rel"
      },
      {
        "word": "Petr4",
        "subscript": "nsubj"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "-",
      "arg2": "Petr4"
    }
  },
  {
    "Texto": "#PETR4 #PETR3 #NYSE RT @bastidoresmt : Unica contesta Graça Foster e Petrobras sobre falta de investimentos http://t.co/KJbvuf24Iw",
    "marks": [
      {
        "word": "investimento",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "investimento",
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
    "Texto": "@petrobras @valor_economico #Petrobrás #PETR4 : Se ref. Pasadeña é superfaturada , então invest. pré-sal estão mais ! http://t.co/8wIGJxKbao",
    "marks": [
      {
        "word": "investimento",
        "type": "rel"
      },
      {
        "word": "#Petrobrás",
        "type": "arg0"
      },
      {
        "word": "pré-sal",
        "type": "arg2"
      }
    ],
    "subscripts": [
      {
        "word": "investimento",
        "subscript": "rel"
      },
      {
        "word": "Petrobrás",
        "subscript": "parataxis:hashtag"
      },
      {
        "word": "sal",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "#Petrobrás",
      "arg1": "-",
      "arg2": "pré-sal"
    }
  },
  {
    "Texto": "A Ambev fará o maior investimento de sua história em 2014 . Serão R$ 6 Bilhões . Intenção é voltar a crescer 2,5 % a o ano . #ABEV3",
    "marks": [
      {
        "word": "investimento",
        "type": "rel"
      },
      {
        "word": "A Ambev",
        "type": "arg0"
      },
      {
        "word": "R$ 6 Bilhões",
        "type": "arg1"
      },
      {
        "word": "voltar a crescer 2,5 % a o ano",
        "type": "arg2"
      }
    ],
    "subscripts": [
      {
        "word": "investimento",
        "subscript": "rel"
      },
      {
        "word": "Ambev",
        "subscript": "nsubj"
      },
      {
        "word": "Bilhões",
        "subscript": "parataxis"
      },
      {
        "word": "ano",
        "subscript": "csubj"
      }
    ],
    "args": {
      "arg0": "A Ambev",
      "arg1": "R$ 6 Bilhões",
      "arg2": "voltar a crescer 2,5 % a o ano"
    }
  },
  {
    "Texto": "RT @chrinvestor : A Ambev fará o maior investimento de sua história em 2014 . Serão R$ 6 Bilhões . Intenção é voltar a crescer 2.5 % a o ano . #A …",
    "marks": [
      {
        "word": "investimento",
        "type": "rel"
      },
      {
        "word": "A Ambev",
        "type": "arg0"
      },
      {
        "word": "R$ 6 Bilhões",
        "type": "arg1"
      },
      {
        "word": "voltar a crescer 2.5 % a o ano",
        "type": "arg2"
      }
    ],
    "subscripts": [
      {
        "word": "investimento",
        "subscript": "rel"
      },
      {
        "word": "Ambev",
        "subscript": "nsubj"
      },
      {
        "word": "Bilhões",
        "subscript": "parataxis"
      },
      {
        "word": "ano",
        "subscript": "csubj"
      }
    ],
    "args": {
      "arg0": "A Ambev",
      "arg1": "R$ 6 Bilhões",
      "arg2": "voltar a crescer 2.5 % a o ano"
    }
  },
  {
    "Texto": "@silviusmille despencam valor d mercado por endividamento para investimento . Então , independente d quem for a faixa , em 2018 petr4 vai bombar",
    "marks": [
      {
        "word": "investimento",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "investimento",
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
    "Texto": "#MEAT #BOVESPA #JBSS3 #FRIBOI IPO de a JBS Foods ajudaria JBS a financiar investimentos : http://t.co/v9DrUDFco8",
    "marks": [
      {
        "word": "investimento",
        "type": "rel"
      },
      {
        "word": "JBS",
        "type": "arg0"
      }
    ],
    "subscripts": [
      {
        "word": "investimento",
        "subscript": "rel"
      },
      {
        "word": "JBS",
        "subscript": "obj"
      }
    ],
    "args": {
      "arg0": "JBS",
      "arg1": "-",
      "arg2": "-"
    }
  },
  {
    "Texto": "China anunciou um plano de incentivo a a economia . O governo chinês pretende aumentar os investimentos em ferrovias e moradias . Bom p/ #VALE5 .",
    "marks": [
      {
        "word": "investimento",
        "type": "rel"
      },
      {
        "word": "O governo chinês",
        "type": "arg0"
      },
      {
        "word": "em ferrovias e moradias",
        "type": "arg2"
      }
    ],
    "subscripts": [
      {
        "word": "investimento",
        "subscript": "rel"
      },
      {
        "word": "chinês",
        "subscript": "nsubj"
      },
      {
        "word": "moradias",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "O governo chinês",
      "arg1": "-",
      "arg2": "em ferrovias e moradias"
    }
  },
  {
    "Texto": "RT @chrinvestor : China anunciou um plano de incentivo a a economia . O governo chinês pretende aumentar os investimentos em ferrovias e moradi …",
    "marks": [
      {
        "word": "investimento",
        "type": "rel"
      },
      {
        "word": "O governo chinês",
        "type": "arg0"
      },
      {
        "word": "em ferrovias e moradi",
        "type": "arg2"
      }
    ],
    "subscripts": [
      {
        "word": "investimento",
        "subscript": "rel"
      },
      {
        "word": "chinês",
        "subscript": "nsubj"
      },
      {
        "word": "moradi",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "O governo chinês",
      "arg1": "-",
      "arg2": "em ferrovias e moradi"
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