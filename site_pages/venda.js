document.addEventListener('DOMContentLoaded', function() {
  const SHOWN_ARGS = ["arg0", "arg1", "arg2"];
  const data = [
  {
    "Texto": "Notas gerais A PETROBRAS ( PETR4 ) assinou com o Grupo Électricité de France contrato para a venda de sua ... http://t.co/h3dMUjViMQ",
    "marks": [
      {
        "word": "venda",
        "type": "rel"
      },
      {
        "word": " A PETROBRAS ( PETR4 )",
        "type": "arg0"
      },
      {
        "word": "de sua",
        "type": "arg1"
      },
      {
        "word": "com o Grupo Électricité de France",
        "type": "arg2"
      }
    ],
    "subscripts": [
      {
        "word": "venda",
        "subscript": "rel"
      },
      {
        "word": "PETR4",
        "subscript": "nsubj"
      },
      {
        "word": "sua",
        "subscript": "nmod:strunc"
      },
      {
        "word": "o",
        "subscript": "obl"
      }
    ],
    "args": {
      "arg0": " A PETROBRAS ( PETR4 )",
      "arg1": "de sua",
      "arg2": "com o Grupo Électricité de France"
    }
  },
  {
    "Texto": "A gente estamos em a contra-mão de o @ferrisss ! ! Amanhã , nossa gestora vai vender JBSS3 ! ! Call de venda , vai cair muito ! !",
    "marks": [
      {
        "word": "venda",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "venda",
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
    "Texto": "RT @tovaga : @deinha_asl @coroneldoblog Em 2010 o Sheik conseguiu capitalizar a Petrobras com venda de ativos #PETR4 a R$ 26,30 - Hoje vale …",
    "marks": [
      {
        "word": "venda",
        "type": "rel"
      },
      {
        "word": "o Sheik",
        "type": "arg0"
      },
      {
        "word": "de ativos #PETR4",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "venda",
        "subscript": "rel"
      },
      {
        "word": "Sheik",
        "subscript": "nsubj"
      },
      {
        "word": "ativos",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "o Sheik",
      "arg1": "de ativos #PETR4",
      "arg2": "-"
    }
  },
  {
    "Texto": "@ferrisss @dfittarelli vendinha de itub4 em os 35,10 começando a dar frutos , VAI QUE VAI !",
    "marks": [
      {
        "word": "venda",
        "type": "rel"
      },
      {
        "word": "de itub4",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "venda",
        "subscript": "rel"
      },
      {
        "word": "itub4",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de itub4",
      "arg2": "-"
    }
  },
  {
    "Texto": "#RADL3 #HYPE3 Vendas em farmácias crescem 16,74 % em o 1º trimestre",
    "marks": [
      {
        "word": "Venda",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "Venda",
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
    "Texto": "#vale5 venda em o Obj #petr4 venda em o Obj #winj14 Venda em o Obj rsrsr",
    "marks": [
      {
        "word": "venda",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "venda",
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
    "Texto": "#vale5 venda em o Obj #petr4 venda em o Obj #winj14 Venda em o Obj rsrsr",
    "marks": [
      {
        "word": "venda",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "venda",
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
    "Texto": "#vale5 venda em o Obj #petr4 venda em o Obj #winj14 Venda em o Obj rsrsr",
    "marks": [
      {
        "word": "venda",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "venda",
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
    "Texto": "@clubedopairico e a venda de a Vale5 rsrsr",
    "marks": [
      {
        "word": "venda",
        "type": "rel"
      },
      {
        "word": "de a Vale5",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "venda",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de a Vale5",
      "arg2": "-"
    }
  },
  {
    "Texto": "@Live_Trade claro ! Logo mais csna3 inspira venda ai ? ? ?",
    "marks": [
      {
        "word": "venda",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "venda",
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
    "Texto": "peso extra ( de venda ) pra #PETR4 ... RT @exame_mercados Itaú e Bradesco superam Petrobras em 2a prévia de o Ibovespa : http://t.co/y2zPJzvmNZ",
    "marks": [
      {
        "word": "venda",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "venda",
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
    "Texto": "@Live_Trade oi marcos , fala alguma coisa de petr4 ai rs , ja confuso se fico em a venda ou entro em a compra ..",
    "marks": [
      {
        "word": "venda",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "venda",
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
    "Texto": "$CPFE3 - CPFL ENERGIA ( CPFE3 ) detalha condições de venda de energia de a Usina Serra de a Mesa http://t.co/DQpEmeKDXu",
    "marks": [
      {
        "word": "venda",
        "type": "rel"
      },
      {
        "word": "de energia de a Usina Serra de a Mesa",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "venda",
        "subscript": "rel"
      },
      {
        "word": "energia",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de energia de a Usina Serra de a Mesa",
      "arg2": "-"
    }
  },
  {
    "Texto": "$PETR3 - Petrobras ( petr ) - Venda De Participacao Em a Ute Norte Fluminense http://t.co/APjoIqboCl",
    "marks": [
      {
        "word": "Venda",
        "type": "rel"
      },
      {
        "word": "De Participacao Em a Ute Norte Fluminense",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "Venda",
        "subscript": "rel"
      },
      {
        "word": "Participacao",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "De Participacao Em a Ute Norte Fluminense",
      "arg2": "-"
    }
  },
  {
    "Texto": "MRVE3 comprar a R$ 8.17 indicado em 12/03/2014 14:30 e finalizou a venda com resultado de R$ - 0.06 ou - 0.73 % http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "venda",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "venda",
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
    "Texto": "ELET3 comprar a R$ 4.93 indicado em 12/03/2014 15:26 e finalizou a venda com resultado de R$ - 0.11 ou - 2.23 % http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "venda",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "venda",
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
    "Texto": "ELET6 comprar a R$ 8.93 indicado em 12/03/2014 16:21 e finalizou a venda com resultado de R$ - 0.29 ou - 3.25 % http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "venda",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "venda",
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
    "Texto": "ELPL4 comprar a R$ 8.05 indicado em 13/03/2014 10:42 e finalizou a venda com resultado de R$ - 0.09 ou - 1.12 % http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "venda",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "venda",
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
    "Texto": "MRVE3 comprar a R$ 8.33 indicado em 13/03/2014 15:38 e finalizou a venda com resultado de R$ - 0.05 ou - 0.60 % http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "venda",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "venda",
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
    "Texto": "USIM5 comprar a R$ 9.13 indicado em 14/03/2014 12:33 e finalizou a venda com resultado de R$ 2.51 ou 27.49 % http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "venda",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "venda",
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
    "Texto": "KROT3 comprar a R$ 43.65 indicado em 14/03/2014 16:50 e finalizou a venda com resultado de R$ - 0.32 ou - 0.73 % http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "venda",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "venda",
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
    "Texto": "GOLL4 comprar a R$ 10.19 indicado em 17/03/2014 10:48 e finalizou a venda com resultado de R$ 0.86 ou 8.44 % http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "venda",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "venda",
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
    "Texto": "ITUB4 comprar a R$ 29.82 indicado em 17/03/2014 11:03 e finalizou a venda com resultado de R$ 0.57 ou 1.91 % http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "venda",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "venda",
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
    "Texto": "OIBR4 comprar a R$ 3.43 indicado em 18/03/2014 12:11 e finalizou a venda com resultado de R$ 0.84 ou 24.49 % http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "venda",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "venda",
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
    "Texto": "MRVE3 comprar a R$ 7.12 indicado em 18/03/2014 12:20 e finalizou a venda com resultado de R$ 0.74 ou 10.39 % http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "venda",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "venda",
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
    "Texto": "MRFG3 comprar a R$ 3.89 indicado em 18/03/2014 15:03 e finalizou a venda com resultado de R$ 0.10 ou 2.57 % http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "venda",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "venda",
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
    "Texto": "JBSS3 comprar a R$ 7.57 indicado em 18/03/2014 15:23 e finalizou a venda com resultado de R$ - 0.13 ou - 1.72 % http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "venda",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "venda",
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
    "Texto": "ELPL4 comprar a R$ 7.85 indicado em 18/03/2014 15:41 e finalizou a venda com resultado de R$ - 0.17 ou - 2.17 % http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "venda",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "venda",
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
    "Texto": "MRVE3 comprar a R$ 7.14 indicado em 19/03/2014 10:34 e finalizou a venda com resultado de R$ - 0.12 ou - 1.68 % http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "venda",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "venda",
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
    "Texto": "BBAS3 comprar a R$ 19.38 indicado em 19/03/2014 12:05 e finalizou a venda com resultado de R$ 0.71 ou 3.66 % http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "venda",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "venda",
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
    "Texto": "BRKM5 comprar a R$ 16.45 indicado em 19/03/2014 12:20 e finalizou a venda com resultado de R$ 1.37 ou 8.33 % http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "venda",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "venda",
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
    "Texto": "PETR4 comprar a R$ 13.32 indicado em 19/03/2014 14:10 e finalizou a venda com resultado de R$ 1.06 ou 7.96 % http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "venda",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "venda",
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
    "Texto": "PETR3 comprar a R$ 12.79 indicado em 19/03/2014 14:13 e finalizou a venda com resultado de R$ 0.42 ou 3.28 % http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "venda",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "venda",
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
    "Texto": "VALE3 comprar a R$ 29.95 indicado em 19/03/2014 14:16 e finalizou a venda com resultado de R$ 2.87 ou 9.58 % http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "venda",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "venda",
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
    "Texto": "LLXL3 comprar a R$ 0.88 indicado em 19/03/2014 15:43 e finalizou a venda com resultado de R$ 0.12 ou 13.64 % http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "venda",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "venda",
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
    "Texto": "@Live_Trade @Jgrafista11 @aecioneto amigos , vêem venda em a AEDU3 ? Obg",
    "marks": [
      {
        "word": "venda",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "venda",
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
    "Texto": "As vendas se deram em os objs não ainda os alvos de queda .. RT @Live_Trade : #vale5 venda em o Obj #petr4 venda em o Obj #winj14 Venda em o Obj rsrsr",
    "marks": [
      {
        "word": "venda",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "venda",
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
    "Texto": "As vendas se deram em os objs não ainda os alvos de queda .. RT @Live_Trade : #vale5 venda em o Obj #petr4 venda em o Obj #winj14 Venda em o Obj rsrsr",
    "marks": [
      {
        "word": "venda",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "venda",
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
    "Texto": "As vendas se deram em os objs não ainda os alvos de queda .. RT @Live_Trade : #vale5 venda em o Obj #petr4 venda em o Obj #winj14 Venda em o Obj rsrsr",
    "marks": [
      {
        "word": "venda",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "venda",
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
    "Texto": "As vendas se deram em os objs não ainda os alvos de queda .. RT @Live_Trade : #vale5 venda em o Obj #petr4 venda em o Obj #winj14 Venda em o Obj rsrsr",
    "marks": [
      {
        "word": "venda",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "venda",
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
    "Texto": "@Live_Trade cyre3 venda ou continuidade agora ?",
    "marks": [
      {
        "word": "venda",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "venda",
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
    "Texto": "@live_trade tá mesmo com uma cara boa essa venda . Vamos aguardar . #PETR4 e #VALE5 estão bem doidinhas hoje .",
    "marks": [
      {
        "word": "venda",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "venda",
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
    "Texto": "@Live_Trade adoro padroes de impulsao e reversao ! FIBR3 dando aquele caldinho em a venda ! abs",
    "marks": [
      {
        "word": "venda",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "venda",
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
    "Texto": "@Live_Trade mt bom ... por eqnnt fiz nd em o indice hehe ... só vendinha em a CSNA3 por enqt",
    "marks": [
      {
        "word": "venda",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "venda",
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
    "Texto": " #PETR4 Se não fossem as vendas de ativos e alguns acertos contábeis o resultado seria R$ 2,2 bilhões http://t.co/1ekfbHY1rq",
    "marks": [
      {
        "word": "venda",
        "type": "rel"
      },
      {
        "word": "de ativos",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "venda",
        "subscript": "rel"
      },
      {
        "word": "ativos",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de ativos",
      "arg2": "-"
    }
  },
  {
    "Texto": "Gatilho position , semana que vem : Ativo bvmf3 - Venda - Validade 14/mar - Start 9,89 - Stop 10,45 - RP 9,33 http://t.co/YxHS4nZakh",
    "marks": [
      {
        "word": "Venda",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "Venda",
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
    "Texto": "Gatilho position , semana que vem : Ativo bbdc4 - Venda - Validade 14/mar - Start 26,74 - Stop 28,14 - RP 25,34 http://t.co/He6aCGaEZA",
    "marks": [
      {
        "word": "Venda",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "Venda",
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
    "Texto": "Gatilho position , semana que vem : Ativo mrve3 - Venda - Validade 14/mar - Start 7,86 - Stop 8,57 - RP 7,15 http://t.co/YZMScHz2Ab",
    "marks": [
      {
        "word": "Venda",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "Venda",
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
    "Texto": "Gatilho position , semana que vem : Ativo bvmf3 - Venda - Validade 28/mar - Start 9,75 - Stop 10,65 - RP 8,85 http://t.co/VwDCcrOD2H",
    "marks": [
      {
        "word": "Venda",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "Venda",
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
    "Texto": "Gatilho position , semana que vem : Ativo petr4 - Venda - Validade 28/mar - Start 12,56 - Stop 14,16 - RP 10,96 http://t.co/MOovo6ZJWG",
    "marks": [
      {
        "word": "Venda",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "Venda",
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
    "Texto": "Gatilho position , semana que vem : Ativo vale5 - Venda - Validade 04/abr - Start 26,91 - Stop 28,18 - RP 25,64 http://t.co/MExtY8BtID",
    "marks": [
      {
        "word": "Venda",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "Venda",
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
    "Texto": "Gatilho position , semana que vem : Ativo csna3 - Venda - Validade 04/abr - Start 9,62 - Stop 10,32 - RP 8,92 http://t.co/kDM8p8JanC",
    "marks": [
      {
        "word": "Venda",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "Venda",
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
    "Texto": "Gatilho position , semana que vem : Ativo ggbr4 - Venda - Validade 04/abr - Start 14,12 - Stop 14,8 - RP 13,44 http://t.co/IuCOvOiEI5",
    "marks": [
      {
        "word": "Venda",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "Venda",
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
    "Texto": "Gatilho position , semana que vem : Ativo mrve3 - Venda - Validade 11/abr - Start 7,77 - Stop 8,41 - RP 7,13 http://t.co/WC4Kjli0xh",
    "marks": [
      {
        "word": "Venda",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "Venda",
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
    "Texto": "RT @otraderonline : Gatilho position , semana que vem : Ativo mrve3 - Venda - Validade 11/abr - Start 7,77 - Stop 8,41 - RP 7,13 http://t.c…",
    "marks": [
      {
        "word": "Venda",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "Venda",
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
    "Texto": "RT @otraderonline : Gatilho position , semana que vem : Ativo vale5 - Venda - Validade 11/abr - Start 27,91 - Stop 30,06 - RP 25,76 http://…",
    "marks": [
      {
        "word": "Venda",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "Venda",
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
    "Texto": "RT @uol_noticias : Vendas de o Pão de Açúcar sobem e empresa fatura R$ 14,9 bi em o 1º tri : O Grupo Pão de Açúcar ( PCAR4 ) anunciou ... http://t…",
    "marks": [
      {
        "word": "Venda",
        "type": "rel"
      },
      {
        "word": "de o Pão de Açúcar",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "Venda",
        "subscript": "rel"
      },
      {
        "word": "o",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de o Pão de Açúcar",
      "arg2": "-"
    }
  },
  {
    "Texto": "#USIM5 ): O presidente de a cia , disse há pouco , em teleconferência com analistas e investidores , que a venda de ... http://t.co/EAW0g7gmqh",
    "marks": [
      {
        "word": "venda",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "venda",
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
    "Texto": "Tomado em OIBR4 , a o que parece será uma operação estilo ELPL4 em a venda descoberta , já sei o resultado : perderei o sono por uns dias .",
    "marks": [
      {
        "word": "venda",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "venda",
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
    "Texto": "Venda coberta PETR4 ( últ. fech. ) : PETRD13 ( Tx. 0.66 % , prot. 22.37 % ) , PETRD14 ( Tx. 0.77 % prot. 16.07 % ) , PETRD44 ... http://t.co/V8Ndg7mLGP",
    "marks": [
      {
        "word": "Venda",
        "type": "rel"
      },
      {
        "word": "PETR4",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "Venda",
        "subscript": "rel"
      },
      {
        "word": "PETR4",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "PETR4",
      "arg2": "-"
    }
  },
  {
    "Texto": "Spread de 0,08 em a #PETR4 que bosta de mercado ! 0,51 % de variação entre a compra e a venda",
    "marks": [
      {
        "word": "venda",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "venda",
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
    "Texto": "Venda coberta PETR4 ( últ. fech. ) : PETRE13 ( Tx. 0 % , prot. 24.14 % ) , PETRE14 ( Tx. 0.61 % , prot. 18.4 % ) , PETRE44 ... http://t.co/Up5kxy5Wt7",
    "marks": [
      {
        "word": "Venda",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "Venda",
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
    "Texto": "#BR #BOVESPA #BRPR3 BR Properties anuncia venda de R$ 3,18 bilhões em imóveis . http://t.co/ip3sXYLaXA #IBOV - 0,93 % a os 46.654 pontos .",
    "marks": [
      {
        "word": "venda",
        "type": "rel"
      },
      {
        "word": "BR Properties",
        "type": "arg0"
      },
      {
        "word": "imóveis",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "venda",
        "subscript": "rel"
      },
      {
        "word": "Properties",
        "subscript": "nsubj"
      },
      {
        "word": "imóveis",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "BR Properties",
      "arg1": "imóveis",
      "arg2": "-"
    }
  },
  {
    "Texto": "ESTC3 _ aguardando o ponto de venda . http://t.co/otrE2VMRLo",
    "marks": [
      {
        "word": "venda",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "venda",
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
    "Texto": "#BBAS3 OCO em o intra , quem gosta de as vendinhas ... http://t.co/lEZSSC2mb5",
    "marks": [
      {
        "word": "venda",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "venda",
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
    "Texto": "AEDU3 _ Venda em a perda de a mínima http://t.co/1h9fmX8rUD",
    "marks": [
      {
        "word": "Venda",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "Venda",
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
    "Texto": "estc3 _ Venda em a perda de a mínima http://t.co/2GO4ZSp8HV",
    "marks": [
      {
        "word": "Venda",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "Venda",
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
    "Texto": "SUZB5 _ Venda em a perda de a mínima . http://t.co/GAlpIUw86m",
    "marks": [
      {
        "word": "Venda",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "Venda",
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
    "Texto": "#bisa3 avalio venda em a perde de 1,42",
    "marks": [
      {
        "word": "venda",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "venda",
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
    "Texto": "#PETR4 histórias fantásticas de o #IBOLESMA : investidor passou os últimos anos fazendo venda coberta , praticamente ... http://t.co/I0TCjC1hWl",
    "marks": [
      {
        "word": "venda",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "venda",
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
    "Texto": "#BRFS3 - Venda de o setor de lácteos reforça aposta em internacionalização de a BRF - http://t.co/N9joO8bHxy",
    "marks": [
      {
        "word": "Venda",
        "type": "rel"
      },
      {
        "word": "de o setor de lácteos",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "Venda",
        "subscript": "rel"
      },
      {
        "word": "o",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de o setor de lácteos",
      "arg2": "-"
    }
  },
  {
    "Texto": "#NATU3 canal de baixa e deixnado figura de indecisao ! Venda ? !",
    "marks": [
      {
        "word": "Venda",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "Venda",
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
        "word": "venda",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "venda",
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
    "Texto": "#PETR4 subindo ... e os gringos em a venda . Estranho não ? Em a compra só Bradesco , Brasil Plural , Convencão e BTG .",
    "marks": [
      {
        "word": "venda",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "venda",
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
    "Texto": "PETR4 subiu ... e os alugueis tbm ... hummmmmm ... só gringos em a venda ... tem alguma coisa faltando ai !",
    "marks": [
      {
        "word": "venda",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "venda",
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
    "Texto": "#GOLL4 quase dando venda ... objetivo 9,60 !",
    "marks": [
      {
        "word": "venda",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "venda",
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
    "Texto": "de olha em a PETR4 pra venda",
    "marks": [
      {
        "word": "venda",
        "type": "rel"
      },
      {
        "word": "em a PETR4",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "venda",
        "subscript": "rel"
      },
      {
        "word": "PETR4",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "em a PETR4",
      "arg2": "-"
    }
  },
  {
    "Texto": "Gráfico de a #PETR4 de 60 minutos . Momento delicado ... ou bom para venda ? http://t.co/vYuBhgm0pA",
    "marks": [
      {
        "word": "venda",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "venda",
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
    "Texto": "Pessoal , Havia sugerido operações de venda em os papéis SUZB5 e FIBR3 e que foram acionados . SE , por acaso , ... http://t.co/F40gTjAjt3",
    "marks": [
      {
        "word": "venda",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "venda",
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
    "Texto": "@ferrisss Epa ganhei em a Petr4 hoje duas compras uma em 15,84 venda 16,02 e outra compra 15,9 venda em o leilao .",
    "marks": [
      {
        "word": "venda",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "venda",
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
    "Texto": "@ferrisss Epa ganhei em a Petr4 hoje duas compras uma em 15,84 venda 16,02 e outra compra 15,9 venda em o leilao .",
    "marks": [
      {
        "word": "venda",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "venda",
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
    "Texto": "Venda coberta PETR4 ( últ. fech. ) : PETRE13 ( Tx. 1,00 % , prot. 26,50 % ) , PETRE14 ( Tx. 1,23 % , prot. 20,63 % ) , PETRE44 ... http://t.co/s09TpzRCWS",
    "marks": [
      {
        "word": "Venda",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "Venda",
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
    "Texto": "#ggbr4 venda evoluindo",
    "marks": [
      {
        "word": "venda",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "venda",
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
    "Texto": "Venda ( por o grafico semanal ) de mrve3 bateu em a RP !",
    "marks": [
      {
        "word": "Venda",
        "type": "rel"
      },
      {
        "word": "de mrve3",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "Venda",
        "subscript": "rel"
      },
      {
        "word": "mrve3",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de mrve3",
      "arg2": "-"
    }
  },
  {
    "Texto": "#ITUB4 chamando venda ! ! ! passou aqui piscando pra mim !",
    "marks": [
      {
        "word": "venda",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "venda",
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
    "Texto": "#CESP6 - Lucro de a Cesp mais de o que dobra , com ganhos por venda de energia - http://t.co/wD8lof1TBv",
    "marks": [
      {
        "word": "venda",
        "type": "rel"
      },
      {
        "word": "de energia",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "venda",
        "subscript": "rel"
      },
      {
        "word": "energia",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de energia",
      "arg2": "-"
    }
  },
  {
    "Texto": "#GGBR4 confirmando venda ? !",
    "marks": [
      {
        "word": "venda",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "venda",
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
    "Texto": "Cristãos de pouca fé ! ! A gente damos a dica aí ! ! Segue quem acredita e sabe o quer quer ! ! PETR4 e JBSS3 : quem entrou em a venda , ganhou ! !",
    "marks": [
      {
        "word": "venda",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "venda",
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
    "Texto": "O Guru , somente hoje , fez trava de baixa em a PETR4 ! ! HAHAHHA ! ! A gente estamos gritando venda faz tempo ! ! Tá atrasado , Guru ! !",
    "marks": [
      {
        "word": "venda",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "venda",
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
    "Texto": "#BBAS3.SA anunciou hoje #JSCP em a #BOVESPA . Hora de manter posição , cancelei minhas vendas .",
    "marks": [
      {
        "word": "venda",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "venda",
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
    "Texto": "#LLXL3 minha opiniao é que é mto fundo zerando venda ... por isso a alta .. e devolvendo BTC ! Vai sair de o indice e não podem ficar vendidos !",
    "marks": [
      {
        "word": "venda",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "venda",
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
    "Texto": "vale5 ta em uma zona de preço complicado . nem compra nem venda",
    "marks": [
      {
        "word": "venda",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "venda",
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
    "Texto": "Usim5 acho q tinha vd em ela depois vou olhar",
    "marks": [
      {
        "word": "venda",
        "type": "rel"
      },
      {
        "word": "em ela",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "venda",
        "subscript": "rel"
      },
      {
        "word": "ela",
        "subscript": "obl"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "em ela",
      "arg2": "-"
    }
  },
  {
    "Texto": "@piavu #petr4 tem Obj 16,4 tenho sinal de vd abaixo de 15,7 ainda a confirmar ... por outro lado q acho + dificil , se forte 17,96 e 18,75",
    "marks": [
      {
        "word": "venda",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "venda",
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
    "Texto": "@xandymello artigo de a uol publicado ontem . Para eles a PETR4 é para VENDA e não compra . Um pto de vista diferente ... http://t.co/NqfnlWdanB",
    "marks": [
      {
        "word": "VENDA",
        "type": "rel"
      },
      {
        "word": "a PETR4",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "VENDA",
        "subscript": "rel"
      },
      {
        "word": "PETR4",
        "subscript": "nsubj"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "a PETR4",
      "arg2": "-"
    }
  },
  {
    "Texto": "OU venda de #petr4 em a perda de os R$ 13,9",
    "marks": [
      {
        "word": "venda",
        "type": "rel"
      },
      {
        "word": "de #petr4",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "venda",
        "subscript": "rel"
      },
      {
        "word": "petr4",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de #petr4",
      "arg2": "-"
    }
  },
  {
    "Texto": "PETR4 objetivo de a venda R$ 13,9",
    "marks": [
      {
        "word": "venda",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "venda",
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
    "Texto": "@deinha_asl @coroneldoblog Em 2010 o Sheik conseguiu capitalizar a Petrobras com venda de ativos #PETR4 a R$ 26,3 - Hoje vale ~ 13,25 R$",
    "marks": [
      {
        "word": "venda",
        "type": "rel"
      },
      {
        "word": "o Sheik",
        "type": "arg0"
      },
      {
        "word": "de ativos #PETR4",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "venda",
        "subscript": "rel"
      },
      {
        "word": "Sheik",
        "subscript": "nsubj"
      },
      {
        "word": "ativos",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "o Sheik",
      "arg1": "de ativos #PETR4",
      "arg2": "-"
    }
  },
  {
    "Texto": "BTOW3 E CTIP3 performando setup de o IFR múltiplo com FAD anormal p/ venda - entradas múltiplas em as máximas de cada dia se continuar subindo",
    "marks": [
      {
        "word": "venda",
        "type": "rel"
      },
      {
        "word": "de o IFR múltiplo com FAD anormal",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "venda",
        "subscript": "rel"
      },
      {
        "word": "o",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de o IFR múltiplo com FAD anormal",
      "arg2": "-"
    }
  },
  {
    "Texto": "PETR4 resistência muito forte em R$ 15,1 ... nova venda !",
    "marks": [
      {
        "word": "venda",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "venda",
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
    "Texto": "#petr4 - Lancei venda : R$ 15,4 !",
    "marks": [
      {
        "word": "venda",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "venda",
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
    "Texto": "#KLBN4 abaixo de R$ 10,95 - venda para SWING",
    "marks": [
      {
        "word": "venda",
        "type": "rel"
      },
      {
        "word": "SWING",
        "type": "arg2"
      }
    ],
    "subscripts": [
      {
        "word": "venda",
        "subscript": "rel"
      },
      {
        "word": "SWING",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "-",
      "arg2": "SWING"
    }
  },
  {
    "Texto": "LREN3 - vd 63,48 , obj curto amanhã 62,2 .",
    "marks": [
      {
        "word": "venda",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "venda",
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
    "Texto": "@empiricus_ind @ferrisss Setor Carne e Derivados de a @empiricus_ind em o momento é Compra de BEEF3 , Neutro em JBSS3 e venda em MRFG3 ?",
    "marks": [
      {
        "word": "venda",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "venda",
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
    "Texto": "Trades em andamento sem realização parcial ou stop loss apenas a venda em bbas3 . Start 20,09 . Stop 21,92 e alvo 18,26",
    "marks": [
      {
        "word": "venda",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "venda",
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
    "Texto": "Pode se sim que arrisque vd em #petr4",
    "marks": [
      {
        "word": "venda",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "venda",
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
    "Texto": "GFSA3 ... 227 com um ritmo muito forte em a venda . Se permanecer assim será difícil o papel fechar em o azul hoje . Briga pesada : 227 x 40 .",
    "marks": [
      {
        "word": "venda",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "venda",
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
    "Texto": "@Live_Trade Oi Marcos , ainda em a venda de #petr4 ? Qual objetivo ?",
    "marks": [
      {
        "word": "venda",
        "type": "rel"
      },
      {
        "word": "de #petr4",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "venda",
        "subscript": "rel"
      },
      {
        "word": "petr4",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de #petr4",
      "arg2": "-"
    }
  },
  {
    "Texto": "Gatilho position , semana que vem : Ativo cmig4 - Venda - Validade 14/mar - Start 12,89 - Stop 13,75 - RP 12,03 http://t.co/MPfzB6Vj0o",
    "marks": [
      {
        "word": "Venda",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "Venda",
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
    "Texto": "Gatilho position , semana que vem : Ativo jbss3 - Venda - Validade 28/mar - Start 7,12 - Stop 8,06 - RP 6,18 http://t.co/gwwImv5m2r",
    "marks": [
      {
        "word": "Venda",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "Venda",
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
    "Texto": "Gatilho position , semana que vem : Ativo vale5 - Venda - Validade 11/abr - Start 27,91 - Stop 30,06 - RP 25,76 http://t.co/bfQcsZb1xx",
    "marks": [
      {
        "word": "Venda",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "Venda",
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
    "Texto": "Vendas de o Pão de Açúcar sobem e empresa fatura R$ 14,9 bi em o 1º tri : O Grupo Pão de Açúcar ( PCAR4 ) anunciou ... http://t.co/VS3gtX1eQi",
    "marks": [
      {
        "word": "Venda",
        "type": "rel"
      },
      {
        "word": "de o Pão de Açúcar",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "Venda",
        "subscript": "rel"
      },
      {
        "word": "o",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de o Pão de Açúcar",
      "arg2": "-"
    }
  },
  {
    "Texto": "MP recomendou a o Cade , venda de ativos de a Anhanguera para que a fusão com a Kroton não represente ato de concentração . #AEDU3 #KROT3",
    "marks": [
      {
        "word": "venda",
        "type": "rel"
      },
      {
        "word": "de ativos de a Anhanguera",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "venda",
        "subscript": "rel"
      },
      {
        "word": "ativos",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de ativos de a Anhanguera",
      "arg2": "-"
    }
  },
  {
    "Texto": "timp3 deu vd e não vi",
    "marks": [
      {
        "word": "venda",
        "type": "rel"
      },
      {
        "word": "timp3",
        "type": "arg0"
      }
    ],
    "subscripts": [
      {
        "word": "venda",
        "subscript": "rel"
      },
      {
        "word": "timp3",
        "subscript": "nsubj"
      }
    ],
    "args": {
      "arg0": "timp3",
      "arg1": "-",
      "arg2": "-"
    }
  },
  {
    "Texto": "RT @Live_Trade : timp3 deu vd e não vi ' que sorte ' não pára de subir !",
    "marks": [
      {
        "word": "venda",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "venda",
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
    "Texto": "GFSA3 . Aparentemente o 114 vai jogar ela em os 3 reais ainda hoje . Está manipulando para sair . Quando é assim o montante é alto para venda .",
    "marks": [
      {
        "word": "venda",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "venda",
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
    "Texto": "MRVE3 . Boa venda agora a 7,14 . Dinheiro fácil .",
    "marks": [
      {
        "word": "venda",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "venda",
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
    "Texto": "Compra de GOLL4 , Venda de ENBR3 e BBRK3 - 27/05/2014 http://t.co/wNeJrN102b",
    "marks": [
      {
        "word": "Venda",
        "type": "rel"
      },
      {
        "word": "de ENBR3 e BBRK3",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "Venda",
        "subscript": "rel"
      },
      {
        "word": "ENBR3",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de ENBR3 e BBRK3",
      "arg2": "-"
    }
  },
  {
    "Texto": "@Live_Trade tem sinal de venda alugada p estc3 ?",
    "marks": [
      {
        "word": "venda",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "venda",
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
    "Texto": "FOI ! ! ! OBJ CUMPRIDO ! ! ! RT @Live_Trade: Quem lembra de o Post #Vale5armando uma linda venda de diário ? pois é 27,35 obj de a queda .",
    "marks": [
      {
        "word": "venda",
        "type": "rel"
      },
      {
        "word": "de diário",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "venda",
        "subscript": "rel"
      },
      {
        "word": "diário",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de diário",
      "arg2": "-"
    }
  },
  {
    "Texto": "veeeeenha RT @Live_Trade : bbas3 em a vd",
    "marks": [
      {
        "word": "venda",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "venda",
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
    "Texto": "@luizmoratoneto temos recomendação de venda para PDGR3 .",
    "marks": [
      {
        "word": "venda",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "venda",
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
    "Texto": "Para amanhã em a venda de olho em : #cyre3 #tble3 #Brkm5",
    "marks": [
      {
        "word": "venda",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "venda",
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
    "Texto": "RT @ferrisss : TRADES Abertos : Compra de VALE5 - 27 VENDA de PETR : 13,9 Encerrrados : PETR - 13,45 - 13,75 . Segue o baile n concorrênci …",
    "marks": [
      {
        "word": "VENDA",
        "type": "rel"
      },
      {
        "word": "de PETR",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "VENDA",
        "subscript": "rel"
      },
      {
        "word": "PETR",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de PETR",
      "arg2": "-"
    }
  },
  {
    "Texto": "TRADES Abertos : Compra de VALE5 - 27,00 VENDA de PETR : 13,90 Encerrrados : PETR - 13,45 - 13,75 . Segue o baile n concorrência a o vivo n twi",
    "marks": [
      {
        "word": "VENDA",
        "type": "rel"
      },
      {
        "word": "de PETR",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "VENDA",
        "subscript": "rel"
      },
      {
        "word": "PETR",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de PETR",
      "arg2": "-"
    }
  },
  {
    "Texto": "Venda de AEDU3 e Compra de BTOW3 - 04/03/2014 http://t.co/nFNnHIyPVE",
    "marks": [
      {
        "word": "Venda",
        "type": "rel"
      },
      {
        "word": "de AEDU3",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "Venda",
        "subscript": "rel"
      },
      {
        "word": "AEDU3",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de AEDU3",
      "arg2": "-"
    }
  },
  {
    "Texto": "PCAR4 _ VENDA http://t.co/ricFtnOyXh",
    "marks": [
      {
        "word": "VENDA",
        "type": "rel"
      },
      {
        "word": "PCAR4",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "VENDA",
        "subscript": "rel"
      },
      {
        "word": "PCAR4",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "PCAR4",
      "arg2": "-"
    }
  },
  {
    "Texto": "SUZB5 _ De olho em a venda ... Está próximo \";)\"",
    "marks": [
      {
        "word": "venda",
        "type": "rel"
      },
      {
        "word": "SUZB5",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "venda",
        "subscript": "rel"
      },
      {
        "word": "SUZB5",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "SUZB5",
      "arg2": "-"
    }
  },
  {
    "Texto": "Hoje entrei em a venda com SANB11 . Estou de olho agora em BRPR3 e TIMP3 . Analisem e tirem suas conclusões .",
    "marks": [
      {
        "word": "venda",
        "type": "rel"
      },
      {
        "word": "entrei",
        "type": "arg0"
      }
    ],
    "subscripts": [
      {
        "word": "venda",
        "subscript": "rel"
      },
      {
        "word": "entrei",
        "subscript": "root"
      }
    ],
    "args": {
      "arg0": "entrei",
      "arg1": "-",
      "arg2": "-"
    }
  },
  {
    "Texto": "Boa semana a todos ! De olho em o setup de venda em MRVE3 , muito bonita !",
    "marks": [
      {
        "word": "venda",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "venda",
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
    "Texto": "#MMXM3 de olho ... #LIGT3 perdendo R$ 19,33 pode dar venda ...",
    "marks": [
      {
        "word": "venda",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "venda",
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
    "Texto": "Abrimos venda de ITUB4 R$ 35,00 .",
    "marks": [
      {
        "word": "venda",
        "type": "rel"
      },
      {
        "word": "de ITUB4",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "venda",
        "subscript": "rel"
      },
      {
        "word": "ITUB4",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de ITUB4",
      "arg2": "-"
    }
  },
  {
    "Texto": "#HGTX3 só perdeu R$ 20 de um ano pra cá ! Coleções ruins , vendas fracas e ainda saiu de o MSCI ... que faseeeee",
    "marks": [
      {
        "word": "venda",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "venda",
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
    "Texto": "P amanhã monitoro em a CP #oibr3 #oibr4 #timp3 / em a ponta de vd #alll3",
    "marks": [
      {
        "word": "venda",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "venda",
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
    "Texto": "Algoritmo performando 12 % acima de o IBOV desde o início ... Venda de TIMP3 acionada em os 11,32 , BRML3 e ESTC3 ... http://t.co/6H6bijRv2n",
    "marks": [
      {
        "word": "Venda",
        "type": "rel"
      },
      {
        "word": "de TIMP3",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "Venda",
        "subscript": "rel"
      },
      {
        "word": "TIMP3",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de TIMP3",
      "arg2": "-"
    }
  },
  {
    "Texto": "Quem fez venda de opções em fevereiro e março está rindo com os prêmios recebidos em #Petr4 e #Vale5 e acho que em vários outros papeis .",
    "marks": [
      {
        "word": "venda",
        "type": "rel"
      },
      {
        "word": "de opções",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "venda",
        "subscript": "rel"
      },
      {
        "word": "opções",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de opções",
      "arg2": "-"
    }
  },
  {
    "Texto": "RT @Fontes_ : Quem fez venda de opções em fevereiro e março está rindo com os prêmios recebidos em #Petr4 e #Vale5 e acho que em vários out …",
    "marks": [
      {
        "word": "venda",
        "type": "rel"
      },
      {
        "word": "de opções",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "venda",
        "subscript": "rel"
      },
      {
        "word": "opções",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de opções",
      "arg2": "-"
    }
  },
  {
    "Texto": "Comentei ainda com vc que podia ser a venda lá lembra ? ... rs RT @CaciqueInvest : @Live_Trade olha o que virou a BRFS3 ... tú é foda hein ! :/ kkk",
    "marks": [
      {
        "word": "venda",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "venda",
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
    "Texto": "Finalizando o dia com um stop loss em Usiminas ( USIM5 ) , porém com um lucro maior que 20 % em essa operação de venda ... http://t.co/YRki2dGTiJ",
    "marks": [
      {
        "word": "venda",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "venda",
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
    "Texto": "ESTC3 gerando venda para o Anderson agora em 21.48 stop 22.81 com objetivo em 20.19 .",
    "marks": [
      {
        "word": "venda",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "venda",
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
    "Texto": "Bom dia a todos , monitoro em a cp : #timp3 #osxb3 e para venda #wege3 , em os respectivos rompimentos de diário",
    "marks": [
      {
        "word": "venda",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "venda",
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
    "Texto": "Credit Suisse é o responsável por 55 % de as vendas líquidas em PETR4 em o dia de hoje .",
    "marks": [
      {
        "word": "venda",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "venda",
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
    "Texto": "@danielschettin0 Tô com ti ... VALE5 tem um peso MONSTRUOSO em a minha carteira , por causa de a venda coberta de opções . abç !",
    "marks": [
      {
        "word": "venda",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "venda",
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
    "Texto": "vou focar um pouco mais em os ativos de o Ibov eztc3 elet6 e krot3 deram vendas hj e deixei passar",
    "marks": [
      {
        "word": "venda",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "venda",
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
    "Texto": "@clubedopairico Em o caso de PETR4 agora é acompanhar o fechamento de gap e entrar em as opções de venda . A o meu ver ...",
    "marks": [
      {
        "word": "venda",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "venda",
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
    "Texto": "O melhor cenário em uma operação de venda coberta de opções é vender OTM e a ação subir . É o que está acontecendo com VALE5 , em este momento .",
    "marks": [
      {
        "word": "venda",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "venda",
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
    "Texto": "Venda em ggbr4 em o semanal foi acionada !",
    "marks": [
      {
        "word": "Venda",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "Venda",
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
    "Texto": "Organização Mundial de Saúde faz incentivo a o aumento de os impostos em o tabaco para salvar mais vidas , efeito de a notícia foi venda em a #CRUZ3",
    "marks": [
      {
        "word": "venda",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "venda",
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
    "Texto": "#VALE5é #VENDA ? rsss #DEAL! #DEAL! #DEAL! ' 16 de março a as 12:12 ' após vencto de as opções podem puxar em a ... http://t.co/4mOMj1Om7d",
    "marks": [
      {
        "word": "VENDA",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "VENDA",
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