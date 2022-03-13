
const circle = document.querySelector('#circle')

circle.addEventListener('mouseenter', () => {
    if(!circle.classList.contains('hover')) {
        circle.classList.add('hover');
    }
    circle.style.background = 'maroon';
    circle.textContent = 'Scaled';
});

circle.addEventListener('mouseleave', () => {
    if(circle.classList.contains('hover')) {
        circle.classList.remove('hover');
    }
    circle.style.background = 'slateblue';
    circle.textContent = 'Hover';
});

