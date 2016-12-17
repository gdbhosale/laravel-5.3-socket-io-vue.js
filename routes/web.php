<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| This file is where you may define all of the routes that are handled
| by your application. Just tell Laravel the URIs it should respond
| to using a Closure or controller method. Build something great!
|
*/

use Illuminate\Support\Facades\Redis;
use Illuminate\Support\Facades\Broadcast;

Route::get('/', function () {
    // broadcast(new App\Events\UserSignedUp('GaneshBhosale'));
    event(new App\Events\UserSignedUp('GaneshBhosale'));
    // $data = [
    //     'event' => 'UserSignedUp',
    //     'data' => [
    //         'username' => 'JohnDoe'
    //     ]
    // ];
    // Redis::publish('test-channel', json_encode($data));

    return view('welcome');
});

/*
Route::get('/redis', function () {
    Redis::set('name', 'GaneshB');

    return Redis::get('name');
});
*/