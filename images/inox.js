function bookClick(){
    alert("Proceeding to book tickets");
    mvname =document.getElementById("movieselect").value;
    tickno = document.getElementById("tickno").value;
    document.getElementById("lblname").innerHTML= document.getElementById("movieselect").value;
    document.getElementById("lbltickets").innerHTML= document.getElementById("tickno").value + " " +"tickets";
    document.getElementById("lbldate").innerHTML= document.getElementById("dateselect").value;
    document.getElementById("lbltime").innerHTML= document.getElementById("timeselect").value;
    document.getElementById("lblcinema").innerHTML= document.getElementById("locselect").value;
    
    switch(mvname){
        case "Devara":
            document.getElementById("mvimg").src="../public/images/devara.jpg";
            break;
        case "Vettaiyan":
            document.getElementById("mvimg").src="../public/images/vettayan.jpg";
            break;
            case "Viswam":
            document.getElementById("mvimg").src="../public/images/viswam.jpg";
            break;
        case "Jigra":
            document.getElementById("mvimg").src="../public/images/jigra.jpg";
            break;
            case "Kung Fu Panda 4":
            document.getElementById("mvimg").src="../public/images/kungfu.jpg";
            break;
        case "The Garfield Movie":
            document.getElementById("mvimg").src="../public/images/garfield.jpg";
            break;
            default:
                document.getElementById("mvimg").src="../public/images/inoxlogo.jpg"
    }

    stotal = parseInt(tickno * 295);
    document.getElementById("stotal").innerHTML =`${tickno} x &#8377; 295 = &#8377; ${stotal} /-`;
    gtotal =parseFloat(stotal + 3.75 + 21);
    document.getElementById("gtotal").innerHTML =`&#8377; ${gtotal} /-`;



}

function proceedClick(){
   alert("Booking successful.") 
}