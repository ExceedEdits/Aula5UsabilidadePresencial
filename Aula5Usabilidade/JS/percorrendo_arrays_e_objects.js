itens_menu = ['Home', 'Contato', 'Sobre'];
document.write("<ul>");
for (const item of itens_menu){
    document.write("<li>" + item + "</li>")
};
document.write("</ul>");

const populacoes = {
    "Sao Paulo": 1000000000,
    "Santo Andre": 70000000,
    "Guarulhos": 130000000
}

for(const cidade in populacoes) {
    document.write('${cidade} tem ${populacoes[cidade]}')
}