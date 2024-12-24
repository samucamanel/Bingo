// script.js
document.addEventListener('DOMContentLoaded', () => {
    const numbersList = document.getElementById('numbers-list');
    const resetButton = document.getElementById('reset-button'); // Referência ao botão de reiniciar

    // Função para gerar os números de 1 a 90
    for (let i = 1; i <= 90; i++) {
        const numberDiv = document.createElement('div');
        numberDiv.classList.add('number');
        numberDiv.textContent = i;

        // Adicionar evento de clique para marcar/desmarcar
        numberDiv.addEventListener('click', () => {
            numberDiv.classList.toggle('marked');
        });

        // Adicionar número à lista
        numbersList.appendChild(numberDiv);
    }

    // Adicionar evento de clique no botão de reiniciar
    resetButton.addEventListener('click', () => {
        const markedNumbers = document.querySelectorAll('.number.marked');
        markedNumbers.forEach((number) => {
            number.classList.remove('marked'); // Remove a marcação de todos os números
        });
    });
});
