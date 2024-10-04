let prevButton = document.getElementById('prev');
let nextButton = document.getElementById('next');
let container = document.querySelector('.list'); // Mudado para '.list' que é o contêiner dos itens
let items = container.querySelectorAll('.item'); // Mudado para '.item' que é a classe dos itens
let indicators = document.querySelector('.indicators'); // Corrigido para incluir o ponto
let dots = indicators.querySelectorAll('ul li'); // Seletor correto para os indicadores
let pageNumberDisplay = document.querySelector('.numbers'); // Seletor para o número da página

let active = 0; // Índice do item ativo
let lastPosition = items.length - 1; // Última posição do item

// Função para atualizar a exibição dos itens e indicadores
function updateDisplay() {
    items.forEach((item, index) => {
        item.classList.remove('active'); // Remove a classe active de todos os itens
        dots[index].classList.remove('active'); // Remove a classe active de todos os indicadores
    });
    items[active].classList.add('active'); // Adiciona a classe active ao item atual
    dots[active].classList.add('active'); // Adiciona a classe active ao indicador atual

    // Atualiza o número da página
    pageNumberDisplay.textContent = String(active + 1).padStart(2, '0'); // Atualiza o número da página
}

// Lógica do botão "Próximo"
nextButton.onclick = () => {
    active = (active + 1 > lastPosition) ? 0 : active + 1; // Atualiza o índice do item ativo
    updateDisplay(); // Atualiza a exibição
};

// Lógica do botão "Anterior"
prevButton.onclick = () => {
    active = (active - 1 < 0) ? lastPosition : active - 1; // Atualiza o índice do item ativo
    updateDisplay(); // Atualiza a exibição
};

// Inicializa a exibição
updateDisplay();
