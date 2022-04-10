import React from 'react';
import useFirebase from '../../Hooks/useFirebase';
import './Login.css'
const Login = () => {
    const {singInWithGoogle}=useFirebase()
    return (
        <div className='login'>
            <button onClick={singInWithGoogle}>Sign In With Google</button>
            <h2>Longin Now</h2>
            <form>
                <input type="email" placeholder='Email' />
                <br />
                <input type="password" name="" id="" placeholder='passwor'/>
                <br />
                <input type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Login;