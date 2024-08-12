document.addEventListener('DOMContentLoaded', function() {
    const data = [
        {
            Texto: "é ... quase em a máxima . Isso após testar o suporte em os R$ 15,5 ... #PETR4 dá medo ... o.O",
            marks: [
                { word: "medo", type: "rel" },
                { word: "#PETR4", type: "arg1" }
            ],
            subscripts: [
                { word: "medo", subscript: "rel" },
                { word: "#PETR4", subscript: "nmod" }
            ],
            args: {
                "arg1": "#PETR4",
            }
        },
        {
            Texto: "#petr4 sem medo de errar , ou essa alta marcou o fim de a queda de uma década , ou é só mais um repique momentâneo . Esse ano ainda tem eleições !",
            marks: [
                { word: "medo", type: "rel" },
                { word: "#petr4", type: "arg1" }
            ],
            subscripts: [
                { word: "medo", subscript: "rel" },
                { word: "#petr4", subscript: "nmod" }
            ],
            args: {
                "arg1": "#petr4",
            }
        },
        {
            Texto: "@ferrisss oi Ferri , estou comprado em CIEL3 q já subiu bastante . Em a sua opinião vale a pena trocar por MMX ? Medo de o fantasma de o Eike ...",
            marks: [
                { word: "Medo", type: "rel" },
                { word: "de o fantasma de o Eike", type: "arg1" }
            ],
            subscripts: [
                { word: "Medo", subscript: "rel" },
                { word: "de o fantasma de o Eike", subscript: "nmod" }
            ],
            args: {
                "arg1": "de o fantasma de o Eike",
            }
        },
        {
            Texto: "@Live_Trade eu to cagando de medo de essa #PETR4 ! ! ! to com posição grande desde o rompimento de os 14,20 dia 24/03 ! king kong adestrado por o PT",
            marks: [
                { word: "medo", type: "rel" },
                { word: "eu", type: "arg0" },
                { word: "de essa #PETR4", type: "arg1" }
            ],
            subscripts: [
                { word: "medo", subscript: "rel" },
                { word: "eu", subscript: "nsubj" },
                { word: "de essa #PETR4", subscript: "nmod" }
            ],
            args: {
                "arg0": "eu",
                "arg1": "de essa #PETR4",
            }
        }
    ];

    const tableBody = document.getElementById('relations-table').getElementsByTagName('tbody')[0];

    data.forEach((item, index) => {
        let textWithMarks = item.Texto;

        // Aplicar cores aos argumentos
        item.marks.forEach(mark => {
            const pattern = new RegExp(`\\b(${mark.word})\\b`, 'g');
            textWithMarks = textWithMarks.replace(pattern, `<span class="${mark.type}">$1</span>`);
        });

        // Aplicar subscritos
        item.subscripts.forEach(sub => {
            const pattern = new RegExp(`\\b(${sub.word})\\b`, 'g');
            textWithMarks = textWithMarks.replace(pattern, `$1<sub>${sub.subscript}</sub>`);
        });

        // Criar e adicionar a linha na tabela
        const row = document.createElement('tr');
        row.innerHTML = `
<td>${index + 1}</td>
<td class="${item.args.arg0 ? 'arg0' : ''}">${item.args.arg0 || '-'}</td>
<td class="${item.args.arg1 ? 'arg1' : ''}">${item.args.arg1 || '-'}</td>
<td>${textWithMarks}</td>
`;

        tableBody.appendChild(row);
    });
});
