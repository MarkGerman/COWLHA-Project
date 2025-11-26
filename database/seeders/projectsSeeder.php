<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;
use App\Models\project;
use Illuminate\Support\Carbon;

class projectsSeeder extends Seeder
{
   public function run()
    {
        // Disable foreign key checks to avoid issues during truncation
        Schema::disableForeignKeyConstraints();

        // Truncate the projects table to start fresh
        DB::table('projects')->truncate();

        // Re-enable foreign key checks
        Schema::enableForeignKeyConstraints();

        project::withoutTimestamps(function () {  
            // Define sample projects data
        $projects = [
            [
                'name' => 'Website Redesign',
                'description' => 'Redesign the corporate website for better user experience.',
                'start_date' => Carbon::parse('2023-01-15'),
                'end_date' => Carbon::parse('2023-04-15'),
                'status' => 'completed',
                'progress' => 100,
            ],
            [
                'name' => 'Mobile App Development',
                'description' => 'Develop a mobile application for our services.',
                'start_date' => Carbon::parse('2023-03-01'),
                'end_date' => Carbon::parse('2023-09-01'),
                'status' => 'ongoing',
                'progress' => 60,
            ],
            [
                'name' => 'Marketing Campaign',
                'description' => 'Launch a new marketing campaign for product awareness.',
                'start_date' => Carbon::parse('2023-05-01'),
                'end_date' => Carbon::parse('2023-07-31'),
                'status' => 'planned',
                'progress' => 0,
            ],
            [
                'name' => 'Customer Feedback System',
                'description' => 'Implement a system to gather and analyze customer feedback.',
                'start_date' => Carbon::parse('2023-02-15'),
                'end_date' => Carbon::parse('2023-06-15'),
                'status' => 'on-hold',
                'progress' => 20,
            ],
        ];

        // Insert sample projects into the database
        foreach ($projects as $project) {
            project::create($project);
        }
        });

        
    }
}
