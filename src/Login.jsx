import React from 'react';
import { useNavigate } from 'react-router-dom';


function Login(){
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/Home');
    };
    return(
        <div>
        <h1>Login</h1>
        <br />
        <label>Username:</label>
        <input type="text"></input>
        <br />
        <label>Password:</label>
        <input type="password"></input>
        <br />
        <button onClick={handleLogin}>Submit</button>
        </div>
    )
}

export default Login