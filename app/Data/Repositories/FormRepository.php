<?php
/**
 * Created by PhpStorm.
 * User: Kazmi
 * Date: 2/19/2018
 * Time: 12:55 PM
 */

namespace SocialWithin\Data\Repositories;


use Carbon\Carbon;
use Cygnis\Data\Contracts\RepositoryContract;
use Cygnis\Data\Repositories\AbstractRepository;
use SocialWithin\data\models\AdAccount;
use Illuminate\Support\Facades\Cache;

class AdAccountRepository extends AbstractRepository implements RepositoryContract
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
    protected $_cacheKey = 'ad-account-';
    protected $_cacheTotalKey = 'total-ad-accounts-';

    public function __construct(AdAccount $model)
    {
        $this->model = $model;
        $this->builder = $model;
    }

    public function composeInputArray($ad_accounts, $social_account)
    {
        $inputArray = [];
        foreach ($ad_accounts as $key=>$account) {
            $account = (array)$account;
            $account['company_id'] = $social_account->company_id;
            $account['social_account_id'] = $social_account->id;
            $account['created_at'] = Carbon::now()->toDateTimeString();
            $account['updated_at'] = Carbon::now()->toDateTimeString();
            $account['deleted_at'] = null;

            array_push($inputArray , $account);
        }

        return $inputArray ;
    }


    public function findByCriteria($pagination = self::PAGINATION , $per_page = self::PER_PAGE  ,  $criteria)
    {
        $this->builder = $this->model->where($criteria);
        return parent::findByAll($pagination  , $per_page);
    }


    public function findAdAccountWithUserIdAndRole($criteria)
    {
        $this->builder = $this->model->join('ad_account_users', function ($join) {
            $join->on('ad_account_users.ad_account_id', '=', 'ad_accounts.id');
        })->join('social_accounts' , function ($join){
            $join->on('social_accounts.id', '=', 'ad_account_users.social_account_id');
        })
            ->where('ad_account_users.user_id' , $criteria['user_id'])
            ->where('ad_account_users.social_account_id' , $criteria['social_account_id'])
            ->select(['ad_accounts.id' , 'fb_ad_account_status' , 'fb_ad_account_name' , 'fb_ad_account_id'])
            ->groupBY('ad_accounts.id');

        $data = $this->builder->get();

        return $data;

    }


    public function getIdsByCriteria($criteria)
    {
        return $this->model->where($criteria)->get()->pluck('id');
    }

    public function saveSelectedItems($input){
        $input['id'] = $input['ad_account_id'];
        if($input['remove_saved_campaigns']){
            $input['campaign_ids'] = null;
        }
        $input['selected_campaign_ids'] = !empty($input['campaign_ids'])?implode(',', $input['campaign_ids']):null;
        unset($input['ad_account_id']);
        unset($input['campaign_ids']);
        unset($input['remove_saved_campaigns']);
        parent::update($input);
        Cache::forget($this->_cacheKey.$input['id']);

    }

}