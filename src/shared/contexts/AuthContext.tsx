import { createContext, useContext, useEffect, useState } from 'react';
import { auth } from '../utils/firebase';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    GoogleAuthProvider,
    signInWithPopup,
    sendPasswordResetEmail,
    confirmPasswordReset,
} from 'firebase/auth';

const AuthContext = createContext({
    currentUser: null,
    register: (email, password) => new Promise((resolve, reject) => {}),
    login: (email, password) => new Promise((resolve, reject) => {}),
    logout: () => new Promise((resolve, reject) => {}),
    signinWithGoogle: () => new Promise((resolve, reject) => {}),
    forgotPassword: (email) => new Promise((resolve, reject) => {}),
    resetPassword: (oobCode, newPassword) => new Promise((resolve, reject) => {}),
});

export const useAuth = () => useContext(AuthContext);

export default function AuthContextProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null);
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => setCurrentUser(user));
        return () => {
            unsubscribe();
        };
    }, []);
    function register(email, password) {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    function login(email, password) {
        return signInWithEmailAndPassword(auth, email, password);
    }

    function logout() {
        return signOut(auth);
    }

    function signinWithGoogle() {
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider);
    }

    function forgotPassword(email) {
        return sendPasswordResetEmail(auth, email, { url: 'http://localhost:8500/login' });
    }

    function resetPassword(oobCode, newPassword) {
        return confirmPasswordReset(auth, oobCode, newPassword);
    }
    const value = {
        currentUser,
        register,
        login,
        logout,
        signinWithGoogle,
        forgotPassword,
        resetPassword,
    };

    return <AuthContext.Provider value={value}> {children}</AuthContext.Provider>;
}
