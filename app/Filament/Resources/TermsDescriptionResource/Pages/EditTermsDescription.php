<?php

namespace App\Filament\Resources\TermsDescriptionResource\Pages;

use App\Filament\Resources\TermsDescriptionResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditTermsDescription extends EditRecord
{
    protected static string $resource = TermsDescriptionResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
