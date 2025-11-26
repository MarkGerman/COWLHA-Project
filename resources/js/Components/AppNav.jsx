import { Head, Link, useForm } from '@inertiajs/react';
import PrimaryButton from '@/Components/PrimaryButton';
import { route } from 'ziggy-js';
import ResponsiveNavLink from './ResponsiveNavLink';
import NavLink from './NavLink';

export default function AppNav() {
    return (
        <>
            <Head title="App Navigation" />
            <div className="sticky top-0 z-50 bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
                    <nav className="flex space-x-6 font-bold">
                        <NavLink href={route('dashboard')} active={route().current('dashboard')}>
                            Dashboard
                        </NavLink>
                        <NavLink href={route('project.index')} active={route().current('project.index')}>
                            Projects
                        </NavLink>
                        <NavLink href={route('role.index')} active={route().current('role.index')}>
                            Roles
                        </NavLink>
                        <NavLink href={route('privilege.index')} active={route().current('privilege.index')}>
                            Privileges
                        </NavLink>
                    </nav>
                </div>
            </div>
        </>
    );
}