<?php

namespace App\Filament\Resources;

use App\Filament\Resources\PrivacyResource\Pages;
use App\Filament\Resources\PrivacyResource\RelationManagers;
use App\Models\Privacy;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class PrivacyResource extends Resource
{
    protected static ?string $model = Privacy::class;

    protected static ?string $navigationLabel = 'Privacy';

    protected static ?string $navigationIcon = 'mdi-lock';

    protected static ?string $navigationGroup = 'Terms & Privacy';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Textarea::make('content')
                    ->label('Content')
                    ->required(),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('content')
                    ->label('Content')
                    ->wrap()
                    ->searchable(),
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
                Tables\Actions\DeleteAction::make()
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
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
            'index' => Pages\ListPrivacies::route('/'),
            'create' => Pages\CreatePrivacy::route('/create'),
            'edit' => Pages\EditPrivacy::route('/{record}/edit'),
        ];
    }
}
