const Switch = ({event, off, on, nameID}) => (
    <div className="switch">
        <input id={nameID} className="switch-checkbox" type="checkbox" name="checkbox" onClick={event} />
        <label className="switch-content" htmlFor={nameID}>
            <div className="switch-state" data-off={off} data-on={on}>
                <span className="ball"></span>
            </div>
        </label>
    </div>
)

export default Switch;