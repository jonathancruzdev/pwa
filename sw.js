self.addEventListener('install', evento => {
    // Abro un cache
    const cache = caches.open('mi-cache-1').then( cache => {
        // Guarda los datos del caché necesario para que la app funciones sin conexión
       return cache.addAll([
        './index.html',
        'https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css',
        './css/style.css', 
        './img/logo.png',
        './img/post.png',
        './img/sw.png',
        './js/app.js'
    ]);
    })
    // Espera hasta que la promesa se resuelva
    evento.waitUntil( cache)
})

self.addEventListener('fetch', evento => {
    const respuestaCache = caches.match( evento.request).then( res => {
        if (res ) {
            return res;
        } else {
            // si no hacemos un fetch
            return fetch(evento.request).then( respuesta => {
                return respuesta;
            })
        }
    })
    evento.respondWith( respuestaCache  )
})

/* self.addEventListener('fetch', evento => {
    const respuestaCache = caches.match( evento.request)
    evento.respondWith( respuestaCache  )
})
 */