<?php

use Illuminate\Database\Seeder;
use Faker\Factory;
use Carbon\Carbon;
use App\Data\Models\ActivityData;

class ActivityDataTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $now = Carbon::now()->toDateTimeString();
        
        $faker = Faker\Factory::create();

    	$totalRecords = 150;

        $randomValues = [0, 0, 0, 0, 0, 1];

        $teamIds = [1, 2, 3, 4, 5, 6];
        $baIds = [1, 2, 3, 4, 5, 6];
        $sales = ['yes', 'no', 'yes', 'no', 'yes', 'no', 'no', 'no'];




    	for ($i=0; $i < $totalRecords ; $i++) { 
    		$data [] = [
    			'team_id' => $teamIds[array_rand($teamIds)],
    			'customer_name' => $faker->Company,
    			'customer_number' => $faker->PhoneNumber,
    			'cnic' => $faker->PhoneNumber,
    			'sale' => $sales[array_rand($sales)],
    			'lep' => $randomValues[array_rand($randomValues)],
    			'lepp' => $randomValues[array_rand($randomValues)],
    			'tin_pack' => $randomValues[array_rand($randomValues)],
    			'did_not_buy' => $randomValues[array_rand($randomValues)],
    			'did_not_buy' => $randomValues[array_rand($randomValues)],
    		];

    	}


    	ActivityData::insert($data);


    }
}
