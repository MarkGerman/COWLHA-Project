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
export default function Edit({ project }) {
    const [projectTitle, setProjectTitle] = useState(project.name);
    const { data, setData, put, processing, errors, reset } = useForm({
        name: project.name,
        description: project.description,
        start_date: project.start_date,
        end_date: project.end_date,
        status: project.status,
        progress: project.progress,
    });
    const submit = (e) => {
        e.preventDefault();
        put(route('project.update', project.id), data);
    }
    return (
        <>
        <Head title="Edit Project" />
        <AppNav></AppNav>
        <AppBg>
        <div className="py-4" style={{ backgroundColor: '#c3cbd6' }}>
            <div className="max-w-2xl mx-auto p-4 sm:p-6 rounded-5 lg:p-8 bg-body">
                <div className="mb-2">
                    <h1 className="text-2xl font-bold text-center">Edit Project</h1>
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
                            <label className="block font-medium text-lg text-dark" htmlFor="start_date">
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
                            <TextInput
                            type="text"
                            name="status"
                            value={data.status}
                            className="mt-1 block w-full"
                            autoComplete="status"
                            isFocused={true}
                            onChange={(e) => setData("status", e.target.value)}
                            />
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
                        <PrimaryButton disabled={processing}>Update</PrimaryButton>
                    </div>
                </form>
                <div className="mt-4">
                    <Link href={route('project.index')} className="inline-block px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700">
                        Back to Projects List
                    </Link>
                </div>
            </div>
        </div>
        </AppBg>
        </>
    );
}