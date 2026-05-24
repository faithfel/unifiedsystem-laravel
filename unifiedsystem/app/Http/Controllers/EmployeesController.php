<?php

namespace App\Http\Controllers;

use App\Models\Employees;
use Illuminate\Http\Request;

class EmployeesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $employees=new Employees();
        $employees->employee_id =  $request-> employee_id;
        $employees->first_name = $request-> first_name;
        $employees->last_name =  $request->last_name;
        $employees->department = $request->department;
        $employees->date_hired = $request->date_hired;
        $employees->phone_number = $request->phone_number;
        $employees->position = $request->position;
        $employees->base_salary = $request-> base_salary;

        $employees->save();

        return redirect()-> route('employees');
    }
}

