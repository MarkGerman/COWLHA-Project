import React from "react";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head } from "@inertiajs/react";
import { useForm } from "@inertiajs/react";
import { useState } from "react";
import { route } from "ziggy-js";
import AppBg from "../AppBg";
import { Link } from "@inertiajs/react";
import AppNav from "@/Components/AppNav";
export default function edit({ privilege, roles, userRoles }) {
    const [privilegeName, setPrivilegeName] = useState(privilege.name);
    const { data, setData, put, processing, errors, reset } = useForm({
        name: privilege.name,
        description: privilege.description,
        roles: userRoles.map(r => r.id),
    });
    const submit = (e) => {
        e.preventDefault();
        put(route("privilege.update", privilege.id));
    }
    return (
        <>
            <Head title="Edit Privilege" />
            <AppNav></AppNav>
            <div className="p-8" style={{ backgroundColor: '#c3cbd6' }}>
                <div className="max-w-2xl mx-auto p-4 sm:p-6 lg:p-8 bg-body rounded-5">
                    <div className="mb-2">
                        <h1 className="text-2xl font-bold text-center">Edit Privilege</h1>
                    </div>
                    <form onSubmit={submit}>
                        <div>
                            <div className="mb-4">
                                <label className="block font-medium text-lg text-dark" htmlFor="name">
                                    Privilege Name
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
                                    Privilege Description
                                </label>
                                <TextInput
                                type="text"
                                name="description"
                                value={data.description}
                                className="mt-1 block w-full"
                                autoComplete="description"
                                isFocused={true}
                                onChange={(e) => setData("description", e.target.value)}
                                />
                            </div>
                            <div className="mt-4">
                                <label className="block text-sm font-medium text-gray-700">
                                    Roles
                                </label>
                                <div className="mt-2 space-y-2">
                                    {roles.map((role) => (
                                        <label key={role.id} className="inline-flex items-center gap-2">
                                            <input
                                                type="checkbox"
                                                value={role.id}
                                                checked={data.roles.includes(role.id)}
                                                onChange={(e) => {
                                                    const value = parseInt(e.target.value, 10);
                                                    if (e.target.checked) {
                                                        setData("roles", [...data.roles, value]);
                                                    } else {
                                                        setData("roles", data.roles.filter((id) => id !== value));
                                                    }
                                                }}
                                            />
                                            <span>{role.name}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-end mt-4">
                            <InputError className="mr-4" message={errors.name} />
                            <PrimaryButton type="submit" className="ml-4" disabled={processing}>
                                Update Privilege
                            </PrimaryButton>
                        </div>
                    </form>
                    <div className="mt-4">
                        <Link
                            href={route('privilege.index')}
                            className="inline-block px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
                        >
                            Back to Privileges List
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}