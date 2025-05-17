import React, { createContext, useState, useEffect } from 'react';
import { User } from '../types';
import { authApi } from '../api';

interface AuthContextType {
    user: User | null;
    isAuthenticated: boolean;
    login: (email: string, password: string) => Promise<void>;
    register: (name: string, email: string, password: string) => Promise<void>;
    logout: () => void;
}

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            // Set default auth header
            authApi.setAuthToken(token);
            // Get user data
            authApi.getCurrentUser()
                .then(response => {
                    setUser(response.data);
                    setIsAuthenticated(true);
                })
                .catch(() => {
                    localStorage.removeItem('token');
                    setIsAuthenticated(false);
                });
        }
    }, []);

    const login = async (email: string, password: string) => {
        const response = await authApi.login(email, password);
        const { token, user } = response.data;
        localStorage.setItem('token', token);
        authApi.setAuthToken(token);
        setUser(user);
        setIsAuthenticated(true);
    };

    const register = async (name: string, email: string, password: string) => {
        await authApi.register({ name, email, password });
    };

    const logout = () => {
        localStorage.removeItem('token');
        authApi.setAuthToken(null);
        setUser(null);
        setIsAuthenticated(false);
    };

    return (
        <AuthContext.Provider value={{ user, isAuthenticated, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    );
}; 