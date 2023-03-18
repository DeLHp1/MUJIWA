<?php

namespace App\Models;

use App\Traits\HasBanner;
use App\Traits\HasProfile;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\Hash;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable implements MustVerifyEmail
{
    use HasApiTokens, HasFactory, Notifiable, HasProfile, HasBanner;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'username',
        'email',
        'password',
        'profile_image_path',
        'banner_image_path',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected $appends = [
        'profile_picture_url',
        'banner_picture_url',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'account_activated_at' => 'datetime',
    ];

    public function hasActivatedAccount(): bool
    {
        return ! is_null($this->account_activated_at);
    }

    protected static function booted(): void
    {
        static::creating(function (User $user) {
            $user->password = Hash::make($user->password);
        });
    }
}
