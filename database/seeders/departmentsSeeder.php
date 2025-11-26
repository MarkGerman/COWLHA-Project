<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\department;
use Illuminate\Support\Facades\DB;

class departmentsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::statement('SET FOREIGN_KEY_CHECKS=0;');
        department::truncate();
        department::withoutTimestamps(function () {
            $departments = [
                ['name' => 'Human Resources', 'description' => 'Handles recruitment and employee relations'],
                ['name' => 'Marketing', 'description' => 'Manages marketing campaigns and outreach'],
                ['name' => 'Finance', 'description' => 'Oversees budgeting and financial planning'],
                ['name'=> 'IT', 'description'=> 'Responsible for information technology and systems'],
                ['name'=> 'Operations', 'description'=> 'Manages day-to-day operations'],
                ['name'=> 'Programs', 'description'=> 'Creates and manages programs'],
            ];

            foreach ($departments as $departmentData) {
                department::create($departmentData);
            }
        });
    }
}
