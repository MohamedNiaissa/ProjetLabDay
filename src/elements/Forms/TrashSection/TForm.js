import React from "react";
import TBuild from "./TBuild";
import cities from "../../../Cities";
import ManageLinks from "../../ManageLinks";
import image from "../../../img/eco.jpg"

class TForm extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            cboxChecked: false,
            verify: { product: null, material: false, location: true, form: null, test: false },
            btnTriggered: false,
        }

        this.product = { name: null, material: null }
        this.city    = { name: null, zip: null, department: null, lat: null, long: null, found: false }
    }

    handleUserInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.validateField(name, value, e);
    }

    validateField(fieldName, value, e) {
        const loc_zip = document.getElementById("fpvzmxn");
        const loc_city = document.getElementById("ibizbef");
        const link = document.querySelector(".TForm_Button").firstChild;
        const btn = document.querySelector(".button");
        const span = document.createElement('span');
        const com = document.getElementById("city")
        const nodes = e.currentTarget.parentNode.childNodes;
        let validated = this.state.verify;

        switch(fieldName) {
            case "product":
                validated.product = (!value.match(/[^a-zéèêâà']/i) && value.length >= 2) ? true : false;
                
                if(!validated.product) {
                    nodes[1].style.color = "crimson";
                    nodes[2].style.backgroundColor = "crimson";
                }else {
                    nodes[1].style.color = "#2962ff";
                    nodes[2].style.backgroundColor = "#2962ff";
                }

                this.product.name = value;
                break;
            case "material":
                validated.material = (value !== "default") ? true : false;
                this.product.material = value;
                break;
            case "checkbox":
                this.state.cboxChecked = !this.state.cboxChecked;
                if(this.state.cboxChecked) {
                    loc_zip.removeAttribute("disabled");
                    loc_city.removeAttribute("disabled");
                    const index = cities.findIndex(cityData => cityData.zip === this.city.zip);
                    validated.location = (index !== -1) ? true : false;
                }else {
                    loc_zip.setAttribute("disabled", true);
                    loc_city.setAttribute("disabled", true);
                    validated.location = true;
                }

                if(validated.form && this.state.btnTriggered) {
                    console.log("Bullshit")
                    btn.classList.remove('button_anime');
                    link.innerHTML = '';

                    link.appendChild(btn);
                    btn.appendChild(span);

                    btn.classList.add('button_anime_back');
                    this.state.btnTriggered = false;
                }

                break;
            case "map":
                if(e.target.id !== "city") {
                    const arrayData = cities.filter(cityData => cityData.zip === value);
                    validated.location = (arrayData.length !== 0) ? true : false;
                    
                    if(!validated.location) {
                        nodes[1].style.color = "crimson";
                        nodes[2].style.backgroundColor = "crimson";
                    }else {
                        nodes[1].style.color = "#2962ff";
                        nodes[2].style.backgroundColor = "#2962ff";
                    }

                    this.city.zip = value;

                    if(validated.location) {
                        validated.location = false;
                        this.city.found = true;
                        arrayData.forEach(cityData => {
                            const option = document.createElement('option');
                            option.innerHTML = cityData.name + ", " + cityData.department;
                            com.appendChild(option)
                        })
                    }else {
                        this.city.found = false;
                        const option = document.createElement('option');
                        com.innerHTML = '';
                        option.innerHTML = "Choisissez votre commune";
                        option.setAttribute("defaultValue","defaultValue");
                        option.setAttribute("hidden", "hidden");
                        option.value = "";
                        com.appendChild(option);
                    }
                } else {
                    validated.location = (value !== "default" && this.city.found) ? true : false;

                    if(validated.location) {
                        const name_dep = value.split(", ");
                        const self = this;
                        self.city.name = name_dep[0];
                        self.city.department = name_dep[1];
                        
                        cities.find(function(city) {
                            if((city.name === self.city.name) && (city.zip === self.city.zip) && (city.department === self.city.department)) {
                                self.city.lat = city.lat;
                                self.city.long = city.long;
                            }

                            return null;
                        })
                    }
                }
                break;
            default: break;
        }

        validated.form = this.state.verify.product && this.state.verify.material && this.state.verify.location;
        this.setState({
            ...this.state.verify,
            form: validated.form,

        });
        
        if(validated.form && !this.state.btnTriggered) {
            if(this.city.name === null) {
                btn.classList.remove("button_anime_back");
                btn.classList.remove("button--mimas");
                link.innerHTML = '';

                link.appendChild(btn);
                btn.appendChild(span);

                btn.classList.add('button_anime');
                this.state.btnTriggered = true;
            }else if(this.city.name !== null && !this.state.verify.test) {
                btn.classList.remove("button_anime_back");
                btn.classList.remove("button--mimas");
                link.innerHTML = '';

                link.appendChild(btn);
                btn.appendChild(span);

                btn.classList.add('button_anime');
                this.state.verify.test = true;
                this.state.btnTriggered = false;
            }
        }
      }
    
    handleResearch = () => {
        if(this.state.cboxChecked) {
            return '/jeter/decharge'
        }else {
            return "/jeter/poubelles-ecologiques"
        }
    }

    render() {
        return (
            <section className="form_section">
                <div className="form_template">
                    <div className="form_style">
                        <img className="form_picture" src={image} alt="pic"/>
                    </div>
                    <div className="form_container"> 
                        <form id="TForm" className="form">
                            <div className="TForm_Title">
                                    <h2>Formulaire Jeter</h2>
                            </div>
                            <div className="TForm_Content">
                                <TBuild {...this.props} event={this.handleUserInput}/>
                            </div>
                            <div className="TForm_Button">
                                <ManageLinks link={this.handleResearch()} product={this.product} city={this.city} disabled={!this.state.verify.form}/>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        )
    } 
}
export default TForm;

