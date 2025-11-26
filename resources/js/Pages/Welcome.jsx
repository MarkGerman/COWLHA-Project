import { Head, Link } from '@inertiajs/react';

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    const handleImageError = () => {
        document
            .getElementById('screenshot-container')
            ?.classList.add('!hidden');
        document.getElementById('docs-card')?.classList.add('!row-span-1');
        document
            .getElementById('docs-card-content')
            ?.classList.add('!flex-row');
        document.getElementById('background')?.classList.add('!hidden');
    };

    return (
        <>
            <Head title="Welcome" />
            <div className="text-black/50" style={{ background: '#c3cbd6' }}>
                <div className="relative flex min-h-screen flex-col items-center justify-center selection:bg-[#FF2D20] selection:text-white">
                    <div className="absolute inset-0">
                        <header className="flex items-center justify-between lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 px-6 pt-3 bg-white dark:bg-gray-800 w-full">
                            <div className="">
                               <h2>COWLHA</h2>
                            </div>
                            <nav className="">
                                {auth.user ? (
                                    <Link
                                        href={route('dashboard')}
                                        className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                    >
                                        Dashboard
                                    </Link>
                                ) : (
                                    <>
                                        <Link
                                            href={route('login')}
                                            className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                        >
                                            Log in
                                        </Link>
                                    </>
                                )}
                            </nav>
                        </header>

                        <main className="mt-6">
                            <div className="flex flex-col items-center justify-center">
                                <div className="flex flex-col items-center justify-center bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
                                    <h2 className="text-3xl font-bold" style={{ color: '#1d3124' }}>
                                        Welcome!
                                    </h2>
                                    <p className="mt-4 text-lg text-black/70">
                                        Help Us Safeguard Lives and Empower Women
                                        Living with HIV/AIDS
                                    </p>
                                </div>
                                <div
                                    id="screenshot-container"
                                    className="flex items-center justify-center"
                                >
                                    <img
                                        src="/images/screenshot.png"
                                        alt="COWLHA Screenshot"
                                        onError={handleImageError}
                                        className="max-w-full h-auto rounded-lg shadow-lg"
                                    />
                                </div>
                            </div>

                        </main>

                        <footer className="py-16 text-center text-sm text-black dark:text-white/70">
                          <p>Coalition for Women Living with HIV AIDS <b className='mx-5'>2025</b></p>  
                        </footer>
                    </div>
                </div>
            </div>
        </>
    );
}
