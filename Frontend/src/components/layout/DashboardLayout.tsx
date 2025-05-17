import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

const DashboardLayout: React.FC = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <div className="min-h-screen bg-gray-100">
            <nav className="bg-white shadow-lg">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex justify-between h-16">
                        <div className="flex">
                            <div className="flex-shrink-0 flex items-center">
                                <h1 className="text-xl font-bold text-gray-800">Parking Management</h1>
                            </div>
                            <div className="hidden md:ml-6 md:flex md:space-x-8">
                                <Link
                                    to="/dashboard"
                                    className="text-gray-900 inline-flex items-center px-1 pt-1 text-sm font-medium"
                                >
                                    Dashboard
                                </Link>
                                {user?.role === 'ADMIN' && (
                                    <>
                                        <Link
                                            to="/dashboard/vehicles"
                                            className="text-gray-900 inline-flex items-center px-1 pt-1 text-sm font-medium"
                                        >
                                            Vehicles
                                        </Link>
                                        <Link
                                            to="/dashboard/parking-spots"
                                            className="text-gray-900 inline-flex items-center px-1 pt-1 text-sm font-medium"
                                        >
                                            Parking Spots
                                        </Link>
                                        <Link
                                            to="/dashboard/users"
                                            className="text-gray-900 inline-flex items-center px-1 pt-1 text-sm font-medium"
                                        >
                                            Users
                                        </Link>
                                    </>
                                )}
                                {user?.role === 'USER' && (
                                    <>
                                        <Link
                                            to="/dashboard/my-vehicles"
                                            className="text-gray-900 inline-flex items-center px-1 pt-1 text-sm font-medium"
                                        >
                                            My Vehicles
                                        </Link>
                                        <Link
                                            to="/dashboard/parking-history"
                                            className="text-gray-900 inline-flex items-center px-1 pt-1 text-sm font-medium"
                                        >
                                            Parking History
                                        </Link>
                                    </>
                                )}
                            </div>
                        </div>
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <span className="text-sm text-gray-500 mr-4">{user?.email}</span>
                                <button
                                    onClick={handleLogout}
                                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md text-sm font-medium"
                                >
                                    Logout
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                <Outlet />
            </main>
        </div>
    );
};

export default DashboardLayout; 