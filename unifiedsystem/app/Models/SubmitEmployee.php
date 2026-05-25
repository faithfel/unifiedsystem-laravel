<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SubmitEmployee extends Model
{

    protected $fillable = [
        'employee_id',
        'first_name',
        'last_name',
        'department',
        'date_hired',
        'phone_number',
        'position',
        'base_salary',
    ];
}
