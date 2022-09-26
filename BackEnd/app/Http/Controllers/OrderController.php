<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\Product;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    public function index()
    {
        return Order::all();
    }
    public function store(Request $request)
    {
        $newOrder = $request->all(['tax', 'total']);
        $orderProduct = $request->all(['products']);
        $products = json_decode(collect($orderProduct['products']));
        $newOrder['order_code'] = 'O-' . time();
        $newOrder = Order::create($newOrder);

        foreach ($products as $key => $value) {
            
            $newOrder->products()->attach($value->product_id, [
                'subtotal' => $value->subtotal,
                'quantity' => $value->quantity
            ]);
        }
        return response()->json($newOrder, 201);
        
    }
    public function show(Order $order)
    {
        return $order;
    }
}
