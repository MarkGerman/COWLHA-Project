<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class rolePrivilegesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::statement('SET FOREIGN_KEY_CHECKS=0;');
        DB::table('role_privileges')->truncate();
        $rolePrivileges = [
            ['role_id' => 1, 'privilege_id' => 1],
            ['role_id' => 1, 'privilege_id' => 2],
            ['role_id' => 2, 'privilege_id' => 2],
            ['role_id' => 3, 'privilege_id' => 3],
            ['role_id'=> 4, 'privilege_id'=> 4],
            ['role_id'=> 5, 'privilege_id'=> 5],
            ['role_id'=> 6, 'privilege_id'=> 6],
        ];
        foreach ($rolePrivileges as $rolePrivilege) {
            DB::table('role_privileges')->insert($rolePrivilege);
        }
    }
}
