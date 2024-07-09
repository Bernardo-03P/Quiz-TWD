let resultado = document.getElementById("Resultado")
let select1 = document.getElementById("Questionselect")
let select2 = document.getElementById("Questionselect2")
let select3 = document.getElementById("Questionselect3")

function MostrarResultado(){

    if (select1.value == 10 || select2.value == 10 || select3.value == 10)
        { alert("Selecione todas as respostas"); 
            
            return; 

        } else{ alert("Quiz Finalizado! Confira sua pontuação")} 

        resultado.value = (Number(select1.value) + Number(select2.value) + Number(select3.value)) 
        
        
        if(resultado.value == 3)
            { alert("Parabéns você acertou todas as perguntas!") } 
        
        else{ resultado.value }
}
