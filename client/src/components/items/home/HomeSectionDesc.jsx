import { importImages } from "../../../utils/functions/Functions";

const HomeSectionDesc = ({title, text}) => (
    <section className="description">
        <div className="marg" />
        <div className="description__svg">
            <img src={importImages("IllustrationTeam.svg")} alt="team_illustration"/>
        </div>
        <div className="description__presentation">
            <h1>{title}</h1>
            <p>{text}</p>
        </div>
    </section>
)

export default HomeSectionDesc;