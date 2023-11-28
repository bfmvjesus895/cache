const staticOnepice = "dev-onepiece-site-v1"

const assets = [
    "/",
    "/index.html",
    "/css/styles.css",
    "/js/app.js",
    "/images/onepiece1.jpg",
    "/images/onepiece2.jpg",
    "/images/onepiece3.jpg",
    "/images/onepiece4.jpg",
    "/images/onepiece5.jpg",
    "/images/onepiece6.jpg",
]

self.addEventListener("install", installEvent => {
    installEvent.waitUntil(
        caches.open(staticOnepice).then(cache => {
            cache.addAll(assets);
        })
    )
})

self.addEventListener("fetch", fetchEvent =>{
    fetchEvent.respondWith(
        caches.match(fetchEvent.request)
        .then(res => {
            return res || fetch(fetchEvent.request)
        })
    )
})

