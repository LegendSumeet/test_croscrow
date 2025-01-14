'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "034dbb84582b86cf20b69893e8b5f225",
"assets/AssetManifest.bin.json": "788efc0711faad824adfb455c4d43b8c",
"assets/AssetManifest.json": "3a87159d7eca784cc56f306909bf8608",
"assets/assets/audios/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/fonts/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/fonts/HelveticaNeueLight.otf": "bfbaeacd0e20bdc3d9bb57e417b5e693",
"assets/assets/fonts/icomoon.ttf": "b4a67b9ce89e9c5ea461b405071f46b1",
"assets/assets/fonts/Mukta-Regular.ttf": "20172687cfdfab812d98a4e0e071081c",
"assets/assets/fonts/Nunito-Medium.ttf": "108670f0b05efd5a10ca1afce69e28a3",
"assets/assets/fonts/Roboto-Regular.ttf": "8a36205bd9b83e03af0591a004bc97f4",
"assets/assets/images/adaptive_foreground_icon.png": "e797e5eccb441b4685f3597d26cffa34",
"assets/assets/images/air-jordan-xxxvi-low-mens-basketball-shoes-LgcvQl.png.jpeg": "018785d9ca5f299c2d5f8b3005954e5a",
"assets/assets/images/app_launcher_icon.jpg": "547a82d85307b465ae4b871caa4e5cbd",
"assets/assets/images/b23e0ab6-244a-4751-8982-8b5f50a1d67c.jpg": "f3697c3080ab2d43a4e869cfe4493526",
"assets/assets/images/Black_Yellow_Modern_Classy_Fashion_Marketing_Presentation_(1).png": "afb8bf419a6460167bd4b68ece9c5c57",
"assets/assets/images/CROSCROW.png": "60b9e5e5dbcf596d3296e5e2288f48d4",
"assets/assets/images/CROSCROW_(1).png": "ffc20c008d2eac15439ac4d401d411cc",
"assets/assets/images/CROSCROW_(2).png": "fb5aa3e18d29788fa6e56048303f3c5b",
"assets/assets/images/CROSCROW_(26).png": "1266863647cce2ef05431f0639eb8c03",
"assets/assets/images/CROSCROW_(3).png": "5ab31c5e2d48dbaa246e9b41da0497f1",
"assets/assets/images/CROSCROW_(4).png": "fc29f11dd4b5b8e169aae22a90fea492",
"assets/assets/images/croscrow_Black_PNG-05.png": "c3c654a9d18722ee074c7b0e7cdd2fd7",
"assets/assets/images/croscrow_Black_SVG-05.svg": "bc694b4e1a75d023a83fa23de19c566c",
"assets/assets/images/error_image.jpg": "547a82d85307b465ae4b871caa4e5cbd",
"assets/assets/images/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/images/FOR_SHIKSHA_(1).jpg": "547a82d85307b465ae4b871caa4e5cbd",
"assets/assets/images/IMG_1177.jpg": "25dc1b98e6d3ec87c5fa15426b3d23f5",
"assets/assets/images/IMG_1178.jpg": "5ced5b5c5e592ea26112edbe554cbb4d",
"assets/assets/images/IMG_1193.jpg": "024a217251cc66e35577c12f664b5521",
"assets/assets/images/IMG_1194.jpg": "fd599388372036e9c656ae69af9d7829",
"assets/assets/images/istockphoto-1309772717-612x612.jpg": "01121e25e28cc622ae1f65524e04db3a",
"assets/assets/images/Red_Orange_Black_Modern_Typography_Beatitudes_Sermon_Church_Presentation_(1).png": "0c7c5ba08a330b29b651fbcdb14397b9",
"assets/assets/images/size-chart-for-pants_2048x2048.webp": "47149e557403b3f088cd3d2b1adf65b0",
"assets/assets/images/Untitled_(Instagram_Post)_(11).png": "5c8f2533c2d696f2256a64d681301f87",
"assets/assets/images/Untitled_(Instagram_Post)_(12).png": "f9c7296862b7bd30bb2bf1b5b3593e61",
"assets/assets/images/Untitled_(Instagram_Post)_(8).png": "253c29a2ada695776bd3269b694cb22f",
"assets/assets/images/Untitled_(Instagram_Post)_(9).png": "65ff8ade18660760b84110385ebd991e",
"assets/assets/images/Untitled_design.jpg": "16a84ea40a82a69e94baa0b4af0d4002",
"assets/assets/images/Untitled_design_(2)_(2).png": "b5792ce465c2e1107f5468afaca8b6f5",
"assets/assets/images/Untitled_design_(23).png": "a2a6435aced5be48fd2fcedc2124f9c5",
"assets/assets/images/Untitled_design_(24).png": "c0933ea3ac97ff220e365c5dd03ed2dd",
"assets/assets/images/Untitled_design_(29).png": "18ad46b0d7eefb830cd0357a09dc1794",
"assets/assets/images/Untitled_design_(3).png": "59ecc0e5a451b4815ea47ff3a04e34d9",
"assets/assets/images/Untitled_design_(34).png": "1d9cf36c1b97b039672b9ad71249cbe7",
"assets/assets/images/Untitled_design_(35).png": "e797e5eccb441b4685f3597d26cffa34",
"assets/assets/images/Untitled_design_(4).png": "0672dab24b4ddcf3905fa97a050526aa",
"assets/assets/images/Untitled_design_(42).png": "fd8c76f9d704e793fee850b660ba4a12",
"assets/assets/images/Untitled_design_(44).png": "b42304f5f9d043dad4a14188785636d4",
"assets/assets/images/Untitled_design_(5).png": "921b50a440c2e043cc23ca13186c7e13",
"assets/assets/images/Untitled_design_(6).png": "05e9c197a24b5574669aba4e93014534",
"assets/assets/images/Untitled_design_(9).png": "19941fb679de3a556326c3995cefdcb1",
"assets/assets/images/vector-illustration-raven-standing-on-600nw-2464833317.webp": "4590c51d8af9e8148a698b0ae9c2295d",
"assets/assets/images/White_and_Blue_Retro_Gen_Z_Cute_Kpop_Idol_Game_Night_Presentation_(1).png": "c1816daa0df6b587a532b7cf66d9289e",
"assets/assets/jsons/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/pdfs/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/rive_animations/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/videos/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/FontManifest.json": "8c532244d9f8c3cd27a923690953fb62",
"assets/fonts/MaterialIcons-Regular.otf": "405dd92c1b0f87d8117382bc0bc19ed5",
"assets/NOTICES": "7fe0396fc57682de849666fc1a3b36b2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "c51c58455afba997eb4bd92393d3ad3e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "34729ac330bfa9d17c3a59b2cba2f875",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "2704101cb06ce66e2000356a312be25c",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "b7e5d0b4dbd01812c7bd279bcc8f59bc",
"FOR_SHIKSHA_(1).jpg": "547a82d85307b465ae4b871caa4e5cbd",
"icons/app_launcher_icon.jpg": "547a82d85307b465ae4b871caa4e5cbd",
"icons/error_image.jpg": "547a82d85307b465ae4b871caa4e5cbd",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "7b0928caf791b237fc218c0206f69d07",
"/": "7b0928caf791b237fc218c0206f69d07",
"main.dart.js": "9b6944da6a9cf289cdf20493b2cd85b0",
"src/razorpay_checkout.js": "5b76b8e1a23c8b4f3abd737e82cb02db",
"Untitled_design_(35).png": "e797e5eccb441b4685f3597d26cffa34",
"version.json": "37d7c9b809dfa2047eef422853f19584"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
