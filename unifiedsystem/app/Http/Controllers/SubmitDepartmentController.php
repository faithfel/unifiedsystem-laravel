<?php

namespace App\Http\Controllers;

use App\Models\SubmitDepartment;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;


class SubmitDepartmentController extends Controller
{
    /**
     * Display a listing of the resource.
     */

    public function submitdepartment(Request $request) 
    {
        $incomingFields = $request->validate([
            'department_name' => 'required',
            'department_head' => 'required',
            'department_description' => 'required',
        ]);

        SubmitDepartment::create($incomingFields);

        return redirect('/department');
    }
    
    public function display()
    {
        return Inertia::render('department', [
            'departmentname' => $department_name,
        ]);
    }

}