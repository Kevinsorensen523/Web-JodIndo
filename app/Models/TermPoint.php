<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TermPoint extends Model
{
    use HasFactory;

    protected $fillable = ['term_id', 'content'];

    public function term()
    {
        return $this->belongsTo(Term::class);
    }
}
