<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use App\Models\role;

class User extends Authenticatable implements \Illuminate\Contracts\Auth\MustVerifyEmail
{
    /** @use HasFactory<\Database\Factories\UserFactory> */
    use HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var list<string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }
    public function roles()
    {
        return $this->belongsToMany(role::class, 'user_roles', 'user_id', 'role_id');
    }
     public function assignRole($role)
    {
        $role = Role::where('name', $role)->firstOrFail();

        // Attach the role to the user
        $this->roles()->syncWithoutDetaching($role->id);
    }
    public function hasRole($role){
        return $this->roles()->where('name', $role)->exists();
    }
    public function hasAnyRoles(array $roles){
        return $this->roles()->whereIn('name', $roles)->exists();
    }
    public function privileges()
    {
        // Get privileges through roles → flatten → extract names → unique list
        return $this->roles->flatMap->privileges->pluck('name')->unique();
    }
    public function hasPrivilege($privilegeName)
    {
        return $this->privileges()->contains($privilegeName);
    }
    public function hasAnyPrivilege(array $privileges)
    {
        return $this->privileges()->intersect($privileges)->isNotEmpty();
    }
}
