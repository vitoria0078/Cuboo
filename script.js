const mainCube = document.getElementById('main-cube');
const faces = ['front', 'back', 'right', 'left', 'top', 'bottom'];

// 1. Gerar os 27 cubinhos com MAIS DISTÂNCIA
for (let x = -1; x <= 1; x++) {
    for (let y = -1; y <= 1; y++) {
        for (let z = -1; z <= 1; z++) {
            const cubie = document.createElement('div');
            cubie.className = 'cubie';
            
            // Aumentado para 105px para criar o distanciamento
            cubie.style.transform = `translate3d(${x * 105}px, ${y * 105}px, ${z * 105}px)`;

            faces.forEach(f => {
                const face = document.createElement('div');
                face.className = `face ${f}`;
                cubie.appendChild(face);
            });
            mainCube.appendChild(cubie);
        }
    }
}

// 2. Rotação em ponto fixo baseada no mouse
document.addEventListener('mousemove', (e) => {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    const deltaX = (e.clientX - centerX) / centerX;
    const deltaY = (e.clientY - centerY) / centerY;

    const rotY = deltaX * 180; 
    const rotX = deltaY * -180;

    mainCube.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg)`;
});