<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PostStock extends Model
{
   protected $fillable = [
        'product',
        'sku,',
        'category',
        'price',
        'status',
   ];
}
