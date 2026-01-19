import React, { useState, useEffect } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../firebase.config";

const AuthProviders = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Register with email and password
  const registerWithEmail_Password = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Sign in with email and password
  const signInwithEmail_Password = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Sign in with Google
  const googleSignIn = () => {
    setLoading(true);
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider);
  };

  // sign out
  const LogOut = () =>{
    setLoading(true)
    return signOut(auth)
  }

  // update user data
  const updateUserData = (updateUser) =>{
    updateProfile(auth.currentUser, updateUser)
  }

  // Track authentication state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const AuthInfo = {
    registerWithEmail_Password,
    signInwithEmail_Password,
    loading,
    user,
    setUser,
    googleSignIn,
    LogOut,
    updateUserData
  };

  return (
    <AuthContext.Provider value={AuthInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProviders;