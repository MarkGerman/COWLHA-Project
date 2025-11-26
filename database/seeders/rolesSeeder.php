<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\role;
use Illuminate\Support\Facades\DB;

class rolesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    
    public function run(): void
    {
        DB::statement('SET FOREIGN_KEY_CHECKS=0;');
        role::withoutTimestamps(function () {

            $roles = [
                ['name' => 'Admin', 'description' => 'Administrator with full access'],
                ['name' => 'Manager', 'description' => 'Manager with limited access'],
                ['name' => 'Staff', 'description' => 'Regular staff member'],
                ['name'=> 'Marketing Officer', 'description'=> 'Oversees marketing activities'],
                ['name'=> 'HR Officer', 'description'=> 'Manages human resources functions'],
                ['name'=> 'Programs Officer', 'description'=> 'Creates and manages programs'],
            ];

            foreach ($roles as $roleData) {
                role::create($roleData);
            }
        });
    }
}
