var CACHE_NAME = 'rest-site-cache-v1';
var urlsToCache = [
    '/',
    '/img',
    '/js',
    '/css'
];

self.addEventListener('install', function (event) {
    // Perform install steps
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function (cache) {
                console.log('Opened cache');
                return cache.addAll(urlsToCache);
            })
    );
});
