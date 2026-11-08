/* Life OS service worker: keeps the app working offline. Data lives in IndexedDB and is never touched here. */
const CACHE = "lifeos-e1b54cf6b2";
const SHELL = ["./", "./index.html", "./manifest.webmanifest", "./icons/icon-192.png", "./icons/icon-512.png", "./icons/icon-maskable-512.png", "./icons/apple-touch-icon.png", "./icons/favicon-32.png"];
self.addEventListener("install", e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL))); });
self.addEventListener("activate", e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k.startsWith("lifeos-") && k !== CACHE && k !== "lifeos-fonts" && k !== "lifeos-media").map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener("message", e => { if (e.data === "skipWaiting") self.skipWaiting(); });
self.addEventListener("fetch", e => {
  const req = e.request; if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.hostname === "fonts.googleapis.com" || url.hostname === "fonts.gstatic.com") {   // fonts: cached after first use
    e.respondWith(caches.open("lifeos-fonts").then(c => c.match(req).then(hit => { const net = fetch(req).then(r => { if (r.ok || r.type === "opaque") c.put(req, r.clone()); return r; }).catch(() => hit); return hit || net; })));
    return;
  }
  if (/(^|\.)wp\.com$/.test(url.hostname) && /strengthlog/.test(url.pathname)) {                 // exercise demos: keep after first view
    e.respondWith(caches.open("lifeos-media").then(c => c.match(req).then(hit => hit || fetch(req).then(r => { if (r.ok || r.type === "opaque") c.put(req, r.clone()); return r; }))));
    return;
  }
  if (url.origin !== location.origin) return;                                              // YouTube etc. go straight to the network
  if (req.mode === "navigate") { e.respondWith(caches.match("./index.html").then(hit => hit || fetch(req))); return; }
  e.respondWith(caches.match(req, {ignoreSearch: true}).then(hit => hit || fetch(req)));
});
