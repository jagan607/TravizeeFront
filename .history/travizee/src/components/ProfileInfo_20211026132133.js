import React, { Component } from "react";
import './ProfileInfoResources/ProfileInfo.css'
import { userActions } from "./../_actions/user.actions";
import { connect } from "react-redux";

function Card(props) {
    return (
    <div class="user-card">
        <div class="circle circle-left"></div> 
        <img src={props.user.profilePic} onError='https://www.w3schools.com/howto/img_avatar.png' alt="Avatar" class="profile_image" />
        <div class="container">
            <h4><b>{props.user.userName}</b></h4>
            <p>@{props.user.userName}</p>
        </div>
        <div class="circle circle-right"></div>
    </div>
    )
}


class ProfileInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
          email:'',
          fullName : '',
          mobile : '',
          profilePic:''
        };
        this.Card = this.Card().bind(this);
      }
    render() {
        return <div class="profile_info">
            <h1>Profile</h1>
            {/* <Card /> */}
            {this.Card(this.props)}
            <p>{this.props.user.email}</p>
            <p>+1 234 56789</p>
            <button class="button">Update</button>
            <div class="profie_info_navbar">
                <a href="#option1">Ticket</a>
                <a href="#wallet">Wallet</a>
                <a href="#user">Profile</a>
            </div>
        </div>;
    }
}

function mapState(state) {
    const { user } = state.authentication;
    return { user };
  }
  
  const actionCreators = {
    register: userActions.register,
  };
  
  const connectedRegisterPage = connect(mapState, actionCreators)(ProfileInfo);
  export { connectedRegisterPage as ProfileInfo };