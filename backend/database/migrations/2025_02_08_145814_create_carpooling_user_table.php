<?php

use App\Models\User;
use App\Models\Carpooling;
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
        Schema::create('carpooling_user', function (Blueprint $table) {
            $table->foreignIdFor(Carpooling::class)
                    ->constrained()
                    ->cascadeOnDelete();

            $table->foreignIdFor(User::class)
                    ->constrained()
                    ->cascadeOnDelete();

            $table->primary(['carpooling_id', 'user_id']);

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('carpooling_user');
    }
};
