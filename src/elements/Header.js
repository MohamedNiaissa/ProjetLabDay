import React from "react";
import { Link } from 'react-router-dom';

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
                    <Link to="/home">
                        <img src={this.imagesStatic['NSLogoSVG.svg']} alt="logo" className="app_logo" width="184px" height="56px"></img>
                    </Link>
                    <div class="hamburger-menu">
                        <input id="menu__toggle" type="checkbox" />
                        <label class="menu__btn" for="menu__toggle">
                            <span></span>
                        </label>

                        <div class="menu_img" />
                        <ul class="menu__box">
                        <li><Link to="/home"><a class="menu__item" href="#">Home</a></Link></li>
                        <li><Link to="/contact"><a class="menu__item" href="#">Contact</a></Link></li>
                        </ul>
                    </div>
                </div>
            </section>
        )
    } 
}

export default Header;