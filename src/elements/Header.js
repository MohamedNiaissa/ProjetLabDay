import React from "react";
import ManageLinks from "./ManageLinks";

function importAll(r) {
    let images = {};
    r.keys().map((item) => { images[item.replace('./', '')] = r(item); });
    return images;
}

class Header extends React.Component {
    imagesStatic = importAll(require.context('../img', false, /\.(png|jpe?g|svg)$/));

    render() {
        return (
            <section className="nav_container">
                <div id="nav" className="nav">
                    <img src={this.imagesStatic['NSLogoSVG.svg']} alt="logo" className="app_logo" width="184px" height="56px"></img>
                    <ManageLinks link={"/home"}/>
                </div>
            </section>
        )
    } 
}

export default Header;