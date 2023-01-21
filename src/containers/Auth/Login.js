/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";
import * as actions from "../../store/actions";
import './Login.scss';
import { FormattedMessage } from 'react-intl';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            showPassword: false,
        }
    }

    handleOnChangeUsername = (event) =>{
        this.setState({
            username: event.target.value
        })
    }

    handleOnChangePassword = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    handleLogin = () => {
        console.log('username: ', this.state.username, 'password: ', this.state.password)
        console.log('all state: ', this.state)
    }

    handleShowHidePassword = () => {
        this.setState({
            showPassword: !this.state.showPassword
        })
    }

    render() {
        //JSX


        return (
            <div class="login-background">
                <div class="login-container">
                    <div class="login-content row">
                        <div class="col-12 text-login">Login</div>
                        <div class="col-12 form-group login-input">
                            <label>Username:</label>
                            <input type="text" 
                            class="form-control" 
                            placeholder='enter your username'
                            value={this.state.username}
                            onChange={(event)=> this.handleOnChangeUsername(event)}
                             />
                        </div>
                        <div class="col-12 form-group login-input">
                            <label>Password:</label>    
                            <div class="custom-input-password">                               
                                <input type={this.state.showPassword ? 'text' : 'password'} 
                                class="form-control" 
                                placeholder='enter your password' 
                                value={this.state.password}
                                onChange={(event)=> this.handleOnChangePassword(event)}    
                                />
                                <span onClick={() => {this.handleShowHidePassword()}}>
                                    <i class={this.state.showPassword? 'fas fa-eye' : 'fas fa-eye-slash'}></i>
                                </span>
                            </div>                          
                        </div>
                        <div class="col-12">
                            <button class="btn-login" onClick={() => { this.handleLogin() }}>Login</button>
                        </div>
                        <div class="col-12">
                            <span class="forgot-password">Forgot your password?</span>
                        </div>
                        <div class="col-12 text-center mt-3">
                            <span class="text-other-login">Or login with: </span>
                        </div>
                        <div class="col-12 social-login">
                            <i class="fab fa-google google"></i>
                            <i class="fab fa-facebook facebook"></i>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),
        adminLoginSuccess: (adminInfo) => dispatch(actions.adminLoginSuccess(adminInfo)),
        adminLoginFail: () => dispatch(actions.adminLoginFail()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
