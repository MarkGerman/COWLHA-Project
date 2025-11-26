<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;
use Inertia\Inertia;
use App\Models\User;

class userController extends Controller
{
    public function index()
    {
        $users = User::all();
        return Inertia::render('users/index', [
            'users' => $users
        ]);
    }
    public function create()
    {
        $roles = \App\Models\role::all();
        return Inertia::render('users/create', [
            'roles' => $roles
        ]);
    }
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:8|confirmed',
            'role' => 'required|string|exists:roles,name',
        ]);
        $user = User::create([
            'name' => $validated['name'],
            'email' => $validated['email'],
            'password' => bcrypt($validated['password']),
        ]);
        $user->assignRole($validated['role']);
        return redirect()->route('user.index')->with('success', 'User created successfully.');
}
    public function show($id)
    {
        $user = User::findOrFail($id);
        $roles = User::where('id', $id)->first()->roles()->get();
        return Inertia::render('users/show', [
            'user' => $user,
            'roles'=> $roles,
            'privileges' => optional($roles->first())->privileges()->get() ?? [],
        ]);
    }
    public function edit($id)
    {
        $user = User::findOrFail($id);
        $roles = \App\Models\role::all();
        return Inertia::render('users/edit', [
            'user' => $user,
            'roles'=> $roles
        ]);
    }
    public function update(Request $request, $id)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users,email,'.$id,
            'password' => 'required|string|min:8|confirmed',
            'role' => 'required|string|exists:roles,name',
        ]);
        $user = User::findOrFail($id);
        $user->update([$validated['name'], $validated['email'], $validated['password']]);
        $user->assignRole($validated['role']);
        return redirect()->route('user.index')->with('success', 'User updated successfully.');
    }
    public function destroy($id)
    {
        $user = User::findOrFail($id);
        $user->delete();
        return redirect()->route('user.index')->with('success','Deleted successfully.');
    }
}
