import React from "react";
import ManageLinks from "./ManageLinks";

class Header extends React.Component {
    render() {
        return (
            <section id="NavBar">
                <div id="nav" style={{display:'flex'}}>
                    <img src='../NSLogoSVG.svg' alt="loogoo" class="logo" width="184px" height="56px"></img>
                    <ul class="linknav-pos">
                        <li class="crash2"> 
						    <label class="burger">☰</label>  
						    <ul class ="linknav-sub">
						    	<li class="burgerbtn">Se connecter</li>
						    	<li class="burgerbtn">Compte</li>
						    	<li class="burgerbtn">Blablabla</li>
							    <li class="burgerbtn">Blobloblo</li>
						    </ul>
					    </li>
                     </ul>
                </div>
            </section>
        )
    } 
}

export default Header;