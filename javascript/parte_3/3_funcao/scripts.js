// function parimp(n) {
//     if(n%2==0) {
//         return 'par'
//     } else {
//         return 'impar'
//     }
// }

// console.log(parimp(11))

// para parâmetros não definidos na chamada
// function soma(n1=0, n2=0) {
//     return n1 + n2
// }

// console.log(soma(5))

// fatorial(sequenciamento de número)
// function fatorial(n) {
//     let fat = 1
//     for(let c = n; c > 1; c--) {
//         fat *= c
//     }
//     return fat
// }

// console.log(fatorial(5))

// recursividade (uma outra forma de fatorar)
function fatorial(n) {
    if (n == 1) {
        return 1
    } else {
        return n * fatorial(n-1)
    }
}

console.log(fatorial(5))