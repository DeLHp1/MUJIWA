<?php

namespace App\Data\Shared;

use Spatie\LaravelData\Data;
use Spatie\LaravelData\Optional;

class UserData extends Data
{
    public function __construct(
        public string $username,
        public string $profile_picture_url,
        public string|Optional|null $banner_picture_url,
        public \DateTime $created_at
    ) {
    }
}
