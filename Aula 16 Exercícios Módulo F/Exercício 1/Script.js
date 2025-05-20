var vet = []

function Adicionar() {
    NumAdd = document.getElementById('NumAdd').value
    Tabela = document.getElementById('numeros')
    vet.push(NumAdd)
    Tabela.innerHTML = ``
    for(let i=0;i < vet.length ; i++) {
        let item = document.createElement(`option`)
        item.text = `Valor ${vet[i]} adicionado`
        Tabela.appendChild(item)
    }

    console.log(vet)
}

function Analizar() {
    res.innerHTML = ``
    res = document.getElementById('res')
    resposta.innerHTML = 'Teste <br> Testando'
    res.append(resposta)


}