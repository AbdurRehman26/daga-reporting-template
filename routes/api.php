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

Auth::routes();

Route::get('activity_data/total', 'Api\V1\ActivityDataController@getTotal');
Route::get('activity_data/charts-data', 'Api\V1\ActivityDataController@getChartsData');
Route::resource('activity_data', 'Api\V1\ActivityDataController')->except([
	'edit'
]);

Route::resource('attendance', 'Api\V1\AttendanceController')->except([
	'edit'
]);


Route::resource('team-member', 'Api\V1\TeamMemberController')->except([
	'edit'
]);



