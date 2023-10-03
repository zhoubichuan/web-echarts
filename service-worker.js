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
    "revision": "9eb528dcca784088363e453c3011e57a"
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
    "url": "assets/js/50.a77b3683.js",
    "revision": "dbf9dea22e71667fa90ff70449d68df4"
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
    "revision": "3262fa9f1008a7b6e1c6f77d7b3f53ce"
  },
  {
    "url": "base/api/1.index.html",
    "revision": "1574f3d0924e37c769ba725aeb109b18"
  },
  {
    "url": "base/api/2.echartsInstance.html",
    "revision": "a25fe871cfe960194d3be8e85312eeda"
  },
  {
    "url": "base/api/3.action.html",
    "revision": "91159f518eb5c909a2bab37d054a6bb7"
  },
  {
    "url": "base/api/4.events.html",
    "revision": "4d489ce0294710800a522e61f457e2f5"
  },
  {
    "url": "base/components/1.index.html",
    "revision": "a5a4f301b7c532df734cc00b82ad3c51"
  },
  {
    "url": "base/components/1.legend.html",
    "revision": "a74895cb41778c77a97fd2c8c141b519"
  },
  {
    "url": "base/components/2.grid.html",
    "revision": "cc84b880260281b423dbd144fe449c26"
  },
  {
    "url": "base/components/2.polar.html",
    "revision": "0aa288791a4af241ce479579a18ec1ca"
  },
  {
    "url": "base/components/2.radiusAxis.html",
    "revision": "31f49b2e6a9f0a36b67a86c775496341"
  },
  {
    "url": "base/components/2.xAxis.html",
    "revision": "273190d41f7b60b3a7be84d7b37edb8f"
  },
  {
    "url": "base/components/2.yAxis.html",
    "revision": "97b60daba34ec1ec06a68da2c7738eb7"
  },
  {
    "url": "base/components/3.angleAxis.html",
    "revision": "4db5cc1c4345eb307999e4b8ad01f8ca"
  },
  {
    "url": "base/components/4.radar.html",
    "revision": "2ba10784909d6c600bef9d7a53081802"
  },
  {
    "url": "base/components/5.dataZoom.html",
    "revision": "b09f86a56cbe78e3841357d6805e8fb4"
  },
  {
    "url": "base/components/6.visualMap.html",
    "revision": "29a5cdee01f2e381311a0729328fb307"
  },
  {
    "url": "base/components/7.tooltip.html",
    "revision": "4fe9a2810c1da00ad4476e6229b7be1f"
  },
  {
    "url": "base/components/8.geo.html",
    "revision": "3b466920690d0f28a7fed89dae2167c8"
  },
  {
    "url": "base/gl/1.index.html",
    "revision": "c804c5358f3ebb913cd04f9b854b4606"
  },
  {
    "url": "base/gl/1.scatter3D.html",
    "revision": "19fd135a764aa7c256d0e05018949511"
  },
  {
    "url": "base/gl/10.flowGL.html",
    "revision": "41badeb641f1431b0c7ff29f60e85eb2"
  },
  {
    "url": "base/gl/2.bar3D.html",
    "revision": "c1052b076d746e5896c67957b099e61f"
  },
  {
    "url": "base/gl/3.line3D.html",
    "revision": "b59d4480c3cd6fbbba419a88c15766e1"
  },
  {
    "url": "base/gl/4.lines3D.html",
    "revision": "e730b9ed7c96811bf8f6cd01063c4182"
  },
  {
    "url": "base/gl/5.map3D.html",
    "revision": "27619a43e3cdd4e5249d9ab468a77206"
  },
  {
    "url": "base/gl/6.surface.html",
    "revision": "d24c498c9da67bce16d665e2c64b5b7a"
  },
  {
    "url": "base/gl/7.polygons3D.html",
    "revision": "f20dc70fe8048708ee95d41b2091cee6"
  },
  {
    "url": "base/gl/8.scatterGL.html",
    "revision": "885eec6f1a71fffdc3103cb00b5f7341"
  },
  {
    "url": "base/gl/9.graphGL.html",
    "revision": "a78410b18f8a363a4110b3b514f47f5b"
  },
  {
    "url": "base/series/1.index.html",
    "revision": "b0722004417d141fcc1deaa72bd4c3a6"
  },
  {
    "url": "base/series/1.line.html",
    "revision": "bb53c7cfd8d4ec95c93a4e3f330c2c61"
  },
  {
    "url": "base/series/10.boxplot.html",
    "revision": "92be4fcc889a1ff3bb3507b03975f967"
  },
  {
    "url": "base/series/11.candlestick.html",
    "revision": "43016943a0156a8eaf7884422dfcda85"
  },
  {
    "url": "base/series/12.heatmap.html",
    "revision": "e70b959d720e641c7653cc168b8c72e4"
  },
  {
    "url": "base/series/13.map.html",
    "revision": "8f5c3f8fb97508eb34cd94f7b2e9ab0c"
  },
  {
    "url": "base/series/14.parallel.html",
    "revision": "8c8393db20d8a155f6406ea979409117"
  },
  {
    "url": "base/series/15.lines.html",
    "revision": "9cf184eef8336799ed6e20c633dd4f6a"
  },
  {
    "url": "base/series/16.graph.html",
    "revision": "2d4144247985fee45b308a5ca86631ca"
  },
  {
    "url": "base/series/17.sankey.html",
    "revision": "12ea2e2e527cf7b00b701cd77e3e09d7"
  },
  {
    "url": "base/series/18.funnel.html",
    "revision": "31a5addbfbe7f4b444f566506a9ede3f"
  },
  {
    "url": "base/series/19.gauge.html",
    "revision": "13c1e276c8ecf1e47c68f9639838f61b"
  },
  {
    "url": "base/series/2.bar.html",
    "revision": "aa5aa47e9b4f95fff656baedef86390a"
  },
  {
    "url": "base/series/20.pictorialBar.html",
    "revision": "ab959d45f28e1a51964fc3629fb36f9f"
  },
  {
    "url": "base/series/21.themeRiver.html",
    "revision": "8265fe8f452076cd74b8bd6e07743458"
  },
  {
    "url": "base/series/22.custom.html",
    "revision": "b34de52402b40c70cc83e85f6d0db19e"
  },
  {
    "url": "base/series/3.pie.html",
    "revision": "68f6ef981486a88747c70cff61d31622"
  },
  {
    "url": "base/series/4.scatter.html",
    "revision": "0da8256e00f5f6d5c4404d4b143c1c60"
  },
  {
    "url": "base/series/5.effectScatter.html",
    "revision": "bd2c78d8aa46c6d9dc3ae9aa63fdd316"
  },
  {
    "url": "base/series/6.radar.html",
    "revision": "9167b4bed49afb494f7ff759554cfbce"
  },
  {
    "url": "base/series/7.tree.html",
    "revision": "c9d9023e62d0b1467226ad860ab95a8c"
  },
  {
    "url": "base/series/8.treemap.html",
    "revision": "0cb1e69dae6a2176f8bb467ff8b72fcd"
  },
  {
    "url": "base/series/9.sunburst.html",
    "revision": "339a7d04515c1f3aae289febb168b368"
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
    "revision": "2b10beac947f1c06811dff6f350b7856"
  },
  {
    "url": "mock/http.js",
    "revision": "a219140640bec4dfbe8f4fe88d351ed8"
  },
  {
    "url": "senior/1.micro/1.index.html",
    "revision": "d674ba70df0a51c525af6a36a2eab82d"
  },
  {
    "url": "senior/1.micro/1.singlespa.html",
    "revision": "206c68f0335b195337f94f87d2b5ad3e"
  },
  {
    "url": "senior/1.micro/1.singlespa2.html",
    "revision": "1e8229285f00a2e0832a52257ed4e663"
  },
  {
    "url": "senior/1.micro/2.qiankun.html",
    "revision": "f5fb51de71640e780a3fd0f19da91106"
  },
  {
    "url": "senior/1.micro/2.qiankun2.html",
    "revision": "059226401deae6c7dfba894f8c3738e4"
  },
  {
    "url": "senior/1.micro/3.share.html",
    "revision": "4d23647a0f344c3a80ce4cb001f07251"
  },
  {
    "url": "senior/1.micro/4.dev.html",
    "revision": "a6e653cec43f66e2ecaf6cca9fbcc179"
  },
  {
    "url": "senior/2.typescript/1.env.html",
    "revision": "c8b9dd20a6e29bb12486f85de4fed163"
  },
  {
    "url": "senior/2.typescript/1.index.html",
    "revision": "ee9c48d3ab9df99d52bb77ce8adac7de"
  },
  {
    "url": "senior/2.typescript/10.infer.html",
    "revision": "82f948f43a70c69315c5f1382b21ff23"
  },
  {
    "url": "senior/2.typescript/11.overlapping.html",
    "revision": "cc6a0c4cde70bb9d5efd20011a170d49"
  },
  {
    "url": "senior/2.typescript/12.condition.html",
    "revision": "3b13471e7e5545adf4eb48f1218e22db"
  },
  {
    "url": "senior/2.typescript/13.builtin.html",
    "revision": "3ed6dfa55310ddf557014b9d6d555706"
  },
  {
    "url": "senior/2.typescript/14.package.html",
    "revision": "5f35c3da29c40ab22214532c3188c41c"
  },
  {
    "url": "senior/2.typescript/15.custom.html",
    "revision": "83d923c50cc0fec4455968b0ad6a60df"
  },
  {
    "url": "senior/2.typescript/16.unknown.html",
    "revision": "59a5b00abe257ce858e34574775a6cc6"
  },
  {
    "url": "senior/2.typescript/17.module.html",
    "revision": "d0820c61ab1184d184923064f5010034"
  },
  {
    "url": "senior/2.typescript/18.statement.html",
    "revision": "9184f7b3fb88c61010713885758e8549"
  },
  {
    "url": "senior/2.typescript/19.extend.html",
    "revision": "02c4e252eebfcbf08359863ed24086df"
  },
  {
    "url": "senior/2.typescript/2.base.html",
    "revision": "d21123bd7e9d190950c08c0e6e90ff68"
  },
  {
    "url": "senior/2.typescript/3.deduction.html",
    "revision": "fd53bb143d8c3022e20bc4d4fd1689d5"
  },
  {
    "url": "senior/2.typescript/4.type.html",
    "revision": "66f2fe280dd1109de8d8983ee0e93f57"
  },
  {
    "url": "senior/2.typescript/5.class.html",
    "revision": "4fb0c8f1812508873d5effabf79dbdba"
  },
  {
    "url": "senior/2.typescript/6.interface.html",
    "revision": "059f7d7b735c0e1e3fd0960ba890ee5b"
  },
  {
    "url": "senior/2.typescript/7.generic.html",
    "revision": "4ddf2c0a473a1116a8dd6fa8f4f690f4"
  },
  {
    "url": "senior/2.typescript/8.compatible.html",
    "revision": "97988e915f520e6959ea5ec94c2f5dce"
  },
  {
    "url": "senior/2.typescript/9.protect.html",
    "revision": "e2b254616b0c67b597612d9b69dac44f"
  },
  {
    "url": "senior/3.deploy/1.index.html",
    "revision": "bca759a8249729432669b1e27cdc6d30"
  },
  {
    "url": "senior/3.deploy/1.local.html",
    "revision": "397d7469abb131b151fd2b64e9ecaf8d"
  },
  {
    "url": "senior/3.deploy/2.gitlab.html",
    "revision": "13daa2795715a9ebe46478824e0bd64d"
  },
  {
    "url": "senior/3.deploy/3.genkins.html",
    "revision": "b9809a6ed8d468fc9ab0e54497c3c5f0"
  },
  {
    "url": "senior/3.deploy/4.centos.html",
    "revision": "a8662f3eed819140e3651edf3158fcff"
  },
  {
    "url": "senior/3.deploy/5.nginx.html",
    "revision": "7cf99c5a589bd83b7f905f5756839676"
  },
  {
    "url": "senior/4.component/1.button.html",
    "revision": "de5471e9db7c499e48f58dd9ed454079"
  },
  {
    "url": "senior/4.component/1.env.html",
    "revision": "2604f1913740d980b84fac70a0b00873"
  },
  {
    "url": "senior/4.component/1.index.html",
    "revision": "68c3c6fe74efad4e8f2ce0c0d086f28e"
  },
  {
    "url": "senior/4.component/1.recursion.html",
    "revision": "75a3c1a03fba67880ac904a696e50841"
  },
  {
    "url": "senior/4.component/10.tree.html",
    "revision": "244c1b057d73d0f2a22fbd3af020065d"
  },
  {
    "url": "senior/4.component/12.table.html",
    "revision": "2d6c8fb39316e68ecce8481b91f7c474"
  },
  {
    "url": "senior/4.component/13.publish.html",
    "revision": "d1e3789793f5b081741089b883553de2"
  },
  {
    "url": "senior/4.component/2.dropdown.html",
    "revision": "9ff10a658c174a13040500483d6a6ccb"
  },
  {
    "url": "senior/4.component/3.dialog.html",
    "revision": "ae92c26d182c3bc111ab27129b66ad55"
  },
  {
    "url": "senior/4.component/3.form.html",
    "revision": "80c0bea1b30015c3b4e6ab5f4140d37a"
  },
  {
    "url": "senior/4.component/4.input.html",
    "revision": "17a8f906593ed4df3eceaba1eab8f591"
  },
  {
    "url": "senior/4.component/4.render.html",
    "revision": "b44804cde1070db10635bbbe2c8b85a9"
  },
  {
    "url": "senior/4.component/5.checkBox.html",
    "revision": "1a302efad876f48ddd93eb767e1e2ee8"
  },
  {
    "url": "senior/4.component/6.cascader.html",
    "revision": "73efe9d7fad45dc78938ce835053ab4e"
  },
  {
    "url": "senior/4.component/7.date.html",
    "revision": "cd55dc726620bad40f9161cf72fc1258"
  },
  {
    "url": "senior/4.component/8.dispaly.html",
    "revision": "f6cb0e209cc2431a48215d39a18560f1"
  },
  {
    "url": "senior/4.component/9.alert.html",
    "revision": "4060fa7fd515ce44c2c560b36941a289"
  },
  {
    "url": "senior/4.component/9.dynamics.html",
    "revision": "918876f37e33fbb3d99a9b6ebb4070a7"
  },
  {
    "url": "source/vue-cli2.x/1.index.html",
    "revision": "d18cf4e8a89cc8a094a07610caef9209"
  },
  {
    "url": "source/vue-cli3.x/1.index.html",
    "revision": "66283e7614fde9dcc4f798a06e25ccbd"
  },
  {
    "url": "source/vue-router3.x/1.index.html",
    "revision": "3aaf94ea1c414c4a6e461163f23178de"
  },
  {
    "url": "source/vue-router3.x/2.origin.html",
    "revision": "c92284f3d9137e9cc7eea536d31fc86d"
  },
  {
    "url": "source/vue-router4.x/1.index.html",
    "revision": "f10b68eadb6fa36938c0dbe8b6e7d5b1"
  },
  {
    "url": "source/vue2.x/1.index.html",
    "revision": "668eee995ff24346bf3f902acc603651"
  },
  {
    "url": "source/vue2.x/10.optimize.html",
    "revision": "b8957bf415d641c8e0b28a59c70a4ad8"
  },
  {
    "url": "source/vue2.x/11.gencode.html",
    "revision": "8d0d6a920163256a601bfa2a7d7c28fd"
  },
  {
    "url": "source/vue2.x/12.mount.html",
    "revision": "66fe747fef987f23f34b81c8757807e3"
  },
  {
    "url": "source/vue2.x/13._render.html",
    "revision": "6773b0b8a6451b094f0aea17155c43e4"
  },
  {
    "url": "source/vue2.x/14._update.html",
    "revision": "8e3f7594d3894a151ff1f15691517e6b"
  },
  {
    "url": "source/vue2.x/2.initGlobalAPI.html",
    "revision": "7b2c9e58a52db4960e131b000d70e74e"
  },
  {
    "url": "source/vue2.x/3.initMixin.html",
    "revision": "b6a5868af15ad27d7a8d813d340631ba"
  },
  {
    "url": "source/vue2.x/4.stateMixin.html",
    "revision": "03c566370412ddbc89e88f8a8a2f488c"
  },
  {
    "url": "source/vue2.x/5.eventsMixin.html",
    "revision": "58f8c006787cb762244bce6dc461c3bf"
  },
  {
    "url": "source/vue2.x/6.lifecycleMixin.html",
    "revision": "07453abe222f74ae8c7041724c587311"
  },
  {
    "url": "source/vue2.x/7.renderMixin.html",
    "revision": "25bc146449e17efeb1057817519e32b5"
  },
  {
    "url": "source/vue2.x/8.mount.html",
    "revision": "ac07a876956b1bdde74ecee17276b332"
  },
  {
    "url": "source/vue2.x/9.ast.html",
    "revision": "f89e7b5440276dd4048ede7aae32ab61"
  },
  {
    "url": "source/vue3.x/1.index.html",
    "revision": "6f53c6a142787b762a2615e5f31f1dae"
  },
  {
    "url": "source/vue3.x/10.optimize.html",
    "revision": "2f96ad360d0c2fbeb4dbf2817f3b0a44"
  },
  {
    "url": "source/vue3.x/11.gencode.html",
    "revision": "3c1ce8f94c0f9f517d9a77a8720bf80a"
  },
  {
    "url": "source/vue3.x/12.mount.html",
    "revision": "ed80e9d7194007a598d6074cf5ba02c7"
  },
  {
    "url": "source/vue3.x/13._render.html",
    "revision": "b3381fa8a286940df47932c57dddb064"
  },
  {
    "url": "source/vue3.x/14._update.html",
    "revision": "131fd6233b3d96de277de7223297888f"
  },
  {
    "url": "source/vue3.x/2.initGlobalAPI.html",
    "revision": "6f363cd31fcb6efe8e2e7facb35ca2e2"
  },
  {
    "url": "source/vue3.x/3.initMixin.html",
    "revision": "77da1c0e62949c9a57ef86b4db9d4a03"
  },
  {
    "url": "source/vue3.x/4.stateMixin.html",
    "revision": "16d9816788aec37b1c5ed8faff22cefc"
  },
  {
    "url": "source/vue3.x/5.eventsMixin.html",
    "revision": "c408a93498f7073a7d2084b17505740d"
  },
  {
    "url": "source/vue3.x/6.lifecycleMixin.html",
    "revision": "89760d0401d71901ee60d07a7a9995f9"
  },
  {
    "url": "source/vue3.x/7.renderMixin.html",
    "revision": "68e7db3a1eeb95b089d0e27bdae3b20a"
  },
  {
    "url": "source/vue3.x/8.mount.html",
    "revision": "5e6f87d1d3adfdc773b6364dfb1be0ba"
  },
  {
    "url": "source/vue3.x/9.ast.html",
    "revision": "f6faa1e126b84526a41f5d2edf0cb121"
  },
  {
    "url": "source/vuex3.x/1.index.html",
    "revision": "e125aa56f05060f942f625a470231b2d"
  },
  {
    "url": "source/vuex3.x/2.use.html",
    "revision": "24d6cb8846572f2083367a93734a2026"
  },
  {
    "url": "source/vuex3.x/3.origin.html",
    "revision": "0d20a652153199b402eed73e5c3d2df1"
  },
  {
    "url": "source/vuex4.x/1.index.html",
    "revision": "3e603228661e4189e33ebfa0919d2cdb"
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
