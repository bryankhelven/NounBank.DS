document.addEventListener('DOMContentLoaded', function() {
    const data = [
        {
            Texto: "$ELET3 - Eletrobras (elet-n1) - Material A Disp. (indic. De Candidatos A Membros De o Ca) http://t.co/myIM01vKEt",
            marks: [
                { word: "Membros", type: "rel" },
                { word: "De o Ca", type: "arg1" }
            ],
            subscripts: [
                { word: "Membros", subscript: "rel" },
                { word: "De o Ca", subscript: "nmod" }
            ],
            args: {
                "arg1": "De o Ca",
            }
        },
        {
            Texto: "$ELET3 - Eletrobras (elet-n1) - Material A Disposicao (candidatos A Membros De o Ca E Cf) http://t.co/l9Z7Qm4mAV",
            marks: [
                { word: "Membros", type: "rel" },
                { word: "De o Ca E Cf", type: "arg1" }
            ],
            subscripts: [
                { word: "Membros", subscript: "rel" },
                { word: "De o Ca E Cf", subscript: "nmod" }
            ],
            args: {
                "arg1": "De o Ca E Cf",
            }
        },
        {
            Texto: "$RSID3 - Rossi Resid (rsid-nm) - Indicacao De Candidato A Membro De o Conselho De Admin. http://t.co/XAZrrT0xHk",
            marks: [
                { word: "Membro", type: "rel" },
                { word: "De o Conselho De Admin", type: "arg1" }
            ],
            subscripts: [
                { word: "Membro", subscript: "rel" },
                { word: "De o Conselho De Admin", subscript: "nmod" }
            ],
            args: {
                "arg1": "De o Conselho De Admin",
            }
        },
        {
            Texto: "$BRFS3 - Brf Sa (brfs) - Renuncia E Eleicao De Membros De o C.a. http://t.co/f41iizYOak",
            marks: [
                { word: "Membros", type: "rel" },
                { word: "De o C.a.", type: "arg1" }
            ],
            subscripts: [
                { word: "Membros", subscript: "rel" },
                { word: "De o C.a.", subscript: "nmod" }
            ],
            args: {
                "arg1": "De o C.a.",
            }
        },
        {
            Texto: "$BRFS3 - Brf Sa (brfs-nm) - Renuncia E Eleicao De Membros De o C.a. (complemento) http://t.co/0uRQWZmhv5",
            marks: [
                { word: "Membros", type: "rel" },
                { word: "De o C.a.", type: "arg1" }
            ],
            subscripts: [
                { word: "Membros", subscript: "rel" },
                { word: "De o C.a.", subscript: "nmod" }
            ],
            args: {
                "arg1": "De o C.a.",
            }
        },
        {
            Texto: "$CIEL3 - Cielo (ciel-nm) - Material A Disposicao (indicacao De Candidatos A Membros De o Ca http://t.co/3GExefQijD",
            marks: [
                { word: "Membros", type: "rel" },
                { word: "De o Ca", type: "arg1" }
            ],
            subscripts: [
                { word: "Membros", subscript: "rel" },
                { word: "De o Ca", subscript: "nmod" }
            ],
            args: {
                "arg1": "De o Ca",
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

        // Adiciona uma linha de divisão após cada item, exceto o último
        if (index < data.length - 1) {
            const dividerRow = document.createElement('tr');
            const dividerCell = document.createElement('td');
            dividerCell.colSpan = 3; // Cobrir todas as colunas da tabela
            dividerCell.style.borderBottom = '1px solid #ccc';
            dividerRow.appendChild(dividerCell);
            tableBody.appendChild(dividerRow);
        }
    });
});
