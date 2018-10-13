import React from "react";
import "./style/style.css";



const Registration = () => {
    return (
        <div class="container">
            <form id="regForm">
                First Name: <span class="goRight"><input type="text"></input></span><br /><br/><br/>
                Surname: <span class="goRight"><input type="text"></input></span><br /><br/><br/>
                Preferred Contact Details:<input type="text"></input><br /><br/><br/><br/>
                <button type="button" id="submit">Submit Details</button>
            </form>


        </div>
    );
};


export default Registration;