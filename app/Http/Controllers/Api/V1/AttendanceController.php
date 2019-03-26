<?php

namespace App\Http\Controllers\Api\V1;

use App\Data\Repositories\AttendanceRepository;
use Illuminate\Http\Request;
use Maatwebsite\Excel\Facades\Excel;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\Exportable;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Carbon\Carbon;

class AttendanceController extends ApiResourceController{

	public $_repository;

	public function __construct(AttendanceRepository $repository){
		$this->_repository = $repository;
	}

	public function rules($value=''){
		$rules = [];

		if($value == 'store'){}

			if($value == 'update'){}

				if($value == 'index'){}

					return $rules;

			}

			public function input($value=''){
				$input = request()->only('ba_id' , 'ba_name', 'time', 'pagination', 'date', 'location', 'picture');
				return $input;
			}




			public function downloadAttendance(Request $request)
			{

				$input = $this->input();
				$input['pagination'] = false;
				$data = $this->_repository->findByAll($input['pagination']);

				return Excel::download(new CollectionExport($data['data']) , 'summary'.Carbon::now()->toDateTimeString().'.csv');


			}



		}


		class CollectionExport implements FromCollection, WithHeadings
		{
			use Exportable;
			public $data;

			public function __construct($data){
				$this->data = $data;
			}


			public function collection()
			{
				$data = $this->data;
				return collect([$data]);
			}

			public function headings(): array
			{
				return [
					'BA ID',
					'Time',
					'Date',
					'Location'
				];
			}

		}
