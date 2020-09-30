import React, { useState } from 'react'
import Input from '../../components/layout/Input/Input';
import { useFirebase } from 'react-redux-firebase';
import { useHistory } from 'react-router-dom';

const login = () => {
    let history = useHistory();
    const firebase = useFirebase();
    const [user, setUser] = useState({
        email: "",
        password: "",
    });

    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const submitForm = async (e) => {
        e.preventDefault();
        await firebase.login(user);
        history.replace("/");
    }

    return ( 
        <div className="container">
            <div className="py-5">
                <div className="row mt-5">
                <div className="col-md-4 offset-md-4">
                    <div className="card shadow">
                    <div className="card-body text-center">
                        <img src={require("../../assets/s3.png")} height="100px" alt="logo" />
                        <form onSubmit={submitForm}>
                        <div className="form-group">
                            <Input
                                name="email"
                                placeholder="Enter your email"
                                value={user.email} 
                                onChange={onInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <Input
                                type="password"
                                name="password"
                                placeholder="Enter your password"
                                value={user.password}
                                onChange={onInputChange}
                            />                           
                        </div>
                        <button className="btn btn-danger btn-block">
                            Login to dashboard
                        </button>
                        </form>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
     );
};
 
export default login;