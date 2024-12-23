<?php

namespace App\Filament\Resources;

use App\Filament\Resources\MessageResource\Pages;
use App\Filament\Resources\MessageResource\RelationManagers;
use App\Models\Message;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Filament\Tables\Columns\IconColumn;
use Filament\Tables\Columns\Layout\Split;
use Filament\Tables\Columns\Layout\Stack;
use Filament\Tables\Actions\DeleteAction;
use Filament\Tables\Actions\EditAction;
use Filament\Tables\Actions\DeleteBulkAction;
use Filament\Tables\Filters\Filter;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class MessageResource extends Resource
{
    protected static ?string $model = Message::class;

    protected static ?string $navigationLabel = 'Message';

    protected static ?string $navigationIcon = 'ionicon-mail';

    // protected static ?string $navigationGroup = 'Settings';

    public static function getNavigationBadge(): ?string
    {
        return static::getModel()::where('replied', 0)->count();
    }

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\TextInput::make('full_name')
                    ->label('Full Name')
                    ->disabled(),

                Forms\Components\TextInput::make('phone_number')
                    ->label('Phone Number')
                    ->disabled(),

                Forms\Components\TextInput::make('email')
                    ->label('Email')
                    ->disabled(),

                Forms\Components\TextInput::make('subject')
                    ->label('Subject')
                    ->disabled(),

                Forms\Components\DateTimePicker::make('created_at')
                    ->label('Created date')
                    ->format('Y-m-d H:i')
                    ->disabled(),

                Forms\Components\DateTimePicker::make('updated_at')
                    ->label('Updated date')
                    ->format('Y-m-d H:i')
                    ->disabled(),

                Forms\Components\Textarea::make('message')
                    ->label('Message')
                    ->disabled(),

                Forms\Components\Textarea::make('reply_message')
                    ->label('Reply Message')
                    ->nullable(),

                Forms\Components\Checkbox::make('replied')
                    ->label('Replied')
                    ->disabled()
                    ->default(false),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('full_name')
                    ->label('Full Name')
                    ->searchable(),
                Tables\Columns\TextColumn::make('phone_number')
                    ->label('Phone Number')
                    ->searchable(),
                Tables\Columns\TextColumn::make('email')
                    ->label('Email')
                    ->searchable(),
                Tables\Columns\TextColumn::make('subject')
                    ->label('Subject')
                    ->searchable()
                    ->limit(10)
                    ->wrap(),
                Tables\Columns\TextColumn::make('message')
                    ->label('Message')
                    ->searchable()
                    ->limit(20)
                    ->wrap(),
                Tables\Columns\TextColumn::make('created_at')
                    ->label('Created')
                    ->searchable()
                    ->wrap(),
                Tables\Columns\TextColumn::make('updated_at')
                    ->label('Updated')
                    ->searchable()
                    ->wrap(),
                IconColumn::make('replied')
                    ->label('Replied')
                    ->trueIcon('heroicon-o-check')
                    ->falseIcon('heroicon-o-x-circle')
                    ->sortable(),
                
            ])
            ->filters([
                Tables\Filters\Filter::make('Replied')
                    ->query(fn (Builder $query) => $query->where('replied', true))
                    ->label('Replied'),
                Tables\Filters\Filter::make('Unreplied')
                    ->query(fn (Builder $query) => $query->where('replied', false))
                    ->label('Unreplied'),
            ])
            ->actions([
                Tables\Actions\ActionGroup::make([
                    Tables\Actions\EditAction::make(),
                    Tables\Actions\DeleteAction::make(),
                ]),
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
            'index' => Pages\ListMessages::route('/'),
            // 'create' => Pages\CreateMessage::route('/create'),
            'edit' => Pages\EditMessage::route('/{record}/edit'),
        ];
    }

    public static function canCreate(): bool
    {
        return false;
    }
}
