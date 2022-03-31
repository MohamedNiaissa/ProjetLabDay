import { useRef, useMemo } from "react";
import { importImages } from "../../../utils/functions/Functions";
import Map from "../utils/Map";

const Overlay = ({event, show, data}) => {
    const save = useRef(show);
    const map = useMemo(() => {
        return (
            <div className="map-field-wrapper">
                <Map location={data} event={null}/>
            </div>
        )
    }, [show]);

    return (
        <section id="overlay" className="overlay">
            <div className="overlay-valor">
                <div className="overlay-valor-window">
                    <input id="overlay-cbox" type="checkbox" onChange={event}/>
                    <label htmlFor="overlay-cbox"><img src={importImages("cross.svg")}/></label>
                </div>

                <div className="overlay-valor-content">
                    {show ? 
                        map
                        :
                        null
                    }
                </div>
            </div>
        </section>
    )
}

export default Overlay;