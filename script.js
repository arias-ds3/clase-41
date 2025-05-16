function moverAstronauta() {
    const astro = document.getElementById('astronauta');
    astro.style.transform = 'translateX(700px) rotate(360deg) scale(0.8)';
}

function resetAstronauta() {
    const astro = document.getElementById('astronauta');
    astro.style.transform = 'translateX(0) rotate(0) scale(1)';
}

function animarAstronauta() {
    const astro = document.getElementById('astronauta');
    
    // Animación completa con varios pasos
    astro.style.transform = 'translateX(200px) rotate(90deg) scale(1.1)';
    
    setTimeout(() => {
        astro.style.transform = 'translateX(400px) rotate(180deg) scale(0.9)';
    }, 1000);
    
    setTimeout(() => {
        astro.style.transform = 'translateX(600px) rotate(270deg) scale(0.7)';
    }, 2000);
    
    setTimeout(() => {
        astro.style.transform = 'translateX(800px) rotate(360deg) scale(0.5)';
    }, 3000);
}
