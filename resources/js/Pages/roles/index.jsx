import { Head, Link, useForm } from '@inertiajs/react';
import PrimaryButton from '@/Components/PrimaryButton';
import { route } from 'ziggy-js';
import AppBg from "../AppBg";
import AppNav from "@/Components/AppNav";
import Pagination from '@/Components/Pagination';
export default function Index({ roles, privileges }) {
    return (
        <>
        <Head title="Roles" />
            <AppNav></AppNav>
            <AppBg>
            <div className="py-12" style={{ backgroundColor: '#c3cbd6' }}>
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <h1 className="text-2xl font-bold mb-4">Roles</h1>
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Name
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Description
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {roles.data.map((role) => (
                                        <tr key={role.id}>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                {role.name}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                {role.description}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                                <Link
                                                    href={route('role.edit', role.id)}
                                                    className="text-indigo-600 hover:text-indigo-900"
                                                >
                                                    Edit
                                                </Link>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                                <Link
                                                    href={route('role.show', role.id)}
                                                    className="text-indigo-600 hover:text-indigo-900"
                                                >
                                                    View
                                                </Link>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                                <form
                                                    method="POST"
                                                    action={route('role.destroy', role.id)}
                                                    onSubmit={(e) => {
                                                        if (!confirm('Are you sure you want to delete this user?')) {
                                                            e.preventDefault();
                                                        }
                                                    }}
                                                >
                                                    <input type="hidden" name="_token" value={document.querySelector('meta[name="csrf-token"]').content} />
                                                    <input type="hidden" name="_method" value="DELETE" />
                                                    <button
                                                        type="submit"
                                                        className="text-red-600 hover:text-red-900"
                                                    >
                                                        Delete
                                                    </button>
                                                </form>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <Pagination links={roles.links} />
                            <div className="mt-4">
                                <Link href={route('role.create')}>
                                    <PrimaryButton>
                                        Create New Role
                                    </PrimaryButton>
                                </Link>
                            </div>
                            <div className="mt-4">
                                <Link
                                    href={route('dashboard')}
                                    className="inline-block px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
                                >
                                    Back to Dashboard
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </AppBg>
        </>
    );
}