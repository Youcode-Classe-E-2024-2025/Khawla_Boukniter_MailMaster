<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use PHPUnit\TextUI\XmlConfiguration\CannotFindSchemaException;

class Newsletter extends Model
{
    protected $fillable = [
        'title',
        'content'
    ];

    public function subscribers()
    {
        return $this->hasMany(Subscriber::class);
    }

    public function campaigns()
    {
        return $this->hasMany(Campaign::class);
    }
}
