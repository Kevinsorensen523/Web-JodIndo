<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Term;
use Inertia\Inertia;
use Inertia\Response;

class TermController extends Controller
{
    public function index(): Response
    {
        $terms = Term::with('points')->get();

        // dd($terms->toArray());

        return Inertia::render('Term', [
            'terms' => $terms,
        ]);
    }
}
