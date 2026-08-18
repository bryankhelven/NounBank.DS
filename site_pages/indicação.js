document.addEventListener('DOMContentLoaded', function() {
  const SHOWN_ARGS = ["arg0", "arg1", "arg2"];
  const data = [
  {
    "Texto": "A última indicação de a #MRVE3 resultou em - 1.25 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      },
      {
        "word": "de a #MRVE3",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod:hashtag"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de a #MRVE3",
      "arg2": "-"
    }
  },
  {
    "Texto": "A última indicação de a #MRVE3 resultou em - 1.25 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
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
    "Texto": "A última indicação de a #RSID3 resultou em - 1.24 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      },
      {
        "word": "de a #RSID3",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod:hashtag"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de a #RSID3",
      "arg2": "-"
    }
  },
  {
    "Texto": "A última indicação de a #RSID3 resultou em - 1.24 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
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
    "Texto": "A última indicação de a #PDGR3 resultou em 11.36 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      },
      {
        "word": "de a #PDGR3",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod:hashtag"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de a #PDGR3",
      "arg2": "-"
    }
  },
  {
    "Texto": "A última indicação de a #PDGR3 resultou em 11.36 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
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
    "Texto": "A última indicação de a #MRVE3 resultou em 0.83 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      },
      {
        "word": "de a #MRVE3",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod:hashtag"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de a #MRVE3",
      "arg2": "-"
    }
  },
  {
    "Texto": "A última indicação de a #MRVE3 resultou em 0.83 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
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
    "Texto": "A última indicação de a #MRVE3 resultou em - 0.82 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      },
      {
        "word": "de a #MRVE3",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod:hashtag"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de a #MRVE3",
      "arg2": "-"
    }
  },
  {
    "Texto": "A última indicação de a #MRVE3 resultou em - 0.82 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
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
    "Texto": "A última indicação de a #ELPL4 resultou em - 0.26 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      },
      {
        "word": "de a #ELPL4",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod:hashtag"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de a #ELPL4",
      "arg2": "-"
    }
  },
  {
    "Texto": "A última indicação de a #ELPL4 resultou em - 0.26 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
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
    "Texto": "A última indicação de a #JBSS3 resultou em - 0.79 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      },
      {
        "word": "de a #JBSS3",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod:hashtag"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de a #JBSS3",
      "arg2": "-"
    }
  },
  {
    "Texto": "A última indicação de a #JBSS3 resultou em - 0.79 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
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
    "Texto": "A última indicação de a #KROT3 resultou em - 0.70 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      },
      {
        "word": "de a #KROT3",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod:hashtag"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de a #KROT3",
      "arg2": "-"
    }
  },
  {
    "Texto": "A última indicação de a #KROT3 resultou em - 0.70 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
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
    "Texto": "A última indicação de a #CSNA3 resultou em - 0.62 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      },
      {
        "word": "de a #CSNA3",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod:hashtag"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de a #CSNA3",
      "arg2": "-"
    }
  },
  {
    "Texto": "A última indicação de a #CSNA3 resultou em - 0.62 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
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
    "Texto": "A última indicação de a #OIBR4 resultou em 0.66 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      },
      {
        "word": "de a #OIBR4",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod:hashtag"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de a #OIBR4",
      "arg2": "-"
    }
  },
  {
    "Texto": "A última indicação de a #OIBR4 resultou em 0.66 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
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
    "Texto": "A última indicação de a #ITUB4 resultou em 0.60 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      },
      {
        "word": "de a #ITUB4",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod:hashtag"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de a #ITUB4",
      "arg2": "-"
    }
  },
  {
    "Texto": "A última indicação de a #ITUB4 resultou em 0.60 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
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
    "Texto": "A última indicação de a #BRKM5 resultou em - 0.49 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      },
      {
        "word": "de a #BRKM5",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod:hashtag"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de a #BRKM5",
      "arg2": "-"
    }
  },
  {
    "Texto": "A última indicação de a #BRKM5 resultou em - 0.49 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
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
    "Texto": "A última indicação de a #ITUB4 resultou em - 0.73 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      },
      {
        "word": "de a #ITUB4",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod:hashtag"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de a #ITUB4",
      "arg2": "-"
    }
  },
  {
    "Texto": "A última indicação de a #ITUB4 resultou em - 0.73 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
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
    "Texto": "A última indicação de a #RSID3 resultou em 0.62 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      },
      {
        "word": "de a #RSID3",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod:hashtag"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de a #RSID3",
      "arg2": "-"
    }
  },
  {
    "Texto": "A última indicação de a #RSID3 resultou em 0.62 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
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
    "Texto": "A última indicação de a #MRFG3 resultou em 0,44 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      },
      {
        "word": "de a #MRFG3",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod:hashtag"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de a #MRFG3",
      "arg2": "-"
    }
  },
  {
    "Texto": "A última indicação de a #MRFG3 resultou em 0,44 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
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
    "Texto": "A última indicação de a #VALE3 resultou em - 0.78 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      },
      {
        "word": "de a #VALE3",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod:hashtag"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de a #VALE3",
      "arg2": "-"
    }
  },
  {
    "Texto": "A última indicação de a #VALE3 resultou em - 0.78 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
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
    "Texto": "A última indicação de a #ITUB4 resultou em 0.14 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      },
      {
        "word": "de a #ITUB4",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod:hashtag"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de a #ITUB4",
      "arg2": "-"
    }
  },
  {
    "Texto": "A última indicação de a #ITUB4 resultou em 0.14 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
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
    "Texto": "A última indicação de a #KROT3 resultou em - 0.10 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      },
      {
        "word": "de a #KROT3",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod:hashtag"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de a #KROT3",
      "arg2": "-"
    }
  },
  {
    "Texto": "A última indicação de a #KROT3 resultou em - 0.10 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
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
    "Texto": "A última indicação de a #ITUB4 resultou em 0.84 % . Confira a nova indicação agora em http://t.co/zJRs3Eeyz9",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      },
      {
        "word": "de a #ITUB4",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod:hashtag"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de a #ITUB4",
      "arg2": "-"
    }
  },
  {
    "Texto": "A última indicação de a #ITUB4 resultou em 0.84 % . Confira a nova indicação agora em http://t.co/zJRs3Eeyz9",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
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
    "Texto": "A última indicação de a #KROT3 resultou em 0.23 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      },
      {
        "word": "de a #KROT3",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod:hashtag"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de a #KROT3",
      "arg2": "-"
    }
  },
  {
    "Texto": "A última indicação de a #KROT3 resultou em 0.23 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
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
    "Texto": "A última indicação de a #OIBR4 resultou em - 0.75 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      },
      {
        "word": "de a #OIBR4",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod:hashtag"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de a #OIBR4",
      "arg2": "-"
    }
  },
  {
    "Texto": "A última indicação de a #OIBR4 resultou em - 0.75 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
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
    "Texto": "A última indicação de a #BBAS3 resultou em 0.64 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      },
      {
        "word": "de a #BBAS3",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod:hashtag"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de a #BBAS3",
      "arg2": "-"
    }
  },
  {
    "Texto": "A última indicação de a #BBAS3 resultou em 0.64 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
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
    "Texto": "A última indicação de a #BBAS3 resultou em - 0.34 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      },
      {
        "word": "de a #BBAS3",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod:hashtag"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de a #BBAS3",
      "arg2": "-"
    }
  },
  {
    "Texto": "A última indicação de a #BBAS3 resultou em - 0.34 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
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
    "Texto": "A última indicação de a #USIM5 resultou em 0.44 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      },
      {
        "word": "de a #USIM5",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod:hashtag"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de a #USIM5",
      "arg2": "-"
    }
  },
  {
    "Texto": "A última indicação de a #USIM5 resultou em 0.44 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
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
    "Texto": "A última indicação de a #ITUB4 resultou em 6.66 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      },
      {
        "word": "de a #ITUB4",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod:hashtag"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de a #ITUB4",
      "arg2": "-"
    }
  },
  {
    "Texto": "A última indicação de a #ITUB4 resultou em 6.66 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
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
    "Texto": "A última indicação de a #BRAP4 resultou em 0.44 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      },
      {
        "word": "de a #BRAP4",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod:hashtag"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de a #BRAP4",
      "arg2": "-"
    }
  },
  {
    "Texto": "A última indicação de a #BRAP4 resultou em 0.44 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
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
    "Texto": "A última indicação de a #ELET3 resultou em 0.13 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      },
      {
        "word": "de a #ELET3",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod:hashtag"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de a #ELET3",
      "arg2": "-"
    }
  },
  {
    "Texto": "A última indicação de a #ELET3 resultou em 0.13 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
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
    "Texto": "A última indicação de a #USIM5 resultou em 0.80 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      },
      {
        "word": "de a #USIM5",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod:hashtag"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de a #USIM5",
      "arg2": "-"
    }
  },
  {
    "Texto": "A última indicação de a #USIM5 resultou em 0.80 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
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
    "Texto": "A última indicação de a #ITUB4 resultou em - 0.30 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      },
      {
        "word": "de a #ITUB4",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod:hashtag"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de a #ITUB4",
      "arg2": "-"
    }
  },
  {
    "Texto": "A última indicação de a #ITUB4 resultou em - 0.30 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
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
    "Texto": "A última indicação de a #CSNA3 resultou em - 3.93 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      },
      {
        "word": "de a #CSNA3",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod:hashtag"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de a #CSNA3",
      "arg2": "-"
    }
  },
  {
    "Texto": "A última indicação de a #CSNA3 resultou em - 3.93 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
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
    "Texto": "A última indicação de a #MRVE3 resultou em 0.25 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      },
      {
        "word": "de a #MRVE3",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod:hashtag"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de a #MRVE3",
      "arg2": "-"
    }
  },
  {
    "Texto": "A última indicação de a #MRVE3 resultou em 0.25 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
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
    "Texto": "A última indicação de a #PETR4 resultou em 15.92 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      },
      {
        "word": "de a #PETR4",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod:hashtag"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de a #PETR4",
      "arg2": "-"
    }
  },
  {
    "Texto": "A última indicação de a #PETR4 resultou em 15.92 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
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
    "Texto": "A última indicação de a #KROT3 resultou em - 1.29 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      },
      {
        "word": "de a #KROT3",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod:hashtag"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de a #KROT3",
      "arg2": "-"
    }
  },
  {
    "Texto": "A última indicação de a #KROT3 resultou em - 1.29 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
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
    "Texto": "A última indicação de a #OIBR4 resultou em 4.26 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      },
      {
        "word": "de a #OIBR4",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod:hashtag"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de a #OIBR4",
      "arg2": "-"
    }
  },
  {
    "Texto": "A última indicação de a #OIBR4 resultou em 4.26 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
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
    "Texto": "A última indicação de a #MRVE3 resultou em 1.51 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      },
      {
        "word": "de a #MRVE3",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod:hashtag"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de a #MRVE3",
      "arg2": "-"
    }
  },
  {
    "Texto": "A última indicação de a #MRVE3 resultou em 1.51 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
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
    "Texto": "A última indicação de a #KROT3 resultou em - 2.51 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      },
      {
        "word": "de a #KROT3",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod:hashtag"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de a #KROT3",
      "arg2": "-"
    }
  },
  {
    "Texto": "A última indicação de a #KROT3 resultou em - 2.51 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
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
    "Texto": "A última indicação de a #MRVE3 resultou em - 0.13 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      },
      {
        "word": "de a #MRVE3",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod:hashtag"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de a #MRVE3",
      "arg2": "-"
    }
  },
  {
    "Texto": "A última indicação de a #MRVE3 resultou em - 0.13 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
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
    "Texto": "A última indicação de a #ITUB4 resultou em 16.13 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      },
      {
        "word": "de a #ITUB4",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod:hashtag"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de a #ITUB4",
      "arg2": "-"
    }
  },
  {
    "Texto": "A última indicação de a #ITUB4 resultou em 16.13 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
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
    "Texto": "A última indicação de a #PETR4 resultou em - 3.68 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      },
      {
        "word": "de a #PETR4",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod:hashtag"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de a #PETR4",
      "arg2": "-"
    }
  },
  {
    "Texto": "A última indicação de a #PETR4 resultou em - 3.68 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
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
    "Texto": "A última indicação de a #MRVE3 resultou em 1.15 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      },
      {
        "word": "de a #MRVE3",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod:hashtag"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de a #MRVE3",
      "arg2": "-"
    }
  },
  {
    "Texto": "A última indicação de a #MRVE3 resultou em 1.15 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
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
    "Texto": "A última indicação de a #MRVE3 resultou em 0.38 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      },
      {
        "word": "de a #MRVE3",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod:hashtag"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de a #MRVE3",
      "arg2": "-"
    }
  },
  {
    "Texto": "A última indicação de a #MRVE3 resultou em 0.38 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
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
    "Texto": "A última indicação de a #BBAS3 resultou em 23.99 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      },
      {
        "word": "de a #BBAS3",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod:hashtag"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de a #BBAS3",
      "arg2": "-"
    }
  },
  {
    "Texto": "A última indicação de a #BBAS3 resultou em 23.99 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
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
    "Texto": "A última indicação de a #CSNA3 resultou em - 2.52 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      },
      {
        "word": "de a #CSNA3",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod:hashtag"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de a #CSNA3",
      "arg2": "-"
    }
  },
  {
    "Texto": "A última indicação de a #CSNA3 resultou em - 2.52 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
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
    "Texto": "A última indicação de a #ELPL4 resultou em 11.43 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      },
      {
        "word": "de a #ELPL4",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod:hashtag"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de a #ELPL4",
      "arg2": "-"
    }
  },
  {
    "Texto": "A última indicação de a #ELPL4 resultou em 11.43 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
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
    "Texto": "A última indicação de a #PETR3 resultou em 17.75 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      },
      {
        "word": "de a #PETR3",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod:hashtag"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de a #PETR3",
      "arg2": "-"
    }
  },
  {
    "Texto": "A última indicação de a #PETR3 resultou em 17.75 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
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
    "Texto": "A última indicação de a #ELET3 resultou em 39.55 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      },
      {
        "word": "de a #ELET3",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod:hashtag"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de a #ELET3",
      "arg2": "-"
    }
  },
  {
    "Texto": "A última indicação de a #ELET3 resultou em 39.55 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
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
    "Texto": "A última indicação de a #VALE3 resultou em 9.95 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      },
      {
        "word": "de a #VALE3",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod:hashtag"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de a #VALE3",
      "arg2": "-"
    }
  },
  {
    "Texto": "A última indicação de a #VALE3 resultou em 9.95 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
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
    "Texto": "A última indicação de a #OIBR4 resultou em 3.93 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      },
      {
        "word": "de a #OIBR4",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod:hashtag"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de a #OIBR4",
      "arg2": "-"
    }
  },
  {
    "Texto": "A última indicação de a #OIBR4 resultou em 3.93 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
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
    "Texto": "A última indicação de a #ITUB4 resultou em 1.86 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      },
      {
        "word": "de a #ITUB4",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod:hashtag"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de a #ITUB4",
      "arg2": "-"
    }
  },
  {
    "Texto": "A última indicação de a #ITUB4 resultou em 1.86 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
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
    "Texto": "A última indicação de a #GOLL4 resultou em 16.58 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      },
      {
        "word": "de a #GOLL4",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod:hashtag"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de a #GOLL4",
      "arg2": "-"
    }
  },
  {
    "Texto": "A última indicação de a #GOLL4 resultou em 16.58 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
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
    "Texto": "A última indicação de a #MRVE3 resultou em 4.51 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      },
      {
        "word": "de a #MRVE3",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod:hashtag"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de a #MRVE3",
      "arg2": "-"
    }
  },
  {
    "Texto": "A última indicação de a #MRVE3 resultou em 4.51 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
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
    "Texto": "A última indicação de a #ITUB4 resultou em - 1.30 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      },
      {
        "word": "de a #ITUB4",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod:hashtag"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de a #ITUB4",
      "arg2": "-"
    }
  },
  {
    "Texto": "A última indicação de a #ITUB4 resultou em - 1.30 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
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
    "Texto": "A última indicação de a #PDGR3 resultou em 14.07 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      },
      {
        "word": "de a #PDGR3",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod:hashtag"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de a #PDGR3",
      "arg2": "-"
    }
  },
  {
    "Texto": "A última indicação de a #PDGR3 resultou em 14.07 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
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
    "Texto": "A última indicação de a #MRVE3 resultou em - 1.59 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      },
      {
        "word": "de a #MRVE3",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod:hashtag"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de a #MRVE3",
      "arg2": "-"
    }
  },
  {
    "Texto": "A última indicação de a #MRVE3 resultou em - 1.59 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
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
    "Texto": "A última indicação de a #ELPL4 resultou em - 1.00 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      },
      {
        "word": "de a #ELPL4",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod:hashtag"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de a #ELPL4",
      "arg2": "-"
    }
  },
  {
    "Texto": "A última indicação de a #ELPL4 resultou em - 1.00 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
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
    "Texto": "A última indicação de a #MRVE3 resultou em - 0.94 % . Confira a nova indicação agora em http://t.co/zJRs3Eeyz9",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      },
      {
        "word": "de a #MRVE3",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod:hashtag"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de a #MRVE3",
      "arg2": "-"
    }
  },
  {
    "Texto": "A última indicação de a #MRVE3 resultou em - 0.94 % . Confira a nova indicação agora em http://t.co/zJRs3Eeyz9",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
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
    "Texto": "A última indicação de a #ELET3 resultou em - 3.64 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      },
      {
        "word": "de a #ELET3",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod:hashtag"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de a #ELET3",
      "arg2": "-"
    }
  },
  {
    "Texto": "A última indicação de a #ELET3 resultou em - 3.64 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
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
    "Texto": "A última indicação de a #VALE3 resultou em - 4.43 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      },
      {
        "word": "de a #VALE3",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod:hashtag"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de a #VALE3",
      "arg2": "-"
    }
  },
  {
    "Texto": "A última indicação de a #VALE3 resultou em - 4.43 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
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
    "Texto": "A última indicação de a #GFSA3 resultou em 13.84 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      },
      {
        "word": "de a #GFSA3",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod:hashtag"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de a #GFSA3",
      "arg2": "-"
    }
  },
  {
    "Texto": "A última indicação de a #GFSA3 resultou em 13.84 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
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
    "Texto": "A última indicação de a #MRFG3 resultou em - 2.44 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      },
      {
        "word": "de a #MRFG3",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod:hashtag"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de a #MRFG3",
      "arg2": "-"
    }
  },
  {
    "Texto": "A última indicação de a #MRFG3 resultou em - 2.44 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
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
    "Texto": "A última indicação de a #GOLL4 resultou em - 4.81 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      },
      {
        "word": "de a #GOLL4",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod:hashtag"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de a #GOLL4",
      "arg2": "-"
    }
  },
  {
    "Texto": "A última indicação de a #GOLL4 resultou em - 4.81 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
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
    "Texto": "A última indicação de a #BRAP4 resultou em 6.46 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      },
      {
        "word": "de a #BRAP4",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod:hashtag"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de a #BRAP4",
      "arg2": "-"
    }
  },
  {
    "Texto": "A última indicação de a #BRAP4 resultou em 6.46 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
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
    "Texto": "A última indicação de a #ELPL4 resultou em - 2.12 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      },
      {
        "word": "de a #ELPL4",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod:hashtag"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de a #ELPL4",
      "arg2": "-"
    }
  },
  {
    "Texto": "A última indicação de a #ELPL4 resultou em - 2.12 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
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
    "Texto": "A última indicação de a #JBSS3 resultou em - 2.40 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      },
      {
        "word": "de a #JBSS3",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod:hashtag"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de a #JBSS3",
      "arg2": "-"
    }
  },
  {
    "Texto": "A última indicação de a #JBSS3 resultou em - 2.40 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
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
    "Texto": "A última indicação de a #MRVE3 resultou em 0.54 % . Confira a nova indicação agora em http://t.co/zJRs3Eeyz9",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      },
      {
        "word": "de a #MRVE3",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod:hashtag"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de a #MRVE3",
      "arg2": "-"
    }
  },
  {
    "Texto": "A última indicação de a #MRVE3 resultou em 0.54 % . Confira a nova indicação agora em http://t.co/zJRs3Eeyz9",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
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
    "Texto": "A última indicação de a #ELPL4 resultou em - 1.46 % . Confira a nova indicação agora em http://t.co/zJRs3Eeyz9",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      },
      {
        "word": "de a #ELPL4",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod:hashtag"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de a #ELPL4",
      "arg2": "-"
    }
  },
  {
    "Texto": "A última indicação de a #ELPL4 resultou em - 1.46 % . Confira a nova indicação agora em http://t.co/zJRs3Eeyz9",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
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
    "Texto": "A última indicação de a #GFSA3 resultou em - 1.90 % . Confira a nova indicação agora em http://t.co/zJRs3Eeyz9",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      },
      {
        "word": "de a #GFSA3",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod:hashtag"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de a #GFSA3",
      "arg2": "-"
    }
  },
  {
    "Texto": "A última indicação de a #GFSA3 resultou em - 1.90 % . Confira a nova indicação agora em http://t.co/zJRs3Eeyz9",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
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
    "Texto": "A última indicação de a #BRAP4 resultou em - 3.74 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      },
      {
        "word": "de a #BRAP4",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod:hashtag"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de a #BRAP4",
      "arg2": "-"
    }
  },
  {
    "Texto": "A última indicação de a #BRAP4 resultou em - 3.74 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
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
    "Texto": "A última indicação de a #BBAS3 resultou em 2.34 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      },
      {
        "word": "de a #BBAS3",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod:hashtag"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de a #BBAS3",
      "arg2": "-"
    }
  },
  {
    "Texto": "A última indicação de a #BBAS3 resultou em 2.34 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
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
    "Texto": "A última indicação de a #USIM5 resultou em 3.43 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      },
      {
        "word": "de a #USIM5",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod:hashtag"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de a #USIM5",
      "arg2": "-"
    }
  },
  {
    "Texto": "A última indicação de a #USIM5 resultou em 3.43 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
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
    "Texto": "A última indicação de a #PETR4 resultou em - 4.77 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      },
      {
        "word": "de a #PETR4",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod:hashtag"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de a #PETR4",
      "arg2": "-"
    }
  },
  {
    "Texto": "A última indicação de a #PETR4 resultou em - 4.77 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
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
    "Texto": "A última indicação de a #PETR3 resultou em - 3.83 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      },
      {
        "word": "de a #PETR3",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod:hashtag"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de a #PETR3",
      "arg2": "-"
    }
  },
  {
    "Texto": "A última indicação de a #PETR3 resultou em - 3.83 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
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
    "Texto": "A última indicação de a #MRVE3 resultou em - 0.81 % . Confira a nova indicação agora em http://t.co/zJRs3Eeyz9",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      },
      {
        "word": "de a #MRVE3",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod:hashtag"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de a #MRVE3",
      "arg2": "-"
    }
  },
  {
    "Texto": "A última indicação de a #MRVE3 resultou em - 0.81 % . Confira a nova indicação agora em http://t.co/zJRs3Eeyz9",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
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
    "Texto": "A última indicação de a #MRVE3 resultou em - 1.34 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      },
      {
        "word": "de a #MRVE3",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod:hashtag"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de a #MRVE3",
      "arg2": "-"
    }
  },
  {
    "Texto": "A última indicação de a #MRVE3 resultou em - 1.34 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
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
    "Texto": "A última indicação de a #OIBR4 resultou em 19.17 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      },
      {
        "word": "de a #OIBR4",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod:hashtag"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de a #OIBR4",
      "arg2": "-"
    }
  },
  {
    "Texto": "A última indicação de a #OIBR4 resultou em 19.17 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
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
    "Texto": "A última indicação de a #MRVE3 resultou em - 1.87 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      },
      {
        "word": "de a #MRVE3",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod:hashtag"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de a #MRVE3",
      "arg2": "-"
    }
  },
  {
    "Texto": "A última indicação de a #MRVE3 resultou em - 1.87 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
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
    "Texto": "A última indicação de a #MRVE3 resultou em - 1,74 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      },
      {
        "word": "de a #MRVE3",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod:hashtag"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de a #MRVE3",
      "arg2": "-"
    }
  },
  {
    "Texto": "A última indicação de a #MRVE3 resultou em - 1,74 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
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
    "Texto": "A última indicação de a #KROT3 resultou em - 1.48 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      },
      {
        "word": "de a #KROT3",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod:hashtag"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de a #KROT3",
      "arg2": "-"
    }
  },
  {
    "Texto": "A última indicação de a #KROT3 resultou em - 1.48 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
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
    "Texto": "A última indicação de a #MRFG3 resultou em - 1.14 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      },
      {
        "word": "de a #MRFG3",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod:hashtag"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de a #MRFG3",
      "arg2": "-"
    }
  },
  {
    "Texto": "A última indicação de a #MRFG3 resultou em - 1.14 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
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
    "Texto": "A última indicação de a #GFSA3 resultou em - 2.44 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      },
      {
        "word": "de a #GFSA3",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod:hashtag"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de a #GFSA3",
      "arg2": "-"
    }
  },
  {
    "Texto": "A última indicação de a #GFSA3 resultou em - 2.44 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
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
    "Texto": "A última indicação de a #MRVE3 resultou em 2.08 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      },
      {
        "word": "de a #MRVE3",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod:hashtag"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de a #MRVE3",
      "arg2": "-"
    }
  },
  {
    "Texto": "A última indicação de a #MRVE3 resultou em 2.08 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
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
    "Texto": "A última indicação de a #JBSS3 resultou em - 4.29 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      },
      {
        "word": "de a #JBSS3",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod:hashtag"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de a #JBSS3",
      "arg2": "-"
    }
  },
  {
    "Texto": "A última indicação de a #JBSS3 resultou em - 4.29 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
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
    "Texto": "A última indicação de a #USIM5 resultou em - 1.29 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      },
      {
        "word": "de a #USIM5",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod:hashtag"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de a #USIM5",
      "arg2": "-"
    }
  },
  {
    "Texto": "A última indicação de a #USIM5 resultou em - 1.29 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
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
    "Texto": "A última indicação de a #PETR3 resultou em - 4.98 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      },
      {
        "word": "de a #PETR3",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod:hashtag"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de a #PETR3",
      "arg2": "-"
    }
  },
  {
    "Texto": "A última indicação de a #PETR3 resultou em - 4.98 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
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
    "Texto": "A última indicação de a #ELPL4 resultou em 7.53 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      },
      {
        "word": "de a #ELPL4",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod:hashtag"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de a #ELPL4",
      "arg2": "-"
    }
  },
  {
    "Texto": "A última indicação de a #ELPL4 resultou em 7.53 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
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
    "Texto": "A última indicação de a #ELET3 resultou em 7.00 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      },
      {
        "word": "de a #ELET3",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod:hashtag"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de a #ELET3",
      "arg2": "-"
    }
  },
  {
    "Texto": "A última indicação de a #ELET3 resultou em 7.00 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
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
    "Texto": "A última indicação de a #MRVE3 resultou em - 1.39 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      },
      {
        "word": "de a #MRVE3",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod:hashtag"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de a #MRVE3",
      "arg2": "-"
    }
  },
  {
    "Texto": "A última indicação de a #MRVE3 resultou em - 1.39 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
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
    "Texto": "A última indicação de a #BRAP4 resultou em - 4.81 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      },
      {
        "word": "de a #BRAP4",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod:hashtag"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de a #BRAP4",
      "arg2": "-"
    }
  },
  {
    "Texto": "A última indicação de a #BRAP4 resultou em - 4.81 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
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
    "Texto": "A última indicação de a #PETR3 resultou em - 4.92 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      },
      {
        "word": "de a #PETR3",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod:hashtag"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de a #PETR3",
      "arg2": "-"
    }
  },
  {
    "Texto": "A última indicação de a #PETR3 resultou em - 4.92 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
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
    "Texto": "A última indicação de a #ELET3 resultou em - 3.90 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      },
      {
        "word": "de a #ELET3",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod:hashtag"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de a #ELET3",
      "arg2": "-"
    }
  },
  {
    "Texto": "A última indicação de a #ELET3 resultou em - 3.90 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
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
    "Texto": "A última indicação de a #MRFG3 resultou em 2.12 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      },
      {
        "word": "de a #MRFG3",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod:hashtag"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de a #MRFG3",
      "arg2": "-"
    }
  },
  {
    "Texto": "A última indicação de a #MRFG3 resultou em 2.12 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
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
    "Texto": "A última indicação de a #PDGR3 resultou em 13.24 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      },
      {
        "word": "de a #PDGR3",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod:hashtag"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de a #PDGR3",
      "arg2": "-"
    }
  },
  {
    "Texto": "A última indicação de a #PDGR3 resultou em 13.24 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
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
    "Texto": "A última indicação de a #USIM5 resultou em - 2.62 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      },
      {
        "word": "de a #USIM5",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod:hashtag"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de a #USIM5",
      "arg2": "-"
    }
  },
  {
    "Texto": "A última indicação de a #USIM5 resultou em - 2.62 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
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
    "Texto": "A última indicação de a #MRVE3 resultou em - 0.84 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      },
      {
        "word": "de a #MRVE3",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod:hashtag"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de a #MRVE3",
      "arg2": "-"
    }
  },
  {
    "Texto": "A última indicação de a #MRVE3 resultou em - 0.84 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
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
    "Texto": "A última indicação de a #MRFG3 resultou em - 2.35 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      },
      {
        "word": "de a #MRFG3",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod:hashtag"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de a #MRFG3",
      "arg2": "-"
    }
  },
  {
    "Texto": "A última indicação de a #MRFG3 resultou em - 2.35 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
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
    "Texto": "A última indicação de a #BBAS3 resultou em - 1.22 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      },
      {
        "word": "de a #BBAS3",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod:hashtag"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de a #BBAS3",
      "arg2": "-"
    }
  },
  {
    "Texto": "A última indicação de a #BBAS3 resultou em - 1.22 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
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
    "Texto": "A última indicação de a #ELET3 resultou em - 4.15 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      },
      {
        "word": "de a #ELET3",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod:hashtag"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de a #ELET3",
      "arg2": "-"
    }
  },
  {
    "Texto": "A última indicação de a #ELET3 resultou em - 4.15 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
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
    "Texto": "A última indicação de a #ELET6 resultou em 22.28 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      },
      {
        "word": "de a #ELET6",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod:hashtag"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de a #ELET6",
      "arg2": "-"
    }
  },
  {
    "Texto": "A última indicação de a #ELET6 resultou em 22.28 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
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
    "Texto": "A última indicação de a #ELPL4 resultou em 2.24 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      },
      {
        "word": "de a #ELPL4",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod:hashtag"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de a #ELPL4",
      "arg2": "-"
    }
  },
  {
    "Texto": "A última indicação de a #ELPL4 resultou em 2.24 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
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
    "Texto": "A última indicação de a #BBAS3 resultou em - 2,17 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      },
      {
        "word": "de a #BBAS3",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod:hashtag"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de a #BBAS3",
      "arg2": "-"
    }
  },
  {
    "Texto": "A última indicação de a #BBAS3 resultou em - 2,17 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
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
    "Texto": "A última indicação de a #RSID3 resultou em - 8.43 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      },
      {
        "word": "de a #RSID3",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod:hashtag"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de a #RSID3",
      "arg2": "-"
    }
  },
  {
    "Texto": "A última indicação de a #RSID3 resultou em - 8.43 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
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
    "Texto": "A última indicação de a #USIM5 resultou em - 2.10 % . Confira a nova indicação agora em http://t.co/zJRs3Eeyz9",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      },
      {
        "word": "de a #USIM5",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod:hashtag"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de a #USIM5",
      "arg2": "-"
    }
  },
  {
    "Texto": "A última indicação de a #USIM5 resultou em - 2.10 % . Confira a nova indicação agora em http://t.co/zJRs3Eeyz9",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
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
    "Texto": "A última indicação de a #OIBR4 resultou em 3.20 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      },
      {
        "word": "de a #OIBR4",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod:hashtag"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de a #OIBR4",
      "arg2": "-"
    }
  },
  {
    "Texto": "A última indicação de a #OIBR4 resultou em 3.20 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
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
    "Texto": "A última indicação de a #MRVE3 resultou em - 0.14 % . Confira a nova indicação agora em http://t.co/zJRs3Eeyz9",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      },
      {
        "word": "de a #MRVE3",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod:hashtag"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de a #MRVE3",
      "arg2": "-"
    }
  },
  {
    "Texto": "A última indicação de a #MRVE3 resultou em - 0.14 % . Confira a nova indicação agora em http://t.co/zJRs3Eeyz9",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
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
    "Texto": "A última indicação de a #ELET3 resultou em - 3.84 % . Confira a nova indicação agora em http://t.co/zJRs3Eeyz9",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      },
      {
        "word": "de a #ELET3",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod:hashtag"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de a #ELET3",
      "arg2": "-"
    }
  },
  {
    "Texto": "A última indicação de a #ELET3 resultou em - 3.84 % . Confira a nova indicação agora em http://t.co/zJRs3Eeyz9",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
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
    "Texto": "A última indicação de a #MRVE3 resultou em - 0.28 % . Confira a nova indicação agora em http://t.co/zJRs3Eeyz9",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      },
      {
        "word": "de a #MRVE3",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod:hashtag"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de a #MRVE3",
      "arg2": "-"
    }
  },
  {
    "Texto": "A última indicação de a #MRVE3 resultou em - 0.28 % . Confira a nova indicação agora em http://t.co/zJRs3Eeyz9",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
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
    "Texto": "A última indicação de a #MRVE3 resultou em - 0.56 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      },
      {
        "word": "de a #MRVE3",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod:hashtag"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de a #MRVE3",
      "arg2": "-"
    }
  },
  {
    "Texto": "A última indicação de a #MRVE3 resultou em - 0.56 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
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
    "Texto": "A última indicação de a #PETR4 resultou em 9.05 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      },
      {
        "word": "de a #PETR4",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod:hashtag"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de a #PETR4",
      "arg2": "-"
    }
  },
  {
    "Texto": "A última indicação de a #PETR4 resultou em 9.05 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
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
    "Texto": "A última indicação de a #MRVE3 resultou em - 1.11 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      },
      {
        "word": "de a #MRVE3",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod:hashtag"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de a #MRVE3",
      "arg2": "-"
    }
  },
  {
    "Texto": "A última indicação de a #MRVE3 resultou em - 1.11 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
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
    "Texto": "A última indicação de a #KROT3 resultou em 19.12 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      },
      {
        "word": "de a #KROT3",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod:hashtag"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de a #KROT3",
      "arg2": "-"
    }
  },
  {
    "Texto": "A última indicação de a #KROT3 resultou em 19.12 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
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
    "Texto": "A última indicação de a #GOLL4 resultou em - 5.05 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      },
      {
        "word": "de a #GOLL4",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod:hashtag"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de a #GOLL4",
      "arg2": "-"
    }
  },
  {
    "Texto": "A última indicação de a #GOLL4 resultou em - 5.05 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
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
    "Texto": "A última indicação de a #USIM5 resultou em - 1.36 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      },
      {
        "word": "de a #USIM5",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod:hashtag"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de a #USIM5",
      "arg2": "-"
    }
  },
  {
    "Texto": "A última indicação de a #USIM5 resultou em - 1.36 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
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
    "Texto": "A última indicação de a #PDGR3 resultou em - 1.81 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      },
      {
        "word": "de a #PDGR3",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod:hashtag"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de a #PDGR3",
      "arg2": "-"
    }
  },
  {
    "Texto": "A última indicação de a #PDGR3 resultou em - 1.81 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
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
    "Texto": "A última indicação de a #OIBR4 resultou em - 1.04 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      },
      {
        "word": "de a #OIBR4",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod:hashtag"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de a #OIBR4",
      "arg2": "-"
    }
  },
  {
    "Texto": "A última indicação de a #OIBR4 resultou em - 1.04 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
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
    "Texto": "A última indicação de a #ITUB4 resultou em - 1.52 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      },
      {
        "word": "de a #ITUB4",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod:hashtag"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de a #ITUB4",
      "arg2": "-"
    }
  },
  {
    "Texto": "A última indicação de a #ITUB4 resultou em - 1.52 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
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
    "Texto": "A última indicação de a #JBSS3 resultou em - 4.21 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      },
      {
        "word": "de a #JBSS3",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod:hashtag"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de a #JBSS3",
      "arg2": "-"
    }
  },
  {
    "Texto": "A última indicação de a #JBSS3 resultou em - 4.21 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
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
    "Texto": "A última indicação de a #MRFG3 resultou em - 1.67 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      },
      {
        "word": "de a #MRFG3",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod:hashtag"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de a #MRFG3",
      "arg2": "-"
    }
  },
  {
    "Texto": "A última indicação de a #MRFG3 resultou em - 1.67 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
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
    "Texto": "A última indicação de a #PETR3 resultou em 4.92 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      },
      {
        "word": "de a #PETR3",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod:hashtag"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de a #PETR3",
      "arg2": "-"
    }
  },
  {
    "Texto": "A última indicação de a #PETR3 resultou em 4.92 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
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
    "Texto": "A última indicação de a #MRFG3 resultou em - 1.26 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      },
      {
        "word": "de a #MRFG3",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod:hashtag"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de a #MRFG3",
      "arg2": "-"
    }
  },
  {
    "Texto": "A última indicação de a #MRFG3 resultou em - 1.26 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
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
    "Texto": "A última indicação de a #KROT3 resultou em - 1.03 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      },
      {
        "word": "de a #KROT3",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod:hashtag"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de a #KROT3",
      "arg2": "-"
    }
  },
  {
    "Texto": "A última indicação de a #KROT3 resultou em - 1.03 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
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
    "Texto": "A última indicação de a #GOAU4 resultou em - 7.28 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      },
      {
        "word": "de a #GOAU4",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod:hashtag"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de a #GOAU4",
      "arg2": "-"
    }
  },
  {
    "Texto": "A última indicação de a #GOAU4 resultou em - 7.28 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
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
    "Texto": "A última indicação de a #MRVE3 resultou em - 0.91 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      },
      {
        "word": "de a #MRVE3",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod:hashtag"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de a #MRVE3",
      "arg2": "-"
    }
  },
  {
    "Texto": "A última indicação de a #MRVE3 resultou em - 0.91 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
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
    "Texto": "A última indicação de a #KROT3 resultou em - 1.07 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      },
      {
        "word": "de a #KROT3",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod:hashtag"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de a #KROT3",
      "arg2": "-"
    }
  },
  {
    "Texto": "A última indicação de a #KROT3 resultou em - 1.07 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
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
    "Texto": "A última indicação de a #MRVE3 resultou em - 0.76 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      },
      {
        "word": "de a #MRVE3",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod:hashtag"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de a #MRVE3",
      "arg2": "-"
    }
  },
  {
    "Texto": "A última indicação de a #MRVE3 resultou em - 0.76 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
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
    "Texto": "A última indicação de a #MRVE3 resultou em - 3.25 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      },
      {
        "word": "de a #MRVE3",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod:hashtag"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de a #MRVE3",
      "arg2": "-"
    }
  },
  {
    "Texto": "A última indicação de a #MRVE3 resultou em - 3.25 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
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
    "Texto": "A última indicação de a #CSNA3 resultou em - 1.53 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      },
      {
        "word": "de a #CSNA3",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod:hashtag"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de a #CSNA3",
      "arg2": "-"
    }
  },
  {
    "Texto": "A última indicação de a #CSNA3 resultou em - 1.53 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
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
    "Texto": "A última indicação de a #MRVE3 resultou em - 1.18 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      },
      {
        "word": "de a #MRVE3",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod:hashtag"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de a #MRVE3",
      "arg2": "-"
    }
  },
  {
    "Texto": "A última indicação de a #MRVE3 resultou em - 1.18 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
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
    "Texto": "A última indicação de a #ELPL4 resultou em - 1.44 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      },
      {
        "word": "de a #ELPL4",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod:hashtag"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de a #ELPL4",
      "arg2": "-"
    }
  },
  {
    "Texto": "A última indicação de a #ELPL4 resultou em - 1.44 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
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
    "Texto": "A última indicação de a #OIBR4 resultou em - 2.56 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      },
      {
        "word": "de a #OIBR4",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod:hashtag"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de a #OIBR4",
      "arg2": "-"
    }
  },
  {
    "Texto": "A última indicação de a #OIBR4 resultou em - 2.56 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
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
    "Texto": "A última indicação de a #MRVE3 resultou em 2.06 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      },
      {
        "word": "de a #MRVE3",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod:hashtag"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de a #MRVE3",
      "arg2": "-"
    }
  },
  {
    "Texto": "A última indicação de a #MRVE3 resultou em 2.06 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
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
    "Texto": "A última indicação de a #GOLL4 resultou em - 2.16 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      },
      {
        "word": "de a #GOLL4",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod:hashtag"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de a #GOLL4",
      "arg2": "-"
    }
  },
  {
    "Texto": "A última indicação de a #GOLL4 resultou em - 2.16 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
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
    "Texto": "A última indicação de a #GFSA3 resultou em - 0.31 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      },
      {
        "word": "de a #GFSA3",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de a #GFSA3",
      "arg2": "-"
    }
  },
  {
    "Texto": "A última indicação de a #GFSA3 resultou em - 0.31 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
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
    "Texto": "A última indicação de a #ITUB4 resultou em - 0.57 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      },
      {
        "word": "de a #ITUB4",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de a #ITUB4",
      "arg2": "-"
    }
  },
  {
    "Texto": "A última indicação de a #ITUB4 resultou em - 0.57 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
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
    "Texto": "A última indicação de a #MRFG3 resultou em 0.23 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      },
      {
        "word": "de a #MRFG3",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de a #MRFG3",
      "arg2": "-"
    }
  },
  {
    "Texto": "A última indicação de a #MRFG3 resultou em 0.23 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
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
    "Texto": "A última indicação de a #BBAS3 resultou em - 0.78 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      },
      {
        "word": "de a #BBAS3",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de a #BBAS3",
      "arg2": "-"
    }
  },
  {
    "Texto": "A última indicação de a #BBAS3 resultou em - 0.78 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
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
    "Texto": "A última indicação de a #MRVE3 resultou em - 0.55 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      },
      {
        "word": "de a #MRVE3",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod:hashtag"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de a #MRVE3",
      "arg2": "-"
    }
  },
  {
    "Texto": "A última indicação de a #MRVE3 resultou em - 0.55 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
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
    "Texto": "A última indicação de a #ELPL4 resultou em - 1.63 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      },
      {
        "word": "de a #ELPL4",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod:hashtag"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de a #ELPL4",
      "arg2": "-"
    }
  },
  {
    "Texto": "A última indicação de a #ELPL4 resultou em - 1.63 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
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
    "Texto": "A última indicação de a #MRVE3 resultou em - 0.41 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      },
      {
        "word": "de a #MRVE3",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod:hashtag"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de a #MRVE3",
      "arg2": "-"
    }
  },
  {
    "Texto": "A última indicação de a #MRVE3 resultou em - 0.41 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
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
    "Texto": "A última indicação de a #OIBR4 resultou em 3.79 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      },
      {
        "word": "de a #OIBR4",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod:hashtag"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de a #OIBR4",
      "arg2": "-"
    }
  },
  {
    "Texto": "A última indicação de a #OIBR4 resultou em 3.79 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
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
    "Texto": "A última indicação de a #MRVE3 resultou em - 1.22 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      },
      {
        "word": "de a #MRVE3",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod:hashtag"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de a #MRVE3",
      "arg2": "-"
    }
  },
  {
    "Texto": "A última indicação de a #MRVE3 resultou em - 1.22 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
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
    "Texto": "A última indicação de a #KROT3 resultou em 9.87 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      },
      {
        "word": "de a #KROT3",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod:hashtag"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de a #KROT3",
      "arg2": "-"
    }
  },
  {
    "Texto": "A última indicação de a #KROT3 resultou em 9.87 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
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
    "Texto": "A última indicação de a #MRFG3 resultou em 4.37 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      },
      {
        "word": "de a #MRFG3",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod:hashtag"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de a #MRFG3",
      "arg2": "-"
    }
  },
  {
    "Texto": "A última indicação de a #MRFG3 resultou em 4.37 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
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
    "Texto": "A última indicação de a #ELPL4 resultou em - 1.51 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      },
      {
        "word": "de a #ELPL4",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod:hashtag"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de a #ELPL4",
      "arg2": "-"
    }
  },
  {
    "Texto": "A última indicação de a #ELPL4 resultou em - 1.51 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
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
    "Texto": "A última indicação de a #OIBR4 resultou em 5.95 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      },
      {
        "word": "de a #OIBR4",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod:hashtag"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de a #OIBR4",
      "arg2": "-"
    }
  },
  {
    "Texto": "A última indicação de a #OIBR4 resultou em 5.95 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
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
    "Texto": "A última indicação de a #PDGR3 resultou em - 5.18 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      },
      {
        "word": "de a #PDGR3",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod:hashtag"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de a #PDGR3",
      "arg2": "-"
    }
  },
  {
    "Texto": "A última indicação de a #PDGR3 resultou em - 5.18 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
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
    "Texto": "A última indicação de a #JBSS3 resultou em - 2.72 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      },
      {
        "word": "de a #JBSS3",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod:hashtag"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de a #JBSS3",
      "arg2": "-"
    }
  },
  {
    "Texto": "A última indicação de a #JBSS3 resultou em - 2.72 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
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
    "Texto": "A última indicação de a #MRFG3 resultou em - 3.56 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      },
      {
        "word": "de a #MRFG3",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod:hashtag"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de a #MRFG3",
      "arg2": "-"
    }
  },
  {
    "Texto": "A última indicação de a #MRFG3 resultou em - 3.56 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
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
    "Texto": "A última indicação de a #MRVE3 resultou em 8.10 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      },
      {
        "word": "de a #MRVE3",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod:hashtag"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de a #MRVE3",
      "arg2": "-"
    }
  },
  {
    "Texto": "A última indicação de a #MRVE3 resultou em 8.10 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
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
    "Texto": "A última indicação de a #MRVE3 resultou em - 0.74 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      },
      {
        "word": "de a #MRVE3",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod:hashtag"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de a #MRVE3",
      "arg2": "-"
    }
  },
  {
    "Texto": "A última indicação de a #MRVE3 resultou em - 0.74 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
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
    "Texto": "A última indicação de a #OIBR4 resultou em - 5,36 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      },
      {
        "word": "de a #OIBR4",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod:hashtag"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de a #OIBR4",
      "arg2": "-"
    }
  },
  {
    "Texto": "A última indicação de a #OIBR4 resultou em - 5,36 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
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
    "Texto": "A última indicação de a #MRVE3 resultou em - 1.36 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      },
      {
        "word": "de a #MRVE3",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod:hashtag"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de a #MRVE3",
      "arg2": "-"
    }
  },
  {
    "Texto": "A última indicação de a #MRVE3 resultou em - 1.36 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
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
    "Texto": "A última indicação de a #MRVE3 resultou em - 0.25 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      },
      {
        "word": "de a #MRVE3",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod:hashtag"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de a #MRVE3",
      "arg2": "-"
    }
  },
  {
    "Texto": "A última indicação de a #MRVE3 resultou em - 0.25 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
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
    "Texto": "A última indicação de a #KROT3 resultou em 1.61 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      },
      {
        "word": "de a #KROT3",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod:hashtag"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de a #KROT3",
      "arg2": "-"
    }
  },
  {
    "Texto": "A última indicação de a #KROT3 resultou em 1.61 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
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
    "Texto": "A última indicação de a #MRVE3 resultou em 0.00 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      },
      {
        "word": "de a #MRVE3",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod:hashtag"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de a #MRVE3",
      "arg2": "-"
    }
  },
  {
    "Texto": "A última indicação de a #MRVE3 resultou em 0.00 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
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
    "Texto": "A última indicação de a #MRVE3 resultou em - 0.87 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      },
      {
        "word": "de a #MRVE3",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod:hashtag"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de a #MRVE3",
      "arg2": "-"
    }
  },
  {
    "Texto": "A última indicação de a #MRVE3 resultou em - 0.87 % . Confira a nova indicação agora em http://t.co/kgt1YiTbF7",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
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
    "Texto": "$CIEL3 - Cielo ( ciel-nm ) - Material A Disposicao ( indicacao De Candidatos A Membros De o Ca http://t.co/3GExefQijD",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      },
      {
        "word": "De Candidatos A Membros De o Ca",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
        "subscript": "rel"
      },
      {
        "word": "Candidatos",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "De Candidatos A Membros De o Ca",
      "arg2": "-"
    }
  },
  {
    "Texto": "$PDGR3 - Pdg Realt ( pdgr-nm ) - Material A Disposicao ( indicacao De Candidatos Para O Ca ) http://t.co/8KQgdZbmKD",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      },
      {
        "word": "De Candidatos Para O Ca",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
        "subscript": "rel"
      },
      {
        "word": "Candidatos",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "De Candidatos Para O Ca",
      "arg2": "-"
    }
  },
  {
    "Texto": "Indicação para o pregão de hoje com #DTEX3 http://t.co/fMPFmmOMlj",
    "marks": [
      {
        "word": "Indicação",
        "type": "rel"
      },
      {
        "word": "com #DTEX3",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "Indicação",
        "subscript": "rel"
      },
      {
        "word": "DTEX3",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "com #DTEX3",
      "arg2": "-"
    }
  },
  {
    "Texto": "Nossa indicação de Análise Técnica para o pregão de hoje é EMBR3 #analisetecnica http://t.co/y9of3ttl0P",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      },
      {
        "word": "Nossa",
        "type": "arg0"
      },
      {
        "word": "EMBR3",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
        "subscript": "rel"
      },
      {
        "word": "Nossa",
        "subscript": "det"
      },
      {
        "word": "EMBR3",
        "subscript": "nsubj"
      }
    ],
    "args": {
      "arg0": "Nossa",
      "arg1": "EMBR3",
      "arg2": "-"
    }
  },
  {
    "Texto": "@Live_Trade qual sua indicação para BBSE3 , BBTG11 e SANB11 . Obrigado !",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      },
      {
        "word": "sua",
        "type": "arg0"
      },
      {
        "word": "para BBSE3 , BBTG11 e SANB11",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
        "subscript": "rel"
      },
      {
        "word": "sua",
        "subscript": "det"
      },
      {
        "word": "BBSE3",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "sua",
      "arg1": "para BBSE3 , BBTG11 e SANB11",
      "arg2": "-"
    }
  },
  {
    "Texto": "$RSID3 - Rossi Resid ( rsid-nm ) - Indicacao De Candidato A Membro De o Conselho De Admin . http://t.co/XAZrrT0xHk",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      },
      {
        "word": "De Candidato A Membro De o Conselho De Admin",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
        "subscript": "rel"
      },
      {
        "word": "Candidato",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "De Candidato A Membro De o Conselho De Admin",
      "arg2": "-"
    }
  },
  {
    "Texto": "América Latina Logistica , nossa Segunda indicação de ações para Março esta agitando o mercado este ano . Não perca ! #alll3",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      },
      {
        "word": "nossa",
        "type": "arg0"
      },
      {
        "word": "América Latina Logistica",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
        "subscript": "rel"
      },
      {
        "word": "nossa",
        "subscript": "det"
      },
      {
        "word": "Logistica",
        "subscript": "appos"
      }
    ],
    "args": {
      "arg0": "nossa",
      "arg1": "América Latina Logistica",
      "arg2": "-"
    }
  },
  {
    "Texto": "#PETR4 querendo agulhar em o curto , 30min ... com um monte de outras indicações ... vamos ver ... ,)",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
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
    "Texto": "$ELET3 - Eletrobras ( elet-n1 ) - Material A Disp. ( indic. De Candidatos A Membros De o Ca ) http://t.co/myIM01vKEt",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      },
      {
        "word": "De Candidatos A Membros De o Ca",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
        "subscript": "rel"
      },
      {
        "word": "Candidatos",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "De Candidatos A Membros De o Ca",
      "arg2": "-"
    }
  },
  {
    "Texto": "$ELET3 - Eletrobras ( elet-n1 ) - Material A Disposicao ( indicacao De Candidatos ) http://t.co/yIXX3MnjIO",
    "marks": [
      {
        "word": "indicação",
        "type": "rel"
      },
      {
        "word": "De Candidatos",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "indicação",
        "subscript": "rel"
      },
      {
        "word": "Candidatos",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "De Candidatos",
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