import React, { Component } from "react";
import './ProfileInfoResources/ProfileInfo.css'


function Card() {
    return (<div class="user-card">
        <div class="circle circle-left"></div>
        <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" class="profile_image" />
        <div class="container">
            <h4><b>Jane Doe</b></h4>
            <p>@janedoe</p>
        </div>
        <div class="circle circle-right"></div>
    </div>)
}


class ProfileInfo extends Component {
    render() {
        return <div class="profile_info">
            <h1>Profile</h1>
            <Card />
            <p>janedoe@uwindsor.ca</p>
            <p>+1 234 56789</p>
            <button class="button">Update</button>
            <div class="profie_info_navbar">
                <a href="#option1">option1</a>
                <a href="#wallet">Wallet</a>
                <a href="#user">user</a>
            </div>
        </div>;
    }
}

export { ProfileInfo };