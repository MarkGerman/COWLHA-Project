<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\role;

class privilege extends Model
{
    protected $fillable = ['name',
    'description',
    'privileges'
    ];
    public function roles()
    {
        return $this->belongsToMany(role::class, 'role_privileges', 'privilege_id', 'role_id');
    }
    public function assignRoles($roles)
    {
        // Ensure array
        $roles = is_array($roles) ? $roles : [$roles];

        // Determine whether values are IDs or names
        if (is_numeric($roles[0])) {
            $roleIds = $roles;
        } else {
            $roleIds = Role::whereIn('name', $roles)->pluck('id')->toArray();
        }

        // Sync roles
        $this->roles()->sync($roleIds); // detach old, attach new
    }
}
