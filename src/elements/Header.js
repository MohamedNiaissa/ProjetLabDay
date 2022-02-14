import React from "react";
import { Link } from 'react-router-dom';
import Book from "./Book";

function importAll(r) {
    let images = {};
    r.keys().map((item) => { images[item.replace('./', '')] = r(item); });
    return images;
}

class Header extends React.Component {
    constructor (props) {
        super(props);
        this.imagesStatic = importAll(require.context('../img', false, /\.(png|jpe?g|svg)$/));
    }

    componentDidMount() {
        const header = document.getElementById("header");
        const burger = document.getElementById("toggle-burger");
        const label = document.getElementById("burger-anim");
        const main = document.getElementById("main-content")
        const footer = document.getElementById("footer");
        const burger_menu = document.getElementById("burger-content");

        burger.onchange = (e) => {
            if (e.target.checked) {
                header.style.transform = "translate3d(-260px, 0, 0)";
                main.style.transform = "translate3d(-260px, 0, 0)";
                footer.style.transform = "translate3d(-260px, 0, 0)";
                burger_menu.style.margin = 0;
            } else {
                label.animate({ transform: 'rotate(-180deg)' }, 800);
                header.style.transform = "translate3d(0, 0, 0)";
                main.style.transform = "translate3d(0, 0, 0)";
                footer.style.transform = "translate3d(0, 0, 0)";
                burger_menu.style.margin = '0 -260px 0 0';
            }
        }
    }

    render() {
        return (
            <header className="header" id="header" >
                <div className="logo-wrapper">
                    <Link to="/home">
                        <img className="logo" src={this.imagesStatic['NextStep.jpg']} alt="logo"/>
                    </Link>
                </div>
                <nav className="menu-wrapper">
                    <ul>
                        <Book/>
                        <li>
                            <div className="option-burger">
                                <input className="burger-action" id="toggle-burger" type="checkbox" ></input>
                                <label id="burger-anim" htmlFor="toggle-burger"><img className="burger" src={this.imagesStatic['nut.png']} alt="burger"/></label>
                            </div>
                        </li>
                    </ul>
                </nav>
            </header>
        )
    } 
}

export default Header;