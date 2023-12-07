let num = [5, 8, 2]

// adiciona um elemento na última posição
num[3] = 6

// acrescenta outro elemento mais específico na última posição
num.push(7)

// para saber o comprimento do array
console.log(num.length)

// para ordenar os elementos dentro do array
num.sort()

console.log(num)

// para retirar um elemento desejado
num.push(0)

// para buscar uma posição do elemento e retorna sua chave
let pos = num.indexOf(-1)
if (pos == -1) {
    console.log(`O valor não foi encontrado!`)
} else {
    console.log(`O valor está na posição ${pos}`)
}