let sides = document.querySelectorAll('.sides');

const getRandomColor = () => {
    return Math.floor(Math.random() * 999);
}

sides.forEach(el => {
    el.style.backgroundColor = `#${getRandomColor()}`;
})