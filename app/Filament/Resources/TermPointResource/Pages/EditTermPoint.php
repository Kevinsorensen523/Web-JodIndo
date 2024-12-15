<?php

namespace App\Filament\Resources\TermPointResource\Pages;

use App\Filament\Resources\TermPointResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditTermPoint extends EditRecord
{
    protected static string $resource = TermPointResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
