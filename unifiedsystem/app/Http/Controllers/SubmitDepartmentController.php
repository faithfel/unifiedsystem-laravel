<?php

namespace App\Http\Controllers;

use App\Models\SubmitDepartment;
use Illuminate\Http\Request;

class SubmitDepartmentController extends Controller
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
        $submitdepartment = SubmitDepartment::all();
        return view('/departments');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(SubmitDepartment $submitDepartment)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(SubmitDepartment $submitDepartment)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, SubmitDepartment $submitDepartment)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(SubmitDepartment $submitDepartment)
    {
        //
    }
}
