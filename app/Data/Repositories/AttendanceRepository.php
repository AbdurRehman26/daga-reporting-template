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
use App\Data\Models\Attendance;
use Illuminate\Support\Facades\Cache;

class AttendanceRepository extends AbstractRepository implements RepositoryContract
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
    protected $_cacheKey = 'Attendance-';
    protected $_cacheTotalKey = 'total-Attendances-';

    public function __construct(Attendance $model)
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

          $data = parent::findById($id, $refresh, $details, $encode);

          try {
              
              $data->date = Carbon::parse($data->date)->format('dd/mm/yyyy');


          } catch (Exception $e) {
              
          }


          return $data;

      }

      public function findByAll($pagination = false, $perPage = 10, array $input = [] ) {

          $this->builder = $this->model->orderBy('id' , 'desc');

          $data = parent::findByAll($pagination, $perPage,$input);


          return $data;
      }



  }