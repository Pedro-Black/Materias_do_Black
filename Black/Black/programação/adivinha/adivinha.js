document.write("<h1>Advinha o número que eu pensei!</h1>")

const numero = Math.floor(Math.random() * 100) + 1
let chute = 0
let tentativa = 1

while (numero !== chute && tentativa <= 7){
    chute = Number(prompt("Informe seu chute:"))

    if (numero === chute) document.write("Parabéns!")
    else if (numero > chute) alert("O número é maior!")
    else alert("O número é menor!")

    tentativa += 1
}

document.write ("<br/>Número que eu pensei: " + numero )
document.write ("<br/>Seu chute: " + chute)