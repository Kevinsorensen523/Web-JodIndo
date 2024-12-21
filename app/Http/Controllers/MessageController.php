<?php

namespace App\Http\Controllers;

use App\Models\Message;
use Illuminate\Http\Request;
use Inertia\Inertia;

class MessageController extends Controller
{
    public function store(Request $request)
    {
        // Validate incoming data
        $request->validate([
            'fullName' => 'required|string|max:255',
            'phoneNumber' => 'required|string|max:20',
            'email' => 'required|email|max:255',
            'subject' => 'required|string|max:255',
            'message' => 'required|string',
        ]);

        // Save message to the database
        $message = Message::create([
            'full_name' => $request->fullName,
            'phone_number' => $request->phoneNumber,
            'email' => $request->email,
            'subject' => $request->subject,
            'message' => $request->message,
        ]);

        // Return a flash message and redirect
        if ($message) {
            return redirect()->route('contact')->with('flash', 'Message sent successfully!');
        }

        return redirect()->route('contact')->with('flash', 'Failed to send message.');
    }

}
