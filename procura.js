document.addEventListener('DOMContentLoaded', function() {
    const data = [
        {
            Texto: "@ferrisss @dfittarelli @HudsonPF Correção : Posição aberta #PETR3 E as duas PETR estão em destaque em a procura de D-1",
            marks: [
                { word: "procura", type: "rel" },
                { word: "de D-1", type: "arg1" }
            ],
            subscripts: [
                { word: "procura", subscript: "rel" },
                { word: "de D-1", subscript: "nmod" }
            ],
            args: {
                "arg1": "de D-1",
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
<td class="${item.args.arg1 ? 'arg1' : ''}">${item.args.arg1 || '-'}</td>
<td>${textWithMarks}</td>
`;

        tableBody.appendChild(row);
    });
});
