function toReceive()
{
    var name = document.getElementById("texto").value;
    document.getElementById("txt").innerHTML= " ¡Hola " + name +"!" + ", ¿quieres jugar?";        
    
}        

function play1()
    {
        var yesIWant = document.getElementById("written1").value;
        document.getElementById("written1").innerHTML= " ¡Comencemos a jugar!. Pasa a las preguntas." ;        
        
    } 
    
function play2()
    {
        var iDoNotWant = document.getElementById("written1").value;
        document.getElementById("written1").innerHTML= "Jugaremos en otra oportunidad." ;        
        
    } 

function question1Option1()
    {
        var anwer1Option1 = document.getElementById("written2").value;
        document.getElementById("written2").innerHTML= "¡Incorrecto!. No han egresados hombres, pasa a la siguiente pregunta." ;        
        
    } 
    
function question1Option2()
    {
        var anwer1ption2 = document.getElementById("written2").value;
        document.getElementById("written2").innerHTML= "¡Correcto!. Pasa a la siguiente pregunta." ;        
        
    } 
    
function question2Option1()
    {
        var anwer2Option1 = document.getElementById("written3").value;
        document.getElementById("written3").innerHTML= "¡Incorrecto!. No hay Laboratoria en Concepción . Pasa a la siguiente pregunta." ;        
        
    } 
    
function question2Option2()
    {
        var anwer2Option2 = document.getElementById("written3").value;
        document.getElementById("written3").innerHTML= "¡Correcto!. Pasa a la siguiente pregunta." ;        
        
    }

function question3Option1()
    {
        var anwer3Option1 = document.getElementById("written4").value;
        document.getElementById("written4").innerHTML= "¡Correcto!. Pasa a la siguiente pregunta." ;        
        
    } 
    
function question3Option2()
    {
        var anwer3Option2 = document.getElementById("written4").value;
        document.getElementById("written4").innerHTML= "¡Incorrecto!. El bootcamp dura 6 meses. Pasa a la siguiente pregunta." ;        
        
    } 


