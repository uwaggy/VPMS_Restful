import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const Layout: React.FC = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <div className="min-h-screen bg-gray-100">
            {/* Navigation */}
            <nav className="bg-white shadow-lg">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex justify-between h-16">
                        <div className="flex">
                            <Link to="/" className="flex items-center text-xl font-bold text-blue-600">
                                Parking System
                            </Link>

                            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                                {user?.role === 'ADMIN' ? (
                                    <>
                                        <Link
                                            to="/admin/users"
                                            className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-blue-500"
                                        >
                                            Users
                                        </Link>
                                        <Link
                                            to="/admin/parking-slots"
                                            className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-blue-500"
                                        >
                                            Parking Slots
                                        </Link>
                                        <Link
                                            to="/admin/vehicles"
                                            className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-blue-500"
                                        >
                                            Vehicles
                                        </Link>
                                    </>
                                ) : (
                                    <>
                                        <Link
                                            to="/user/vehicles"
                                            className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-blue-500"
                                        >
                                            My Vehicles
                                        </Link>
                                        <Link
                                            to="/user/parking-history"
                                            className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-blue-500"
                                        >
                                            Parking History
                                        </Link>
                                    </>
                                )}
                            </div>
                        </div>

                        <div className="flex items-center">
                            <div className="flex items-center space-x-4">
                                <span className="text-gray-700">{user?.name}</span>
                                <button
                                    onClick={handleLogout}
                                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                                >
                                    Logout
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                <Outlet />
            </main>
        </div>
    );
};

export default Layout; 