let valores = [4, 5, 6, 7, 8, 9]

// primeira forma
// for(let pos=0; pos < valores.length; pos++) {
//     console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
// }

// segunda forma
for(let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
