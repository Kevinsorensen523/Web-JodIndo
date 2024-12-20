<?php

namespace App\Filament\Resources\PemberiKerjaResource\Pages;

use App\Filament\Resources\PemberiKerjaResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListPemberiKerjas extends ListRecords
{
    protected static string $resource = PemberiKerjaResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
