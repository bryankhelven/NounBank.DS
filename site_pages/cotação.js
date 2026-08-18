document.addEventListener('DOMContentLoaded', function() {
  const SHOWN_ARGS = ["arg0", "arg1", "arg2"];
  const data = [
  {
    "Texto": "Ação ex-dividendos hoje : CSNA3 , ITSA3 , ITSA4 , ITUB3 e ITUB4 . As cotações históricas foram ajustadas . Saiba mais ! http://t.co/C7k4DuDID2",
    "marks": [
      {
        "word": "cotação",
        "type": "rel"
      },
      {
        "word": "foram ajustadas",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "cotação",
        "subscript": "rel"
      },
      {
        "word": "ajustadas",
        "subscript": "nsubj:pass"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "foram ajustadas",
      "arg2": "-"
    }
  },
  {
    "Texto": "Ações ex-dividendos hoje : VIVT3 e VIVT4 . As cotações históricas foram ajustadas . Saiba mais ! http://t.co/C7k4DuDID2",
    "marks": [
      {
        "word": "cotação",
        "type": "rel"
      },
      {
        "word": "foram ajustadas",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "cotação",
        "subscript": "rel"
      },
      {
        "word": "ajustadas",
        "subscript": "nsubj:pass"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "foram ajustadas",
      "arg2": "-"
    }
  },
  {
    "Texto": "Ações ex-dividendos hoje : CIEL3 e TOTS3 . As cotações históricas foram ajustadas . Saiba mais ! http://t.co/C7k4DuDID2",
    "marks": [
      {
        "word": "cotação",
        "type": "rel"
      },
      {
        "word": "foram ajustadas",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "cotação",
        "subscript": "rel"
      },
      {
        "word": "ajustadas",
        "subscript": "nsubj:pass"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "foram ajustadas",
      "arg2": "-"
    }
  },
  {
    "Texto": "Ação ex-dividendos hoje : KROT3 . As cotações históricas foram ajustadas . Saiba mais ! http://t.co/C7k4DuDID2",
    "marks": [
      {
        "word": "cotação",
        "type": "rel"
      },
      {
        "word": "foram ajustadas",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "cotação",
        "subscript": "rel"
      },
      {
        "word": "ajustadas",
        "subscript": "nsubj:pass"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "foram ajustadas",
      "arg2": "-"
    }
  },
  {
    "Texto": "Ação ex-dividendos hoje : CRUZ3 . As cotações históricas foram ajustadas . Saiba mais ! http://t.co/C7k4DuDID2",
    "marks": [
      {
        "word": "cotação",
        "type": "rel"
      },
      {
        "word": "foram ajustadas",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "cotação",
        "subscript": "rel"
      },
      {
        "word": "ajustadas",
        "subscript": "nsubj:pass"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "foram ajustadas",
      "arg2": "-"
    }
  },
  {
    "Texto": "Ações ex-dividendos hoje : KLBN3 , KLBN4 e KLBN11 . As cotações históricas foram ajustadas . Saiba mais ! http://t.co/C7k4DuDID2",
    "marks": [
      {
        "word": "cotação",
        "type": "rel"
      },
      {
        "word": "foram ajustadas",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "cotação",
        "subscript": "rel"
      },
      {
        "word": "ajustadas",
        "subscript": "nsubj:pass"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "foram ajustadas",
      "arg2": "-"
    }
  },
  {
    "Texto": "Ações ex-dividendos hoje : ALPA3 , ALPA4 , LAME3 e LAME4 . As cotações históricas foram ajustadas . Saiba mais ! http://t.co/C7k4DuDID2",
    "marks": [
      {
        "word": "cotação",
        "type": "rel"
      },
      {
        "word": "foram ajustadas",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "cotação",
        "subscript": "rel"
      },
      {
        "word": "ajustadas",
        "subscript": "nsubj:pass"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "foram ajustadas",
      "arg2": "-"
    }
  },
  {
    "Texto": "Ações ex-dividendos hoje : ITUB3 , ITUB4 e SULA11 . As cotações históricas foram ajustadas . Saiba mais ! http://t.co/C7k4DuDID2",
    "marks": [
      {
        "word": "cotação",
        "type": "rel"
      },
      {
        "word": "foram ajustadas",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "cotação",
        "subscript": "rel"
      },
      {
        "word": "ajustadas",
        "subscript": "nsubj:pass"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "foram ajustadas",
      "arg2": "-"
    }
  },
  {
    "Texto": "Ações ex-dividendos hoje : ABEV3 e ODPV3 . As cotações históricas foram ajustadas . Saiba mais ! http://t.co/C7k4DuDID2",
    "marks": [
      {
        "word": "cotação",
        "type": "rel"
      },
      {
        "word": "foram ajustadas",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "cotação",
        "subscript": "rel"
      },
      {
        "word": "ajustadas",
        "subscript": "nsubj:pass"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "foram ajustadas",
      "arg2": "-"
    }
  },
  {
    "Texto": "Ações ex-dividendos hoje : BRKM3 e BRKM5 . As cotações históricas foram ajustadas . Saiba mais ! http://t.co/C7k4DuDID2",
    "marks": [
      {
        "word": "cotação",
        "type": "rel"
      },
      {
        "word": "foram ajustadas",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "cotação",
        "subscript": "rel"
      },
      {
        "word": "ajustadas",
        "subscript": "nsubj:pass"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "foram ajustadas",
      "arg2": "-"
    }
  },
  {
    "Texto": "Ações ex-dividendos hoje : ALLL3 , BEMA3 e GRND3 . As cotações históricas foram ajustadas . Saiba mais ! http://t.co/C7k4DuDID2",
    "marks": [
      {
        "word": "cotação",
        "type": "rel"
      },
      {
        "word": "foram ajustadas",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "cotação",
        "subscript": "rel"
      },
      {
        "word": "ajustadas",
        "subscript": "nsubj:pass"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "foram ajustadas",
      "arg2": "-"
    }
  },
  {
    "Texto": "Ações ex-dividendos hoje : AMAR3 e LREN3 . As cotações históricas foram ajustadas . Saiba mais ! http://t.co/C7k4DuDID2",
    "marks": [
      {
        "word": "cotação",
        "type": "rel"
      },
      {
        "word": "foram ajustadas",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "cotação",
        "subscript": "rel"
      },
      {
        "word": "ajustadas",
        "subscript": "nsubj:pass"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "foram ajustadas",
      "arg2": "-"
    }
  },
  {
    "Texto": "Ações ex-dividendos hoje : CPLE3 , CPLE6 , IGTA3 , LIGT3 e VLID3 . As cotações históricas foram ajustadas . Saiba mais ! http://t.co/C7k4DuDID2",
    "marks": [
      {
        "word": "cotação",
        "type": "rel"
      },
      {
        "word": "foram ajustadas",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "cotação",
        "subscript": "rel"
      },
      {
        "word": "ajustadas",
        "subscript": "nsubj:pass"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "foram ajustadas",
      "arg2": "-"
    }
  },
  {
    "Texto": "Ações ex-dividendos hoje : ARZZ3 , ELPL , EQTL3 , GETI , GFSA3 , IMCH3 , JSLG3 , KEPL3 , MAGG3 e MILS3 . Cotações ajustadas ! http://t.co/C7k4DuDID2",
    "marks": [
      {
        "word": "cotação",
        "type": "rel"
      },
      {
        "word": "ajustadas",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "cotação",
        "subscript": "rel"
      },
      {
        "word": "ajustadas",
        "subscript": "acl"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "ajustadas",
      "arg2": "-"
    }
  },
  {
    "Texto": "Ações ex-dividendos hoje : ABRE11 , AEDU3 , ALSC3 , BBRK3 , BRAP , CYRE3 , DASA3 , EMBR3 , FLRY3 e SEER3 . Cotações ajustadas ! http://t.co/C7k4DuDID2",
    "marks": [
      {
        "word": "cotação",
        "type": "rel"
      },
      {
        "word": "ajustadas",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "cotação",
        "subscript": "rel"
      },
      {
        "word": "ajustadas",
        "subscript": "acl"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "ajustadas",
      "arg2": "-"
    }
  },
  {
    "Texto": "Ações ex-dividendos hoje : CESP , CPFE3 , ECOR3 , ENBR3 , GRND3 , ODPV3 , SSBR3 , POSI3 e TGMA3 . As cotações foram ajustadas ! http://t.co/C7k4DuDID2",
    "marks": [
      {
        "word": "cotação",
        "type": "rel"
      },
      {
        "word": "foram ajustadas",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "cotação",
        "subscript": "rel"
      },
      {
        "word": "ajustadas",
        "subscript": "nsubj:pass"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "foram ajustadas",
      "arg2": "-"
    }
  },
  {
    "Texto": "RT @daltonvieira : Ação ex-dividendos hoje : PCAR4 . As cotações históricas foram ajustadas . Saiba mais ! http://t.co/C7k4DuDID2",
    "marks": [
      {
        "word": "cotação",
        "type": "rel"
      },
      {
        "word": "foram ajustadas",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "cotação",
        "subscript": "rel"
      },
      {
        "word": "ajustadas",
        "subscript": "nsubj:pass"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "foram ajustadas",
      "arg2": "-"
    }
  },
  {
    "Texto": "Ações ex-dividendos hoje : MRVE3 e SULA11 . As cotações históricas foram ajustadas . Saiba mais ! http://t.co/C7k4DuDID2",
    "marks": [
      {
        "word": "cotação",
        "type": "rel"
      },
      {
        "word": "foram ajustadas",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "cotação",
        "subscript": "rel"
      },
      {
        "word": "ajustadas",
        "subscript": "nsubj:pass"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "foram ajustadas",
      "arg2": "-"
    }
  },
  {
    "Texto": "Ações ex-juros hoje : BBDC3 , BBDC4 e MPLU3 . As cotações históricas foram ajustadas . Saiba mais ! http://t.co/utSF6DP4ug",
    "marks": [
      {
        "word": "cotação",
        "type": "rel"
      },
      {
        "word": "foram ajustadas",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "cotação",
        "subscript": "rel"
      },
      {
        "word": "ajustadas",
        "subscript": "nsubj:pass"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "foram ajustadas",
      "arg2": "-"
    }
  },
  {
    "Texto": "Ação ex-juros hoje : CIEL3 . As cotações históricas foram ajustadas . Saiba mais ! http://t.co/utSF6DP4ug",
    "marks": [
      {
        "word": "cotação",
        "type": "rel"
      },
      {
        "word": "foram ajustadas",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "cotação",
        "subscript": "rel"
      },
      {
        "word": "ajustadas",
        "subscript": "nsubj:pass"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "foram ajustadas",
      "arg2": "-"
    }
  },
  {
    "Texto": "Ação ex-juros hoje : LREN3 . As cotações históricas foram ajustadas . Saiba mais ! http://t.co/utSF6DP4ug",
    "marks": [
      {
        "word": "cotação",
        "type": "rel"
      },
      {
        "word": "foram ajustadas",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "cotação",
        "subscript": "rel"
      },
      {
        "word": "ajustadas",
        "subscript": "nsubj:pass"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "foram ajustadas",
      "arg2": "-"
    }
  },
  {
    "Texto": "Ação ex-juros hoje : CTIP3 . As cotações históricas foram ajustadas . Saiba mais ! http://t.co/utSF6DP4ug",
    "marks": [
      {
        "word": "cotação",
        "type": "rel"
      },
      {
        "word": "foram ajustadas",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "cotação",
        "subscript": "rel"
      },
      {
        "word": "ajustadas",
        "subscript": "nsubj:pass"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "foram ajustadas",
      "arg2": "-"
    }
  },
  {
    "Texto": "Ação ex-juros hoje : RENT3 . As cotações históricas foram ajustadas . Saiba mais ! http://t.co/utSF6DP4ug",
    "marks": [
      {
        "word": "cotação",
        "type": "rel"
      },
      {
        "word": "foram ajustadas",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "cotação",
        "subscript": "rel"
      },
      {
        "word": "ajustadas",
        "subscript": "nsubj:pass"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "foram ajustadas",
      "arg2": "-"
    }
  },
  {
    "Texto": "Ações ex-juros hoje : ODPV3 , PETR3 e PETR4 . As cotações históricas foram ajustadas . Saiba mais ! http://t.co/utSF6DP4ug",
    "marks": [
      {
        "word": "cotação",
        "type": "rel"
      },
      {
        "word": "foram ajustadas",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "cotação",
        "subscript": "rel"
      },
      {
        "word": "ajustadas",
        "subscript": "nsubj:pass"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "foram ajustadas",
      "arg2": "-"
    }
  },
  {
    "Texto": "Ações ex-juros hoje : BRAP3 e BRAP4 . As cotações históricas foram ajustadas . Saiba mais ! http://t.co/utSF6DP4ug",
    "marks": [
      {
        "word": "cotação",
        "type": "rel"
      },
      {
        "word": "foram ajustadas",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "cotação",
        "subscript": "rel"
      },
      {
        "word": "ajustadas",
        "subscript": "nsubj:pass"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "foram ajustadas",
      "arg2": "-"
    }
  },
  {
    "Texto": "Ação ex-juros hoje : BBDC3 e BBDC4 . As cotações históricas foram ajustadas . Saiba mais ! http://t.co/utSF6DP4ug",
    "marks": [
      {
        "word": "cotação",
        "type": "rel"
      },
      {
        "word": "foram ajustadas",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "cotação",
        "subscript": "rel"
      },
      {
        "word": "ajustadas",
        "subscript": "nsubj:pass"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "foram ajustadas",
      "arg2": "-"
    }
  },
  {
    "Texto": "Ações ex-bonificação hoje : ITSA3 e ITSA4 . As cotações históricas foram ajustadas . Saiba mais ! http://t.co/RR6Wuao1Kv",
    "marks": [
      {
        "word": "cotação",
        "type": "rel"
      },
      {
        "word": "foram ajustadas",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "cotação",
        "subscript": "rel"
      },
      {
        "word": "ajustadas",
        "subscript": "nsubj:pass"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "foram ajustadas",
      "arg2": "-"
    }
  },
  {
    "Texto": "Virada : BBAS3 em ponto perigoso de mudança de a cotação para baixo . IMA-crash alto . http://t.co/rowQqe82CN",
    "marks": [
      {
        "word": "cotação",
        "type": "rel"
      },
      {
        "word": "de mudança",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "cotação",
        "subscript": "rel"
      },
      {
        "word": "mudança",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de mudança",
      "arg2": "-"
    }
  },
  {
    "Texto": "volume diminuindo um pouco em a #PETR4 ... mas cotações continuam melhorando . Já disse ... agradeçam a Fator . ,)",
    "marks": [
      {
        "word": "cotação",
        "type": "rel"
      },
      {
        "word": " continuam melhorando",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "cotação",
        "subscript": "rel"
      },
      {
        "word": "melhorando",
        "subscript": "nsubj"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": " continuam melhorando",
      "arg2": "-"
    }
  },
  {
    "Texto": "ah , lembra que o volume de a #PETR4 tava caindo e caindo ? Pois então ... foi só a cotação começar a corrigir um pouco pra ele aumentar . ,)",
    "marks": [
      {
        "word": "cotação",
        "type": "rel"
      },
      {
        "word": "começar a corrigir um pouco",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "cotação",
        "subscript": "rel"
      },
      {
        "word": "pouco",
        "subscript": "nsubj"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "começar a corrigir um pouco",
      "arg2": "-"
    }
  },
  {
    "Texto": "Ações ex-dividendos hoje : GGBR3 , GGBR4 , GOAU3 , GOAU4 e MPLU3 . As cotações históricas foram ajustadas . Saiba mais ! http://t.co/C7k4DuDID2",
    "marks": [
      {
        "word": "cotação",
        "type": "rel"
      },
      {
        "word": "foram ajustadas",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "cotação",
        "subscript": "rel"
      },
      {
        "word": "ajustadas",
        "subscript": "nsubj:pass"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "foram ajustadas",
      "arg2": "-"
    }
  },
  {
    "Texto": "Ação ex-dividendos hoje : SANB11 . As cotações históricas foram ajustadas . Saiba mais ! http://t.co/C7k4DuDID2",
    "marks": [
      {
        "word": "cotação",
        "type": "rel"
      },
      {
        "word": "foram ajustadas",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "cotação",
        "subscript": "rel"
      },
      {
        "word": "ajustadas",
        "subscript": "nsubj:pass"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "foram ajustadas",
      "arg2": "-"
    }
  },
  {
    "Texto": "RT @daltonvieira : Ações ex-dividendos hoje : ARTR3 , AUTM3 , LEVE3 , HGTX3 , RDNI3 , VIVT3 e VIVT4 . Cotações históricas ajustadas . Saiba mais htt …",
    "marks": [
      {
        "word": "cotação",
        "type": "rel"
      },
      {
        "word": "ajustadas",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "cotação",
        "subscript": "rel"
      },
      {
        "word": "ajustadas",
        "subscript": "acl"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "ajustadas",
      "arg2": "-"
    }
  },
  {
    "Texto": "RT @daltonvieira : Ações ex-dividendos hoje : ARZZ3 , ELPL , EQTL3 , GETI , GFSA3 , IMCH3 , JSLG3 , KEPL3 , MAGG3 e MILS3 . Cotações ajustadas ! http:/ …",
    "marks": [
      {
        "word": "cotação",
        "type": "rel"
      },
      {
        "word": "ajustadas",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "cotação",
        "subscript": "rel"
      },
      {
        "word": "ajustadas",
        "subscript": "acl"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "ajustadas",
      "arg2": "-"
    }
  },
  {
    "Texto": "Ações ex-dividendos hoje : BBAS3 , BVMF3 e ETER3 . As cotações históricas foram ajustadas . Saiba mais ! http://t.co/C7k4DuDID2",
    "marks": [
      {
        "word": "cotação",
        "type": "rel"
      },
      {
        "word": "foram ajustadas",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "cotação",
        "subscript": "rel"
      },
      {
        "word": "ajustadas",
        "subscript": "nsubj:pass"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "foram ajustadas",
      "arg2": "-"
    }
  },
  {
    "Texto": "Ação ex-juros hoje : BBAS3 . As cotações históricas foram ajustadas . Saiba mais ! http://t.co/utSF6DP4ug",
    "marks": [
      {
        "word": "cotação",
        "type": "rel"
      },
      {
        "word": "foram ajustadas",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "cotação",
        "subscript": "rel"
      },
      {
        "word": "ajustadas",
        "subscript": "nsubj:pass"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "foram ajustadas",
      "arg2": "-"
    }
  },
  {
    "Texto": "Ações ex-juros hoje : ALPA3 , ALPA4 , CRUZ3 , POMO3 , POMO4 e RADL3 . As cotações históricas foram ajustadas . Saiba mais ! http://t.co/utSF6DP4ug",
    "marks": [
      {
        "word": "cotação",
        "type": "rel"
      },
      {
        "word": "foram ajustadas",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "cotação",
        "subscript": "rel"
      },
      {
        "word": "ajustadas",
        "subscript": "nsubj:pass"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "foram ajustadas",
      "arg2": "-"
    }
  },
  {
    "Texto": "Ação ex-juros hoje : SBSP3 . As cotações históricas foram ajustadas . Saiba mais ! http://t.co/utSF6DP4ug",
    "marks": [
      {
        "word": "cotação",
        "type": "rel"
      },
      {
        "word": "foram ajustadas",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "cotação",
        "subscript": "rel"
      },
      {
        "word": "ajustadas",
        "subscript": "nsubj:pass"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "foram ajustadas",
      "arg2": "-"
    }
  },
  {
    "Texto": "Ação ex-bonificação hoje : DTEX3 . As cotações históricas foram ajustadas . Saiba mais ! http://t.co/RR6Wuao1Kv",
    "marks": [
      {
        "word": "cotação",
        "type": "rel"
      },
      {
        "word": "foram ajustadas",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "cotação",
        "subscript": "rel"
      },
      {
        "word": "ajustadas",
        "subscript": "nsubj:pass"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "foram ajustadas",
      "arg2": "-"
    }
  },
  {
    "Texto": "Minério de ferro sobe 4 % em a China com expectativa de estímulo econômico : Cotações de a commodi ... http://t.co/gCQ5AkNoWz #infomoney #vale5",
    "marks": [
      {
        "word": "cotação",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "cotação",
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
    "Texto": "RT @clickinv_VALE5 : Minério de ferro sobe 4 % em a China com expectativa de estímulo econômico : Cotações de a commodi ... http://t.co/gCQ5AkNoWz …",
    "marks": [
      {
        "word": "cotação",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "cotação",
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
    "Texto": "Ação ex-dividendos hoje : CCRO3 . As cotações históricas foram ajustadas . Saiba mais ! http://t.co/xlwIhPylwX",
    "marks": [
      {
        "word": "cotação",
        "type": "rel"
      },
      {
        "word": "foram ajustadas",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "cotação",
        "subscript": "rel"
      },
      {
        "word": "ajustadas",
        "subscript": "nsubj:pass"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "foram ajustadas",
      "arg2": "-"
    }
  },
  {
    "Texto": "Ações ex-dividendos hoje : ALUP11 , COCE5 , PCAR4 , QGEP3 e SLCE3 . As cotações históricas foram ajustadas . Saiba mais ! http://t.co/xlwIhPylwX",
    "marks": [
      {
        "word": "cotação",
        "type": "rel"
      },
      {
        "word": "foram ajustadas",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "cotação",
        "subscript": "rel"
      },
      {
        "word": "ajustadas",
        "subscript": "nsubj:pass"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "foram ajustadas",
      "arg2": "-"
    }
  },
  {
    "Texto": "Gráfico interativo - Petrobras PN - PETR4 - Cotações Bovespa - http://t.co/ASPBmyoBSk http://t.co/VoE1ko70sQ via @sharethis",
    "marks": [
      {
        "word": "cotação",
        "type": "rel"
      },
      {
        "word": "Bovespa",
        "type": "arg0"
      }
    ],
    "subscripts": [
      {
        "word": "cotação",
        "subscript": "rel"
      },
      {
        "word": "Bovespa",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "Bovespa",
      "arg1": "-",
      "arg2": "-"
    }
  },
  {
    "Texto": "vale petr4 hrt Explode cotação ! ! !",
    "marks": [
      {
        "word": "cotação",
        "type": "rel"
      },
      {
        "word": "Explode",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "cotação",
        "subscript": "rel"
      },
      {
        "word": "Explode",
        "subscript": "nsubj"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "Explode",
      "arg2": "-"
    }
  },
  {
    "Texto": "Sinal de os tempos , hoje a PETR3 recebeu alta , saiu de a UTI e entrou em o canal de variação estatístico de suas cotações , muito bom !",
    "marks": [
      {
        "word": "cotação",
        "type": "rel"
      },
      {
        "word": "entrou em o canal de variação estatístico",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "cotação",
        "subscript": "rel"
      },
      {
        "word": "variação",
        "subscript": "nmod - obl"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "entrou em o canal de variação estatístico",
      "arg2": "-"
    }
  },
  {
    "Texto": "Petr3.SA tipo PETROBRAS ON em dezembro 28 de 2007 a cotação BOVESPA estava em minima R$ 51,08 e maxima R$ 52,23 , fonte Thomson Reuters .",
    "marks": [
      {
        "word": "cotação",
        "type": "rel"
      },
      {
        "word": "BOVESPA",
        "type": "arg0"
      }
    ],
    "subscripts": [
      {
        "word": "cotação",
        "subscript": "rel"
      },
      {
        "word": "BOVESPA",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "BOVESPA",
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