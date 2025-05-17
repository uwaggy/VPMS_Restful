import React, { useEffect, useState } from 'react';
import { parkingSpotApi, parkingRecordApi, vehicleApi } from '../../api';
import { ParkingSpot, ParkingRecord, Vehicle } from '../../types';

const AdminDashboard: React.FC = () => {
    const [stats, setStats] = useState({
        totalSpots: 0,
        availableSpots: 0,
        occupiedSpots: 0,
        totalVehicles: 0
    });
    const [recentActivity, setRecentActivity] = useState<ParkingRecord[]>([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const ITEMS_PER_PAGE = 10;

    useEffect(() => {
        const fetchDashboardData = async () => {
            try {
                const [spots, vehicles, records] = await Promise.all([
                    parkingSpotApi.getAll(),
                    vehicleApi.getAll(),
                    parkingRecordApi.getActive()
                ]);

                setStats({
                    totalSpots: spots.data.length,
                    availableSpots: spots.data.filter((spot: ParkingSpot) => spot.status === 'AVAILABLE').length,
                    occupiedSpots: spots.data.filter((spot: ParkingSpot) => spot.status === 'OCCUPIED').length,
                    totalVehicles: vehicles.data.length
                });

                setRecentActivity(records.data);
                setTotalPages(Math.ceil(records.data.length / ITEMS_PER_PAGE));
            } catch (error) {
                console.error('Error fetching dashboard data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchDashboardData();
    }, []);

    const paginatedActivity = recentActivity.slice(
        (page - 1) * ITEMS_PER_PAGE,
        page * ITEMS_PER_PAGE
    );

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="bg-white rounded-lg shadow p-6">
                    <h3 className="text-lg font-medium text-gray-900">Total Spots</h3>
                    <p className="text-3xl font-bold text-blue-600">{stats.totalSpots}</p>
                </div>
                <div className="bg-white rounded-lg shadow p-6">
                    <h3 className="text-lg font-medium text-gray-900">Available Spots</h3>
                    <p className="text-3xl font-bold text-green-600">{stats.availableSpots}</p>
                </div>
                <div className="bg-white rounded-lg shadow p-6">
                    <h3 className="text-lg font-medium text-gray-900">Occupied Spots</h3>
                    <p className="text-3xl font-bold text-red-600">{stats.occupiedSpots}</p>
                </div>
                <div className="bg-white rounded-lg shadow p-6">
                    <h3 className="text-lg font-medium text-gray-900">Total Vehicles</h3>
                    <p className="text-3xl font-bold text-purple-600">{stats.totalVehicles}</p>
                </div>
            </div>

            <div className="bg-white rounded-lg shadow">
                <div className="px-4 py-5 sm:p-6">
                    <h3 className="text-lg font-medium text-gray-900">Active Parking Records</h3>
                    <div className="mt-4">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead>
                                <tr>
                                    <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Vehicle
                                    </th>
                                    <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Spot
                                    </th>
                                    <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Check In
                                    </th>
                                    <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Duration
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {paginatedActivity.map((record) => (
                                    <tr key={record.id}>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                            {record.vehicle?.plateNumber} - {record.vehicle?.brand} {record.vehicle?.model}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                            {record.parkingSpot?.spotNumber}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                            {new Date(record.checkIn).toLocaleString()}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                            {Math.round(
                                                (new Date().getTime() - new Date(record.checkIn).getTime()) /
                                                (1000 * 60 * 60)
                                            )}h
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Pagination */}
                    <div className="mt-4 flex justify-between items-center">
                        <button
                            onClick={() => setPage(p => Math.max(1, p - 1))}
                            disabled={page === 1}
                            className="bg-gray-200 px-4 py-2 rounded-md disabled:opacity-50"
                        >
                            Previous
                        </button>
                        <span className="text-sm text-gray-600">
                            Page {page} of {totalPages}
                        </span>
                        <button
                            onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                            disabled={page === totalPages}
                            className="bg-gray-200 px-4 py-2 rounded-md disabled:opacity-50"
                        >
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard; 