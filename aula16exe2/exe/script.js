let num = document.getElementById('fnum')
let lista = document.getElementById('flista')
let res = document.getElementById('res')
let valores = []

function isNumero(num) {
    if(Number(num)>=1 && Number(num) <= 100){
        return true
    } else {
        return false
    }
}

function inLista(num, valores) {
    if (valores.indexOf(Number(num)) != -1) { //se o numero dentro de valores for diferente de não existe (ou seja existe)
        return false //retornar falso
    } else {
        return true
    }
}

function adicionar() {
    if(isNumero(num.value) && inLista(num.value, valores)) { //criou os parâmetros dos números e se esta ou não na lista
        valores.push(Number(num.value))
        let item = document.createElement('option') //criou uma variável para option pois é dentro do select
        item.text = `Valor ${num.value} adicionado` //configurou o item que vai aparecer dentro do select
        lista.appendChild(item) //adicionou o item dentro do select
        res.innerHTML = '' //qunado adicionar mais um elemento vai limpar o resultado
    } else {
        window.alert('Valor inválido ou já encontrado na lista')
    }
    num.value = '' // para limpar a caixa
    num.focus() // para focar no input 
}

function limpar() {
    lista.innerHTML = '' //para limpar a lista
    res. innerHTML = '' //para limpar o resultado
}

function finalizar () {
    if (valores.length == 0){
        window.alert ('Adicione os valores antes de finalizar')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores ) { //para cada posição em valores
            soma += valores[pos]
            if(valores[pos] > maior) //se os valores na posição pos forem maior que o "maior"
                maior = valores[pos]
            if (valores[pos] < menor) // se os valores na posição pos forem menor que o "menor"
                menor = valores[pos]
        }


        media = soma / tot
        res.innerHTML = ``
        res.innerHTML += `<p>Ao todo temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado é ${maior} e o menor é ${menor}.</p>`
        res.innerHTML += `<p>A soma de todos os valores é ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores é ${media}</p>`
    }
}