import React from 'react';

const Register = () => {
    return (
        <div>
            <h2>Please Register</h2>
            <form>
                <input type="text" placeholder='Name' />
                <br />
                <input type="email" placeholder='Email' />
                <br />
                <input type="password" name="" id="" placeholder='passwor'/>
                <br />
                <input type="submit" value="Register" />
            </form>
        </div>
    );
};

export default Register;