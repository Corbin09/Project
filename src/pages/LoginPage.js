import Header from "../components/Header";
import { useState } from "react";
import user from "../data/user";
import { NavLink } from "react-router-dom";

const LoginPage = () => {
    const [userValue, setUserValue] = useState( "");
    const [passWord, setPassWord] = useState("");

    const login = (input, output) =>{
        if((user.id === input) && (user.password === output)){
            
        }
    }

    return (
        <>
            <Header></Header>
            <div className="mt-5 mx-auto" style={{width: "400px"}}>
                {/* Pills navs */}
                <ul className="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
                    <li className="nav-item" role="presentation">
                        <a
                            className="nav-link active"
                            id="tab-login"
                            data-mdb-toggle="pill"
                            href="#pills-login"
                            role="tab"
                            aria-controls="pills-login"
                            aria-selected="true"
                        >
                            Login
                        </a>
                    </li>
                    <li className="nav-item" role="presentation">
                        <a
                            className="nav-link"
                            id="tab-register"
                            data-mdb-toggle="pill"
                            href="#pills-register"
                            role="tab"
                            aria-controls="pills-register"
                            aria-selected="false"
                        >
                            Register
                        </a>
                    </li>
                </ul>
                <div className="tab-content">
                    <div
                        className="tab-pane fade show active"
                        id="pills-login"
                        role="tabpanel"
                        aria-labelledby="tab-login"
                    >
                        <form>
                            {/* Email input */}
                            <div className="form-outline mb-4">
                                <input type="email" id="loginName" className="form-control" value={userValue} onChange={(event) => {setUserValue(event.target.value)}}/>
                                <label className="form-label" htmlFor="loginName">
                                    Email or username
                                </label>
                            </div>
                            {/* Password input */}
                            <div className="form-outline mb-4">
                                <input type="password" id="loginPassword" className="form-control" value={passWord} onChange={(event) => {setPassWord(event.target.value)}}/>
                                <label className="form-label" htmlFor="loginPassword">
                                    Password
                                </label>
                            </div>
                            {/* Submit button */}
                            <NavLink to="/" type='submit' className='btn btn-primary btn-block mb-4'>Sign in</NavLink>
                            
                            {/* Register buttons */}
                            <div className="text-center">
                                <p>
                                    Not a member? <a href="#!">Register</a>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
                {/* Pills content */}
            </div>
        </>
    )
}

export default LoginPage;