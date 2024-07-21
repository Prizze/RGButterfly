document.addEventListener('DOMContentLoaded', () => {
    // Функция для получения значения параметра из URL
    function getParameterByName(name) {
        const url = new URL(window.location.href);
        const params = new URLSearchParams(url.search);
        return params.get(name);
    }

    // Получаем значение параметра 'option' из URL
    const optionId = getParameterByName('option');

    // Если параметр 'option' существует и имеет значение
    if (optionId) {
        toggleOption(optionId);
    }
});

function toggleOption(optionId) {
    const buttons = document.querySelectorAll('.option-button');
    buttons.forEach(button => {
        if (button.id === 'option-' + optionId) {
            button.classList.add('selected');
        } else {
            button.classList.remove('selected');
        }
    });

    const optionButton = document.getElementById('option-' + optionId);
    const imageUrl = optionButton.getAttribute('data-image-url');
    const optionData = JSON.parse(optionButton.getAttribute('data-option'));

    document.getElementById('description-text').innerHTML = optionData.description;
    const exampleImage = document.getElementById('example-image');
    exampleImage.src = imageUrl;
    exampleImage.alt = optionData.name;

    document.querySelector('.description-data').classList.add('active');
    document.querySelector('.deliver-data').classList.remove('active');
    document.querySelector('.payment-data').classList.remove('active');

    document.querySelectorAll('.data-button').forEach(button => {
        button.classList.remove('selected');
    });
    document.getElementById('description-btn').classList.add('selected');
}

function toggleDisplay(className) {
    document.querySelectorAll('.description-data, .deliver-data, .payment-data').forEach(section => {
        section.classList.remove('active');
    });
    document.querySelector(className).classList.add('active');
}

document.querySelectorAll('.data-button').forEach(button => {
    button.addEventListener('click', () => {
        document.querySelectorAll('.data-button').forEach(btn => btn.classList.remove('selected'));
        button.classList.add('selected');
    });
});