export function importImages(str) {
    let array = {};
    const images = require.context('../../content/img', false, /\.(png|jpe?g|svg)$/);
    images.keys().map((item) => ( array[item.replace('./', '')] = images(item) ));

    return array[str];
}

export function triggerBurgerMenu() {
    const el = (str) => document.getElementById(str);
    const mainView = el("root-content");
    const burgerMenu = el("burger-side");

    el("toggle-burger").onchange = (e) => {
        if (e.target.checked) {
            mainView.style.width = "80%";
            burgerMenu.style.width = "20%";
        } else {
            mainView.style.width = "100%";
            burgerMenu.style.width = "0%";

            el("burger-anim").animate({ transform: 'rotate(-180deg)' }, 800);
        }
    }
}

export function stateOnPage(mode, page) {
    if(mode === "bg") {
        return (page === window.location.pathname) ? "option active" : "option inactive";
    }else if(mode === "link") {
        return (page === window.location.pathname) ? "/home" : page;
    }
}