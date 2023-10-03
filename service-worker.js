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
    "revision": "94d6fa7b0a22ced9621f34bba5e13cca"
  },
  {
    "url": "assets/css/0.styles.602d44d4.css",
    "revision": "3c72014a1070ebfc583383466cbfd0d2"
  },
  {
    "url": "assets/fonts/element-icons.6f0a7632.ttf",
    "revision": "6f0a76321d30f3c8120915e57f7bd77e"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.2ee82526.js",
    "revision": "d689768b370d5d079c8c6b9da99d5d97"
  },
  {
    "url": "assets/js/100.0eafe588.js",
    "revision": "1b5b6d985ebb383aba6a4bdf9940e991"
  },
  {
    "url": "assets/js/101.0b8ac2f5.js",
    "revision": "234178db22b6a2f8126eaf9c06abd960"
  },
  {
    "url": "assets/js/102.1469d81d.js",
    "revision": "7fbd428aa05312625c9cc2d6a0da4287"
  },
  {
    "url": "assets/js/103.fcf29a41.js",
    "revision": "29f2ea9eb60dcedbf228ff538caffca9"
  },
  {
    "url": "assets/js/104.68fbcd54.js",
    "revision": "10b193bab537009c90c07b0ec34b9830"
  },
  {
    "url": "assets/js/105.9ff9b676.js",
    "revision": "fa88955c95fd03e6949b454c158fd1f0"
  },
  {
    "url": "assets/js/106.a1ac1c2a.js",
    "revision": "a6c895c153dd3b150ae98bb740918458"
  },
  {
    "url": "assets/js/107.3f67c355.js",
    "revision": "8d65669bbbea7fdf70803e51577686ce"
  },
  {
    "url": "assets/js/108.803f831f.js",
    "revision": "817acd9a1a8ca946e6508873b87e68f0"
  },
  {
    "url": "assets/js/109.fd26db57.js",
    "revision": "5e96b3417751e5c1ec3df518908c5ca3"
  },
  {
    "url": "assets/js/11.67eeb22e.js",
    "revision": "772574731a36ed749c4b4940d054100b"
  },
  {
    "url": "assets/js/110.c34a12e1.js",
    "revision": "7c46acd87e6f2f2fe6dc5b2da4665cbd"
  },
  {
    "url": "assets/js/111.70c6c1c9.js",
    "revision": "19972d68541fcbf3703efe3e505c04fb"
  },
  {
    "url": "assets/js/112.a674b562.js",
    "revision": "c8fba75b7be56181276a974d37f8016f"
  },
  {
    "url": "assets/js/113.c277da05.js",
    "revision": "003c631df9367c8c32eadcafa43e9777"
  },
  {
    "url": "assets/js/114.bf962ea9.js",
    "revision": "c1b50479576f756e4bf733730c1fa046"
  },
  {
    "url": "assets/js/115.d1cc1f94.js",
    "revision": "598832346f589ab57370ab07ec9b70e0"
  },
  {
    "url": "assets/js/116.96bbbd80.js",
    "revision": "a35f2174a0ef5979d88a4c9dd6dc732f"
  },
  {
    "url": "assets/js/117.e29b6ef2.js",
    "revision": "a67238d88a7c0622142e15347f2a6ced"
  },
  {
    "url": "assets/js/118.7699f666.js",
    "revision": "56a7c98b1e251f5b4af521c62da8c984"
  },
  {
    "url": "assets/js/119.be7e0a54.js",
    "revision": "ef3d84cbd4e8fdd3508407363b8f2445"
  },
  {
    "url": "assets/js/12.e76012ba.js",
    "revision": "2d5f41e791377d347595d141f9d906c9"
  },
  {
    "url": "assets/js/120.4ec534f5.js",
    "revision": "c98490812437900745f6acf88a6eb61b"
  },
  {
    "url": "assets/js/121.56c260a2.js",
    "revision": "030c468b5fbf4ff0d57be4932295a1ea"
  },
  {
    "url": "assets/js/122.3fbbf8a6.js",
    "revision": "844416337ded39ebbbadcde74966b27f"
  },
  {
    "url": "assets/js/123.62738061.js",
    "revision": "aae81d6d2ddff679b22cb749c373f6a9"
  },
  {
    "url": "assets/js/124.69e4bf31.js",
    "revision": "1798ab5c22e06277d1f08a436f1b6773"
  },
  {
    "url": "assets/js/125.f43c6c5c.js",
    "revision": "91e86b4fc424b4fec515d5d8fe53cf9c"
  },
  {
    "url": "assets/js/126.8d6dbc3b.js",
    "revision": "b1627bf2d3adc256b1897704e04657ee"
  },
  {
    "url": "assets/js/127.d13f8543.js",
    "revision": "e63fcbe91619fd6c616422dff0439e6b"
  },
  {
    "url": "assets/js/128.6bf4bf8f.js",
    "revision": "c7f57cd14fc0313b25dd8d328762d97a"
  },
  {
    "url": "assets/js/129.e60f3c4f.js",
    "revision": "ef1a5475eaac15ea17db2b5fe3078fc3"
  },
  {
    "url": "assets/js/13.76a19550.js",
    "revision": "e993a6877027da381008910306286c65"
  },
  {
    "url": "assets/js/130.4c25a1d0.js",
    "revision": "695aa3be469b9fc41f3cb4ef36403b4f"
  },
  {
    "url": "assets/js/131.3fcd396e.js",
    "revision": "158b8d0dfd60f03041991323874ba32d"
  },
  {
    "url": "assets/js/132.cc098fcd.js",
    "revision": "8695349069501ef14152115c796f76e2"
  },
  {
    "url": "assets/js/133.039d0a8e.js",
    "revision": "2c30151acb3e7f793fcbcc817d696402"
  },
  {
    "url": "assets/js/134.98d63e2f.js",
    "revision": "8308ed251aa86ad1241644b61129d890"
  },
  {
    "url": "assets/js/135.017af168.js",
    "revision": "68b2adab3ac23d39d16ff5dde77ee3d0"
  },
  {
    "url": "assets/js/136.1558908b.js",
    "revision": "6d2921b34e3b56a3018cc989f58a1a47"
  },
  {
    "url": "assets/js/137.73f51472.js",
    "revision": "d5246433417d8a85798f3ec37e2fc7f2"
  },
  {
    "url": "assets/js/138.1744f9a9.js",
    "revision": "7ec2019c6a7ab569034843ee85fc8807"
  },
  {
    "url": "assets/js/139.91b34ce1.js",
    "revision": "a5ca2059f11ccd77d5b0ad62514b9f49"
  },
  {
    "url": "assets/js/14.518e193d.js",
    "revision": "000856f75b0a087f3326f0ba3471b94d"
  },
  {
    "url": "assets/js/140.680b6fbc.js",
    "revision": "e1e3e413b67eac9483b505eb59d3f013"
  },
  {
    "url": "assets/js/141.11efb0a6.js",
    "revision": "1c591d59f44653e580398ea5a511dc9a"
  },
  {
    "url": "assets/js/142.b61d7041.js",
    "revision": "04b76fb2f3bf5f89f6bb15b05f2f491e"
  },
  {
    "url": "assets/js/143.92602ac2.js",
    "revision": "a4a285b7a7edf389440e7f492c95b4d4"
  },
  {
    "url": "assets/js/144.52ea1267.js",
    "revision": "e2c2e440702fd6bc50195e0b108fbd83"
  },
  {
    "url": "assets/js/145.63e367a1.js",
    "revision": "333e44ab929c697ed4b79136336a23b2"
  },
  {
    "url": "assets/js/146.d8dd15b2.js",
    "revision": "9136932dde8a0817cc270d366a1171ed"
  },
  {
    "url": "assets/js/147.5081c978.js",
    "revision": "12f9f771a8ba9eb0d67a909927520662"
  },
  {
    "url": "assets/js/148.4bebdbd8.js",
    "revision": "2a472ca3f2fc0fc92eeaf492f18abd72"
  },
  {
    "url": "assets/js/149.5b0683ad.js",
    "revision": "b89e32fe9177145b3ea07260693f5c49"
  },
  {
    "url": "assets/js/15.ec4d9a1d.js",
    "revision": "7a14582d58ec79e890578e99ff8b23cd"
  },
  {
    "url": "assets/js/150.5be7f735.js",
    "revision": "1acc1b9bdbe78a2318900bf5a0281664"
  },
  {
    "url": "assets/js/151.969f5db6.js",
    "revision": "f72ed6da8d1622664572abe775743ee6"
  },
  {
    "url": "assets/js/152.10b7297d.js",
    "revision": "7fd5f94415ed66988b34eebeef2c0431"
  },
  {
    "url": "assets/js/153.62560c86.js",
    "revision": "4fecf027a2e4d3b463e35637763eef53"
  },
  {
    "url": "assets/js/154.a3afb262.js",
    "revision": "9603c15e4f9b71489e9598cc1470be1e"
  },
  {
    "url": "assets/js/155.b07f9604.js",
    "revision": "a64791ec985bf807e9173d09dd4b461e"
  },
  {
    "url": "assets/js/156.89d3d3c3.js",
    "revision": "c53dbdeaa1ced951f9cf741fa9a694a1"
  },
  {
    "url": "assets/js/16.8cce04a6.js",
    "revision": "639668628e07d26da95c4b4cda9a816c"
  },
  {
    "url": "assets/js/17.1b45f618.js",
    "revision": "2d1697f05f76226ded2a1d0365d6c71c"
  },
  {
    "url": "assets/js/18.a1fb783a.js",
    "revision": "5cc71cb5e826b60bd5a77747998491fd"
  },
  {
    "url": "assets/js/19.3467e724.js",
    "revision": "282413451aec0865b0032da9977fca75"
  },
  {
    "url": "assets/js/2.a9b66600.js",
    "revision": "cb58ae1a9b19fdc7ee385ce95b9e96c5"
  },
  {
    "url": "assets/js/20.5f87ddc4.js",
    "revision": "3963c002311c1c12520b4d71ed95bd1e"
  },
  {
    "url": "assets/js/21.c292f91a.js",
    "revision": "c28d9b10b3f4464e033e721506667450"
  },
  {
    "url": "assets/js/22.0b943de7.js",
    "revision": "2d8ad5a85a93e4ec566dd620593ec1ce"
  },
  {
    "url": "assets/js/23.b8f4a523.js",
    "revision": "3d373a6f6d6c83ed640a5a98f6538cea"
  },
  {
    "url": "assets/js/24.55d7641d.js",
    "revision": "1f3aa6938c9cef6157885a659d05b11e"
  },
  {
    "url": "assets/js/25.0c84535c.js",
    "revision": "634ca0e18ec9064804dabadcd8c1001c"
  },
  {
    "url": "assets/js/26.c2b2387c.js",
    "revision": "fe10efb26966bde0db3ed0c6ce9f7bf6"
  },
  {
    "url": "assets/js/27.c1470cb6.js",
    "revision": "41ee0fa62daa0dbb7aae271a2ef1c45b"
  },
  {
    "url": "assets/js/28.6804c74a.js",
    "revision": "ea00c7d82511e74076c0b1a2cee9cd41"
  },
  {
    "url": "assets/js/29.5f6c8c8f.js",
    "revision": "fce457f5dd3ce006355c6c181c912f94"
  },
  {
    "url": "assets/js/3.da5f8bbf.js",
    "revision": "6421fec03f9b0ee8e5936f4026d4c208"
  },
  {
    "url": "assets/js/30.c5c51298.js",
    "revision": "7131e1f3a18121e230177482eb095aca"
  },
  {
    "url": "assets/js/31.2a895052.js",
    "revision": "417f53d7f91cc8454332966acee9c65f"
  },
  {
    "url": "assets/js/32.67486010.js",
    "revision": "78fdaed45e9f5f9c5b3d4d9ae7c992b9"
  },
  {
    "url": "assets/js/33.0320b5ac.js",
    "revision": "a4c611ba4fb7acf3d45696d899cf63f7"
  },
  {
    "url": "assets/js/34.bf1c5136.js",
    "revision": "42a5d6607a3de8de3edddf57faeaf8c3"
  },
  {
    "url": "assets/js/35.d4fd8025.js",
    "revision": "cbef9446ca7910fd0c534609ca3da72a"
  },
  {
    "url": "assets/js/36.3d689a7a.js",
    "revision": "90180ec0999ff07e8b74e9bab840d642"
  },
  {
    "url": "assets/js/37.1238caf1.js",
    "revision": "d29eefcf333f2519b31738603f955869"
  },
  {
    "url": "assets/js/38.4c512a63.js",
    "revision": "2117176e518ec606ffaa8bb7b0cb0cbf"
  },
  {
    "url": "assets/js/39.327a60ae.js",
    "revision": "f7152fda371a35845f2dc3e4c7d7f1c6"
  },
  {
    "url": "assets/js/4.b25c2693.js",
    "revision": "bc740d536ac6acafbb748bdc2fb1fa5c"
  },
  {
    "url": "assets/js/40.dad0ddbb.js",
    "revision": "635c99642cfd1054ae124d4c88cfd45a"
  },
  {
    "url": "assets/js/41.d6f9b12c.js",
    "revision": "06ae89867e7d99b3c201c924d95d83d1"
  },
  {
    "url": "assets/js/42.282787d7.js",
    "revision": "cf0ae170fab57f39c5924f08b4a38e1d"
  },
  {
    "url": "assets/js/43.3a07744d.js",
    "revision": "039b09426ef227ffc08c385f3bc82c52"
  },
  {
    "url": "assets/js/44.fb745966.js",
    "revision": "18e0ed2ebe38a3e015cd3cadcf703161"
  },
  {
    "url": "assets/js/45.64124aea.js",
    "revision": "c6c4698deadfefc03e889cc7db74f518"
  },
  {
    "url": "assets/js/46.c8fa4fc4.js",
    "revision": "968742c1583cd70f563755ffc16e0e21"
  },
  {
    "url": "assets/js/47.b3660733.js",
    "revision": "18a8268c2c778763173ecc50d6412696"
  },
  {
    "url": "assets/js/48.8c7b4090.js",
    "revision": "1c36bd742309022ee2a6489a7a6f2e85"
  },
  {
    "url": "assets/js/49.8e6d7f5d.js",
    "revision": "625cf3ddb281d9af9a905c1844eaab42"
  },
  {
    "url": "assets/js/5.a27c8aed.js",
    "revision": "a8cb624ce82b3cbd5eea46ad1396febd"
  },
  {
    "url": "assets/js/50.861e3d59.js",
    "revision": "c54f8be79f260fd81d1cae9c81e444be"
  },
  {
    "url": "assets/js/51.694690c0.js",
    "revision": "3d20a5a721934b13da3f827a267ae0be"
  },
  {
    "url": "assets/js/52.7791d43c.js",
    "revision": "598a008df96cb9c5ec2eed6eae610e62"
  },
  {
    "url": "assets/js/53.4a241f44.js",
    "revision": "5f095db75a805c0c38b07ec837d44505"
  },
  {
    "url": "assets/js/54.cffaa2fa.js",
    "revision": "d5e7f39fec24d11c4cdc26afd1610cb6"
  },
  {
    "url": "assets/js/55.782383c4.js",
    "revision": "d5a95711ec5267c05d2135c0dce3fe9d"
  },
  {
    "url": "assets/js/56.28533489.js",
    "revision": "8e57e03423847f9ef99aba9a63d1af64"
  },
  {
    "url": "assets/js/57.bcc6b6a3.js",
    "revision": "bd80439bdb6786b4988a56c847e9bf35"
  },
  {
    "url": "assets/js/58.69f9e0f4.js",
    "revision": "697500ce56aa84679dad89933f8a78bf"
  },
  {
    "url": "assets/js/59.3574a962.js",
    "revision": "71d6df674a7965c901f98bcc57803fbe"
  },
  {
    "url": "assets/js/6.dd30f460.js",
    "revision": "329d46b754bc2eee7361c53a43948678"
  },
  {
    "url": "assets/js/60.693657c7.js",
    "revision": "f877d8a3fb58554cc5cd0c7e506e8359"
  },
  {
    "url": "assets/js/61.b098ab46.js",
    "revision": "22a976668fe052389f042e9cea8f6bf3"
  },
  {
    "url": "assets/js/62.dc93e6a1.js",
    "revision": "3ae4bc7eeac7d4ecf87430fad57cde0f"
  },
  {
    "url": "assets/js/63.1523c548.js",
    "revision": "ce4aa93616a6fb219db6ab9940b77195"
  },
  {
    "url": "assets/js/64.f8e7a4fe.js",
    "revision": "00e1751ed229e2524a5e8824ac325ae8"
  },
  {
    "url": "assets/js/65.cbc3c1b0.js",
    "revision": "818cfda87fb2c661668777409a5ada52"
  },
  {
    "url": "assets/js/66.f4e443cc.js",
    "revision": "98dbd98f286f52aaad82b9e2e118f96a"
  },
  {
    "url": "assets/js/67.8ca406c5.js",
    "revision": "7efd9b6961a0942ee594e0f546e42d8d"
  },
  {
    "url": "assets/js/68.cc822435.js",
    "revision": "e986efec414f19e591c6e7e12fce29f5"
  },
  {
    "url": "assets/js/69.844ac88e.js",
    "revision": "105569086f52a4161f9d1c89f563353e"
  },
  {
    "url": "assets/js/7.c9d40bc3.js",
    "revision": "2ca79104c89a7a57d806f5d07ab8b3fe"
  },
  {
    "url": "assets/js/70.3d812a9c.js",
    "revision": "91d42e493f02cb67dcf703ceb3840c66"
  },
  {
    "url": "assets/js/71.42a81f82.js",
    "revision": "51fa6606c75186b5389e7d6d69152804"
  },
  {
    "url": "assets/js/72.94163645.js",
    "revision": "e10552f98b409388b2afad62ce4b74e9"
  },
  {
    "url": "assets/js/73.e05e407d.js",
    "revision": "11167d0e98e8d1df2ffb5f4835c4d907"
  },
  {
    "url": "assets/js/74.a72122d3.js",
    "revision": "07f0bffcefcc82103342a2c91e63bf6d"
  },
  {
    "url": "assets/js/75.8affc8fc.js",
    "revision": "3530a8200ff799fd6d2edce14be4eb56"
  },
  {
    "url": "assets/js/76.5188641c.js",
    "revision": "ad81e5ba3fd2faf74668a4ea87b81be9"
  },
  {
    "url": "assets/js/77.5d3977be.js",
    "revision": "c8c00c0e1012590cf9216966ee98bd54"
  },
  {
    "url": "assets/js/78.4de1a3ae.js",
    "revision": "36981d145d3080d46a85d16bf50a6976"
  },
  {
    "url": "assets/js/79.76c11873.js",
    "revision": "05cd1f979c8981d0030a7f5f0ce9255d"
  },
  {
    "url": "assets/js/8.7befaae6.js",
    "revision": "0024031b41385b48b62fc6fad9a599cb"
  },
  {
    "url": "assets/js/80.8bee079d.js",
    "revision": "307910ba68806bea36ee4aa1aa335c2a"
  },
  {
    "url": "assets/js/81.db328992.js",
    "revision": "178e71846539f3348d342c591247fd94"
  },
  {
    "url": "assets/js/82.99f273bc.js",
    "revision": "63ddf7b6cdb3cc0451b275fde57bb2a6"
  },
  {
    "url": "assets/js/83.f27c0a30.js",
    "revision": "504723fd87b7178bd3079098260dba82"
  },
  {
    "url": "assets/js/84.185c04db.js",
    "revision": "8976b940df5bf3b4a951883a979ec6fa"
  },
  {
    "url": "assets/js/85.0ca24c2a.js",
    "revision": "e2449c7b8ea117b3eec8ceaf00c08136"
  },
  {
    "url": "assets/js/86.e8dd42ea.js",
    "revision": "3f96debbea333c2b7af76b691fd3f1e8"
  },
  {
    "url": "assets/js/87.93d12470.js",
    "revision": "8577842afe5033178390088487133562"
  },
  {
    "url": "assets/js/88.b370820b.js",
    "revision": "90bf5e97e3266519194f1fd3736b78ff"
  },
  {
    "url": "assets/js/89.78ce4c1b.js",
    "revision": "45b95384b581786bc20c339490dd05e0"
  },
  {
    "url": "assets/js/9.61fceebf.js",
    "revision": "7b7bd9912fd09e36059f72a3c0ab502b"
  },
  {
    "url": "assets/js/90.4c6a4aff.js",
    "revision": "bd8311a843ed89cd9385c22937a656e8"
  },
  {
    "url": "assets/js/91.75da1e55.js",
    "revision": "9e09ad3e72b62e04beba7f64d26b780a"
  },
  {
    "url": "assets/js/92.4382aedf.js",
    "revision": "af2270e118b19815d0ed21f48e4747b5"
  },
  {
    "url": "assets/js/93.a801bb8f.js",
    "revision": "efbe76444bd1637e27c8e2f42d362b5a"
  },
  {
    "url": "assets/js/94.9574efc9.js",
    "revision": "6db9a181e01a1c0986c9050448a20d66"
  },
  {
    "url": "assets/js/95.9f1ba47f.js",
    "revision": "f6c7189939d6fdca75e135c28ebc2f77"
  },
  {
    "url": "assets/js/96.840dc723.js",
    "revision": "72cf29bb2ff26d9e6cc4007defe8feb9"
  },
  {
    "url": "assets/js/97.02577581.js",
    "revision": "d1f139ba606decc21638f9b82f6887e9"
  },
  {
    "url": "assets/js/98.2c05d1c9.js",
    "revision": "95bc0fdf47eba5aea068a49dcf9cc25e"
  },
  {
    "url": "assets/js/99.ef02555e.js",
    "revision": "4870ed152e565df05271cf9ef87e1954"
  },
  {
    "url": "base/api/1.echarts.html",
    "revision": "f86f0a309189aab0b81a5f75b505ea1a"
  },
  {
    "url": "base/api/1.index.html",
    "revision": "5fa3c7bad5ed8f48873bebe6c0f2c67d"
  },
  {
    "url": "base/api/2.echartsInstance.html",
    "revision": "1c11180a964cc31419483dd7a132718b"
  },
  {
    "url": "base/api/3.action.html",
    "revision": "99c32ea99b355e0762a9c4ebcd41fdd8"
  },
  {
    "url": "base/api/4.events.html",
    "revision": "4e359a28a3a6f092dc8b512ad769a49b"
  },
  {
    "url": "base/components/1.index.html",
    "revision": "7485e66b0cc92606832599d182633a2e"
  },
  {
    "url": "base/components/1.legend.html",
    "revision": "23a2ca175161e23f23fb479327aec231"
  },
  {
    "url": "base/components/2.grid.html",
    "revision": "2551be0c376ebc81bdec2e7ae9f08549"
  },
  {
    "url": "base/components/2.polar.html",
    "revision": "0b02504b48d4bd928f2369a572fc2b85"
  },
  {
    "url": "base/components/2.radiusAxis.html",
    "revision": "1a91c0184ab3cc52650249d8ec90c384"
  },
  {
    "url": "base/components/2.xAxis.html",
    "revision": "656c847dcfe0f64076e10198eacb1aaf"
  },
  {
    "url": "base/components/2.yAxis.html",
    "revision": "a12ca38a7e2757d520d3fbac288e2cdc"
  },
  {
    "url": "base/components/3.angleAxis.html",
    "revision": "05dee0cf3aa50669f60d69c425bd810c"
  },
  {
    "url": "base/components/4.radar.html",
    "revision": "93c15a683dbba8e2b9c0d82910c5c2bc"
  },
  {
    "url": "base/components/5.dataZoom.html",
    "revision": "7a66514f428f6ff8e247866a26cb7deb"
  },
  {
    "url": "base/components/6.visualMap.html",
    "revision": "ed2739715df3e711ac2ae076dd7e4101"
  },
  {
    "url": "base/components/7.tooltip.html",
    "revision": "436f1a4c65f381019d15f4027fa3b9fc"
  },
  {
    "url": "base/components/8.geo.html",
    "revision": "d656fb0b39ce4b6215e77bbe3609ebba"
  },
  {
    "url": "base/gl/1.index.html",
    "revision": "75956b3e2d7e9163db91d3c3690710a9"
  },
  {
    "url": "base/gl/1.scatter3D.html",
    "revision": "10d8c54f3e4d79d5bf183a2ba2cd99ac"
  },
  {
    "url": "base/gl/10.flowGL.html",
    "revision": "5c43f28437d3a4f6e42524c119c57bc2"
  },
  {
    "url": "base/gl/2.bar3D.html",
    "revision": "bbbc0ec61f3f92939b4f6ae21bcb480b"
  },
  {
    "url": "base/gl/3.line3D.html",
    "revision": "0f764ceb0afeb4299440a7abf8fabfb0"
  },
  {
    "url": "base/gl/4.lines3D.html",
    "revision": "d9e27d96d8544065cec5963e2ca75aed"
  },
  {
    "url": "base/gl/5.map3D.html",
    "revision": "5e34f578660c43807d21b79565711d97"
  },
  {
    "url": "base/gl/6.surface.html",
    "revision": "6e13a44aee3a2739fd00ed593d847d51"
  },
  {
    "url": "base/gl/7.polygons3D.html",
    "revision": "81ffb8a538ad9b334c0c34a9a55560fb"
  },
  {
    "url": "base/gl/8.scatterGL.html",
    "revision": "cb410337489d793f22f0d928de992d9d"
  },
  {
    "url": "base/gl/9.graphGL.html",
    "revision": "ce7c27b499a3bc0a74089842a7aaa576"
  },
  {
    "url": "base/series/1.index.html",
    "revision": "bedab6dd62dedb0499fbfed1007dbc2e"
  },
  {
    "url": "base/series/1.line.html",
    "revision": "b72795c64cb45ae35b46c67e2d474875"
  },
  {
    "url": "base/series/10.boxplot.html",
    "revision": "fb4d9ab2c332dfa4a90b4866ad2248b2"
  },
  {
    "url": "base/series/11.candlestick.html",
    "revision": "2e0eeacde0ec050cbae13197f98ed8dc"
  },
  {
    "url": "base/series/12.heatmap.html",
    "revision": "e257df579c8a4ae1b55cbff61436de2b"
  },
  {
    "url": "base/series/13.map.html",
    "revision": "0dc6efb63cc861a39051b96ffdc791d6"
  },
  {
    "url": "base/series/14.parallel.html",
    "revision": "d39057187235b9321a4427785030166e"
  },
  {
    "url": "base/series/15.lines.html",
    "revision": "45393c0144a9b5cd0fc226721f1ac2dc"
  },
  {
    "url": "base/series/16.graph.html",
    "revision": "b649f13a759f455050e3098fc904ad77"
  },
  {
    "url": "base/series/17.sankey.html",
    "revision": "3bcc8c55fff63df3633d079af0b66e5b"
  },
  {
    "url": "base/series/18.funnel.html",
    "revision": "376500a64597612913d6de6c6aa975af"
  },
  {
    "url": "base/series/19.gauge.html",
    "revision": "2e78c01efb1c1dd9ea74f219014ce90d"
  },
  {
    "url": "base/series/2.bar.html",
    "revision": "a2ca36b4111c895a427c7828beaa1a88"
  },
  {
    "url": "base/series/20.pictorialBar.html",
    "revision": "848df5b5f7f70366cf7266aa69ce98d4"
  },
  {
    "url": "base/series/21.themeRiver.html",
    "revision": "0ce924ead4fe21f1a165fee4d5f38daf"
  },
  {
    "url": "base/series/22.custom.html",
    "revision": "1e3f7e51eabcd47615e49032527de8e4"
  },
  {
    "url": "base/series/3.pie.html",
    "revision": "51600f655c4d842adb5d0cb31c9e6bb0"
  },
  {
    "url": "base/series/4.scatter.html",
    "revision": "b4f30e57fab82e2b6303aa8cbb17465a"
  },
  {
    "url": "base/series/5.effectScatter.html",
    "revision": "0738a145f3e749e3dc7dab30052db998"
  },
  {
    "url": "base/series/6.radar.html",
    "revision": "4831a6d9e71dd674f3dab5e77ca57e1f"
  },
  {
    "url": "base/series/7.tree.html",
    "revision": "f3cf9767aee893ae508fd8ebfb57abf0"
  },
  {
    "url": "base/series/8.treemap.html",
    "revision": "846d31bd3be15f03187ac5c3544a86ec"
  },
  {
    "url": "base/series/9.sunburst.html",
    "revision": "7ede705b7ada51d690e96d120d1a810e"
  },
  {
    "url": "dll/vendor.dll.js",
    "revision": "77ea1c5a8d507974145255fa737e305a"
  },
  {
    "url": "home.png",
    "revision": "942fc478c6acbd2a3cc543c584cf258a"
  },
  {
    "url": "index.html",
    "revision": "6f23029af92c77afb037fa28d4df76b9"
  },
  {
    "url": "mock/http.js",
    "revision": "a219140640bec4dfbe8f4fe88d351ed8"
  },
  {
    "url": "senior/1.micro/1.index.html",
    "revision": "af32a8732108faa05e23501c0954a5bb"
  },
  {
    "url": "senior/1.micro/1.singlespa.html",
    "revision": "1195ed4f075f579be5ee0be201e623ae"
  },
  {
    "url": "senior/1.micro/1.singlespa2.html",
    "revision": "3a184c1107b749d8942f65fc3d78ae18"
  },
  {
    "url": "senior/1.micro/2.qiankun.html",
    "revision": "6097aea1f60f2fc7822d0e87c83f6a63"
  },
  {
    "url": "senior/1.micro/2.qiankun2.html",
    "revision": "2d50e2fba3049e783710e83950f67c08"
  },
  {
    "url": "senior/1.micro/3.share.html",
    "revision": "ff1f55580e6c8fef602f63d5c6054851"
  },
  {
    "url": "senior/1.micro/4.dev.html",
    "revision": "46697cdbe6c3e1c89deba85fb5c6f313"
  },
  {
    "url": "senior/2.typescript/1.env.html",
    "revision": "3b89db7a2d4376fee28cb91e62be3fa4"
  },
  {
    "url": "senior/2.typescript/1.index.html",
    "revision": "6d39e04fa0d21585d2f7b7d30e596548"
  },
  {
    "url": "senior/2.typescript/10.infer.html",
    "revision": "f2292c83c9833c278effe7ed2fe6cce9"
  },
  {
    "url": "senior/2.typescript/11.overlapping.html",
    "revision": "8f36089ccdfef8bb8e425074267c7f7f"
  },
  {
    "url": "senior/2.typescript/12.condition.html",
    "revision": "7549439523d9788d4dca24d85e12ff62"
  },
  {
    "url": "senior/2.typescript/13.builtin.html",
    "revision": "a9fb049692933837dbfab2ddacdd5d6c"
  },
  {
    "url": "senior/2.typescript/14.package.html",
    "revision": "85482045510674ca4289b5c831e7bc5c"
  },
  {
    "url": "senior/2.typescript/15.custom.html",
    "revision": "662c5e29f9d0f553758e2660721e5be4"
  },
  {
    "url": "senior/2.typescript/16.unknown.html",
    "revision": "7c5dca61369d8bcdb00baa4f3ee3a0f7"
  },
  {
    "url": "senior/2.typescript/17.module.html",
    "revision": "9bf565bf990912bb6519fe7b700a5a2e"
  },
  {
    "url": "senior/2.typescript/18.statement.html",
    "revision": "091037d5621b5dce1b24ccbbdedc071d"
  },
  {
    "url": "senior/2.typescript/19.extend.html",
    "revision": "55327296b4bc1c594e60261dec3d861d"
  },
  {
    "url": "senior/2.typescript/2.base.html",
    "revision": "9dadd08803440e531a1795faf886d81a"
  },
  {
    "url": "senior/2.typescript/3.deduction.html",
    "revision": "4cd6de4cc4fce983e5111d7ffc4a605a"
  },
  {
    "url": "senior/2.typescript/4.type.html",
    "revision": "7389dec48035187c89c9ee0b815668aa"
  },
  {
    "url": "senior/2.typescript/5.class.html",
    "revision": "118ed4dc7098bfb66ab6e4c5530ed834"
  },
  {
    "url": "senior/2.typescript/6.interface.html",
    "revision": "d2384fa028e89105050ae0e35837455c"
  },
  {
    "url": "senior/2.typescript/7.generic.html",
    "revision": "5b88e9e0501f53855ccf438366a67813"
  },
  {
    "url": "senior/2.typescript/8.compatible.html",
    "revision": "cc79f971020a203f6339f49c7b16fdfa"
  },
  {
    "url": "senior/2.typescript/9.protect.html",
    "revision": "0d18777cf8f4eec75351dbb6b5249a3c"
  },
  {
    "url": "senior/3.deploy/1.index.html",
    "revision": "e321272ed9013a15758fcff3e751f751"
  },
  {
    "url": "senior/3.deploy/1.local.html",
    "revision": "8563c7807aa3d80b769fd04bd47c0508"
  },
  {
    "url": "senior/3.deploy/2.gitlab.html",
    "revision": "95c91d87441ccf3e4e9f334dc903d2dd"
  },
  {
    "url": "senior/3.deploy/3.genkins.html",
    "revision": "425ea221b5d6848a543b7dfafbc9e257"
  },
  {
    "url": "senior/3.deploy/4.centos.html",
    "revision": "90cd86cb161a54f366fe07e5094719a4"
  },
  {
    "url": "senior/3.deploy/5.nginx.html",
    "revision": "8ff3324d29a839498295d11440cdab32"
  },
  {
    "url": "senior/4.component/1.button.html",
    "revision": "4089331e7d42eed88c22b9388fd06034"
  },
  {
    "url": "senior/4.component/1.env.html",
    "revision": "3691697f32e9e79279edff446cfb5ef3"
  },
  {
    "url": "senior/4.component/1.index.html",
    "revision": "a8d1ec81ce46a63e75ea6cbae4d9f931"
  },
  {
    "url": "senior/4.component/1.recursion.html",
    "revision": "c363ff4e9443dba60e6408952c92e03b"
  },
  {
    "url": "senior/4.component/10.tree.html",
    "revision": "70037570f1fdbb6aea69c3665f5a0f20"
  },
  {
    "url": "senior/4.component/12.table.html",
    "revision": "ee521442cc23b5d18b885c31f387d7a1"
  },
  {
    "url": "senior/4.component/13.publish.html",
    "revision": "8fad8c62c6556af3146f88089811c3a6"
  },
  {
    "url": "senior/4.component/2.dropdown.html",
    "revision": "792db237f3c89dc46e401d668e01c649"
  },
  {
    "url": "senior/4.component/3.dialog.html",
    "revision": "5631e6c8c77bc44c440b28684de78830"
  },
  {
    "url": "senior/4.component/3.form.html",
    "revision": "cd2ca2dd215045213de6de23de4e404b"
  },
  {
    "url": "senior/4.component/4.input.html",
    "revision": "16eacc6650438b4f9d8c38a02a02e8a1"
  },
  {
    "url": "senior/4.component/4.render.html",
    "revision": "7e3debb4b5f984a2ce2dd5c7e474bac7"
  },
  {
    "url": "senior/4.component/5.checkBox.html",
    "revision": "c2b753348e72c3f1898a26648b67971a"
  },
  {
    "url": "senior/4.component/6.cascader.html",
    "revision": "ffefc41f9d683cf1b756a36471fa9377"
  },
  {
    "url": "senior/4.component/7.date.html",
    "revision": "364facd32b846591ac80c01399229a7b"
  },
  {
    "url": "senior/4.component/8.dispaly.html",
    "revision": "e70b641c5e32235269f9f1978d2816f3"
  },
  {
    "url": "senior/4.component/9.alert.html",
    "revision": "c466e1237838af635af32524ea01723d"
  },
  {
    "url": "senior/4.component/9.dynamics.html",
    "revision": "f85ebdb2d41fbfb48f9da2d6f6fd09d9"
  },
  {
    "url": "source/vue-cli2.x/1.index.html",
    "revision": "dd43570a58b981aacb48767236cb32f1"
  },
  {
    "url": "source/vue-cli3.x/1.index.html",
    "revision": "0e8c3378aa6e84437b3acd222a92046e"
  },
  {
    "url": "source/vue-router3.x/1.index.html",
    "revision": "c9b90f529c7135a48fca1f136aa137c1"
  },
  {
    "url": "source/vue-router3.x/2.origin.html",
    "revision": "00ba7a874abfc8f26b2a4cd1891d4c85"
  },
  {
    "url": "source/vue-router4.x/1.index.html",
    "revision": "d7fbe68c73a6fc279116462dbe9d8772"
  },
  {
    "url": "source/vue2.x/1.index.html",
    "revision": "e5f78d7e0f93a8f1a5da704caf2a5c8b"
  },
  {
    "url": "source/vue2.x/10.optimize.html",
    "revision": "44d8f509b56c767ef3d99e9e77378956"
  },
  {
    "url": "source/vue2.x/11.gencode.html",
    "revision": "81eecb477272c4046a80695cd969bc41"
  },
  {
    "url": "source/vue2.x/12.mount.html",
    "revision": "c0d58e5448ce1f7288f333ce021a61ee"
  },
  {
    "url": "source/vue2.x/13._render.html",
    "revision": "e952ed0d30778fd0196e42c740f4f82f"
  },
  {
    "url": "source/vue2.x/14._update.html",
    "revision": "b81563708a319885faaec61fb0344661"
  },
  {
    "url": "source/vue2.x/2.initGlobalAPI.html",
    "revision": "a3d1e56ce7aaf552144cec2255c4b56f"
  },
  {
    "url": "source/vue2.x/3.initMixin.html",
    "revision": "57c73ecd88bc7002e717ff8c48f0e302"
  },
  {
    "url": "source/vue2.x/4.stateMixin.html",
    "revision": "f3b3f20a15750dfa4b08c86c08a1091f"
  },
  {
    "url": "source/vue2.x/5.eventsMixin.html",
    "revision": "891b9500ccf9c3030db90538af49670f"
  },
  {
    "url": "source/vue2.x/6.lifecycleMixin.html",
    "revision": "db035f71246be8f4220fe155dcd9f326"
  },
  {
    "url": "source/vue2.x/7.renderMixin.html",
    "revision": "300ee196962dcee9fa08e37b4942dae7"
  },
  {
    "url": "source/vue2.x/8.mount.html",
    "revision": "d2384c3babc04fd8ae3323e6614bc484"
  },
  {
    "url": "source/vue2.x/9.ast.html",
    "revision": "75d5c5ebc966219f73c3996254758c97"
  },
  {
    "url": "source/vue3.x/1.index.html",
    "revision": "4a3f4bab9c6f3245de320ca8395da227"
  },
  {
    "url": "source/vue3.x/10.optimize.html",
    "revision": "0339069fc814dc027fb0fbf9238ecf3b"
  },
  {
    "url": "source/vue3.x/11.gencode.html",
    "revision": "73e3cc9120a8091fb52c38a237291004"
  },
  {
    "url": "source/vue3.x/12.mount.html",
    "revision": "2cfc3d72dae62010965544022fca269c"
  },
  {
    "url": "source/vue3.x/13._render.html",
    "revision": "c04c6cd4303a8e22b12d553b26f80ca6"
  },
  {
    "url": "source/vue3.x/14._update.html",
    "revision": "87832cac01dbc6a74007adbd65caa3a9"
  },
  {
    "url": "source/vue3.x/2.initGlobalAPI.html",
    "revision": "80bc3554b98fb3df92046201ef2d56ba"
  },
  {
    "url": "source/vue3.x/3.initMixin.html",
    "revision": "0bf6f27b2e40dca97eeaea3b5ae31bbf"
  },
  {
    "url": "source/vue3.x/4.stateMixin.html",
    "revision": "60e1a7e465310572aec75ad125a68a98"
  },
  {
    "url": "source/vue3.x/5.eventsMixin.html",
    "revision": "39f5d6238e2e007d1525be543f64be29"
  },
  {
    "url": "source/vue3.x/6.lifecycleMixin.html",
    "revision": "3a4c20bb47acdccfb9aa0ecf27719f7b"
  },
  {
    "url": "source/vue3.x/7.renderMixin.html",
    "revision": "3f4ab827a79aaf1a026783841dc5b988"
  },
  {
    "url": "source/vue3.x/8.mount.html",
    "revision": "f3d851dc1ba63bc9e702d59ca6354444"
  },
  {
    "url": "source/vue3.x/9.ast.html",
    "revision": "344c1191ff52300855d22d90bf46a521"
  },
  {
    "url": "source/vuex3.x/1.index.html",
    "revision": "4e7e0fdf90df60d328a2bc633788129c"
  },
  {
    "url": "source/vuex3.x/2.use.html",
    "revision": "a45ce76bfc6f5b54ecc86d0ff2c08f55"
  },
  {
    "url": "source/vuex3.x/3.origin.html",
    "revision": "d4b4c8c8bb18a26e6aa54d8c623b3053"
  },
  {
    "url": "source/vuex4.x/1.index.html",
    "revision": "83896382b9bdf6030a73c2051d884458"
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
