const AuthSwitch = ({data, event}) => {
    const {left, right, radius, title, text} = data;

    return (
        <section className="shift" id="switch" style={{left: left, right: right, borderRadius: radius}}>
            <div className="shift__title">
                <h2>{title}</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor est unde porro.</p>
            </div>
            <div className="shift__btn">
                <input id="shift-cbx" className="switch-checkbox" type="checkbox" name="shiftcbx" onChange={event}/>
                <label className="auth-button col-white" htmlFor="shift-cbx">
                    <strong>{text}</strong>
                </label>
            </div>
        </section>
    )
}

export default AuthSwitch;