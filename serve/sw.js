/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v3.6.3/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v3.6.3"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
<<<<<<< HEAD
    "url": "webpack-runtime-a82b7421efd978fcbadf.js"
=======
    "url": "webpack-runtime-b37db2576c358c783643.js"
>>>>>>> 9c17802cfd0e1babe0cc55c9a231fd22ad17df3c
  },
  {
    "url": "styles.a5e804c39132760c24db.css"
  },
  {
<<<<<<< HEAD
    "url": "styles-e9d24b1846c7d6eb9685.js"
  },
  {
    "url": "framework-45290ac24fe148f39fb6.js"
  },
  {
    "url": "app-ae61bcea752ec3c60aa9.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-0f40d706ebc58d78c1f6.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "5590e95c9ea47941a4da02373b469fa1"
  },
  {
    "url": "polyfill-140e3b63fc9834dd4e0f.js"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "d2c37a9f07361a2a93de4cfee60a5499"
=======
    "url": "styles-503b3015a8b38c118cb7.js"
  },
  {
    "url": "framework-75da9754c2a76bbaf08a.js"
  },
  {
    "url": "app-2887fe3492ef8901c46e.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-5630f817e46fb85ca4b2.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "7f2d9d0243831d4977834d7bf6dcabb8"
  },
  {
    "url": "component---src-pages-404-js-f06ea3e4aaabb257ce0b.js"
  },
  {
    "url": "d5d7a013bc6c1e2b6d7db819052c16d7efea5559-4309b229767aaf446d2d.js"
  },
  {
    "url": "page-data/404.html/page-data.json",
    "revision": "9ea9f7256435a71b83c02506a42fae07"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "2178dddcca467d91f8becf40abcb976f"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "30cf4e08eed49750070f2c4bdaffe797"
>>>>>>> 9c17802cfd0e1babe0cc55c9a231fd22ad17df3c
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/(\.js$|\.css$|static\/)/, workbox.strategies.cacheFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\page-data\/.*\/page-data\.json/, workbox.strategies.networkFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, workbox.strategies.staleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, workbox.strategies.staleWhileRevalidate(), 'GET');

/* global importScripts, workbox, idbKeyval */

importScripts(`idb-keyval-iife.min.js`)
const WHITELIST_KEY = `custom-navigation-whitelist`

const navigationRoute = new workbox.routing.NavigationRoute(({ event }) => {
  const { pathname } = new URL(event.request.url)

  return idbKeyval.get(WHITELIST_KEY).then((customWhitelist = []) => {
    // Respond with the offline shell if we match the custom whitelist
    if (customWhitelist.includes(pathname)) {
      const offlineShell = `/offline-plugin-app-shell-fallback/index.html`
      const cacheName = workbox.core.cacheNames.precache

      return caches.match(offlineShell, { cacheName }).then(cachedResponse => {
        if (cachedResponse) return cachedResponse

        console.error(
          `The offline shell (${offlineShell}) was not found ` +
            `while attempting to serve a response for ${pathname}`
        )

        return fetch(offlineShell).then(response => {
          if (response.ok) {
            return caches.open(cacheName).then(cache =>
              // Clone is needed because put() consumes the response body.
              cache.put(offlineShell, response.clone()).then(() => response)
            )
          } else {
            return fetch(event.request)
          }
        })
      })
    }

    return fetch(event.request)
  })
})

workbox.routing.registerRoute(navigationRoute)

let updatingWhitelist = null

<<<<<<< HEAD
  // Check for resources + the app bundle
  // The latter may not exist if the SW is updating to a new version
  const resources = await idbKeyval.get(`resources:${pathname}`)
  if (!resources || !(await caches.match(`/app-ae61bcea752ec3c60aa9.js`))) {
    return await fetch(event.request)
=======
function rawWhitelistPathnames(pathnames) {
  if (updatingWhitelist !== null) {
    // Prevent the whitelist from being updated twice at the same time
    return updatingWhitelist.then(() => rawWhitelistPathnames(pathnames))
>>>>>>> 9c17802cfd0e1babe0cc55c9a231fd22ad17df3c
  }

  updatingWhitelist = idbKeyval
    .get(WHITELIST_KEY)
    .then((customWhitelist = []) => {
      pathnames.forEach(pathname => {
        if (!customWhitelist.includes(pathname)) customWhitelist.push(pathname)
      })

      return idbKeyval.set(WHITELIST_KEY, customWhitelist)
    })
    .then(() => {
      updatingWhitelist = null
    })

  return updatingWhitelist
}

function rawResetWhitelist() {
  if (updatingWhitelist !== null) {
    return updatingWhitelist.then(() => rawResetWhitelist())
  }

  updatingWhitelist = idbKeyval.set(WHITELIST_KEY, []).then(() => {
    updatingWhitelist = null
  })

  return updatingWhitelist
}

const messageApi = {
  whitelistPathnames(event) {
    let { pathnames } = event.data

    pathnames = pathnames.map(({ pathname, includesPrefix }) => {
      if (!includesPrefix) {
        return `${pathname}`
      } else {
        return pathname
      }
    })

    event.waitUntil(rawWhitelistPathnames(pathnames))
  },

  resetWhitelist(event) {
    event.waitUntil(rawResetWhitelist())
  },
}

self.addEventListener(`message`, event => {
  const { gatsbyApi } = event.data
  if (gatsbyApi) messageApi[gatsbyApi](event)
})
