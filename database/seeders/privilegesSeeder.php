<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\privilege;
use Illuminate\Support\Facades\DB;

class privilegesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        privilege::withoutTimestamps(function () {
            DB::statement('SET FOREIGN_KEY_CHECKS=0;');
            privilege::truncate();

            $privileges = [
                ['name' => 'View Reports', 'description' => 'Can view various reports'],
                ['name' => 'Manage Users', 'description' => 'Can create, edit, and delete users'],
                ['name' => 'Edit Settings', 'description' => 'Can modify system settings'],
                ['name'=> 'Access Marketing Tools', 'description'=> 'Can use marketing related tools'],
                ['name'=> 'Manage HR Records', 'description'=> 'Can handle human resources records'],
                ['name'=> 'Oversee Programs', 'description'=> 'Can create and manage programs'],
            ];

            foreach ($privileges as $privilegeData) {
                privilege::create($privilegeData);
            }
        });
    }
}
