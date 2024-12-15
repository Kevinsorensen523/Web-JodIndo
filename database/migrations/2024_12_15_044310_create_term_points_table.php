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
        Schema::create('term_points', function (Blueprint $table) {
            $table->id();
            $table->foreignId('term_id')->constrained('terms')->cascadeOnDelete(); // Relasi ke tabel terms
            $table->text('content'); // Isi poin
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('term_points');
    }
};
