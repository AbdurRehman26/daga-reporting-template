<?php

namespace App\Http\Controllers\Api\V1;

use App\Data\Repositories\ActivityDataRepository;

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
				$input = request()->only('ba_id', 'customer_name', 'customer_number', 'cnic', 'sale', 'lep', 'lepp', 'tin_pack', 'did_not_buy', 'primary', 'secondary', 'time', 'date', 'location');

				return $input;
			}
		}