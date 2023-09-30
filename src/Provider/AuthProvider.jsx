import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'; 
import {  GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../firebase/firebase.config";


export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();


const AuthProvider = ({children}) => {
  // const authInfo = {name:'kamola'}
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password)=>{
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);

  }

  const signInUser = (email, password)=>{
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  }

  const signInWithGoogle =()=>{
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  }
    
  const logOut = ()=>{
    setLoading(true);
    return signOut(auth)
  }


  useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth, currentUser=>{
      setUser(currentUser);
      setLoading(false);
      console.log('observing useEffect',currentUser);

    })
    return ()=>{
      unSubscribe();
    }

  },[])

  const authInfo = {
    user, 
    loading,
    createUser, 
    signInUser,
    signInWithGoogle,
    logOut
  }

  return (
  <AuthContext.Provider value={authInfo}>
    {children}
  </AuthContext.Provider>
  );
};
AuthProvider.propTypes = {
  children:PropTypes.node,
}
export default AuthProvider;

/*
* 1. Create context and export it.
* 2. Set provider with value.
* 3. Use the Auth provider in the main.jsx file.
* 4. Access the children in the AuthProvider component as children and use it in the middle of the provider.
* 5. 

*/