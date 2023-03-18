<?php

namespace App\Http\Controllers\Settings;

use App\Http\Controllers\Controller;
use App\Models\Content;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;
use Illuminate\Validation\Rules\File;
use Inertia\Inertia;
use Inertia\Response;
use Tiptap\Editor;

class UserProfileSettingsController extends Controller
{
    public function index(Request $request): Response
    {
        return Inertia::render('settings/page');
    }

    public function updateProfilePicture(Request $request){
        Validator::make($request->all(), [
           'profilePicture' => [
               'required',
               File::image()
               ->max(3*1024)
           ]
        ])->validate();

        $request->user()->updateProfilePicture($request->file('profilePicture'));

        return back()->success('Aktualizace profilové fotky', 'Vaše profilovka byla aktualizovaná');
    }

    public function updateBannerPicture(Request $request){
        Validator::make($request->all(), [
            'profileBanner' => [
                'required',
                File::image()
                    ->max(5*1024)
            ]
        ])->validate();

        $request->user()->updateBannerPicture($request->file('profileBanner'));

        return back()->success('Aktualizace banneru', 'Váš banner byl aktualizován.');
    }
}
