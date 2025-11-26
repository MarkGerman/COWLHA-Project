import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

export default function Dashboard({projects, projectsSummary, userRoles}) {
    return (
        <AuthenticatedLayout
            userRoles={userRoles}
            header={
                <h2 className="text-xl font-semibold leading-tight text-dark">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden p-8 d-flex bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                        <div className="p-6 bg-white border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                            <h2 className="text-lg font-large mb-4">Graphical Summary Of Projects</h2>
                            <BarChart width={600} height={300} data={projects}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="status" />
                                <YAxis />
                                <Tooltip />
                                <Bar dataKey="percentage" fill="#8884d8" />
                            </BarChart>
                        </div>
                        <div className="p-6 bg-white border-1 border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                            <div>
                                <h3 className='text-lg font-large mb-4'>Projects Summary</h3>
                                <table border="1" cellPadding="10">
                                    <thead>
                                        <tr>
                                            <th>Status</th>
                                            <th>No. of Projects</th>
                                            <th>Total Projects</th>
                                            <th>Percentage (%)</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {projectsSummary.map((item, index) => (
                                            <tr key={index}>
                                                <td>{item.status}</td>
                                                <td>{item.NoOfProjects}</td>
                                                <td>{item.allProjects}</td>
                                                <td>
                                                    {((item.NoOfProjects / item.allProjects) * 100).toFixed(0)}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
