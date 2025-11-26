import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head } from "@inertiajs/react";
import { useForm } from "@inertiajs/react";
import { useState } from "react";
import { route } from "ziggy-js";
import { Link } from "@inertiajs/react";
import NavLink from "@/Components/NavLink";
import AppNav from "@/Components/AppNav";
import AppBg from "../AppBg";

export default function create({ auth, projectStatuses }) {
    const [projectTitle, setProjectTitle] = useState("");
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        description: "",
        start_date: "",
        end_date: "",
        status: "",
        progress: 0,
    });
    const submit = (e) => {
        e.preventDefault();
        post(route("project.store"), { onSuccess: () => reset() });
    }
    return (
        <>
        <NavLink />
        <Head title="Create Project" />
        <AppNav></AppNav>
        <AppBg>
            <div className="py-8">
            <div className="max-w-2xl mx-auto sm:p-6 rounded-5 lg:p-8 bg-body">
                <div className="mb-2">
                    <h1 className="text-2xl font-bold text-center">Create New Project</h1>
                </div>
                <form onSubmit={submit}>
                    <div>
                        <div className="mb-4">
                            <label className="block font-medium text-lg text-dark" htmlFor="name">
                                Project Name
                            </label>
                            <TextInput
                            type="text"
                            name="name"
                            value={data.name}
                            className="mt-1 block w-full"
                            autoComplete="name"
                            isFocused={true}
                            onChange={(e) => setData("name", e.target.value)}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block font-medium text-lg text-dark" htmlFor="description">
                                Project Description
                            </label>
                            <TextInput
                            type="text"
                            name="description"
                            value={data.description}
                            className="mt-1 block w-full"
                            autoComplete="details"
                            isFocused={true}
                            onChange={(e) => setData("description", e.target.value)}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block font-medium text-lg text-gray-dark" htmlFor="start_date">
                                Start Date
                            </label>
                            <TextInput
                            type="date"
                            name="start_date"
                            value={data.start_date}
                            className="mt-1 block w-full"
                            autoComplete="start_date"
                            isFocused={true}
                            onChange={(e) => setData("start_date", e.target.value)}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block font-medium text-lg text-dark" htmlFor="end_date">
                                End Date
                            </label>
                            <TextInput
                            type="date"
                            name="end_date"
                            value={data.end_date}
                            className="mt-1 block w-full"
                            autoComplete="end_date"
                            isFocused={true}
                            onChange={(e) => setData("end_date", e.target.value)}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block font-medium text-lg text-dark" htmlFor="status">
                                Status
                            </label>
                            <select
                            name="status"
                            value={data.status}
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                            onChange={(e) => setData("status", e.target.value)}
                            >
                                <option value="">Select Status</option>
                                {projectStatuses.map((statusObj) => (
                                    <option key={statusObj.status} value={statusObj.status}>
                                        {statusObj.status}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="mb-4">
                            <label className="block font-medium text-lg text-dark" htmlFor="progress">
                                Progress
                            </label>
                            <TextInput
                            type="number"
                            name="progress"
                            value={data.progress}
                            className="mt-1 block w-full"
                            autoComplete="progress"
                            isFocused={true}
                            onChange={(e) => setData("progress", e.target.value)}
                            />
                        </div>
                        <InputError message={errors.title} className="mt-2" />
                    </div>
                    <div className="mt-4">
                        <PrimaryButton disabled={processing}>Create</PrimaryButton>
                    </div>
                </form>
                <div className="mt-4">
                    <Link
                        href={route('project.index')}
                        className="inline-block px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
                    >
                        Back to Projects List
                    </Link>
                </div>
            </div>
        </div>
        </AppBg>
        </>
    );
}