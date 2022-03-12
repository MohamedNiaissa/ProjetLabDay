const Switch = ({event, name, off, on, nameID, state, color}) => (
    <div className="switch" disabled={state}>
        <input id={nameID} className="switch-checkbox" type="checkbox" name={name} onClick={event}/>
        <label className={`switch-content ${color}`} htmlFor={nameID}>
            <div className="switch-state" data-off={off} data-on={on}>
                <span className="ball"></span>
            </div>
        </label>
    </div>
)

export default Switch;