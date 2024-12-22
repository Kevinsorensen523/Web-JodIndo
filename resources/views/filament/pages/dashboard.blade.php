<x-filament-panels::page>
    <x-slot name="header">
        <h1 class="text-3xl font-semibold text-gray-900">Welcome to the Dashboard</h1>
        <p class="text-gray-500">Here you can manage everything with ease.</p>
    </x-slot>

    <div class="mt-8">
        <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <!-- Custom cards or content here -->
            <div class="p-4 bg-white rounded-lg shadow-lg">
                <h2 class="text-xl font-medium text-gray-800">Statistics</h2>
                <p class="text-gray-600">View the key metrics of your system performance.</p>
            </div>

            <div class="p-4 bg-white rounded-lg shadow-lg">
                <h2 class="text-xl font-medium text-gray-800">Recent Activity</h2>
                <p class="text-gray-600">Keep track of recent user activity.</p>
            </div>

            <div class="p-4 bg-white rounded-lg shadow-lg">
                <h2 class="text-xl font-medium text-gray-800">Notifications</h2>
                <p class="text-gray-600">Stay updated with the latest system notifications.</p>
            </div>
        </div>
    </div>
</x-filament-panels::page>
