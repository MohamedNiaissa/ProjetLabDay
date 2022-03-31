export function Notif(message){
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    
    async function transition(){
        await sleep (500);
        div.style.left = "78%";
    
    }
    async function eraseNotif() {
        
            await sleep(5000);
            div.style.opacity = "0";
            await sleep(1000);
            div.remove();
    
        }
    
    let div = document.createElement('div');
    document.body.appendChild(div);
    let p = document.createElement('p');
    div.appendChild(p);
    div.style.position = "absolute";
    div.style.left = "100%";
    div.style.top = "14%";
    div.style.background = "black";
    div.style.width = "282px";
    div.style.textAlign = "center";
    div.style.borderRadius = "20px";
    div.style.padding = "20px";
    div.style.transition = "all 1s ease"
    
    
    p.style.color = "white";
    p.style.fontSize = "22px";
    p.innerHTML = message;
    
        transition();
    
        eraseNotif()
        
}