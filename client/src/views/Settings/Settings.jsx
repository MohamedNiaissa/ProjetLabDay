import axios from "axios";
import { useState } from "react";
import { UserUI, Credentials, Theme } from "../../components/~items";
import { getToken } from "../../utils/functions/Functions";

const Settings = ({event}) => {
    const [options, setOptions] = useState("#account");

    const handleOption = (e) => {
        setOptions(prevVal => prevVal = window.location.hash)
    }

    const deleteAccount = async () => { 
        await axios.post("http://localhost:5001/api/user/delete", {token : getToken()}).then(res => {
            event();  return res;
        }).catch(function(error) { console.error(error.response.data.message) } );
    }

    const updateAccountEmail = async (e) => {
        e.preventDefault();

        const newEmail = document.getElementById("new-email");
        const pwdVerif1 = document.getElementById("current-password-one");

        if(newEmail.value !== "" && pwdVerif1.value !== "") {
            const data = {token: getToken(), email: newEmail.value, password: pwdVerif1.value};
            await axios.post("http://localhost:5001/api/user/update-email", data)
            .then(res => { return res } )
            .catch(function(error) { console.error(error.response.data.message) } );
        }
    }

    const updateAccountPwd = async (e) => {
        e.preventDefault();

        const oldPwd = document.getElementById("current-password-two");
        const newPwd = document.getElementById("new-password");
        const pwdVerif2 = document.getElementById("new-password-verif");

        if(oldPwd.value !== "" && newPwd.value === pwdVerif2.value && newPwd.value !== "" && pwdVerif2.value !== "") {
            const data = {token: getToken(), password: oldPwd.value, newPassword: newPwd.value, verif: pwdVerif2.value};
            console.log("bitch")
            await axios.post("http://localhost:5001/api/user/update-pwd", data)
            .then(res => { return res } )
            .catch(function(error) { console.error(error.response.data.message) } );
        }
    }

    return (
        <main className="settings" id="main-content">
            <div className="marg" />
            
            <div className="settings-content">
                <UserUI event={handleOption} del={deleteAccount}/>

                <section className="settings-options">
                    <div className="options-wrapper">
                        <div className="marg" />
                        {
                            options === "#account" ? 
                                <Credentials upEmail={updateAccountEmail} upPwd={updateAccountPwd}/> 
                            : 
                                <Theme />
                         }
                    </div>
                </section>
            </div>
        </main>
    )
}

export default Settings;