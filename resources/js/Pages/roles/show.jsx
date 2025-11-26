import { Head, Link, useForm } from '@inertiajs/react';
import PrimaryButton from '@/Components/PrimaryButton';
import { route } from 'ziggy-js';
import AppBg from '../AppBg';
import NavLink from '@/Components/NavLink';
import AppNav from '@/Components/AppNav';
export default function show({ role, privileges }) {
    return (
            <>
            <Head title="Role Details" />
            <AppNav></AppNav>
            <AppBg>
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <h1 className="text-2xl font-bold mb-4">Role Details</h1>
                            <div className="mb-4">
                                <strong className="block text-gray-700 font-medium mb-2">Name:</strong>
                                <p className="text-gray-900">{role.name}</p>
                            </div>
                            <div className="mb-4">
                                <strong className="block text-gray-700 font-medium mb-2">Description:</strong>
                                <p className="text-gray-900">{role.description}</p>
                            </div>
                            <div className="mb-4">
                                <strong className="block text-gray-700 font-medium mb-2">Privileges:</strong>
                                {privileges.length > 0 ? (
                                    <ul className="list-disc list-inside">
                                        {privileges.map((privilege) => (
                                            <li key={privilege.id} className="text-gray-900">
                                                {privilege.name} - {privilege.description}
                                            </li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p className="text-gray-900">No privileges assigned to this role.</p>
                                )}
                            </div>
                            <div className="mt-4">
                                <NavLink
                                    href={route('role.index')}
                                    className="text-indigo-600 hover:text-indigo-900"
                                >
                                    Back to Roles
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </AppBg>
        </>
    );
}