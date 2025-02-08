<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Brand extends Model
{
    use HasFactory;

    /**
    * Get all of the Cars for the Brand
    *
    * @return \Illuminate\Database\Eloquent\Relations\HasMany
    */
   public function cars(): HasMany
   {
       return $this->hasMany(Car::class);
   }
}
