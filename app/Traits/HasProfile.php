<?php

namespace App\Traits;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;

trait HasProfile
{
    public function profilePictureUrl(): Attribute
    {
        return Attribute::get(function () {
            return $this->profile_image_path
                ? Storage::disk($this->getProfilePictureDisk())->url($this->profile_image_path)
                : $this->defaultProfilePictureUrl();
        });
    }

    protected function defaultProfilePictureUrl()
    {
        $name = trim(collect(explode(' ', $this->username))->map(function ($segment) {
            return mb_substr($segment, 0, 1);
        })->join(' '));

        return 'https://ui-avatars.com/api/?name='.urlencode($name).'&color=3B82F6&background=0F172A';
    }

    public function updateProfilePicture(UploadedFile $ProfilePicture, $storagePath = 'user/profile')
    {
        return tap($this->profile_image_path, function ($prev) use ($ProfilePicture, $storagePath) {
            $this->forceFill([
                'profile_image_path' => $ProfilePicture->storePublicly(
                    $storagePath, ['disk' => $this->getProfilePictureDisk()]
                ),
            ])->save();

            if ($prev) {
                Storage::disk($this->getProfilePictureDisk())->delete($prev);
            }
        });
    }

    public function deleteProfilePicture()
    {
        if (is_null($this->profile_image_path)) {
            return;
        }

        Storage::disk($this->getProfilePictureDisk())->delete($this->profile_image_path);

        $this->forceFill([
            'profile_image_path' => null,
        ])->save();
    }

    protected function getProfilePictureDisk(): string
    {
        return 'r2';
    }
}
