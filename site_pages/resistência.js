document.addEventListener('DOMContentLoaded', function() {
  const SHOWN_ARGS = ["arg0", "arg1"];
  const data = [
  {
    "Texto": "#VALE5 suportes e resistências http://t.co/c8OrWXrECN",
    "marks": [
      {
        "word": "resistência",
        "type": "rel"
      },
      {
        "word": "#VALE5",
        "type": "arg0"
      }
    ],
    "subscripts": [
      {
        "word": "resistência",
        "subscript": "rel"
      },
      {
        "word": "VALE5",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "#VALE5",
      "arg1": "-"
    }
  },
  {
    "Texto": "#ITUB4 suportes e resistências http://t.co/OAX2wE9OaR",
    "marks": [
      {
        "word": "resistência",
        "type": "rel"
      },
      {
        "word": "#ITUB4",
        "type": "arg0"
      }
    ],
    "subscripts": [
      {
        "word": "resistência",
        "subscript": "rel"
      },
      {
        "word": "ITUB4",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "#ITUB4",
      "arg1": "-"
    }
  },
  {
    "Texto": "#BBDC4 suportes e resistências http://t.co/B6q9STwuQD",
    "marks": [
      {
        "word": "resistência",
        "type": "rel"
      },
      {
        "word": "#BBDC4",
        "type": "arg0"
      }
    ],
    "subscripts": [
      {
        "word": "resistência",
        "subscript": "rel"
      },
      {
        "word": "BBDC4",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "#BBDC4",
      "arg1": "-"
    }
  },
  {
    "Texto": "#VALE5 suportes e resistências , veja ainda notícia em o comentário . http://t.co/sJrLzoBlUT",
    "marks": [
      {
        "word": "resistência",
        "type": "rel"
      },
      {
        "word": "#VALE5",
        "type": "arg0"
      }
    ],
    "subscripts": [
      {
        "word": "resistência",
        "subscript": "rel"
      },
      {
        "word": "VALE5",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "#VALE5",
      "arg1": "-"
    }
  },
  {
    "Texto": "#ITUB4 Suportes e resistências http://t.co/MwL9JDL7iC",
    "marks": [
      {
        "word": "resistência",
        "type": "rel"
      },
      {
        "word": "#ITUB4",
        "type": "arg0"
      }
    ],
    "subscripts": [
      {
        "word": "resistência",
        "subscript": "rel"
      },
      {
        "word": "ITUB4",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "#ITUB4",
      "arg1": "-"
    }
  },
  {
    "Texto": "#MRFG3 resistencia semanal em R$ 4,37 !",
    "marks": [
      {
        "word": "resistência",
        "type": "rel"
      },
      {
        "word": "#MRFG3",
        "type": "arg0"
      },
      {
        "word": "em R$ 4,37",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "resistência",
        "subscript": "rel"
      },
      {
        "word": "MRFG3",
        "subscript": "nmod"
      },
      {
        "word": "37",
        "subscript": "nsubj"
      }
    ],
    "args": {
      "arg0": "#MRFG3",
      "arg1": "em R$ 4,37"
    }
  },
  {
    "Texto": "INTRADAY PETR4 : Suportes 14,14 e 14,27 e resistências 14,61 e 14,82 INTRADAY VALE5 : Suportes 27,07 e 27,28 e resistências 27,85 e 28,21",
    "marks": [
      {
        "word": "resistência",
        "type": "rel"
      },
      {
        "word": "PETR4",
        "type": "arg0"
      },
      {
        "word": "14,61 e 14,82",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "resistência",
        "subscript": "rel"
      },
      {
        "word": "PETR4",
        "subscript": "nmod"
      },
      {
        "word": "82",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "PETR4",
      "arg1": "14,61 e 14,82"
    }
  },
  {
    "Texto": "INTRADAY PETR4 : Suportes 14,14 e 14,27 e resistências 14,61 e 14,82 INTRADAY VALE5 : Suportes 27,07 e 27,28 e resistências 27,85 e 28,21",
    "marks": [
      {
        "word": "resistência",
        "type": "rel"
      },
      {
        "word": "VALE5",
        "type": "arg0"
      },
      {
        "word": "27,85 e 28,21",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "resistência",
        "subscript": "rel"
      },
      {
        "word": "VALE5",
        "subscript": "nmod"
      },
      {
        "word": "21",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "VALE5",
      "arg1": "27,85 e 28,21"
    }
  },
  {
    "Texto": "INTRADAY PETR4 : Suportes 13,9 e 14,74 e resistências 15,99 e 16,4 INTRADAY VALE5 : Suportes 27,04 e 27,45 e resistências 28,12 e 28,38",
    "marks": [
      {
        "word": "resistência",
        "type": "rel"
      },
      {
        "word": "PETR4",
        "type": "arg0"
      },
      {
        "word": "15,99 e 16,4",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "resistência",
        "subscript": "rel"
      },
      {
        "word": "PETR4",
        "subscript": "nmod"
      },
      {
        "word": "4",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "PETR4",
      "arg1": "15,99 e 16,4"
    }
  },
  {
    "Texto": "INTRADAY PETR4 : Suportes 13,9 e 14,74 e resistências 15,99 e 16,4 INTRADAY VALE5 : Suportes 27,04 e 27,45 e resistências 28,12 e 28,38",
    "marks": [
      {
        "word": "resistência",
        "type": "rel"
      },
      {
        "word": "VALE5",
        "type": "arg0"
      },
      {
        "word": "28,12 e 28,38",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "resistência",
        "subscript": "rel"
      },
      {
        "word": "VALE5",
        "subscript": "nmod"
      },
      {
        "word": "38",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "VALE5",
      "arg1": "28,12 e 28,38"
    }
  },
  {
    "Texto": "INTRADAY PETR4 : Suportes 14,97 e 15,32 e resistências 15,89 e 16,11 INTRADAY VALE5 : Suportes 27,38 e 27,6 e resistências 28,1 e 28,38",
    "marks": [
      {
        "word": "resistência",
        "type": "rel"
      },
      {
        "word": "PETR4",
        "type": "arg0"
      },
      {
        "word": "15,89 e 16,11",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "resistência",
        "subscript": "rel"
      },
      {
        "word": "PETR4",
        "subscript": "nmod"
      },
      {
        "word": "11",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "PETR4",
      "arg1": "15,89 e 16,11"
    }
  },
  {
    "Texto": "INTRADAY PETR4 : Suportes 14,97 e 15,32 e resistências 15,89 e 16,11 INTRADAY VALE5 : Suportes 27,38 e 27,6 e resistências 28,1 e 28,38",
    "marks": [
      {
        "word": "resistência",
        "type": "rel"
      },
      {
        "word": "VALE5",
        "type": "arg0"
      },
      {
        "word": "28,1 e 28,38",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "resistência",
        "subscript": "rel"
      },
      {
        "word": "VALE5",
        "subscript": "nmod"
      },
      {
        "word": "38",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "VALE5",
      "arg1": "28,1 e 28,38"
    }
  },
  {
    "Texto": "INTRADAY PETR4 : Suportes 15,41 e 15,59 e resistências 15,87 e 15,97 INTRADAY VALE5 : Suportes 27,9 e 28,13 e resistências 28,52 e 28,68",
    "marks": [
      {
        "word": "resistência",
        "type": "rel"
      },
      {
        "word": "PETR4",
        "type": "arg0"
      },
      {
        "word": "15,87 e 15,97",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "resistência",
        "subscript": "rel"
      },
      {
        "word": "PETR4",
        "subscript": "nmod"
      },
      {
        "word": "97",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "PETR4",
      "arg1": "15,87 e 15,97"
    }
  },
  {
    "Texto": "INTRADAY PETR4 : Suportes 15,41 e 15,59 e resistências 15,87 e 15,97 INTRADAY VALE5 : Suportes 27,9 e 28,13 e resistências 28,52 e 28,68",
    "marks": [
      {
        "word": "resistência",
        "type": "rel"
      },
      {
        "word": "VALE5",
        "type": "arg0"
      },
      {
        "word": "28,52 e 28,68",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "resistência",
        "subscript": "rel"
      },
      {
        "word": "VALE5",
        "subscript": "nmod"
      },
      {
        "word": "68",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "VALE5",
      "arg1": "28,52 e 28,68"
    }
  },
  {
    "Texto": "INTRADAY PETR4 : Suportes 15,36 e 15,58 e resistências 15,93 e 16,06 INTRADAY VALE5 : Suportes 27,53 e 27,9 e resistências 28,65 e 29,03",
    "marks": [
      {
        "word": "resistência",
        "type": "rel"
      },
      {
        "word": "PETR4",
        "type": "arg0"
      },
      {
        "word": "15,93 e 16,06",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "resistência",
        "subscript": "rel"
      },
      {
        "word": "PETR4",
        "subscript": "nmod"
      },
      {
        "word": "06",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "PETR4",
      "arg1": "15,93 e 16,06"
    }
  },
  {
    "Texto": "INTRADAY PETR4 : Suportes 15,36 e 15,58 e resistências 15,93 e 16,06 INTRADAY VALE5 : Suportes 27,53 e 27,9 e resistências 28,65 e 29,03",
    "marks": [
      {
        "word": "resistência",
        "type": "rel"
      },
      {
        "word": "VALE5",
        "type": "arg0"
      },
      {
        "word": "28,65 e 29,03",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "resistência",
        "subscript": "rel"
      },
      {
        "word": "VALE5",
        "subscript": "nmod"
      },
      {
        "word": "03",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "VALE5",
      "arg1": "28,65 e 29,03"
    }
  },
  {
    "Texto": "INTRADAY PETR4 : Suportes 14,86 e 15,13 e resistências 15,66 e 15,92 INTRADAY VALE5 : Suportes 28,6 e 29,07 e resistências 29,96 e 30,38",
    "marks": [
      {
        "word": "resistência",
        "type": "rel"
      },
      {
        "word": "PETR4",
        "type": "arg0"
      },
      {
        "word": "15,66 e 15,92",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "resistência",
        "subscript": "rel"
      },
      {
        "word": "PETR4",
        "subscript": "nmod"
      },
      {
        "word": "92",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "PETR4",
      "arg1": "15,66 e 15,92"
    }
  },
  {
    "Texto": "INTRADAY PETR4 : Suportes 14,86 e 15,13 e resistências 15,66 e 15,92 INTRADAY VALE5 : Suportes 28,6 e 29,07 e resistências 29,96 e 30,38",
    "marks": [
      {
        "word": "resistência",
        "type": "rel"
      },
      {
        "word": "VALE5",
        "type": "arg0"
      },
      {
        "word": "29,96 e 30,38",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "resistência",
        "subscript": "rel"
      },
      {
        "word": "VALE5",
        "subscript": "nmod"
      },
      {
        "word": "38",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "VALE5",
      "arg1": "29,96 e 30,38"
    }
  },
  {
    "Texto": "INTRADAY PETR4 : Suportes 15,14 e 15,29 e resistências 15,65 e 15,86 INTRADAY VALE5 : Suportes 28,94 e 29,21 e resistências 29,90 e 30,32",
    "marks": [
      {
        "word": "resistência",
        "type": "rel"
      },
      {
        "word": "PETR4",
        "type": "arg0"
      },
      {
        "word": "15,65 e 15,86",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "resistência",
        "subscript": "rel"
      },
      {
        "word": "PETR4",
        "subscript": "nmod"
      },
      {
        "word": "86",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "PETR4",
      "arg1": "15,65 e 15,86"
    }
  },
  {
    "Texto": "INTRADAY PETR4 : Suportes 15,14 e 15,29 e resistências 15,65 e 15,86 INTRADAY VALE5 : Suportes 28,94 e 29,21 e resistências 29,90 e 30,32",
    "marks": [
      {
        "word": "resistência",
        "type": "rel"
      },
      {
        "word": "VALE5",
        "type": "arg0"
      },
      {
        "word": "29,90 e 30,32",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "resistência",
        "subscript": "rel"
      },
      {
        "word": "VALE5",
        "subscript": "nmod"
      },
      {
        "word": "32",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "VALE5",
      "arg1": "29,90 e 30,32"
    }
  },
  {
    "Texto": "INTRADAY PETR4 : Suportes 15,45 e 15,95 e resistências 16,71 e 16,97 INTRADAY VALE5 : Suportes 29,31 e 29,68 e resistências 30,28 e 30,51",
    "marks": [
      {
        "word": "resistência",
        "type": "rel"
      },
      {
        "word": "PETR4",
        "type": "arg0"
      },
      {
        "word": "16,71 e 16,97",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "resistência",
        "subscript": "rel"
      },
      {
        "word": "PETR4",
        "subscript": "nmod"
      },
      {
        "word": "97",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "PETR4",
      "arg1": "16,71 e 16,97"
    }
  },
  {
    "Texto": "INTRADAY PETR4 : Suportes 15,45 e 15,95 e resistências 16,71 e 16,97 INTRADAY VALE5 : Suportes 29,31 e 29,68 e resistências 30,28 e 30,51",
    "marks": [
      {
        "word": "resistência",
        "type": "rel"
      },
      {
        "word": "VALE5",
        "type": "arg0"
      },
      {
        "word": "30,28 e 30,51",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "resistência",
        "subscript": "rel"
      },
      {
        "word": "VALE5",
        "subscript": "nmod"
      },
      {
        "word": "51",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "VALE5",
      "arg1": "30,28 e 30,51"
    }
  },
  {
    "Texto": "INTRADAY PETR4 : Suportes 14,91 e 15,45 e resistências 16,80 e 17,61 INTRADAY VALE5 : Suportes 29,30 e 29,69 e resistências 30,68 e 31,28",
    "marks": [
      {
        "word": "resistência",
        "type": "rel"
      },
      {
        "word": "PETR4",
        "type": "arg0"
      },
      {
        "word": "16,80 e 17,61",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "resistência",
        "subscript": "rel"
      },
      {
        "word": "PETR4",
        "subscript": "nmod"
      },
      {
        "word": "61",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "PETR4",
      "arg1": "16,80 e 17,61"
    }
  },
  {
    "Texto": "INTRADAY PETR4 : Suportes 14,91 e 15,45 e resistências 16,80 e 17,61 INTRADAY VALE5 : Suportes 29,30 e 29,69 e resistências 30,68 e 31,28",
    "marks": [
      {
        "word": "resistência",
        "type": "rel"
      },
      {
        "word": "VALE5",
        "type": "arg0"
      },
      {
        "word": "30,68 e 31,28",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "resistência",
        "subscript": "rel"
      },
      {
        "word": "VALE5",
        "subscript": "nmod"
      },
      {
        "word": "28",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "VALE5",
      "arg1": "30,68 e 31,28"
    }
  },
  {
    "Texto": "INTRADAY PETR4 : Suportes 15,22 e 15,53 e resistências 16,05 e 16,26 INTRADAY VALE5 : Suportes 29,19 e 29,57 e resistências 30,26 e 30,57",
    "marks": [
      {
        "word": "resistência",
        "type": "rel"
      },
      {
        "word": "PETR4",
        "type": "arg0"
      },
      {
        "word": "16,05 e 16,26",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "resistência",
        "subscript": "rel"
      },
      {
        "word": "PETR4",
        "subscript": "nmod"
      },
      {
        "word": "26",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "PETR4",
      "arg1": "16,05 e 16,26"
    }
  },
  {
    "Texto": "INTRADAY PETR4 : Suportes 15,22 e 15,53 e resistências 16,05 e 16,26 INTRADAY VALE5 : Suportes 29,19 e 29,57 e resistências 30,26 e 30,57",
    "marks": [
      {
        "word": "resistência",
        "type": "rel"
      },
      {
        "word": "VALE5",
        "type": "arg0"
      },
      {
        "word": "30,26 e 30,57",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "resistência",
        "subscript": "rel"
      },
      {
        "word": "VALE5",
        "subscript": "nmod"
      },
      {
        "word": "57",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "VALE5",
      "arg1": "30,26 e 30,57"
    }
  },
  {
    "Texto": "INTRADAY PETR4 : Suportes 15,26 e 15,47 e resistências 15,97 e 16,26 INTRADAY VALE5 : Suportes 29,14 e 29,41 e resistências 29,96 e 30,24",
    "marks": [
      {
        "word": "resistência",
        "type": "rel"
      },
      {
        "word": "PETR4",
        "type": "arg0"
      },
      {
        "word": "15,97 e 16,26",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "resistência",
        "subscript": "rel"
      },
      {
        "word": "PETR4",
        "subscript": "nmod"
      },
      {
        "word": "26",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "PETR4",
      "arg1": "15,97 e 16,26"
    }
  },
  {
    "Texto": "INTRADAY PETR4 : Suportes 15,26 e 15,47 e resistências 15,97 e 16,26 INTRADAY VALE5 : Suportes 29,14 e 29,41 e resistências 29,96 e 30,24",
    "marks": [
      {
        "word": "resistência",
        "type": "rel"
      },
      {
        "word": "VALE5",
        "type": "arg0"
      },
      {
        "word": "29,96 e 30,24",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "resistência",
        "subscript": "rel"
      },
      {
        "word": "VALE5",
        "subscript": "nmod"
      },
      {
        "word": "24",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "VALE5",
      "arg1": "29,96 e 30,24"
    }
  },
  {
    "Texto": "INTRADAY PETR4 : Suportes 15,15 e 15,67 e resistências 16,45 e 16,71 INTRADAY VALE5 : Suportes 28,93 e 29,39 e resistências 30,09 e 30,33",
    "marks": [
      {
        "word": "resistência",
        "type": "rel"
      },
      {
        "word": "PETR4",
        "type": "arg0"
      },
      {
        "word": "16,45 e 16,71",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "resistência",
        "subscript": "rel"
      },
      {
        "word": "PETR4",
        "subscript": "nmod"
      },
      {
        "word": "71",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "PETR4",
      "arg1": "16,45 e 16,71"
    }
  },
  {
    "Texto": "INTRADAY PETR4 : Suportes 15,15 e 15,67 e resistências 16,45 e 16,71 INTRADAY VALE5 : Suportes 28,93 e 29,39 e resistências 30,09 e 30,33",
    "marks": [
      {
        "word": "resistência",
        "type": "rel"
      },
      {
        "word": "VALE5",
        "type": "arg0"
      },
      {
        "word": "30,09 e 30,33",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "resistência",
        "subscript": "rel"
      },
      {
        "word": "VALE5",
        "subscript": "nmod"
      },
      {
        "word": "33",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "VALE5",
      "arg1": "30,09 e 30,33"
    }
  },
  {
    "Texto": "INTRADAY PETR4 : Suportes 15,51 e 15,72 e resistências 16,25 e 16,57 INTRADAY VALE5 : Suportes 28,71 e 28,97 e resistências 29,43 e 29,63",
    "marks": [
      {
        "word": "resistência",
        "type": "rel"
      },
      {
        "word": "PETR4",
        "type": "arg0"
      },
      {
        "word": "16,25 e 16,57",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "resistência",
        "subscript": "rel"
      },
      {
        "word": "PETR4",
        "subscript": "nmod"
      },
      {
        "word": "57",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "PETR4",
      "arg1": "16,25 e 16,57"
    }
  },
  {
    "Texto": "INTRADAY PETR4 : Suportes 15,51 e 15,72 e resistências 16,25 e 16,57 INTRADAY VALE5 : Suportes 28,71 e 28,97 e resistências 29,43 e 29,63",
    "marks": [
      {
        "word": "resistência",
        "type": "rel"
      },
      {
        "word": "VALE5",
        "type": "arg0"
      },
      {
        "word": "29,43 e 29,63",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "resistência",
        "subscript": "rel"
      },
      {
        "word": "VALE5",
        "subscript": "nmod"
      },
      {
        "word": "63",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "VALE5",
      "arg1": "29,43 e 29,63"
    }
  },
  {
    "Texto": "INTRADAY PETR4 : Suportes 14,55 e 14,94 e resistências 15,9 e 16,47 INTRADAY VALE5 : Suportes 26,93 e 27,4 e resistências 28,67 e 29,47",
    "marks": [
      {
        "word": "resistência",
        "type": "rel"
      },
      {
        "word": "PETR4",
        "type": "arg0"
      },
      {
        "word": "15,9 e 16,47",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "resistência",
        "subscript": "rel"
      },
      {
        "word": "PETR4",
        "subscript": "nmod"
      },
      {
        "word": "47",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "PETR4",
      "arg1": "15,9 e 16,47"
    }
  },
  {
    "Texto": "INTRADAY PETR4 : Suportes 14,55 e 14,94 e resistências 15,9 e 16,47 INTRADAY VALE5 : Suportes 26,93 e 27,4 e resistências 28,67 e 29,47",
    "marks": [
      {
        "word": "resistência",
        "type": "rel"
      },
      {
        "word": "VALE5",
        "type": "arg0"
      },
      {
        "word": "28,67 e 29,47",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "resistência",
        "subscript": "rel"
      },
      {
        "word": "VALE5",
        "subscript": "nmod"
      },
      {
        "word": "47",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "VALE5",
      "arg1": "28,67 e 29,47"
    }
  },
  {
    "Texto": "INTRADAY PETR4 : Suportes 15,06 e 15,42 e resistências 15,96 e 16,14 INTRADAY VALE5 : Suportes 27,6 e 27,88 e resistências 28,39 e 28,62",
    "marks": [
      {
        "word": "resistência",
        "type": "rel"
      },
      {
        "word": "PETR4",
        "type": "arg0"
      },
      {
        "word": "15,96 e 16,14",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "resistência",
        "subscript": "rel"
      },
      {
        "word": "PETR4",
        "subscript": "nmod"
      },
      {
        "word": "14",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "PETR4",
      "arg1": "15,96 e 16,14"
    }
  },
  {
    "Texto": "INTRADAY PETR4 : Suportes 15,06 e 15,42 e resistências 15,96 e 16,14 INTRADAY VALE5 : Suportes 27,6 e 27,88 e resistências 28,39 e 28,62",
    "marks": [
      {
        "word": "resistência",
        "type": "rel"
      },
      {
        "word": "VALE5",
        "type": "arg0"
      },
      {
        "word": "28,39 e 28,62",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "resistência",
        "subscript": "rel"
      },
      {
        "word": "VALE5",
        "subscript": "nmod"
      },
      {
        "word": "62",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "VALE5",
      "arg1": "28,39 e 28,62"
    }
  },
  {
    "Texto": "INTRADAY PETR4 : Suportes 15,11 e 15,75 e resistências 16,81 e 17,23 INTRADAY VALE5 : Suportes 27,62 e 28,08 e resistências 28,89 e 29,24",
    "marks": [
      {
        "word": "resistência",
        "type": "rel"
      },
      {
        "word": "PETR4",
        "type": "arg0"
      },
      {
        "word": "16,81 e 17,23",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "resistência",
        "subscript": "rel"
      },
      {
        "word": "PETR4",
        "subscript": "nmod"
      },
      {
        "word": "23",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "PETR4",
      "arg1": "16,81 e 17,23"
    }
  },
  {
    "Texto": "INTRADAY PETR4 : Suportes 15,11 e 15,75 e resistências 16,81 e 17,23 INTRADAY VALE5 : Suportes 27,62 e 28,08 e resistências 28,89 e 29,24",
    "marks": [
      {
        "word": "resistência",
        "type": "rel"
      },
      {
        "word": "VALE5",
        "type": "arg0"
      },
      {
        "word": "28,89 e 29,24",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "resistência",
        "subscript": "rel"
      },
      {
        "word": "VALE5",
        "subscript": "nmod"
      },
      {
        "word": "24",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "VALE5",
      "arg1": "28,89 e 29,24"
    }
  },
  {
    "Texto": "INTRADAY PETR4 : Suportes 15,63 e 15,83 e resistências 16,15 e 16,27 INTRADAY VALE5 : Suportes 27,34 e 27,52 e resistências 27,94 e 28,18",
    "marks": [
      {
        "word": "resistência",
        "type": "rel"
      },
      {
        "word": "PETR4",
        "type": "arg0"
      },
      {
        "word": "16,15 e 16,27",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "resistência",
        "subscript": "rel"
      },
      {
        "word": "PETR4",
        "subscript": "nmod"
      },
      {
        "word": "27",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "PETR4",
      "arg1": "16,15 e 16,27"
    }
  },
  {
    "Texto": "INTRADAY PETR4 : Suportes 15,63 e 15,83 e resistências 16,15 e 16,27 INTRADAY VALE5 : Suportes 27,34 e 27,52 e resistências 27,94 e 28,18",
    "marks": [
      {
        "word": "resistência",
        "type": "rel"
      },
      {
        "word": "VALE5",
        "type": "arg0"
      },
      {
        "word": "27,94 e 28,18",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "resistência",
        "subscript": "rel"
      },
      {
        "word": "VALE5",
        "subscript": "nmod"
      },
      {
        "word": "18",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "VALE5",
      "arg1": "27,94 e 28,18"
    }
  },
  {
    "Texto": "INTRADAY PETR4 : Suportes 15,65 e 15,89 e resistências 16,35 e 16,57 INTRADAY VALE5 : Suportes 27,28 e 27,71 e resistências 28,54 e 28,94",
    "marks": [
      {
        "word": "resistência",
        "type": "rel"
      },
      {
        "word": "PETR4",
        "type": "arg0"
      },
      {
        "word": "16,35 e 16,57",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "resistência",
        "subscript": "rel"
      },
      {
        "word": "PETR4",
        "subscript": "nmod"
      },
      {
        "word": "57",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "PETR4",
      "arg1": "16,35 e 16,57"
    }
  },
  {
    "Texto": "INTRADAY PETR4 : Suportes 15,65 e 15,89 e resistências 16,35 e 16,57 INTRADAY VALE5 : Suportes 27,28 e 27,71 e resistências 28,54 e 28,94",
    "marks": [
      {
        "word": "resistência",
        "type": "rel"
      },
      {
        "word": "VALE5",
        "type": "arg0"
      },
      {
        "word": "28,54 e 28,94",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "resistência",
        "subscript": "rel"
      },
      {
        "word": "VALE5",
        "subscript": "nmod"
      },
      {
        "word": "94",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "VALE5",
      "arg1": "28,54 e 28,94"
    }
  },
  {
    "Texto": "INTRADAY PETR4 : Suportes 15,50 e 15,77 e resistências 16,18 e 16,32 INTRADAY VALE5 : Suportes 27,00 e 27,25 e resistências 27,90 e 28,30",
    "marks": [
      {
        "word": "resistência",
        "type": "rel"
      },
      {
        "word": "PETR4",
        "type": "arg0"
      },
      {
        "word": "16,18 e 16,32",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "resistência",
        "subscript": "rel"
      },
      {
        "word": "PETR4",
        "subscript": "nmod"
      },
      {
        "word": "32",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "PETR4",
      "arg1": "16,18 e 16,32"
    }
  },
  {
    "Texto": "INTRADAY PETR4 : Suportes 15,50 e 15,77 e resistências 16,18 e 16,32 INTRADAY VALE5 : Suportes 27,00 e 27,25 e resistências 27,90 e 28,30",
    "marks": [
      {
        "word": "resistência",
        "type": "rel"
      },
      {
        "word": "VALE5",
        "type": "arg0"
      },
      {
        "word": "27,90 e 28,30",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "resistência",
        "subscript": "rel"
      },
      {
        "word": "VALE5",
        "subscript": "nmod"
      },
      {
        "word": "30",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "VALE5",
      "arg1": "27,90 e 28,30"
    }
  },
  {
    "Texto": "INTRADAY PETR4 : Suportes 15,51 e 16,03 e resistências 16,82 e 17,09 INTRADAY VALE5 : Suportes 26,29 e 26,52 e resistências 27,01 e 27,27",
    "marks": [
      {
        "word": "resistência",
        "type": "rel"
      },
      {
        "word": "PETR4",
        "type": "arg0"
      },
      {
        "word": "16,82 e 17,09",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "resistência",
        "subscript": "rel"
      },
      {
        "word": "PETR4",
        "subscript": "nmod"
      },
      {
        "word": "09",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "PETR4",
      "arg1": "16,82 e 17,09"
    }
  },
  {
    "Texto": "INTRADAY PETR4 : Suportes 15,51 e 16,03 e resistências 16,82 e 17,09 INTRADAY VALE5 : Suportes 26,29 e 26,52 e resistências 27,01 e 27,27",
    "marks": [
      {
        "word": "resistência",
        "type": "rel"
      },
      {
        "word": "VALE5",
        "type": "arg0"
      },
      {
        "word": "27,01 e 27,27",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "resistência",
        "subscript": "rel"
      },
      {
        "word": "VALE5",
        "subscript": "nmod"
      },
      {
        "word": "27",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "VALE5",
      "arg1": "27,01 e 27,27"
    }
  },
  {
    "Texto": "INTRADAY PETR4 : Suportes 17,67 e 17,98 e resistências 18,47 e 18,65 INTRADAY VALE5 : Suportes 27,36 e 27,81 e resistências 28,50 e 28,74",
    "marks": [
      {
        "word": "resistência",
        "type": "rel"
      },
      {
        "word": "PETR4",
        "type": "arg0"
      },
      {
        "word": "18,47 e 18,65",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "resistência",
        "subscript": "rel"
      },
      {
        "word": "PETR4",
        "subscript": "nmod"
      },
      {
        "word": "65",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "PETR4",
      "arg1": "18,47 e 18,65"
    }
  },
  {
    "Texto": "INTRADAY PETR4 : Suportes 17,67 e 17,98 e resistências 18,47 e 18,65 INTRADAY VALE5 : Suportes 27,36 e 27,81 e resistências 28,50 e 28,74",
    "marks": [
      {
        "word": "resistência",
        "type": "rel"
      },
      {
        "word": "VALE5",
        "type": "arg0"
      },
      {
        "word": "28,50 e 28,74",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "resistência",
        "subscript": "rel"
      },
      {
        "word": "VALE5",
        "subscript": "nmod"
      },
      {
        "word": "74",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "VALE5",
      "arg1": "28,50 e 28,74"
    }
  },
  {
    "Texto": "INTRADAY PETR4 : Suportes 13 e 13,14 e resistências 13,58 e 13,88 INTRADAY VALE5 : Suportes 27,44 e 27,77 e resistências 28,67 e 29,24",
    "marks": [
      {
        "word": "resistência",
        "type": "rel"
      },
      {
        "word": "PETR4",
        "type": "arg0"
      },
      {
        "word": "13,58 e 13,88",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "resistência",
        "subscript": "rel"
      },
      {
        "word": "PETR4",
        "subscript": "nmod"
      },
      {
        "word": "88",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "PETR4",
      "arg1": "13,58 e 13,88"
    }
  },
  {
    "Texto": "INTRADAY PETR4 : Suportes 13 e 13,14 e resistências 13,58 e 13,88 INTRADAY VALE5 : Suportes 27,44 e 27,77 e resistências 28,67 e 29,24",
    "marks": [
      {
        "word": "resistência",
        "type": "rel"
      },
      {
        "word": "VALE5",
        "type": "arg0"
      },
      {
        "word": "28,67 e 29,24",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "resistência",
        "subscript": "rel"
      },
      {
        "word": "VALE5",
        "subscript": "nmod"
      },
      {
        "word": "24",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "VALE5",
      "arg1": "28,67 e 29,24"
    }
  },
  {
    "Texto": "INTRADAY PETR4 : Suportes 13,08 e 13,25 e resistências 13,66 e 13,9 INTRADAY VALE5 : Suportes 27,78 e 27,94 e resistências 28,35 e 28,6",
    "marks": [
      {
        "word": "resistência",
        "type": "rel"
      },
      {
        "word": "PETR4",
        "type": "arg0"
      },
      {
        "word": "13,66 e 13,9",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "resistência",
        "subscript": "rel"
      },
      {
        "word": "PETR4",
        "subscript": "nmod"
      },
      {
        "word": "9",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "PETR4",
      "arg1": "13,66 e 13,9"
    }
  },
  {
    "Texto": "INTRADAY PETR4 : Suportes 13,08 e 13,25 e resistências 13,66 e 13,9 INTRADAY VALE5 : Suportes 27,78 e 27,94 e resistências 28,35 e 28,6",
    "marks": [
      {
        "word": "resistência",
        "type": "rel"
      },
      {
        "word": "VALE5",
        "type": "arg0"
      },
      {
        "word": "28,35 e 28,6",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "resistência",
        "subscript": "rel"
      },
      {
        "word": "VALE5",
        "subscript": "nmod"
      },
      {
        "word": "6",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "VALE5",
      "arg1": "28,35 e 28,6"
    }
  },
  {
    "Texto": "INTRADAY PETR4 : Suportes 12,97 e 13,15 e resistências 13,56 e 13,79 INTRADAY VALE5 : Suportes 26,37 e 26,73 e resistências 27,7 e 28,31",
    "marks": [
      {
        "word": "resistência",
        "type": "rel"
      },
      {
        "word": "PETR4",
        "type": "arg0"
      },
      {
        "word": "13,56 e 13,79",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "resistência",
        "subscript": "rel"
      },
      {
        "word": "PETR4",
        "subscript": "nmod"
      },
      {
        "word": "79",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "PETR4",
      "arg1": "13,56 e 13,79"
    }
  },
  {
    "Texto": "INTRADAY PETR4 : Suportes 12,97 e 13,15 e resistências 13,56 e 13,79 INTRADAY VALE5 : Suportes 26,37 e 26,73 e resistências 27,7 e 28,31",
    "marks": [
      {
        "word": "resistência",
        "type": "rel"
      },
      {
        "word": "VALE5",
        "type": "arg0"
      },
      {
        "word": "27,7 e 28,31",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "resistência",
        "subscript": "rel"
      },
      {
        "word": "VALE5",
        "subscript": "nmod"
      },
      {
        "word": "31",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "VALE5",
      "arg1": "27,7 e 28,31"
    }
  },
  {
    "Texto": "INTRADAY PETR4 : Suportes 12,62 e 12,82 e resistências 13,29 e 13,56 INTRADAY VALE5 : Suportes 25,76 e 26,07 e resistências 26,65 e 26,92",
    "marks": [
      {
        "word": "resistência",
        "type": "rel"
      },
      {
        "word": "PETR4",
        "type": "arg0"
      },
      {
        "word": "13,29 e 13,56",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "resistência",
        "subscript": "rel"
      },
      {
        "word": "PETR4",
        "subscript": "nmod"
      },
      {
        "word": "56",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "PETR4",
      "arg1": "13,29 e 13,56"
    }
  },
  {
    "Texto": "INTRADAY PETR4 : Suportes 12,62 e 12,82 e resistências 13,29 e 13,56 INTRADAY VALE5 : Suportes 25,76 e 26,07 e resistências 26,65 e 26,92",
    "marks": [
      {
        "word": "resistência",
        "type": "rel"
      },
      {
        "word": "VALE5",
        "type": "arg0"
      },
      {
        "word": "26,65 e 26,92",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "resistência",
        "subscript": "rel"
      },
      {
        "word": "VALE5",
        "subscript": "nmod"
      },
      {
        "word": "92",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "VALE5",
      "arg1": "26,65 e 26,92"
    }
  },
  {
    "Texto": "INTRADAY PETR4 : Suportes 12,88 e 13 e resistências 13,2 e 13,28 INTRADAY VALE5 : Suportes 25,45 e 25,78 e resistências 26,62 e 27,13",
    "marks": [
      {
        "word": "resistência",
        "type": "rel"
      },
      {
        "word": "PETR4",
        "type": "arg0"
      },
      {
        "word": "13,2 e 13,28",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "resistência",
        "subscript": "rel"
      },
      {
        "word": "PETR4",
        "subscript": "nmod"
      },
      {
        "word": "28",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "PETR4",
      "arg1": "13,2 e 13,28"
    }
  },
  {
    "Texto": "INTRADAY PETR4 : Suportes 12,88 e 13 e resistências 13,2 e 13,28 INTRADAY VALE5 : Suportes 25,45 e 25,78 e resistências 26,62 e 27,13",
    "marks": [
      {
        "word": "resistência",
        "type": "rel"
      },
      {
        "word": "VALE5",
        "type": "arg0"
      },
      {
        "word": "26,62 e 27,13",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "resistência",
        "subscript": "rel"
      },
      {
        "word": "VALE5",
        "subscript": "nmod"
      },
      {
        "word": "13",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "VALE5",
      "arg1": "26,62 e 27,13"
    }
  },
  {
    "Texto": "INTRADAY PETR4 : Suportes 12,91 e 13,11 e resistências 13,49 e 13,67 INTRADAY VALE5 : Suportes 25,42 e 25,94 e resistências 26,85 e 27,24",
    "marks": [
      {
        "word": "resistência",
        "type": "rel"
      },
      {
        "word": "PETR4",
        "type": "arg0"
      },
      {
        "word": "13,49 e 13,67",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "resistência",
        "subscript": "rel"
      },
      {
        "word": "PETR4",
        "subscript": "nmod"
      },
      {
        "word": "67",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "PETR4",
      "arg1": "13,49 e 13,67"
    }
  },
  {
    "Texto": "INTRADAY PETR4 : Suportes 12,91 e 13,11 e resistências 13,49 e 13,67 INTRADAY VALE5 : Suportes 25,42 e 25,94 e resistências 26,85 e 27,24",
    "marks": [
      {
        "word": "resistência",
        "type": "rel"
      },
      {
        "word": "VALE5",
        "type": "arg0"
      },
      {
        "word": "26,85 e 27,24",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "resistência",
        "subscript": "rel"
      },
      {
        "word": "VALE5",
        "subscript": "nmod"
      },
      {
        "word": "24",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "VALE5",
      "arg1": "26,85 e 27,24"
    }
  },
  {
    "Texto": "INTRADAY PETR4 : Suportes 12,8 e 12,95 e resistências 13,37 e 13,64 INTRADAY VALE5 : Suportes 25,19 e 25,55 e resistências 26,55 e 27,19",
    "marks": [
      {
        "word": "resistência",
        "type": "rel"
      },
      {
        "word": "PETR4",
        "type": "arg0"
      },
      {
        "word": "13,37 e 13,64",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "resistência",
        "subscript": "rel"
      },
      {
        "word": "PETR4",
        "subscript": "nmod"
      },
      {
        "word": "64",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "PETR4",
      "arg1": "13,37 e 13,64"
    }
  },
  {
    "Texto": "INTRADAY PETR4 : Suportes 12,8 e 12,95 e resistências 13,37 e 13,64 INTRADAY VALE5 : Suportes 25,19 e 25,55 e resistências 26,55 e 27,19",
    "marks": [
      {
        "word": "resistência",
        "type": "rel"
      },
      {
        "word": "VALE5",
        "type": "arg0"
      },
      {
        "word": "26,55 e 27,19",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "resistência",
        "subscript": "rel"
      },
      {
        "word": "VALE5",
        "subscript": "nmod"
      },
      {
        "word": "19",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "VALE5",
      "arg1": "26,55 e 27,19"
    }
  },
  {
    "Texto": "INTRADAY PETR4 : Suportes 12,54 e 12,66 e resistências 13,01 e 13,24 INTRADAY VALE5 : Suportes 25,47 e 25,79 e resistências 26,28 e 26,45",
    "marks": [
      {
        "word": "resistência",
        "type": "rel"
      },
      {
        "word": "PETR4",
        "type": "arg0"
      },
      {
        "word": "13,01 e 13,24",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "resistência",
        "subscript": "rel"
      },
      {
        "word": "PETR4",
        "subscript": "nmod"
      },
      {
        "word": "24",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "PETR4",
      "arg1": "13,01 e 13,24"
    }
  },
  {
    "Texto": "INTRADAY PETR4 : Suportes 12,54 e 12,66 e resistências 13,01 e 13,24 INTRADAY VALE5 : Suportes 25,47 e 25,79 e resistências 26,28 e 26,45",
    "marks": [
      {
        "word": "resistência",
        "type": "rel"
      },
      {
        "word": "VALE5",
        "type": "arg0"
      },
      {
        "word": "26,28 e 26,45",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "resistência",
        "subscript": "rel"
      },
      {
        "word": "VALE5",
        "subscript": "nmod"
      },
      {
        "word": "45",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "VALE5",
      "arg1": "26,28 e 26,45"
    }
  },
  {
    "Texto": "INTRADAY VALE5 : Suportes 25,47 e 25,73 e resistências 26,45 e 26,91",
    "marks": [
      {
        "word": "resistência",
        "type": "rel"
      },
      {
        "word": "VALE5",
        "type": "arg0"
      },
      {
        "word": "26,45 e 26,91",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "resistência",
        "subscript": "rel"
      },
      {
        "word": "VALE5",
        "subscript": "nmod"
      },
      {
        "word": "91",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "VALE5",
      "arg1": "26,45 e 26,91"
    }
  },
  {
    "Texto": "INTRADAY PETR4 : Suportes 12,38 e 12,68 e resistências 13,16 e 13,34 INTRADAY VALE5 : Suportes 25,68 e 26,11 e resistências 26,8 e 27,06",
    "marks": [
      {
        "word": "resistência",
        "type": "rel"
      },
      {
        "word": "PETR4",
        "type": "arg0"
      },
      {
        "word": "13,16 e 13,34",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "resistência",
        "subscript": "rel"
      },
      {
        "word": "PETR4",
        "subscript": "nmod"
      },
      {
        "word": "34",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "PETR4",
      "arg1": "13,16 e 13,34"
    }
  },
  {
    "Texto": "INTRADAY PETR4 : Suportes 12,38 e 12,68 e resistências 13,16 e 13,34 INTRADAY VALE5 : Suportes 25,68 e 26,11 e resistências 26,8 e 27,06",
    "marks": [
      {
        "word": "resistência",
        "type": "rel"
      },
      {
        "word": "VALE5",
        "type": "arg0"
      },
      {
        "word": "26,8 e 27,06",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "resistência",
        "subscript": "rel"
      },
      {
        "word": "VALE5",
        "subscript": "nmod"
      },
      {
        "word": "06",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "VALE5",
      "arg1": "26,8 e 27,06"
    }
  },
  {
    "Texto": "INTRADAY PETR4 : Suportes 12,67 e 13,00 e resistências 13,60 e 13,87 INTRADAY VALE5 : Suportes 25,92 e 26,25 e resistências 26,89 e 27,20",
    "marks": [
      {
        "word": "resistência",
        "type": "rel"
      },
      {
        "word": "PETR4",
        "type": "arg0"
      },
      {
        "word": "13,60 e 13,87",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "resistência",
        "subscript": "rel"
      },
      {
        "word": "PETR4",
        "subscript": "nmod"
      },
      {
        "word": "87",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "PETR4",
      "arg1": "13,60 e 13,87"
    }
  },
  {
    "Texto": "INTRADAY PETR4 : Suportes 12,67 e 13,00 e resistências 13,60 e 13,87 INTRADAY VALE5 : Suportes 25,92 e 26,25 e resistências 26,89 e 27,20",
    "marks": [
      {
        "word": "resistência",
        "type": "rel"
      },
      {
        "word": "VALE5",
        "type": "arg0"
      },
      {
        "word": "26,89 e 27,20",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "resistência",
        "subscript": "rel"
      },
      {
        "word": "VALE5",
        "subscript": "nmod"
      },
      {
        "word": "20",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "VALE5",
      "arg1": "26,89 e 27,20"
    }
  },
  {
    "Texto": "INTRADAY PETR4 : Suportes 12,85 e 13,42 e resistências 14,30 e 14,61 INTRADAY VALE5 : Suportes 25,87 e 26,25 e resistências 26,99 e 27,35",
    "marks": [
      {
        "word": "resistência",
        "type": "rel"
      },
      {
        "word": "PETR4",
        "type": "arg0"
      },
      {
        "word": "14,30 e 14,61",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "resistência",
        "subscript": "rel"
      },
      {
        "word": "PETR4",
        "subscript": "nmod"
      },
      {
        "word": "61",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "PETR4",
      "arg1": "14,30 e 14,61"
    }
  },
  {
    "Texto": "INTRADAY PETR4 : Suportes 12,85 e 13,42 e resistências 14,30 e 14,61 INTRADAY VALE5 : Suportes 25,87 e 26,25 e resistências 26,99 e 27,35",
    "marks": [
      {
        "word": "resistência",
        "type": "rel"
      },
      {
        "word": "VALE5",
        "type": "arg0"
      },
      {
        "word": "26,99 e 27,35",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "resistência",
        "subscript": "rel"
      },
      {
        "word": "VALE5",
        "subscript": "nmod"
      },
      {
        "word": "35",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "VALE5",
      "arg1": "26,99 e 27,35"
    }
  },
  {
    "Texto": "INTRADAY PETR4 : Suportes 13,17 e 13,60 e resistências 14,30 e 14,57 INTRADAY VALE5 : Suportes 26,31 e 26,76 e resistências 27,54 e 27,87",
    "marks": [
      {
        "word": "resistência",
        "type": "rel"
      },
      {
        "word": "PETR4",
        "type": "arg0"
      },
      {
        "word": "14,30 e 14,57",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "resistência",
        "subscript": "rel"
      },
      {
        "word": "PETR4",
        "subscript": "nmod"
      },
      {
        "word": "57",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "PETR4",
      "arg1": "14,30 e 14,57"
    }
  },
  {
    "Texto": "INTRADAY PETR4 : Suportes 13,17 e 13,60 e resistências 14,30 e 14,57 INTRADAY VALE5 : Suportes 26,31 e 26,76 e resistências 27,54 e 27,87",
    "marks": [
      {
        "word": "resistência",
        "type": "rel"
      },
      {
        "word": "VALE5",
        "type": "arg0"
      },
      {
        "word": "27,54 e 27,87",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "resistência",
        "subscript": "rel"
      },
      {
        "word": "VALE5",
        "subscript": "nmod"
      },
      {
        "word": "87",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "VALE5",
      "arg1": "27,54 e 27,87"
    }
  },
  {
    "Texto": "INTRADAY PETR4 : Suportes 13,67 e 14,04 e resistências 14,6 e 14,79 INTRADAY VALE5 : Suportes 26,71 e 26,93 e resistências 27,37 e 27,59",
    "marks": [
      {
        "word": "resistência",
        "type": "rel"
      },
      {
        "word": "PETR4",
        "type": "arg0"
      },
      {
        "word": "14,6 e 14,79",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "resistência",
        "subscript": "rel"
      },
      {
        "word": "PETR4",
        "subscript": "nmod"
      },
      {
        "word": "79",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "PETR4",
      "arg1": "14,6 e 14,79"
    }
  },
  {
    "Texto": "INTRADAY PETR4 : Suportes 13,67 e 14,04 e resistências 14,6 e 14,79 INTRADAY VALE5 : Suportes 26,71 e 26,93 e resistências 27,37 e 27,59",
    "marks": [
      {
        "word": "resistência",
        "type": "rel"
      },
      {
        "word": "VALE5",
        "type": "arg0"
      },
      {
        "word": "27,37 e 27,59",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "resistência",
        "subscript": "rel"
      },
      {
        "word": "VALE5",
        "subscript": "nmod"
      },
      {
        "word": "59",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "VALE5",
      "arg1": "27,37 e 27,59"
    }
  },
  {
    "Texto": "INTRADAY PETR4 : Suportes 13,93 e 14,21 e resistências 14,68 e 14,87 INTRADAY VALE5 : Suportes 27,03 e 27,32 e resistências 27,85 e 28,09",
    "marks": [
      {
        "word": "resistência",
        "type": "rel"
      },
      {
        "word": "PETR4",
        "type": "arg0"
      },
      {
        "word": "14,68 e 14,87",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "resistência",
        "subscript": "rel"
      },
      {
        "word": "PETR4",
        "subscript": "nmod"
      },
      {
        "word": "87",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "PETR4",
      "arg1": "14,68 e 14,87"
    }
  },
  {
    "Texto": "INTRADAY PETR4 : Suportes 13,93 e 14,21 e resistências 14,68 e 14,87 INTRADAY VALE5 : Suportes 27,03 e 27,32 e resistências 27,85 e 28,09",
    "marks": [
      {
        "word": "resistência",
        "type": "rel"
      },
      {
        "word": "VALE5",
        "type": "arg0"
      },
      {
        "word": "27,85 e 28,09",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "resistência",
        "subscript": "rel"
      },
      {
        "word": "VALE5",
        "subscript": "nmod"
      },
      {
        "word": "09",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "VALE5",
      "arg1": "27,85 e 28,09"
    }
  },
  {
    "Texto": "INTRADAY PETR4 : Suportes 16,18 e 16,43 e resistências 17,02 e 17,36 INTRADAY VALE5 : Suportes 26,39 e 26,56 e resistências 26,99 e 27,25",
    "marks": [
      {
        "word": "resistência",
        "type": "rel"
      },
      {
        "word": "PETR4",
        "type": "arg0"
      },
      {
        "word": "17,02 e 17,36",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "resistência",
        "subscript": "rel"
      },
      {
        "word": "PETR4",
        "subscript": "nmod"
      },
      {
        "word": "36",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "PETR4",
      "arg1": "17,02 e 17,36"
    }
  },
  {
    "Texto": "INTRADAY PETR4 : Suportes 16,18 e 16,43 e resistências 17,02 e 17,36 INTRADAY VALE5 : Suportes 26,39 e 26,56 e resistências 26,99 e 27,25",
    "marks": [
      {
        "word": "resistência",
        "type": "rel"
      },
      {
        "word": "VALE5",
        "type": "arg0"
      },
      {
        "word": "26,99 e 27,25",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "resistência",
        "subscript": "rel"
      },
      {
        "word": "VALE5",
        "subscript": "nmod"
      },
      {
        "word": "25",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "VALE5",
      "arg1": "26,99 e 27,25"
    }
  },
  {
    "Texto": "INTRADAY PETR4 : Suportes 17,71 e 17,83 e resistências 18,05 e 18,15 INTRADAY VALE5 : Suportes 26,18 e 26,41 e resistências 27,04 e 27,44",
    "marks": [
      {
        "word": "resistência",
        "type": "rel"
      },
      {
        "word": "PETR4",
        "type": "arg0"
      },
      {
        "word": "18,05 e 18,15",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "resistência",
        "subscript": "rel"
      },
      {
        "word": "PETR4",
        "subscript": "nmod"
      },
      {
        "word": "15",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "PETR4",
      "arg1": "18,05 e 18,15"
    }
  },
  {
    "Texto": "INTRADAY PETR4 : Suportes 17,71 e 17,83 e resistências 18,05 e 18,15 INTRADAY VALE5 : Suportes 26,18 e 26,41 e resistências 27,04 e 27,44",
    "marks": [
      {
        "word": "resistência",
        "type": "rel"
      },
      {
        "word": "VALE5",
        "type": "arg0"
      },
      {
        "word": "27,04 e 27,44",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "resistência",
        "subscript": "rel"
      },
      {
        "word": "VALE5",
        "subscript": "nmod"
      },
      {
        "word": "44",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "VALE5",
      "arg1": "27,04 e 27,44"
    }
  },
  {
    "Texto": "INTRADAY PETR4 : Suportes 17,16 e 17,4 e resistências 17,83 e 18,02 INTRADAY VALE5 : Suportes 26,21 e 26,42 e resistências 26,86 e 27,09",
    "marks": [
      {
        "word": "resistência",
        "type": "rel"
      },
      {
        "word": "PETR4",
        "type": "arg0"
      },
      {
        "word": "17,83 e 18,02",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "resistência",
        "subscript": "rel"
      },
      {
        "word": "PETR4",
        "subscript": "nmod"
      },
      {
        "word": "02",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "PETR4",
      "arg1": "17,83 e 18,02"
    }
  },
  {
    "Texto": "INTRADAY PETR4 : Suportes 17,16 e 17,4 e resistências 17,83 e 18,02 INTRADAY VALE5 : Suportes 26,21 e 26,42 e resistências 26,86 e 27,09",
    "marks": [
      {
        "word": "resistência",
        "type": "rel"
      },
      {
        "word": "VALE5",
        "type": "arg0"
      },
      {
        "word": "26,86 e 27,09",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "resistência",
        "subscript": "rel"
      },
      {
        "word": "VALE5",
        "subscript": "nmod"
      },
      {
        "word": "09",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "VALE5",
      "arg1": "26,86 e 27,09"
    }
  },
  {
    "Texto": "INTRADAY PETR4 : Suportes 17,05 e 17,38 e resistências 17,91 e 18,11 INTRADAY VALE5 : Suportes 26,05 e 26,3 e resistências 26,72 e 26,89",
    "marks": [
      {
        "word": "resistência",
        "type": "rel"
      },
      {
        "word": "PETR4",
        "type": "arg0"
      },
      {
        "word": "17,91 e 18,11",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "resistência",
        "subscript": "rel"
      },
      {
        "word": "PETR4",
        "subscript": "nmod"
      },
      {
        "word": "11",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "PETR4",
      "arg1": "17,91 e 18,11"
    }
  },
  {
    "Texto": "INTRADAY PETR4 : Suportes 17,05 e 17,38 e resistências 17,91 e 18,11 INTRADAY VALE5 : Suportes 26,05 e 26,3 e resistências 26,72 e 26,89",
    "marks": [
      {
        "word": "resistência",
        "type": "rel"
      },
      {
        "word": "VALE5",
        "type": "arg0"
      },
      {
        "word": "26,72 e 26,89",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "resistência",
        "subscript": "rel"
      },
      {
        "word": "VALE5",
        "subscript": "nmod"
      },
      {
        "word": "89",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "VALE5",
      "arg1": "26,72 e 26,89"
    }
  },
  {
    "Texto": "#BRFS3 Em os EUA rompeu resistência http://t.co/BEDWiwYfXR",
    "marks": [
      {
        "word": "resistência",
        "type": "rel"
      },
      {
        "word": "#BRFS3",
        "type": "arg0"
      }
    ],
    "subscripts": [
      {
        "word": "resistência",
        "subscript": "rel"
      },
      {
        "word": "BRFS3",
        "subscript": "nsubj"
      }
    ],
    "args": {
      "arg0": "#BRFS3",
      "arg1": "-"
    }
  },
  {
    "Texto": "Itub4 rompendo resistência . http://t.co/0Dfzgn0PtV",
    "marks": [
      {
        "word": "resistência",
        "type": "rel"
      },
      {
        "word": "Itub4",
        "type": "arg0"
      }
    ],
    "subscripts": [
      {
        "word": "resistência",
        "subscript": "rel"
      },
      {
        "word": "Itub4",
        "subscript": "nsubj"
      }
    ],
    "args": {
      "arg0": "Itub4",
      "arg1": "-"
    }
  },
  {
    "Texto": "Resistencia 0,98 llxl3 parece pesada , voltando para 0,5X para fazer fundo duplo ? respeitando canal de baixa desde 2010 ?",
    "marks": [
      {
        "word": "resistência",
        "type": "rel"
      },
      {
        "word": "llxl3",
        "type": "arg0"
      },
      {
        "word": "0,98",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "resistência",
        "subscript": "rel"
      },
      {
        "word": "llxl3",
        "subscript": "nmod"
      },
      {
        "word": "98",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "llxl3",
      "arg1": "0,98"
    }
  },
  {
    "Texto": "#goau4 ganhou recomendação de compra de uma corretora e já reflete em o preço . #bbas3 disparou ontem , rompeu resistência e Mm : COMPRAR !",
    "marks": [
      {
        "word": "resistência",
        "type": "rel"
      },
      {
        "word": "#bbas3",
        "type": "arg0"
      }
    ],
    "subscripts": [
      {
        "word": "resistência",
        "subscript": "rel"
      },
      {
        "word": "bbas3",
        "subscript": "nsubj"
      }
    ],
    "args": {
      "arg0": "#bbas3",
      "arg1": "-"
    }
  },
  {
    "Texto": "#ITUB4 já subiu 29,5 % em 36 pregões ... tem resistência a superar em 37,9 ... vai ou racha ? http://t.co/uebrtsVcus",
    "marks": [
      {
        "word": "resistência",
        "type": "rel"
      },
      {
        "word": "#ITUB4",
        "type": "arg0"
      },
      {
        "word": "em 37,9",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "resistência",
        "subscript": "rel"
      },
      {
        "word": "ITUB4",
        "subscript": "nsubj"
      },
      {
        "word": "9",
        "subscript": "obl"
      }
    ],
    "args": {
      "arg0": "#ITUB4",
      "arg1": "em 37,9"
    }
  },
  {
    "Texto": "#abev3 também andou recomendação e sobe forte . Continuo comprado . Vou entrar em #cemig4 por as Mm , de olho em uma resistência ~ 16.65",
    "marks": [
      {
        "word": "resistência",
        "type": "rel"
      },
      {
        "word": "em #cemig4",
        "type": "arg0"
      },
      {
        "word": "~ 16.65",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "resistência",
        "subscript": "rel"
      },
      {
        "word": "cemig4",
        "subscript": "obl"
      },
      {
        "word": "65",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "em #cemig4",
      "arg1": "~ 16.65"
    }
  },
  {
    "Texto": "#PETR4 Sentindo resistência de a média de 144 em o diário . Cuidado a os comprados se não furar pra cima é mal sinal .",
    "marks": [
      {
        "word": "resistência",
        "type": "rel"
      },
      {
        "word": "#PETR4",
        "type": "arg0"
      },
      {
        "word": "de a média de 144 em o diário",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "resistência",
        "subscript": "rel"
      },
      {
        "word": "PETR4",
        "subscript": "nsubj"
      },
      {
        "word": "a",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "#PETR4",
      "arg1": "de a média de 144 em o diário"
    }
  },
  {
    "Texto": "primeiro teste de a resistência e ela foi forte e segurou . Vai de novo ? #PETR4",
    "marks": [
      {
        "word": "resistência",
        "type": "rel"
      },
      {
        "word": "#PETR4",
        "type": "arg0"
      }
    ],
    "subscripts": [
      {
        "word": "resistência",
        "subscript": "rel"
      },
      {
        "word": "PETR4",
        "subscript": "parataxis:hashtag"
      }
    ],
    "args": {
      "arg0": "#PETR4",
      "arg1": "-"
    }
  },
  {
    "Texto": "PETR4 resistência muito forte em R$ 15,1 ... nova venda !",
    "marks": [
      {
        "word": "resistência",
        "type": "rel"
      },
      {
        "word": "PETR4",
        "type": "arg0"
      },
      {
        "word": "em R$ 15,1",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "resistência",
        "subscript": "rel"
      },
      {
        "word": "PETR4",
        "subscript": "parataxis"
      },
      {
        "word": "1",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "PETR4",
      "arg1": "em R$ 15,1"
    }
  },
  {
    "Texto": "#RENT3 rompeu resistência , fez novo TH e vai subindo com ótimo volume hoje ! Linda !",
    "marks": [
      {
        "word": "resistência",
        "type": "rel"
      },
      {
        "word": "#RENT3",
        "type": "arg0"
      }
    ],
    "subscripts": [
      {
        "word": "resistência",
        "subscript": "rel"
      },
      {
        "word": "RENT3",
        "subscript": "nsubj"
      }
    ],
    "args": {
      "arg0": "#RENT3",
      "arg1": "-"
    }
  },
  {
    "Texto": "@jcvolemos VALE5 : Sentiu a resistência de 29,90 e lateralizou . Acima de 29,90 pode chegar a 31,33 e abaixo de 29,02 pode chegar a 27,59 .",
    "marks": [
      {
        "word": "resistência",
        "type": "rel"
      },
      {
        "word": "VALE5",
        "type": "arg0"
      },
      {
        "word": "de 29,90",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "resistência",
        "subscript": "rel"
      },
      {
        "word": "VALE5",
        "subscript": "nsubj"
      },
      {
        "word": "29",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "VALE5",
      "arg1": "de 29,90"
    }
  },
  {
    "Texto": "#PETR4 resistência em 14 a 14,15",
    "marks": [
      {
        "word": "resistência",
        "type": "rel"
      },
      {
        "word": "#PETR4",
        "type": "arg0"
      },
      {
        "word": "em 14 a 14,15",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "resistência",
        "subscript": "rel"
      },
      {
        "word": "PETR4",
        "subscript": "nmod"
      },
      {
        "word": "15",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "#PETR4",
      "arg1": "em 14 a 14,15"
    }
  },
  {
    "Texto": "interessante reparar que a #PETR4 repicou até a , agora , resistência de os R$ 15,7 ... De olho pra ver se respeita !",
    "marks": [
      {
        "word": "resistência",
        "type": "rel"
      },
      {
        "word": "a #PETR4",
        "type": "arg0"
      },
      {
        "word": "de os R$ 15,7",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "resistência",
        "subscript": "rel"
      },
      {
        "word": "PETR4",
        "subscript": "nsubj"
      },
      {
        "word": "os",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "a #PETR4",
      "arg1": "de os R$ 15,7"
    }
  },
  {
    "Texto": "ADR de a PETR4 , $PBR testando forte resistência agora em $ 12,55 . Topo triplo !",
    "marks": [
      {
        "word": "resistência",
        "type": "rel"
      },
      {
        "word": "ADR de a PETR4 , $PBR",
        "type": "arg0"
      },
      {
        "word": "em $ 12,55",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "resistência",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nsubj"
      },
      {
        "word": "55",
        "subscript": "obl"
      }
    ],
    "args": {
      "arg0": "ADR de a PETR4 , $PBR",
      "arg1": "em $ 12,55"
    }
  },
  {
    "Texto": "em a #PETR4 fiquemos de olho em como ela se comporta a o enfrentar os R$ 13,5 x ... Agora a região é resistência ... =/",
    "marks": [
      {
        "word": "resistência",
        "type": "rel"
      },
      {
        "word": "a região",
        "type": "arg0"
      }
    ],
    "subscripts": [
      {
        "word": "resistência",
        "subscript": "rel"
      },
      {
        "word": "região",
        "subscript": "nsubj"
      }
    ],
    "args": {
      "arg0": "a região",
      "arg1": "-"
    }
  },
  {
    "Texto": "#BBAS3 Suportes e resistências http://t.co/ls8561u4z4",
    "marks": [
      {
        "word": "resistência",
        "type": "rel"
      },
      {
        "word": "#BBAS3",
        "type": "arg0"
      }
    ],
    "subscripts": [
      {
        "word": "resistência",
        "subscript": "rel"
      },
      {
        "word": "BBAS3",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "#BBAS3",
      "arg1": "-"
    }
  },
  {
    "Texto": "#BBDC4 Suportes e resistências http://t.co/X3duJWXJaj",
    "marks": [
      {
        "word": "resistência",
        "type": "rel"
      },
      {
        "word": "#BBDC4",
        "type": "arg0"
      }
    ],
    "subscripts": [
      {
        "word": "resistência",
        "subscript": "rel"
      },
      {
        "word": "BBDC4",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "#BBDC4",
      "arg1": "-"
    }
  },
  {
    "Texto": "#GGBR4 suportes e resistências http://t.co/plOEedcYsN",
    "marks": [
      {
        "word": "resistência",
        "type": "rel"
      },
      {
        "word": "#GGBR4",
        "type": "arg0"
      }
    ],
    "subscripts": [
      {
        "word": "resistência",
        "subscript": "rel"
      },
      {
        "word": "GGBR4",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "#GGBR4",
      "arg1": "-"
    }
  },
  {
    "Texto": "#ELPL4 Suportes e resistências http://t.co/SgJSBiJ2TS",
    "marks": [
      {
        "word": "resistência",
        "type": "rel"
      },
      {
        "word": "#ELPL4",
        "type": "arg0"
      }
    ],
    "subscripts": [
      {
        "word": "resistência",
        "subscript": "rel"
      },
      {
        "word": "ELPL4",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "#ELPL4",
      "arg1": "-"
    }
  },
  {
    "Texto": "#GGBR4 Suportes e resistências http://t.co/Azw6yIEVI9",
    "marks": [
      {
        "word": "resistência",
        "type": "rel"
      },
      {
        "word": "#GGBR4",
        "type": "arg0"
      }
    ],
    "subscripts": [
      {
        "word": "resistência",
        "subscript": "rel"
      },
      {
        "word": "GGBR4",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "#GGBR4",
      "arg1": "-"
    }
  },
  {
    "Texto": "#VALE5 Suportes e resistências http://t.co/GpppnI8nXZ",
    "marks": [
      {
        "word": "resistência",
        "type": "rel"
      },
      {
        "word": "#VALE5",
        "type": "arg0"
      }
    ],
    "subscripts": [
      {
        "word": "resistência",
        "subscript": "rel"
      },
      {
        "word": "VALE5",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "#VALE5",
      "arg1": "-"
    }
  },
  {
    "Texto": "#PETR4 Suportes e resistências http://t.co/6EAceFcbLI",
    "marks": [
      {
        "word": "resistência",
        "type": "rel"
      },
      {
        "word": "#PETR4",
        "type": "arg0"
      }
    ],
    "subscripts": [
      {
        "word": "resistência",
        "subscript": "rel"
      },
      {
        "word": "PETR4",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "#PETR4",
      "arg1": "-"
    }
  },
  {
    "Texto": "#PDGR3 Suportes e resistências http://t.co/2HnLmAflrF",
    "marks": [
      {
        "word": "resistência",
        "type": "rel"
      },
      {
        "word": "#PDGR3",
        "type": "arg0"
      }
    ],
    "subscripts": [
      {
        "word": "resistência",
        "subscript": "rel"
      },
      {
        "word": "PDGR3",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "#PDGR3",
      "arg1": "-"
    }
  },
  {
    "Texto": "#ELET3 Suportes e resistências http://t.co/juDMDBysvA",
    "marks": [
      {
        "word": "resistência",
        "type": "rel"
      },
      {
        "word": "#ELET3",
        "type": "arg0"
      }
    ],
    "subscripts": [
      {
        "word": "resistência",
        "subscript": "rel"
      },
      {
        "word": "ELET3",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "#ELET3",
      "arg1": "-"
    }
  },
  {
    "Texto": "#SBSP3 Suportes e resistências http://t.co/OMWegMGnCl",
    "marks": [
      {
        "word": "resistência",
        "type": "rel"
      },
      {
        "word": "#SBSP3",
        "type": "arg0"
      }
    ],
    "subscripts": [
      {
        "word": "resistência",
        "subscript": "rel"
      },
      {
        "word": "SBSP3",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "#SBSP3",
      "arg1": "-"
    }
  },
  {
    "Texto": "#EMBR3 Suportes e resistências http://t.co/CVAfnWlV5B",
    "marks": [
      {
        "word": "resistência",
        "type": "rel"
      },
      {
        "word": "#EMBR3",
        "type": "arg0"
      }
    ],
    "subscripts": [
      {
        "word": "resistência",
        "subscript": "rel"
      },
      {
        "word": "EMBR3",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "#EMBR3",
      "arg1": "-"
    }
  },
  {
    "Texto": "#DTEX3 Suportes e resistências http://t.co/sCGIBhuRK5",
    "marks": [
      {
        "word": "resistência",
        "type": "rel"
      },
      {
        "word": "#DTEX3",
        "type": "arg0"
      }
    ],
    "subscripts": [
      {
        "word": "resistência",
        "subscript": "rel"
      },
      {
        "word": "DTEX3",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "#DTEX3",
      "arg1": "-"
    }
  },
  {
    "Texto": "#ITUB4 Suportes e resistências http://t.co/nzeOztWBDR",
    "marks": [
      {
        "word": "resistência",
        "type": "rel"
      },
      {
        "word": "#ITUB4",
        "type": "arg0"
      }
    ],
    "subscripts": [
      {
        "word": "resistência",
        "subscript": "rel"
      },
      {
        "word": "ITUB4",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "#ITUB4",
      "arg1": "-"
    }
  },
  {
    "Texto": "#CSNA3 Suportes e resistências http://t.co/wsa7pDqtCe",
    "marks": [
      {
        "word": "resistência",
        "type": "rel"
      },
      {
        "word": "#CSNA3",
        "type": "arg0"
      }
    ],
    "subscripts": [
      {
        "word": "resistência",
        "subscript": "rel"
      },
      {
        "word": "CSNA3",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "#CSNA3",
      "arg1": "-"
    }
  },
  {
    "Texto": "#USIM5 Suportes e resistências http://t.co/GxJrLiR3sS",
    "marks": [
      {
        "word": "resistência",
        "type": "rel"
      },
      {
        "word": "#USIM5",
        "type": "arg0"
      }
    ],
    "subscripts": [
      {
        "word": "resistência",
        "subscript": "rel"
      },
      {
        "word": "USIM5",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "#USIM5",
      "arg1": "-"
    }
  },
  {
    "Texto": "nova resistência por a frente de a #PETR4 ... os R$ 12,95 ~ 13 ... Vamos ver se fura ! =)",
    "marks": [
      {
        "word": "resistência",
        "type": "rel"
      },
      {
        "word": "de a #PETR4",
        "type": "arg0"
      },
      {
        "word": "os R$ 12,95 ~ 13",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "resistência",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod"
      },
      {
        "word": "13",
        "subscript": "parataxis"
      }
    ],
    "args": {
      "arg0": "de a #PETR4",
      "arg1": "os R$ 12,95 ~ 13"
    }
  },
  {
    "Texto": "Dizem que onde tem gap , tem forte resistência . Somado a isso temos em R$ 16,96 os 61,8 % de fibonacci . #PETR4",
    "marks": [
      {
        "word": "resistência",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "resistência",
        "subscript": "rel"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "-"
    }
  },
  {
    "Texto": "@Live_Trade Bom dia meu amigo , e o KING KONG ( #petr4 ) , sabe me dizer suporte e resistência ? abraço",
    "marks": [
      {
        "word": "resistência",
        "type": "rel"
      },
      {
        "word": "( #petr4 )",
        "type": "arg0"
      }
    ],
    "subscripts": [
      {
        "word": "resistência",
        "subscript": "rel"
      },
      {
        "word": "petr4",
        "subscript": "appos"
      }
    ],
    "args": {
      "arg0": "( #petr4 )",
      "arg1": "-"
    }
  },
  {
    "Texto": "PETR4 disparando pra cima ! Depois de meses de queda livre qualquer preço é resistencia ! rsrs",
    "marks": [
      {
        "word": "resistência",
        "type": "rel"
      },
      {
        "word": "qualquer preço",
        "type": "arg0"
      }
    ],
    "subscripts": [
      {
        "word": "resistência",
        "subscript": "rel"
      },
      {
        "word": "preço",
        "subscript": "nsubj"
      }
    ],
    "args": {
      "arg0": "qualquer preço",
      "arg1": "-"
    }
  },
  {
    "Texto": "#Boas ... Ainda tenho dúvidas ... o + Doido que busca SUPORTE em a #Petr4 e RESISTENCIA em o S&P ... hehehe",
    "marks": [
      {
        "word": "resistência",
        "type": "rel"
      },
      {
        "word": "em o S&P",
        "type": "arg0"
      }
    ],
    "subscripts": [
      {
        "word": "resistência",
        "subscript": "rel"
      },
      {
        "word": "P",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "em o S&P",
      "arg1": "-"
    }
  },
  {
    "Texto": "BBAS3 Em o diário sentiu resistência de a média de 144 que foi perdida ontem por frescura de os Investidores .",
    "marks": [
      {
        "word": "resistência",
        "type": "rel"
      },
      {
        "word": "BBAS3",
        "type": "arg0"
      },
      {
        "word": "de a média de 144 que foi perdida ontem por frescura de os Investidores",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "resistência",
        "subscript": "rel"
      },
      {
        "word": "BBAS3",
        "subscript": "nsubj"
      },
      {
        "word": "a",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "BBAS3",
      "arg1": "de a média de 144 que foi perdida ontem por frescura de os Investidores"
    }
  },
  {
    "Texto": "@glaucorios Sanb11 12,9 resist e Obj , Hj fechou acima , se continuidade 13,67 e 14,05 ... se comprado aperta stop porque todas em região obj",
    "marks": [
      {
        "word": "resistência",
        "type": "rel"
      },
      {
        "word": "Sanb11",
        "type": "arg0"
      },
      {
        "word": "12,9",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "resistência",
        "subscript": "rel"
      },
      {
        "word": "Sanb11",
        "subscript": "nmod"
      },
      {
        "word": "9",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "Sanb11",
      "arg1": "12,9"
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