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

        if(!empty($input['total_interceptions'])){
            $data['total_interceptions'] = $this->builder->count();
        }
        
        if(!empty($input['total_wet_sampling'])){
            $data['total_wet_sampling'] = $this->builder->sum('tarang_sampling_quantity');
        }

        if(!empty($input['total_sales'])){
            $data['total_sales'] = $this->builder->where('sale' , '=' , 'Yes')->count();
        }

        if(!empty($input['total_deals'])){
            $data['total_deals'] = $this->builder->sum('quantity');
        }

        if(!empty($input['total_teams'])){
            $data['total_teams'] = 6;//$this->builder->groupBy('ba_id')->count();
        }

        return $data;
        
    }

}