import React from "react";
import website from "../../utils/json/Website";

const WebsiteCells = () => (
    website.map(el => {
        return (
            <div className="web-item" key={null}>
                <div className="web-item-logo">
                    <img className="item-logo"src={el.logo} alt="#"/>
                </div>
                <div className="web-item-content">
                    <span className="item-title">{el.name}</span>
                    <p className="item-text">Ex, asperiores explicabo atque fugiat illum facilis ducimus numquam, totam iure autem earum reprehenderit nihil?</p>
                    <a className="item-btn" href={el.url} target="_blank" rel="noreferrer noopener">Fly to it</a>
                </div>
            </div>
        )
    })
)

export default WebsiteCells;