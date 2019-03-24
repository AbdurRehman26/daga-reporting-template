<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function dashboard()
    {   
        dd(1);
        return view('dashboard');
    }

    public function teamWise()
    {
        return view('team-wise');
    }
    public function cityWise()
    {
        return view('city-wise');
    }
    public function locationWise()
    {
        return view('location-wise');
    }
}
