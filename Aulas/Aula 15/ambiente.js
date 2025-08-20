let num = [5,8,9] // cria um vetor
num[4] = 6 // adiciona na posiçao 4 o numero 6
num.push(7) // adiciona o numero no fim do vetor
num.length // mostra o tamanho do vetor
num.sort() //Coloca o vetor em ordem crescente


console.log(`Nosso vetor é o ${num}. Esse vetor tem ${num.length}` )

for(let i = 0;i<num.length;i++){
    num[i] = 23
}

console.log(`Nosso vetor é o ${num} `)

for(let i in num) {
    console.log(num[i])
}

let pos = num.indexOf(2)

if (pos == -1){
    console.log('Valor não encontrado')
}   else {
        console.log(`o valor 23 está na posição: ${pos}`)
    }
