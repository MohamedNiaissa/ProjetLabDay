const AuthSwitch = ({left, right, radius, title, href, text}) => (
    <div className="shift" id="switch" style={{left: left, right: right, borderRadius: radius}}>
        <div className="shift__title">
            <h2>{title}</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor est unde porro.</p>
        </div>
        <div className="shift__btn">
            <a className="auth-button col-white" id="slider" href={href}><strong>{text}</strong></a>
        </div>
    </div>
)

export default AuthSwitch;