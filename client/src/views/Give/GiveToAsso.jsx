import { useLocation } from "react-router";
import { Map } from "../../components/~items";


const GiveToAsso = () => (
    <main className="map" id="main-content">
        <div className="map-field">
            <div className="map-field-wrapper">
                <Map location={useLocation().state.city}/>
            </div>
        </div>
        <div className="saved">
            <div className="saved-div">
                <h3>Association sélectionnée</h3>
                <div className="saved-div-item">
                    <h5>Secours Populaire Annecy</h5>
                    <p>18 rue de Charlemagne</p>
                    <p>0601405802</p>
                    <p>Annecy</p>
                </div>
                <div className="saved-div-buttons">
                    <button>
                        Sauvegarder la sélection
                    </button>
                </div>
            </div>
        </div>
    </main>
)

export default GiveToAsso;