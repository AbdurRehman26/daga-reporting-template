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
use App\Data\Models\ActivityData;
use App\Data\Models\TeamMember;
use Illuminate\Support\Facades\Cache;

class ActivityDataRepository extends AbstractRepository implements RepositoryContract
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
    protected $_cacheKey = 'ActivityData-';
    protected $_cacheTotalKey = 'total-ActivityDatas-';

    public function __construct(ActivityData $model)
    {
      $this->model = $model;
      $this->builder = $model;
    }


        /**
     *
     * This method will fetch single model
     * and will return output back to client as json
     *
     * @access public
     * @return mixed
     *
     * @author Usaama Effendi <usaamaeffendi@gmail.com>
     *
     **/
        public function findById($id, $refresh = false, $details = false, $encode = true) {

          $teams = [
            '1' => 'Karachi',
            '2' => 'Sindh',
            '3' => 'Lahore',
            '4' => 'Punjab',
            '5' => 'Islamabad',
            '6' => 'Peshawar'
          ];

          $data = parent::findById($id, $refresh, $details, $encode);


          try {

            $data->date = Carbon::parse($data->date)->format('d-m-Y');
            $data->time = Carbon::parse($data->time)->format('g:i A');


          } catch (Exception $e) {

          }

          $data->team_id = $data->team_id ? $teams[$data->team_id] : '';

          return $data;

        }


        public function findByAll($pagination = false, $perPage = 10, array $input = [] ) {

          $this->builder = $this->model->orderBy('id' , 'desc');

          $data = parent::findByAll($pagination, $perPage, $input);


          return $data;
        }

        public function getTotal($input)
        {
          $data = [];

          if(empty($input['city_id'])){
            $ba_ids = TeamMember::all()->pluck('id')->toArray();
          }else{
            $ba_ids = TeamMember::where('team_id', $input['city_id'])->pluck('id')->toArray();
          }

          if(!empty($input['start_date'])){
            $input['start_date'] = Date($input['start_date']);
            $input['end_date'] = Date($input['end_date']);
          }else{
            $input['start_date'] = Date('2018-10-28');    
            $input['end_date'] = Date('Y-m-d');

          }


          $input['start_date'] = Carbon::parse($input['start_date'])->toDateTimeString();
          $input['end_date'] = Carbon::parse($input['end_date'])->toDateTimeString();


          $total_interception = $this->model->whereDate('created_at' , '>=' , $input['start_date'])->whereDate('created_at' , '<=' , $input['end_date'])->whereIn('ba_id', $ba_ids)->count();



          $total_cnic = $this->model->whereDate('created_at' , '>=' , $input['start_date'])->whereDate('created_at' , '<=' , $input['end_date'])->whereIn('ba_id', $ba_ids)->whereNotNull('cnic')->count();


          $total_contacts = $this->model->whereDate('created_at' , '>=' , $input['start_date'])->whereDate('created_at' , '<=' , $input['end_date'])->whereIn('ba_id', $ba_ids)->whereNotNull  ('customer_number')->count();


          $total_sales = $this->model->whereDate('created_at' , '>=' , $input['start_date'])->whereDate('created_at' , '<=' , $input['end_date'])->whereIn('ba_id', $ba_ids)->where('sale' , 'yes')->count();


          $total_lep = $this->model->whereDate('created_at' , '>=' , $input['start_date'])->whereDate('created_at' , '<=' , $input['end_date'])->whereIn('ba_id', $ba_ids)->where('lep' , 1)->count();


          $total_lepp = $this->model->whereDate('created_at' , '>=' , $input['start_date'])->whereDate('created_at' , '<=' , $input['end_date'])->whereIn('ba_id', $ba_ids)->where('lepp', 1)->count();


          $total_tin_pack = $this->model->whereDate('created_at' , '>=' , $input['start_date'])->whereDate('created_at' , '<=' , $input['end_date'])->whereIn('ba_id', $ba_ids)->where('tin_pack', 1)->count();


          $total_did_not_buy = $this->model->whereDate('created_at' , '>=' , $input['start_date'])->whereDate('created_at' , '<=' , $input['end_date'])->whereIn('ba_id', $ba_ids)->where('did_not_buy', 1)->count();


          $productive_calls = ($total_lep+$total_lepp+$total_tin_pack);

          $data ['total_interception'] = $total_interception;
          $data ['total_cnic'] = $total_cnic;
          $data ['total_contacts'] = $total_contacts;
          $data ['total_sales'] = $total_sales;
          $data ['total_lep'] = $total_lep;
          $data ['total_lepp'] = $total_lepp;
          $data ['total_tin_pack'] = $total_tin_pack;
          $data ['total_did_not_buy'] = $total_did_not_buy;
          $data ['productive_calls'] = $productive_calls;

          return $data;
        }


        public function getChartsData($input)
        {

          if(empty($input['city_id'])){
            $ba_ids = TeamMember::all()->pluck('id')->toArray();
          }else{
            $ba_ids = TeamMember::where('team_id', $input['city_id'])->pluck('id')->toArray();
          }


          if(!empty($input['start_date'])){
            $input['start_date'] = Date($input['start_date']);
            $input['end_date'] = Date($input['end_date']);
          }else{
            $input['start_date'] = Date('2018-10-28');    
            $input['end_date'] = Date('Y-m-d');

          }



          $builder = $this->model->whereDate('created_at' , '>=' , $input['start_date'])->whereDate('created_at' , '<=' , $input['end_date'])->whereIn('ba_id', $ba_ids)->groupBy('team_id');

          if($input['type'] == 'all'){
           $data = $builder->select('team_id' , \DB::raw('count(id) as count'))->get();
         }


         if($input['type'] == 'lep'){
           $data = $builder->select('team_id' , \DB::raw('sum(lep) as count'))->get();
         }


         if($input['type'] == 'lepp'){
           $data = $builder->select('team_id' , \DB::raw('sum(lepp) as count'))->get();
         }


         if($input['type'] == 'tin_pack'){
           $data = $builder->select('team_id' , \DB::raw('sum(tin_pack) as count'))->get();
         }

         if($input['type'] == 'did_not_buy'){
           $data = $builder->select('team_id' , \DB::raw('sum(did_not_buy) as count'))->get();
         }
         return $data;
       }

       public function uploadFile()
       {


        $teams = [
          'Karachi' => '1',
          'Sindh' => '2',
          'Lahore' => '3',
          'Punjab' => '4',
          'Islamabad' => '5',
          'Peshawar' => '6'
        ];

          // Import CSV to Database
        $filepath = public_path('Final_summaryMay22_2019.csv');

        $file = fopen($filepath,"r");

        $importData_arr = array();
        $i = 0;
        while (($filedata = fgetcsv($file, 10000, ",")) !== FALSE) {
          $num = count($filedata );
             // Skip first row (Remove below comment if you want to skip the first row)
             /*if($i == 0){
                $i++;
                continue; 
              }*/
              for ($c=0; $c < $num; $c++) {
                $importData_arr[$i][] = $filedata [$c];
              }
              $i++;
            }

            array_shift($importData_arr);


            foreach ($importData_arr as $key => $value) {


              try {
                $value[14] = $value[14] ? Carbon::createFromFormat('d-m-y', $value[14])->toDateString() : null;  
              } catch (\Exception $e) {



              if($value[0] == 732){
                $value[14] = Carbon::parse($value[14])->toDateString();
              }

              }
            


              $value[16] = str_replace('-19', '-2019', $value[16]);
              $value[17] = str_replace('-19', '-2019', $value[17]);
              
              $addingData = [
                'team_id' => $teams[$value[1]] ? $teams[$value[1]] : '', 
                'ba_id' => $value[2],
                'customer_name' => $value[3],
                'customer_number' => $value[4],
                'cnic' => $value[5],
                'sale' => $value[6],
                'lep' => $value[7] ? 1 : 0,
                'lepp' => $value[8] ? 1 : 0,
                'tin_pack' => $value[9] ? 1 : 0,
                'did_not_buy' => $value[10] ? 1 : 0,
                'primary' => $value[11],
                'secondary' => $value[12],
                'time' => $value[13] ? Carbon::parse($value[13])->toTimeString() : null,
                'date' => $value[14],
                'location' => $value[15],
                'created_at' => Carbon::parse($value[16])->toDateTimeString(),
                'updated_at' => Carbon::parse($value[17])->toDateTimeString(),
              ];


            
              $this->model->insert($addingData);
            }


            dd(1);
            fclose($file);



          }


        }