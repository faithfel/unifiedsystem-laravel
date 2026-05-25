<?php
use App\Http\Controllers\POSTerminalController;
use App\Http\Controllers\SubmitDepartmentController;
use App\Http\Controllers\SubmitEmployeeController;
use Illuminate\Support\Facades\Route;
use Laravel\Fortify\Features;

Route::inertia('/', 'welcome', [
    'canRegister' => Features::enabled(Features::registration()),
])->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('dashboard', 'dashboard')->name('dashboard');
    Route::inertia('posterminal', 'posterminal')->name('posterminal');
    Route::inertia('posterminalcreate', 'posterminalcreate' )->name('posterminalcreate');
    Route::inertia('transactions', 'transactions')->name('transactions');
    Route::inertia('stocks', 'stocks')->name('stocks');
    Route::inertia('stockscreate', 'stockscreate')->name('stockscreate');
    Route::inertia('employees', 'employees')->name('employees');
    Route::get('/employeescreate',  [SubmitEmployee::class, "index"])->name('employees.index');
    Route::inertia('department', 'department')->name('department');
    Route::inertia('departmentcreate', 'departmentcreate')->name('departmentcreate');
    Route::inertia('attendance', 'attendance')->name('attendance');
    Route::inertia('leave', 'leave')->name('leave');
    Route::inertia('leavecreate', 'leavecreate')->name('leavecreate');
    Route::inertia('payroll', 'payroll')->name('payroll');
    Route::inertia('categories', 'categories')->name('categories');
    Route::inertia('categoriescreate', 'categoriescreate')->name('categoriescreate');
});


require __DIR__.'/settings.php';


/* Form Routes  */



Route::post('/submitdepartment', [SubmitDepartmentController::class, 'submitdepartment']);




Route::post('/employees', [PostController::class, 'store'])->name('employees.store');


Route::post("/submit-categories", function (Request $request) {
    return "form ";
})->name("submit-categories");


Route::post("/submit-stocks", function (Request $request) {
    return "form ";
})->name("submit-stocks");


Route::post("/submit-leave", function (Request $request) {
    return "form ";
})->name("submit-leave");

