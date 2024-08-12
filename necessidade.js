document.addEventListener('DOMContentLoaded', function() {
    const data = [
        {
            Texto: "PPS é diff de os outros Socialistas? Pasadenagate: novos documentos complicam Dilma e apontam necessidade de CPI #PETR4 http://t.co/XvDEzBtB98",
            marks: [
                { word: "necessidade", type: "rel" },
                { word: "novos documentos", type: "arg0" },
                { word: "de CPI", type: "arg1" }
            ],
            subscripts: [
                { word: "necessidade", subscript: "rel" },
                { word: "novos documentos", subscript: "nsubj" },
                { word: "de CPI", subscript: "nmod" }
            ],
            args: {
                "arg0": "novos documentos",
                "arg1": "de CPI",
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
