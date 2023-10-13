function teste1(){
    document.getElementById("teste1").innerHTML= "Olá, Gabriel aqui"
    document.querySelector('#teste1').style.color ='blue'
    document.querySelector('#teste1').style.fontSize ='100px'
}
function teste2(){
    document.getElementById("teste2").innerHTML = "Olá, Gabriel aqui"
    document.querySelector('#teste2').style.color ='blue'
    document.querySelector('#teste2').style.fontSize ='100px'
}
function calcularDoisNumeros(num1, num2, operacao){
    let resposta

    if(operacao == "*"){
        resposta = multiplicar(num1, num2)
    }
    //const resposta = divisao(num1,num2)
    document.getElementById("resultado").innerHTML = resposta
}
function multiplicar(num1, num2){
    return num1*num2
}
function divisao(num1, num2){
    return num1/num2
}