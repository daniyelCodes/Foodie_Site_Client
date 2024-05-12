import React, { createContext, useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';
import { GoogleAuthProvider } from "firebase/auth";
import { set } from 'react-hook-form';
import axios from 'axios';


export const AuthContext = createContext()
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    //create user
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //sign with gmail
    const signInWithGmail = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    //login user with email and pass
    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    //logout user
    const logout = () => {
        return signOut(auth)
    }

    //update user
    const updateUserProfile = ({ name, photoURL }) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photoURL
        }).then(() => {
            // Profile updated!
            // ...
        }).catch((error) => {
            // An error occurred
            // ...
        });
    }

    //check signed in user 
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            if (currentUser) {
                const userInfo = { email: currentUser.email }
                axios.post('https://foodie-server-lnwg.onrender.com/jwt', userInfo).then(
                    (response) => {
                        console.log(response.data)
                        if (response.data) {
                            localStorage.setItem('access-token', response.data)
                        }
                    }
                )
            } else {
                localStorage.removeItem('access-token')

            }
            setLoading(false);

        });
        return () => {
            return unsubscribe()
        }
    }, [])

    const authInfo = {
        user,
        createUser,
        signInWithGmail,
        login,
        logout,
        updateUserProfile,
        loading

    }
    return (
        <div>
            <AuthContext.Provider value={authInfo} >
                {children}
            </AuthContext.Provider>
        </div>
    )
}

export default AuthProvider