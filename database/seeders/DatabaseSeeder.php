<?php

namespace Database\Seeders;

use App\Models\department;
use App\Models\privilege;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\project;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call(rolesSeeder::class);  
    }
}
