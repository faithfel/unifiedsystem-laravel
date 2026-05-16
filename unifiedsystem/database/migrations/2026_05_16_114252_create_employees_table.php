<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('employees', function (Blueprint $table) {
            $table->integer('employee-id');
            $table->string('first-name', length: 100);
            $table->string('last-name', length: 100);
            $table->string('department', length: 100);
            $table->integer('phone-number');
            $table->timestamps('date-hired');
            $table->string('position', length: 100);
            $table->integer('base-salary');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('employees');
    }
};
