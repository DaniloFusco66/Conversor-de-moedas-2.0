console.log("segunda aula")

console.log(399*5)

function motivação(){
    console.log("nada ruim que não possa piorar")
}

motivação("viu o valor do dólar... legal né")

motivação(" 7x1 pra alemanha ")


//agora é sério...

function converter(){

    //pegar valor do campo

    let valorEmDolar  = document.querySelector("#valor").value
    //DOM - Document Object Model

    //converter valor do campo em numero
    let valorEmDolarNumerico = parseFloat(valorEmDolar)

    let cotacaoDolar = 5
    let valorEmReal = valorEmDolarNumerico * cotacaoDolar
    
    //inserir resultado na tela

    document.querySelector("valorConvertido").innerHTML = "o resultado em real é R$ " + valorEmReal.toFixed(2)
}


//notas:
//parseFloat --> converte texto em decimal
//parseInt --> converte de texto para inteiro



















