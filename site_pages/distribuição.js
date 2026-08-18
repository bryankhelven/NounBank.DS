document.addEventListener('DOMContentLoaded', function() {
  const SHOWN_ARGS = ["arg0", "arg1", "arg2"];
  const data = [
  {
    "Texto": "$CYRE3 - Cyrela Realt ( cyre ) - Deliberacoes De a Ago/e / Distribuicao De Dividendo http://t.co/m7Rt4wHstX",
    "marks": [
      {
        "word": "distribuição",
        "type": "rel"
      },
      {
        "word": "$CYRE3 - Cyrela Realt ( cyre )",
        "type": "arg0"
      },
      {
        "word": "De Dividendo",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "distribuição",
        "subscript": "rel"
      },
      {
        "word": "cyre",
        "subscript": "nmod"
      },
      {
        "word": "Dividendo",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "$CYRE3 - Cyrela Realt ( cyre )",
      "arg1": "De Dividendo",
      "arg2": "-"
    }
  },
  {
    "Texto": "$LIGT3 - Light S/a ( ligt-nm ) - Aviso A os Acionistas / Distribuicao De Dividendo http://t.co/a8VHtsh8Xw",
    "marks": [
      {
        "word": "distribuição",
        "type": "rel"
      },
      {
        "word": "$LIGT3 - Light S/a ( ligt-nm )",
        "type": "arg0"
      },
      {
        "word": "De Dividendo",
        "type": "arg1"
      },
      {
        "word": "A os Acionistas",
        "type": "arg2"
      }
    ],
    "subscripts": [
      {
        "word": "distribuição",
        "subscript": "rel"
      },
      {
        "word": "nm",
        "subscript": "nmod"
      },
      {
        "word": "Dividendo",
        "subscript": "nmod"
      },
      {
        "word": "Acionistas",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "$LIGT3 - Light S/a ( ligt-nm )",
      "arg1": "De Dividendo",
      "arg2": "A os Acionistas"
    }
  },
  {
    "Texto": "$ALLL3 - All Amer Lat ( alll-nm ) - Ago/e - 10/04/2014 - 16h00 - Distribuicao De Dividendo http://t.co/uwgDsLkOnk",
    "marks": [
      {
        "word": "distribuição",
        "type": "rel"
      },
      {
        "word": "$ALLL3 - All Amer Lat ( alll-nm )",
        "type": "arg0"
      },
      {
        "word": "De Dividendo",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "distribuição",
        "subscript": "rel"
      },
      {
        "word": "nm",
        "subscript": "nmod"
      },
      {
        "word": "Dividendo",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "$ALLL3 - All Amer Lat ( alll-nm )",
      "arg1": "De Dividendo",
      "arg2": "-"
    }
  },
  {
    "Texto": "$DASA3 - Dasa ( dasa-nm ) Ago 28/04/2014 11h00 Distribuicao De Dividendo http://t.co/t0sVt3htz6",
    "marks": [
      {
        "word": "distribuição",
        "type": "rel"
      },
      {
        "word": "$DASA3 - Dasa ( dasa-nm )",
        "type": "arg0"
      },
      {
        "word": "De Dividendo",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "distribuição",
        "subscript": "rel"
      },
      {
        "word": "nm",
        "subscript": "nmod"
      },
      {
        "word": "Dividendo",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "$DASA3 - Dasa ( dasa-nm )",
      "arg1": "De Dividendo",
      "arg2": "-"
    }
  },
  {
    "Texto": "$DASA3 - Dasa ( dasa-nm ) - Deliberacoes De a Ago / Distribuicao De Dividendo http://t.co/9eQGNWhrwd",
    "marks": [
      {
        "word": "distribuição",
        "type": "rel"
      },
      {
        "word": "$DASA3 - Dasa ( dasa-nm )",
        "type": "arg0"
      },
      {
        "word": "De Dividendo",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "distribuição",
        "subscript": "rel"
      },
      {
        "word": "nm",
        "subscript": "nmod"
      },
      {
        "word": "Dividendo",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "$DASA3 - Dasa ( dasa-nm )",
      "arg1": "De Dividendo",
      "arg2": "-"
    }
  },
  {
    "Texto": "Navio gigante de a Vale aporta por a 1ª vez em centro de distribuição em a Malásia : Em sua viagem ... http://t.co/BH5YJv5MUg #infomoney #vale5",
    "marks": [
      {
        "word": "distribuição",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "distribuição",
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
    "Texto": "$ELET3 - Eletrobras ( elet-n1 ) - Encerramento De a Licenca De o Diretor De Distribuicao http://t.co/t0zHiXiVwN",
    "marks": [
      {
        "word": "distribuição",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "distribuição",
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
    "Texto": "$ELET3 - Eletrobras ( elet-n1 ) - Distribuicao De Juros Sobre O Capital Proprio http://t.co/tLHgq4UcIa",
    "marks": [
      {
        "word": "distribuição",
        "type": "rel"
      },
      {
        "word": "$ELET3 - Eletrobras ( elet-n1 )",
        "type": "arg0"
      },
      {
        "word": "De Juros Sobre O Capital Proprio",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "distribuição",
        "subscript": "rel"
      },
      {
        "word": "n1",
        "subscript": "nmod"
      },
      {
        "word": "Juros",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "$ELET3 - Eletrobras ( elet-n1 )",
      "arg1": "De Juros Sobre O Capital Proprio",
      "arg2": "-"
    }
  },
  {
    "Texto": "$PETR3 - Petrobras ( petr ) - Ago/e - 02/04/2014 - 15h - Distr. De Jcp / Aumento De o Capital http://t.co/vfiIT5AhIW",
    "marks": [
      {
        "word": "distribuição",
        "type": "rel"
      },
      {
        "word": "$PETR3 - Petrobras ( petr )",
        "type": "arg0"
      },
      {
        "word": "De Jcp",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "distribuição",
        "subscript": "rel"
      },
      {
        "word": "petr",
        "subscript": "nmod"
      },
      {
        "word": "Jcp",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "$PETR3 - Petrobras ( petr )",
      "arg1": "De Jcp",
      "arg2": "-"
    }
  },
  {
    "Texto": "$PETR3 - Petrobras ( petr ) - Distribuicao De Juros Sobre Capital Proprio / Valor Atualizado http://t.co/LUcMhv9FuB",
    "marks": [
      {
        "word": "distribuição",
        "type": "rel"
      },
      {
        "word": "$PETR3 - Petrobras ( petr )",
        "type": "arg0"
      },
      {
        "word": "De Juros Sobre Capital Proprio",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "distribuição",
        "subscript": "rel"
      },
      {
        "word": "petr",
        "subscript": "nmod"
      },
      {
        "word": "Juros",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "$PETR3 - Petrobras ( petr )",
      "arg1": "De Juros Sobre Capital Proprio",
      "arg2": "-"
    }
  },
  {
    "Texto": "$CRUZ3 - Souza Cruz ( cruz ) - Distribuicao De Dividendo http://t.co/sVHeWwwDEQ",
    "marks": [
      {
        "word": "distribuição",
        "type": "rel"
      },
      {
        "word": "$CRUZ3 - Souza Cruz ( cruz )",
        "type": "arg0"
      },
      {
        "word": "De Dividendo",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "distribuição",
        "subscript": "rel"
      },
      {
        "word": "cruz",
        "subscript": "nmod"
      },
      {
        "word": "Dividendo",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "$CRUZ3 - Souza Cruz ( cruz )",
      "arg1": "De Dividendo",
      "arg2": "-"
    }
  },
  {
    "Texto": "$EMBR3 - Embraer ( embr-nm ) - Distribuicao De Juros Sobre Capital Proprio http://t.co/iag5yUYxkc",
    "marks": [
      {
        "word": "distribuição",
        "type": "rel"
      },
      {
        "word": "$EMBR3 - Embraer ( embr-nm )",
        "type": "arg0"
      },
      {
        "word": "De Juros Sobre Capital Proprio",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "distribuição",
        "subscript": "rel"
      },
      {
        "word": "nm",
        "subscript": "nmod"
      },
      {
        "word": "Juros",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "$EMBR3 - Embraer ( embr-nm )",
      "arg1": "De Juros Sobre Capital Proprio",
      "arg2": "-"
    }
  },
  {
    "Texto": "$ECOR3 - Ecorodovias ( ecor-nm ) - Distribuicao De Juros Sobre Capital Proprio http://t.co/g7c3cn2A1B",
    "marks": [
      {
        "word": "distribuição",
        "type": "rel"
      },
      {
        "word": "$ECOR3 - Ecorodovias ( ecor-nm )",
        "type": "arg0"
      },
      {
        "word": "De Juros Sobre Capital Proprio",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "distribuição",
        "subscript": "rel"
      },
      {
        "word": "nm",
        "subscript": "nmod"
      },
      {
        "word": "Juros",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "$ECOR3 - Ecorodovias ( ecor-nm )",
      "arg1": "De Juros Sobre Capital Proprio",
      "arg2": "-"
    }
  },
  {
    "Texto": "$RENT3 - Localiza ( rent-nm ) - Proposta De Dividendos Para Ago / Distribuicao De Juros Cp http://t.co/bLjTH8bSid",
    "marks": [
      {
        "word": "distribuição",
        "type": "rel"
      },
      {
        "word": "$RENT3 - Localiza ( rent-nm )",
        "type": "arg0"
      },
      {
        "word": "De Juros Cp",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "distribuição",
        "subscript": "rel"
      },
      {
        "word": "nm",
        "subscript": "nmod"
      },
      {
        "word": "Juros",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "$RENT3 - Localiza ( rent-nm )",
      "arg1": "De Juros Cp",
      "arg2": "-"
    }
  },
  {
    "Texto": "$LIGT3 - Light S/a ( ligt-nm ) - Deliberacoes De Assembleias / Distribuicao De Dividendo http://t.co/IoOoCOiGT1",
    "marks": [
      {
        "word": "distribuição",
        "type": "rel"
      },
      {
        "word": "$LIGT3 - Light S/a ( ligt-nm )",
        "type": "arg0"
      },
      {
        "word": "De Dividendo",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "distribuição",
        "subscript": "rel"
      },
      {
        "word": "nm",
        "subscript": "nmod"
      },
      {
        "word": "Dividendo",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "$LIGT3 - Light S/a ( ligt-nm )",
      "arg1": "De Dividendo",
      "arg2": "-"
    }
  },
  {
    "Texto": "$ECOR3 - Ecorodovias ( ecor-nm ) Ago/e 28/04/14 10h30 Dist. De Dividendo ( complemento ) http://t.co/roZDihEpaA",
    "marks": [
      {
        "word": "distribuição",
        "type": "rel"
      },
      {
        "word": "$ECOR3 - Ecorodovias ( ecor-nm )",
        "type": "arg0"
      },
      {
        "word": "De Dividendo",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "distribuição",
        "subscript": "rel"
      },
      {
        "word": "nm",
        "subscript": "nmod"
      },
      {
        "word": "Dividendo",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "$ECOR3 - Ecorodovias ( ecor-nm )",
      "arg1": "De Dividendo",
      "arg2": "-"
    }
  },
  {
    "Texto": "$AEDU3 - Anhanguera ( aedu-nm ) - Ago - 22/04/2014 - 11h00 / Distribuicao De Dividendo http://t.co/1lJw1uN5m7",
    "marks": [
      {
        "word": "distribuição",
        "type": "rel"
      },
      {
        "word": "$AEDU3 - Anhanguera ( aedu-nm )",
        "type": "arg0"
      },
      {
        "word": "De Dividendo",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "distribuição",
        "subscript": "rel"
      },
      {
        "word": "nm",
        "subscript": "nmod"
      },
      {
        "word": "Dividendo",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "$AEDU3 - Anhanguera ( aedu-nm )",
      "arg1": "De Dividendo",
      "arg2": "-"
    }
  },
  {
    "Texto": "$AEDU3 - Anhanguera ( aedu-nm ) - Ago - 28/04/2014 - 11h00 / Distribuicao De Dividendo http://t.co/cqdsO4mZIq",
    "marks": [
      {
        "word": "distribuição",
        "type": "rel"
      },
      {
        "word": "$AEDU3 - Anhanguera ( aedu-nm )",
        "type": "arg0"
      },
      {
        "word": "De Dividendo",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "distribuição",
        "subscript": "rel"
      },
      {
        "word": "nm",
        "subscript": "nmod"
      },
      {
        "word": "Dividendo",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "$AEDU3 - Anhanguera ( aedu-nm )",
      "arg1": "De Dividendo",
      "arg2": "-"
    }
  },
  {
    "Texto": "$HGTX3 - Cia Hering ( hgtx-nm ) - Ago/e - 23/04/2014 - 15h00 / Distribuicao De Dividendo http://t.co/WcPwQGDChr",
    "marks": [
      {
        "word": "distribuição",
        "type": "rel"
      },
      {
        "word": "$HGTX3 - Cia Hering ( hgtx-nm )",
        "type": "arg0"
      },
      {
        "word": "De Dividendo",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "distribuição",
        "subscript": "rel"
      },
      {
        "word": "nm",
        "subscript": "nmod"
      },
      {
        "word": "Dividendo",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "$HGTX3 - Cia Hering ( hgtx-nm )",
      "arg1": "De Dividendo",
      "arg2": "-"
    }
  },
  {
    "Texto": "$ESTC3 - Estacio Part ( estc-nm ) Ago/e 30/04/2014 11h00 Distribuicao De Dividendo http://t.co/cuE0jepyyo",
    "marks": [
      {
        "word": "distribuição",
        "type": "rel"
      },
      {
        "word": "$ESTC3 - Estacio Part ( estc-nm )",
        "type": "arg0"
      },
      {
        "word": "De Dividendo",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "distribuição",
        "subscript": "rel"
      },
      {
        "word": "nm",
        "subscript": "nmod"
      },
      {
        "word": "Dividendo",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "$ESTC3 - Estacio Part ( estc-nm )",
      "arg1": "De Dividendo",
      "arg2": "-"
    }
  },
  {
    "Texto": "$CTIP3 - Cetip ( ctip-nm ) Ago/e 28/04/2014 10h00 Distribuicao De Dividendo http://t.co/8E9tQwMP72",
    "marks": [
      {
        "word": "distribuição",
        "type": "rel"
      },
      {
        "word": "$CTIP3 - Cetip ( ctip-nm )",
        "type": "arg0"
      },
      {
        "word": "De Dividendo",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "distribuição",
        "subscript": "rel"
      },
      {
        "word": "nm",
        "subscript": "nmod"
      },
      {
        "word": "Dividendo",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "$CTIP3 - Cetip ( ctip-nm )",
      "arg1": "De Dividendo",
      "arg2": "-"
    }
  },
  {
    "Texto": "$BRML3 - Br Malls Par ( brml-nm ) - Ago/e - 30/04/2014 - 15h00 / Distribuicao De Dividendo http://t.co/GDk4GzbOYE",
    "marks": [
      {
        "word": "distribuição",
        "type": "rel"
      },
      {
        "word": "$BRML3 - Br Malls Par ( brml-nm )",
        "type": "arg0"
      },
      {
        "word": "De Dividendo",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "distribuição",
        "subscript": "rel"
      },
      {
        "word": "nm",
        "subscript": "nmod"
      },
      {
        "word": "Dividendo",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "$BRML3 - Br Malls Par ( brml-nm )",
      "arg1": "De Dividendo",
      "arg2": "-"
    }
  },
  {
    "Texto": "$EMBR3 - Embraer ( embr-nm ) - Aviso A os Acionistas / Distribuicao De Dividendo http://t.co/oayCW0wAQx",
    "marks": [
      {
        "word": "distribuição",
        "type": "rel"
      },
      {
        "word": "$EMBR3 - Embraer ( embr-nm )",
        "type": "arg0"
      },
      {
        "word": "De Dividendo",
        "type": "arg1"
      },
      {
        "word": "A os Acionistas",
        "type": "arg2"
      }
    ],
    "subscripts": [
      {
        "word": "distribuição",
        "subscript": "rel"
      },
      {
        "word": "nm",
        "subscript": "nmod"
      },
      {
        "word": "Dividendo",
        "subscript": "nmod"
      },
      {
        "word": "Acionistas",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "$EMBR3 - Embraer ( embr-nm )",
      "arg1": "De Dividendo",
      "arg2": "A os Acionistas"
    }
  },
  {
    "Texto": "$JBSS3 - Jbs ( jbss-nm ) - Ago/e - 30/04/2014 - 10h00 - Distribuicao De Dividendos http://t.co/YcUIpaVlPw",
    "marks": [
      {
        "word": "distribuição",
        "type": "rel"
      },
      {
        "word": "$JBSS3 - Jbs ( jbss-nm )",
        "type": "arg0"
      },
      {
        "word": "De Dividendos",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "distribuição",
        "subscript": "rel"
      },
      {
        "word": "nm",
        "subscript": "nmod"
      },
      {
        "word": "Dividendos",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "$JBSS3 - Jbs ( jbss-nm )",
      "arg1": "De Dividendos",
      "arg2": "-"
    }
  },
  {
    "Texto": "$EVEN3 - Even ( even-nm ) - ago/e - 30/04/2014 - 10h E 11h ( respectivamente ) Distr. De Divindendo http://t.co/3VhamlAjCu",
    "marks": [
      {
        "word": "distribuição",
        "type": "rel"
      },
      {
        "word": "$EVEN3 - Even ( even-nm )",
        "type": "arg0"
      },
      {
        "word": "De Divindendo",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "distribuição",
        "subscript": "rel"
      },
      {
        "word": "nm",
        "subscript": "nmod"
      },
      {
        "word": "Divindendo",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "$EVEN3 - Even ( even-nm )",
      "arg1": "De Divindendo",
      "arg2": "-"
    }
  },
  {
    "Texto": "$EVEN3 - Even ( even-nm ) - ago/e - 30/04/2014 - 10h E 11h ( respectivamente ) Distr. De Dividendo http://t.co/36gmqfcQG4",
    "marks": [
      {
        "word": "distribuição",
        "type": "rel"
      },
      {
        "word": "$EVEN3 - Even ( even-nm )",
        "type": "arg0"
      },
      {
        "word": "De Dividendo",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "distribuição",
        "subscript": "rel"
      },
      {
        "word": "nm",
        "subscript": "nmod"
      },
      {
        "word": "Dividendo",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "$EVEN3 - Even ( even-nm )",
      "arg1": "De Dividendo",
      "arg2": "-"
    }
  },
  {
    "Texto": "$RENT3 - Localiza ( rent-nm ) - Distribuicao De Juros Sobre O Capital Proprio ( valor Final ) http://t.co/55QS0ImihK",
    "marks": [
      {
        "word": "distribuição",
        "type": "rel"
      },
      {
        "word": "$RENT3 - Localiza ( rent-nm )",
        "type": "arg0"
      },
      {
        "word": "De Juros Sobre O Capital Proprio",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "distribuição",
        "subscript": "rel"
      },
      {
        "word": "nm",
        "subscript": "nmod"
      },
      {
        "word": "Juros",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "$RENT3 - Localiza ( rent-nm )",
      "arg1": "De Juros Sobre O Capital Proprio",
      "arg2": "-"
    }
  },
  {
    "Texto": "#CMIG4 - Cemig vai investir R$ 3 bilhões em distribuição de energia até 2017 - http://t.co/H3Ilcyc3vd",
    "marks": [
      {
        "word": "distribuição",
        "type": "rel"
      },
      {
        "word": "de energia",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "distribuição",
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