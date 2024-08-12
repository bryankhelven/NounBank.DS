document.addEventListener('DOMContentLoaded', function() {
    const data = [
        {
            Texto: "@RivanewsBRKM5 15min: com formação de pivot de alta , após divergência de alta em o estocástico %k ( 12.3 )",
            marks: [
                { word: "divergência", type: "rel" },
                { word: "de alta em o estocástico %k ( 12.3 )", type: "arg0" }
            ],
            subscripts: [
                { word: "divergência", subscript: "rel" },
                { word: "de alta em o estocástico %k ( 12.3 )", subscript: "nmod" }
            ],
            args: {
                "arg0": "de alta em o estocástico %k ( 12.3 )",
            }
        },
        {
            Texto: "A divergência de baixa formada em o diário de #CMIG4 serviu apenas para fechar o descolamento com o RK ... Leia mais : http://t.co/QL31D4iUAV",
            marks: [
                { word: "divergência", type: "rel" },
                { word: "de baixa formada em o diário de #CMIG4", type: "arg0" }
            ],
            subscripts: [
                { word: "divergência", subscript: "rel" },
                { word: "de baixa formada em o diário de #CMIG4", subscript: "nmod" }
            ],
            args: {
                "arg0": "de baixa formada em o diário de #CMIG4",
            }
        },
        {
            Texto: "#GGBR4 apresentando divergência de alta . Aguardando sinais mais claros de reversão para alta . http://t.co/3GLBoEdZbb",
            marks: [
                { word: "divergência", type: "rel" },
                { word: "de alta", type: "arg0" }
            ],
            subscripts: [
                { word: "divergência", subscript: "rel" },
                { word: "de alta", subscript: "nmod" }
            ],
            args: {
                "arg0": "de alta",
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
<td class="${item.args.arg2 ? 'arg2' : ''}">${item.args.arg2 || '-'}</td>
<td>${textWithMarks}</td>
`;

        tableBody.appendChild(row);
    });
});
