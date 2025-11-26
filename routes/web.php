<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\RoleController;
use App\Models\project;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Models\User;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    $projects = DB::select("
    SELECT 
        status,
        ROUND((COUNT(*) * 100) / (SELECT COUNT(*) FROM projects), 0) AS percentage
    FROM projects
    GROUP BY status
    ");
    $projectsSummary = DB::select("
    SELECT 
        status,
        COUNT(*) AS NoOfProjects,
        (select COUNT(*) from projects) as allProjects
    FROM projects
    GROUP BY status
    ");
    $roles = auth()->user()->roles()->pluck('name')->toArray();
    return Inertia::render('Dashboard', [
        'projects' => $projects,
        'projectsSummary'=> $projectsSummary,
        'userRoles' => [
            'viewTabs' => auth()->user()->hasAnyRoles($roles),
        ],
    ]);
})->middleware(['auth', 'verified'])->name('dashboard');


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});
Route::middleware('auth')->group(function () {
    Route::get('/users/{user}', [App\Http\Controllers\userController::class, 'show'])->name('users.show');
    Route::resource('user', App\Http\Controllers\userController::class);
    Route::resource('project', App\Http\Controllers\ProjectController::class);
    Route::get('/projects/export', [App\Http\Controllers\ProjectController::class, 'export'])->name('projects.export');
    Route::post('/projects/import', [App\Http\Controllers\ProjectController::class, 'import'])->name('projects.import');
    Route::resource('role', App\Http\Controllers\RoleController::class);
    Route::resource('privilege', App\Http\Controllers\PrivilegeController::class);
});


require __DIR__.'/auth.php';
