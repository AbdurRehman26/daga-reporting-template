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


    public function getTotal($input)
    {
        $data = [];


        $total_interception = $this->model->count();
        $total_cnic = $this->model->count('cnic');
        $total_contacts = $this->model->count('customer_number');
        $total_sales = $this->model->where('sale' , 'yes')->count();
        $total_lep = $this->model->count('lep');
        $total_lepp = $this->model->count('lepp');
        $total_tin_pack = $this->model->count('tin_pack');
        $total_did_not_buy = $this->model->count('did_not_buy');;

        $data ['total_interception'] = $total_interception;
        $data ['total_cnic'] = $total_cnic;
        $data ['total_contacts'] = $total_contacts;
        $data ['total_sales'] = $total_sales;
        $data ['total_lep'] = $total_lep;
        $data ['total_lepp'] = $total_lepp;
        $data ['total_tin_pack'] = $total_tin_pack;
        $data ['total_did_not_buy'] = $total_did_not_buy;

        return $data;
    }


    public function getChartsData($input)
    {


    }


}