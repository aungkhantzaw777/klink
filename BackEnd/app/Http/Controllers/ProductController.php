<?php

namespace App\Http\Controllers;

use App\Http\Resources\ProductResource;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;

class ProductController extends Controller
{
    protected function checkValidate($request)
    {
        return Validator::make(
            $request->all(),
            [
                'name' => 'required',
                'price' => 'required|integer',
                'category_id' => 'required'
            ]
        );
    }
    public function index()
    {
        $products = ProductResource::collection(Product::all());
        return $products;
    }
    public function show(Product $product)
    {
        return $product;
    }
    public function store(Request $request)
    {
        $checkProduct = $this->checkValidate($request);
        if ($checkProduct->fails()) {
            return response()->json([
                'status' => false,
                'message' => 'Validate Error',
                'errors' => $checkProduct->errors()
            ], 400);
        }
        $uploadedFile = $request->file('image');
        $filename = time() . $uploadedFile->getClientOriginalName();

        Storage::disk('public')->putFileAs(
            'files/',
            $uploadedFile,
            $filename
        );
        $product = Product::create([
            'name' => $request->name,
            'price' => $request->price,
            'category_id' => $request->category_id,
            'image' => $filename
        ]);
        return response()->json($product, 201);
    }
    public function update(Request $request, Product $product)
    {
        $newProduct = $request->all();
        if ($request->file('image')) {
            $uploadedFile = $request->file('image');
            $filename = time() . $uploadedFile->getClientOriginalName();

            Storage::disk('public')->putFileAs(
                'files/' . $filename,
                $uploadedFile,
                $filename
            );
            $newProduct['image'] = $filename;
        }
        
        $product->update($newProduct);
        return response()->json($product, 200);
    }
    public function delete(Product $product)
    {
        $product->delete();
        return response()->json(null, 204);
    }
}
