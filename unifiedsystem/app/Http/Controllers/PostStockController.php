<?php

namespace App\Http\Controllers;

use App\Models\PostStock;
use Illuminate\Http\Request;

class PostStockController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $posts = PostStock::all();
        return view('stocks.index');
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
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(PostStock $postStock)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(PostStock $postStock)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, PostStock $postStock)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(PostStock $postStock)
    {
        //
    }
}
