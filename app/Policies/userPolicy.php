<?php

namespace App\Policies;

use App\Models\User;

class userPolicy
{
    /**
     * Create a new policy instance.
     */
    public function __construct()
    {
        //
    }
    public function viewAdminBoard(User $user)
    {
        return $user->roles->contains('name', 'Admin');
    }
    public function viewStaffBoard(User $user)
    {
        return $user->roles->contains('name', 'Staff');
    }
    public function viewFinanceBoard(User $user)
    {
        return in_array($user->roles, ['Admin', 'Finance']);
    }
    public function viewMarketingBoard(User $user)
    {
        return in_array($user->roles, ['Admin', 'Marketing']);
    }
    public function viewManagerBoard(User $user)
    {
        return in_array($user->roles, ['Admin', 'Manager']);
    }
}
