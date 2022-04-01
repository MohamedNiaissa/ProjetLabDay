import axios from "axios";
import { useState } from "react";
import { UserUI, Credentials, Theme } from "../../components/~items";
import { getToken } from "../../utils/functions/Functions";
import { Notif } from "../../utils/functions/Popup";
import { Background } from "../../components/~items";

const Settings = ({event, eventPic, picture}) => {
    const [options, setOptions] = useState("#account");

    const handleOption = (e) => {
        setOptions(prevVal => prevVal = window.location.hash)
    }

    const deleteAccount = async () => { 
        await axios.post("http://localhost:5001/api/user/delete", {token : getToken()})
        .then(res => event(true))
        .catch(function(error) { console.error(error.response.data.message) } );
    }

    const updateAccountEmail = async (e) => {
        e.preventDefault();

        const newEmail = document.getElementById("new-email");
        const pwdVerif1 = document.getElementById("current-password-one");

        if(newEmail.value !== "" && pwdVerif1.value !== "") {
            const data = {token: getToken(), email: newEmail.value, password: pwdVerif1.value};
            await axios.post("http://localhost:5001/api/user/update-email", data)
            .then(res => Notif("#d4c465", res.data.message) )
            .catch(function(error) { Notif("crimson", error.response.data.message) } );
        }
    }

    const updateAccountPwd = async (e) => {
        e.preventDefault();

        const oldPwd = document.getElementById("current-password-two");
        const newPwd = document.getElementById("new-password");
        const pwdVerif2 = document.getElementById("new-password-verif");

        if(oldPwd.value !== "" && newPwd.value === pwdVerif2.value && newPwd.value !== "" && pwdVerif2.value !== "") {
            const data = {token: getToken(), password: oldPwd.value, newPassword: newPwd.value, verif: pwdVerif2.value};
            await axios.post("http://localhost:5001/api/user/update-pwd", data)
            .then(res => Notif("#d4c465", res.data.message) )
            .catch(function(error) { Notif("crimson", error.response.data.message) } );
        }
    }

    const updateAccountImg = async (e) => {
        let image = document.querySelector(".u-pic");
        const img = e.target.files[0];
        const promise = new Promise((resolve) => {
            const reader = new FileReader();
            reader.onload = function () {
                resolve(reader.result);
            }
            reader.readAsDataURL(img);
        });

        promise.then(async img => {
            const data = {token: getToken(), pic: img}
            await axios.post("http://localhost:5001/api/user/update-pic", data)
            .then(res => { return res })
            .catch(function(error) { console.error(error) } );
            
            eventPic(img);
        });
    }

    return (
        <>
        <main className="settings" id="main-content">
            <div className="marg" />
            
            <div className="settings-content">
                <UserUI event={handleOption} del={deleteAccount} imageEvent={updateAccountImg} picture={picture}/>

                <section className="settings-options">
                    <div className="options-wrapper">
                        <div className="marg" />
                        <Credentials upEmail={updateAccountEmail} upPwd={updateAccountPwd}/> 
                        {/* {
                            options === "#account" ? 
                            <Credentials upEmail={updateAccountEmail} upPwd={updateAccountPwd}/> 
                            : 
                                <Theme />
                         } */}
                    </div>
                </section>
            </div>
        </main>
        </>
    )
}

export default Settings;