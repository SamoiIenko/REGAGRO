<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    protected $fillable = [
        'name_city', 
        'latitude', 
        'longitude', 
        'number_inhabit'
    ];
}
