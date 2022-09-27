<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;
    protected $fillable = ['name', 'price', 'image', 'category_id'];

    public function category()
    {
        $this->belongsTo(Category::class);
    }
    public function orders()
    {
        $this->belongsToMany(Order::class, 'orders_products');
    }
    public function ImageUrl()
    {
        return env('APP_URL').'/storage/files/'.$this->image;
    }
}
