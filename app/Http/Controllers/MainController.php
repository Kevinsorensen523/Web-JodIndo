<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Contact;
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
}
