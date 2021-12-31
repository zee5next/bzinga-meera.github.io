'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "manifest.json": "657b68be10335f008f3fb58efecc44a7",
"main.dart.js": "5e8fbf82f33016bb8ad0daa35dc6af40",
"favicon.ico": "feb95b21e9e3f2fbf3b3a6b3a57d1117",
"assets/AssetManifest.json": "6a27d4af42adb96131699577162954d9",
"assets/assets/video/trailer.mp4": "f41d9f3a3a23668c4502585e92e1e9ef",
"assets/assets/gif/zee5.gif": "5e1585475b86fb7d7bc54d9490f92774",
"assets/assets/images/awards.svg": "e4e9c38177924428aba56ec734251ace",
"assets/assets/images/image8.jpeg": "5c2481f02681f4776c29727ddc446117",
"assets/assets/images/image4.jpeg": "0d3e47184a67e230c1efa2cf57b30019",
"assets/assets/images/bengali.png": "7ece1851ff74117dd316cb7e34ff5eeb",
"assets/assets/images/anupam_kher.png": "ad1ed9bf42627c77a07b681e5299c703",
"assets/assets/images/more.svg": "415da9bc01697924c2e56454f3596c81",
"assets/assets/images/card.svg": "338d636455338194d9fb9c85cc32006c",
"assets/assets/images/download.svg": "539e51abb668e0ddad7e4b101083d793",
"assets/assets/images/image1.jpeg": "3761a3de7b49545317e673e002f16f29",
"assets/assets/images/hindi.png": "ab07bb3c2ed43e5aa7ead3ae7bff964f",
"assets/assets/images/button_group.svg": "ddc18775ada7de40fb686398691bc917",
"assets/assets/images/upi.png": "622b1736b747cf42f66ff299bdf2d00e",
"assets/assets/images/ad.png": "06acef3433bd13dfb2f456361545b98a",
"assets/assets/images/image14.jpeg": "64237e912a00ada585103b49f8196eb4",
"assets/assets/images/image2.jpeg": "1c33069d4ad19156036d7c969b0a002c",
"assets/assets/images/image11.jpeg": "af1d06cbddd6e856ae4497ec89e2af1f",
"assets/assets/images/grid.svg": "21bc55efc43c47ee3fd1a7020889ca2a",
"assets/assets/images/wallet.svg": "fbc69abbcece0116d7e2728e50ee8d6e",
"assets/assets/images/background.png": "aebeb9872933b3292247226b0da319ef",
"assets/assets/images/plan_bg.png": "02df480ef2e4ca0785378e3126e75237",
"assets/assets/images/add.svg": "91b0a166dede10beaed2abb15550f7df",
"assets/assets/images/tamil.png": "f6acaba1fedfac4bf5a488a638098e83",
"assets/assets/images/image13.jpeg": "8a2885eca5ed7cf6ba8269f3c325520c",
"assets/assets/images/border_gradient.png": "7672099240b46484ea1ad0f7a38e9a93",
"assets/assets/images/telegu.png": "a8bd65b620c0df29a5ee2e65bcb74d32",
"assets/assets/images/truecaller.png": "41d18968bb374c3c9e5ca24ab970bd91",
"assets/assets/images/image9.jpeg": "c33dae75f99eb4674f4947e2b68b3c06",
"assets/assets/images/malayalam.png": "83774d6af79eb57638e00f073d72d9ea",
"assets/assets/images/zee5_logo.svg": "afeeb12999f2f784e415965524313b0e",
"assets/assets/images/mute.svg": "d73f61e77f087fbecdbeeab7942b7fd8",
"assets/assets/images/user.svg": "53f2438fb939224d84125dbeb9fe07ab",
"assets/assets/images/ad_text.svg": "d58cbf925a191d67511f942037e1abb5",
"assets/assets/images/cast3.png": "7d7fb23f7903ed2d8abf01ab31125260",
"assets/assets/images/image3.jpeg": "6f0ad6f6d6c8bf65302941bda2c6fc55",
"assets/assets/images/image12.jpeg": "1341951e9fb89bdbcc964f35fddec4b8",
"assets/assets/images/dev.png": "1326f640f002fa707ce58647f57dfb7d",
"assets/assets/images/nazanin.png": "91cd514b936fae52145a15607a97cc09",
"assets/assets/images/image5.jpeg": "f2574625d76b1092d12d269112a656e4",
"assets/assets/images/image7.jpeg": "c82424421f2a0d2bd7b6971503e375fb",
"assets/assets/images/share.svg": "7c15068f8ef2091cd6404de1765cb2e7",
"assets/assets/images/image6.jpeg": "6090cc40b005a9b2e6d33f5cadd0f40a",
"assets/assets/images/image10.jpeg": "94d2fbb13c776935fd0d8efc2a90ae9d",
"assets/assets/images/cast1_movies.png": "71fbaa44f536a286335082c34831892b",
"assets/assets/images/kannada.png": "c1c567857a19a36291cf52593288a0d8",
"assets/assets/images/warning.svg": "d075a49ed00df17748e0ad8c072282d9",
"assets/assets/images/white_star.svg": "56c43264466c3508c99c356704c8dfec",
"assets/assets/images/cast2.png": "95c8e7397406a7763a946c6e40482f58",
"assets/assets/images/watch_now.svg": "4fd7caba04e87831d3dd0fc2e86aaf2b",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/NOTICES": "3f2499aba812a0ec006c27cb49778a27",
"version.json": "af2610e5f190b5ca4879d39cc45773a2",
"index.html": "b7d99d52d9ddebc57216697f62ed5fe0",
"/": "b7d99d52d9ddebc57216697f62ed5fe0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
