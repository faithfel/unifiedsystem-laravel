<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class POSTerminalController extends Controller
{
    public function index() {
        return Inertia::render();
    }
}
