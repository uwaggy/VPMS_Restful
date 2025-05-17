import React from 'react';
import { useZodForm } from '../../hooks/useZodForm';
import { CreateVehicleDto, CreateVehicleInput } from '../../dtos/vehicle.dto';
import { VehicleType, VehicleSize } from '../../types';

interface VehicleFormProps {
    onSubmit: (data: CreateVehicleInput) => void;
    initialData?: Partial<CreateVehicleInput>;
}

const VehicleForm: React.FC<VehicleFormProps> = ({ onSubmit, initialData }) => {
    const { data, errors, validate, handleChange, setData } = useZodForm<CreateVehicleInput>(CreateVehicleDto);

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
            <div>
                <label className="block text-sm font-medium text-gray-700">Plate Number</label>
                <input
                    type="text"
                    value={data.plateNumber || ''}
                    onChange={(e) => handleChange('plateNumber', e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
                {errors.plateNumber && (
                    <p className="mt-1 text-sm text-red-600">{errors.plateNumber}</p>
                )}
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700">Brand</label>
                <input
                    type="text"
                    value={data.brand || ''}
                    onChange={(e) => handleChange('brand', e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
                {errors.brand && (
                    <p className="mt-1 text-sm text-red-600">{errors.brand}</p>
                )}
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700">Model</label>
                <input
                    type="text"
                    value={data.model || ''}
                    onChange={(e) => handleChange('model', e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
                {errors.model && (
                    <p className="mt-1 text-sm text-red-600">{errors.model}</p>
                )}
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700">Type</label>
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
                <label className="block text-sm font-medium text-gray-700">Color</label>
                <input
                    type="text"
                    value={data.attributes?.color || ''}
                    onChange={(e) => handleChange('attributes', { ...data.attributes, color: e.target.value })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
                {errors['attributes.color'] && (
                    <p className="mt-1 text-sm text-red-600">{errors['attributes.color']}</p>
                )}
            </div>

            <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
                Save Vehicle
            </button>
        </form>
    );
};

export default VehicleForm; 