<?php

use Illuminate\Database\Seeder;
use App\Data\Models\Team;
use App\Data\Models\TeamMember;

class CityTeamAndMemberTableSeeder extends Seeder{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {


    	$regions = [
    		'karachi',
    		'sindh',
    		'punjab',
    		'lahore',
    		'islamabad',
    		'peshawar',
    	];

    	$data = [];

    	foreach ($regions as $key => $region) {

    		$data[] = [
    			'region' => $region
    		];

    	}

    	Team::insert($data);


    	$data = [];

    	$totalBAs = 36;


    	for ($i=0; $i < $totalBAs ; $i++) { 
    		
    		$data [] = [
    			'team_id' => (int) ($i/6) + 1
    		];

    	}

    	TeamMember::insert($data);

    }
}
