<?php

namespace App\Exports;

use App\Models\project;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;

class projectExport implements FromCollection, WithHeadings
{
    /**
    * @return \Illuminate\Support\Collection
    */
    public function collection()
    {
        return project::all([
            'id',
            'name',
            'description',
            'start_date',
            'end_date',
            'status',
            'progress',
        ]);
    }
    public function headings(): array
    {
        return [
            'ID',
            'Name',
            'Description',
            'Start Date',
            'End Date',
            'Status',
            'Progress',
        ];
    }
}
