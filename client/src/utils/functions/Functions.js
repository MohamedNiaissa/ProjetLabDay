export function importImages(str) {
    let array = {};
    const images = require.context('../../assets/img', false, /\.(png|jpe?g|svg)$/);
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

            el("burger-anim").animate({ transform: 'rotate(-90deg)' }, 800);
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

export function getTrashColor(p) {
    const regx = new RegExp('\\b' + p.material + '\\b', 'i');
    const green = "bois";
    const yellow = "metal plastique caoutchouc papier_carton";
    const blue = "ceramique cuir textile";

    return regx.test(green)  ? "T green"  :
           regx.test(yellow) ? "T yellow" :
           regx.test(blue)   ? "T blue"   : "T";
}
