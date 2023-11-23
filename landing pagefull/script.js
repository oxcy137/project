let boton = document.getElementById("icono");
let enlances = document.getElementById("enlaces");
let contador = 0;

boton.addEventListener("click", function(){
        if(contador==0){
         enlances.className = ("enlaces dos")
         contador=1;
        
        }else{
            enlances.classList.remove("dos")
            enlances.className = ("enlaces uno")
            contador=0;
            }
        })

