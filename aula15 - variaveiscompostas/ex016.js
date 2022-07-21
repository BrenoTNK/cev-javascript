let num = [3, 7, 1, 8, 9, 0]

num.sort()                              // Coloca em ordem crescente;
num.push(2)                             // Cria um novo elemento no final da array;
num[3] = 6                              // Coloca um valor em uma posição em especifica;
console.log(num)                        // Não mostra na ordem correta porque os valores foram adicionados depois
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)



    /*          Vetor com for         */


let valores = [5, 7, 1, 6, 9, 2]

for (let i = 0; i < valores.length; i++)
{
    console.log(`A posição ${i} tem o valor ${valores[i]}`)
}



    /*          Vetor com for in      */



for (let pos in valores)
{
    console.log(`O valor na ${pos}° é ${valores[pos]}`)
}

let p = valores.indexOf(6)
if (p == -1) {
    // Se o valor não existir, ele retorna -1
    console.log(`Valor não encontrado ${p}`)
}
else {
    console.log(`O número está na posição ${p}`)
}
