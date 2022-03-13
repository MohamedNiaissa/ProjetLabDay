const Switch = ({id, name, off, on, disabled, theme, event}) => (
    <div className="switch" disabled={disabled}>
        <input id={id} className="switch-checkbox" type="checkbox" name={name} onChange={event}/>
        <label className={`switch-content ${theme}`} htmlFor={id}>
            <div className="switch-state" data-off={off} data-on={on}>
                <span className="ball"></span>
            </div>
        </label>
    </div>
)

export default Switch;