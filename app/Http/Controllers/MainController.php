<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Contact;
use App\Models\Faq;
use App\Models\Nilai;
use App\Models\Pekerja;
use App\Models\PemberiKerja;
use App\Models\Privacy;
use App\Models\Term;
use Inertia\Inertia;
use Inertia\Response;

class MainController extends Controller
{
    public function about()
    {
        $nilais = Nilai::all();
        return Inertia::render('About', [
            'nilais' => $nilais,
        ]);
    }

    public function contact()
    {
        $contacts = Contact::first();
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

    public function home()
    {
        $faqs = FAQ::latest()->take(3)->get();
        $pekerjas = Pekerja::all();
        $pemberi_kerja =  PemberiKerja::all();

        return Inertia::render('Home', [
            'faqs' => $faqs,
            'pekerjas' => $pekerjas,
            'pemberi_kerjas' => $pemberi_kerja,
        ]);
    }

    public function privacy()
    {
        $privacies = Privacy::all();

        return Inertia::render('Privacy', [
            'privacies' => $privacies,
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
