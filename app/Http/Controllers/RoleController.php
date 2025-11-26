<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\role;
use App\Models\privilege;
use Inertia\Inertia;

class RoleController extends Controller
{
    public function index()
    {
        $roles = role::paginate(5);
        return Inertia::render("roles/index", [
            "roles"=> $roles
            ]);
    }
    public function create()
    {
        $privileges = privilege::all();
        return Inertia::render("roles/create", [
            "privileges"=> $privileges
            ]);
    }
    public function store(Request $request) 
    {
        $validated = $request->validate([
            'name' => 'required|unique:roles,name',
            'description' => 'nullable|string',
            'privileges' => 'array',
            'privileges.*' => 'exists:privileges,id',  // confirm privilege IDs exist
        ]);

        // Create only the role info
        $role = Role::create([
            'name' => $validated['name'],
            'description' => $validated['description'] ?? null,
        ]);

        // Assign privileges
        if (!empty($validated['privileges'])) {
            $role->assignPrivileges($validated['privileges']);
        }

        return redirect()->route('role.index')
                        ->with('success', 'Role created successfully.');
    }
    public function show($id){
        $role = role::find($id);
        $privileges = $role->privileges()->get();
        return Inertia::render('roles/show', [
            'role' => $role,
            'privileges'=> $privileges
        ]);
    }
    public function edit($id){
        $role = role::find($id);
        $privileges = privilege::all();
        return Inertia::render('roles/edit', [
            'role' => $role,
            'privileges' => $privileges
        ]);
    }
    public function update(Request $request, $id){
        $role = role::find($id);
        $request->validate([
            'name' => 'required|unique:roles,name,'.$role->id,
        ]);
        role::find($id)->update($request->all());
        return redirect()->route('role.index')
                         ->with('success', 'Role updated successfully.');
    }
    public function destroy($id){
        $role = role::find($id);
        $role->delete();
        return redirect()->route('role.index')
                         ->with('success', 'Role deleted successfully.');
    }
}
