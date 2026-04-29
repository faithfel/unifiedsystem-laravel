<?php

use App\Models\PostStock;
use Illuminate\Support\Facades\Route;
use Laravel\Fortify\Features;
use App\Http\Controllers\PostStockController;

Route::inertia('/', 'welcome', [
    'canRegister' => Features::enabled(Features::registration()),
])->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('dashboard', 'dashboard')->name('dashboard');

});
Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('posterminal', 'posterminal')->name('posterminal');

});
Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('transactions', 'transactions')->name('transactions');

});
Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('stocks', 'stocks')->name('stocks');

});
Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('employees', 'employees')->name('employees');

});
Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('department', 'department')->name('department');

});
Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('attendance', 'attendance')->name('attendance');

});
Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('leave', 'leave')->name('leave');

});
Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('payroll', 'payroll')->name('payroll');

});

Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('categories', 'categories')->name('categories');

});
require __DIR__.'/settings.php';


Route::resource('poststock',PostStock::class);

