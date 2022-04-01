const GiveResearch = ({giveCaret, giveDel, event, key = 0}) => (
    <li><span className="tree">Ce que je dois donner</span>
        <ul className="nested">
        {
            giveCaret.map(el => {
                const { research, assos } = el;
                return (
                    <li key={key++}><span className="tree">{research.name} {research.material}, {research.zip}</span>
                        <div className="tree-content">
                            <div className="tree-content-location">
                                <p>{assos.name}, {assos.zip}</p>
                                <p>{assos.address}</p>
                            </div>
                            <div className="tree-content-controller">
                                <button className="small-button" onClick={e => event(research, assos, true)}>Afficher la carte</button>
                                <button className="small-button" onClick={e => giveDel(research, assos, e)}>Supprimer la tâche</button>
                            </div>
                        </div>
                    </li>
                )
            })
        }
        </ul>
    </li>
)

export default GiveResearch;