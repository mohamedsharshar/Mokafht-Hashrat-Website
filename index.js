AOS.init();
// progressbar
let filled = document.getElementById('filled')
function myfill() {
    filled.style.width = `${((window.scrollY) / (document.body.scrollHeight - window.innerHeight) * 100)}%`;
    requestAnimationFrame(myfill);
}
myfill()

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
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
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


// إصلاح مشكلة submit.onclick
let submit = document.getElementById("submit");
if (submit) {
    submit.addEventListener("click", function (e) {
        // منع إعادة تحميل الصفحة الافتراضي
        // e.preventDefault(); // إذا أردت منع الإرسال الفعلي
        // يمكنك إضافة أي منطق هنا (مثلاً رسالة نجاح)
        // alert("تم إرسال النموذج بنجاح!");
    });
}

// فيتشرز إضافية:
// 1. تأثير بسيط على الفورم عند الإرسال
// 2. إظهار رسالة نجاح بعد الإرسال
// 3. تفعيل AOS عند إضافة عناصر ديناميكية
// 4. تحسين زر العودة للأعلى بإضافة تأثير

// 1. و 2. رسالة نجاح بعد الإرسال
const form = document.querySelector('form');
if (form) {
    form.addEventListener('submit', function (e) {
        // يمكنك منع الإرسال الفعلي إذا أردت
        // e.preventDefault();
        // إظهار رسالة نجاح
        const successMsg = document.createElement('div');
        successMsg.textContent = 'تم إرسال النموذج بنجاح!';
        successMsg.style.cssText = 'background:#0DCEB5;color:#fff;padding:1rem;margin:1rem 0;border-radius:8px;text-align:center;font-weight:bold;';
        form.parentNode.insertBefore(successMsg, form);
        setTimeout(() => successMsg.remove(), 4000);
    });
}

// 3. إعادة تفعيل AOS عند إضافة عناصر ديناميكية (مثال)
function refreshAOS() {
    if (window.AOS) {
        AOS.refresh();
    }
}

// 4. تأثير على زر العودة للأعلى
if (up) {
    up.addEventListener('mouseenter', function () {
        up.style.transform = 'scale(1.15)';
        up.style.boxShadow = '0 4px 16px rgba(13,206,181,0.25)';
    });
    up.addEventListener('mouseleave', function () {
        up.style.transform = 'scale(1)';
        up.style.boxShadow = '';
    });
}

// 5. ميزة: تمرير سلس لجميع الروابط الداخلية
const internalLinks = document.querySelectorAll('a[href^="#"]');
internalLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href').slice(1);
        const target = document.getElementById(targetId);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
