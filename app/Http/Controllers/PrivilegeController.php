<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\privilege;
use App\Models\role;
use Illuminate\Support\Facades\App;
use Inertia\Inertia;

class PrivilegeController extends Controller
{
    public function index()
    {
        $privileges = privilege::all();
        $roles = role::all();
        return Inertia::render("privileges/index", [
            "privileges" => $privileges,
            "roles"=> $roles
            ]);
    }

    public function create()
    {
        $roles = role::all();
        return Inertia::render("privileges/create", [
            "roles"=> $roles
        ]);
    }

    public function store(Request $request)
    {
         $validated = $request->validate([
            'name' => 'required|unique:privileges,name',
            'description' => 'nullable|string',
            'roles' => 'array',
            'roles.*' => 'exists:roles,id',  // confirm roles IDs exist
        ]);

        // Create only the privilege info
        $privilege = privilege::create([
            'name' => $validated['name'],
            'description' => $validated['description'] ?? null,
        ]);

        // Assign roles
        if (!empty($validated['roles'])) {
            $privilege->assignRoles($validated['roles']);
        }

        return redirect()->route('privilege.index')
                        ->with('success', 'Privilege created successfully.');
    }

    public function show($id){
        $privilege = privilege::find($id);
        $roles = $privilege->roles()->get();
        return Inertia::render('privileges/show', [
            'privilege' => $privilege,
            'roles' => $roles
        ]);
    }
    public function edit($id){
        $privilege = privilege::find($id);
        $userRoles = $privilege->roles()->get();
        $roles = \App\Models\role::All();
        return Inertia::render('privileges/edit', [
            'privilege' => $privilege,
            'roles'=> $roles,
            'userRoles' => $userRoles
        ]);
    }
    public function update(Request $request, $id){
        $privilege = privilege::find($id);
        $validated = $request->validate([
            'name' => 'required',
            'description' => 'nullable|string',
            'roles' => 'nullable|array',
            'roles.*' => 'exists:roles,id',  // confirm roles IDs exist
        ]);
        $privilege->update(
        [
        'name' => $validated['name'], 
        'description' => $validated['description'] ?? null
        ]);
        $roles = $validated['roles'] ?? [];
        $privilege->assignRoles($roles);
        return redirect()->route('privilege.index');
    }

    public function destroy($id){
        $privilege = privilege::find($id);
        $privilege->delete();
        return redirect()->route('privilege.index')
                         ->with('success', 'Privilege deleted successfully.');
    }
}
