<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Opinion extends Model
{
    use HasFactory;

    /**
    * The attributes that should be hidden for serialization.
    *
    * @var list<string>
    */
    protected $hidden = [
       'created_at',
       'updated_at',
       'pivot',
   ];

     /**
     * Get all of the Users for the Role
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongToMany
     */
    public function users(): BelongsToMany
    {
        return $this->belongsToMany(User::class);
    }
}
