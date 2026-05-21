<?php

namespace App\Http\Controllers;

use App\Models\SubmitDepartment;
use Illuminate\Http\Request;

class SubmitDepartmentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function submitcontent(Request $request) 
    {
        $incomingFields = $request->validate([
            'department-name' => 'required',
            'department-head' => 'required',
            'department-description' => 'required',
        ]);

        SubmitDepartment::create($incomingFields);

        return redirect('/department');
    }
}