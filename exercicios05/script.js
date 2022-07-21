let valor = document.querySelector('input#txtnum')
let tab = document.getElementById('valtab')
let res = document.querySelector('div#res')
let tabela = []


function adicionar()
{
    if (isNumero(valor.value) && !inLista(valor.value, tabela)) {
        // Valor válido e está na lista
        tabela.push(Number(valor.value))                        // Adicionar no vetor
        let item = document.createElement('option')             // Criar um item para o select
        item.text = `Valor ${Number(valor.value)} adicionado`
        tab.appendChild(item)
        res.innerHTML = ''
    }
    else {
        // Valor já na lista ou inválido
        alert('Valor inválido ou já encontrado na lista!')
    }
    valor.value = ''    // Apaga o número enviado para outra digitação
    valor.focus()       // Deixa focado para uma nova digitação  
}

function isNumero(num)
// Verificar se o número está válido (1 - 100)
{
    if (Number(num) >= 1 && Number(num) <= 100) {
        return true
    }
    else {
        return false
    }
}

function inLista (num, lis)
// Verificar se o número NÃO está na lista
{
    if (lis.indexOf(Number(num)) != -1) {
        return true
    }
    else {
        return false
    }
}

function finalizar()
{
    if (tabela.length == 0) {
        alert('Adicione valor antes de finalizar!')
    }
    else {
        let maior = 0
        let menor = 101
        let soma = 0
        for (let i in tabela)
        {
            soma += tabela[i]
            if (tabela[i] > maior) {
                maior = tabela[i]
            }
            if (tabela[i] < menor) {
                menor = tabela[i]
            }
        }
        res.innerHTML = `<p>Ao todo, temos ${tabela.length} números cadastrados.</p>
                         <p>O maior valor informado foi ${maior}</p>
                         <p>O menor valor informado foi ${menor}</p>
                         <p>Somando todos os valores, temos ${soma}</p>
                         <p>A média dos valores digitados é ${soma / tabela.length}</p>`
    }
}
