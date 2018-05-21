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
