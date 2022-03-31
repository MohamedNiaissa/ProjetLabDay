import { Link } from "react-router-dom";

function CustomLink({href, value, className}) {
    const isActive = href === window.location.pathname;
    const content = isActive ? {class: 'active', href: '/home'} : {class: '', href: href};
    return  <Link className={`${className} ${content.class}`} to={content.href}>
                <span className="menu-item">{value}</span>
            </Link>
}

export default CustomLink;