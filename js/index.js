const btn = document.querySelectorAll('.button'),
 nav = document.querySelector('nav'),
 li = document.getElementsByClassName('menu__item'),
 img = document.getElementsByClassName('menu-icon'),
 sections = document.querySelectorAll('section'),
 menuItems = document.querySelectorAll('.menu__item'),
 courses = document.getElementById('s3');
 imgDetails = document.getElementsByClassName('details-icon');
const socialLinks = {
    // INSTAGRAM: "https://instagram.com/lavrina.lami/",
    INSTAGRAM: "https://ig.me/m/lavrina.lami",
    WHATSAPP: "https://wa.me/995571206128"
},
 moreLinks = {
    '#basic':'basic',
    '#brow-base':'brow-base'
};

function openLink(v) {
    window.open(v, "_blank");
}

function openSocialLinks(e) {
    if (e.type === 'click') {
        let target = e.target.innerText.toUpperCase();
        Object.keys(socialLinks).filter((k) => {
            k === target ? openLink(socialLinks[k]) : null;
        })
    }
}
btn.forEach((v) => {
    v.addEventListener('click', openSocialLinks);
});

function toggleOverflow(prop='auto'){
    return document.body.style.overflow = prop;
}
function openMenu(){
    nav.style.display = 'block';
    img[0].src = 'img/menu-cross.png';
    img[0].classList.add('cross');
    toggleOverflow('hidden');
}
function closeMenu(){
    // moreToggle();
    closeMore();
    nav.style.display = '';
    img[0].src = 'img/menu-icon.png';
    img[0].classList.remove('cross');
}
function toggleMenu() {
    const windowWidth = window.innerWidth;
    if (windowWidth <= 768) {
        nav.style.display === 'block' ? closeMenu() : openMenu();
    } else if (windowWidth > 768) {
        // moreToggle();
        closeMore();
    }
}

img[0].addEventListener('click', toggleMenu);
[...li].forEach((item) => {
    item.addEventListener('click', toggleMenu);
});

function orientationMenu(){
    const isLandscape = window.innerWidth > window.innerHeight;
    const orientation = window.matchMedia("(orientation: landscape)").matches;
    if(nav.style.display === 'block') {
        orientation || isLandscape && window.innerWidth > 768 ? closeMenu() : null;
    }
}
window.addEventListener('resize', orientationMenu);
window.addEventListener('orientationchange', orientationMenu);
function activateMenuItem() {
    let index = sections.length;
    // Проверяем положение секций относительно текущей прокрутки страницы
    while (--index && window.scrollY + 80 < sections[index].offsetTop) {}
    menuItems.forEach((item) => item.classList.remove('active'));
    menuItems[index].classList.add('active');
}
window.addEventListener('scroll', activateMenuItem);

function openMore(l){
    const details = document.getElementById(moreLinks[l]);
    details.style.display = 'block';
    toggleOverflow('hidden');
}
function closeMore(){
    Object.values(moreLinks).forEach(v=>{
        document.getElementById(`${v}`).style.display = 'none';
        toggleOverflow();
    })
}
function toggleMore(e){
    e.preventDefault();
    // const detailsId = e.target.attributes[0].value.substring(1);
    const linkHref = e.target.getAttribute('href') || e.target.getAttribute('src');
     if (linkHref) {
         linkHref === 'img/delete-icon.png' ? closeMore() : openMore(linkHref);
     }
}
imgDetails[0].addEventListener('click',  toggleMore);
courses.addEventListener('click',toggleMore);
