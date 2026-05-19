<?php
use App\Http\Controllers\POSTerminalController;
use App\Http\Controllers\DepartmentController;
use Illuminate\Support\Facades\Route;
use Laravel\Fortify\Features;

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
    Route::inertia('posterminalcreate', 'posterminalcreate' )->name('posterminalcreate');
});

Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('transactions', 'transactions')->name('transactions');

});
Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('stocks', 'stocks')->name('stocks');

});
Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('stockscreate', 'stockscreate')->name('stockscreate');

});
Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('employees', 'employees')->name('employees');
});
Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('employeescreate', 'employeescreate')->name('employeescreate');
});

Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('department', 'department')->name('department');

});

Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('departmentcreate', 'departmentcreate')->name('departmentcreate');

});
Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('attendance', 'attendance')->name('attendance');

});
Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('leave', 'leave')->name('leave');

});
Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('leavecreate', 'leavecreate')->name('leavecreate');

});
Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('payroll', 'payroll')->name('payroll');

});

Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('categories', 'categories')->name('categories');

});
Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('categoriescreate', 'categoriescreate')->name('categoriescreate');

});
require __DIR__.'/settings.php';


/* Form Routes  */

Route::post("/submit-employees", function (Request $request) {
    return "form ";
})->name("submit-employees");


Route::resource('submit-department', DepartmentController::class);


Route::post("/submit-categories", function (Request $request) {
    return "form ";
})->name("submit-categories");


Route::post("/submit-stocks", function (Request $request) {
    return "form ";
})->name("submit-stocks");


Route::post("/submit-leave", function (Request $request) {
    return "form ";
})->name("submit-leave");