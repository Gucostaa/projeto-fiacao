document.addEventListener('DOMContentLoaded', () => {
    const tabLinks = document.querySelectorAll('.tab-link');
    const tabContents = document.querySelectorAll('.tab-content');

    tabLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            // Remove active de todos
            tabLinks.forEach(l => l.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));

            // Ativa o clicado
            this.classList.add('active');
            
            // Mostra o conteúdo correto
            const tab = this.getAttribute('data-tab');
            const activeContent = document.getElementById(tab);
            if (activeContent) {
                activeContent.classList.add('active');
            } else {
                console.warn(`Nenhuma aba encontrada com id: ${tab}`);
            }
        });
    });
});
