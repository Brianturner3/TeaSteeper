var cacheName = 'v1';
var cacheFiles = [
	'./',
	'/index.html',
	'/scripts/app.js',
	'/styling/index.css',
	'https://fonts.googleapis.com/css?family=Lato'
]

self.addEventListener('install', function(e) {
	console.log("[ServiceWorker] Installed");

	e.waitUntil(

		caches.open(cacheName).then(function(cache){
			console.log("[ServiceWorker] Caching cacheFiles");
			return cache.addAll(cacheFiles);
		})
	);
});

self.addEventListener('activate', function(e) {
	console.log("[ServiceWorker] Activated");
});

self.addEventListener('fetch', function(e){
	console.log("[ServiceWorker Fetching", e.request.url);
});