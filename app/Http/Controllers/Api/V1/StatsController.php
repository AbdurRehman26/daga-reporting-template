<?php

namespace App\Http\Controllers\Api\V1;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Data\Repositories\FormRepository;
use Maatwebsite\Excel\Facades\Excel;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\Exportable;
use Maatwebsite\Excel\Concerns\WithHeadings;

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
            'total_sales', 'total_deals', 'total_teams' , 'city', 'team',
            'activity', 'created_at'
        );

        $data = $this->_repository->getTotalByCriteria($input);
        return response()->json(['success' => true, 'data' => $data], 200);
    }   

    public function getBrandUsage(Request $request)
    {

    	$input = $request->only(
            'total_interceptions', 'total_wet_sampling', 'created_at',
            'total_sales', 'total_deals', 'total_teams' , 'city', 'team',
            'activity', 'created_at'
        );

    	$data = $this->_repository->getBrandUsage($input);
    	return response()->json(['success' => true, 'data' => $data], 200);
    }	


    public function getTeamMembers()
    {
        $data = \App\Data\Models\TeamMember::all();
        return response()->json(['success' => true, 'data' => $data], 200);

    }


    public function dailyTargets(Request $request)
    {
        $input = $request->only(
            'quantity', 'total_sampling_quantity', 'interceptions',
            'activity', 'created_at'
        );

        $data = $this->_repository->dailyTargets($input);
        return response()->json(['success' => true, 'data' => $data], 200);

    }

    public function getLocationValues(Request $request)
    {
        $input = $request->only(
            'city', 'created_at' , 'ba_id',
            'activity', 'team'
        );

        $data = $this->_repository->getLocationValues($input);
        return response()->json(['success' => true, 'data' => $data], 200);

    }


    public function downloadSummary(Request $request)
    {
        $input = $request->only(
            'total_interceptions', 'total_wet_sampling', 'created_at',
            'total_sales', 'total_deals', 'total_teams' , 'city', 'team',
            'activity'
        );

        $data = $this->_repository->getTotalByCriteria($input);
        
        unset($data['conversion_value'] , $data['conversion']);

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
            'Total No Response',
            'Total Sales',
            'Total Interceptions',
            'Total Wet Sampling',
            'Total Deals',
            'Total Teams',
        ];
    }

}
