const burger = document.querySelector('#btn-burger');
const mobileContainer = document.querySelector('#mobile-container');
const processVideo = document.querySelector('#video');
const play = document.querySelector('#play')
const stop = document.querySelector('#stop')

const html = document.querySelector('#html')
const css = document.querySelector('#css')
const js = document.querySelector('#js')

const rangeInput = document.querySelector('#volume-range')

const pause = document.querySelector('#pause')

pause.addEventListener('click', () => {
    pauseVideo();
    console.log('pause');
})

function pauseVideo() {
    processVideo.pause();
}

function currentHTML() {
    video.currentTime = 60;
}

function currentCSS() {
    video.currentTime = 120;
}

function currentJS() {
    video.currentTime = 200;
}

function playVideo() {
    processVideo.play();
}

function stopVideo() {
    video.pause();
    video.currentTime = 0;
}


html.addEventListener('click', () => {
    currentHTML();
    video.volume = 0.5;
})

css.addEventListener('click', () => {
    currentCSS()
})

js.addEventListener('click', () => {
    currentJS()
})


stop.addEventListener('click', () => {
    stopVideo();
    console.log('stop');
})

play.addEventListener('click', () => {
    playVideo();
    console.log('play');
})








 

burger.addEventListener('click', () => {
    burger.classList.toggle('active')
    mobileContainer.classList.toggle('show')
})


/*modal*/

const modalTrigers = document.querySelectorAll('[data-triger-modal]');
const modalClose = document.querySelectorAll('[data-modal-close]')
const overlay = document.querySelector('.overlay')
const body = document.querySelector('body')

function showModal() {
    

    body.classList.add('overflow-hidden')
    overlay.classList.add('show')
   

   
}

function closeModal() {
    const openModal = document.querySelector('.modal.show');
    body.classList.remove('overflow-hidden')
    overlay.classList.remove('show')
    openModal.classList.remove('show')
    stopVideo();
}

modalTrigers.forEach((item) => {
    item.addEventListener('click', function(event) {
        event.preventDefault()

        const dataTriger = item.getAttribute('data-triger-modal')
        const modal = document.querySelector('#' + dataTriger)

        showModal()
        

        if(modal.classList.contains('video-provecess')) {
            modal.classList.add('show')
            playVideo()
        } else {
            modal.classList.add('show')
        }
    })
})

modalClose.forEach(close => {
    close.addEventListener('click', closeModal)
})

