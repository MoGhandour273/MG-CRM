new Swiper('.card-wrapper', {
    loop: true,

    spaceBetween: 20,

  // pagination bullets
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 2.9
        }
    }

});


// supplier active
const links = document.querySelectorAll('.sup-button')
const supContents = document.querySelectorAll('.sup-content')

links.forEach(link => {
    link.addEventListener('click', function(e){
        e.preventDefault();
        links.forEach(l => l.classList.remove('active'));
        supContents.forEach(c => c.classList.remove('sup-active'));


        this.classList.add('active');

        const index = this.getAttribute('data-index');

        supContents[index].classList.add('sup-active')


    });
});


// menue

const menuBtn = document.getElementById('menu-btn');
const menu = document.querySelector('.small-list-page');
const smallNavLinks = document.querySelectorAll('.small-nav-link');

menuBtn.addEventListener('click', () => {

    if(menu.style.height === menu.scrollHeight + 'px'){
        menu.style.height = '0px';
    }else{
        menu.style.height = menu.scrollHeight + 'px';
    }
});

smallNavLinks.forEach(link => {
    link.addEventListener('click', () => {
        menu.style.height = '0px';
    });
});