import React from "react";
import { Head } from "@inertiajs/react";
import { route } from 'ziggy-js';
import { Link } from "@inertiajs/react";
import AppBg from "@/Pages/AppBg"; 
import AppNav from "@/Components/AppNav"; 

export default function users({ users }) {
    return (
        <>
        <Head title="User Management" />
        <AppNav></AppNav>
        <AppBg>
        <div className="py-4" style={{ backgroundColor: '#c3cbd6' }}>
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="bg-body overflow-hidden shadow-sm sm:rounded-lg">
                    <div className="p-6 bg-body border-b border-gray-200">
                        <h1 className="text-2xl font-bold mb-4 text-center">User Management</h1>
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
                                        Email
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {users.map((user) => (
                                    <tr key={user.id}>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                            {user.name}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                            {user.email}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                            <Link href={route('user.show', user.id)} className="text-blue-600 hover:text-blue-900">
                                                View
                                            </Link>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                            <Link
                                                href={route('user.edit', user.id)}
                                                className="text-blue-600 hover:text-blue-900"
                                            >
                                                Edit
                                            </Link>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                            <form
                                                method="POST"
                                                action={route('user.destroy', user.id)}
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
                        <div className="mt-4">
                        <a
                            href={route('user.create')}
                            className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                        >
                            Create New User
                        </a>
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
