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


