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

Route::get('/home', 'HomeController@dashboard')->name('home');
Route::get('/', 'HomeController@dashboard')->name('/');
Route::get('/dashboard', 'HomeController@dashboard')->name('dashboard');
Route::get('/agency-panel', 'HomeController@agencyPanel')->name('agency-panel');
Route::get('/agency-panel/attendance', 'HomeController@attendance')->name('attendance');

Route::get('/download', 'Api\V1\ActivityDataController@download')->name('download');
Route::get('/download/agency', 'Api\V1\ActivityDataController@downloadAgency')->name('download.agency');
Route::get('/download/attendance', 'Api\V1\AttendanceController@downloadAttendance')->name('download.attendance');




Route::get('/test', 'Api\V1\StatsController@getTotalRecords');
Route::get('/name', function(){
	dd(bcrypt('admin'));
});

Auth::routes();
