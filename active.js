// Active Elements
const ham = document.getElementById('ham');
const sub = document.getElementById('sub');

ham.addEventListener('click', () => {
    sub.classList.toggle('change');
});