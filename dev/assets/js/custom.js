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

        if (modal.classList.contains('video-procecess')) {
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


const x = 4

if (x == 2) {
    console.log('x == 2');
} else if (x == 4) {
    console.log('x == 4');
} else if (x == 6) {
    console.log('x == 6');
} else if (x == 8) {
    console.log('x == 8');
} else {
    console.log('не задовільняє жодних умов');
}

const swiperProduct = new Swiper('.swiper', {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 24,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {

        768: {
            slidesPerView: 2,
            spaceBetween: 24,
        },

        1026: {
            slidesPerView: 2,
            spaceBetween: 48,
        },
        1233: {
            slidesPerView: 3,
            spaceBetween: 48,
        },

        1560: {
            slidesPerView: 4,
            spaceBetween: 48,
        }
    }
});

var init = false;
var swiper;
function swiperCard() {
  if (window.innerWidth <= 768) {
    if (!init) {
      init = true;
      swiper = new Swiper(".slider-cards-js", {
        direction: "horizontal",
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 32,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
    }
  } else if (init) {
    swiper.destroy();
    init = false;
  }
}
swiperCard();
window.addEventListener("resize", swiperCard);