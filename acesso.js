document.addEventListener('DOMContentLoaded', function() {
    const data = [
        {
            Texto: "Vale diz que acesso de Valemax a a China é desejável, mas não necessário: Os navios, com capac ... http://t.co/DUDYluUL6A #infomoney#vale5",
            marks: [
                { word: "acesso", type: "rel" },
                { word: "Valemax", type: "arg0" },
                { word: "China", type: "arg1" }
            ],
            subscripts: [
                { word: "acesso", subscript: "rel" },
                { word: "Valemax", subscript: "nmod" },
                { word: "China", subscript: "nmod" }
            ],
            args: {
                "arg0": "Valemax",
                "arg1": "China"
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

        // Adiciona uma linha de divisão após cada item, exceto o último
        if (index < data.length - 1) {
            const dividerRow = document.createElement('tr');
            const dividerCell = document.createElement('td');
            dividerCell.colSpan = 4; // Cobrir todas as colunas da tabela
            dividerCell.style.borderBottom = '1px solid #ccc';
            dividerRow.appendChild(dividerCell);
            tableBody.appendChild(dividerRow);
        }
    });
});
