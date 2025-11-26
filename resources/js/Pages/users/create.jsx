import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head } from "@inertiajs/react";
import { useForm } from "@inertiajs/react";
import { useState } from "react";
import { route } from "ziggy-js";
import NavLink from "@/Components/NavLink";
import axios from "@/axios";
import AppBg from "@/Pages/AppBg";
import AppNav from "@/Components/AppNav";
export default function create({ auth, roles }) {
    const [userTitle, setUserTitle] = useState("");
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
        role: "",
    });
    const submit = (e) => {
        e.preventDefault();
        post(route("user.store"), { onSuccess: () => reset() });
    }
    return (
        <>
        <NavLink />
        <Head title="Create User" />
        <AppNav></AppNav>
        <AppBg>
        <div className="py-4" style={{ backgroundColor: '#c3cbd6' }}>
            <div className="max-w-2xl mx-auto p-4 sm:p-6 rounded-5 lg:p-8 bg-body">
                <div className="mb-2">
                    <h1 className="text-2xl font-bold text-center">Create New User</h1>
                </div>
                <form onSubmit={submit}>
                    <div>
                        <div className="mb-4">
                            <label className="block font-medium text-lg text-dark" htmlFor="name">
                                Name
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
                            <InputError message={errors.name} className="mt-2" />
                        </div>
                        <div className="mb-4">
                            <label className="block font-medium text-lg text-dark" htmlFor="email">
                                Email
                            </label>
                            <TextInput
                            type="email"
                            name="email"
                            value={data.email}
                            className="mt-1 block w-full"
                            autoComplete="username"
                            onChange={(e) => setData("email", e.target.value)}
                            />
                            <InputError message={errors.email} className="mt-2" />
                        </div>
                        <div className="mb-4">
                            <label className="block font-medium text-lg text-dark" htmlFor="password">
                                Password
                            </label>
                            <TextInput
                            type="password"
                            name="password"
                            value={data.password}
                            className="mt-1 block w-full"
                            autoComplete="new-password"
                            onChange={(e) => setData("password", e.target.value)}
                            />
                            <InputError message={errors.password} className="mt-2" />
                        </div>
                        <div className="mb-4">
                            <label className="block font-medium text-lg text-dark" htmlFor="password_confirmation">
                                Confirm Password
                            </label>
                            <TextInput
                            type="password"
                            name="password_confirmation"
                            value={data.password_confirmation}
                            className="mt-1 block w-full"
                            autoComplete="new-password"
                            onChange={(e) => setData("password_confirmation", e.target.value)}
                            />
                            <InputError message={errors.password_confirmation} className="mt-2" />
                        </div>
                        <div className="mb-4">
                            <label className="block font-medium text-lg text-dark" htmlFor="role">
                                Assign Role
                            </label>
                            <select
                                name="role"
                                value={data.role}
                                className="mt-1 block w-full border-gray-300 rounded"
                                onChange={(e) => setData("role", e.target.value)}
                            >
                                <option value="">Select a role</option>
                                {roles.map((role) => (
                                    <option key={role.id} value={role.name}>
                                        {role.name}
                                    </option>
                                ))}
                            </select>
                            <InputError message={errors.role} className="mt-2" />
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center justify-end mt-4">
                            <PrimaryButton className="ml-4" disabled={processing}>
                                Create User
                            </PrimaryButton>
                        </div>
                    </div>
                </form>
                <div className="mt-4">
                    <NavLink href={route('user.index')} className="inline-block px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700">
                        Back to Users List
                    </NavLink>
                </div>
            </div>
        </div>
        </AppBg>
        </>
    );
}