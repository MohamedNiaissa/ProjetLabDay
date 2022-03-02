import React from "react";
import { importImages } from "../../utils/functions/Functions";

const HomeSectionDesc = ({title, text}) => (
    <section className="main-desc">
        <div className="marg"></div>
        <div className="part1">
            <img className="svg" src={importImages("IllustrationTeam.svg")} />
        </div>
        <div className="part2">
            <h1>{title}</h1>
            <p>{text}</p>
        </div>
    </section>
)

export default HomeSectionDesc;