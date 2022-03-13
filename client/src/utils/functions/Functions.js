export function importImages(str) {
    let array = {};
    const images = require.context('../../assets/img', false, /\.(png|jpe?g|svg|webp)$/);
    images.keys().map((item) => ( array[item.replace('./', '')] = images(item) ));

    return array[str];
}

export function stateOnPage(page) {
    return page ===  "/home" ? "underline active" : "underline inactive";
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
    const burgerNut = el("burger-anim");
    const navBar = el("header");

    el("toggle-burger").onchange = (e) => {
        if (e.target.checked) {
            navBar.style.width = "80%";
            burgerMenu.style.width = "20%";
            burgerMenu.classList.add("open");
            burgerNut.style.transform = "rotate(90deg)";
            addForceClose();

        } else {
            navBar.style.width = "100%";
            burgerMenu.style.width = "0%";
            burgerMenu.classList.remove("open");
            burgerNut.style.transform = "rotate(-90deg)";
            removeForceClose();
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

    triggerForceClose("verified");
}

function triggerForceClose(mode) {
    const el = (str) => document.getElementById(str);
    const burgerMenu = el("burger-side");
    const navBar = el("header");

    if(mode === "verified") {
        navBar.style.width = "100%";
        burgerMenu.style.width = "0%";
        burgerMenu.classList.remove("open");
        el("toggle-burger").checked = false;
        el("burger-anim").style.transform = "rotate(-90deg)";
        removeForceClose();
    }else if(burgerMenu.classList.contains("open")) {
    }
}

export function burgerOverride() {
    const el = (str) => document.getElementById(str);
    const burgerMenu = el("burger-side");
    const navBar = el("header");
    if(!burgerMenu.classList.contains("open")) return;

    navBar.style.width = "100%";
    burgerMenu.style.width = "0%";
    burgerMenu.classList.remove("open");
    el("toggle-burger").checked = false;
    el("burger-anim").style.transform = "rotate(-90deg)";
}

export function isLogged() {
    return localStorage.getItem("user") ? true : false;
}

export function clearAuth() {
    localStorage.clear();
    sessionStorage.clear();

    document.cookie.replace(
        /(?<=^|;).+?(?=|;|$)/g, 
        document.cookie=`token=null;max-age=0;path=/;domain=localhost;SameSite=Lax;Secure`
    );
}

export function setAuth({user, set}) {
    localStorage.setItem('user', user);
    document.cookie = `token=${set.token};max-age=604800;domain=localhost;SameSite=Lax;Secure`;
}

export function getToken() {
    return { token: document.cookie?.slice(6,) };
}