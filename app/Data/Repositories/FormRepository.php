<?php
/**
 * Created by PhpStorm.
 * User: Kazmi
 * Date: 2/19/2018
 * Time: 12:55 PM
 */

namespace App\Data\Repositories;


use Carbon\Carbon;
use Kazmi\Data\Contracts\RepositoryContract;
use Kazmi\Data\Repositories\AbstractRepository;
use App\Data\Models\Form;
use Illuminate\Support\Facades\Cache;

class FormRepository extends AbstractRepository implements RepositoryContract
{
    public $model;
    CONST PAGINATION = true , PER_PAGE = 10;

    /**
     *
     * This is the prefix of the cache key to which the
     * Category data will be stored
     *
     * Example: category-1
     *
     * @var string
     * @access protected
     *
     **/
    protected $_cacheKey = 'form-';
    protected $_cacheTotalKey = 'total-forms-';

    public function __construct(Form $model)
    {
        $this->model = $model;
        $this->builder = $model;
    }

    public function getTotalByCriteria($input)
    {
        $data = [];

        $this->builder = $this->model;

        if(!empty($input['team'])){
            $teamMembers = \App\Data\Models\TeamMember::where('team' , $input['team'])->pluck('name')->toArray();

            $this->builder = $this->builder->whereIn('ba_id', $teamMembers);


        }   

        if(!empty($input['city'])){

            $teamMembers = \App\Data\Models\TeamMember::where('city' , $input['city'])->pluck('name')->toArray();

            $this->builder = $this->builder->whereIn('ba_id', $teamMembers);


        }



        if(!empty($input['created_at'])){

            $created_at = Carbon::parse($input['created_at'])->toDateTimeString();    
            
            $this->builder = $this->builder->where('created_at' , $created_at);

        }


        if(empty($input['created_at'])){
            if($input['activity'] == 'activity_1-'){

                $created_at = Carbon::parse('28-10-2018')->toDateTimeString();    

                $this->builder = $this->builder->where('created_at' , '<' , $created_at);
            }else{

                $created_at = Carbon::parse('28-10-2018')->toDateTimeString();    

                $this->builder = $this->builder->whereBetween('created_at' , [ $created_at , Carbon::now()->toDateTimeString()]);

            }

        }

        $data['total_interceptions'] = $this->builder->count();
        
        $data['total_wet_sampling'] = $this->builder->sum('tarang_sampling_quantity');;


        $data['total_deals'] = $this->builder->sum('quantity');

        $data['total_teams'] = \App\Data\Models\Team::count();//

        $data['total_no_response'] = $this->builder->where('no_response' , '=' ,  1)->count();//;
        

        $data['total_sales'] = $this->builder->where('sale' , '=' , 'Yes')->count();


        return $data;

    }



    public function getBrandUsage($input)
    {
        $data = [];

        $this->builder = $this->model;

        if(!empty($input['created_at'])){

            $created_at = Carbon::parse($input['created_at'])->toDateTimeString();    

            $this->builder = $this->builder->where('created_at' , $created_at);

        }

        if(!empty($input['team'])){
            $teamMembers = \App\Data\Models\TeamMember::where('team' , $input['team'])->pluck('name')->toArray();

            $this->builder = $this->builder->whereIn('ba_id', $teamMembers);


        }



        if(!empty($input['city'])){

            $teamMembers = \App\Data\Models\TeamMember::where('city' , $input['city'])->pluck('name')->toArray();

            $this->builder = $this->builder->whereIn('ba_id', $teamMembers);


        }


        if(empty($input['created_at'])){

            if($input['activity'] == 'activity_1-'){

                $created_at = Carbon::parse('28-10-2018')->toDateTimeString();    

                $this->builder = $this->builder->whereBetween('created_at' , [ $created_at , Carbon::now()->toDateTimeString()]);
            }else{

                $created_at = Carbon::parse('28-10-2018')->toDateTimeString();    

                $this->builder = $this->builder->whereBetween('created_at' , [ $created_at , Carbon::now()->toDateTimeString()]);

            }

        }



        $data = $this->builder->where('previous_usage' , '<>' , "")->where('previous_usage' , '<>', 'none')->
        groupBy('previous_usage')->select('previous_usage' , \DB::raw('count(id) as count'))->get();

        return $data;

    }


    public function dailyTargets($input)
    {
        $data = [];

        $this->builder = $this->model;




        if($input['activity'] == 'activity_1-'){

            $created_at = Carbon::parse('28-10-2018')->toDateTimeString();    

            $this->builder = $this->builder->whereBetween('created_at' , [ $created_at , Carbon::now()->toDateTimeString()]);
        }else{

            $created_at = Carbon::parse('28-10-2018')->toDateTimeString();    

            $this->builder = $this->builder->whereBetween('created_at' , [ $created_at , Carbon::now()->toDateTimeString()]);

        }







        if(!empty($input['quantity'])){

            $data = $this->builder->groupBy('created_at_date')->select(\DB::raw('date(created_at) as created_at_date') , \DB::raw('sum(quantity) as count'))->get()->toArray();
        }

        if(!empty($input['total_sampling_quantity'])){

            $data = $this->builder->groupBy('created_at_date')->select(\DB::raw('date(created_at) as created_at_date') , \DB::raw('sum(tarang_sampling_quantity) as count'))->get()->toArray();
        }

        if(!empty($input['interceptions'])){

            $data = $this->builder->groupBy('created_at_date')->select(\DB::raw('date(created_at) as created_at_date') , \DB::raw('count(id) as count'))->get()->toArray();
        }

        return $data;

    }

    public function getLocationValues($input)
    {
        $this->builder = $this->model;
        $data = [];

        if(!empty($input['city'])){

            $this->builder = $this->builder->join('team_members', function($query){
                $query->on('team_members.name' , 'forms.ba_id');
            })->where('team_members.city' , $input['city'])
            ->where('forms.location' , '<>' , '');

        }

        if(!empty($input['ba_id'])){

            $this->builder = $this->builder->where('forms.ba_id' ,  $input['ba_id']);

        }



        if(empty($input['created_at'])){

            if($input['activity'] == 'activity_1-'){

                $created_at = Carbon::parse('28-10-2018')->toDateTimeString();    

                $this->builder = $this->builder->whereBetween('created_at' , [ $created_at , Carbon::now()->toDateTimeString()]);
            }else{

                $created_at = Carbon::parse('28-10-2018')->toDateTimeString();    

                $this->builder = $this->builder->whereBetween('created_at' , [ $created_at , Carbon::now()->toDateTimeString()]);

            }

        }




        $data = $this->builder->select('forms.location')->get()->toArray();

        return $data;

    }


}