<?php

use App\Models\User;
use App\Models\Opinion;
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
        Schema::create('opinion_user', function (Blueprint $table) {
            $table->foreignIdFor(Opinion::class)
                    ->constrained()
                    ->cascadeOnDelete();

            $table->foreignIdFor(User::class)
                    ->constrained()
                    ->cascadeOnDelete();
            
            $table->primary(['opinion_id','user_id']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('opinion_user');
    }
};
