// change color

const getRandomColor = () => {
    return Math.floor(Math.random() * 999999);
}

let sides = document.querySelectorAll('.cube__sides');

sides.forEach(el => {
    el.style.backgroundColor = `#${getRandomColor()}`;
});

// change cube size

let root = getComputedStyle(document.documentElement).getPropertyValue('--cube-size');
let rangeEl = document.querySelector('.range-el');

rangeEl.addEventListener('change', (evt) => {
    root = evt.target.value + 'px';
    document.documentElement.style.setProperty('--cube-size', root);
});

// change shapes

let shapes = [
    'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
    'polygon(20% 0%, 0% 20%, 30% 50%, 0% 80%, 20% 100%, 50% 70%, 80% 100%, 100% 80%, 70% 50%, 100% 20%, 80% 0%, 50% 30%)',
    'polygon(50% 0, 60% 40%, 100% 50%, 60% 60%, 50% 100%, 40% 60%, 0 50%, 40% 40%)',
    'polygon(0% 15%, 15% 15%, 15% 0%, 85% 0%, 85% 15%, 100% 15%, 100% 85%, 85% 85%, 85% 100%, 15% 100%, 15% 85%, 0% 85%)',
    'polygon(0% 0%, 0% 100%, 25% 100%, 25% 25%, 75% 25%, 75% 75%, 25% 75%, 25% 100%, 100% 100%, 100% 0%)'
];

let shapeButtons = document.querySelectorAll('.shapes__el');

const changeShapes = (buttons, shapes) => {
    buttons.addEventListener('change', () => {
        if (buttons.checked) {
            sides.forEach(side => {
                side.style.clipPath = shapes;
            });
        }
    });
}

for (let i = 0; i < shapes.length; i++) {
    changeShapes(shapeButtons[i], shapes[i]);
}

// reset button

let resetBtn = document.querySelector('.shapes__reset-btn');
resetBtn.addEventListener('click', () => {
    shapeButtons.forEach(el => {
        el.checked = false;
        sides.forEach(side => {
            side.style.clipPath = 'none';
        });
    })
});