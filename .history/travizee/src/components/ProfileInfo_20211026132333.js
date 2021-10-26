import React, { Component } from "react";
import './ProfileInfoResources/ProfileInfo.css'
import { userActions } from "./../_actions/user.actions";
import { connect } from "react-redux";

 


class ProfileInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
          email:'',
          fullName : '',
          mobile : '',
          profilePic:''
        };
      }

    render() {
        return <div class="profile_info">
            <h1>Profile</h1>
            {/* <Card /> */}
            <div class="user-card">
            <div class="circle circle-left"></div> 
            <img src={this.props.user.profilePic} onError='https://www.w3schools.com/howto/img_avatar.png' alt="Avatar" class="profile_image" />
            <div class="container">
                <h4><b>{this.props.user.userName}</b></h4>
                <p>@{this.props.user.userName}</p>
            </div>
            <div class="circle circle-right"></div>
        </div>
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