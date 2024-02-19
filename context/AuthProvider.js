import React, { createContext, useState } from "react";
import * as SecureStore from 'expo-secure-store';
import axiosConfig from "../helpers/axiosConfig";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);

    return (
        <AuthContext.Provider value={{
            user,
            setUser,
            login: (email, password) => {
                // axiosConfig.post('/login', {
                //     email,
                //     password
                // }).then(response => {
                //     const userResponse = {
                //         token: response.data.token,
                //         name: response.data.name
                //     }

                //     setUser(userResponse)
                //     SecureStore.setItemAsync('user', userResponse)
                // }).catch(error => {
                //     console.log(error)
                // })

            },
            logout: () => {
                setUser(null)
                // SecureStore.deleteItemAsync('user')
            }
        }}>
            {children}
        </AuthContext.Provider>
    );
}