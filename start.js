const cross = document.getElementById('cross');
const modalWindow = document.getElementById('modalwindow');
const modalWindow2 = document.getElementById('modalwindow2');
const overlay = document.getElementById('modalopened');
const slogan = document.getElementById('slogan');
const startBtn = document.getElementById('startbtn');

function closeModal(){
    modalWindow.classList.add('closed');
    modalWindow2.classList.add('closed');
    cross.classList.add('closed');
    overlay.classList.remove('modalopened');
    slogan.classList.remove('sloganclosed');
    startBtn.classList.remove('sloganclosed');

}
cross.addEventListener('click', closeModal);
function openModal(){
    modalWindow.classList.remove('closed');
    modalWindow2.classList.remove('closed');
    cross.classList.remove('closed');
    overlay.classList.add('modalopened');
    slogan.classList.add('sloganclosed');
    startBtn.classList.add('sloganclosed');
}

startBtn.addEventListener('click', openModal);








// Получаем элементы формы
const form = document.getElementById('login-form');

// Слушаем событие отправки формы
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Отключаем стандартное поведение отправки формы

    // Получаем значения полей
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Создаем объект с данными
    const userData = {
        username: username,
        password: password
    };

    // Отправляем данные на бэкенд
    console.log('Данные для отправки на бэкенд:', userData);

    // Здесь можно добавить логику отправки данных на сервер, например, с использованием fetch
    /*
    fetch('YOUR_BACKEND_URL', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Успех:', data);
    })
    .catch(error => {
        console.error('Ошибка:', error);
    });
    */
});
