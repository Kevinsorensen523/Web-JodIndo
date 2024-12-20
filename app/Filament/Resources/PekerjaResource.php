<?php

namespace App\Filament\Resources;

use App\Filament\Resources\PekerjaResource\Pages;
use App\Filament\Resources\PekerjaResource\RelationManagers;
use App\Models\Pekerja;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Filament\Tables\Actions\DeleteAction;
use Filament\Tables\Actions\EditAction;
use Filament\Tables\Actions\DeleteBulkAction;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class PekerjaResource extends Resource
{
    protected static ?string $model = Pekerja::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    // Form schema for Add and Edit pages
    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\TextInput::make('title')
                    ->label('Title')
                    ->required(),

                Forms\Components\TextInput::make('description')
                    ->label('Description')
                    ->required()
                    ->maxLength(500),

                Forms\Components\FileUpload::make('imageUrl')
                    ->label('Image')
                    ->image()
                    ->disk('public')
                    ->required(),
            ]);
    }

    // Table schema for Index page
    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\ImageColumn::make('imageUrl')
                    ->label('Image')
                    ->height(50)
                    ->width(50)
                    ->getStateUsing(function ($record) {
                        return asset('storage/' . $record->imageUrl);
                    }),

                Tables\Columns\TextColumn::make('title')
                    ->label('Title')
                    ->searchable(),

                Tables\Columns\TextColumn::make('description')
                    ->label('Description')
                    ->searchable(),
            ])
            ->filters([
                // Filters can be added here
            ])
            ->actions([
                EditAction::make(),
                DeleteAction::make(), // To enable individual record deletion
            ])
            ->bulkActions([
                DeleteBulkAction::make(), // Bulk delete action
            ]);
    }

    // Relations (if any, can be added here)
    public static function getRelations(): array
    {
        return [
            // Relation managers go here
        ];
    }

    // Define the pages for this resource (Index, Create, Edit)
    public static function getPages(): array
    {
        return [
            'index' => Pages\ListPekerjas::route('/'),
            'create' => Pages\CreatePekerja::route('/create'),
            'edit' => Pages\EditPekerja::route('/{record}/edit'),
        ];
    }
}
