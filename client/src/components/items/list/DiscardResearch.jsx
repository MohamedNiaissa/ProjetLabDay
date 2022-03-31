const DiscardResearch = ({discardCaret, discardDel, event, key = 0}) => (
    <li><span className="tree">Ce que je dois jeter</span>
        <ul className="nested">
        {
            discardCaret.map(el => {
                const { research, dump } = el;
                return (
                    <li key={key++}><span className="tree">{research.name} en {research.material}, {research.zip}</span>
                        <div className="tree-content">
                            <div className="tree-content-location">
                                <p>{dump.name}, {dump.zip}</p>
                                <p>{dump.address}</p>
                            </div>
                            <div className="tree-content-controller">
                                <button className="small-button" onClick={e => event(research, dump, true)}>Afficher la carte</button>
                                <button className="small-button" onClick={e => discardDel(research, dump, e)}>Supprimer la tâche</button>
                            </div>
                        </div>
                    </li>
                )
            })
        }
        </ul>
    </li>
)

export default DiscardResearch;