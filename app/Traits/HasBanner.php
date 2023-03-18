<?php

namespace App\Traits;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;

trait HasBanner
{
    public function bannerPictureUrl(): Attribute
    {
        return Attribute::get(function () {
            return $this->banner_image_path
                ? Storage::disk($this->getBannerPictureDisk())->url($this->banner_image_path)
                : null;
        });
    }

    public function updateBannerPicture(UploadedFile $bannerPicture, $storagePath = 'user/banner')
    {
        return tap($this->banner_image_path, function ($prev) use ($bannerPicture, $storagePath) {
            $this->forceFill([
                'banner_image_path' => $bannerPicture->storePublicly(
                    $storagePath, ['disk' => $this->getBannerPictureDisk()]
                ),
            ])->save();

            if ($prev) {
                Storage::disk($this->getBannerPictureDisk())->delete($prev);
            }
        });
    }

    public function deleteBannerPicture()
    {
        if (is_null($this->banner_image_path)) {
            return;
        }

        Storage::disk($this->getBannerPictureDisk())->delete($this->banner_image_path);

        $this->forceFill([
            'banner_image_path' => null,
        ])->save();
    }

    protected function getBannerPictureDisk(): string
    {
        return 'r2';
    }
}
