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
export default function edit({ role, privileges }) {
    const [roleName, setRoleName] = useState(role.name);
    const { data, setData, put, processing, errors, reset } = useForm({
        name: role.name,
        description: role.description,
        privileges: privileges,
    });
    const submit = (e) => {
        e.preventDefault();
        put(route("role.update", role.id));
    }
    return (
            <>
            <Head title="Edit Role" />
            <AppNav></AppNav>
            <AppBg>
            <div className="py-12">
                <div className="max-w-2xl mx-auto py-12 sm:p-6 lg:p-8 bg-body rounded-5">
                    <div className="mb-2">
                        <h1 className="text-2xl font-bold text-center">Edit Role</h1>
                    </div>
                    <form onSubmit={submit}>
                        <div>
                            <div className="mb-4">
                                <label className="block font-medium text-lg text-dark" htmlFor="name">
                                    Role Name
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
                                <label className="block font-medium text-lg text-dark" htmlFor="description">
                                    Role Description
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
                                <InputError message={errors.description} className="mt-2" />
                            </div>
                            <div className="mt-4">
                                <label className="block text-sm font-medium text-gray-700">
                                    Privileges
                                </label>
                                <div className="mt-2 space-y-2">
                                    {privileges.map((privilege) => (
                                        <label key={privilege.id} className="inline-flex items-center gap-2">
                                            <input
                                                type="checkbox"
                                                value={privilege.id}
                                                checked={data.privileges?.includes(privilege.id)}
                                                onChange={(e) => {
                                                    const value = parseInt(e.target.value, 10);
                                                    if (e.target.checked) {
                                                        setData("privileges", [...(data.privileges || []), value]);
                                                    } else {
                                                        setData(
                                                            "privileges",
                                                            data.privileges.filter((id) => id !== value)
                                                        );
                                                    }
                                                }}
                                                className="rounded border-gray-300"
                                            />
                                            <span>{privilege.name}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>   
                            <InputError message={errors.name} className="mt-2" />
                        </div>
                        <div className="mt-4">
                            <PrimaryButton type="submit" disabled={processing}>
                                Update
                            </PrimaryButton>
                        </div>
                    </form>
                    <div className="mt-4">
                        <Link
                            href={route('role.index')}
                            className="inline-block px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
                        >
                            Back to Roles List
                        </Link>
                    </div>
                </div>
            </div>
            </AppBg>
        </>
    );
}