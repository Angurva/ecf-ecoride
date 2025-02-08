<?php

use App\Models\Car;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('carpoolings', function (Blueprint $table) {
            $table->id();
            $table->date('departure_date');
            $table->time('departure_time');
            $table->date('end_date');
            $table->time('end_time');
            $table->string('departure_location');
            $table->string('end_location');
            $table->enum('status',['pending','in progress','done','cancelled'])->default('pending');
            $table->integer('place_number');
            $table->decimal('price',5,2);
            $table->foreignIdFor(Car::class)->constrained();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('carpoolings');
    }
};
