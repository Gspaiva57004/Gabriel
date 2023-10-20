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
}/*
let numero = Number(document.getElementById("numero").value);

function tabuada(){
    for(let y=0; y<=10 ; x++)
     tabuada += numero + "x" + y + "=" + numero * y + "<br>";
}*/

const listaDeAlunos = ["Matheus", "Laura", "João", "Maria"];

function mostrarLista(){
    let i = 0
    let  lista = ""

    while(i < listaDeAlunos.length){
        lista += listaDeAlunos[i] + " <br>" 
        i++
    }
    document.getElementById("lista2").innerHTML = lista
}