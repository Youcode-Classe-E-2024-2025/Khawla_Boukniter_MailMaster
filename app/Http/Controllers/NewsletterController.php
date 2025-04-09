<?php

namespace App\Http\Controllers;

use App\Models\Newsletter;
use Illuminate\Http\Request;

class NewsletterController extends Controller
{
    public function index()
    {
        $newsletters = Newsletter::all();

        return response()->json($newsletters);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string',
            'content' => 'required|string',
        ]);

        $newsletter = Newsletter::create($validated);

        return response()->json([
            'message' => 'newsletter created',
            'newsletter' => $newsletter
        ], 201);
    }

    public function show($id)
    {
        $newsletter = Newsletter::findOrFail($id);

        return response()->json($newsletter);
    }

    public function update(Request $request, $id)
    {
        $validated = $request->validate([
            'title' => 'required|string',
            'content' => 'required|string',
        ]);

        $newsletter = Newsletter::findOrFail($id);
        $newsletter->update($validated);

        return response()->json([
            'message' => 'newsletter updated',
            'newsletter' => $newsletter
        ]);
    }

    public function destroy($id)
    {
        $newsletter = Newsletter::findOrFail($id);
        $newsletter->delete();

        return response()->json([
            'message' => 'newsletter deleted',
        ]);
    }
}
