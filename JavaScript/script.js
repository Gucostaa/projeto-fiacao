let index = 0; // Inicia o índice da imagem visível

// Função para mover o carrossel
function moveSlide(step) {
    const slides = document.querySelectorAll('.carousel img');
    const totalSlides = slides.length;

    // Atualiza o índice da imagem visível
    index += step;

    // Verifica os limites do índice
    if (index >= totalSlides) {
        index = 0;  // Reseta para a primeira imagem
    } else if (index < 0) {
        index = totalSlides - 1;  // Vai para a última imagem
    }

    // Muda a posição do carrossel para mostrar a imagem correta
    document.querySelector('.carousel').style.transform = `translateX(-${index * 100}%)`;
}

// Função para iniciar o carrossel automático
function autoMoveSlide() {
    setInterval(() => {
        moveSlide(1); // Move para a próxima imagem
    }, 3000); // Troca de imagem a cada 3 segundos
}

// Função para duplicar as imagens no carrossel
function duplicateImages() {
    const carousel = document.querySelector('.carousel');
    const images = Array.from(carousel.children);
    const firstImage = images[0];
    const lastImage = images[images.length - 1];

    // Duplica as imagens para permitir o efeito infinito
    carousel.appendChild(firstImage.cloneNode(true)); // Adiciona a primeira imagem no final
    carousel.insertBefore(lastImage.cloneNode(true), images[0]); // Adiciona a última imagem no início
}

// Inicializa o carrossel e começa a duplicação
duplicateImages();
autoMoveSlide();


