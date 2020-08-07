var produtos = JSON.parse(localStorage.getItem("produtos"))
if (produtos == null) {
    produtos = []
}

var tabela = document.getElementById('tabela')

for (i = 0; i < produtos.length; i++) {
    var produto = produtos[i]
    var serie = produto['serie']
    var nome = produto['nome']
    var preco = produto['preco']
    var tipo = produto['tipo']
    var descricao = produto['descricao']

    var linha = tabela.insertRow(1)
    var coluna = [linha.insertCell(0),linha.insertCell(1), linha.insertCell(2), linha.insertCell(3), linha.insertCell(4)]
    coluna[0].innerHTML = serie
    coluna[1].innerHTML = nome
    coluna[2].innerHTML = preco
    coluna[3].innerHTML = tipo
    coluna[4].innerHTML = descricao
}
