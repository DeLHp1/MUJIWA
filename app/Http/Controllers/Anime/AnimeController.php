<?php

namespace App\Http\Controllers\Anime;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class AnimeController extends Controller
{
    public function index(Request $request)
    {
        return Inertia::render('anime', ['image' => Storage::url('rQm18dONot4mlZvyQ6bvYTMm8Yf.jpg'), 'banner' => Storage::url('3XAGgklKkJhv5M9m5NkfhBYb7l8.jpg')]);
    }
}
