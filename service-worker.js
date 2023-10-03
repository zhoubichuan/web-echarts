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
    "revision": "441fe3e32646302e46f36e78dd795aa4"
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
    "url": "assets/js/10.aa88bbfc.js",
    "revision": "ff69d252bc3a2d45d0c8a2dc5d70e3af"
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
    "url": "assets/js/11.75974cf7.js",
    "revision": "65b913c2a23bea116e0c995d2c7dad75"
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
    "url": "assets/js/12.22f64658.js",
    "revision": "a8acc635c2a970cec2126ef37bfa6e9b"
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
    "url": "assets/js/124.73793968.js",
    "revision": "2181b790509b88fc541e05380057e17a"
  },
  {
    "url": "assets/js/125.f2f8f23c.js",
    "revision": "18c2e01b550f13b52c2e59893b546e79"
  },
  {
    "url": "assets/js/126.20e5a32b.js",
    "revision": "98641c0c82689eb6e543812882e7c198"
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
    "url": "assets/js/13.59c13724.js",
    "revision": "e0b7c12f5fcbfe722da62d33b1884881"
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
    "url": "assets/js/15.2b6c1d6c.js",
    "revision": "4cf490a64de1b09bda29daec75daf614"
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
    "url": "assets/js/16.d44f16af.js",
    "revision": "b74fcda4bd8fc272212806abe4ea4492"
  },
  {
    "url": "assets/js/17.867e7f97.js",
    "revision": "eaf87db408aa1a624f0549828a75bc25"
  },
  {
    "url": "assets/js/18.a483e9c8.js",
    "revision": "f4b12a99649d922f40384fcfe2b3323f"
  },
  {
    "url": "assets/js/19.4a3f4a51.js",
    "revision": "50175aa590aa96b63bd8ee16032277e9"
  },
  {
    "url": "assets/js/2.a9b66600.js",
    "revision": "cb58ae1a9b19fdc7ee385ce95b9e96c5"
  },
  {
    "url": "assets/js/20.5bc8b416.js",
    "revision": "9bccb4ef1203a485a20fa77090206c61"
  },
  {
    "url": "assets/js/21.c20c31bb.js",
    "revision": "fae2a5c52f4e1fd5e12839df1a4c277d"
  },
  {
    "url": "assets/js/22.b6b5d4c3.js",
    "revision": "d803a27ca15047e016810c6e04c754d4"
  },
  {
    "url": "assets/js/23.a17b6bf8.js",
    "revision": "3439f68f2e7facc54b0ddd285e007647"
  },
  {
    "url": "assets/js/24.323917fe.js",
    "revision": "eb023ff9a2fe86ce9292983d5216e21c"
  },
  {
    "url": "assets/js/25.20e2faae.js",
    "revision": "d33ec62c84cca84ac9af4bf728fe9fb5"
  },
  {
    "url": "assets/js/26.8ec5b377.js",
    "revision": "314dc4ae06237a770eb20476bc7a49fd"
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
    "url": "assets/js/31.05efa21b.js",
    "revision": "b9de556fbbdef9a77c73cb8dc2c40955"
  },
  {
    "url": "assets/js/32.e6bbcd56.js",
    "revision": "0cadb10ef1e75ea1b50e42784d7b9a96"
  },
  {
    "url": "assets/js/33.0c2ab935.js",
    "revision": "8c6b0bcea09cf22e6616610b8a88f301"
  },
  {
    "url": "assets/js/34.09ffdee9.js",
    "revision": "95c8589770e1eebe0bbc139a39e54c28"
  },
  {
    "url": "assets/js/35.e8680f21.js",
    "revision": "064a4ad0158893615c6414617201039d"
  },
  {
    "url": "assets/js/36.4807bbf5.js",
    "revision": "7a44ac0e43484eee7adb7563063d4406"
  },
  {
    "url": "assets/js/37.b8b58358.js",
    "revision": "baf4c6ad17b5b9068bba41775c9c7c75"
  },
  {
    "url": "assets/js/38.4c512a63.js",
    "revision": "2117176e518ec606ffaa8bb7b0cb0cbf"
  },
  {
    "url": "assets/js/39.e12e614a.js",
    "revision": "53a1f10da1b2453942057c7c1087fd1c"
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
    "url": "assets/js/45.1015bd33.js",
    "revision": "ccb5e69d9ef30bc0845e07333f54e0a9"
  },
  {
    "url": "assets/js/46.69243e0f.js",
    "revision": "a3241a83c0080ce7b3736e25c4c59e36"
  },
  {
    "url": "assets/js/47.bf057f4f.js",
    "revision": "1b442b0443c1c0f5489e9a809297cc30"
  },
  {
    "url": "assets/js/48.03ac9281.js",
    "revision": "4fa10615ad912528c90d0277099fa9ae"
  },
  {
    "url": "assets/js/49.86476745.js",
    "revision": "061de6d2a72b48e7804b458ffa0968d5"
  },
  {
    "url": "assets/js/5.a27c8aed.js",
    "revision": "a8cb624ce82b3cbd5eea46ad1396febd"
  },
  {
    "url": "assets/js/50.aecc5677.js",
    "revision": "dc78e9529c6f9c7eb96808d6c84f804b"
  },
  {
    "url": "assets/js/51.0c64eb4d.js",
    "revision": "4f9f18c378423b2c0cae3b7d502b1ecc"
  },
  {
    "url": "assets/js/52.429ad998.js",
    "revision": "0f1b4a61d30fb7c4414582bc2f1786c4"
  },
  {
    "url": "assets/js/53.214ec587.js",
    "revision": "a6119e48c826d353db8d67c58f0c2652"
  },
  {
    "url": "assets/js/54.cc579c3b.js",
    "revision": "b5ec4657c3ef128bb9e014903dc685e8"
  },
  {
    "url": "assets/js/55.7a069985.js",
    "revision": "663149688afad1c7a050dd22010bef67"
  },
  {
    "url": "assets/js/56.43b6b503.js",
    "revision": "27184e8367d042da58c0b95675b5dca7"
  },
  {
    "url": "assets/js/57.b0243536.js",
    "revision": "80027427ffe5f8f0ca78b6047e00764b"
  },
  {
    "url": "assets/js/58.fc19edc0.js",
    "revision": "06c808656d096aa180416090101b9a85"
  },
  {
    "url": "assets/js/59.b62db886.js",
    "revision": "bc6ec020545704a69846ec38af3b0a0a"
  },
  {
    "url": "assets/js/6.dd30f460.js",
    "revision": "329d46b754bc2eee7361c53a43948678"
  },
  {
    "url": "assets/js/60.803b23f2.js",
    "revision": "57618406f982a4d60bb1f6231bc01b81"
  },
  {
    "url": "assets/js/61.f471dce6.js",
    "revision": "1cce887689749707cd82890b8311b50c"
  },
  {
    "url": "assets/js/62.14712629.js",
    "revision": "be69bbb5a36e0f04a055ea7d0103d8f4"
  },
  {
    "url": "assets/js/63.ecab23f6.js",
    "revision": "80e6b345fac99789326fa9cb50fa6748"
  },
  {
    "url": "assets/js/64.e72828ba.js",
    "revision": "9fa523835be65c2aab8d9c7ed1339c84"
  },
  {
    "url": "assets/js/65.90118252.js",
    "revision": "3b51e172efe4bdf9ab3f596e4863cf41"
  },
  {
    "url": "assets/js/66.23fd8002.js",
    "revision": "0efdda5bf37a90cd46e5236e01dbbbb4"
  },
  {
    "url": "assets/js/67.47d3bddd.js",
    "revision": "febf44d41ea45f15fbe3b83341f327a2"
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
    "url": "assets/js/76.783c0177.js",
    "revision": "50d265b21d882bf6fcfe5e387b0a0e92"
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
    "revision": "d8efb0139016fd8d7673683a5bf5d22c"
  },
  {
    "url": "base/api/1.index.html",
    "revision": "007a836818a9beb08b1cc5783b938f25"
  },
  {
    "url": "base/api/2.echartsInstance.html",
    "revision": "158b6fb3044bcdc368cac23747e04f84"
  },
  {
    "url": "base/api/3.action.html",
    "revision": "8111888609d178f0a38d1a6b86653465"
  },
  {
    "url": "base/api/4.events.html",
    "revision": "6ecefb3626c4ab62800b9db35f9fda7e"
  },
  {
    "url": "base/components/1.index.html",
    "revision": "18f992f03bab915612bfe60b68418dea"
  },
  {
    "url": "base/components/1.legend.html",
    "revision": "4f06a819fa54aa9c7f97b88828680acd"
  },
  {
    "url": "base/components/2.grid.html",
    "revision": "0b197473b7b9e4cf527258caaffcb8d1"
  },
  {
    "url": "base/components/2.polar.html",
    "revision": "f48c8579dcfa52c4c91675b5b53fe799"
  },
  {
    "url": "base/components/2.radiusAxis.html",
    "revision": "4d646750b230c700574cbfbb9300b7f6"
  },
  {
    "url": "base/components/2.xAxis.html",
    "revision": "95c63737feb50fbc454c733470b1c4af"
  },
  {
    "url": "base/components/2.yAxis.html",
    "revision": "06ad2d5ad821055075f9c7faff26ff6f"
  },
  {
    "url": "base/components/3.angleAxis.html",
    "revision": "c376d1509d03d84723ebab630f5e2740"
  },
  {
    "url": "base/components/4.radar.html",
    "revision": "d13ed3ff42b820b95f4ae8106635ba79"
  },
  {
    "url": "base/components/5.dataZoom.html",
    "revision": "a230a4132ab6e06ccd4a0fa44dfdfddf"
  },
  {
    "url": "base/components/6.visualMap.html",
    "revision": "1fe62a271e8f177fe9448b81bc8db84b"
  },
  {
    "url": "base/components/7.tooltip.html",
    "revision": "0b38eb6733fba23aa4474b9cb1459f94"
  },
  {
    "url": "base/components/8.geo.html",
    "revision": "2a186d31445fd9046e6d9f1b7da736c7"
  },
  {
    "url": "base/gl/1.index.html",
    "revision": "0651ab8ac448695a6026c9f009206f48"
  },
  {
    "url": "base/gl/1.scatter3D.html",
    "revision": "98b74f06d4b1d4c2ae9024ef72247521"
  },
  {
    "url": "base/gl/10.flowGL.html",
    "revision": "c92c4cb2178b9a366a6a6a9bb9aa854a"
  },
  {
    "url": "base/gl/2.bar3D.html",
    "revision": "88521e34511e3138e71cd39d5180a1ca"
  },
  {
    "url": "base/gl/3.line3D.html",
    "revision": "f42cb4fc76c69ffa3f208d43d4fea959"
  },
  {
    "url": "base/gl/4.lines3D.html",
    "revision": "4bffb44e5418236078ce4f880629dcfe"
  },
  {
    "url": "base/gl/5.map3D.html",
    "revision": "46a153f20bb381d80020566fb85ce7ea"
  },
  {
    "url": "base/gl/6.surface.html",
    "revision": "e7654678c244bd779b88df54e28e15df"
  },
  {
    "url": "base/gl/7.polygons3D.html",
    "revision": "dc0868db11b4a511a8cc3664e6d86e0b"
  },
  {
    "url": "base/gl/8.scatterGL.html",
    "revision": "bd42a2c5d19d9a328b56415f46642c36"
  },
  {
    "url": "base/gl/9.graphGL.html",
    "revision": "b27990fa1442bf427e92e02efac7bec2"
  },
  {
    "url": "base/series/1.index.html",
    "revision": "9ade7dd0f6923d8905e7cc23c0a909e9"
  },
  {
    "url": "base/series/1.line.html",
    "revision": "96341951158c124ebba9523f212ed33c"
  },
  {
    "url": "base/series/10.boxplot.html",
    "revision": "429c25e563eff1820e3cbfd3566ad7f0"
  },
  {
    "url": "base/series/11.candlestick.html",
    "revision": "6de97da3bf45f361c998ae62d0781bd8"
  },
  {
    "url": "base/series/12.heatmap.html",
    "revision": "111cbd134930236731d20ee90ca074f5"
  },
  {
    "url": "base/series/13.map.html",
    "revision": "1f12c2df86ffe3f99d3c00e66eeaf271"
  },
  {
    "url": "base/series/14.parallel.html",
    "revision": "04359f663e58534929b5d88e23c0c0bc"
  },
  {
    "url": "base/series/15.lines.html",
    "revision": "4d1e0d50e7729d45cb1fbe20d9e3fce3"
  },
  {
    "url": "base/series/16.graph.html",
    "revision": "a9e57b9a005a92ba3874eb55e329de05"
  },
  {
    "url": "base/series/17.sankey.html",
    "revision": "ab8c33599b6ded04e094b07fca898256"
  },
  {
    "url": "base/series/18.funnel.html",
    "revision": "98cbbc73e3c4e0bb8d4ebb925fd38eb7"
  },
  {
    "url": "base/series/19.gauge.html",
    "revision": "110f2ce69e8c3e32f47ff0a16ebf7618"
  },
  {
    "url": "base/series/2.bar.html",
    "revision": "fd4ae6dee009f0c4faf1a6c75f80813d"
  },
  {
    "url": "base/series/20.pictorialBar.html",
    "revision": "31c5d276f0fdfcd8e79c4c3749a48514"
  },
  {
    "url": "base/series/21.themeRiver.html",
    "revision": "0cfdb499c23e42cd9061a247181aaabe"
  },
  {
    "url": "base/series/22.custom.html",
    "revision": "a1267c8225c0016f6095349fdbf467ed"
  },
  {
    "url": "base/series/3.pie.html",
    "revision": "7ea14b05e62158cfd30a7d0ba42426c6"
  },
  {
    "url": "base/series/4.scatter.html",
    "revision": "0a57662e75b7310065c2f15933d4c7ca"
  },
  {
    "url": "base/series/5.effectScatter.html",
    "revision": "646eab32486b2c0e3ab68ced7fd9c2df"
  },
  {
    "url": "base/series/6.radar.html",
    "revision": "ce77416fa1a8ea46e2344aaa3d16cf39"
  },
  {
    "url": "base/series/7.tree.html",
    "revision": "5bcfb0730928ba53c2d22f43c54fdfb4"
  },
  {
    "url": "base/series/8.treemap.html",
    "revision": "618129fada5cde940ad6169f50965b5e"
  },
  {
    "url": "base/series/9.sunburst.html",
    "revision": "056ce52f6bc68a1f6108676aaec9af27"
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
    "revision": "9a2aa95f2cf53329354698d6ab433a09"
  },
  {
    "url": "mock/http.js",
    "revision": "a219140640bec4dfbe8f4fe88d351ed8"
  },
  {
    "url": "senior/1.micro/1.index.html",
    "revision": "90b1a76b4064a26dcc350a0b717f10f0"
  },
  {
    "url": "senior/1.micro/1.singlespa.html",
    "revision": "19694b6ff45853d308d9ad69a1bea7bb"
  },
  {
    "url": "senior/1.micro/1.singlespa2.html",
    "revision": "3ff647c88b06ae2692b37cf6cdb3a5fe"
  },
  {
    "url": "senior/1.micro/2.qiankun.html",
    "revision": "bbe4853b914f96ff20baac3e6a12c41b"
  },
  {
    "url": "senior/1.micro/2.qiankun2.html",
    "revision": "b30d083345adf803e9025852e7179d0e"
  },
  {
    "url": "senior/1.micro/3.share.html",
    "revision": "1caf156e23b8cce984ecf6d836dd4196"
  },
  {
    "url": "senior/1.micro/4.dev.html",
    "revision": "58daea76ad35eb80905a740532b8d243"
  },
  {
    "url": "senior/2.typescript/1.env.html",
    "revision": "e8bb904263ef727184cf1627eab0ee60"
  },
  {
    "url": "senior/2.typescript/1.index.html",
    "revision": "6c1a3db4a1b93748389238c3ffb785ed"
  },
  {
    "url": "senior/2.typescript/10.infer.html",
    "revision": "774ad2b0d06c31cf62316a655f8defed"
  },
  {
    "url": "senior/2.typescript/11.overlapping.html",
    "revision": "1912efbc855069e73385dbefe9b1e8ba"
  },
  {
    "url": "senior/2.typescript/12.condition.html",
    "revision": "404287fe4717b80fefc9735e128e1fe8"
  },
  {
    "url": "senior/2.typescript/13.builtin.html",
    "revision": "13503429e426109f1c285b02b6fd39cf"
  },
  {
    "url": "senior/2.typescript/14.package.html",
    "revision": "b38f25304b5c9228fa62024d7e7179c5"
  },
  {
    "url": "senior/2.typescript/15.custom.html",
    "revision": "6b201447ea0f6d4735e527c0c52958a2"
  },
  {
    "url": "senior/2.typescript/16.unknown.html",
    "revision": "b0ccf6b33b7e415f9a5775696cbc170e"
  },
  {
    "url": "senior/2.typescript/17.module.html",
    "revision": "af66f77089ec111d68fdcfd0f547976b"
  },
  {
    "url": "senior/2.typescript/18.statement.html",
    "revision": "d5c698132e422a71c495a51840a6fb5b"
  },
  {
    "url": "senior/2.typescript/19.extend.html",
    "revision": "2f871e75a7a238ffc8703d6a838f86a6"
  },
  {
    "url": "senior/2.typescript/2.base.html",
    "revision": "89829b7cee768b422b9ceff247795dda"
  },
  {
    "url": "senior/2.typescript/3.deduction.html",
    "revision": "3e049f875103b468ade5c4257e092b7e"
  },
  {
    "url": "senior/2.typescript/4.type.html",
    "revision": "f8a0822a9c1ff5964872dc58c061d970"
  },
  {
    "url": "senior/2.typescript/5.class.html",
    "revision": "f643948403724418b77c03e958d46f8f"
  },
  {
    "url": "senior/2.typescript/6.interface.html",
    "revision": "ef3212d50ab5fbf529857a6814341ed4"
  },
  {
    "url": "senior/2.typescript/7.generic.html",
    "revision": "d36122b0773f5cb1c7a595a515463c11"
  },
  {
    "url": "senior/2.typescript/8.compatible.html",
    "revision": "82e46fad58f6abefc23ab2b23bf252a0"
  },
  {
    "url": "senior/2.typescript/9.protect.html",
    "revision": "e7f1a4cdc39744a8f11d61273a337a3c"
  },
  {
    "url": "senior/3.deploy/1.index.html",
    "revision": "d09942eedc693dcf2361ab14a7c10793"
  },
  {
    "url": "senior/3.deploy/1.local.html",
    "revision": "621ffad7057780b43f672c59d43bf006"
  },
  {
    "url": "senior/3.deploy/2.gitlab.html",
    "revision": "feb12add9a0557a1d36d748acf2dbacb"
  },
  {
    "url": "senior/3.deploy/3.genkins.html",
    "revision": "f850b6cc6d62cdf48334306548cbfd73"
  },
  {
    "url": "senior/3.deploy/4.centos.html",
    "revision": "2b0dd9bc6d1f02c3b0c673ad617e65d4"
  },
  {
    "url": "senior/3.deploy/5.nginx.html",
    "revision": "6487dea14a7a59e9926c50db77b14dc5"
  },
  {
    "url": "senior/4.component/1.button.html",
    "revision": "dff8df144ac90193079e6a2d11124dde"
  },
  {
    "url": "senior/4.component/1.env.html",
    "revision": "4b9990b0078994743b0b5ad0d4fb2231"
  },
  {
    "url": "senior/4.component/1.index.html",
    "revision": "cb6db0a6abcae9ee4b92204069b7f55c"
  },
  {
    "url": "senior/4.component/1.recursion.html",
    "revision": "ab0047bfaa714c8e8c31c8e09ed4767e"
  },
  {
    "url": "senior/4.component/10.tree.html",
    "revision": "708d1da3a8fd675af39e5bed50765b42"
  },
  {
    "url": "senior/4.component/12.table.html",
    "revision": "1d24182e244cf0e60c7377ae3a360043"
  },
  {
    "url": "senior/4.component/13.publish.html",
    "revision": "3d20fa784db4238a190bec2dec0802b4"
  },
  {
    "url": "senior/4.component/2.dropdown.html",
    "revision": "9217a7fb49b3f3ed6671a7df9fff9f47"
  },
  {
    "url": "senior/4.component/3.dialog.html",
    "revision": "1075a1261305ebc54d548f5603931c66"
  },
  {
    "url": "senior/4.component/3.form.html",
    "revision": "d86dd357a30a5a5dd24b2c5ad652e3d9"
  },
  {
    "url": "senior/4.component/4.input.html",
    "revision": "4802f8bfec5b338a6649f718fcca0e5e"
  },
  {
    "url": "senior/4.component/4.render.html",
    "revision": "fed453fd1386d1c1261aa53f5b5ff50c"
  },
  {
    "url": "senior/4.component/5.checkBox.html",
    "revision": "ce7a6ea613d3d77ab29b4d26c883e245"
  },
  {
    "url": "senior/4.component/6.cascader.html",
    "revision": "b10bbac6b2ab4822148c7e7dcd5f4d13"
  },
  {
    "url": "senior/4.component/7.date.html",
    "revision": "6efa32f8b81ea2fcd1049644a57ad5ac"
  },
  {
    "url": "senior/4.component/8.dispaly.html",
    "revision": "f918bb933d2d71764e1eef4cab6b9d9d"
  },
  {
    "url": "senior/4.component/9.alert.html",
    "revision": "58e34a87e61b239ad13530a4ec1823cd"
  },
  {
    "url": "senior/4.component/9.dynamics.html",
    "revision": "0ad7afaba87d1e85ca5811e430e74b06"
  },
  {
    "url": "source/vue-cli2.x/1.index.html",
    "revision": "ccd30c92daf8d6d527c8b047252c5402"
  },
  {
    "url": "source/vue-cli3.x/1.index.html",
    "revision": "32cebf6f20e8db06c6da9c0b43fd5f5a"
  },
  {
    "url": "source/vue-router3.x/1.index.html",
    "revision": "cea1fe1c96d40e9f9415ceac72668a23"
  },
  {
    "url": "source/vue-router3.x/2.origin.html",
    "revision": "44a667cf397743c2ded6816a73aa9349"
  },
  {
    "url": "source/vue-router4.x/1.index.html",
    "revision": "56d631ae3ecaf64867df6cf281dab457"
  },
  {
    "url": "source/vue2.x/1.index.html",
    "revision": "8da4aa53f4968980f310191ba577afbe"
  },
  {
    "url": "source/vue2.x/10.optimize.html",
    "revision": "6f8898d5922f63186c53507f43e6be19"
  },
  {
    "url": "source/vue2.x/11.gencode.html",
    "revision": "ee236e4be10256c45684093b249d2893"
  },
  {
    "url": "source/vue2.x/12.mount.html",
    "revision": "900cfc6eccb6a747fbb3322cf30394c3"
  },
  {
    "url": "source/vue2.x/13._render.html",
    "revision": "cafb2ac78cf835434d1aa95d66f5bd74"
  },
  {
    "url": "source/vue2.x/14._update.html",
    "revision": "b7de855332118d9e31d52e3a3ba6f678"
  },
  {
    "url": "source/vue2.x/2.initGlobalAPI.html",
    "revision": "575be828deeb474d0ad5aeb7a1b98e38"
  },
  {
    "url": "source/vue2.x/3.initMixin.html",
    "revision": "30d5293c03c16257cade72a6e1975506"
  },
  {
    "url": "source/vue2.x/4.stateMixin.html",
    "revision": "bb7db0b1eef274597a289951f516211d"
  },
  {
    "url": "source/vue2.x/5.eventsMixin.html",
    "revision": "2d0001f35bb2d7a84a83e87b7fefb4ee"
  },
  {
    "url": "source/vue2.x/6.lifecycleMixin.html",
    "revision": "ac97be24fab461188ca41cc44d7a091d"
  },
  {
    "url": "source/vue2.x/7.renderMixin.html",
    "revision": "8e6084e9e3dc5ec80628807e3635d52a"
  },
  {
    "url": "source/vue2.x/8.mount.html",
    "revision": "129965d574038ada80255fbf34428ab6"
  },
  {
    "url": "source/vue2.x/9.ast.html",
    "revision": "e4a8d28ff4725496f7a2cec97bad00f0"
  },
  {
    "url": "source/vue3.x/1.index.html",
    "revision": "cd186801ae3f79c787938d2bc3876570"
  },
  {
    "url": "source/vue3.x/10.optimize.html",
    "revision": "12a24430cf86a7412ac506f2d116c8d1"
  },
  {
    "url": "source/vue3.x/11.gencode.html",
    "revision": "cca4e1f5644b1e74854b5f64550e1e81"
  },
  {
    "url": "source/vue3.x/12.mount.html",
    "revision": "9c03f1d3b59b412a36bf7d0a4374c346"
  },
  {
    "url": "source/vue3.x/13._render.html",
    "revision": "3897df557ad758f26db5b06f8531c5cb"
  },
  {
    "url": "source/vue3.x/14._update.html",
    "revision": "ff43bcb84766b36f8b4ab968da94e2a7"
  },
  {
    "url": "source/vue3.x/2.initGlobalAPI.html",
    "revision": "083160729241fa2dbd3751d83764bb46"
  },
  {
    "url": "source/vue3.x/3.initMixin.html",
    "revision": "d7024e72c15f706f351e79aef11bf47a"
  },
  {
    "url": "source/vue3.x/4.stateMixin.html",
    "revision": "e26b90900da90220094ba85190290974"
  },
  {
    "url": "source/vue3.x/5.eventsMixin.html",
    "revision": "307e07b05f1f2d3f0d417816c2085aff"
  },
  {
    "url": "source/vue3.x/6.lifecycleMixin.html",
    "revision": "22e96fcc8b272828c56ec07e79c20a99"
  },
  {
    "url": "source/vue3.x/7.renderMixin.html",
    "revision": "47cc94a0df181e0d85f3db3aa7b2224d"
  },
  {
    "url": "source/vue3.x/8.mount.html",
    "revision": "268221b903a3e7424505da07c32b50db"
  },
  {
    "url": "source/vue3.x/9.ast.html",
    "revision": "ed6072b63ce9b20708512bec3f19b415"
  },
  {
    "url": "source/vuex3.x/1.index.html",
    "revision": "1fb1014364056e1c7c90050fb2fa7933"
  },
  {
    "url": "source/vuex3.x/2.use.html",
    "revision": "95d8a2a04605218d580d24f87c98424f"
  },
  {
    "url": "source/vuex3.x/3.origin.html",
    "revision": "049aae8558ef17e4bcda351e5a34e446"
  },
  {
    "url": "source/vuex4.x/1.index.html",
    "revision": "4fbb7ad3cdb209230ba8489491582ba7"
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
