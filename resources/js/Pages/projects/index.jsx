import { Head, Link, useForm } from '@inertiajs/react';
import PrimaryButton from '@/Components/PrimaryButton';
import { route } from 'ziggy-js';
import AppBg from "../AppBg";
import AppNav from '@/Components/AppNav';
import axios from "@/axios";
import { useEffect, useState } from "react";
import Pagination from '@/Components/Pagination';

import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
export default function ProjectsIndex({ Projects }) {
    return (
        <>  
            <Head title="Projects" />
            <AppNav></AppNav>
            <AppBg>
                <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <h1 className="text-2xl font-bold mb-4">Projects</h1>
                            <PrimaryButton className='bg-success'>
                                <a href={route('projects.export')} className="text-white no-underline">
                                    Export Projects
                                </a>
                            </PrimaryButton>
                            <form action={route('projects.import')}
                                method="POST" encType="multipart/form-data" 
                                className="inline-block ml-4">
                                <PrimaryButton type="submit" className="ml-2 bg-success">
                                    Import Projects
                                </PrimaryButton>
                                <input type="hidden" name="_token" value={document.querySelector('meta[name="csrf-token"]').content} />
                                <input type="file" name="file" className="border border-gray-300 rounded-md p-2" />
                            </form>
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
                                            Start Date
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            End Date
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Status
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Progress
                                        </th> 
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {Projects.data.map((project) => (
                                        <tr key={project.id}>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                {project.name}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                {project.start_date}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                {project.end_date}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                {project.status}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                {project.progress}%
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                                <Link
                                                    href={route('project.show', project.id)}
                                                    className="text-indigo-600 hover:text-indigo-900"
                                                >
                                                    View
                                                </Link>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                                <Link
                                                    href={route('project.edit', project.id)}
                                                    className="text-indigo-600 hover:text-indigo-900"
                                                >
                                                    Edit
                                                </Link>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                                <Link
                                                href={route('project.destroy', project.id)}
                                                method="delete"
                                                as="button"
                                                onClick={(e) => {
                                                    if (!confirm('Are you sure you want to delete this project?')) {
                                                        e.preventDefault(); // prevents the delete action
                                                    }
                                                }}
                                                className="text-red-600 hover:text-red-900"
                                            >
                                                Delete
                                            </Link>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <Pagination links={Projects.links} />
                            <div className='d-flex justify-content-between mt-4'>
                                <div className="mt-4">
                                    <Link href={route('project.create')}>
                                        <PrimaryButton>Create New Project</PrimaryButton>
                                    </Link>
                                </div>
                                <div className="mt-4">
                                <Link
                                    href={route('dashboard')}
                                    className="inline-block px-4 py-1 text-dark rounded hover:bg-gray-700"
                                >
                                    Back to Dashboard
                                </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </AppBg>
        </>
    );
}