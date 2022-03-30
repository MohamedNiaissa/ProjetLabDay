const GiveResearch = () => {
    const fetchResearch = () => {
        return [
            {research : "Whatever 1", text : "Bullshit 1"},
            {research : "Whatever 2", text : "Bullshit 2"}
        ]
    }

    let key = 0;
    const json = fetchResearch();
    return (
        <li><span className="tree">Mes recherches donner</span>
            <ul className="nested">
            {
                json.map(el => {
                    return (
                        <li key={key++}><span className="tree">{el.research}</span>
                            <div>
                                {el.text}
                            </div>
                        </li>
                    )
                })
            }
            </ul>
        </li>
    )
}

export default GiveResearch;