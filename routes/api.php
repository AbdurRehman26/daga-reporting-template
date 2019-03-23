<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
	return $request->user();
});


// Route::group([
//     'middleware' => [
//         'auth:api',
//     ],
//     'as' => 'api.',
//     'namespace' => 'Api\v1'
// ], function($api){

//     /*
//      * Manage Users Routes
//      */
//     $api->post('user/create', ['as' => 'user.create', 'uses' => 'UserController@create']);

// });
Route::get('stats', ['as' => 'stats.interceptions', 'uses' => 'Api\V1\StatsController@getTotalRecords']);

Route::get('stats-brand-usage', ['as' => 'stats.brand.usage', 'uses' => 'Api\V1\StatsController@getBrandUsage']);

Route::get('daily-target', ['as' => 'target.daily', 'uses' => 'Api\V1\StatsController@dailyTargets']);

Route::get('team-member', ['as' => 'team.index', 'uses' => 'Api\V1\StatsController@getTeamMembers']);

Route::get('location-values', ['as' => 'location.values', 'uses' => 'Api\V1\StatsController@getLocationValues']);


Route::resource('activity_data', 'Api\V1\ActivityDataController')->except([
	'edit'
]);

Route::resource('attendance', 'Api\V1\AttendanceController')->except([
	'edit'
]);


