<?php

use App\Http\Controllers\StocksController;
use Illuminate\Support\Facades\Route;
use Laravel\Fortify\Features;
use Inertia\Inertia;

Route::inertia('/', 'welcome', [
    'canRegister' => Features::enabled(Features::registration()),
])->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('dashboard', 'dashboard')->name('dashboard');
    Route::get('/stocks', [StocksController::class,  'index']) ->name('stocks.index');
});

require __DIR__.'/settings.php';
