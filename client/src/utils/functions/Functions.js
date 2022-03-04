export function importImages(str) {
    let array = {};
    const images = require.context('../../assets/img', false, /\.(png|jpe?g|svg|webp)$/);
    images.keys().map((item) => ( array[item.replace('./', '')] = images(item) ));

    return array[str];
}

export function stateOnPage(mode, page) {
    if(mode === "bg") {
        return (page === window.location.pathname) ? "option active" : "option inactive";
    }else if(mode === "link") {
        return (page === window.location.pathname) ? "/home" : page;
    }
}

export function getTrashColor(p) {
    const regx = new RegExp('\\b' + p.material + '\\b', 'i');
    const green = "bois";
    const yellow = "metal plastique caoutchouc papier_carton";
    const blue = "ceramique cuir textile";

    return regx.test(green)  ? "T green"  :
           regx.test(yellow) ? "T yellow" :
           regx.test(blue)   ? "T blue"   : "T";
}

export function smoothAnimation() {
    const cards = document.querySelectorAll(".card-content");

    cards.forEach(card => {
            card.addEventListener('mouseover', function() {
            this.classList.add('flipped');
        });
    })
}


export function triggerBurgerMenu() {
    const el = (str) => document.getElementById(str);
    const burgerMenu = el("burger-side");
    const navBar = el("header");

    el("toggle-burger").onchange = (e) => {
        if (e.target.checked) {
            navBar.style.width = "80%";
            burgerMenu.style.width = "20%";
            burgerMenu.classList.add("open");
            addForceClose();

        } else {
            navBar.style.width = "100%";
            burgerMenu.style.width = "0%";
            burgerMenu.classList.remove("open");
            removeForceClose();

            el("burger-anim").animate({ transform: 'rotate(-90deg)' }, 800);
        }
    }
}

function addForceClose() {
    document.addEventListener("click", forceClose, true);
}

function removeForceClose() {
    document.removeEventListener("click", forceClose, true);
}

function forceClose(e) {
    const isElement = e.target.closest("nav");
    if(isElement !== null) return;
    
    const burger = document.getElementById("burger-side");
    if(!burger.classList.contains("open")) return;

    triggerForceClose();
}

function triggerForceClose() {
    const el = (str) => document.getElementById(str);
    const burgerMenu = el("burger-side");
    const navBar = el("header");

    navBar.style.width = "100%";
    burgerMenu.style.width = "0%";
    burgerMenu.classList.remove("open");
    el("toggle-burger").checked = false;
    removeForceClose();

    el("burger-anim").animate({ transform: 'rotate(-90deg)' }, 800);
}