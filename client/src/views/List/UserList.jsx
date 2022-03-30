import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { HeaderList, GiveResearch, DiscardResearch } from "../../components/~items";
import { getToken } from "../../utils/functions/Functions";

const UserList = () => {
    const doneLoading = useRef(false);
    const [discardPost, setDiscardPost] = useState([]);

    useEffect(() => {
        if(doneLoading.current) {
            console.log("het")
            document.querySelectorAll(".tree").forEach(el => {
                el.addEventListener("click", function() {
                    this.parentElement.childNodes.forEach(el => {
                        if(el.tagName === "UL") el.classList.toggle("active");
                        if(el.tagName === "DIV") el.classList.toggle("active");
                    })
                })
            })
            doneLoading.current = null;
        }else if(doneLoading.current === false) {
            async function fetchData() {
                try {
                    const res = await axios.post("http://localhost:5001/api/user/fetch-discard-research", {"token": getToken()})
                    .then(res => { return res })
                    .catch(error => {console.log(error.response.data.message)});
                    setDiscardPost(res.data);
                } catch (err) {
                    console.log(err);
                }
            }

            fetchData();
            doneLoading.current = true;
        }
    }, [discardPost])




    return (
        <main className="mylist">
            <HeaderList />
            <div className="mylist-content">
                <ul className="mylist-tree">
                    <GiveResearch />
                    <DiscardResearch discardCaret={discardPost}/>
                </ul>
            </div>
        </main>
    )
}

export default UserList;