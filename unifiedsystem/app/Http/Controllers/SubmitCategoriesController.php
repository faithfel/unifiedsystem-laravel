<?php

namespace App\Http\Controllers;

use App\Models\SubmitCategories;
use Illuminate\Http\Request;

class SubmitCategoriesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function submitcategories(Request $request)
    {
        $incomingFields = $request->validate([
            'category_name' => 'required',
            'category_description' => 'required',
        ]);

        SubmitCategories::create($incomingFields);

        return redirect('/categories');
    }


}
