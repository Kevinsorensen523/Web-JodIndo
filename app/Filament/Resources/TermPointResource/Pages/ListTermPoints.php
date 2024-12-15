<?php

namespace App\Filament\Resources\TermPointResource\Pages;

use App\Filament\Resources\TermPointResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListTermPoints extends ListRecords
{
    protected static string $resource = TermPointResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
