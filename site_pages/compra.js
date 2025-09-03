document.addEventListener('DOMContentLoaded', function() {
  const SHOWN_ARGS = ["arg0", "arg1", "arg2"];
  const data = [
  {
    "Texto": "$RENT3 - Localiza ( rent-nm ) - Proposta De Dividendos Para Ago / Distribuicao De Juros Cp http://t.co/bLjTH8bSid",
    "marks": [
      {
        "word": "compra",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "compra",
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
    "Texto": "E isso em um prazo de 1 mês . Imaginem o tamanho de a força compradora ? Vale entrada pra manter em carteira em curto prazo ' CP ' . #CSNA3",
    "marks": [
      {
        "word": "compra",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "compra",
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
    "Texto": "CSN vai recomprar 10 % de as ações em circulação , 70,2 milhões de ações . Ativo mira 10 em o CP a o meu ver . #CSNA3",
    "marks": [
      {
        "word": "compra",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "compra",
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
    "Texto": "Notas gerais A BRF ( BRFS3 ) concluiu e encerrou seu programa de compra de um milhão de ações de a companhia em ... http://t.co/C1gY13dUJ4",
    "marks": [
      {
        "word": "compra",
        "type": "rel"
      },
      {
        "word": "de um milhão de ações de a companhia em",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "compra",
        "subscript": "rel"
      },
      {
        "word": "um",
        "subscript": "obl:strunc"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de um milhão de ações de a companhia em",
      "arg2": "-"
    }
  },
  {
    "Texto": "RT @bovespabrokers : A Petrobras #PETR4 confirmou hoje que abriu uma comissão interna ' de alto nível ' para apurar os detalhes de a compra de a r …",
    "marks": [
      {
        "word": "compra",
        "type": "rel"
      },
      {
        "word": "de a r",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "compra",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod:wtrunc"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de a r",
      "arg2": "-"
    }
  },
  {
    "Texto": "@ppaulovagner @Fontes_ Hj a tarde recebi relatório em PDF de a corretora @Citi recomendando compra de #USIM5 , fica de olho Paulo .",
    "marks": [
      {
        "word": "compra",
        "type": "rel"
      },
      {
        "word": "de #USIM5",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "compra",
        "subscript": "rel"
      },
      {
        "word": "USIM5",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de #USIM5",
      "arg2": "-"
    }
  },
  {
    "Texto": "Usim5 de olho em a cp",
    "marks": [
      {
        "word": "compra",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "compra",
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
    "Texto": "RT @AASchwartz : @piavu e as recomendações de compra em jbss3 e mmxm3 de o @ferrisss em o início de o ano . Se ele soubesse um mín de AT não levava …",
    "marks": [
      {
        "word": "compra",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "compra",
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
    "Texto": "#ELET3 Deu compra em o MENSAL ... ( mensagem : 952244 ) http://t.co/hd86AAUwYH",
    "marks": [
      {
        "word": "compra",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "compra",
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
    "Texto": "EM TEMPO REAL : Gol dispara mais de 5 % , Usiminas sobe após mais um banco indicar compra : Acom ... http://t.co/YICDFnYOqK #infomoney #vale5",
    "marks": [
      {
        "word": "compra",
        "type": "rel"
      },
      {
        "word": "banco",
        "type": "arg0"
      },
      {
        "word": "Usiminas",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "compra",
        "subscript": "rel"
      },
      {
        "word": "banco",
        "subscript": "nsubj"
      },
      {
        "word": "Usiminas",
        "subscript": "nsubj"
      }
    ],
    "args": {
      "arg0": "banco",
      "arg1": "Usiminas",
      "arg2": "-"
    }
  },
  {
    "Texto": "#BR #BOVESPA #FIBR3 Fibria Celulose divulga fato relevante sobre plano de outorga de opção de compra de ações . http://t.co/xVMnlhrXwG",
    "marks": [
      {
        "word": "compra",
        "type": "rel"
      },
      {
        "word": "de ações",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "compra",
        "subscript": "rel"
      },
      {
        "word": "ações",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de ações",
      "arg2": "-"
    }
  },
  {
    "Texto": "Presidente de a #PETR4 dizer que compra de a refinaria de pasadena não foi um bom negócio é palhaçada . Mau negócio é ter que aturar ela .",
    "marks": [
      {
        "word": "compra",
        "type": "rel"
      },
      {
        "word": "de a refinaria",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "compra",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de a refinaria",
      "arg2": "-"
    }
  },
  {
    "Texto": "#petr4 RT Ex-presidente de a Petrobras nomeou primo para estatal em os EUA em a época de a compra de Pasadena http://t.co/0vRJaMtKH3 #mercados_IM",
    "marks": [
      {
        "word": "compra",
        "type": "rel"
      },
      {
        "word": "de Pasadena",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "compra",
        "subscript": "rel"
      },
      {
        "word": "Pasadena",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de Pasadena",
      "arg2": "-"
    }
  },
  {
    "Texto": "RT @Igorcrp : #petr4 RT Ex-presidente de a Petrobras nomeou primo para estatal em os EUA em a época de a compra de Pasadena http://t.co/0vRJaMtKH3 …",
    "marks": [
      {
        "word": "compra",
        "type": "rel"
      },
      {
        "word": "de Pasadena",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "compra",
        "subscript": "rel"
      },
      {
        "word": "Pasadena",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de Pasadena",
      "arg2": "-"
    }
  },
  {
    "Texto": "Com a decisão de o STF sobre a CPI exclusiva de a #PETROBRAS , hj é o dia ' D ' de o papel . Várias oportunidades de CP serão abertas . #PETR4",
    "marks": [
      {
        "word": "compra",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "compra",
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
    "Texto": "Foi lá agora é aguardar ! ! ! RT @Live_Trade : #vale5 26,28 o de 15 que fechar acima , cp rompimrnto",
    "marks": [
      {
        "word": "compra",
        "type": "rel"
      },
      {
        "word": "rompimento",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "compra",
        "subscript": "rel"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "rompimento",
      "arg2": "-"
    }
  },
  {
    "Texto": "@Live_Trade Marcos , o que vc acha de #FIBR3 ? vale uma entrada em a cp ?",
    "marks": [
      {
        "word": "compra",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "compra",
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
        "word": "compra",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "compra",
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
    "Texto": "@Live_Trade Marcos , o que você acha de compra em a petr4 para posição ?",
    "marks": [
      {
        "word": "compra",
        "type": "rel"
      },
      {
        "word": "em a petr4 para posição",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "compra",
        "subscript": "rel"
      },
      {
        "word": "posição",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "em a petr4 para posição",
      "arg2": "-"
    }
  },
  {
    "Texto": "Sinergias com compra de a Seara por a #JBSS3 superam estimativa inicial , diz CEO http://t.co/VOiUs0cpyx",
    "marks": [
      {
        "word": "compra",
        "type": "rel"
      },
      {
        "word": "por a #JBSS3",
        "type": "arg0"
      },
      {
        "word": "de a Seara",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "compra",
        "subscript": "rel"
      },
      {
        "word": "JBSS3",
        "subscript": "nmod"
      },
      {
        "word": "a",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "por a #JBSS3",
      "arg1": "de a Seara",
      "arg2": "-"
    }
  },
  {
    "Texto": "CCRO3 acionou a compra !",
    "marks": [
      {
        "word": "compra",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "compra",
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
    "Texto": "Único gatilho de a semana : brml3 , em a compra ! http://t.co/1zhTuobQ6D",
    "marks": [
      {
        "word": "compra",
        "type": "rel"
      },
      {
        "word": "brml3",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "compra",
        "subscript": "rel"
      },
      {
        "word": "brml3",
        "subscript": "root"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "brml3",
      "arg2": "-"
    }
  },
  {
    "Texto": "BRML3 abriu a semana acionando a compra !",
    "marks": [
      {
        "word": "compra",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "compra",
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
    "Texto": "BELISCADA ( compra ) - PETR4 http://t.co/BJGz6cISsI via @OInvestmania",
    "marks": [
      {
        "word": "compra",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "compra",
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
    "Texto": "$FIBR3 - Fibria ( fibr-nm ) - Fato Relevante - Aprovacao De Plano De Opcao De Compra http://t.co/MtFkX9xcjU",
    "marks": [
      {
        "word": "Compra",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "Compra",
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
    "Texto": "MRVE3 vender a R$ 7.86 indicado em 14/03/2014 10:14 e finalizou a compra com resultado de R$ - 0.47 ou - 5.64 % http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "compra",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "compra",
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
    "Texto": "ELPL4 vender a R$ 7.68 indicado em 14/03/2014 13:06 e finalizou a compra com resultado de R$ - 0.37 ou - 4.60 % http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "compra",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "compra",
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
    "Texto": "MRVE3 vender a R$ 7.02 indicado em 18/03/2014 15:02 e finalizou a compra com resultado de R$ - 0.10 ou - 1.40 % http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "compra",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "compra",
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
    "Texto": "MRVE3 vender a R$ 7.12 indicado em 19/03/2014 14:37 e finalizou a compra com resultado de R$ - 0.02 ou - 0.28 % http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "compra",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "compra",
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
    "Texto": "Região 24,6 a 24,65 RT @Live_Trade : Fibr3 observo p/ compra",
    "marks": [
      {
        "word": "compra",
        "type": "rel"
      },
      {
        "word": "Fibr3",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "compra",
        "subscript": "rel"
      },
      {
        "word": "Fibr3",
        "subscript": "obj"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "Fibr3",
      "arg2": "-"
    }
  },
  {
    "Texto": "RT @Live_Trade : de volta ... #petr4 chegando 13,15 , faltam 2 cents , vale5 26,2 tb interessa em a compra",
    "marks": [
      {
        "word": "compra",
        "type": "rel"
      },
      {
        "word": "vale5",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "compra",
        "subscript": "rel"
      },
      {
        "word": "vale5",
        "subscript": "nsubj"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "vale5",
      "arg2": "-"
    }
  },
  {
    "Texto": "RT @Live_Trade : #llxl3 começo a monitorarquais vrs , cp ?",
    "marks": [
      {
        "word": "compra",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "compra",
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
    "Texto": "@Live_Trade quais os objetivos de essa compra ? fiquei interessado #usim5",
    "marks": [
      {
        "word": "compra",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "compra",
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
    "Texto": "Chegando ! ! ! RT @Live_Trade : #vale5 observo para compra caso segure região 25,62",
    "marks": [
      {
        "word": "compra",
        "type": "rel"
      },
      {
        "word": "#vale5",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "compra",
        "subscript": "rel"
      },
      {
        "word": "vale5",
        "subscript": "obj"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "#vale5",
      "arg2": "-"
    }
  },
  {
    "Texto": "RT @Live_Trade : Krk siderurgia em peso aparecendo aqui p/ cp csna3 , ggbr4 , goau4 , usim5 ... reação de o setor ? vamos ver em a segunda se confirma",
    "marks": [
      {
        "word": "compra",
        "type": "rel"
      },
      {
        "word": "Krk siderurgia",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "compra",
        "subscript": "rel"
      },
      {
        "word": "siderurgia",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "Krk siderurgia",
      "arg2": "-"
    }
  },
  {
    "Texto": "Postado há 0 dias ... quem segue sabe RT @Live_Trade : #petr4 amanhã em o primeiro sinal intra entro em a compra",
    "marks": [
      {
        "word": "compra",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "compra",
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
    "Texto": "@Live_Trade deu sinal de compra aqui em o baralhada #usim5",
    "marks": [
      {
        "word": "compra",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "compra",
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
    "Texto": "#csna3 9,56 + 2,91 % ! ! ! Call de compra .",
    "marks": [
      {
        "word": "compra",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "compra",
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
    "Texto": "Gatilho position , semana que vem : Ativo ccro3 - Compra - Validade 18/abr - Start 17,76 - Stop 16,71 - RP 18,81 http://t.co/eH2Pzf26yN",
    "marks": [
      {
        "word": "Compra",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "Compra",
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
    "Texto": "Gatilho position , semana que vem : Ativo BRML3 - Compra - Validade 25/abr - Start 19,10 - Stop 18,20 - RP 20,00 http://t.co/57bZ06X9nE",
    "marks": [
      {
        "word": "Compra",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "Compra",
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
    "Texto": "A Petrobras #PETR4 confirmou hoje que abriu uma comissão interna ' de alto nível ' para apurar os detalhes de a compra de a refinaria de Pasadena .",
    "marks": [
      {
        "word": "compra",
        "type": "rel"
      },
      {
        "word": "de a refinaria de Pasadena",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "compra",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de a refinaria de Pasadena",
      "arg2": "-"
    }
  },
  {
    "Texto": "Concórdia recomenda compra de 15 ações , BB e Itaú estão em a lista : As três carteiras de a corre ... http://t.co/CH4vwrl2L5 #infomoney #vale5",
    "marks": [
      {
        "word": "compra",
        "type": "rel"
      },
      {
        "word": "de 15 ações",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "compra",
        "subscript": "rel"
      },
      {
        "word": "15",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de 15 ações",
      "arg2": "-"
    }
  },
  {
    "Texto": "#VALE5 Agora já dá para ter mais confiança em a compra , em o momento acima de o topo de ontem confirmando fundo .",
    "marks": [
      {
        "word": "compra",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "compra",
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
    "Texto": "Spread de 0,08 em a #PETR4 que bosta de mercado ! 0,51 % de variação entre a compra e a venda",
    "marks": [
      {
        "word": "compra",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "compra",
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
        "word": "compra",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "compra",
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
    "Texto": "To vendo os numeros de a compra de a refinaria por a petr4 em o JN . Nao parece muito fora . Os belgas tiveram invest. + capex. 01/02",
    "marks": [
      {
        "word": "compra",
        "type": "rel"
      },
      {
        "word": "por a petr4",
        "type": "arg0"
      },
      {
        "word": "de a refinaria",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "compra",
        "subscript": "rel"
      },
      {
        "word": "petr4",
        "subscript": "nmod"
      },
      {
        "word": "a",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "por a petr4",
      "arg1": "de a refinaria",
      "arg2": "-"
    }
  },
  {
    "Texto": "@ferrisss Epa ganhei em a Petr4 hoje duas compras uma em 15,84 venda 16,02 e outra compra 15,9 venda em o leilao .",
    "marks": [
      {
        "word": "compra",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "compra",
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
        "word": "compra",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "compra",
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
    "Texto": "Krk muito sinal de cp agora #lame4 a confirmar",
    "marks": [
      {
        "word": "compra",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "compra",
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
    "Texto": "LAME4 em o swing acima de R$ 14,85 parece dar compra ! Recompra de ações é mais um indicador ...",
    "marks": [
      {
        "word": "compra",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "compra",
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
    "Texto": "é ... lá vamos nós para a 10ª semana com IFR semanal de #PETR4 abaixo de 5 . Já pensou como fica quem diz q só por chegar em o 20 já é compra ?",
    "marks": [
      {
        "word": "compra",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "compra",
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
        "word": "compra",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "compra",
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
    "Texto": "#SANB11 - Santander Brasil assina contrato para compra de a Getnet - http://t.co/H56HB4FQ41",
    "marks": [
      {
        "word": "compra",
        "type": "rel"
      },
      {
        "word": "de a Getnet",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "compra",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de a Getnet",
      "arg2": "-"
    }
  },
  {
    "Texto": "gosta de derivativos , jovem ? olha essa opção de compra de PETR3 com vencimento em agosto",
    "marks": [
      {
        "word": "compra",
        "type": "rel"
      },
      {
        "word": "de PETR3",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "compra",
        "subscript": "rel"
      },
      {
        "word": "PETR3",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de PETR3",
      "arg2": "-"
    }
  },
  {
    "Texto": "#goau4 ganhou recomendação de compra de uma corretora e já reflete em o preço . #bbas3 disparou ontem , rompeu resistência e Mm : COMPRAR !",
    "marks": [
      {
        "word": "compra",
        "type": "rel"
      },
      {
        "word": "de uma corretora",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "compra",
        "subscript": "rel"
      },
      {
        "word": "uma",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de uma corretora",
      "arg2": "-"
    }
  },
  {
    "Texto": "hihihi #vale5 27,34 encerro operação de compra ...",
    "marks": [
      {
        "word": "compra",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "compra",
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
        "word": "compra",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "compra",
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
    "Texto": "@lambari_trader a coisa por lá ( China ) não tá boa prá #VALE5 não . Compras de pellets beeem devagar . http://t.co/LcD7KiUJHK",
    "marks": [
      {
        "word": "Compra",
        "type": "rel"
      },
      {
        "word": "de pellets",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "Compra",
        "subscript": "rel"
      },
      {
        "word": "pellets",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de pellets",
      "arg2": "-"
    }
  },
  {
    "Texto": "RT @clubedopairico : o que é mais estranho em essa puxada de hoje de a #PETR4 é ver que a corretora que lidera a compra é uma ' desconhecida ' ... …",
    "marks": [
      {
        "word": "compra",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "compra",
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
    "Texto": "A compra que fizemos em ALLL3 . Segue aberta ...",
    "marks": [
      {
        "word": "compra",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "compra",
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
    "Texto": "Exercício de opções movimenta R$ 3,8 bilhões em a Bovespa , Petrobras lidera : Opções de compra ... http://t.co/g7ghwc0Nny #infomoney #vale5",
    "marks": [
      {
        "word": "compra",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "compra",
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
    "Texto": "#ELPL4 acho que está armando um COMPRÃO como poucas vezes já visto . #deolho",
    "marks": [
      {
        "word": "compra",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "compra",
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
    "Texto": "Compra CPFE3 , PSSA3 - 14/04/2014 http://t.co/1WV5XVW7Ab",
    "marks": [
      {
        "word": "Compra",
        "type": "rel"
      },
      {
        "word": "CPFE3 , PSSA3",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "Compra",
        "subscript": "rel"
      },
      {
        "word": "PSSA3",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "CPFE3 , PSSA3",
      "arg2": "-"
    }
  },
  {
    "Texto": "Goau4 recuperou as perdas e indica entrada por as MM . Volume de compra está aumentando , porém acho que vou diminuir a exposição .",
    "marks": [
      {
        "word": "compra",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "compra",
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
    "Texto": "#petr4 se > 13,61 brinco em a compra hj novamente",
    "marks": [
      {
        "word": "compra",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "compra",
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
    "Texto": "Fibr3 observo p/ compra",
    "marks": [
      {
        "word": "compra",
        "type": "rel"
      },
      {
        "word": "Fibr3",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "compra",
        "subscript": "rel"
      },
      {
        "word": "Fibr3",
        "subscript": "obj"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "Fibr3",
      "arg2": "-"
    }
  },
  {
    "Texto": "@empiricus_ind @ferrisss Setor Carne e Derivados de a @empiricus_ind em o momento é Compra de BEEF3 , Neutro em JBSS3 e venda em MRFG3 ?",
    "marks": [
      {
        "word": "Compra",
        "type": "rel"
      },
      {
        "word": "de BEEF3",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "Compra",
        "subscript": "rel"
      },
      {
        "word": "BEEF3",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de BEEF3",
      "arg2": "-"
    }
  },
  {
    "Texto": "Ihhhh , o cara deu mesmo call de compra em PETR4 com base em o candle de ontem ? Traça o Fibonacci melhor ai amigo ... rsrs",
    "marks": [
      {
        "word": "compra",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "compra",
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
    "Texto": "#JBSS3 SOBE > Fitch disse hoje que a oferta de compra de a Hillshire Brands por a Pilgrims Pride ( PPC ) é neutra para o crédito de a JBS .",
    "marks": [
      {
        "word": "compra",
        "type": "rel"
      },
      {
        "word": "por a Pilgrims Pride",
        "type": "arg0"
      },
      {
        "word": "de a Hillshire Brands",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "compra",
        "subscript": "rel"
      },
      {
        "word": "Pride",
        "subscript": "flat:name"
      },
      {
        "word": "a",
        "subscript": "flat:name"
      }
    ],
    "args": {
      "arg0": "por a Pilgrims Pride",
      "arg1": "de a Hillshire Brands",
      "arg2": "-"
    }
  },
  {
    "Texto": "Corretora indica compra de Vale , Cielo e mais 8 ações , confira : Permanecem entre as recomend ... http://t.co/tveDkCIOc0 #infomoney #vale5",
    "marks": [
      {
        "word": "compra",
        "type": "rel"
      },
      {
        "word": "de Vale , Cielo e mais 8 ações",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "compra",
        "subscript": "rel"
      },
      {
        "word": "Vale",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de Vale , Cielo e mais 8 ações",
      "arg2": "-"
    }
  },
  {
    "Texto": "HSBC indica compra de ações de o Itaú Unibanco e mais 8 papéis : Em o lugar de as ações de a Gerdau ( ... http://t.co/5QGgAdE1ti #infomoney #vale5",
    "marks": [
      {
        "word": "compra",
        "type": "rel"
      },
      {
        "word": "de ações de o Itaú Unibanco e mais 8 papéis",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "compra",
        "subscript": "rel"
      },
      {
        "word": "ações",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de ações de o Itaú Unibanco e mais 8 papéis",
      "arg2": "-"
    }
  },
  {
    "Texto": "Concórdia indica compra de Vale , Itaú , Gerdau e mais 12 ações , veja todas : CCR , Cemig e Cyre ... http://t.co/Tuar5xqFZh #infomoney #vale5",
    "marks": [
      {
        "word": "compra",
        "type": "rel"
      },
      {
        "word": "de Vale , Itaú , Gerdau e mais 12 ações",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "compra",
        "subscript": "rel"
      },
      {
        "word": "Vale",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de Vale , Itaú , Gerdau e mais 12 ações",
      "arg2": "-"
    }
  },
  {
    "Texto": "PAX indica compra de Vale , Cielo , Gerdau e outras 7 ações : Em este mês , entraram os papéis de a ... http://t.co/ou0J9kQxK5 #infomoney #vale5",
    "marks": [
      {
        "word": "compra",
        "type": "rel"
      },
      {
        "word": "de Vale , Cielo , Gerdau e outras 7 ações",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "compra",
        "subscript": "rel"
      },
      {
        "word": "Vale",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de Vale , Cielo , Gerdau e outras 7 ações",
      "arg2": "-"
    }
  },
  {
    "Texto": "Planner indica compra de Vale , BB , Ambev e mais 7 : De essa vez , os analistas resolveram fazer ... http://t.co/wgMAbDYWKJ #infomoney #vale5",
    "marks": [
      {
        "word": "compra",
        "type": "rel"
      },
      {
        "word": "de Vale , BB , Ambev e mais 7",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "compra",
        "subscript": "rel"
      },
      {
        "word": "Vale",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de Vale , BB , Ambev e mais 7",
      "arg2": "-"
    }
  },
  {
    "Texto": "Corretora indica compra de Ambev , Vale e outras 3 ações : Apenas Ambev e Coelce foram mantida ... http://t.co/7CFhuRhcS8 #infomoney #vale5",
    "marks": [
      {
        "word": "compra",
        "type": "rel"
      },
      {
        "word": "de Ambev , Vale e outras 3 ações",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "compra",
        "subscript": "rel"
      },
      {
        "word": "Ambev",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de Ambev , Vale e outras 3 ações",
      "arg2": "-"
    }
  },
  {
    "Texto": "Vale , BRF e mais 8 ações para comprar em a semana , segundo a Socopa : A Socopa indicou compra d ... http://t.co/ko6EWq8bmj #infomoney #vale5",
    "marks": [
      {
        "word": "compra",
        "type": "rel"
      },
      {
        "word": "d",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "compra",
        "subscript": "rel"
      },
      {
        "word": "d",
        "subscript": "nmod:wtrunc"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "d",
      "arg2": "-"
    }
  },
  {
    "Texto": "As 10 melhores ações para comprar em esta semana , segundo a Socopa : A Socopa indicou compra de ... http://t.co/nRMii6Nmle #infomoney #vale5",
    "marks": [
      {
        "word": "compra",
        "type": "rel"
      },
      {
        "word": "de",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "compra",
        "subscript": "rel"
      },
      {
        "word": "de",
        "subscript": "nmod:strunc"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de",
      "arg2": "-"
    }
  },
  {
    "Texto": "não rompeu , não compro RT @Live_Trade : #vale5 26,28 o de 15 que fechar acima , cp rompimrnto",
    "marks": [
      {
        "word": "compra",
        "type": "rel"
      },
      {
        "word": "rompimento",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "compra",
        "subscript": "rel"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "rompimento",
      "arg2": "-"
    }
  },
  {
    "Texto": "Coin recomenda compra de #DTEX3 http://t.co/nrejaGxqzT",
    "marks": [
      {
        "word": "compra",
        "type": "rel"
      },
      {
        "word": "de #DTEX3",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "compra",
        "subscript": "rel"
      },
      {
        "word": "DTEX3",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de #DTEX3",
      "arg2": "-"
    }
  },
  {
    "Texto": "Compra de CRUZ3 - 16/05/2014 http://t.co/XbBQHncT14",
    "marks": [
      {
        "word": "Compra",
        "type": "rel"
      },
      {
        "word": "de CRUZ3",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "Compra",
        "subscript": "rel"
      },
      {
        "word": "CRUZ3",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de CRUZ3",
      "arg2": "-"
    }
  },
  {
    "Texto": "ALERTA ELLIOTTBRASIL => VALE5 : Duas oportunidades de compra que estão prestes a acontecer ... http://t.co/Fkwkf7jHHD",
    "marks": [
      {
        "word": "compra",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "compra",
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
    "Texto": "$BRML3 - Br Malls Par ( brml-nm ) - Aumento De Capital Atraves De o Plano De Opcao De Compra http://t.co/8dTQuP5X5T",
    "marks": [
      {
        "word": "Compra",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "Compra",
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
    "Texto": "$CTIP3 - Cetip ( ctip-nm ) - Aumento De o Capital Social Atraves De o Plano De Opcao De Compra http://t.co/fk1RgIHH78",
    "marks": [
      {
        "word": "Compra",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "Compra",
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
    "Texto": "boletando compra bbas3 . feito .",
    "marks": [
      {
        "word": "compra",
        "type": "rel"
      },
      {
        "word": "bbas3",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "compra",
        "subscript": "rel"
      },
      {
        "word": "bbas3",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "bbas3",
      "arg2": "-"
    }
  },
  {
    "Texto": "COMPRA : TAEE11 , PSSA3 , CCRO3",
    "marks": [
      {
        "word": "COMPRA",
        "type": "rel"
      },
      {
        "word": "TAEE11 , PSSA3 , CCRO3",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "COMPRA",
        "subscript": "rel"
      },
      {
        "word": "CCRO3",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "TAEE11 , PSSA3 , CCRO3",
      "arg2": "-"
    }
  },
  {
    "Texto": "Bom , o pessoal recomendando compra de petr4 sei ! ! isso ta cheirando a pesquisas novas para eleição a presidente e não deve ser favorável ...",
    "marks": [
      {
        "word": "compra",
        "type": "rel"
      },
      {
        "word": "de petr4",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "compra",
        "subscript": "rel"
      },
      {
        "word": "petr4",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de petr4",
      "arg2": "-"
    }
  },
  {
    "Texto": "@BancodoBrasil Preciso cancelar ordens de compra de ABEV3 e BRIN3 em o home broker , e por inoperância de o serviço não consigo . O que faço ?",
    "marks": [
      {
        "word": "compra",
        "type": "rel"
      },
      {
        "word": "de ABEV3 e BRIN3",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "compra",
        "subscript": "rel"
      },
      {
        "word": "ABEV3",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de ABEV3 e BRIN3",
      "arg2": "-"
    }
  },
  {
    "Texto": "Petrobras se encontra em um pontaço de compra ( graficamente ) mas não consigo comprar com essa PTralhada por lá ! #petr4 #IBOV",
    "marks": [
      {
        "word": "compra",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "compra",
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
    "Texto": "o que é mais estranho em essa puxada de hoje de a #PETR4 é ver que a corretora que lidera a compra é uma ' desconhecida ' ... Estranho ... não ?",
    "marks": [
      {
        "word": "compra",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "compra",
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
    "Texto": "É , véi ... PETR4 é COMPRA , quem diria ...",
    "marks": [
      {
        "word": "COMPRA",
        "type": "rel"
      },
      {
        "word": "PETR4 é",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "COMPRA",
        "subscript": "rel"
      },
      {
        "word": "é",
        "subscript": "discourse"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "PETR4 é",
      "arg2": "-"
    }
  },
  {
    "Texto": "ALERTA ELLIOTTBRASIL => VALE5 : Oportunidade de compra que está prestes a acontecer ... http://t.co/uVjidknruB",
    "marks": [
      {
        "word": "compra",
        "type": "rel"
      },
      {
        "word": "VALE5",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "compra",
        "subscript": "rel"
      },
      {
        "word": "VALE5",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "VALE5",
      "arg2": "-"
    }
  },
  {
    "Texto": "@ferrisss 99 % de o ibov tá abaixo de o preço , exceção é a #PETR4 que ainda tem chão p/ dar compra . Aquilo é um Titanic em a rota de o iceberg ainda .",
    "marks": [
      {
        "word": "compra",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "compra",
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
    "Texto": "Compra de #petr4 em o rompimento de os 14,2",
    "marks": [
      {
        "word": "Compra",
        "type": "rel"
      },
      {
        "word": "de #petr4",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "Compra",
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
    "Texto": "acho que o preço de compra em petr4 é 14,80",
    "marks": [
      {
        "word": "compra",
        "type": "rel"
      },
      {
        "word": "em petr4",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "compra",
        "subscript": "rel"
      },
      {
        "word": "petr4",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "em petr4",
      "arg2": "-"
    }
  },
  {
    "Texto": "Qto mais mexe , mais merda aparece #petr4 É inacreditável Dilma ter aprovado compra de Pasadena , diz Marina http://t.co/APome9qgES",
    "marks": [
      {
        "word": "compra",
        "type": "rel"
      },
      {
        "word": "de Pasadena",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "compra",
        "subscript": "rel"
      },
      {
        "word": "Pasadena",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de Pasadena",
      "arg2": "-"
    }
  },
  {
    "Texto": "Aliás , essa p* de essa Pasadena tá funcionando ? 03/02/06 #PETR4 aprova compra de refinaria EUA http://t.co/lfZWv799p0 @ivomarcelino @AryAntiPT",
    "marks": [
      {
        "word": "compra",
        "type": "rel"
      },
      {
        "word": "de refinaria EUA",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "compra",
        "subscript": "rel"
      },
      {
        "word": "refinaria",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de refinaria EUA",
      "arg2": "-"
    }
  },
  {
    "Texto": "RTRS - PARA 33,4 % , DILMA TEM RESPONSABILIDADE EM COMPRA POR A PETROBRAS PETR4.SA DE REFINARIA EM PASADENA - - CNT / MDA PETR4.SA",
    "marks": [
      {
        "word": "COMPRA",
        "type": "rel"
      },
      {
        "word": "DE REFINARIA EM PASADENA",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "COMPRA",
        "subscript": "rel"
      },
      {
        "word": "REFINARIA",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "DE REFINARIA EM PASADENA",
      "arg2": "-"
    }
  },
  {
    "Texto": "Compra de ESTC3 e CTIP3 - 20/03/2014 http://t.co/2dj6YO5X5u",
    "marks": [
      {
        "word": "Compra",
        "type": "rel"
      },
      {
        "word": "de ESTC3 e CTIP3",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "Compra",
        "subscript": "rel"
      },
      {
        "word": "ESTC3",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de ESTC3 e CTIP3",
      "arg2": "-"
    }
  },
  {
    "Texto": "Compra de GOLL4 , Venda de ENBR3 e BBRK3 - 27/05/2014 http://t.co/wNeJrN102b",
    "marks": [
      {
        "word": "Compra",
        "type": "rel"
      },
      {
        "word": "de GOLL4",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "Compra",
        "subscript": "rel"
      },
      {
        "word": "GOLL4",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de GOLL4",
      "arg2": "-"
    }
  },
  {
    "Texto": "KROT3 vender a R$ 43.33 indicado em 13/03/2014 11:22 e finalizou a compra com resultado de R$ - 0.21 ou - 0.48 % http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "compra",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "compra",
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
    "Texto": "MRVE3 vender a R$ 8.28 indicado em 13/03/2014 13:39 e finalizou a compra com resultado de R$ 0.11 ou 1.35 % http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "compra",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "compra",
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
    "Texto": "MRVE3 vender a R$ 7.99 indicado em 05/03/2014 13:29 e finalizou a compra com resultado de R$ - 0.11 ou - 1.36 % http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "compra",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "compra",
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
    "Texto": "PDGR3 vender a R$ 1.47 indicado em 05/03/2014 14:18 e finalizou a compra com resultado de R$ - 0.09 ou - 5.77 % http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "compra",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "compra",
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
    "Texto": "JBSS3 vender a R$ 7.39 indicado em 05/03/2014 14:56 e finalizou a compra com resultado de R$ - 0.30 ou - 3.90 % http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "compra",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "compra",
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
    "Texto": "ITUB4 vender a R$ 30.39 indicado em 12/03/2014 10:44 e finalizou a compra com resultado de R$ - 0.46 ou - 1.49 % http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "compra",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "compra",
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
    "Texto": "#MRFG3 - Análise #Ichimoku - Recomendação de Compra . http://t.co/TdLbYJsEds",
    "marks": [
      {
        "word": "Compra",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "Compra",
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
    "Texto": "#NATU3 - Análise #Ichimoku - Recomendação de Compra . http://t.co/cVGkA7dvAT",
    "marks": [
      {
        "word": "Compra",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "Compra",
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
    "Texto": "#UGPA3 - Recomendação de Compra - Análise #Ichimoku . http://t.co/rhIXdSFo3Q",
    "marks": [
      {
        "word": "Compra",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "Compra",
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
    "Texto": "#CRUZ3 - Análise #Ichimoku - Recomendação de Compra . http://t.co/3xVuPeOwc9",
    "marks": [
      {
        "word": "Compra",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "Compra",
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
    "Texto": "alguém recomenda a compra de ações de a gerdau ? #gerdau #ggbr4",
    "marks": [
      {
        "word": "compra",
        "type": "rel"
      },
      {
        "word": "de ações de a gerdau",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "compra",
        "subscript": "rel"
      },
      {
        "word": "ações",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de ações de a gerdau",
      "arg2": "-"
    }
  },
  {
    "Texto": "De olho em NATU3 em a compra acima de 36,91 . Analise pra decidir . http://t.co/nVJFb2xBNB",
    "marks": [
      {
        "word": "compra",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "compra",
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
    "Texto": "Fibr3 de olho p/ cp",
    "marks": [
      {
        "word": "compra",
        "type": "rel"
      },
      {
        "word": "Fibr3",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "compra",
        "subscript": "rel"
      },
      {
        "word": "Fibr3",
        "subscript": "nsubj"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "Fibr3",
      "arg2": "-"
    }
  },
  {
    "Texto": "Sanb11 de olho em a cp a confirmar",
    "marks": [
      {
        "word": "compra",
        "type": "rel"
      },
      {
        "word": "Sanb11",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "compra",
        "subscript": "rel"
      },
      {
        "word": "Sanb11",
        "subscript": "nsubj"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "Sanb11",
      "arg2": "-"
    }
  },
  {
    "Texto": "#suzb5 ainda em queda , mas esboça alta em essa manha . #ibov parece animado com efeito Lula , então parece ser hora de ir as compras",
    "marks": [
      {
        "word": "compra",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "compra",
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
    "Texto": "@piavu e as recomendações de compra em jbss3 e mmxm3 de o @ferrisss em o início de o ano . Se ele soubesse um mín de AT não levava essas cacetadas !",
    "marks": [
      {
        "word": "compra",
        "type": "rel"
      },
      {
        "word": "em jbss3",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "compra",
        "subscript": "rel"
      },
      {
        "word": "jbss3",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "em jbss3",
      "arg2": "-"
    }
  },
  {
    "Texto": "RT @ferrisss : TRADES Abertos : Compra de VALE5 - 27 VENDA de PETR : 13,9 Encerrrados : PETR - 13,45 - 13,75 . Segue o baile n concorrênci …",
    "marks": [
      {
        "word": "Compra",
        "type": "rel"
      },
      {
        "word": "de VALE5",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "Compra",
        "subscript": "rel"
      },
      {
        "word": "VALE5",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de VALE5",
      "arg2": "-"
    }
  },
  {
    "Texto": "Entramos em a compra para a posição de CSNA3 hoje a 9.60 . Estamos em o game .",
    "marks": [
      {
        "word": "compra",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "compra",
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
    "Texto": "#JBSS3 - Rússia embarga compra de carne bovina de unidade de a JBS em a Austrália - http://t.co/6YU7juePkr",
    "marks": [
      {
        "word": "compra",
        "type": "rel"
      },
      {
        "word": "de unidade de a JBS em a Austrália",
        "type": "arg0"
      },
      {
        "word": "de carne bovina",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "compra",
        "subscript": "rel"
      },
      {
        "word": "unidade",
        "subscript": "nmod"
      },
      {
        "word": "carne",
        "subscript": "amod"
      }
    ],
    "args": {
      "arg0": "de unidade de a JBS em a Austrália",
      "arg1": "de carne bovina",
      "arg2": "-"
    }
  },
  {
    "Texto": "TRADES Abertos : Compra de VALE5 - 27,00 VENDA de PETR : 13,90 Encerrrados : PETR - 13,45 - 13,75 . Segue o baile n concorrência a o vivo n twi",
    "marks": [
      {
        "word": "Compra",
        "type": "rel"
      },
      {
        "word": "de VALE5",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "Compra",
        "subscript": "rel"
      },
      {
        "word": "VALE5",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de VALE5",
      "arg2": "-"
    }
  },
  {
    "Texto": "Venda de AEDU3 e Compra de BTOW3 - 04/03/2014 http://t.co/nFNnHIyPVE",
    "marks": [
      {
        "word": "Compra",
        "type": "rel"
      },
      {
        "word": "de AEDU3",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "Compra",
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
    "Texto": "Dasa ( #DASA3 ) : Edson Bueno vai a a arbitragem contra oferta de compra de ações . http://t.co/OcNo5Tgf15 ( Valor )",
    "marks": [
      {
        "word": "compra",
        "type": "rel"
      },
      {
        "word": "de ações",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "compra",
        "subscript": "rel"
      },
      {
        "word": "ações",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de ações",
      "arg2": "-"
    }
  },
  {
    "Texto": "Flávio Conde , analista-chefe de a Gradual , recomenda a compra de ações de a MRV ( MRVE3 ) com atenção a uma possível alta em a abertura .",
    "marks": [
      {
        "word": "compra",
        "type": "rel"
      },
      {
        "word": "de ações de a MRV",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "compra",
        "subscript": "rel"
      },
      {
        "word": "ações",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de ações de a MRV",
      "arg2": "-"
    }
  },
  {
    "Texto": "BRF , Vale , Gerdau e outras 7 ações recomendadas para esta semana : A Socopa indicou compra de ... http://t.co/82c0QTrJnV #infomoney #vale5",
    "marks": [
      {
        "word": "compra",
        "type": "rel"
      },
      {
        "word": "de",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "compra",
        "subscript": "rel"
      },
      {
        "word": "de",
        "subscript": "case:strunc"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de",
      "arg2": "-"
    }
  },
  {
    "Texto": "Compra de QUAL3 , EQTL3 e BRPR3 - 26/05/2014 http://t.co/2Qqft41vuD",
    "marks": [
      {
        "word": "Compra",
        "type": "rel"
      },
      {
        "word": "de QUAL3 , EQTL3 e BRPR3",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "Compra",
        "subscript": "rel"
      },
      {
        "word": "QUAL3",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de QUAL3 , EQTL3 e BRPR3",
      "arg2": "-"
    }
  },
  {
    "Texto": "De qualquer forma tento uma compra com posição menor , stop fundo de o dia #petr4",
    "marks": [
      {
        "word": "compra",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "compra",
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
    "Texto": "Impeachment Dilma ... Essa compra de a Petr4 foi a gota de água ..",
    "marks": [
      {
        "word": "compra",
        "type": "rel"
      },
      {
        "word": "de a Petr4 foi a gota de água",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "compra",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de a Petr4 foi a gota de água",
      "arg2": "-"
    }
  },
  {
    "Texto": "Video - Análise Diária com Predador : Petr4 e IBOV sugerem topos de CP . - http://t.co/a8XnFGrywg",
    "marks": [
      {
        "word": "compra",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "compra",
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
    "Texto": "@ferrisss : sua compra dias atras de #JBSS3 fez volume > de a média ( rs ) . Vc deve ter comprado um fundo . Parabéns + 1x http://t.co/MpQ0Bh0E94",
    "marks": [
      {
        "word": "compra",
        "type": "rel"
      },
      {
        "word": "de #JBSS3 fez volume > de a média ( rs )",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "compra",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "discourse"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de #JBSS3 fez volume > de a média ( rs )",
      "arg2": "-"
    }
  },
  {
    "Texto": "live_trade Marcos , vc se manteve em a compra de a goll4 ? de um belo up side",
    "marks": [
      {
        "word": "compra",
        "type": "rel"
      },
      {
        "word": "vc",
        "type": "arg0"
      },
      {
        "word": "de a goll4",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "compra",
        "subscript": "rel"
      },
      {
        "word": "vc",
        "subscript": "nsubj"
      },
      {
        "word": "a",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "vc",
      "arg1": "de a goll4",
      "arg2": "-"
    }
  },
  {
    "Texto": "@Live_Trade Marcos , vc se manteve em a comrpa de a goll4 ? deu um belo up side ...",
    "marks": [
      {
        "word": "compra",
        "type": "rel"
      },
      {
        "word": "vc",
        "type": "arg0"
      },
      {
        "word": "de a goll4",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "compra",
        "subscript": "rel"
      },
      {
        "word": "vc",
        "subscript": "nsubj"
      },
      {
        "word": "a",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "vc",
      "arg1": "de a goll4",
      "arg2": "-"
    }
  },
  {
    "Texto": "Luz em a passatela que lá vem ela : AB InBev conclui compra de a Oriental Brewery | http://t.co/XN66BjHuYp | #adonadasloiras #nomundo #abev3",
    "marks": [
      {
        "word": "compra",
        "type": "rel"
      },
      {
        "word": "de a Oriental Brewery",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "compra",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "flat:name"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de a Oriental Brewery",
      "arg2": "-"
    }
  },
  {
    "Texto": "@plima79 BTG quase nao tem compra de a PETR4 ... saldo em 82k liquido",
    "marks": [
      {
        "word": "compra",
        "type": "rel"
      },
      {
        "word": "de a PETR4",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "compra",
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
    "Texto": "Goll4 indicou compra por a Mm , já estamos com ganhos de 1,38 hoje . Este ativo merece atenção .",
    "marks": [
      {
        "word": "compra",
        "type": "rel"
      },
      {
        "word": "por a Mm",
        "type": "arg0"
      }
    ],
    "subscripts": [
      {
        "word": "compra",
        "subscript": "rel"
      },
      {
        "word": "Mm",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "por a Mm",
      "arg1": "-",
      "arg2": "-"
    }
  },
  {
    "Texto": "CIEL3 _ Compra http://t.co/1svQUA92un",
    "marks": [
      {
        "word": "Compra",
        "type": "rel"
      },
      {
        "word": "CIEL3",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "Compra",
        "subscript": "rel"
      },
      {
        "word": "CIEL3",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "CIEL3",
      "arg2": "-"
    }
  },
  {
    "Texto": "#bvmf3 de olho em a cp",
    "marks": [
      {
        "word": "compra",
        "type": "rel"
      },
      {
        "word": "#bvmf3",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "compra",
        "subscript": "rel"
      },
      {
        "word": "bvmf3",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "#bvmf3",
      "arg2": "-"
    }
  },
  {
    "Texto": "cruz3 de olho em a co",
    "marks": [
      {
        "word": "compra",
        "type": "rel"
      },
      {
        "word": "cruz3",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "compra",
        "subscript": "rel"
      },
      {
        "word": "cruz3",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "cruz3",
      "arg2": "-"
    }
  },
  {
    "Texto": "cruz3 de olho em a cp se romper este de 15",
    "marks": [
      {
        "word": "compra",
        "type": "rel"
      },
      {
        "word": "cruz3",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "compra",
        "subscript": "rel"
      },
      {
        "word": "cruz3",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "cruz3",
      "arg2": "-"
    }
  },
  {
    "Texto": "Os mais de 1 milhão de estabelecimentos clientes de a Ambev poderão pagar suas compras através de as máquinas de o Santander . Abre o olho #CIEL3 !",
    "marks": [
      {
        "word": "compra",
        "type": "rel"
      },
      {
        "word": "suas",
        "type": "arg0"
      }
    ],
    "subscripts": [
      {
        "word": "compra",
        "subscript": "rel"
      },
      {
        "word": "suas",
        "subscript": "det"
      }
    ],
    "args": {
      "arg0": "suas",
      "arg1": "-",
      "arg2": "-"
    }
  },
  {
    "Texto": "Abrimos compra de VALE5 para o trade em o R$ 27,00 . Heyyyyyyyyyyyyy estamos em o game ! ! !",
    "marks": [
      {
        "word": "compra",
        "type": "rel"
      },
      {
        "word": "de VALE5",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "compra",
        "subscript": "rel"
      },
      {
        "word": "VALE5",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de VALE5",
      "arg2": "-"
    }
  },
  {
    "Texto": "#FLRY3 interessante compra com stop em R$ 16,35 não ? Será que vai ser vendida ? Em comparação com a #DASA3 seria perto de R$ 21 !",
    "marks": [
      {
        "word": "compra",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "compra",
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
    "Texto": "#petr4 amanhã em o primeiro sinal intra entro em a compra",
    "marks": [
      {
        "word": "compra",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "compra",
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
        "word": "compra",
        "type": "rel"
      },
      {
        "word": "#oibr3 #oibr4 #timp3",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "compra",
        "subscript": "rel"
      },
      {
        "word": "timp3",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "#oibr3 #oibr4 #timp3",
      "arg2": "-"
    }
  },
  {
    "Texto": "#vale5 observo para compra caso segure região 25,62",
    "marks": [
      {
        "word": "compra",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "compra",
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
    "Texto": "Krk siderurgia em peso aparecendo aqui p/ cp csna3 , ggbr4 , goau4 , usim5 ... reação de o setor ? vamos ver em a segunda se confirma ...",
    "marks": [
      {
        "word": "compra",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "compra",
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
    "Texto": "#JBSS3 - Cade aprova compra de a Massa Leve por a JBS sem restrições http://t.co/cbOuyZdS1W",
    "marks": [
      {
        "word": "compra",
        "type": "rel"
      },
      {
        "word": "por a JBS",
        "type": "arg0"
      },
      {
        "word": "compra de a Massa Leve",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "compra",
        "subscript": "rel"
      },
      {
        "word": "JBS",
        "subscript": "nmod"
      },
      {
        "word": "a",
        "subscript": "flat:name"
      }
    ],
    "args": {
      "arg0": "por a JBS",
      "arg1": "compra de a Massa Leve",
      "arg2": "-"
    }
  },
  {
    "Texto": "#bbas3 atenção que pode pintar um movimento relevante com extremos em 19,04 e 18,95 , o lado que virar vai dar plimplim , aposto em a compra .",
    "marks": [
      {
        "word": "compra",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "compra",
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
        "word": "compra",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "compra",
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
    "Texto": "#petr4 observo para compra se segurar região 12,94",
    "marks": [
      {
        "word": "compra",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "compra",
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
    "Texto": "ABEV3 : Oportunidade de compra ( + de 20 % de alta ) . Veja o gráfico . Por : André Mendonça , CNPI-T , MBA - ... http://t.co/4kwT5zJx2c",
    "marks": [
      {
        "word": "compra",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "compra",
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