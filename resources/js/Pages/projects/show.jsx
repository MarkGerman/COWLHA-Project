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
import AppBg from "../AppBg";
import AppNav from "@/Components/AppNav";
export default function Show({ project }) {
    return (
        <>
        <NavLink /> 
        <Head title="Project Details" />
        <AppNav></AppNav>
        <AppBg>
        <div className="py-4">
            <div className="max-w-2xl mx-auto p-4 sm:p-6 rounded-5 lg:p-8 bg-body">
                <div className="mb-2">
                    <h1 className="text-2xl font-bold text-center">Project Details</h1>
                </div>
                <div>
                    <p><strong>Project Name:</strong> {project.name}</p>
                    <p><strong>Project Description:</strong> {project.description}</p>
                    <p><strong>Start Date:</strong> {project.start_date}</p>
                    <p><strong>End Date:</strong> {project.end_date}</p>
                    <p><strong>Status:</strong> {project.status}</p>
                    <p><strong>Progress:</strong> {project.progress}%</p>
                </div>
                <div className="mt-4">
                    <NavLink href={route('project.index')} className="inline-block px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700">
                        Back to Projects List
                    </NavLink>
                </div>
            </div>
        </div>
        </AppBg>
        </>
    );
}