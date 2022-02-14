import React from "react";
import GBuild from "./GBuild";
import image from "../../../img/give.jpg"
import ManageLinks from "../../ManageLinks";
import cities from "../../../Cities";
import Layout from "../../Layout";

class GForm extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            verify: { product: null, material: false, location: null, form: null },
        }

        this.product = { name: null, material: null }
        this.city    = { name: null, zip: null, department: null, lat: null, long: null, found: false }
        this.description = null;
      }

    handleUserInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.validateField(name, value, e);
    }

    validateField(fieldName, value, e) {
        const com = document.getElementById("city");
        const link = document.querySelector(".form-btn").firstChild;
        const btn = document.querySelector(".button");
        const span = document.createElement('span');
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
            case "state":
                validated.material = (value !== "default") ? true : false;
                this.product.material = value;
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
            case "textArea": {
                this.description = e.target.value;
                break;
            }
            default: break;
        }
        validated.form = this.state.verify.product && this.state.verify.material && this.state.verify.location;
        this.setState({
            ...this.state.verify,
            form: validated.form,
        });

        if(validated.form) {
            btn.classList.remove("button--mimas");
            link.innerHTML = '';

            link.appendChild(btn);
            btn.appendChild(span);

            btn.classList.add('button_anime');
        }
    }


    render() {
        return (
            <Layout>
                <main className="forms" id="main-content">
                    <div className="forms-box">
                        <div className="picture-wrapper">
                            <img className="picture" src={image} alt="pic"/>
                        </div>

                        <div className="form-wrapper">
                            <form className="form">
                                <div className="form-title">
                                    <h2>Formulaire Donner</h2>
                                </div>
                                <div className="form-fields">
                                    <GBuild {...this.props} event={this.handleUserInput}/>
                                </div>
                                <div className="form-btn">
                                    <ManageLinks link={"/donner/resultats"} product={this.product} city={this.city} disabled={!this.state.verify.form}/>
                                </div>
                            </form>
                        </div>
                    </div>
                </main>
            </Layout>
        )
    } 
}

export default GForm;