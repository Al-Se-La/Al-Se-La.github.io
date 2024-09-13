let btn = document.querySelectorAll('.btn');
let a = {
    INSTAGRAM: "https://instagram.com/lavrina.lami/",
    WHATSAPP:"https://wa.me/995571206128"
}
// console.log(Array.from(btn));
//console.log([...btn]);
function openLink(v){
    window.open(v, "_blank");
}
function clickOpen(e){
    if(e.type === 'click') {
        let target = e.target.innerText;
        Object.keys(a).filter((k) => {
            k === target ? openLink(a[k]) : null;
        })
    }
}
btn.forEach((button) => {
    button.addEventListener('click', clickOpen);
});
//"https://wa.me/995571206128"
//"https://api.whatsapp.com/send?phone=995571206128"
//"https://instagram.com/lavrina.lami/"
let nav = document.querySelector('nav');
let ul = document.querySelector('ul');
let li = document.querySelectorAll('li');
let img = document.getElementsByClassName('burger_img');
console.log(li);
function toggleMenu(){
    let windowWidth = window.innerWidth;
    if(windowWidth<=510) {
        nav.classList.toggle('hidden');
        ul.classList.toggle('hidden_list');
        img[0].classList.toggle('hidden_img');
        nav.classList.contains('hidden') ? img[0].src = 'img/menu-cross.png' : img[0].src = 'img/menu-icon.png';
    }
}
img[0].addEventListener('click',toggleMenu);
[...li].forEach((item) => {
    item.addEventListener('click',toggleMenu);
});
// function highlightMenuItem() {
//         const currentHash = window.location.hash;
//     const menuItems = document.querySelectorAll('.menu-item');
//
//     li.forEach(item => {
//         console.log(item);
//         item.classList.remove('.active');
//     });
// console.log(currentHash);
//     // Находим и подсвечиваем текущую ссылку
//     if (currentHash) {
//         const activeItem = document.querySelector(`li a[href="${currentHash}"]`);
//         if (activeItem) {
//             activeItem.classList.add('active');
//         }
//     }
// }
// // Вызываем функцию при загрузке страницы
// window.addEventListener('load', highlightMenuItem);
// // Вызываем функцию при изменении хэша
// window.addEventListener('hashchange', highlightMenuItem);
// window.addEventListener('click', highlightMenuItem);
///////////////////////////////////////////////////////////////////////////////
const pageHi = document.getElementById('s4');
function adjustHeight() {
    // const windowHeight = window.visualViewport ? window.visualViewport.height : window.innerHeight;
    // console.log(window.visualViewport.height);
    //
    // if (pageHi) {
    //     // 8vh высота header, её нужно вычесть из windowHeight
        const headerHeight = window.innerHeight * 0.08; // 8vh
    //     pageHi.style.height = `${windowHeight - headerHeight}px`;
    // }
    if (!CSS.supports('height', '100dvh')) {
        const windowHeight = window.innerHeight; // В случае отсутствия dvh, берём стандартную высоту окна
        console.log('Window height (excluding browser UI):', windowHeight);

        if (pageHi) {
            // Устанавливаем высоту #s4 как видимая высота окна минус высота header (8vh)
            pageHi.style.height = `${windowHeight - headerHeight}px`;
        }
    }
}
window.addEventListener('load', adjustHeight);
window.addEventListener('resize', adjustHeight);