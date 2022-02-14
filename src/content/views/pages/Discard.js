import React from "react";
import TBuild from "../partials/form/DiscardLayout";
import cities from "../../../www/json/Cities";
import Redirect from "../../../www/actions/Redirect";
import Layout from "../partials/Layout";


function importAll(r) {
    let images = {};
    r.keys().map((item) => ( images[item.replace('./', '')] = r(item) ));
    return images;
}

class Discard extends React.Component {
    imagesStatic = importAll(require.context('../../img', false, /\.(png|jpe?g|svg)$/));

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
        const link = document.querySelector(".form-btn").firstChild;
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
                
                this.setState({...this.state, cboxChecked: e.target.checked});
                if(e.target.checked) {
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
                    btn.classList.remove('button_anime');
                    link.innerHTML = '';

                    link.appendChild(btn);
                    btn.appendChild(span);

                    btn.classList.add('button_anime_back');
                    this.setState({...this.state, btnTriggered: false});
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
                this.setState({...this.state, btnTriggered: true});
            }else if(this.city.name !== null && !this.state.verify.test) {
                btn.classList.remove("button_anime_back");
                btn.classList.remove("button--mimas");
                link.innerHTML = '';

                link.appendChild(btn);
                btn.appendChild(span);

                btn.classList.add('button_anime');
                this.setState({...this.state.verify, test: true});
                this.setState({...this.state, btnTriggered: false});
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
            <Layout>
                <main className="forms" id="main-content">
                    <div className="forms-box">
                        <div className="picture-wrapper">
                            <img className="picture" src={this.imagesStatic["discard.jpg"]} alt="pic"/>
                        </div>

                        <div className="form-wrapper">
                            <form className="form">
                                <div className="form-title">
                                    <h2>Formulaire Jeter</h2>
                                </div>
                                <div className="form-fields">
                                    <TBuild {...this.props} event={this.handleUserInput}/>
                                </div>
                                <div className="form-btn">
                                    <Redirect link={this.handleResearch()} product={this.product} city={this.city} disabled={!this.state.verify.form}/>
                                </div>
                            </form>
                        </div>
                    </div>
                </main>
            </Layout>
        )
    } 
}
export default Discard;

