<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class SubmitDepartment extends Model
{
    use HasFactory;
    protected $fillable = [ 'departmentname','departmenthead', 'departmentdescription' ];


}
