const popUp1 = document.querySelector('.pop-up-container-card-1');

const cardBtns = document.getElementsByClassName('infographilc__card');

const btnClose1 = document.querySelector('.close-btn1');


const checkMark = document.getElementsByClassName('check-mark-block');

function overflowHiden() {
    document.querySelector('body').classList.toggle('over-flow-body');
}

cardBtns[0].addEventListener('click', ()=> {
    popUp1.classList.add('show-pop-up');
    shadow.classList.add('shadow-active');
    overflowHiden();
});

btnClose1.addEventListener('click', ()=> {
    popUp1.classList.remove('show-pop-up');
    shadow.classList.remove('shadow-active');
    checkMark[0].classList.add('check-mark-block_show');
    overflowHiden();
});
