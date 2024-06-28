

const modal = document.querySelector('.modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
const btnsClosemodal = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');


const Closemodal = function() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

const Openmodal = function() {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}


for(let i = 0; i < btnsOpenModal.length; i++) {
    btnsOpenModal[i].addEventListener('click', Openmodal);
}


btnsClosemodal.addEventListener('click' ,Closemodal);
overlay.addEventListener('click',Closemodal);

document.addEventListener('keydown',function(e) {
    if(e.key === 'Escape') {
        if(!modal.classList.add('hidden')) {
            modal.classList.add('hidden');
            overlay.classList.add('hidden');
        }
    }
});

