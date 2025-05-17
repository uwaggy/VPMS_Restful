import React from 'react';
import { useZodForm } from '../../hooks/useZodForm';
import { CreateParkingSlotDto, CreateParkingSlotInput } from '../../dtos/parking.dto';
import { VehicleType, VehicleSize, Location, ParkingSlotStatus } from '../../types';

interface ParkingSlotFormProps {
    onSubmit: (data: CreateParkingSlotInput) => void;
    initialData?: Partial<CreateParkingSlotInput>;
    isBulkCreate?: boolean;
}

const ParkingSlotForm: React.FC<ParkingSlotFormProps> = ({ onSubmit, initialData, isBulkCreate }) => {
    const { data, errors, validate, handleChange, setData } = useZodForm<CreateParkingSlotInput>(CreateParkingSlotDto);

    React.useEffect(() => {
        if (initialData) {
            setData(initialData);
        }
    }, [initialData]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validate(data)) {
            onSubmit(data);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            {!isBulkCreate && (
                <div>
                    <label className="block text-sm font-medium text-gray-700">Slot Number</label>
                    <input
                        type="text"
                        value={data.slotNumber || ''}
                        onChange={(e) => handleChange('slotNumber', e.target.value)}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                    {errors.slotNumber && (
                        <p className="mt-1 text-sm text-red-600">{errors.slotNumber}</p>
                    )}
                </div>
            )}

            <div>
                <label className="block text-sm font-medium text-gray-700">Vehicle Type</label>
                <select
                    value={data.type || ''}
                    onChange={(e) => handleChange('type', e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                >
                    <option value="">Select Type</option>
                    {Object.values(VehicleType).map((type) => (
                        <option key={type} value={type}>{type}</option>
                    ))}
                </select>
                {errors.type && (
                    <p className="mt-1 text-sm text-red-600">{errors.type}</p>
                )}
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700">Size</label>
                <select
                    value={data.size || ''}
                    onChange={(e) => handleChange('size', e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                >
                    <option value="">Select Size</option>
                    {Object.values(VehicleSize).map((size) => (
                        <option key={size} value={size}>{size}</option>
                    ))}
                </select>
                {errors.size && (
                    <p className="mt-1 text-sm text-red-600">{errors.size}</p>
                )}
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700">Location</label>
                <select
                    value={data.location || ''}
                    onChange={(e) => handleChange('location', e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                >
                    <option value="">Select Location</option>
                    {Object.values(Location).map((loc) => (
                        <option key={loc} value={loc}>{loc}</option>
                    ))}
                </select>
                {errors.location && (
                    <p className="mt-1 text-sm text-red-600">{errors.location}</p>
                )}
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700">Status</label>
                <select
                    value={data.status || ''}
                    onChange={(e) => handleChange('status', e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                >
                    <option value="">Select Status</option>
                    {Object.values(ParkingSlotStatus).map((status) => (
                        <option key={status} value={status}>{status}</option>
                    ))}
                </select>
                {errors.status && (
                    <p className="mt-1 text-sm text-red-600">{errors.status}</p>
                )}
            </div>

            <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
                {isBulkCreate ? 'Create Parking Slots' : 'Save Parking Slot'}
            </button>
        </form>
    );
};

export default ParkingSlotForm; 