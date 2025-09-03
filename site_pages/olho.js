document.addEventListener('DOMContentLoaded', function() {
  const SHOWN_ARGS = ["arg0", "arg1", "arg2"];
  const data = [
  {
    "Texto": "@ppaulovagner @Fontes_ Hj a tarde recebi relatório em PDF de a corretora @Citi recomendando compra de #USIM5 , fica de olho Paulo .",
    "marks": [
      {
        "word": "olho",
        "type": "rel"
      },
      {
        "word": "Paulo",
        "type": "arg0"
      }
    ],
    "subscripts": [
      {
        "word": "olho",
        "subscript": "rel"
      },
      {
        "word": "Paulo",
        "subscript": "vocative"
      }
    ],
    "args": {
      "arg0": "Paulo",
      "arg1": "-",
      "arg2": "-"
    }
  },
  {
    "Texto": "e tem início o leilão de a #PETR4 ! De olho em a abertura . =)",
    "marks": [
      {
        "word": "olho",
        "type": "rel"
      },
      {
        "word": "em a abertura",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "olho",
        "subscript": "rel"
      },
      {
        "word": "abertura",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "em a abertura",
      "arg2": "-"
    }
  },
  {
    "Texto": "De olho llxl3",
    "marks": [
      {
        "word": "olho",
        "type": "rel"
      },
      {
        "word": "llxl3",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "olho",
        "subscript": "rel"
      },
      {
        "word": "llxl3",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "llxl3",
      "arg2": "-"
    }
  },
  {
    "Texto": "Olho em a RAPT4 e QUAL3",
    "marks": [
      {
        "word": "Olho",
        "type": "rel"
      },
      {
        "word": "em a RAPT4 e QUAL3",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "Olho",
        "subscript": "rel"
      },
      {
        "word": "QUAL3",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "em a RAPT4 e QUAL3",
      "arg2": "-"
    }
  },
  {
    "Texto": "Lame4 de olho",
    "marks": [
      {
        "word": "olho",
        "type": "rel"
      },
      {
        "word": "Lame4",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "olho",
        "subscript": "rel"
      },
      {
        "word": "Lame4",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "Lame4",
      "arg2": "-"
    }
  },
  {
    "Texto": "Usim5 de olho em a cp",
    "marks": [
      {
        "word": "olho",
        "type": "rel"
      },
      {
        "word": "em a cp",
        "type": "arg1"
      },
      {
        "word": "Usim5",
        "type": "arg2"
      }
    ],
    "subscripts": [
      {
        "word": "olho",
        "subscript": "rel"
      },
      {
        "word": "cp",
        "subscript": "nmod"
      },
      {
        "word": "Usim5",
        "subscript": "nsubj"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "em a cp",
      "arg2": "Usim5"
    }
  },
  {
    "Texto": "Bom dia ! ! Continuemos de olho em itub4 , abev3 , goau4 e suzb5 que indicou shooting star . De olho em btow3 tb . Vamoooo ! !",
    "marks": [
      {
        "word": "olho",
        "type": "rel"
      },
      {
        "word": "em itub4 , abev3 , goau4 e suzb5",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "olho",
        "subscript": "rel"
      },
      {
        "word": "suzb5",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "em itub4 , abev3 , goau4 e suzb5",
      "arg2": "-"
    }
  },
  {
    "Texto": "Bom dia ! ! Continuemos de olho em itub4 , abev3 , goau4 e suzb5 que indicou shooting star . De olho em btow3 tb . Vamoooo ! !",
    "marks": [
      {
        "word": "olho",
        "type": "rel"
      },
      {
        "word": "em btow3 tb",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "olho",
        "subscript": "rel"
      },
      {
        "word": "tb",
        "subscript": "advmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "em btow3 tb",
      "arg2": "-"
    }
  },
  {
    "Texto": "Realizei lucro em a #jbss3 depois de subir 4 % . Apostando em a queda pra entrar de novo . Ficaremos de olho .",
    "marks": [
      {
        "word": "olho",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "olho",
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
    "Texto": "“ @ferrisss : VALE estaria de olho em a MMX . Aquisição faz sentido mesmo . Opa . Me serve e muito . @bovespabrokers @Smarttrade10 ” e petr4 em a ogxp3",
    "marks": [
      {
        "word": "olho",
        "type": "rel"
      },
      {
        "word": "VALE",
        "type": "arg0"
      },
      {
        "word": "em a MMX",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "olho",
        "subscript": "rel"
      },
      {
        "word": "VALE",
        "subscript": "nsubj"
      },
      {
        "word": "MMX",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "VALE",
      "arg1": "em a MMX",
      "arg2": "-"
    }
  },
  {
    "Texto": "@clubedopairico Ibovespa em as médias . Se bobear da pra brincar de urso se o mov. de a PETR4 for só uma correção . De olho ! o.O",
    "marks": [
      {
        "word": "olho",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "olho",
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
    "Texto": "Ninguém dá nada por o dia de hoje , mas estou de olho em a #PETRE18 . Mais de 100 % de alta ! #petr4",
    "marks": [
      {
        "word": "olho",
        "type": "rel"
      },
      {
        "word": "em a #PETRE18",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "olho",
        "subscript": "rel"
      },
      {
        "word": "PETRE18",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "em a #PETRE18",
      "arg2": "-"
    }
  },
  {
    "Texto": "10h42 = IBOVESPA perde 0,92 % ... Vilã de o dia : VALE3 , - 2,75 % e VALE5 , - 1,71 % , de olho em a China ...",
    "marks": [
      {
        "word": "olho",
        "type": "rel"
      },
      {
        "word": "em a China",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "olho",
        "subscript": "rel"
      },
      {
        "word": "China",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "em a China",
      "arg2": "-"
    }
  },
  {
    "Texto": "de olha em a PETR4 pra venda",
    "marks": [
      {
        "word": "olho",
        "type": "rel"
      },
      {
        "word": "em a PETR",
        "type": "arg1"
      },
      {
        "word": "pra venda",
        "type": "arg2"
      }
    ],
    "subscripts": [
      {
        "word": "olho",
        "subscript": "rel"
      },
      {
        "word": "PETR",
        "subscript": "case"
      },
      {
        "word": "venda",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "em a PETR",
      "arg2": "pra venda"
    }
  },
  {
    "Texto": "opa , #VALE5 voltando a operar abaixo de os R$ 27,7 ! De zóio galera !",
    "marks": [
      {
        "word": "olho",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "olho",
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
    "Texto": "a minha , a nossa , querida , amada , idolatrada , salve salve , #PETR4 tá perto de testar os R$ 15,7 ... DE OLHOOOOOOO ! ! !",
    "marks": [
      {
        "word": "OLHO",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "OLHO",
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
    "Texto": "#goau4 fechou bonito ontem , depois de recuperar a queda . Continuo comprado . De olho em itub e jbss3 .",
    "marks": [
      {
        "word": "olho",
        "type": "rel"
      },
      {
        "word": "em itub e jbss3",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "olho",
        "subscript": "rel"
      },
      {
        "word": "jbss3",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "em itub e jbss3",
      "arg2": "-"
    }
  },
  {
    "Texto": "#abev3 também andou recomendação e sobe forte . Continuo comprado . Vou entrar em #cemig4 por as Mm , de olho em uma resistência ~ 16.65",
    "marks": [
      {
        "word": "olho",
        "type": "rel"
      },
      {
        "word": "em uma resistência",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "olho",
        "subscript": "rel"
      },
      {
        "word": "resistência",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "em uma resistência",
      "arg2": "-"
    }
  },
  {
    "Texto": "o suporte mais próximo de a #PETR4 está em a região de os R$ 13,85 ... de olho pessoal .",
    "marks": [
      {
        "word": "olho",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "olho",
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
    "Texto": "será ? R$ 13,50 deixará a #PETR4 continuar sua caminhada de o repique ? Será ? De zóio ! ;)",
    "marks": [
      {
        "word": "olho",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "olho",
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
    "Texto": "fiquemos de olho em um possivel teste em a região de os R$ 13,3 de a #PETR4 ... pode dizer muita coisa . ,)",
    "marks": [
      {
        "word": "olho",
        "type": "rel"
      },
      {
        "word": "em um possivel teste",
        "type": "arg1"
      },
      {
        "word": "em a região de os R$ 13,3 de a #PETR",
        "type": "arg2"
      }
    ],
    "subscripts": [
      {
        "word": "olho",
        "subscript": "rel"
      },
      {
        "word": "teste",
        "subscript": "nmod"
      },
      {
        "word": "os",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "em um possivel teste",
      "arg2": "em a região de os R$ 13,3 de a #PETR"
    }
  },
  {
    "Texto": "R$ 14,7 se aproximando . De olho em a #PETR4 galera ! !",
    "marks": [
      {
        "word": "olho",
        "type": "rel"
      },
      {
        "word": "em a #PETR4",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "olho",
        "subscript": "rel"
      },
      {
        "word": "PETR4",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "em a #PETR4",
      "arg2": "-"
    }
  },
  {
    "Texto": "Tô de olho em o HB esperando o MOMENTO HISTÓRICO de PETR4 em a era PT . Falta $ 0,01 pra 13 . E 13 é … PT !",
    "marks": [
      {
        "word": "olho",
        "type": "rel"
      },
      {
        "word": "Tô",
        "type": "arg0"
      },
      {
        "word": "em o HB esperando",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "olho",
        "subscript": "rel"
      },
      {
        "word": "Tô",
        "subscript": "cop"
      },
      {
        "word": "esperando",
        "subscript": "advcl"
      }
    ],
    "args": {
      "arg0": "Tô",
      "arg1": "em o HB esperando",
      "arg2": "-"
    }
  },
  {
    "Texto": "projeção de volume para a #PETR4 tá monstruosa ! Mais de 50 milhões de ações ! o.O De olhoooo ! ! !",
    "marks": [
      {
        "word": "olho",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "olho",
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
    "Texto": "#suzb5 ta em queda brava . Não sei se é algum problema de a empresa ou especulação msm . Ficar de olho para tentar pescar uma virada",
    "marks": [
      {
        "word": "olho",
        "type": "rel"
      },
      {
        "word": "para tentar pescar uma virada",
        "type": "arg2"
      }
    ],
    "subscripts": [
      {
        "word": "olho",
        "subscript": "rel"
      },
      {
        "word": "tentar",
        "subscript": "obj"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "-",
      "arg2": "para tentar pescar uma virada"
    }
  },
  {
    "Texto": "interessante reparar que a #PETR4 repicou até a , agora , resistência de os R$ 15,7 ... De olho pra ver se respeita !",
    "marks": [
      {
        "word": "olho",
        "type": "rel"
      },
      {
        "word": "pra ver se respeita",
        "type": "arg2"
      }
    ],
    "subscripts": [
      {
        "word": "olho",
        "subscript": "rel"
      },
      {
        "word": "respeita",
        "subscript": "ccomp"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "-",
      "arg2": "pra ver se respeita"
    }
  },
  {
    "Texto": "CSN boa oportunidade com o anúncio de recompra de 70,2 milhões de ações por a empresa . Valeu ficar bem de olho . #CSNA3",
    "marks": [
      {
        "word": "olho",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "olho",
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
    "Texto": "em a #PETR4 fiquemos de olho em como ela se comporta a o enfrentar os R$ 13,5 x ... Agora a região é resistência ... =/",
    "marks": [
      {
        "word": "olho",
        "type": "rel"
      },
      {
        "word": "em como ela se comporta",
        "type": "arg1"
      },
      {
        "word": "a o enfrentar os R$ 13,5 x",
        "type": "arg2"
      }
    ],
    "subscripts": [
      {
        "word": "olho",
        "subscript": "rel"
      },
      {
        "word": "comporta",
        "subscript": "acl"
      },
      {
        "word": "x",
        "subscript": "det"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "em como ela se comporta",
      "arg2": "a o enfrentar os R$ 13,5 x"
    }
  },
  {
    "Texto": "De olho em NATU3 em a compra acima de 36,91 . Analise pra decidir . http://t.co/nVJFb2xBNB",
    "marks": [
      {
        "word": "olho",
        "type": "rel"
      },
      {
        "word": "em NATU3",
        "type": "arg1"
      },
      {
        "word": "em a compra acima de 36,91",
        "type": "arg2"
      }
    ],
    "subscripts": [
      {
        "word": "olho",
        "subscript": "rel"
      },
      {
        "word": "NATU3",
        "subscript": "nmod"
      },
      {
        "word": "36",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "em NATU3",
      "arg2": "em a compra acima de 36,91"
    }
  },
  {
    "Texto": "Para amanhã em a venda de olho em : #cyre3 #tble3 #Brkm5",
    "marks": [
      {
        "word": "olho",
        "type": "rel"
      },
      {
        "word": "em : #cyre3 #tble3 #Brkm5",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "olho",
        "subscript": "rel"
      },
      {
        "word": "Brkm5",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "em : #cyre3 #tble3 #Brkm5",
      "arg2": "-"
    }
  },
  {
    "Texto": "Fibr3 de olho p/ cp",
    "marks": [
      {
        "word": "olho",
        "type": "rel"
      },
      {
        "word": "Fibr3",
        "type": "arg1"
      },
      {
        "word": "p/ cp",
        "type": "arg2"
      }
    ],
    "subscripts": [
      {
        "word": "olho",
        "subscript": "rel"
      },
      {
        "word": "Fibr3",
        "subscript": "nsubj"
      },
      {
        "word": "cp",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "Fibr3",
      "arg2": "p/ cp"
    }
  },
  {
    "Texto": "de olho em OIBR4",
    "marks": [
      {
        "word": "olho",
        "type": "rel"
      },
      {
        "word": "em OIBR4",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "olho",
        "subscript": "rel"
      },
      {
        "word": "OIBR4",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "em OIBR4",
      "arg2": "-"
    }
  },
  {
    "Texto": "Sanb11 de olho em a cp a confirmar",
    "marks": [
      {
        "word": "olho",
        "type": "rel"
      },
      {
        "word": "Sanb11",
        "type": "arg1"
      },
      {
        "word": "em a cp",
        "type": "arg2"
      }
    ],
    "subscripts": [
      {
        "word": "olho",
        "subscript": "rel"
      },
      {
        "word": "Sanb11",
        "subscript": "nsubj"
      },
      {
        "word": "cp",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "Sanb11",
      "arg2": "em a cp"
    }
  },
  {
    "Texto": "#pdgr3 1,46 bom suporte ... de olho ...",
    "marks": [
      {
        "word": "olho",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "olho",
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
    "Texto": "SUZB5 _ De olho em a venda ... Está próximo \";)\"",
    "marks": [
      {
        "word": "olho",
        "type": "rel"
      },
      {
        "word": "SUZB5",
        "type": "arg1"
      },
      {
        "word": "em a venda",
        "type": "arg2"
      }
    ],
    "subscripts": [
      {
        "word": "olho",
        "subscript": "rel"
      },
      {
        "word": "SUZB5",
        "subscript": "nmod"
      },
      {
        "word": "venda",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "SUZB5",
      "arg2": "em a venda"
    }
  },
  {
    "Texto": "Fundo em BRKM5 ? To de olho ...",
    "marks": [
      {
        "word": "olho",
        "type": "rel"
      },
      {
        "word": "To",
        "type": "arg0"
      }
    ],
    "subscripts": [
      {
        "word": "olho",
        "subscript": "rel"
      },
      {
        "word": "To",
        "subscript": "cop"
      }
    ],
    "args": {
      "arg0": "To",
      "arg1": "-",
      "arg2": "-"
    }
  },
  {
    "Texto": "Hoje entrei em a venda com SANB11 . Estou de olho agora em BRPR3 e TIMP3 . Analisem e tirem suas conclusões .",
    "marks": [
      {
        "word": "olho",
        "type": "rel"
      },
      {
        "word": "Estou",
        "type": "arg0"
      },
      {
        "word": "em BRPR3 e TIMP3",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "olho",
        "subscript": "rel"
      },
      {
        "word": "Estou",
        "subscript": "cop"
      },
      {
        "word": "TIMP3",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "Estou",
      "arg1": "em BRPR3 e TIMP3",
      "arg2": "-"
    }
  },
  {
    "Texto": "#bvmf3 de olho em a cp",
    "marks": [
      {
        "word": "olho",
        "type": "rel"
      },
      {
        "word": "#bvmf3",
        "type": "arg1"
      },
      {
        "word": "em a cp",
        "type": "arg2"
      }
    ],
    "subscripts": [
      {
        "word": "olho",
        "subscript": "rel"
      },
      {
        "word": "bvmf3",
        "subscript": "nmod"
      },
      {
        "word": "cp",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "#bvmf3",
      "arg2": "em a cp"
    }
  },
  {
    "Texto": "#llxl3 Tô de olho",
    "marks": [
      {
        "word": "olho",
        "type": "rel"
      },
      {
        "word": "#llxl3",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "olho",
        "subscript": "rel"
      },
      {
        "word": "llxl3",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "#llxl3",
      "arg2": "-"
    }
  },
  {
    "Texto": "#GGBR4 Vale ficar de olho comparando sempre o semanal .",
    "marks": [
      {
        "word": "olho",
        "type": "rel"
      },
      {
        "word": "comparando sempre o semana",
        "type": "arg2"
      }
    ],
    "subscripts": [
      {
        "word": "olho",
        "subscript": "rel"
      },
      {
        "word": "semana",
        "subscript": "obj"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "-",
      "arg2": "comparando sempre o semana"
    }
  },
  {
    "Texto": "Ah #llxl3 só de olho ! ! !",
    "marks": [
      {
        "word": "olho",
        "type": "rel"
      },
      {
        "word": "#llxl3",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "olho",
        "subscript": "rel"
      },
      {
        "word": "llxl3",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "#llxl3",
      "arg2": "-"
    }
  },
  {
    "Texto": "SELL MRVE3 =) de olho ...",
    "marks": [
      {
        "word": "olho",
        "type": "rel"
      },
      {
        "word": "MRVE3",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "olho",
        "subscript": "rel"
      },
      {
        "word": "MRVE3",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "MRVE3",
      "arg2": "-"
    }
  },
  {
    "Texto": "Boa semana a todos ! De olho em o setup de venda em MRVE3 , muito bonita !",
    "marks": [
      {
        "word": "olho",
        "type": "rel"
      },
      {
        "word": "em o setup de venda em MRVE3",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "olho",
        "subscript": "rel"
      },
      {
        "word": "venda",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "em o setup de venda em MRVE3",
      "arg2": "-"
    }
  },
  {
    "Texto": "RT @clubedopairico : em a hora de a verdade : #PETR4 testando , agora , novamente de novo , os R$ 15,40 ! De olho e muita atenção ! !",
    "marks": [
      {
        "word": "olho",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "olho",
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
    "Texto": "Teste de os R$ 15,1 agora ! Olho em ele ! ! ! #PETR4",
    "marks": [
      {
        "word": "Olho",
        "type": "rel"
      },
      {
        "word": "em ele",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "Olho",
        "subscript": "rel"
      },
      {
        "word": "ele",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "em ele",
      "arg2": "-"
    }
  },
  {
    "Texto": "#VALE5 namorando com o fio de a navalha ! De olho em ela !",
    "marks": [
      {
        "word": "olho",
        "type": "rel"
      },
      {
        "word": "em ela",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "olho",
        "subscript": "rel"
      },
      {
        "word": "ela",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "em ela",
      "arg2": "-"
    }
  },
  {
    "Texto": "Brkm5 de olho",
    "marks": [
      {
        "word": "olho",
        "type": "rel"
      },
      {
        "word": "Brkm5",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "olho",
        "subscript": "rel"
      },
      {
        "word": "Brkm5",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "Brkm5",
      "arg2": "-"
    }
  },
  {
    "Texto": "Suzb5 de olho",
    "marks": [
      {
        "word": "olho",
        "type": "rel"
      },
      {
        "word": "Suzb5",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "olho",
        "subscript": "rel"
      },
      {
        "word": "Suzb5",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "Suzb5",
      "arg2": "-"
    }
  },
  {
    "Texto": "#rent3 e #sanb11 de olho",
    "marks": [
      {
        "word": "olho",
        "type": "rel"
      },
      {
        "word": "#rent3 e #sanb11",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "olho",
        "subscript": "rel"
      },
      {
        "word": "sanb11",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "#rent3 e #sanb11",
      "arg2": "-"
    }
  },
  {
    "Texto": "#MMXM3 de olho ... #LIGT3 perdendo R$ 19,33 pode dar venda ...",
    "marks": [
      {
        "word": "olho",
        "type": "rel"
      },
      {
        "word": "#MMXM3",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "olho",
        "subscript": "rel"
      },
      {
        "word": "MMXM3",
        "subscript": "nsubj"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "#MMXM3",
      "arg2": "-"
    }
  },
  {
    "Texto": "“ @EstadaoEconomia : Governo confirma caso ‘ atípico ’ de o mal de a vaca louca em Mato Grosso http://t.co/gNCp114vy8 ” - jbss3 , de olho amanha .",
    "marks": [
      {
        "word": "olho",
        "type": "rel"
      },
      {
        "word": "jbss3",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "olho",
        "subscript": "rel"
      },
      {
        "word": "jbss3",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "jbss3",
      "arg2": "-"
    }
  },
  {
    "Texto": "Alll3 só de olho",
    "marks": [
      {
        "word": "olho",
        "type": "rel"
      },
      {
        "word": "Alll3",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "olho",
        "subscript": "rel"
      },
      {
        "word": "Alll3",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "Alll3",
      "arg2": "-"
    }
  },
  {
    "Texto": "cruz3 de olho em a co",
    "marks": [
      {
        "word": "olho",
        "type": "rel"
      },
      {
        "word": "cruz3",
        "type": "arg1"
      },
      {
        "word": "em a co",
        "type": "arg2"
      }
    ],
    "subscripts": [
      {
        "word": "olho",
        "subscript": "rel"
      },
      {
        "word": "cruz3",
        "subscript": "nmod"
      },
      {
        "word": "co",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "cruz3",
      "arg2": "em a co"
    }
  },
  {
    "Texto": "Conforme avaliado , #itub4 estopou e ta andando de lado . Continuaremos de olho . #abev3 ta estranho , se romper suporte , vou vazar .",
    "marks": [
      {
        "word": "olho",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "olho",
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
    "Texto": "#btow3 : eita papel FEIO . #goll4 de olho em a média móvel",
    "marks": [
      {
        "word": "olho",
        "type": "rel"
      },
      {
        "word": "#goll4",
        "type": "arg1"
      },
      {
        "word": "em a média móvel",
        "type": "arg2"
      }
    ],
    "subscripts": [
      {
        "word": "olho",
        "subscript": "rel"
      },
      {
        "word": "goll4",
        "subscript": "nmod"
      },
      {
        "word": "móvel",
        "subscript": "amod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "#goll4",
      "arg2": "em a média móvel"
    }
  },
  {
    "Texto": "cruz3 de olho em a cp se romper este de 15",
    "marks": [
      {
        "word": "olho",
        "type": "rel"
      },
      {
        "word": "cruz3",
        "type": "arg1"
      },
      {
        "word": "em a cp se romper este de 15",
        "type": "arg2"
      }
    ],
    "subscripts": [
      {
        "word": "olho",
        "subscript": "rel"
      },
      {
        "word": "cruz3",
        "subscript": "nmod"
      },
      {
        "word": "15",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "cruz3",
      "arg2": "em a cp se romper este de 15"
    }
  },
  {
    "Texto": "Opa de olho usim5",
    "marks": [
      {
        "word": "olho",
        "type": "rel"
      },
      {
        "word": "usim5",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "olho",
        "subscript": "rel"
      },
      {
        "word": "usim5",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "usim5",
      "arg2": "-"
    }
  },
  {
    "Texto": "De olho em a volta de o feriado : Vale caiu mais de 2 % em a NYSE : Em esta sessão , o o mercado deve fi ... http://t.co/7ABoXOqTHu #infomoney #vale5",
    "marks": [
      {
        "word": "olho",
        "type": "rel"
      },
      {
        "word": "em a volta de o feriado",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "olho",
        "subscript": "rel"
      },
      {
        "word": "o",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "em a volta de o feriado",
      "arg2": "-"
    }
  },
  {
    "Texto": "um ingrediente importante entrou ' em jogo ' agora : aumentou o volume de a #PETR4 ! ! De olhoooo !",
    "marks": [
      {
        "word": "olho",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "olho",
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