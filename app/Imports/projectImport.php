<?php

namespace App\Imports;

use App\Models\project;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithHeadingRow;

class projectImport implements ToModel, WithHeadingRow
{
    /**
    * @param array $row
    *
    * @return \Illuminate\Database\Eloquent\Model|null
    */
        public function model(array $row)
        {
            return new Project([
                'name'        => $row['name'],
                'description' => $row['description'],
                'start_date'  => $this->formatDate($row['start_date']),
                'end_date'    => $this->formatDate($row['end_date']),
                'status'      => $row['status'],
                'progress'    => $row['progress'],
            ]);
        }

        private function formatDate($value)
        {
            if ($value instanceof \DateTime) {
                return $value->format('Y-m-d');
            }

            // excel numeric date
            if (is_numeric($value)) {
                return \PhpOffice\PhpSpreadsheet\Shared\Date::excelToDateTimeObject($value)->format('Y-m-d');
            }

            // already formatted text
            return date('Y-m-d', strtotime($value));
        }
}
