function calcularDoisNumeros(operacao){
    
    let num1 = Number(document.getElementById('num1').value)
    let num2 = Number(document.getElementById('num2').value)

    let resposta

    switch(operacao){
        case "*": resposta= num1 * num2
        break
        case "+": resposta = num1 + num2
        break
        case "-": resposta = num1 - num2
        break
        case "/": resposta = num1 / num2
    }
    document.getElementById("resultado").innerHTML = resposta
}
let Number = " ";

function tabuada(){
    for(let i=0; i<=10 ; i++)
     tabuada += Number + "* " + 1 + "=" + Number;
  }