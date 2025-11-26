<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\project;
use Inertia\Inertia;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use App\Exports\projectExport;
use Maatwebsite\Excel\Facades\Excel;

class ProjectController extends Controller
{
    public function index()
    {
        $projects = Project::paginate(5);
        return Inertia::render("projects/index", [
            'Projects' => $projects
        ]);
    }
    public function create()
    {
        $projectStatuses = DB::table('projects')->select('status')->distinct()->get();
       return Inertia::render("projects/create", [
            'projectStatuses' => $projectStatuses
       ]);
    }
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
            'start_date' => 'required|date',
            'end_date' => 'nullable|date|after_or_equal:start_date',
            'status' => 'required|string|in:planned,ongoing,completed,on-hold',
            'progress' => 'required|integer|min:0|max:100',
        ]);
        Project::withoutTimestamps(function () use ($validated) {
            Project::create($validated);
        });

        return redirect()->route('projects.index')->with('success', 'Project created successfully.');
    }
    public function show($id)
    {
       $project = Project::findOrFail($id);
         return Inertia::render("projects/show", [
              'project' => $project
         ]);  
    }
    public function edit($id)
    {
        $project = Project::findOrFail($id);
        return Inertia::render('projects/edit', [
            'project'=> $project
        ]);
    }
    public function update(Request $request, $id)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
            'start_date' => 'required|date',
            'end_date' => 'nullable|date|after_or_equal:start_date',
            'status' => 'required|string|in:planned,ongoing,completed,on-hold',
            'progress' => 'required|integer|min:0|max:100',
        ]);
        Project::withoutTimestamps(function () use ($validated, $id) {
            $project = Project::findOrFail($id);
            $project->update($validated);
        });

        return redirect()->route('project.index')->with('success', 'Project updated successfully.');
    }
    public function destroy($id)
    {
        $project = Project::findOrFail($id);
        $project->delete();
        return redirect()->route('project.index')->with('success','Deleted successfully.');
    }
    public function export() 
    {
        return Excel::download(new projectExport, 'projects.xlsx');
    }
    public function import(Request $request) 
    {
        $request->validate([
            'file' => 'required|mimes:xlsx,csv'
        ]);

        $file = $request->file('file');

        Excel::import(new \App\Imports\projectImport, $file);

        return redirect()->route('project.index')->with('success', 'Projects imported successfully.');
    }
}
