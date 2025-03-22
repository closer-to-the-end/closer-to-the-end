const validateKey = (input) => {
    const code = [108, 105, 110, 107];
    return input === String.fromCharCode(...code);
};

document.addEventListener('contextmenu', e => e.preventDefault());

document.getElementById('submitBtn').addEventListener('click', () => {
    const input = document.getElementById('inputField').value;
    const messageElement = document.getElementById('message');
    const container = document.querySelector('.container');

    if (validateKey(input)) {
        document.getElementById('inputField').disabled = true;
        document.getElementById('submitBtn').disabled = true;

        const dots = ["...", "..", "."];
        let count = 0;

        const dotInterval = setInterval(() => {
            messageElement.textContent = dots[count];
            count++;
            if (count >= dots.length) {
                clearInterval(dotInterval);
                startFinalAnimation();
            }
        }, 800);

    } else {
        messageElement.textContent = "Invalid key";
        messageElement.style.color = "#ff0000";
    }
});

function startFinalAnimation() {
    const container = document.querySelector('.container');
    const body = document.body;

    container.classList.add('glitch');
    body.style.background = 'linear-gradient(45deg, #000 50%, #001100 100%)';

    setTimeout(() => {
        const matrixBG = document.createElement('div');
        matrixBG.className = 'matrix-bg';
        body.appendChild(matrixBG);

        for(let i = 0; i < 50; i++) {
            const matrixText = document.createElement('div');
            matrixText.className = 'matrix-text';
            matrixText.style.left = `${Math.random() * 100}%`;
            matrixText.style.animation = `fall ${Math.random() * 3 + 2}s linear infinite`;
            matrixText.style.animationDelay = `${Math.random() * 2}s`;
            matrixText.textContent = String.fromCharCode(0x30A0 + Math.random() * 96);
            matrixBG.appendChild(matrixText);
        }
    }, 1000);

    setTimeout(() => {
        const hexGrid = document.createElement('div');
        hexGrid.className = 'hex-grid';
        body.appendChild(hexGrid);
    }, 2000);

    setTimeout(() => {
        body.classList.add('white-out');
        body.style.background = 'white';
        document.querySelector('.matrix-bg').remove();
        document.querySelector('.hex-grid').remove();
    }, 4000);

    setTimeout(() => {
        container.classList.add('hidden');
        const finalMessage = document.createElement('div');
        finalMessage.className = 'final-message';
        finalMessage.innerHTML = `
            <p class="fade-text" style="animation-delay: 0s">𓂀 The Code Is Broken 𓂀</p>
            <p class="fade-text" style="animation-delay: 1.5s">Reality Subroutine Terminated</p>
            <p class="fade-text" style="animation-delay: 3s">You've pierced the veil of shadows</p>
            <p class="fade-text" style="animation-delay: 4.5s">The architects of this realm salute you</p>
            <p class="fade-text" style="animation-delay: 6s; font-size: 0.7em;">
                Share your victory with the gatekeeper<br>
                <span style="font-size: 0.8em;">(Screenshot this and send as proof)</span>
            </p>
        `;
        document.body.appendChild(finalMessage);
    }, 3000);
}

setInterval(() => {
    const devToolsOpen = () => {};
    console.log(devToolsOpen);
    console.clear();
}, 1000);
