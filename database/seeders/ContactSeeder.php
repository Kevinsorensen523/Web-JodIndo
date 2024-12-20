<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class ContactSeeder extends Seeder
{
    public function run()
    {
        DB::table('contacts')->insert([
            'name' => 'PT. Jod Teknologi Indonesia',
            'address' => 'Jl. Setia Budi Tengah No.89, RT.1/RW.1, Kuningan, Setia Budi, Kecamatan Setiabudi, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12910',
            'phone' => '+62 851 7998 4245',
            'email' => 'halo@jodapp.com',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);
    }
}
