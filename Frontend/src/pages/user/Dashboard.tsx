import React, { useEffect, useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { vehicleApi, parkingRecordApi } from '../../api';
import { Vehicle, ParkingRecord } from '../../types';

const UserDashboard: React.FC = () => {
    const { user } = useAuth();
    const [vehicles, setVehicles] = useState<Vehicle[]>([]);
    const [parkingHistory, setParkingHistory] = useState<ParkingRecord[]>([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const ITEMS_PER_PAGE = 10;

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                // Get user's vehicles
                const vehiclesResponse = await vehicleApi.getAll();
                const userVehicles = vehiclesResponse.data.filter(
                    (vehicle: Vehicle) => vehicle.ownerId === user?.id
                );
                setVehicles(userVehicles);

                // Get parking history for user's vehicles
                const records = await parkingRecordApi.getActive();
                const userRecords = records.data.filter((record: ParkingRecord) =>
                    userVehicles.some((vehicle: Vehicle) => vehicle.id === record.vehicleId)
                );
                setParkingHistory(userRecords);
                setTotalPages(Math.ceil(userRecords.length / ITEMS_PER_PAGE));
            } catch (error) {
                console.error('Error fetching user data:', error);
            } finally {
                setLoading(false);
            }
        };

        if (user?.id) {
            fetchUserData();
        }
    }, [user?.id]);

    const paginatedHistory = parkingHistory.slice(
        (page - 1) * ITEMS_PER_PAGE,
        page * ITEMS_PER_PAGE
    );

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="space-y-6">
            <div className="bg-white rounded-lg shadow">
                <div className="px-4 py-5 sm:p-6">
                    <h3 className="text-lg font-medium text-gray-900">My Vehicles</h3>
                    <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {vehicles.map((vehicle) => (
                            <div
                                key={vehicle.id}
                                className="bg-gray-50 rounded-lg p-4 border border-gray-200"
                            >
                                <div className="font-medium">{vehicle.plateNumber}</div>
                                <div className="text-sm text-gray-600">
                                    {vehicle.brand} {vehicle.model}
                                </div>
                                <div className="text-sm text-gray-500">
                                    Type: {vehicle.type}
                                </div>
                                <div className="text-sm text-gray-500">
                                    Color: {vehicle.color}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-lg shadow">
                <div className="px-4 py-5 sm:p-6">
                    <h3 className="text-lg font-medium text-gray-900">Parking History</h3>
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
                                    <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Fee
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {paginatedHistory.map((record) => (
                                    <tr key={record.id}>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                            {record.vehicle?.plateNumber}
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
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                            ${record.fee?.toFixed(2) || 'Active'}
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

export default UserDashboard; 