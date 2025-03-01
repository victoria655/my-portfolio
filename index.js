

const more = document.querySelector('.more');
const back = document.querySelector('.back');
const nameDiv = document.querySelector('.name');
const aboutDiv = document.querySelector('.about');
const powDiv = document.querySelector('.pow');
const dotDiv = document.querySelector('.dot');

// Hide .pow and .dot initially
powDiv.style.display = 'none';
dotDiv.style.display = 'none';

more.onclick = () => {
    nameDiv.classList.add('hide');
    aboutDiv.classList.add('hide');

    setTimeout(() => {
        nameDiv.style.display = 'none';
        aboutDiv.style.display = 'none';
        powDiv.classList.add('show');
        dotDiv.classList.add('show');
    }, 1000); // Delay ensures transition before hiding elements
};

back.onclick = () => {
    powDiv.classList.remove('show');
    dotDiv.classList.remove('show');

    setTimeout(() => {
        powDiv.style.display = 'none';
        dotDiv.style.display = 'none';
        nameDiv.style.display = 'block';
        aboutDiv.style.display = 'block';

        setTimeout(() => {
            nameDiv.classList.remove('hide');
            aboutDiv.classList.remove('hide');
        }, 50);
    }, 1000);
};
