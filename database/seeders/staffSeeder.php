<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use App\Models\User;
use App\Models\department;

class staffSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::statement('SET FOREIGN_KEY_CHECKS=0;');
        $departments = department::all();
        $users = User::all();

        foreach ($users as $user) {
        DB::table('staff')->insert([
            'user_id' => $user->id,
            'department_id' => $departments->random()->id, // pick random department
            ]);
        }
    }
}
