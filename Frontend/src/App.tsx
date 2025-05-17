import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import AdminDashboard from './pages/admin/Dashboard';
import UserDashboard from './pages/user/Dashboard';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Layout from './components/Layout';
import PrivateRoute from './components/PrivateRoute';
import { useAuth } from './hooks/useAuth';

const App: React.FC = () => {
    const { isAuthenticated, user } = useAuth();

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={
                    !isAuthenticated ? <Login /> : <Navigate to="/" />
                } />
                <Route path="/register" element={
                    !isAuthenticated ? <Register /> : <Navigate to="/" />
                } />

                <Route path="/" element={<Layout />}>
                    <Route index element={
                        <PrivateRoute>
                            {user?.role === 'ADMIN' ? <AdminDashboard /> : <UserDashboard />}
                        </PrivateRoute>
                    } />

                    {/* Admin Routes */}
                    <Route path="admin/*" element={
                        <PrivateRoute allowedRoles={['ADMIN']}>
                            <Routes>
                                <Route path="users" element={<div>Users Management</div>} />
                                <Route path="parking-slots" element={<div>Parking Slots Management</div>} />
                                <Route path="vehicles" element={<div>Vehicles Management</div>} />
                            </Routes>
                        </PrivateRoute>
                    } />

                    {/* User Routes */}
                    <Route path="user/*" element={
                        <PrivateRoute allowedRoles={['USER']}>
                            <Routes>
                                <Route path="vehicles" element={<div>My Vehicles</div>} />
                                <Route path="parking-history" element={<div>Parking History</div>} />
                            </Routes>
                        </PrivateRoute>
                    } />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App; 