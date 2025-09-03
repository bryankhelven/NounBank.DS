document.addEventListener('DOMContentLoaded', function() {
  const SHOWN_ARGS = ["arg0", "arg1", "arg2"];
  const data = [
  {
    "Texto": "Quem montar uma carteira de ações agora vai morrer de rir em 10 anos ' , diz especialista : Se ... http://t.co/CrU7flmRmc #infomoney #vale5",
    "marks": [
      {
        "word": "carteira",
        "type": "rel"
      },
      {
        "word": "Quem",
        "type": "arg0"
      },
      {
        "word": "de ações",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "carteira",
        "subscript": "rel"
      },
      {
        "word": "Quem",
        "subscript": "nsubj"
      },
      {
        "word": "ações",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "Quem",
      "arg1": "de ações",
      "arg2": "-"
    }
  },
  {
    "Texto": "Planner recomenda 2 novas ações para março , saiba quais : Novidades em a carteira de a corretora ... http://t.co/bbIAa3mn8S #infomoney #vale5",
    "marks": [
      {
        "word": "carteira",
        "type": "rel"
      },
      {
        "word": "de a corretora",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "carteira",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de a corretora",
      "arg2": "-"
    }
  },
  {
    "Texto": "Discussão sobre Investimentos : Carteira Simulada , CSNA3 , USIM5 e GRND3 . http://t.co/9XXKzByFls",
    "marks": [
      {
        "word": "Carteira",
        "type": "rel"
      },
      {
        "word": "CSNA3 , USIM5 e GRND3",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "Carteira",
        "subscript": "rel"
      },
      {
        "word": "GRND3",
        "subscript": "appos"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "CSNA3 , USIM5 e GRND3",
      "arg2": "-"
    }
  },
  {
    "Texto": "Um esclarecimento : minha carteira é muito sobrecarregada de VALE5 por causa de opções . PETR4 tenho 24 % . Ou seja : 80 % de a carteira PETROVALE !",
    "marks": [
      {
        "word": "carteira",
        "type": "rel"
      },
      {
        "word": "minha",
        "type": "arg0"
      },
      {
        "word": "de VALE5",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "carteira",
        "subscript": "rel"
      },
      {
        "word": "minha",
        "subscript": "det"
      },
      {
        "word": "VALE5",
        "subscript": "obl"
      }
    ],
    "args": {
      "arg0": "minha",
      "arg1": "de VALE5",
      "arg2": "-"
    }
  },
  {
    "Texto": "Um esclarecimento : minha carteira é muito sobrecarregada de VALE5 por causa de opções . PETR4 tenho 24 % . Ou seja : 80 % de a carteira PETROVALE !",
    "marks": [
      {
        "word": "carteira",
        "type": "rel"
      },
      {
        "word": "PETROVALE",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "carteira",
        "subscript": "rel"
      },
      {
        "word": "PETROVALE",
        "subscript": "parataxis"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "PETROVALE",
      "arg2": "-"
    }
  },
  {
    "Texto": "EVEN3 - Corretora divulga carteira quantitativa para abril http://t.co/A2252YmOo3 via @infomoney",
    "marks": [
      {
        "word": "carteira",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "carteira",
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
        "word": "Carteira",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "Carteira",
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
    "Texto": "7 ações para ganhar com dividendos , segundo a Um Investimentos : Entraram em a carteira de a corr ... http://t.co/Boa8hPypZO #infomoney #vale5",
    "marks": [
      {
        "word": "carteira",
        "type": "rel"
      },
      {
        "word": "de a corr",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "carteira",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod:wtrunc"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de a corr",
      "arg2": "-"
    }
  },
  {
    "Texto": "Uma nova ação foi incluída em a carteira de a Lato Sensu : a VALE5 ( Vale PNA N1 ) . Com esta nova ação , a carteira e as ... http://t.co/wtEhs8FVDJ",
    "marks": [
      {
        "word": "carteira",
        "type": "rel"
      },
      {
        "word": "de a Lato Sensu",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "carteira",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "flat:name"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de a Lato Sensu",
      "arg2": "-"
    }
  },
  {
    "Texto": "Uma nova ação foi incluída em a carteira de a Lato Sensu : a VALE5 ( Vale PNA N1 ) . Com esta nova ação , a carteira e as ... http://t.co/wtEhs8FVDJ",
    "marks": [
      {
        "word": "carteira",
        "type": "rel"
      },
      {
        "word": "esta nova ação",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "carteira",
        "subscript": "rel"
      },
      {
        "word": "ação",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "esta nova ação",
      "arg2": "-"
    }
  },
  {
    "Texto": "Índice de ações MSCI Brasil , de o Morgan Stanley , q é seguido por grandes fundos retirou de a carteira a construtora MVRE3 e a Hering - HGTX3 ...",
    "marks": [
      {
        "word": "carteira",
        "type": "rel"
      },
      {
        "word": "a construtora MVRE3 e a Hering",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "carteira",
        "subscript": "rel"
      },
      {
        "word": "Hering",
        "subscript": "obj"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "a construtora MVRE3 e a Hering",
      "arg2": "-"
    }
  },
  {
    "Texto": "BB Investimentos troca 5 ativos de sua carteira , veja recomendações : Em este mês , entraram as ... http://t.co/6nvfUxbw1P #infomoney #vale5",
    "marks": [
      {
        "word": "carteira",
        "type": "rel"
      },
      {
        "word": "5 ativos",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "carteira",
        "subscript": "rel"
      },
      {
        "word": "ativos",
        "subscript": "obj"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "5 ativos",
      "arg2": "-"
    }
  },
  {
    "Texto": "Um Investimentos apresenta 6 papéis para ganhar com dividendos em março : Entraram em a carteir ... http://t.co/ECHWffFvY7 #infomoney #vale5",
    "marks": [
      {
        "word": "carteira",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "carteira",
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
    "Texto": "Carteira mais indicada por analistas e bancos p/ abril , para se ganhar ou perder pouco em a crise : ABEV3 , CCRO3 , PCAR4 , RADL3 , RENT3 , UGPA3 ...",
    "marks": [
      {
        "word": "Carteira",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "Carteira",
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
    "Texto": "SLW recomenda três carteiras para investir em o mês de abril , confira : Todas as três seleções ... http://t.co/k9YK2IDLmy #infomoney #vale5",
    "marks": [
      {
        "word": "carteira",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "carteira",
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
    "Texto": "Safra decide diminuir número de ativos de sua carteira , veja as trocas : A instituição decidi ... http://t.co/arnpufVQob #infomoney #vale5",
    "marks": [
      {
        "word": "carteira",
        "type": "rel"
      },
      {
        "word": "de ativos",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "carteira",
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
    "Texto": "BBSE3 - Safra decide diminuir número de ativos de sua carteira , veja as trocas - InfoMoney Veja mais em : http://t.co/BXD2IkR4E5",
    "marks": [
      {
        "word": "carteira",
        "type": "rel"
      },
      {
        "word": "de ativos",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "carteira",
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
    "Texto": "Corretora recomenda 3 carteiras para março : arrojada , dinâmica e moderada : De as três carteira ... http://t.co/EtOMfHo4JJ #infomoney #vale5",
    "marks": [
      {
        "word": "carteira",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "carteira",
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
    "Texto": "Corretora recomenda 3 carteiras para março : arrojada , dinâmica e moderada : De as três carteira ... http://t.co/EtOMfHo4JJ #infomoney #vale5",
    "marks": [
      {
        "word": "carteira",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "carteira",
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
    "Texto": "TOV divulga carteira focada em blue chips , veja 7 ações : Os ativos que permanecem em a carteir ... http://t.co/AMlVRW3MPQ #infomoney #vale5",
    "marks": [
      {
        "word": "carteira",
        "type": "rel"
      },
      {
        "word": "em blue chips",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "carteira",
        "subscript": "rel"
      },
      {
        "word": "chips",
        "subscript": "obl"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "em blue chips",
      "arg2": "-"
    }
  },
  {
    "Texto": "TOV divulga carteira focada em blue chips , veja 7 ações : Os ativos que permanecem em a carteir ... http://t.co/AMlVRW3MPQ #infomoney #vale5",
    "marks": [
      {
        "word": "carteira",
        "type": "rel"
      },
      {
        "word": "Os ativos",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "carteira",
        "subscript": "rel"
      },
      {
        "word": "ativos",
        "subscript": "parataxis"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "Os ativos",
      "arg2": "-"
    }
  },
  {
    "Texto": "Concórdia recomenda 15 papéis para comprar em essa semana , confira : As três carteiras de a corre ... http://t.co/0k8EGYu3PD #infomoney #vale5",
    "marks": [
      {
        "word": "carteira",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "carteira",
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
    "Texto": "Concórdia recomenda compra de 15 ações , BB e Itaú estão em a lista : As três carteiras de a corre ... http://t.co/CH4vwrl2L5 #infomoney #vale5",
    "marks": [
      {
        "word": "carteira",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "carteira",
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
    "Texto": "Concórdia recomenda 15 papéis para investir em essa semana : As três carteiras de a corretora for ... http://t.co/kH9HgEZ3qC #infomoney #vale5",
    "marks": [
      {
        "word": "carteira",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "carteira",
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
    "Texto": "3 carteiras diferentes para investir Bolsa , segundo a Concórdia : Nenhuma de as carteiras sofre ... http://t.co/D5Uo3w5vQ4 #infomoney #vale5",
    "marks": [
      {
        "word": "carteira",
        "type": "rel"
      },
      {
        "word": "diferentes",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "carteira",
        "subscript": "rel"
      },
      {
        "word": "diferentes",
        "subscript": "amod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "diferentes",
      "arg2": "-"
    }
  },
  {
    "Texto": "3 carteiras diferentes para investir Bolsa , segundo a Concórdia : Nenhuma de as carteiras sofre ... http://t.co/D5Uo3w5vQ4 #infomoney #vale5",
    "marks": [
      {
        "word": "carteira",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "carteira",
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
    "Texto": "Mas não dá para ficar sem PETR4 em a carteira , por causa de a liquidez em opções . Essas últimas altas reaqueceram violentamente o mercado .",
    "marks": [
      {
        "word": "carteira",
        "type": "rel"
      },
      {
        "word": "PETR4",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "carteira",
        "subscript": "rel"
      },
      {
        "word": "PETR4",
        "subscript": "obl"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "PETR4",
      "arg2": "-"
    }
  },
  {
    "Texto": "RT @lambari_trader : Mas não dá para ficar sem PETR4 em a carteira , por causa de a liquidez em opções . Essas últimas altas reaqueceram violentame …",
    "marks": [
      {
        "word": "carteira",
        "type": "rel"
      },
      {
        "word": "PETR4",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "carteira",
        "subscript": "rel"
      },
      {
        "word": "PETR4",
        "subscript": "obl"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "PETR4",
      "arg2": "-"
    }
  },
  {
    "Texto": "Aparentemente #LLXL3 se despede de o ibov em a proxima carteira . Aproveitem para dar tchau ! @ferrisss @dfittarelli",
    "marks": [
      {
        "word": "carteira",
        "type": "rel"
      },
      {
        "word": "#LLXL3",
        "type": "arg0"
      },
      {
        "word": "de o ibov",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "carteira",
        "subscript": "rel"
      },
      {
        "word": "LLXL3",
        "subscript": "nsubj"
      },
      {
        "word": "o",
        "subscript": "obl"
      }
    ],
    "args": {
      "arg0": "#LLXL3",
      "arg1": "de o ibov",
      "arg2": "-"
    }
  },
  {
    "Texto": "Conforme previsto por analistas , #itub4 teve lucro menor . Estou tirando esse papel de a minha carteira por não enxergar ganhos expressivos",
    "marks": [
      {
        "word": "carteira",
        "type": "rel"
      },
      {
        "word": "Estou",
        "type": "arg0"
      },
      {
        "word": "esse papel",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "carteira",
        "subscript": "rel"
      },
      {
        "word": "Estou",
        "subscript": "aux"
      },
      {
        "word": "papel",
        "subscript": "obj"
      }
    ],
    "args": {
      "arg0": "Estou",
      "arg1": "esse papel",
      "arg2": "-"
    }
  },
  {
    "Texto": "@nahasbap … e vc imagina o mané aqui , que tem só 56 % de a carteira em VALE5 ! Tô rindo de orelha a orelha , eh eh …",
    "marks": [
      {
        "word": "carteira",
        "type": "rel"
      },
      {
        "word": "o mané aqui",
        "type": "arg0"
      },
      {
        "word": "em VALE5",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "carteira",
        "subscript": "rel"
      },
      {
        "word": "aqui",
        "subscript": "advmod"
      },
      {
        "word": "VALE5",
        "subscript": "obl"
      }
    ],
    "args": {
      "arg0": "o mané aqui",
      "arg1": "em VALE5",
      "arg2": "-"
    }
  },
  {
    "Texto": "#BBSE3 preço alvo R$ 27,00 - Corretora recomenda 3 carteiras para março : arrojada , dinâmica e moderada Veja mais em : http://t.co/EjU3oD5j5Q",
    "marks": [
      {
        "word": "carteira",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "carteira",
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
    "Texto": "Concórdia recomenda 15 papéis para investir ainda em essa semana , confira : Apenas uma de as cart ... http://t.co/0AEpn96biL #infomoney #vale5",
    "marks": [
      {
        "word": "carteira",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "carteira",
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
    "Texto": "Concórdia recomenda Vale , Ambev , Gerdau e mais 13 papéis para essa semana : As três carteiras ... http://t.co/vaWwX03Urc #infomoney #vale5",
    "marks": [
      {
        "word": "carteira",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "carteira",
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
    "Texto": "Inva faz modificações em sua carteira mensal , confira : Saíram as ações de a Unicasa ( UCAS3 ) e , ... http://t.co/W7eCmN8kCD #infomoney #vale5",
    "marks": [
      {
        "word": "carteira",
        "type": "rel"
      },
      {
        "word": "Inva",
        "type": "arg0"
      }
    ],
    "subscripts": [
      {
        "word": "carteira",
        "subscript": "rel"
      },
      {
        "word": "Inva",
        "subscript": "nsubj"
      }
    ],
    "args": {
      "arg0": "Inva",
      "arg1": "-",
      "arg2": "-"
    }
  },
  {
    "Texto": "Corretora recomenda 10 ações para comprar em a semana : A carteira de a Socopa foi mantida para e ... http://t.co/Z1p25jjXp8 #infomoney #vale5",
    "marks": [
      {
        "word": "carteira",
        "type": "rel"
      },
      {
        "word": "de a Socopa",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "carteira",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de a Socopa",
      "arg2": "-"
    }
  },
  {
    "Texto": "Mudanças em a carteira de ações de a Lato Sensu . Saída de AEDU3 e BBSE3 ( por apresentarem redução em o seus valores ... http://t.co/1LVOZVEF5e",
    "marks": [
      {
        "word": "carteira",
        "type": "rel"
      },
      {
        "word": "de ações de a Lato Sensu",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "carteira",
        "subscript": "rel"
      },
      {
        "word": "ações",
        "subscript": "flat:name"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de ações de a Lato Sensu",
      "arg2": "-"
    }
  },
  {
    "Texto": "E isso em um prazo de 1 mês . Imaginem o tamanho de a força compradora ? Vale entrada pra manter em carteira em curto prazo ' CP ' . #CSNA3",
    "marks": [
      {
        "word": "carteira",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "carteira",
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
    "Texto": "Coinvalores divulga carteira com 15 ações para comprar em este mês : Em este mês , entraram os pap ... http://t.co/1PG0ZZTTFL #infomoney #vale5",
    "marks": [
      {
        "word": "carteira",
        "type": "rel"
      },
      {
        "word": "com 15 ações",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "carteira",
        "subscript": "rel"
      },
      {
        "word": "15",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "com 15 ações",
      "arg2": "-"
    }
  },
  {
    "Texto": "Ativa faz mudanças em carteira de março , veja quem saiu e quem entrou : A nova escolhida por o ... http://t.co/mEfz1RLyk9 #infomoney #vale5",
    "marks": [
      {
        "word": "carteira",
        "type": "rel"
      },
      {
        "word": "Ativa",
        "type": "arg0"
      }
    ],
    "subscripts": [
      {
        "word": "carteira",
        "subscript": "rel"
      },
      {
        "word": "Ativa",
        "subscript": "nsubj"
      }
    ],
    "args": {
      "arg0": "Ativa",
      "arg1": "-",
      "arg2": "-"
    }
  },
  {
    "Texto": "Carteira de Crédito Expandida , em março de 2014 , atingiu R$ 432,297 bilhões , evolução de 10,4 % em relação a o mesmo período de 2013 . #BBDC4",
    "marks": [
      {
        "word": "Carteira",
        "type": "rel"
      },
      {
        "word": "de Crédito Expandida",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "Carteira",
        "subscript": "rel"
      },
      {
        "word": "Crédito",
        "subscript": "amod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de Crédito Expandida",
      "arg2": "-"
    }
  },
  {
    "Texto": "A última vez que fui completamente exercido em PETR4 : novembro de 2013 , PETRK19 . Zerei a carteira e voltei em a faixa de os $ 16 .",
    "marks": [
      {
        "word": "carteira",
        "type": "rel"
      },
      {
        "word": "em a faixa de os $ 16",
        "type": "arg2"
      }
    ],
    "subscripts": [
      {
        "word": "carteira",
        "subscript": "rel"
      },
      {
        "word": "os",
        "subscript": "nummod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "-",
      "arg2": "em a faixa de os $ 16"
    }
  },
  {
    "Texto": "RT @lambari_trader : A última vez que fui completamente exercido em PETR4 : novembro de 2013 , PETRK19 . Zerei a carteira e voltei em a faixa de os …",
    "marks": [
      {
        "word": "carteira",
        "type": "rel"
      },
      {
        "word": "em a faixa de os",
        "type": "arg2"
      }
    ],
    "subscripts": [
      {
        "word": "carteira",
        "subscript": "rel"
      },
      {
        "word": "os",
        "subscript": "nmod:strunc"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "-",
      "arg2": "em a faixa de os"
    }
  },
  {
    "Texto": "Encerramos Hering ( HGTX3 ) com 4,99 % de prejuízo . O Ibov continua correção porém a carteira de o MB - EOD - 1 está ... http://t.co/tZEYyHGVe2",
    "marks": [
      {
        "word": "carteira",
        "type": "rel"
      },
      {
        "word": "de o MB - EOD",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "carteira",
        "subscript": "rel"
      },
      {
        "word": "o",
        "subscript": "flat:name"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de o MB - EOD",
      "arg2": "-"
    }
  },
  {
    "Texto": "@DuctorMarcus Em o sábado fui olhar minha carteira , por o HB BB , e constava que a Petr4 fechou a R$ 17,76 chegando até a R$ 22,00 como pode ?",
    "marks": [
      {
        "word": "carteira",
        "type": "rel"
      },
      {
        "word": "minha",
        "type": "arg0"
      },
      {
        "word": "por o HB BB",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "carteira",
        "subscript": "rel"
      },
      {
        "word": "minha",
        "subscript": "det"
      },
      {
        "word": "BB",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "minha",
      "arg1": "por o HB BB",
      "arg2": "-"
    }
  },
  {
    "Texto": "Os outros 20 % de a carteira estão em BBAS3 e BVMF3 . Também recuperaram bem ultimamente . Nada a reclamar . Parei até de malhar o PT e a Dilma !",
    "marks": [
      {
        "word": "carteira",
        "type": "rel"
      },
      {
        "word": "em BBAS3 e BVMF3",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "carteira",
        "subscript": "rel"
      },
      {
        "word": "BVMF3",
        "subscript": "root"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "em BBAS3 e BVMF3",
      "arg2": "-"
    }
  },
  {
    "Texto": "@danielschettin0 Tô com ti ... VALE5 tem um peso MONSTRUOSO em a minha carteira , por causa de a venda coberta de opções . abç !",
    "marks": [
      {
        "word": "carteira",
        "type": "rel"
      },
      {
        "word": "em a minha",
        "type": "arg0"
      },
      {
        "word": "VALE5",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "carteira",
        "subscript": "rel"
      },
      {
        "word": "minha",
        "subscript": "det"
      },
      {
        "word": "VALE5",
        "subscript": "nsubj"
      }
    ],
    "args": {
      "arg0": "em a minha",
      "arg1": "VALE5",
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