import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { getAllUsers } from '../../services/userService';
import './UserManage.scss';

class UserManage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            arrUsers: [],
        }
    }   

    async componentDidMount() {
        let response = await getAllUsers('ALL');
        //console.log('get data from node: ', response);
        if (response && response.errCode === 0){
            this.setState({
                arrUsers: response.users,
            })
            //console.log('check state user1: ', this.state.arrUsers);
        }
    }


    render() {
        //console.log("check render ", this.state);
        let arrUsers = this.state.arrUsers;
        return (
            <div className="user-container">
                <div className="title text-center">Manage user with DuyTran</div>
                <div className='users-table container mt-3'>
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
                                arrUsers && arrUsers.map( (item, index) => {
                                    //console.log("Duy check map", item, index);
                                    return (
                                        <tr>
                                            <td>{item.id}</td>
                                            <td>{item.email}</td>
                                            <td>{item.firstName}</td>
                                            <td>{item.lastName}</td>                                             
                                            <td>{item.address}</td>                                                                                             <td>{item.phoneNumber}</td>                                             
                                            <td>{item.gender}</td>    
                                            <td>
                                                <button className="btn-edit"><i class="fas fa-sliders-h"></i></button>
                                                <button className="btn-delete"><i class="fas fa-trash"></i></button>
                                            </td>                                                                                     
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                        </table>
                    </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
