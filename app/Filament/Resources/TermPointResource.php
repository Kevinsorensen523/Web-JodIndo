<?php

namespace App\Filament\Resources;

use App\Filament\Resources\TermPointResource\Pages;
use App\Filament\Resources\TermPointResource\RelationManagers;
use App\Models\TermPoint;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\Textarea;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class TermPointResource extends Resource
{
    protected static ?string $model = TermPoint::class;

    protected static ?string $navigationIcon = 'zondicon-list';

    protected static ?string $navigationLabel = 'Privacy Term List';

    protected static ?string $navigationGroup = 'Terms';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Select::make('term_id')
                    ->relationship('term', 'title')
                    ->required(),
                    Textarea::make('content')->required()
                ]);
            }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('term.title')->label('Term'),
                TextColumn::make('content')->limit(50),
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
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
            'index' => Pages\ListTermPoints::route('/'),
            'create' => Pages\CreateTermPoint::route('/create'),
            'edit' => Pages\EditTermPoint::route('/{record}/edit'),
        ];
    }
}
