import cities from "../json/Cities";

export class Formulaire {
    $product = { name: null, material: null };
    $city = { name: null , zip: null, departement: null, lat: null, long: null, form: null };
    $contact = { topic: null, email: null, msg: null };
    citiesCoords;

    constructor(form) {
        this.$city.form = form;
    }

    colorValidity(valid, nodes) {
        if(valid) {
            nodes[1].style.color = "#2962ff";
            nodes[2].style.backgroundColor = "#2962ff";
        }else {
            nodes[1].style.color = "crimson";
            nodes[2].style.backgroundColor = "crimson";
        }
    }

    verifyProductName(value, nodes) {
        const valid = (!value.match(/[^a-zéèêâà']/i) && value.length >= 2) ? true : false;
        this.colorValidity(valid, nodes);
        this.$product.name = value;
        return valid;
    }

    verifyProductCondition(value) {
        const valid = (value !== "default") ? true : false;
        this.$product.material = value;
        return valid;
    }

    verifyZipValidity(value, nodes) {
        const com = document.getElementById("city");
        const arrayData = cities.filter(cityProps => cityProps.zip === value);
        const valid = (arrayData.length !== 0) ? true : false;
        let coords = [];

        //! bad fix
        const option = document.createElement('option');
        com.innerHTML = '';
        option.setAttribute("defaultValue","defaultValue");
        option.setAttribute("hidden", "hidden");
        option.value = "";
        com.appendChild(option);
    
        arrayData.forEach(cityProps => {
            const option = document.createElement('option');
            option.textContent = cityProps.name + ", " + cityProps.department;
            com.appendChild(option);

            coords[coords.length] = { name: cityProps.name, coord: { lat: cityProps.lat, lng: cityProps.long } };
        })

        this.colorValidity(valid, nodes);
        this.$citiesCoords = coords;
        this.$city.zip = value;
        return valid;
    }

    verifyCityValidity(value) {
        //! If possible, for each with key : value;
        const valid = (value !== "default") ? true : false;
        const name_dep = value.split(", ");
        this.$city.name = name_dep[0];
        this.$city.departement = name_dep[1];

        const cityCoord = this.$citiesCoords.filter(city => city.name === this.$city.name);
        this.$city.lat = cityCoord[0].coord.lat;
        this.$city.long = cityCoord[0].coord.lng;
        return valid;
    }

    verifyTopicValidity(value) {
        const valid = (value !== "default") ? true : false;
        this.$contact.topic = value;
        return valid;
    }

    verifyEmailValidity(value, nodes) {
        const valid = value.match(/^(?=.{6,30}@)[0-9a-zA-Z]+(?:\.[0-9a-z]+)*@[a-z0-9-]{2,}(?:\.[a-z]{2,})+/) ? true : false;
        this.colorValidity(valid, nodes);
        this.$contact.email = value;
        return valid;
    }

    verifyMessageValidity(value) {
        //! Need some testing.
        const valid = (/*!value.match(/[^a-zA-Z0-9"'`éèàâ()\s\S]/i) &&*/ value.length >= 10) ? true : false;
        this.$contact.msg = value;
        return valid;
    }

    verifyDiscardValidity(states, cbox) {
        if(cbox) return Object.values(states).every(Boolean);
        else return (states.product && states.material) ? true : false;
    }

    verifyFormValidity(stateValid) {
        return Object.values(stateValid).every(Boolean);
    }

    fetchProduct() {
        return this.$product;
    }

    fetchCity() {
        return this.$city;
    }

    fetchMessage() {
        return this.$contact;
    }
}