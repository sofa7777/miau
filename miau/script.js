const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const loveMessage = document.getElementById('loveMessage');
const catImage = document.getElementById('catImage');

// Cuando hace clic en "Sí"
yesBtn.addEventListener('click', () => {
    loveMessage.textContent = 'Te amo cuchuflete 💖';
    catImage.src = 'cat2.jpg'; // La segunda imagen del gatito
    catImage.style.display = 'block';
});

// Cuando intenta hacer clic en "No"
noBtn.addEventListener('mouseover', () => {
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    noBtn.style.position = 'absolute';
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});
