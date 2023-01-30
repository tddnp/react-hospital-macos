import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import { getAllUsers, createNewUserService, handleLoginApi, deleteUserService, editUserService } from "../../services/userService";
import ModalUser from "./ModalUser";
import ModalEditUser from "./ModalEditUser";
import "./UserManage.scss";
import { emitter } from "../../utils/emitter";

class UserManage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            arrUsers: [],
            isOpenModalUser: false,
            isOpenModalEditUser: false,
            userEdit: [],
        }
    }

    async componentDidMount() {
        await this.getAllUserFromReact();
    }

    getAllUserFromReact = async () => {
        let response = await getAllUsers("ALL")
        //console.log('get data from node: ', response);
        if (response && response.errCode === 0) {
            this.setState({
                arrUsers: response.users
            })
            //console.log('check state user1: ', this.state.arrUsers);
        }
    }

    hanleAddNewUser = () => {
        this.setState({
            isOpenModalUser: true
        })
    }

    toggleUserModal = () => {
        this.setState({
            isOpenModalUser: !this.state.isOpenModalUser
        })
    }

    toggleUserEditModal = () => {
        this.setState({
            isOpenModalEditUser: !this.state.isOpenModalEditUser,
        })
    }

    createNewUser = async (data) => {
        try {
            let response = await createNewUserService(data);
            if (response && response.errCode !== 0) {
                alert(response.errMessage)
            } else {
                await this.getAllUserFromReact();
                this.setState({
                    isOpenModalUser: false,
                })
                emitter.emit('EVENT_CLEAR_MODAL_DATA');
            }
        } catch (error) {
            console.log(error)
        }
    }

    handleDeleteUser = async (user) => {
        //console.log('click delete btn', user);
        try {
            let res = await deleteUserService(user.id);
            //console.log(res);
            if (res && res.errCode === 0) {
                await this.getAllUserFromReact();
            } else {
                alert(res.errMessage);
            }
        } catch (error) {
            console.log(error);
        }
    }

    handleEditUser = (user) => {
        console.log('check edit user ', user);
        this.setState({
            isOpenModalEditUser: true,
            userEdit: user,
        })
    }

    doEditUser = async (user) => {
        //console.log('click save user', res);
        try {
            let res = await editUserService(user);
            if (res && res.errCode === 0) {
                this.setState({
                    isOpenModalEditUser: false
                })

                await this.getAllUserFromReact();
            } else {
                alert(res.errMessage)
            }
        } catch (error) {
            console.log(error)
        }
    }

    /*
     * Life cycle
     * run component:
     * 1. run constructor -> init state
     * 2. did mount (set state): born; unmount
     * 3. render (re-render)
     */

    render() {
        //console.log("check render ", this.state);
        let arrUsers = this.state.arrUsers
        return (
            <div className="user-container">
                <ModalUser
                    isOpen={this.state.isOpenModalUser}
                    toggleFromParent={this.toggleUserModal}
                    createNewUser={this.createNewUser}
                />
                {
                    this.state.isOpenModalEditUser &&
                    <ModalEditUser
                        isOpen={this.state.isOpenModalEditUser}
                        toggleFromParent={this.toggleUserEditModal}
                        currentUser={this.state.userEdit}
                        editUser={this.doEditUser}
                    />
                }
                <div className="title text-center">Manage user with DuyTran</div>
                <div className="mx-1">
                    <button
                        className="btn btn-primary px-3"
                        onClick={() => this.hanleAddNewUser()}
                    ><i className="fas fa-plus"></i>Add user
                    </button>
                </div>
                <div className="users-table container mt-3">
                    <table className="table table-hover text-center">
                        <thead>
                            <tr>
                                <th scope="col">Id</th>
                                <th scope="col">Email</th>
                                <th scope="col">First name</th>
                                <th scope="col">Last name</th>
                                <th scope="col">Address</th>
                                <th scope="col">Phone number</th>
                                <th scope="col">Sex</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                arrUsers && arrUsers.map((item, index) => {
                                    return (
                                        <tr>
                                            <td>{item.id}</td>
                                            <td>{item.email}</td>
                                            <td>{item.firstName}</td>
                                            <td>{item.lastName}</td>
                                            <td>{item.address}</td>
                                            <td>{item.phoneNumber}</td>
                                            <td>{item.gender}</td>
                                            <td>
                                                <button className="btn-edit"
                                                    onClick={() => this.handleEditUser(item)}
                                                ><i className="fas fa-sliders-h"></i>
                                                </button>
                                                <button
                                                    className="btn-delete"
                                                    onClick={() => this.handleDeleteUser(item)}
                                                ><i className="fas fa-trash"></i>
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {}
}

const mapDispatchToProps = (dispatch) => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(UserManage)
