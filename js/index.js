const btn = document.querySelectorAll('.button');
const nav = document.querySelector('nav');
const li = document.getElementsByClassName('menu__item');
const img = document.getElementsByClassName('menu-icon');
const sections = document.querySelectorAll('section');
const menuItems = document.querySelectorAll('.menu__item');
const courses = document.getElementById('s3');
const imgDetails = document.getElementsByClassName('details-icon');
const socialLinks = {
    INSTAGRAM: "https://instagram.com/lavrina.lami/",
    WHATSAPP: "https://wa.me/995571206128"
};
const detailsLinks = {
    '#basic':'basic',
    '#brow-base':'brow-base'
};

function openLink(v) {
    window.open(v, "_blank");
}

function clickOpen(e) {
    if (e.type === 'click') {
        let target = e.target.innerText.toUpperCase();
        console.log(target);
        Object.keys(socialLinks).filter((k) => {
            k === target ? openLink(socialLinks[k]) : null;
        })
    }
}
btn.forEach((v) => {
    v.addEventListener('click', clickOpen);
});

function toggleMenu() {
    let windowWidth = window.innerWidth;
    if (windowWidth <= 768 && nav.style.display === 'block') {
        detailsToggle();
        nav.style.display = '';
        img[0].src = 'img/menu-icon.png';
        img[0].classList.remove('cross');
        document.body.style.overflow = 'auto';
    } else if (windowWidth <= 768 && nav.style.display === '') {
        nav.style.display = 'block';
        img[0].src = 'img/menu-cross.png';
        img[0].classList.add('cross');
        document.body.style.overflow = 'hidden';
    }
}
img[0].addEventListener('click', toggleMenu);
[...li].forEach((item) => {
    item.addEventListener('click', toggleMenu);
});

function activateMenuItem() {
    let index = sections.length;
    // Проверяем положение секций относительно текущей прокрутки страницы
    while (--index && window.scrollY + 80 < sections[index].offsetTop) {}
    menuItems.forEach((item) => item.classList.remove('active'));
    menuItems[index].classList.add('active');
}
window.addEventListener('scroll', activateMenuItem);

function detailsToggle(key=''){
    if(!key){
    Object.values(detailsLinks).forEach((v)=>{
        document.getElementById(v).style.display = 'none';
    })
    }else {
        const details = document.getElementById(detailsLinks[key]);
        details.style.display = 'block';
    }
}
function openMore(e){
    e.preventDefault();
    // const detailsId = e.target.attributes[0].value.substring(1);
     const linkHref = e.target.attributes[0].value;
     console.log(linkHref);
     linkHref === 'img/delete-icon.png' ? detailsToggle(): detailsToggle(linkHref);
}
imgDetails[0].addEventListener('click',  openMore);
courses.addEventListener('click',openMore);
