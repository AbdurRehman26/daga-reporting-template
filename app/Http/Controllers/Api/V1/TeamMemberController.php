<?php

namespace App\Http\Controllers\Api\V1;

use App\Data\Repositories\TeamMemberRepository;
use Illuminate\Http\Request;

class TeamMemberController extends ApiResourceController{

	public $_repository;

	public function __construct(TeamMemberRepository $repository){
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
				$input = request()->only('');
				return $input;
			}


		}