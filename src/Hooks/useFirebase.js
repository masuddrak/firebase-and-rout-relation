import React, { useEffect, useState } from 'react';
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from '../firebase.init';

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const useFirebase = () => {
    const [user, setUser] = useState({})

    useEffect(() => {

    }, [])
    const singInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                console.log(user)
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });
    }
    return { user, singInWithGoogle }
};

export default useFirebase;