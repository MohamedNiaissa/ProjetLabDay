import React from "react";
import { Link } from 'react-router-dom';
import MainNav from "./MainNav";


function importAll(r) {
    let images = {};
    r.keys().map((item) => ( images[item.replace('./', '')] = r(item) ));
    return images;
}

class Header extends React.Component {
    constructor (props) {
        super(props);
        this.imagesStatic = importAll(require.context('../../img', false, /\.(png|jpe?g|svg)$/));
    }

    componentDidMount() {
        const mainView = document.getElementById("root-content");
        const burgerMenu = document.getElementById("burger-side");
        const burger = document.getElementById("toggle-burger");
        const label = document.getElementById("burger-anim");

        burger.onchange = (e) => {
            if (e.target.checked) {
                mainView.style.width = "80%";
                burgerMenu.style.width = "20%";
            } else {
                label.animate({ transform: 'rotate(-180deg)' }, 800);
                mainView.style.width = "100%";
                burgerMenu.style.width = "0%";
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
                        <MainNav/>
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