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
import AppBg from "@/Pages/AppBg";
import AppNav from "@/Components/AppNav";
export default function show({ auth, user, roles, privileges }) {
    return (
            <>
            <NavLink />
            <Head title="User Details" />
            <AppNav></AppNav>
            <AppBg>
            <div className="py-4" style={{ backgroundColor: '#c3cbd6' }}>
                <div className="max-w-2xl mx-auto p-4 sm:p-6 rounded-5 lg:p-8 bg-body">
                    <div className="mb-2">
                        <h1 className="text-2xl font-bold text-center">User Details</h1>
                    </div>
                    <div className="mb-4">
                        <p><strong>Name:</strong> {user.name}</p>
                    </div>
                    <div className="mb-4">
                        <p><strong>Email:</strong> {user.email}</p>
                    </div>
                    <div className="mb-4">
                        <p><strong>Role:</strong> {roles.map(function(role){
                            return role.name + ',';
                        })}</p>
                    </div>
                    <div className="mb-4">
                        <p><strong>Privileges:</strong> {privileges.map(function(privilege){
                            return privilege.name + " , ";
                        })}</p>
                    </div>
                    <div className="mt-4">
                        <a
                            href={route('user.index')}
                            className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                        >
                            Back to User Management
                        </a>
                    </div>
                </div>
            </div>
            </AppBg>
        </>
    );
}
