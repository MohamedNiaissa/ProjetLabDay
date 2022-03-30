// import { useMemo } from "react"

const DiscardResearch = () => {
    // const json = useMemo();
    const fetchResearch = () => {
        return [
            {research : "Whatever 1", text : "Bullshit 1"},
            {research : "Whatever 2", text : "Bullshit 2"},
            {research : "Whatever 3", text : "Bullshit 3"},
            {research : "Whatever 4", text : "Bullshit 4"},
        ]
    }

    let key = 0;
    const json = fetchResearch();
    return (
        <li><span className="tree">Mes recherches jeter</span>
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

export default DiscardResearch;