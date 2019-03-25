<?php

namespace App\Http\Controllers\Api\V1;

use App\Data\Repositories\ActivityDataRepository;
use Illuminate\Http\Request;
use Maatwebsite\Excel\Facades\Excel;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\Exportable;
use Maatwebsite\Excel\Concerns\WithHeadings;


class ActivityDataController extends ApiResourceController{

	public $_repository;

	public function __construct(ActivityDataRepository $repository){
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
				$input = request()->only('type', 'ba_id', 'team_id', 'customer_name', 'customer_number', 'cnic', 'sale', 'lep', 'lepp', 'tin_pack', 'did_not_buy', 'primary', 'secondary', 'time', 'date', 'location', 'pagination');

				return $input;
			}

			public function getTotal(Request $request)
			{
				$input = $this->input();
				$data = $this->_repository->getTotal($input);

				return response()->json($data, 200);
			}



			public function getChartsData(Request $request)
			{
				$input = $this->input();
				$data = $this->_repository->getTotal($input);

				return response()->json($data, 200);
			}



			public function download(Request $request)
			{

				$input = $this->input();
				$input['pagination'] = false;
				$data = $this->_repository->getTotal($input);

				return Excel::download(new CollectionExport($data) , 'summary.csv');


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
					'Total Interceptions',
					'Total CNICs',
					'Total Contacts',
					'Total Sales',
					'Total LEP',
					'Total LEPP',
					'Total TIN PACK',
					'Total DID NOT BUY',
				];
			}

		}
