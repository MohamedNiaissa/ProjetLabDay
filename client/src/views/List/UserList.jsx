import { useEffect } from "react";
import { HeaderList, GiveResearch, DiscardResearch } from "../../components/~items";

const UserList = () => {
    useEffect(() => {
        document.querySelectorAll(".tree").forEach(el => {
            el.addEventListener("click", function() {
                this.parentElement.childNodes.forEach(el => {
                    if(el.tagName === "UL") el.classList.toggle("active");
                    if(el.tagName === "DIV") el.classList.toggle("active");
                })
            })
        })
    }, [])

    return (
        <main className="mylist">
            <HeaderList />
            <div className="mylist-content">
                <ul className="mylist-tree">
                    <GiveResearch />
                    <DiscardResearch />
                </ul>
            </div>
        </main>
    )
}

export default UserList;