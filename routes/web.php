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

Route::get('/', 'HomeController@dashboard')->name('dashboard');

Route::get('/team-wise', 'HomeController@teamWise')->name('team.wise');

Route::get('/city-wise', 'HomeController@cityWise')->name('city.wise');

Route::get('/location-wise', 'HomeController@locationWise')->name('location.wise');

Route::get('/test', 'Api\V1\StatsController@getTotalRecords');
