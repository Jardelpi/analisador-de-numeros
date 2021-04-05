let nm1 = document.querySelector('input#nm1')
let lista = document.getElementById('lista')
let res = document.getElementById('res')
let valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true

    }
    else{
        return false
    }

}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    }
    else{
    return false
    }
}

function adicionar() {

    if (isNumero(nm1.value) && !inLista(nm1.value, valores)) {
        valores.push(Number(nm1.value))
        let item = document.createElement('option')
        item.text = `o valor ${nm1.value} foi adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    }
    else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
    nm1.value = ''
    nm1.focus()
}

function resultado() {
    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar')
    }
    else{
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for ( let pos in valores){
            soma += valores[pos]
            if (valores[pos] > maior) {
                maior = valores[pos]
                if (valores[pos] < menor) {
                    menor = valores[pos]
                    
                }
                
            }
        }
        media = (soma/tot)
        res.innerHTML = ''
        res.innerHTML += `<p> Ao todo temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p> o maior número adicionado é ${maior}`
        res.innerHTML += `<p> o menor número adicionado é ${menor}`
        res.innerHTML += `<p> a soma dos números adicionados é ${soma}.</p> `
        res.innerHTML += `<p> a media dos números digitados é ${media}. </p>`
    }
}







