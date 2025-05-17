import React from 'react';
import { useZodForm } from '../../hooks/useZodForm';
import { CreateUserDto, CreateUserInput } from '../../dtos/user.dto';
import { Role } from '../../types';

interface UserFormProps {
    onSubmit: (data: CreateUserInput) => void;
    initialData?: Partial<CreateUserInput>;
}

const UserForm: React.FC<UserFormProps> = ({ onSubmit, initialData }) => {
    const { data, errors, validate, handleChange, setData } = useZodForm<CreateUserInput>(CreateUserDto);

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
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input
                    type="text"
                    value={data.name || ''}
                    onChange={(e) => handleChange('name', e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
                {errors.name && (
                    <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                )}
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                    type="email"
                    value={data.email || ''}
                    onChange={(e) => handleChange('email', e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
                {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                )}
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700">Password</label>
                <input
                    type="password"
                    value={data.password || ''}
                    onChange={(e) => handleChange('password', e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
                {errors.password && (
                    <p className="mt-1 text-sm text-red-600">{errors.password}</p>
                )}
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700">Role</label>
                <select
                    value={data.role || ''}
                    onChange={(e) => handleChange('role', e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                >
                    <option value="">Select Role</option>
                    {Object.values(Role).map((role) => (
                        <option key={role} value={role}>{role}</option>
                    ))}
                </select>
                {errors.role && (
                    <p className="mt-1 text-sm text-red-600">{errors.role}</p>
                )}
            </div>

            <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
                Save User
            </button>
        </form>
    );
};

export default UserForm; 