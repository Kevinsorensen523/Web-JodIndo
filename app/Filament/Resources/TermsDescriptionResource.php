<?php

namespace App\Filament\Resources;

use App\Filament\Resources\TermsDescriptionResource\Pages;
use App\Models\TermDescription;
use Filament\Forms;
use Filament\Forms\Components\Checkbox;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\Textarea;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Columns\BooleanColumn;
use Filament\Tables\Columns\TextColumn;

class TermsDescriptionResource extends Resource
{
    protected static ?string $model = TermDescription::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    public static function form(Forms\Form $form): Forms\Form
    {
        return $form
            ->schema([
                Textarea::make('description')
                    ->label('Description')
                    ->required()
                    ->rows(5),

                Select::make('position')
                    ->label('Position')
                    ->options([
                        'top' => 'Top',
                        'bottom' => 'Bottom',
                    ])
                    ->required(),

                Checkbox::make('bold')
                    ->label('Bold'),
            ]);
    }

    public static function table(Tables\Table $table): Tables\Table
    {
        return $table
            ->columns([
                TextColumn::make('description')
                    ->label('Description')
                    ->limit(50) // Batasi tampilan deskripsi hingga 50 karakter
                    ->sortable()
                    ->searchable(),

                TextColumn::make('position')
                    ->label('Position')
                    ->sortable()
                    ->searchable(),

                BooleanColumn::make('bold')
                    ->label('Bold'),
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\DeleteBulkAction::make(),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListTermsDescriptions::route('/'),
            'create' => Pages\CreateTermsDescription::route('/create'),
            'edit' => Pages\EditTermsDescription::route('/{record}/edit'),
        ];
    }
}
