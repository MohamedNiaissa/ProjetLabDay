import CustomLink from "../utils/CustomLink";

const Navigation = () => (
    <ul className="nav__content">
        <li><CustomLink href="/vendre" value="Vendre" className="underline"/></li>
        <li><CustomLink href="/donner" value="Donner" className="underline"/></li>
        <li><CustomLink href="/jeter" value="Jeter" className="underline"/></li>
    </ul>
)

export default Navigation;