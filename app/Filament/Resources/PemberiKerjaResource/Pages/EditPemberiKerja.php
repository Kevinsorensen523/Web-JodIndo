<?php

namespace App\Filament\Resources\PemberiKerjaResource\Pages;

use App\Filament\Resources\PemberiKerjaResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditPemberiKerja extends EditRecord
{
    protected static string $resource = PemberiKerjaResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
