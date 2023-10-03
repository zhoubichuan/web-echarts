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
    "revision": "e840ae64f4ecdfb1fa19043fd35548d6"
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
    "revision": "62349415ffd0a5b86a5d13514e6590a7"
  },
  {
    "url": "base/api/1.index.html",
    "revision": "1df4575698073e7365aa3060ef96f453"
  },
  {
    "url": "base/api/2.echartsInstance.html",
    "revision": "737ad33eba01a996bff3862a10a688aa"
  },
  {
    "url": "base/api/3.action.html",
    "revision": "68bfa6103f7db5379ec3b551450e5cf3"
  },
  {
    "url": "base/api/4.events.html",
    "revision": "8d91b7b391dc7ed00ac1a4c7c647dab0"
  },
  {
    "url": "base/components/1.index.html",
    "revision": "21a3f046f1b1feac22a2e7f7bc8f832b"
  },
  {
    "url": "base/components/1.legend.html",
    "revision": "b13a376b166134e3091713e23efd98d7"
  },
  {
    "url": "base/components/2.grid.html",
    "revision": "aec5a0df10525b79f1d84419911f8603"
  },
  {
    "url": "base/components/2.polar.html",
    "revision": "d3a8c8f391a5e25aee3175d3051d76b2"
  },
  {
    "url": "base/components/2.radiusAxis.html",
    "revision": "6b04ad6ba67f98d0e16885d8b79d8da9"
  },
  {
    "url": "base/components/2.xAxis.html",
    "revision": "7dd82ef0dfb0e8de53c35d9e04c54902"
  },
  {
    "url": "base/components/2.yAxis.html",
    "revision": "90ca25afebdaa7599b315a3e8477ec4b"
  },
  {
    "url": "base/components/3.angleAxis.html",
    "revision": "f1712ba00bfc8cf0f03327a1b51ec94e"
  },
  {
    "url": "base/components/4.radar.html",
    "revision": "2fc4b90da9a540b2112759fa26bb5a80"
  },
  {
    "url": "base/components/5.dataZoom.html",
    "revision": "bc00f0be03341e2e4450837d83129015"
  },
  {
    "url": "base/components/6.visualMap.html",
    "revision": "ece55dcaf8b8209d9a3cb9ae7c357f99"
  },
  {
    "url": "base/components/7.tooltip.html",
    "revision": "c029d5fa498c10d48b84ea882dac794c"
  },
  {
    "url": "base/components/8.geo.html",
    "revision": "b1d43d0835d844e841733b63183b1d29"
  },
  {
    "url": "base/gl/1.index.html",
    "revision": "2ca2b9b9977363378fb10892d6b879cc"
  },
  {
    "url": "base/gl/1.scatter3D.html",
    "revision": "d42a492236b7d73a2565e13a9ba901c7"
  },
  {
    "url": "base/gl/10.flowGL.html",
    "revision": "4b5eb2d141644563ad2681ba6daf4647"
  },
  {
    "url": "base/gl/2.bar3D.html",
    "revision": "c6f3750c63d78319376dae59cfd74dcd"
  },
  {
    "url": "base/gl/3.line3D.html",
    "revision": "fe3492006e8552f3051d8cdcefa42433"
  },
  {
    "url": "base/gl/4.lines3D.html",
    "revision": "2e7de9d2975afc172df70920bc547397"
  },
  {
    "url": "base/gl/5.map3D.html",
    "revision": "276c98f00d6692781584b53de982257d"
  },
  {
    "url": "base/gl/6.surface.html",
    "revision": "f7e37a2d08c68064fb63b738492cde08"
  },
  {
    "url": "base/gl/7.polygons3D.html",
    "revision": "9277ebb79b47fdcf603c4a1e5d45bbfa"
  },
  {
    "url": "base/gl/8.scatterGL.html",
    "revision": "1ab2a67beff03b85d20a07e9b73f9cd1"
  },
  {
    "url": "base/gl/9.graphGL.html",
    "revision": "dfbbe7b5119bf19cebec41581173431c"
  },
  {
    "url": "base/series/1.index.html",
    "revision": "aa8dd0b23b31108213b37c1a3243ce64"
  },
  {
    "url": "base/series/1.line.html",
    "revision": "4fae749a701105d246a85f0c3ac3d05c"
  },
  {
    "url": "base/series/10.boxplot.html",
    "revision": "210f00db9af2b1753f8a654b4295ed0d"
  },
  {
    "url": "base/series/11.candlestick.html",
    "revision": "d6cbc1a3d1fecab1f9e119b593534ef5"
  },
  {
    "url": "base/series/12.heatmap.html",
    "revision": "ff2a6ea7965d1ac36967efb0a7a527f2"
  },
  {
    "url": "base/series/13.map.html",
    "revision": "85e5573c9104c29b83da7694bc74e3c4"
  },
  {
    "url": "base/series/14.parallel.html",
    "revision": "9cbeb9838f14c7dd983f9c0a1ca994a9"
  },
  {
    "url": "base/series/15.lines.html",
    "revision": "9d71c3327c6bc27056fec3b051f28634"
  },
  {
    "url": "base/series/16.graph.html",
    "revision": "a50994dafeda9deed74038a6b6e7ef8c"
  },
  {
    "url": "base/series/17.sankey.html",
    "revision": "c7a85fcb741a23202e27533a02a5c7eb"
  },
  {
    "url": "base/series/18.funnel.html",
    "revision": "6b91538011f5f1d14492939585dc0d55"
  },
  {
    "url": "base/series/19.gauge.html",
    "revision": "ffc69fe841f89551f68e767dde6f05f9"
  },
  {
    "url": "base/series/2.bar.html",
    "revision": "febd8c0490c71bf9d86b0567c5b0c235"
  },
  {
    "url": "base/series/20.pictorialBar.html",
    "revision": "80898513fe1b9b863fed924467c9d73c"
  },
  {
    "url": "base/series/21.themeRiver.html",
    "revision": "64dc08e605d32189f3dd95d34c3d947c"
  },
  {
    "url": "base/series/22.custom.html",
    "revision": "665e2366296666fcd3027103720d12c2"
  },
  {
    "url": "base/series/3.pie.html",
    "revision": "c1d23a55930531886b4c126ffa9ce3f6"
  },
  {
    "url": "base/series/4.scatter.html",
    "revision": "4c6851ea11eb303f4f14387345f02a17"
  },
  {
    "url": "base/series/5.effectScatter.html",
    "revision": "f427a592ecda13662a5605717bec4cec"
  },
  {
    "url": "base/series/6.radar.html",
    "revision": "abe3e90c2e89b270b43e8d82524d8ffa"
  },
  {
    "url": "base/series/7.tree.html",
    "revision": "883eec8106deb7f9fe334b3fadeafb13"
  },
  {
    "url": "base/series/8.treemap.html",
    "revision": "4c223381a4f4cc8d0db417c69b0de095"
  },
  {
    "url": "base/series/9.sunburst.html",
    "revision": "59bc0f93ea29676b09c63fcf3b035c17"
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
    "revision": "e5bef3b5d150284a2cbe11d97bf7404d"
  },
  {
    "url": "mock/http.js",
    "revision": "a219140640bec4dfbe8f4fe88d351ed8"
  },
  {
    "url": "senior/1.micro/1.index.html",
    "revision": "8b37c12833e209edbb51a20e9af1ff73"
  },
  {
    "url": "senior/1.micro/1.singlespa.html",
    "revision": "0f0760dddad289fca58629a2ce7a602d"
  },
  {
    "url": "senior/1.micro/1.singlespa2.html",
    "revision": "525117ac17eee6dfe05104c1c0d0fbc6"
  },
  {
    "url": "senior/1.micro/2.qiankun.html",
    "revision": "ff256c006654c402f4aedb6a9d93636e"
  },
  {
    "url": "senior/1.micro/2.qiankun2.html",
    "revision": "e7a8223052ce8f7011866469b18f6d7d"
  },
  {
    "url": "senior/1.micro/3.share.html",
    "revision": "559a101fc6ad9c5c6e1af2da383d8e7b"
  },
  {
    "url": "senior/1.micro/4.dev.html",
    "revision": "0727ab5c942350116ee248f05391eb99"
  },
  {
    "url": "senior/2.typescript/1.env.html",
    "revision": "e884a89f8070f9508601cb1dc3750ecb"
  },
  {
    "url": "senior/2.typescript/1.index.html",
    "revision": "fc5f2348b7c4cd0a6d607bd631db07a9"
  },
  {
    "url": "senior/2.typescript/10.infer.html",
    "revision": "bcc82c1b794ca6ad999774964ce09e56"
  },
  {
    "url": "senior/2.typescript/11.overlapping.html",
    "revision": "2c5a6eaab9e0add025bfb54345e54294"
  },
  {
    "url": "senior/2.typescript/12.condition.html",
    "revision": "07df513898426f7808ecb16992023e48"
  },
  {
    "url": "senior/2.typescript/13.builtin.html",
    "revision": "74d32f3db9a03bf7138bf1d215419618"
  },
  {
    "url": "senior/2.typescript/14.package.html",
    "revision": "adbcc0b285f4876d8a095202b319413f"
  },
  {
    "url": "senior/2.typescript/15.custom.html",
    "revision": "97be1777925d5c8c61040626f7e94728"
  },
  {
    "url": "senior/2.typescript/16.unknown.html",
    "revision": "71f196f147f43130f26ab711b5bd19ee"
  },
  {
    "url": "senior/2.typescript/17.module.html",
    "revision": "2c260158893efffd940b1b83c7090526"
  },
  {
    "url": "senior/2.typescript/18.statement.html",
    "revision": "54ddcd4a0806d9099b22f1514885faa1"
  },
  {
    "url": "senior/2.typescript/19.extend.html",
    "revision": "dbf8c94e65f60ae38f507c30bb33ec8a"
  },
  {
    "url": "senior/2.typescript/2.base.html",
    "revision": "294ebc42637265fd52db285e861604fa"
  },
  {
    "url": "senior/2.typescript/3.deduction.html",
    "revision": "a636d1fcffae72124a2f0b2370dd3f15"
  },
  {
    "url": "senior/2.typescript/4.type.html",
    "revision": "0bfee264cc0d0fb7b6d6f597cd207f27"
  },
  {
    "url": "senior/2.typescript/5.class.html",
    "revision": "d06b3096ea732c4a0c6b61b2dca774bc"
  },
  {
    "url": "senior/2.typescript/6.interface.html",
    "revision": "ae051e55874b2ba515c5a838349e5c65"
  },
  {
    "url": "senior/2.typescript/7.generic.html",
    "revision": "ee98c53e5a171f404f63d2327b8d4e86"
  },
  {
    "url": "senior/2.typescript/8.compatible.html",
    "revision": "7b888e49ebb952e3091c9a476bd545f0"
  },
  {
    "url": "senior/2.typescript/9.protect.html",
    "revision": "3b8deb3883900285d57dba6fb263d450"
  },
  {
    "url": "senior/3.deploy/1.index.html",
    "revision": "f8b7672e767f7c8c2674e71d8ff73e95"
  },
  {
    "url": "senior/3.deploy/1.local.html",
    "revision": "773b05fa2da00307eaf369b2f41999dd"
  },
  {
    "url": "senior/3.deploy/2.gitlab.html",
    "revision": "b36e5e5495d4f82a7031c282bbd27458"
  },
  {
    "url": "senior/3.deploy/3.genkins.html",
    "revision": "deb45b06d76a221ba0c5685f8d384e5c"
  },
  {
    "url": "senior/3.deploy/4.centos.html",
    "revision": "5cc954f61442f278733659f3eb20da32"
  },
  {
    "url": "senior/3.deploy/5.nginx.html",
    "revision": "e35f53f2e7efeec396a852edc61c00ae"
  },
  {
    "url": "senior/4.component/1.button.html",
    "revision": "e38280a08256c6fef2da573db5ca87d6"
  },
  {
    "url": "senior/4.component/1.env.html",
    "revision": "3d6822eff5a3dedadc964a15899c3282"
  },
  {
    "url": "senior/4.component/1.index.html",
    "revision": "6aee512f18e5b47e613348c06a848b46"
  },
  {
    "url": "senior/4.component/1.recursion.html",
    "revision": "2b26abeadd9c546836f2bbe6e9e4a44c"
  },
  {
    "url": "senior/4.component/10.tree.html",
    "revision": "d024f67ef67ffb378ccceb5ec7590d34"
  },
  {
    "url": "senior/4.component/12.table.html",
    "revision": "5b4eb2d3a5a89e1be0d446f7d0c316f1"
  },
  {
    "url": "senior/4.component/13.publish.html",
    "revision": "9ea329b4b271a265e93ff5c2f64ea599"
  },
  {
    "url": "senior/4.component/2.dropdown.html",
    "revision": "4764b0dbeedcca1f888966ac611b8104"
  },
  {
    "url": "senior/4.component/3.dialog.html",
    "revision": "eeeb3642cc7ca5f89b4ee30aea020382"
  },
  {
    "url": "senior/4.component/3.form.html",
    "revision": "44b2a50cceac44e3ca8274cd0fbc280b"
  },
  {
    "url": "senior/4.component/4.input.html",
    "revision": "f041c3b9b3b4bd2ea9057ccc1c37e30d"
  },
  {
    "url": "senior/4.component/4.render.html",
    "revision": "5b2b41210125e7c7af6f3607d99f9a6f"
  },
  {
    "url": "senior/4.component/5.checkBox.html",
    "revision": "92bb87238b39e8ea779896c701fe6661"
  },
  {
    "url": "senior/4.component/6.cascader.html",
    "revision": "d8c7c3e63d5c36b728705ee5baa28c44"
  },
  {
    "url": "senior/4.component/7.date.html",
    "revision": "2b95bbaef2f2331c223a84caeb746d3c"
  },
  {
    "url": "senior/4.component/8.dispaly.html",
    "revision": "acb8514e013d4ff1a37d1f511b55fb1b"
  },
  {
    "url": "senior/4.component/9.alert.html",
    "revision": "902919a7b90db44cb23657c0098b8319"
  },
  {
    "url": "senior/4.component/9.dynamics.html",
    "revision": "7feed6b6264534aad7afe7c190fe165c"
  },
  {
    "url": "source/vue-cli2.x/1.index.html",
    "revision": "3e8389a1c17d2549d701a64373dbf794"
  },
  {
    "url": "source/vue-cli3.x/1.index.html",
    "revision": "f1d1b5605f316f10985ee240a66ebb83"
  },
  {
    "url": "source/vue-router3.x/1.index.html",
    "revision": "8139b39ad09ccbdba86d422d295657b3"
  },
  {
    "url": "source/vue-router3.x/2.origin.html",
    "revision": "fb5cdc8aac6b69eed52013428aa67963"
  },
  {
    "url": "source/vue-router4.x/1.index.html",
    "revision": "a59a93e846b31691c4e9ef7558728898"
  },
  {
    "url": "source/vue2.x/1.index.html",
    "revision": "0188bf63ca96a4eed7ca50472d6e44ca"
  },
  {
    "url": "source/vue2.x/10.optimize.html",
    "revision": "2b99a0aa4b000f8ad0acfb10a6a60564"
  },
  {
    "url": "source/vue2.x/11.gencode.html",
    "revision": "9a831c251e57fd8aeba5d1af2f845532"
  },
  {
    "url": "source/vue2.x/12.mount.html",
    "revision": "eaee7062381f74238c7ae54df7c356ce"
  },
  {
    "url": "source/vue2.x/13._render.html",
    "revision": "e34bf614868d0100c5780d6a0f9f6cc7"
  },
  {
    "url": "source/vue2.x/14._update.html",
    "revision": "5a1ade89200908ba0b81870fdbbc6448"
  },
  {
    "url": "source/vue2.x/2.initGlobalAPI.html",
    "revision": "f4f08162822292db5c31eda9f082132a"
  },
  {
    "url": "source/vue2.x/3.initMixin.html",
    "revision": "90796257a189514751e60f7638e8bc7e"
  },
  {
    "url": "source/vue2.x/4.stateMixin.html",
    "revision": "880686ccff4c022d112105dea3491ca4"
  },
  {
    "url": "source/vue2.x/5.eventsMixin.html",
    "revision": "610c00629525533a0dcfca8297db51f0"
  },
  {
    "url": "source/vue2.x/6.lifecycleMixin.html",
    "revision": "1ad504a4e22d202ddc75ae2b4d3258ea"
  },
  {
    "url": "source/vue2.x/7.renderMixin.html",
    "revision": "6ab51fb0c32d05335d4cb50c9b9911c9"
  },
  {
    "url": "source/vue2.x/8.mount.html",
    "revision": "bcfa24b822398f546f0329da3a4d88f0"
  },
  {
    "url": "source/vue2.x/9.ast.html",
    "revision": "374d40ad32825cadb805266cb877f84e"
  },
  {
    "url": "source/vue3.x/1.index.html",
    "revision": "3b123ce14f7cbf41ba63a9c8b6a475f0"
  },
  {
    "url": "source/vue3.x/10.optimize.html",
    "revision": "ccae341ab6110690f95da31d9fa6666b"
  },
  {
    "url": "source/vue3.x/11.gencode.html",
    "revision": "ee0921544e3237ce7d0e9d27d23b17b0"
  },
  {
    "url": "source/vue3.x/12.mount.html",
    "revision": "bb2f7b328dfc26e8b4cf7ca2771c6990"
  },
  {
    "url": "source/vue3.x/13._render.html",
    "revision": "4725e4fea762e18bed6a685aa5315705"
  },
  {
    "url": "source/vue3.x/14._update.html",
    "revision": "d6cb607f98b015064fdf72eb6c26f456"
  },
  {
    "url": "source/vue3.x/2.initGlobalAPI.html",
    "revision": "74c4e34d597852da8bc1239b178f7499"
  },
  {
    "url": "source/vue3.x/3.initMixin.html",
    "revision": "631a35b2bcc050928d593119fe2c654b"
  },
  {
    "url": "source/vue3.x/4.stateMixin.html",
    "revision": "9056f87903971258b9f0e4db385791f1"
  },
  {
    "url": "source/vue3.x/5.eventsMixin.html",
    "revision": "2fac10fb3e1b7be5adeb51e71a5b8630"
  },
  {
    "url": "source/vue3.x/6.lifecycleMixin.html",
    "revision": "291fa0cd91cc309724469741608ca786"
  },
  {
    "url": "source/vue3.x/7.renderMixin.html",
    "revision": "0aca28e0f190b1effad8189c6ee1c689"
  },
  {
    "url": "source/vue3.x/8.mount.html",
    "revision": "02b23b08385b9160a4d89841cac0eabc"
  },
  {
    "url": "source/vue3.x/9.ast.html",
    "revision": "333f104f291403a1b41bf9ecd0e43ae5"
  },
  {
    "url": "source/vuex3.x/1.index.html",
    "revision": "46f43216af79315dabcb5eadf12ba342"
  },
  {
    "url": "source/vuex3.x/2.use.html",
    "revision": "3af9d8f0114143df70c372396f4950e9"
  },
  {
    "url": "source/vuex3.x/3.origin.html",
    "revision": "769ec295145e692e7fab3a4661e05ffd"
  },
  {
    "url": "source/vuex4.x/1.index.html",
    "revision": "ca790b85548298ab5d64a5e069f6dc20"
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
