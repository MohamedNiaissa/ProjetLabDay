export function importImages(str) {
    let array = {};
    const images = require.context('../../assets/img', false, /\.(png|jpe?g|svg|webp)$/);
    images.keys().map((item) => ( array[item.replace('./', '')] = images(item) ));

    return array[str];
}

export function stateOnPage(page) {
    return page ===  "/home" ? "underline active" : "underline inactive";
}

export function getTrashColor(mat) {
    const regx = new RegExp('\\b' + mat + '\\b', 'i');
    const green = "verre";
    const yellow = "plastique papier_carton";
    const red = "ceramique cuir textile metal bois caoutchouc";

    if(regx.test(green)) return {green: "green", red: "grey", yellow: "grey", selected: "verte !"}
    if(regx.test(yellow)) return {green: "grey", red: "grey", yellow: "yellow", selected: "jaune et (bleu pour le papier)!"}
    if(regx.test(red)) return {green: "grey", red: "red", yellow: "grey", selected: "rouge (préference en décharge) !"}
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
    return document.cookie?.slice(6,);
}

export function actionOverlay(toggle) {
    const overlay = document.getElementById("overlay");
    const cbox = document.getElementById("overlay-cbox");
    toggle ? openOverlay(overlay, cbox) : closeOverlay(overlay, cbox);
}

function closeOverlay(overlay, cbox) {
    cbox.checked = false;
    overlay.style.display = "none";
}

function openOverlay(overlay, cbox) {
    cbox.checked = true;
    overlay.style.display = "flex";
}

export function addEventOnTree() {
    document.querySelectorAll(".tree").forEach(el => {
        el.addEventListener("click", toggleActive);
    })
}

function toggleActive() {
    this.parentElement.childNodes.forEach(el => {
        if(el.tagName === "UL") el.classList.toggle("active");
        if(el.tagName === "DIV") el.classList.toggle("active");
    })
}