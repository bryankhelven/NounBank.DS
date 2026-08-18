document.addEventListener('DOMContentLoaded', function() {
  const SHOWN_ARGS = ["arg0", "arg1"];
  const data = [
  {
    "Texto": "#VALE5 suportes e resistências , veja ainda notícia em o comentário . http://t.co/sJrLzoBlUT",
    "marks": [
      {
        "word": "notícia",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "notícia",
        "subscript": "rel"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "-"
    }
  },
  {
    "Texto": "$BVMF3 - Bmfbovespa ( bvmf-nm ) - Esclarecimento Sobre Noticia Veiculada Em a Midia http://t.co/dZxOwGCIDa",
    "marks": [
      {
        "word": "notícia",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "notícia",
        "subscript": "rel"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "-"
    }
  },
  {
    "Texto": "Moçada , alguém tem notícia de o julgamento de o STJ sobre os bancos ? Tô precisando comprar umas BBAS3 em esse patamar de $ 19 .",
    "marks": [
      {
        "word": "notícia",
        "type": "rel"
      },
      {
        "word": "de o julgamento de o STJ sobre os bancos",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "notícia",
        "subscript": "rel"
      },
      {
        "word": "o",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de o julgamento de o STJ sobre os bancos"
    }
  },
  {
    "Texto": "Quanto mais notícia ruim vaza em a mídia sobre a PETR4 , mais ela sobe em a bolsa de valores ...",
    "marks": [
      {
        "word": "notícia",
        "type": "rel"
      },
      {
        "word": "sobre a PETR4",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "notícia",
        "subscript": "rel"
      },
      {
        "word": "PETR4",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "sobre a PETR4"
    }
  },
  {
    "Texto": "$ELET3 - Eletrobras ( elet-n1 ) - Esclarecimento Sobre Noticia http://t.co/0WcHasfUxB",
    "marks": [
      {
        "word": "notícia",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "notícia",
        "subscript": "rel"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "-"
    }
  },
  {
    "Texto": "Me mostra o gráfico que eu te digo a notícia ! ! ! petr4 mmxm3 quer mais ?",
    "marks": [
      {
        "word": "notícia",
        "type": "rel"
      },
      {
        "word": "eu",
        "type": "arg0"
      }
    ],
    "subscripts": [
      {
        "word": "notícia",
        "subscript": "rel"
      },
      {
        "word": "eu",
        "subscript": "nsubj"
      }
    ],
    "args": {
      "arg0": "eu",
      "arg1": "-"
    }
  },
  {
    "Texto": "@AlexCanoas13 @gilmardarosa Basta ver o comportamento de a sua ação ( PETR4 ) em a bolsa de valores com as notícias de queda de popularidade de a D.",
    "marks": [
      {
        "word": "notícia",
        "type": "rel"
      },
      {
        "word": "de queda de popularidade de a D.",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "notícia",
        "subscript": "rel"
      },
      {
        "word": "queda",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de queda de popularidade de a D."
    }
  },
  {
    "Texto": "#PETR4 mais uma ' ótima ' notícia para a Petrobomba ! ! ! Rumo a o 0,01 http://t.co/ZFlkPnZLqE",
    "marks": [
      {
        "word": "notícia",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "notícia",
        "subscript": "rel"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "-"
    }
  },
  {
    "Texto": "RT @valoramais : #PETR4 mais uma ' ótima ' notícia para a Petrobomba ! ! ! Rumo a o 0,01 http://t.co/haW8wgNzKP",
    "marks": [
      {
        "word": "notícia",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "notícia",
        "subscript": "rel"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "-"
    }
  },
  {
    "Texto": "INTERESSANTE : A boa notícia de o dia vem de a China e a Vale3 , sobe só 0,8 % e a Vale5 , + 0,89 %",
    "marks": [
      {
        "word": "notícia",
        "type": "rel"
      },
      {
        "word": "de a China",
        "type": "arg0"
      }
    ],
    "subscripts": [
      {
        "word": "notícia",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "obl"
      }
    ],
    "args": {
      "arg0": "de a China",
      "arg1": "-"
    }
  },
  {
    "Texto": "Antecipamos aqui que ITUB4 passaria PETR4 em peso em o IBOV . Hoje está saindo noticias confirmando . @ferrisss @dfittarelli",
    "marks": [
      {
        "word": "notícia",
        "type": "rel"
      },
      {
        "word": "que ITUB4 passaria PETR4 em peso em o IBOV",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "notícia",
        "subscript": "rel"
      },
      {
        "word": "IBOV",
        "subscript": "ccomp"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "que ITUB4 passaria PETR4 em peso em o IBOV"
    }
  },
  {
    "Texto": "a o menos uma boa notícia ... a Fitch não mexeu em a nota de a #PETR4 ...",
    "marks": [
      {
        "word": "notícia",
        "type": "rel"
      },
      {
        "word": "a Fitch não mexeu em a nota de a #PETR4",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "notícia",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "parataxis"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "a Fitch não mexeu em a nota de a #PETR4"
    }
  },
  {
    "Texto": "$USIM5 - CSN e Usiminas : Má notícia [ Newsletter ADVFN ] http://t.co/bYvAc3uGY2",
    "marks": [
      {
        "word": "notícia",
        "type": "rel"
      },
      {
        "word": "Newsletter ADVFN",
        "type": "arg0"
      }
    ],
    "subscripts": [
      {
        "word": "notícia",
        "subscript": "rel"
      },
      {
        "word": "ADVFN",
        "subscript": "parataxis"
      }
    ],
    "args": {
      "arg0": "Newsletter ADVFN",
      "arg1": "-"
    }
  },
  {
    "Texto": "#VALE5 : O mau humor em torno de a China e notícias de que algumas siderúrgicas de o País sofreram corte de ... http://t.co/0rnoXMSuoZ",
    "marks": [
      {
        "word": "notícia",
        "type": "rel"
      },
      {
        "word": "de que algumas siderúrgicas de o País sofreram corte de ...",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "notícia",
        "subscript": "rel"
      },
      {
        "word": "que",
        "subscript": "acl"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de que algumas siderúrgicas de o País sofreram corte de ..."
    }
  },
  {
    "Texto": "Essa notícia de o recorde de produção de a #PETR4 em o pré sal ta com uma cara de ter vindo pra tentar defender fundo ...",
    "marks": [
      {
        "word": "notícia",
        "type": "rel"
      },
      {
        "word": "de o recorde de produção de a #PETR4 em o pré sal",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "notícia",
        "subscript": "rel"
      },
      {
        "word": "o",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de o recorde de produção de a #PETR4 em o pré sal"
    }
  },
  {
    "Texto": "As 3 notícias que fizeram a Vale cair mais de 2,5 % em a Bolsa : Com notícias que vão desde Guin ... http://t.co/armt9KOQ2f #infomoney #vale5",
    "marks": [
      {
        "word": "notícia",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "notícia",
        "subscript": "rel"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "-"
    }
  },
  {
    "Texto": "As 3 notícias que fizeram a Vale cair mais de 2,5 % em a Bolsa : Com notícias que vão desde Guin ... http://t.co/armt9KOQ2f #infomoney #vale5",
    "marks": [
      {
        "word": "notícia",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "notícia",
        "subscript": "rel"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "-"
    }
  },
  {
    "Texto": "Diz bom de comprar $ABEV3 . Caindo 5 % com notícia de taxação . Eu vou em essa .",
    "marks": [
      {
        "word": "notícia",
        "type": "rel"
      },
      {
        "word": "de taxação",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "notícia",
        "subscript": "rel"
      },
      {
        "word": "taxação",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de taxação"
    }
  },
  {
    "Texto": "“ @buiux : Diz bom de comprar $ABEV3 . Caindo 5 % com notícia de taxação . Eu vou em essa . ” Deu sinal gráfico ou só tais em o fundamento .",
    "marks": [
      {
        "word": "notícia",
        "type": "rel"
      },
      {
        "word": "de taxação",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "notícia",
        "subscript": "rel"
      },
      {
        "word": "taxação",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de taxação"
    }
  },
  {
    "Texto": "#PETR4 Vigilante morre durante ataque a caixas eletrônicos em a Petrobras - notícias em Santos e Região http://t.co/nd5KXSoEa8 via @g1",
    "marks": [
      {
        "word": "notícia",
        "type": "rel"
      },
      {
        "word": "via @g1",
        "type": "arg0"
      },
      {
        "word": "Vigilante morre durante ataque a caixas eletrônicos em a Petrobras",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "notícia",
        "subscript": "rel"
      },
      {
        "word": "g1",
        "subscript": "nmod"
      },
      {
        "word": "Petrobras",
        "subscript": "parataxis"
      }
    ],
    "args": {
      "arg0": "via @g1",
      "arg1": "Vigilante morre durante ataque a caixas eletrônicos em a Petrobras"
    }
  },
  {
    "Texto": "E essa arrancada de BBAS3 hein ? Variou mais de $ 1 entre a mínima e a máxima ! Tá bem volátil hoje , vem notícia por aí !",
    "marks": [
      {
        "word": "notícia",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "notícia",
        "subscript": "rel"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "-"
    }
  },
  {
    "Texto": "#TIMP3 Saiu notícia de que a TIM vai vender torres igual a OI fez ano passado . Lógico que isso vai gerar um belo caixa mas e os clientes ? rs",
    "marks": [
      {
        "word": "notícia",
        "type": "rel"
      },
      {
        "word": "de que a TIM vai vender torres igual a OI fez ano passado",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "notícia",
        "subscript": "rel"
      },
      {
        "word": "que",
        "subscript": "acl"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de que a TIM vai vender torres igual a OI fez ano passado"
    }
  },
  {
    "Texto": "#PETR4 rompeu a barreira de os R$ 13 ! ! Agora eu me pergunto : e se vier a notícia de o rebaixamento de a dívida soberana em o final de este mês ! ?",
    "marks": [
      {
        "word": "notícia",
        "type": "rel"
      },
      {
        "word": "de o rebaixamento de a dívida soberana em o final de este mês",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "notícia",
        "subscript": "rel"
      },
      {
        "word": "o",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de o rebaixamento de a dívida soberana em o final de este mês"
    }
  },
  {
    "Texto": "RT @bovespabrokers : #PETR4 rompeu a barreira de os R$ 13 ! ! Agora eu me pergunto : e se vier a notícia de o rebaixamento de a dívida soberana em o …",
    "marks": [
      {
        "word": "notícia",
        "type": "rel"
      },
      {
        "word": "de o rebaixamento de a dívida soberana em o …",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "notícia",
        "subscript": "rel"
      },
      {
        "word": "o",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de o rebaixamento de a dívida soberana em o …"
    }
  },
  {
    "Texto": "$CSNA3 - CSN e Usiminas : Má notícia [ Newsletter ADVFN ] http://t.co/il4dCT8EMC",
    "marks": [
      {
        "word": "notícia",
        "type": "rel"
      },
      {
        "word": "Newsletter ADVFN",
        "type": "arg0"
      }
    ],
    "subscripts": [
      {
        "word": "notícia",
        "subscript": "rel"
      },
      {
        "word": "ADVFN",
        "subscript": "parataxis"
      }
    ],
    "args": {
      "arg0": "Newsletter ADVFN",
      "arg1": "-"
    }
  },
  {
    "Texto": "$VALE5 - Vale : Excelente notícia [ Newsletter ADVFN ] http://t.co/MtvZrUaNZW",
    "marks": [
      {
        "word": "notícia",
        "type": "rel"
      },
      {
        "word": "Newsletter ADVFN",
        "type": "arg0"
      }
    ],
    "subscripts": [
      {
        "word": "notícia",
        "subscript": "rel"
      },
      {
        "word": "ADVFN",
        "subscript": "parataxis"
      }
    ],
    "args": {
      "arg0": "Newsletter ADVFN",
      "arg1": "-"
    }
  },
  {
    "Texto": "Petr4 - Quando ha noticias ´ ´ boas ´ ´ acao cai .. quando aparece escandalos e outras not. nao agradeveis , sobe .. #toforaaaaa",
    "marks": [
      {
        "word": "notícia",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "notícia",
        "subscript": "rel"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "-"
    }
  },
  {
    "Texto": "Petr4 - Quando ha noticias ´ ´ boas ´ ´ acao cai .. quando aparece escandalos e outras not. nao agradeveis , sobe .. #toforaaaaa",
    "marks": [
      {
        "word": "notícia",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "notícia",
        "subscript": "rel"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "-"
    }
  },
  {
    "Texto": "#petr4 por que será que a notícia ruim sempre vem em um objetivo ? kkkk",
    "marks": [
      {
        "word": "notícia",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "notícia",
        "subscript": "rel"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "-"
    }
  },
  {
    "Texto": "Bom dia , Mercados com boas notícias hj . FAcebook e Apple em os EUA , IFO de a Alemanha , captação em a Espanha e Resultados de USIM5 e BBDC4 aqui .",
    "marks": [
      {
        "word": "notícia",
        "type": "rel"
      },
      {
        "word": "FAcebook e Apple em os EUA , IFO de a Alemanha , captação em a Espanha e Resultados de USIM5 e BBDC4 aqui",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "notícia",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "parataxis"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "FAcebook e Apple em os EUA , IFO de a Alemanha , captação em a Espanha e Resultados de USIM5 e BBDC4 aqui"
    }
  },
  {
    "Texto": "Organização Mundial de Saúde faz incentivo a o aumento de os impostos em o tabaco para salvar mais vidas , efeito de a notícia foi venda em a #CRUZ3",
    "marks": [
      {
        "word": "notícia",
        "type": "rel"
      },
      {
        "word": "Organização Mundial de Saúde faz incentivo a o aumento de os impostos em o tabaco para salvar mais vidas",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "notícia",
        "subscript": "rel"
      },
      {
        "word": "Saúde",
        "subscript": "parataxis"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "Organização Mundial de Saúde faz incentivo a o aumento de os impostos em o tabaco para salvar mais vidas"
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