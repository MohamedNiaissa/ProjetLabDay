import website from "../../../utils/json/Website";
import materialTab from "../../../views/Sell/Sell.jsx";
import getTab from "../../../views/Sell/Sell.jsx";
const WebsiteCells = ({mat}) => {
    console.log('mat = '+ mat);


    return(
        
        website.map(el => { 
            console.log("mat / "+el.mat)
            if(el.cat.includes(mat) || el.cat == "general"){
                return (
                    <div className="web-item" key={null} >
                        <div className="web-item-logo" >  
                            <img className="item-logo"src={el.logo} alt="#"/>
                        </div>
                        <div className="web-item-content" >
                            <span className="item-title">{el.name}</span>
                            <p className="item-text">Consultez le site marchand répondant le plus à vos attente</p>
                            <a className="item-btn" href={el.url} target="_blank" rel="noreferrer noopener">Fly to it</a>
                        </div>
                    </div>
                )
            }
    
            
        })
    )
}

export default WebsiteCells;