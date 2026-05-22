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
            'department-name' => 'required',
            'department-head' => 'required',
            'department-description' => 'required',
        ]);

        SubmitDepartment::create($incomingFields);

        return redirect('/department');
    }
    
    public function display()
    {
        return Inertia::render('department', [
            'departmentname' => $department-name,
        ]);
    }

}