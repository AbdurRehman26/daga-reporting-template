<?php

namespace App\Http\Controllers\Api\V1;

use App\Data\Repositories\AttendanceRepository;

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
				$input = request()->only('ba_id' , 'ba_name', 'time', 'date', 'location');

				return $input;
			}
		}