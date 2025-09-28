document.addEventListener('DOMContentLoaded', () => {
    const closeBtn = document.querySelector('.close-button');

    closeBtn.addEventListener('click', () => {
        window.location.href = './index.html';
    });

});
