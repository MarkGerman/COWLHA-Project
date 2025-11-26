<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\User;
use App\Models\privilege;

class role extends Model
{
    protected $fillable = ['name',
    'description'
];
    public function users()
    {
        return $this->belongsToMany(User::class, 'user_roles', 'role_id', 'user_id');
    }
    public function privileges(){
        return $this->belongsToMany(Privilege::class,'role_privileges','role_id','privilege_id');
    }
    public function assignPrivileges($privileges)
    {
        $privileges = is_array($privileges) ? $privileges : [$privileges];

        // If the first item is numeric, we assume it's already an ID
        if (is_numeric($privileges[0])) {
            $privilegeIds = $privileges;
        } else {
            // Otherwise, assume the array holds privilege names
            $privilegeIds = Privilege::whereIn('name', $privileges)->pluck('id')->toArray();
        }
        
        // Assign privileges (no detach)
        $this->privileges()->syncWithoutDetaching($privilegeIds);
    }
}
