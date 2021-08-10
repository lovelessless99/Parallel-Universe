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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "622836c851538587549289443378555c"
  },
  {
    "url": "app_icons/144.png",
    "revision": "ed20e91600445a27a8d6e1ae59fedd0e"
  },
  {
    "url": "app_icons/192_pwa.png",
    "revision": "17cf3c3f488b9ec100ef6acf8ea2a3f5"
  },
  {
    "url": "app_icons/192.png",
    "revision": "8e613c8c7a54e356a68448c183bb462b"
  },
  {
    "url": "app_icons/36.png",
    "revision": "b08d8f7be76db3a1735d36a196f78411"
  },
  {
    "url": "app_icons/48.png",
    "revision": "354ad245651805cff14cc4b6567d0112"
  },
  {
    "url": "app_icons/512_pwa.png",
    "revision": "30912df8ce1facfbc663c9772906163d"
  },
  {
    "url": "app_icons/72.png",
    "revision": "f9cd6ea8e3c0fe7709ba0adffa863fab"
  },
  {
    "url": "app_icons/96.png",
    "revision": "13a305e65b2196bbd4b5ec2532898241"
  },
  {
    "url": "assets/css/0.styles.e23e7b55.css",
    "revision": "43b41f025c1d6f000f1b7b71c1658ebc"
  },
  {
    "url": "assets/fonts/KaTeX_AMS-Regular.2c50d7a0.woff2",
    "revision": "2c50d7a0caadcdd36b063bd9f9268291"
  },
  {
    "url": "assets/fonts/KaTeX_AMS-Regular.3392cf39.woff",
    "revision": "3392cf39311b42f70073c2732b99a24c"
  },
  {
    "url": "assets/fonts/KaTeX_AMS-Regular.342a61e0.ttf",
    "revision": "342a61e0c4dee016881d00d9fa69c335"
  },
  {
    "url": "assets/fonts/KaTeX_Caligraphic-Bold.b27e354b.ttf",
    "revision": "b27e354b9a940cfabb1cdad2f5d35eb9"
  },
  {
    "url": "assets/fonts/KaTeX_Caligraphic-Regular.bd18bae2.ttf",
    "revision": "bd18bae257a88cfa6a36310cd585d0a0"
  },
  {
    "url": "assets/fonts/KaTeX_Fraktur-Bold.314623ce.woff",
    "revision": "314623ce54a8a2654fb5df3c9cec01aa"
  },
  {
    "url": "assets/fonts/KaTeX_Fraktur-Bold.359e1e97.ttf",
    "revision": "359e1e974d07f534d0665dc5add72209"
  },
  {
    "url": "assets/fonts/KaTeX_Fraktur-Bold.e2c9ac85.woff2",
    "revision": "e2c9ac8504a2e0f1ec22e5904087174f"
  },
  {
    "url": "assets/fonts/KaTeX_Fraktur-Regular.6b53a2db.ttf",
    "revision": "6b53a2db48b3bbde91ec9c85590ccc44"
  },
  {
    "url": "assets/fonts/KaTeX_Fraktur-Regular.98d5da58.woff",
    "revision": "98d5da581ba8efea0934c92794c6c56c"
  },
  {
    "url": "assets/fonts/KaTeX_Fraktur-Regular.a2be00f3.woff2",
    "revision": "a2be00f37608cf99fb1c0351dc4e9342"
  },
  {
    "url": "assets/fonts/KaTeX_Main-Bold.233f218e.woff2",
    "revision": "233f218ee616854f491c7195cd8fffcf"
  },
  {
    "url": "assets/fonts/KaTeX_Main-Bold.316611c7.woff",
    "revision": "316611c7a4afe59d3bcbe9e0f1a41613"
  },
  {
    "url": "assets/fonts/KaTeX_Main-Bold.ed829b5f.ttf",
    "revision": "ed829b5fabfded4f5f943df1012da1b1"
  },
  {
    "url": "assets/fonts/KaTeX_Main-BoldItalic.09fa2c8f.woff2",
    "revision": "09fa2c8f6a5a787648fcf62022b9e5c6"
  },
  {
    "url": "assets/fonts/KaTeX_Main-BoldItalic.ca23ba4b.ttf",
    "revision": "ca23ba4b607268345b1f0b22bff41292"
  },
  {
    "url": "assets/fonts/KaTeX_Main-BoldItalic.cd5eb9a8.woff",
    "revision": "cd5eb9a8d163f765f01c4b1a44567f4c"
  },
  {
    "url": "assets/fonts/KaTeX_Main-Italic.14ff9c98.ttf",
    "revision": "14ff9c98a820d988c169e27ca3eb78b8"
  },
  {
    "url": "assets/fonts/KaTeX_Main-Italic.4dc3271d.woff2",
    "revision": "4dc3271d3627578d951ecd3fcdb7f762"
  },
  {
    "url": "assets/fonts/KaTeX_Main-Italic.4eee467e.woff",
    "revision": "4eee467e52c8113a7c48549dec426808"
  },
  {
    "url": "assets/fonts/KaTeX_Main-Regular.6c094af9.woff2",
    "revision": "6c094af9274ceccdc817400fdf49c5af"
  },
  {
    "url": "assets/fonts/KaTeX_Main-Regular.ab80a08c.woff",
    "revision": "ab80a08c3c6915afb4b4a3300a55ef8f"
  },
  {
    "url": "assets/fonts/KaTeX_Main-Regular.c89c6436.ttf",
    "revision": "c89c643655fabf99f2b78eb9cc5cf4b0"
  },
  {
    "url": "assets/fonts/KaTeX_Math-BoldItalic.7b481bb8.ttf",
    "revision": "7b481bb892d872c27234188b59ca8f10"
  },
  {
    "url": "assets/fonts/KaTeX_Math-BoldItalic.8bdd6092.woff2",
    "revision": "8bdd60921916168d5c53c2caf3931e86"
  },
  {
    "url": "assets/fonts/KaTeX_Math-BoldItalic.e1a2ff93.woff",
    "revision": "e1a2ff93bd15ea54164340e3d1b2f901"
  },
  {
    "url": "assets/fonts/KaTeX_Math-Italic.1aa96e4e.woff2",
    "revision": "1aa96e4e339118aad4153041adbd9947"
  },
  {
    "url": "assets/fonts/KaTeX_Math-Italic.68f671df.woff",
    "revision": "68f671df4bc4ab87b9f3e5111c28c49a"
  },
  {
    "url": "assets/fonts/KaTeX_Math-Italic.f677173e.ttf",
    "revision": "f677173e00e38ef3151aa3156ef87507"
  },
  {
    "url": "assets/fonts/KaTeX_SansSerif-Bold.362d94c6.ttf",
    "revision": "362d94c68887ef3079e3fa04abc7b505"
  },
  {
    "url": "assets/fonts/KaTeX_SansSerif-Bold.f1cea170.woff",
    "revision": "f1cea170c77d231b4ce249fcf850f3f4"
  },
  {
    "url": "assets/fonts/KaTeX_SansSerif-Bold.f9ae4352.woff2",
    "revision": "f9ae435239a0933219b7dba4480141cc"
  },
  {
    "url": "assets/fonts/KaTeX_SansSerif-Italic.07ffaec6.woff",
    "revision": "07ffaec68ea2d7c3428eec8b12969925"
  },
  {
    "url": "assets/fonts/KaTeX_SansSerif-Italic.2c742978.ttf",
    "revision": "2c74297808a50220aa64d435d69006bc"
  },
  {
    "url": "assets/fonts/KaTeX_SansSerif-Italic.e7aabbc7.woff2",
    "revision": "e7aabbc7a3b86d947d8ad4436a81b348"
  },
  {
    "url": "assets/fonts/KaTeX_SansSerif-Regular.6087fc04.ttf",
    "revision": "6087fc040fbe6c4e83da5ee2c1f8a803"
  },
  {
    "url": "assets/fonts/KaTeX_SansSerif-Regular.6f7840dc.woff2",
    "revision": "6f7840dc539b8786da712dc43a57051c"
  },
  {
    "url": "assets/fonts/KaTeX_SansSerif-Regular.e8735df9.woff",
    "revision": "e8735df90d494a81dfc1568c352b21bc"
  },
  {
    "url": "assets/fonts/KaTeX_Script-Regular.5921f5ba.woff2",
    "revision": "5921f5ba7c02f3aeb478e4e87d2187bf"
  },
  {
    "url": "assets/fonts/KaTeX_Script-Regular.781730b2.ttf",
    "revision": "781730b2f066b5268a8fb75b4f7c479b"
  },
  {
    "url": "assets/fonts/KaTeX_Script-Regular.ced4ee62.woff",
    "revision": "ced4ee620859978fa1921c87d6dbd774"
  },
  {
    "url": "assets/fonts/KaTeX_Size1-Regular.54a80b37.ttf",
    "revision": "54a80b37e92f14f32a33165c571f8e95"
  },
  {
    "url": "assets/fonts/KaTeX_Size2-Regular.24cbe093.ttf",
    "revision": "24cbe093e557076be8c6c5ffee4aa61b"
  },
  {
    "url": "assets/fonts/KaTeX_Size4-Regular.b78c75bb.ttf",
    "revision": "b78c75bb4d0c95e4a87e006e83f187e4"
  },
  {
    "url": "assets/fonts/KaTeX_Typewriter-Regular.8073cf01.woff2",
    "revision": "8073cf012f453ddf47d5b8776f6bb1e5"
  },
  {
    "url": "assets/fonts/KaTeX_Typewriter-Regular.90f78c10.ttf",
    "revision": "90f78c1075e0cdb56287589112f56011"
  },
  {
    "url": "assets/fonts/KaTeX_Typewriter-Regular.b636fa48.woff",
    "revision": "b636fa487ef5e2f56bb3529bc9168be0"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/img/danger-dark.7b1d6aa1.svg",
    "revision": "7b1d6aa1bdcf013d0edfe316ab770f8e"
  },
  {
    "url": "assets/img/danger.b143eda2.svg",
    "revision": "b143eda243548a9982491dca4c81eed5"
  },
  {
    "url": "assets/img/info-dark.f8a43cf6.svg",
    "revision": "f8a43cf67fa96a27a078530a3a43253c"
  },
  {
    "url": "assets/img/info.88826912.svg",
    "revision": "88826912d81d91c9e2d03164cd1481a1"
  },
  {
    "url": "assets/img/tip-dark.075a244c.svg",
    "revision": "075a244c83d1403c167defe81b4d7fe7"
  },
  {
    "url": "assets/img/tip.a2b80aa5.svg",
    "revision": "a2b80aa50b769a26da12fe352322a657"
  },
  {
    "url": "assets/img/warning-dark.aac7e30c.svg",
    "revision": "aac7e30c5fafc6748e21f7a9ef546698"
  },
  {
    "url": "assets/img/warning.ec428b6d.svg",
    "revision": "ec428b6d6d45ac5d0c610f08d757f40f"
  },
  {
    "url": "assets/js/1.9805eba7.js",
    "revision": "b108e82c3c18ac50220257157ad016e2"
  },
  {
    "url": "assets/js/10.ec2f777f.js",
    "revision": "4a936d4c8ee0aa3fad19d6e21925a261"
  },
  {
    "url": "assets/js/11.adde572e.js",
    "revision": "75ba6a1c5765d0ab8003a127401f3d8a"
  },
  {
    "url": "assets/js/12.89940713.js",
    "revision": "a884199016e68f4b639ef1350d159395"
  },
  {
    "url": "assets/js/13.5d2f1e88.js",
    "revision": "c2e5b3e7ba41a44c1a1e8a1746667eb6"
  },
  {
    "url": "assets/js/14.d8990c17.js",
    "revision": "dd0aceb9b89ec39b5fe4cc21fbca3568"
  },
  {
    "url": "assets/js/15.afdcfd5a.js",
    "revision": "2412bdc72e4b0fca8ce0c5adbdbc6117"
  },
  {
    "url": "assets/js/16.2fbf64cc.js",
    "revision": "3d719375dd0681837aece5d87e233de9"
  },
  {
    "url": "assets/js/17.b545cf96.js",
    "revision": "db2e97790b3dd8e280e848412b4122e2"
  },
  {
    "url": "assets/js/18.99e8d16c.js",
    "revision": "d6f02279037d55297877186bd5c45a16"
  },
  {
    "url": "assets/js/19.b3f643af.js",
    "revision": "9872f39c714827605d8bb439a56778f5"
  },
  {
    "url": "assets/js/20.f1feeb87.js",
    "revision": "c01a75c0e322fa14d00e2c0deed94155"
  },
  {
    "url": "assets/js/21.fcba06b0.js",
    "revision": "b80d4861f920ffcb08ce2123ffc1be91"
  },
  {
    "url": "assets/js/7.bd886078.js",
    "revision": "ba38481bf1e7a627ec36b5a2b25748af"
  },
  {
    "url": "assets/js/8.b8c31501.js",
    "revision": "7cb3ddd61299f9f83e5407aeadc9bae8"
  },
  {
    "url": "assets/js/9.135a11b6.js",
    "revision": "d7f2717b9712aef1ecdfb43732dfc06f"
  },
  {
    "url": "assets/js/app.5c532cb2.js",
    "revision": "e25ced00d75f3211e55abcb094bfe725"
  },
  {
    "url": "assets/js/mermaid.e2e10bbd.js",
    "revision": "c95e5d65de95cc7546a56220fcd266e3"
  },
  {
    "url": "assets/js/vendors~flowchart.d80c7e1f.js",
    "revision": "df4d88d633f91e4084f6c61e4f12a89e"
  },
  {
    "url": "assets/js/vendors~mermaid.3e83ebc0.js",
    "revision": "e1385c1c6005d756ef1c6bc25dff881a"
  },
  {
    "url": "assets/js/vendors~reveal.681f851f.js",
    "revision": "9caaac6ed721d97e2a2269a57bda9eab"
  },
  {
    "url": "avatar.png",
    "revision": "df4467759eab42a8de547f7fe386f68d"
  },
  {
    "url": "blogs/aboutme/aboutme.html",
    "revision": "03991cf3d56a8cec8d617c68a066b6a4"
  },
  {
    "url": "blogs/parallel/Introduction.html",
    "revision": "874508335f9d4449dde2d50cf3bf370b"
  },
  {
    "url": "categories/index.html",
    "revision": "3d1df41bdf10649e18e30716ba6e7d43"
  },
  {
    "url": "categories/parallel/index.html",
    "revision": "e2db7c7c5833d808cbfae7ac1ada0ee9"
  },
  {
    "url": "coding.png",
    "revision": "c8d258d1deef44d4bc41940a8189cc16"
  },
  {
    "url": "head.gif",
    "revision": "f81fafc3939e3cc55a3e6f854b17e83f"
  },
  {
    "url": "hero.png",
    "revision": "5367b9349d4e048235eeed50d9ef36df"
  },
  {
    "url": "index.html",
    "revision": "8839c87d85bd7da222dfd2e34c38fc3c"
  },
  {
    "url": "logo.png",
    "revision": "406370f8f120332c7a41611803a290b6"
  },
  {
    "url": "tag/index.html",
    "revision": "55be0505458e90d2fcf9ebec0fa12482"
  },
  {
    "url": "tag/Multiprocess/index.html",
    "revision": "195d5dcca594f02d976e9d86a2818a04"
  },
  {
    "url": "tag/Multithread/index.html",
    "revision": "ba4c00b91a9636153147326e8d51c4ce"
  },
  {
    "url": "timeline/index.html",
    "revision": "6d0a3bc67050e340c8ffc608abb9ee1e"
  },
  {
    "url": "tutorial.html",
    "revision": "11955ba3fe74a5ef1f550cd8bb401f97"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
