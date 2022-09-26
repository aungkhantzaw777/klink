<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\ProductController;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/auth/register', [AuthController::class, 'createUser']);
Route::post('/auth/login', [AuthController::class, 'loginUser']);

Route::middleware(['auth:sanctum'])->group(function () {
    # category
    Route::get('/categories', [CategoryController::class, 'index']);
    Route::get('/category/{category}', [CategoryController::class, 'show']);
    Route::post('/category', [CategoryController::class, 'store']);
    Route::patch('/category/{category}', [CategoryController::class, 'update']);
    Route::delete('/category/{category}', [CategoryController::class, 'delete']);

    # product
    Route::get('/products', [ProductController::class, 'index']);
    Route::post('/products', [ProductController::class, 'store']);
    Route::post('/products/{product}', [ProductController::class, 'update']);
    Route::delete('/products/{product}', [ProductController::class, 'delete']);
    Route::get('/products/{product}', [ProductController::class, 'show']);

    # order
    Route::get('/orders', [OrderController::class, 'index']);
    Route::get('/order/{order}',[OrderController::class, 'show']);
    Route::post('/orders', [OrderController::class, 'store']);

});

Route::get( '/auth-fail', function () {
    return response()->json([
        'message' => '401 unauthorized!'
    ], 401);
}
)->name('login');