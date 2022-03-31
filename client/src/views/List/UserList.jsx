import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { HeaderList, GiveResearch, DiscardResearch, Overlay } from "../../components/~items";
import { getToken, actionOverlay, addEventOnTree} from "../../utils/functions/Functions";

const UserList = () => {
    const doneLoading = useRef(false);
    const [overlay, setOverlay] = useState(false);
    const [discardPost, setDiscardPost] = useState([]);
    const [discardMap, setDiscardMap] = useState({});

    useEffect(() => {
        if(doneLoading.current) {
            addEventOnTree();
            doneLoading.current = null;
        }else if(doneLoading.current === false) {
            async function fetchData() {
                try {
                    const res = await axios.post("http://localhost:5001/api/user/fetch-discard-research", {token: getToken()})
                    .then(res => { return res })
                    .catch(error => {console.log(error.response.data.message)});
                    setDiscardPost(prevData => prevData = res.data);
                } catch (err) {
                    console.log(err);
                }
            }

            fetchData();
            actionOverlay(false);
            doneLoading.current = true;
        }
    }, [discardPost])

    const deleteFromDiscard = async (research, dump, e) => {
        const data = []
        discardPost.forEach(el => {
            if(el.research !== research && el.dump !== dump) {
                data.push(el);
            }
        })

        await axios.post("http://localhost:5001/api/user/delete-discard-research", {token: getToken(), research: research, dump: dump})
        .then(res => { console.log(res.data); return res })
        .catch(error => {console.log(error.response.data.message)});

        setDiscardPost(prevData => prevData = data);
    }

    const showMap = (research, dump, btn) => {
        let data = {};
        actionOverlay(!overlay);

        if(btn) {
            discardPost.forEach(el => {
                if(el.research !== research && el.dump !== dump) {
                    data = {research: research, dump: dump, form: "disList"}
                }
            })
        }

        setDiscardMap(prev => prev = data);
        setOverlay(!overlay);
    }

    return (
        <>
        <main className="mylist">
            <HeaderList />
            <section className="mylist-content">
                <ul className="mylist-tree">
                    <GiveResearch />
                    <DiscardResearch discardCaret={discardPost} discardDel={deleteFromDiscard} event={showMap}/>
                </ul>
            </section>
        </main>
        <Overlay event={showMap} show={overlay} data={discardMap}/>
        </>
    )
}

export default UserList;