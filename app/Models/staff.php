<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\department;

class staff extends Model
{
    public function department()
    {
        return $this->belongsTo(department::class);
    }
}
