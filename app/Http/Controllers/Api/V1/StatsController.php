<?php

namespace App\Http\Controllers\Api\V1;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Data\Repositories\FormRepository;

class StatsController extends Controller
{
	
	private $_repository;

    /**
     * UserController constructor.
     * @param FormRepository $repository
     */
    public function __construct(FormRepository $repository)
    {
    	$this->_repository = $repository;
    }


    public function getTotalRecords(Request $request)
    {

        $input = $request->only(
            'total_interceptions', 'total_wet_sampling', 'created_at',
            'total_sales', 'total_deals', 'total_teams' , 'city', 'team'
        );

        $data = $this->_repository->getTotalByCriteria($input);
        return response()->json(['success' => true, 'data' => $data], 200);
    }   

    public function getBrandUsage(Request $request)
    {

    	$input = $request->only(
            'total_interceptions', 'total_wet_sampling', 'created_at',
            'total_sales', 'total_deals', 'total_teams' , 'city', 'team'
    	);

    	$data = $this->_repository->getBrandUsage($input);
    	return response()->json(['success' => true, 'data' => $data], 200);
    }	


    public function getTeams()
    {
        $data = \App\Data\Models\Team::all();
        return response()->json(['success' => true, 'data' => $data], 200);

    }


    public function dailyTargets(Request $request)
    {
        $input = $request->only(
            'quantity', 'total_sampling_quantity', 'interceptions'
        );

        $data = $this->_repository->dailyTargets($input);
        return response()->json(['success' => true, 'data' => $data], 200);

    }

    public function getLocationValues(Request $request)
    {
        $input = $request->only(
            'city'
        );

        $data = $this->_repository->getLocationValues($input);
        return response()->json(['success' => true, 'data' => $data], 200);

    }



    
}
