
let firePosition = 1;


const spinChamber = () => {
    return Math.floor((Math.random() * 6) + 1);
};


const fireGun = (bulletPosition) => {
    
   
    const parrafoResultado = document.getElementById("resultado-juego");
    
    let mensaje;

  
    if (bulletPosition === firePosition) {
        mensaje = "¡You're dead! 💀";
    } else {
        mensaje = "¡Keep playing! 👍"; 
    }

   
    parrafoResultado.textContent = mensaje;
};


fireGun(spinChamber());