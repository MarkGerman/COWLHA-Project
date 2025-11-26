<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class project extends Model
{
    public $timestamps = false;
    protected $table = "projects";
    protected $fillable = [
        'name',
        'description',
        'start_date',
        'end_date',
        'status',
        'progress',
    ];
}
