<?php

namespace App\Http\Controllers;

use App\Models\Department;
use Illuminate\Http\Request;

class DepartmentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $department = Department::all();
        return view('departments.index', compact('departments'));


        
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('departmentcreate.create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validate = $request->validate([
            'department-name' => 'required',
            'department-head' => 'required',
            'department-descriptiom' => 'required'

        ]);

        Department::create($validated);
        return redirect()->route('departments.index')->with('success', 'Department created.');
    }

    /**
     * Display the specified resource.
     */
    public function show(Department $department)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $department = Department::findOrFail($id);
        return view('department.edit', compact('departments'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Department $department)
    {
        $validate = $request->validate([
            'department-name' => 'required',
            'department-head' => 'required',
            'department-descriptiom' => 'required'

        ]);

        $department = Department::findOrFail($id);
        $department->update($validated);
        return redirect()->route('departments.index')->with('success', 'Department updated.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Department $department)
    {
        $department = Department::findOrFail($id);
        $department->delete();

                return redirect()->route('departments.index')->with('success', 'Department deleted.');
    }
}
