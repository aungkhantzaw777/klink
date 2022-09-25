<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ProductController extends Controller
{
    protected function checkValidate($request) {
        return Validator::make(
            $request->all(),
            [
                'name' => 'required',
                'price' => 'required|number',
                'category_id' => 'required'
            ]
        );
    }
    public function index() {
        return Product::all();
    }
    public function show(Product $product) {
        return $product;
    }
    public function store(Request $request) {
        $checkProduct = $this->checkValidate($request);
        if($checkProduct->fails()){
            return response()->json([
                'status' => false,
                'message' => 'Validate Error',
                'errors' => $checkProduct->errors()
            ], 400);
        }
        Product::create([
            'name' => $request->name,
            'price' => $request->price,
            'category_id' => $request->category_id,
            'image' => 'https://picsum.photos/seed/picsum/200/300'
        ]);
    }
    public function udpate(Request $request, Product $product) {
        $checkProduct = $this->checkValidate($request);
        if($checkProduct->fails()){
            return response()->json([
                'status' => false,
                'message' => 'Validate Error',
                'errors' => $checkProduct->errors()
            ], 400);
        }
        $product::udpate([
            'name' => $request->name,
            'price' => $request->price,
            'category_id' => $request->category_id,
            'image' => $request->image
        ]);
        return response()->json($product, 200);
    }
    public function delete(Product $product) {
        $product->delete();
        return response()->json(null, 204);
    }
}
