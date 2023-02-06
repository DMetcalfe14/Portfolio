const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const slides = document.querySelectorAll('section');
const images = document.querySelectorAll('img:not(#image-compare *)');

let slide = 0;

const render = () => {
    if(slide === slides.length - 1){
        next.style.visibility = "hidden";
    } else {
        next.style.visibility = "unset";
    }
    if(slide === 0){
        prev.style.visibility = "hidden";
    } else {
        prev.style.visibility = "unset";
    }
}

render();

const goNext = () => {
    slides[slide].classList.add('hidden');
    slide += 1;
    slides[slide].classList.remove('hidden');
    render();
}

next.addEventListener('click', () => {
    goNext();
});

const goPrev = () => {
    slides[slide].classList.add('hidden');
    slide -= 1;
    slides[slide].classList.remove('hidden');
    render();
}

prev.addEventListener('click', () => {
    goPrev();
});

VanillaTilt.init(document.querySelector('#image-compare'), {
    max: 5,
    speed: 1
});

images.forEach(image => {
    VanillaTilt.init(image, {
            max: 5,
            speed: 1
    });
})


