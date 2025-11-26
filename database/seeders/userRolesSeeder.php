<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class userRolesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::statement('SET FOREIGN_KEY_CHECKS=0;');
        $userRoles = [
            ['user_id' => 1,'role_id'=> 2, 'roleAssignmentType'=> 'permanent'],
            ['user_id'=> 2,'role_id'=> 1, 'roleAssignmentType'=> 'permanent'],
            ['user_id'=> 3,'role_id'=> 3, 'roleAssignmentType'=> 'temporary'],
        ];
        foreach ($userRoles as $userRole) {
            DB::table('user_roles')->insert($userRole);
        }
    }
}
