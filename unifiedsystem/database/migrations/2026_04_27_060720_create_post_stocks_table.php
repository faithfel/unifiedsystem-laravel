<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function poststock(): void
    {
        Schema::create('post_stocks', function (Blueprint $table) {
            $table->id();
            $table->string('product');
            $table->string('sku');
            $table->string('category');
            $table->decimal('',10,2)->default(0);
            $table->enum('status', ['active', 'inactive']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('post_stocks');
    }
};
