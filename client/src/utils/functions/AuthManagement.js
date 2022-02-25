export function slide() {
    document.getElementById("slider").addEventListener("click", () => {
        const el = document.getElementById("switch").classList;
        if(el.contains("right")) el.remove("right");
        if(el.contains("left")) el.remove("left");
        
        const animationDirection = window.location.hash === "#signUp" ? "right" : "left";
        el.add(animationDirection);
    })
}

export function init(hash) {
    if(hash === "#signUp") {
        return {
            left: "0",
            right: "50%",
            radius: "10px 0 0 10px",
            title: "Vous avez un compte ?",
            href: "#logIn",
            text: "Log in"
        }
    } else {
        return {
            left: "50%",
            right: "0",
            radius: "0 10px 10px 0",
            title: "Vous n'avez pas de compte ?",
            href: "#signUp",
            text: "Sign up"
        }
    }
}