function calcula_IMC() {
    const nome = document.getElementById(`nome`).value;
    const peso = Number(document.getElementById(`Peso`).value);
    const altura = Number(document.getElementById(`Altura`).value);

    const IMC = ( peso / (altura * altura))
    let resposta = document.getElementById(`Calculo`)

    if (IMC < 15.99) {
        resposta = `Magreza grave`
        document.getElementById(`resultado-categoria`).className = `perigo`
    } else if (IMC >= 16  && IMC <= 16.99) {
        resposta = `Magreza moderada`
        document.getElementById(`resultado-categoria`).className = `alerta`
    }else if (IMC >= 17 && IMC <= 18.5) {
        resposta = `Magreza leve`
        document.getElementById(`resultado-categoria`).className = `sem risco a vida`
    } else if(IMC >= 18.5 && IMC <= 24.9){
        resposta = `Saudável`
        document.getElementById(`resultado-categoria`).className = `Saudavel`
        document.getElementById(`resultado_nome`).innerHTML = `Nome: <br>${nome} <br><br> IMC:<br>${IMC.toFixed(2) }<br><br> Estado: <br>${resposta} `
    }else if ( IMC >= 25 && IMC <= 29.9) {
        resposta = `Sobrepeso`
        document.getElementById(`resultado-categoria`).className = `sem risco`
    }else if( IMC >= 30 && IMC <= 34.9){
        resposta = `Obesidade Grau 1`
        document.getElementById(`resultado-categoria`).className = `alerta`
    }else if (IMC >= 35 && IMC <= 39.9) {
        resposta = `Obesidade Grau 2 (Severa)`
        document.getElementById(`resultado-categoria`).className = `perigo`
    } else {
        resposta = `Obesidade Grau 3 (Mórbida)`
        document.getElementById(`resultado-categoria`).className = `procure ajuda médica`
    }
        
    

    
    
}