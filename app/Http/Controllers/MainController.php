<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Contact;
use App\Models\Faq;
use App\Models\Term;
use Inertia\Inertia;
use Inertia\Response;

class MainController extends Controller
{
    public function contact()
    {
        $contacts = Contact::all();
        return Inertia::render('Contact', [
            'contacts' => $contacts,
        ]);
    }

    public function faq()
    {
        $faqs = Faq::all();
        return Inertia::render('FAQ', [
            'faqs' => $faqs,
        ]);
    }

    public function term()
    {
        $terms = Term::with('points')->get();

        // dd($terms->toArray());

        return Inertia::render('Term', [
            'terms' => $terms,
        ]);
    }
}
