<?php

use App\Http\Controllers\BerandaController;
use Illuminate\Support\Facades\Route;

Route::inertia('/', 'welcome')->name('home');

// beranda
    Route::get('/', [BerandaController::class, 'index'])->name('home');