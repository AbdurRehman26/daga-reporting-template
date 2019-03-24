<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/dashboard', 'HomeController@dashboard')->name('dashboard');

Route::get('/download', 'Api\V1\ActivityDataController@download')->name('download');




Route::get('/test', 'Api\V1\StatsController@getTotalRecords');
Route::get('/name', function(){
	dd(bcrypt('admin'));
});

Auth::routes();
