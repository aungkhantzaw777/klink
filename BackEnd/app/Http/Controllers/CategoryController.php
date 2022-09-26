<?php

namespace App\Http\Controllers;

use App\Http\Requests\CategoryStoreRequest;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class CategoryController extends Controller
{
    protected function checkValidate($request) {
        return Validator::make(
            $request->all(),
            [
                'name' => 'required',
            ]
        );
    }
    public function index()
    {
        $categories = Category::all();
        return $categories;
    }
    public function show(Category $category)
    {
        return $category;
    }
    public function store(Request $request)
    {

        $validateCategory = $this->checkValidate($request);
        if($validateCategory->fails()){
            return response()->json([
                'status' => false,
                'message' => 'Validate Error',
                'errors' => $validateCategory->errors()
            ], 400);
        }
        $category = Category::create([
            'name' => $request->name
        ]);

        return response()->json($category, 201);
    }
    public function update(Request $request, Category $category) {
        $category->update($request->all());
        return response()->json($category, 200);
    }
    public function delete(Category $category)
    {
        $category->delete();

        return response()->json(null, 204);
    }
}
