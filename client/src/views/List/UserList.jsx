import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { HeaderList, GiveResearch, DiscardResearch, Overlay } from "../../components/~items";
import { getToken, actionOverlay, addEventOnTree} from "../../utils/functions/Functions";

const UserList = () => {
    const doneLoading = useRef(0);
    const whichMap = useRef("");
    const [overlay, setOverlay] = useState(false);
    const [post, setPost] = useState({discard: [], give: []});
    const [discardMap, setDiscardMap] = useState({});
    const [givedMap, setGiveMap] = useState({});

    useEffect(() => {
        if(doneLoading.current !== null ) {

            if(doneLoading.current === 0) {
                async function fetchData() {
                    try {
                        const discard = await axios.post("http://localhost:5001/api/user/fetch-discard-research", {token: getToken()})
                        .then(res => { return res })
                        .catch(error => {console.log(error.response.data.message)});

                        const give = await axios.post("http://localhost:5001/api/user/fetch-give-research", {token: getToken()})
                        .then(res => { return res })
                        .catch(error => {console.log(error.response.data.message)});

                        const obj = {discard: discard.data, give: give.data}
                        setPost(prevData => prevData = obj);
                        doneLoading.current = 1;
                    } catch (err) {
                        console.log(err);
                    }
                }

                fetchData();
                actionOverlay(false);
            }

            if(doneLoading.current === 1) {
                setTimeout(() => {
                    addEventOnTree();
                    doneLoading.current = null;
                }, 300);
            }
        }
    }, [post])

    const deleteFromDiscard = async (research, dump, e) => {
        const data = []
        post.discard.forEach(el => {
            if(el.research !== research && el.dump !== dump) {
                data.push(el);
            }
        })

        await axios.post("http://localhost:5001/api/user/delete-discard-research", {token: getToken(), research: research, dump: dump})
        .then(res => { console.log(res.data); return res })
        .catch(error => {console.log(error.response.data.message)});

        setPost(prevData => ({...prevData, discard: data}));
    }

    const deleteFromGive = async (research, assos, e) => {
        const data = []
        post.give.forEach(el => {
            if(el.research !== research && el.assos !== assos) {
                data.push(el);
            }
        })

        await axios.post("http://localhost:5001/api/user/delete-give-research", {token: getToken(), research: research, assos: assos})
        .then(res => { console.log(res.data); return res })
        .catch(error => {console.log(error.response.data.message)});

        
        setPost(prevData => ({...prevData, give: data}));
    }

    const showDiscardMap = (research, dump, btn) => {
        let data = {};
        actionOverlay(!overlay);

        if(btn) {
            post.discard.forEach(el => {
                if(el.research !== research && el.dump !== dump) {
                    data = {research: research, dump: dump, form: "disList"}
                }
            })
        }

        setDiscardMap(prev => prev = data);
        setOverlay(!overlay);
        whichMap.current = "discard";
    }

    const showGiveMap = (research, assos, btn) => {
        let data = {};
        actionOverlay(!overlay);

        if(btn) {
            post.give.forEach(el => {
                if(el.research !== research && el.assos !== assos) {
                    data = {research: research, assos: assos, form: "givList"}
                }
            })
        }

        setGiveMap(prev => prev = data);
        setOverlay(!overlay);
        whichMap.current = "give";
    }

    return (
        <>
        <main className="mylist">
            <HeaderList />
            <section className="mylist-content">
                <ul className="mylist-tree">
                    <GiveResearch giveCaret={post.give} giveDel={deleteFromGive} event={showGiveMap}/>
                    <DiscardResearch discardCaret={post.discard} discardDel={deleteFromDiscard} event={showDiscardMap}/>
                </ul>
            </section>
        </main>
        <Overlay event={whichMap.current === "discard" ? showDiscardMap : showGiveMap} show={overlay} data={whichMap.current === "discard" ? discardMap : givedMap}/>
        </>
    )
}

export default UserList;