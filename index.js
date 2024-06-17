<<<<<<< HEAD
AOS.init();
// progressbar
let filled = document.getElementById('filled')
function myfill() {
    filled.style.width = `${((window.scrollY) / (document.body.scrollHeight - window.innerHeight) * 100)}%`;
    requestAnimationFrame(myfill);
}
myfill()

//menubar


document.addEventListener("DOMContentLoaded", function () {
    const mymenuicon = document.getElementById('mymenuicon');
    const links = document.getElementById('links');

    mymenuicon.addEventListener('click', function () {
        links.classList.toggle('open');
    });
});

// swiper
var swiper = new Swiper(".swiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2.5
    },
    keyboard: {
        enabled: true
    },
    mousewheel: {
        thresholdDelta: 70
    },
    spaceBetween: 30,
    loop: false,
    breakpoints: {
        640: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        }
    }
});

swiper.slideTo(1, false, false);




//up button


let up = document.getElementById("up");

window.addEventListener("scroll", function () {
    if (window.scrollY > 500) {
        up.style.display = "block";
    } else {
        up.style.display = "none";
    }
});

up.onclick = function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
let submit=document.getElementById("submit");

submit.onclick(function () {
   onload();
=======
AOS.init();
// progressbar
let filled = document.getElementById('filled')
function myfill() {
    filled.style.width = `${((window.scrollY) / (document.body.scrollHeight - window.innerHeight) * 100)}%`;
    requestAnimationFrame(myfill);
}
myfill()

//menubar


document.addEventListener("DOMContentLoaded", function () {
    const mymenuicon = document.getElementById('mymenuicon');
    const links = document.getElementById('links');

    mymenuicon.addEventListener('click', function () {
        links.classList.toggle('open');
    });
});

// swiper
var swiper = new Swiper(".swiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2.5
    },
    keyboard: {
        enabled: true
    },
    mousewheel: {
        thresholdDelta: 70
    },
    spaceBetween: 30,
    loop: false,
    breakpoints: {
        640: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        }
    }
});

swiper.slideTo(1, false, false);




//up button


let up = document.getElementById("up");

window.addEventListener("scroll", function () {
    if (window.scrollY > 500) {
        up.style.display = "block";
    } else {
        up.style.display = "none";
    }
});

up.onclick = function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
let submit=document.getElementById("submit");

submit.onclick(function () {
   onload();
>>>>>>> 77235a8 (Update)
})