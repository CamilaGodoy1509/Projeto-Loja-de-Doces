
function ponto() {
    var serie = document.getElementById('serie');
    if(serie.value.length == 3) {
        serie.value += ".";
   }
}

var produtos = JSON.parse(localStorage.getItem("produtos"))
if (produtos == null) {
    produtos = []
}

    function cadastro() {
       
    produtos.push ({
        serie: document.getElementById('serie').value,
        nome: document.getElementById('name').value,
        preco: document.getElementById('price').value,
        tipo: document.getElementById('tipo').value,
        descricao: document.getElementById('descricao').value
    });

    const json_produtos = JSON.stringify(produtos);
    localStorage.setItem ("produtos", json_produtos);
    
}

















