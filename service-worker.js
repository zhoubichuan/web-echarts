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
    "revision": "9fb5cd364d9a283632428f95e9e49e66"
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
    "url": "assets/js/10.a95062a0.js",
    "revision": "9871d83c59b6fac15c95d760853e3be6"
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
    "url": "assets/js/11.438ad14d.js",
    "revision": "563d0c50d13d76a0de1a857b4dcc868c"
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
    "url": "assets/js/12.9aca20c6.js",
    "revision": "616e0e90c4aea0c1f17736395fcda846"
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
    "url": "assets/js/13.d75f1cea.js",
    "revision": "3f04bfb885aee5b154f90d60995cb3fb"
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
    "url": "assets/js/15.fe0d77b9.js",
    "revision": "e8045d875e84157ca4e9c31abe00652d"
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
    "url": "assets/js/16.c26f3b07.js",
    "revision": "d18d958751f6112430cd62ea1d3944fb"
  },
  {
    "url": "assets/js/17.b431b478.js",
    "revision": "b6297155feb96c46a425f5eec828d91e"
  },
  {
    "url": "assets/js/18.3297c090.js",
    "revision": "a48451e0bd45d5c5db39ae0c3a0053b5"
  },
  {
    "url": "assets/js/19.ce019979.js",
    "revision": "4da93025e086179324bde65affa2c57a"
  },
  {
    "url": "assets/js/2.a9b66600.js",
    "revision": "cb58ae1a9b19fdc7ee385ce95b9e96c5"
  },
  {
    "url": "assets/js/20.3cf06488.js",
    "revision": "8c62a4e5f43861248edea6158461d317"
  },
  {
    "url": "assets/js/21.bb4e0dd7.js",
    "revision": "e51d5f5cdd3933fa9f26a414654e0499"
  },
  {
    "url": "assets/js/22.9f594022.js",
    "revision": "b9875734c2729e7970d0749e8efe5d5b"
  },
  {
    "url": "assets/js/23.25621941.js",
    "revision": "86166182e096918f5255daf3a416c437"
  },
  {
    "url": "assets/js/24.bd941603.js",
    "revision": "785e22d54ad4304369f13ee2e137f1a8"
  },
  {
    "url": "assets/js/25.140e822c.js",
    "revision": "1e1c286c43d33aad6c24f67017c9c441"
  },
  {
    "url": "assets/js/26.d8e3c344.js",
    "revision": "b47ca0b65919aebe6a8016bf7274e844"
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
    "url": "assets/js/31.2dffd1b3.js",
    "revision": "f656a385d9b298d7fea56d1d3eeeafc5"
  },
  {
    "url": "assets/js/32.87d5226f.js",
    "revision": "d8fa83369f2e1b91208a81e71dc205b4"
  },
  {
    "url": "assets/js/33.4559faa3.js",
    "revision": "078cb5951fd8f23699f3abb0be175e92"
  },
  {
    "url": "assets/js/34.dc2cec99.js",
    "revision": "10a47fcafd5d2c6640b8d338eec5342a"
  },
  {
    "url": "assets/js/35.7074040f.js",
    "revision": "6714392696d107f74df79b2fcb0045a2"
  },
  {
    "url": "assets/js/36.7bc29ce4.js",
    "revision": "afef5c75e3dc262daf2e5c91beb33e45"
  },
  {
    "url": "assets/js/37.63e606d8.js",
    "revision": "7d0a9ee9fa1cd16f865716bb13ed7ed7"
  },
  {
    "url": "assets/js/38.4c512a63.js",
    "revision": "2117176e518ec606ffaa8bb7b0cb0cbf"
  },
  {
    "url": "assets/js/39.595fed51.js",
    "revision": "100ec0c88a228d059e6d653a82d2d76b"
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
    "url": "assets/js/45.0b77101e.js",
    "revision": "172714c0e8abbdd85f333e8f9a83275d"
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
    "url": "assets/js/50.8c95b664.js",
    "revision": "c848d221648110e63f27c0c5ed6859d4"
  },
  {
    "url": "assets/js/51.226cd565.js",
    "revision": "00f69a2c784f9015a398d1b254bf03bb"
  },
  {
    "url": "assets/js/52.7358bead.js",
    "revision": "dfaa1d6ea22db8f4d4c06333db2e6a5d"
  },
  {
    "url": "assets/js/53.ae5fc0a1.js",
    "revision": "3febfd048d5af70120aaa132f60d0e90"
  },
  {
    "url": "assets/js/54.9b0b68f9.js",
    "revision": "5c12e93d9d5e383630557d9b6e722590"
  },
  {
    "url": "assets/js/55.265d0f8d.js",
    "revision": "301ff6eb67a5283f70e49495e96772f3"
  },
  {
    "url": "assets/js/56.234c6235.js",
    "revision": "b75090380f887886e9526fb2227c5885"
  },
  {
    "url": "assets/js/57.f1c75f16.js",
    "revision": "6db0e262210cabd295ec06f174ec0cc2"
  },
  {
    "url": "assets/js/58.0b67d32c.js",
    "revision": "81424c7e3a8974226c757510219ed319"
  },
  {
    "url": "assets/js/59.96e2e36d.js",
    "revision": "6e5f49751ef713cb6f3bca8d3b648bff"
  },
  {
    "url": "assets/js/6.dd30f460.js",
    "revision": "329d46b754bc2eee7361c53a43948678"
  },
  {
    "url": "assets/js/60.3ec97783.js",
    "revision": "307edab642975ac8f69001fc1b34824e"
  },
  {
    "url": "assets/js/61.098448e2.js",
    "revision": "83f46cdfb3021a8b40ed1fa8a5a4419e"
  },
  {
    "url": "assets/js/62.2661a945.js",
    "revision": "a8d2c9118a5bc3cbb8db6c99d04c21b0"
  },
  {
    "url": "assets/js/63.21d67756.js",
    "revision": "892594c6fd3e634e82e6c921c1ff3146"
  },
  {
    "url": "assets/js/64.e252caaa.js",
    "revision": "0cd82a738760177791dc624013296086"
  },
  {
    "url": "assets/js/65.f1f23cf5.js",
    "revision": "1f2b5d0c95431938c628db4b7bf29d7f"
  },
  {
    "url": "assets/js/66.2b473cca.js",
    "revision": "fc06817e0b8314604780c1013299be5b"
  },
  {
    "url": "assets/js/67.f5258bcb.js",
    "revision": "aca601de7f45d79f78c22daffa8cf1a0"
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
    "url": "assets/js/76.08430c28.js",
    "revision": "0fc6c51f79b5f049f02af16bf726d741"
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
    "revision": "c5413b2641e3d40faad967de6628ec14"
  },
  {
    "url": "base/api/1.index.html",
    "revision": "661db2b9b1169a212992b54a4cd1e698"
  },
  {
    "url": "base/api/2.echartsInstance.html",
    "revision": "2e2bff8b72bf5caa2e527371f9e228cc"
  },
  {
    "url": "base/api/3.action.html",
    "revision": "cacd60581be62bbe76eb28d4f2757fd0"
  },
  {
    "url": "base/api/4.events.html",
    "revision": "dafb37ad03773a85329971f21fb8c52f"
  },
  {
    "url": "base/components/1.index.html",
    "revision": "497d05ac7a47765f0b4ab3c440b7e52e"
  },
  {
    "url": "base/components/1.legend.html",
    "revision": "4c4ed774ae9d89656e8923f09063a705"
  },
  {
    "url": "base/components/2.grid.html",
    "revision": "4aeaa552c376e7e8122b5413f0257092"
  },
  {
    "url": "base/components/2.polar.html",
    "revision": "a2a2104799f1cb393bcae273d83c10dd"
  },
  {
    "url": "base/components/2.radiusAxis.html",
    "revision": "ecd6ae9f4ca60d8a47a65cf5799077f0"
  },
  {
    "url": "base/components/2.xAxis.html",
    "revision": "75a695461c49f8e83784c9fdc5398c42"
  },
  {
    "url": "base/components/2.yAxis.html",
    "revision": "2137d67b2825d6e6bdf09857e48bd504"
  },
  {
    "url": "base/components/3.angleAxis.html",
    "revision": "19f3b82f0beedaaada6b2cd1ca539274"
  },
  {
    "url": "base/components/4.radar.html",
    "revision": "d1fe2058627fd0e9bd83b8719bac943c"
  },
  {
    "url": "base/components/5.dataZoom.html",
    "revision": "673e3c827e05e808972881a6d0055621"
  },
  {
    "url": "base/components/6.visualMap.html",
    "revision": "81eba8ad1e42e10ba0ab3441021eb5fe"
  },
  {
    "url": "base/components/7.tooltip.html",
    "revision": "a7b3b3b8fd14cc47767d3ca1d9c419a8"
  },
  {
    "url": "base/components/8.geo.html",
    "revision": "f6a16f17eaa7a27bb023c6257120a237"
  },
  {
    "url": "base/gl/1.index.html",
    "revision": "45928b402fda784a0889a1c3168e15fe"
  },
  {
    "url": "base/gl/1.scatter3D.html",
    "revision": "bb1c6168383cdbef4513ae8bf40d1ffd"
  },
  {
    "url": "base/gl/10.flowGL.html",
    "revision": "0796c03d212ad428a6352cdb43059a22"
  },
  {
    "url": "base/gl/2.bar3D.html",
    "revision": "71da3ea6f667ff82676ac3d78bb08859"
  },
  {
    "url": "base/gl/3.line3D.html",
    "revision": "43445a7b6cc2561ba5983462ea45c040"
  },
  {
    "url": "base/gl/4.lines3D.html",
    "revision": "c961029a07af593c64927d07c5b65fd7"
  },
  {
    "url": "base/gl/5.map3D.html",
    "revision": "e3f9ee0ae6fbf0d8a6cd6d5c30b19e71"
  },
  {
    "url": "base/gl/6.surface.html",
    "revision": "593dab4bc98adf71e28515dfc9df98ec"
  },
  {
    "url": "base/gl/7.polygons3D.html",
    "revision": "c2e52713ec4b89884c490ab9e94dc753"
  },
  {
    "url": "base/gl/8.scatterGL.html",
    "revision": "41d2a933aa5644661cc3328eec9a0f43"
  },
  {
    "url": "base/gl/9.graphGL.html",
    "revision": "5675fd8b99420a24deb68e1ff3033ace"
  },
  {
    "url": "base/series/1.index.html",
    "revision": "5065e0f414970ca43a02897f75eed619"
  },
  {
    "url": "base/series/1.line.html",
    "revision": "5019f378c169f38b28334e5d6e87badf"
  },
  {
    "url": "base/series/10.boxplot.html",
    "revision": "a626c23f83ca8ff3a59f800c68c803a9"
  },
  {
    "url": "base/series/11.candlestick.html",
    "revision": "226525c9114a1a5e1e20962f2598c7ef"
  },
  {
    "url": "base/series/12.heatmap.html",
    "revision": "516c25283939db35d47b97b3f726e73e"
  },
  {
    "url": "base/series/13.map.html",
    "revision": "c3bad4921f44f51ae2e9e7a397738654"
  },
  {
    "url": "base/series/14.parallel.html",
    "revision": "eef90ea0443dc23914b09dde3866195b"
  },
  {
    "url": "base/series/15.lines.html",
    "revision": "b96510e45e9f377ac250d0896153f903"
  },
  {
    "url": "base/series/16.graph.html",
    "revision": "44cc0b159041875b03237ee545775fd4"
  },
  {
    "url": "base/series/17.sankey.html",
    "revision": "a981e2b87a3ffd702df76f2642642bd3"
  },
  {
    "url": "base/series/18.funnel.html",
    "revision": "f0bd3b4909b4758fbfce6f8fbe4e4db0"
  },
  {
    "url": "base/series/19.gauge.html",
    "revision": "0227b0c5e8b36112ffc64632780abb8a"
  },
  {
    "url": "base/series/2.bar.html",
    "revision": "cb338fb3f80bd9a19889adccf7e292cf"
  },
  {
    "url": "base/series/20.pictorialBar.html",
    "revision": "96e2ba201cd72beed8c876828a0f0030"
  },
  {
    "url": "base/series/21.themeRiver.html",
    "revision": "8aa5ae94e476cb012320484dfbc5899e"
  },
  {
    "url": "base/series/22.custom.html",
    "revision": "cd0fb43c67f709c99a91421b15b6647d"
  },
  {
    "url": "base/series/3.pie.html",
    "revision": "e1310d16c69f047e57fb08490071154e"
  },
  {
    "url": "base/series/4.scatter.html",
    "revision": "1552a9895262503f7d6261211a781108"
  },
  {
    "url": "base/series/5.effectScatter.html",
    "revision": "92e4f0993280f3a341d79eef230b76c7"
  },
  {
    "url": "base/series/6.radar.html",
    "revision": "baf2566831ffe74d35b75a1a2d3cd3ea"
  },
  {
    "url": "base/series/7.tree.html",
    "revision": "9c90640f33db8fbfdc39841eee0b99fe"
  },
  {
    "url": "base/series/8.treemap.html",
    "revision": "210d6d5ddd37c89adafb17f982b954fb"
  },
  {
    "url": "base/series/9.sunburst.html",
    "revision": "05789a5e6e365de75660c165ca1ddf24"
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
    "revision": "e37f9c8dfb768d68545011043c00cfbc"
  },
  {
    "url": "mock/http.js",
    "revision": "a219140640bec4dfbe8f4fe88d351ed8"
  },
  {
    "url": "senior/1.micro/1.index.html",
    "revision": "4d1762dc4f8f5994f1948ceed326866a"
  },
  {
    "url": "senior/1.micro/1.singlespa.html",
    "revision": "ed962ef4e0482986080fea0bb49bad5d"
  },
  {
    "url": "senior/1.micro/1.singlespa2.html",
    "revision": "e2011564631d932043022a93c3e319e0"
  },
  {
    "url": "senior/1.micro/2.qiankun.html",
    "revision": "b8ea8c93fd7440a8d1013567054a0c48"
  },
  {
    "url": "senior/1.micro/2.qiankun2.html",
    "revision": "03fd93d26c48efd632a051ef55ceba6d"
  },
  {
    "url": "senior/1.micro/3.share.html",
    "revision": "06f796a7be2eb766d7610e73134a1fe8"
  },
  {
    "url": "senior/1.micro/4.dev.html",
    "revision": "c5acdead9f65455475dbcbb0484749ba"
  },
  {
    "url": "senior/2.typescript/1.env.html",
    "revision": "09b4bfad1ae22578c2f3279203aba86f"
  },
  {
    "url": "senior/2.typescript/1.index.html",
    "revision": "a269db31000f33356bafebf673468f04"
  },
  {
    "url": "senior/2.typescript/10.infer.html",
    "revision": "82866df57aa3ce9cc03ffbb898c00a77"
  },
  {
    "url": "senior/2.typescript/11.overlapping.html",
    "revision": "3cb88ab8b812d50ab507d73ebdf1d7e7"
  },
  {
    "url": "senior/2.typescript/12.condition.html",
    "revision": "320e8415c2d0078c45828be59616b46d"
  },
  {
    "url": "senior/2.typescript/13.builtin.html",
    "revision": "30929b6f7fa1c67b514b1ef7a0ff765d"
  },
  {
    "url": "senior/2.typescript/14.package.html",
    "revision": "7d75be7d1d26f9aa9942a0f017d9b17f"
  },
  {
    "url": "senior/2.typescript/15.custom.html",
    "revision": "850248ddca204dc8850733b6762b2898"
  },
  {
    "url": "senior/2.typescript/16.unknown.html",
    "revision": "69931b7730577c25fc7c802e10db7249"
  },
  {
    "url": "senior/2.typescript/17.module.html",
    "revision": "3d8a13d76715cb191f6064f66019da2c"
  },
  {
    "url": "senior/2.typescript/18.statement.html",
    "revision": "98ff62c4f38b372e96cd171ca6c9561e"
  },
  {
    "url": "senior/2.typescript/19.extend.html",
    "revision": "09a9a07cbfd561f0955891c80699deba"
  },
  {
    "url": "senior/2.typescript/2.base.html",
    "revision": "78b30ed39a2642f8a45209da06f4bc62"
  },
  {
    "url": "senior/2.typescript/3.deduction.html",
    "revision": "26b789b80b21d84d01e98d8964d9453d"
  },
  {
    "url": "senior/2.typescript/4.type.html",
    "revision": "8ea7b78237f1a42397f7ef590578eef2"
  },
  {
    "url": "senior/2.typescript/5.class.html",
    "revision": "81577e0666e7525250ab92f5de7b8896"
  },
  {
    "url": "senior/2.typescript/6.interface.html",
    "revision": "87642583042ca4924e509b3c0f669bed"
  },
  {
    "url": "senior/2.typescript/7.generic.html",
    "revision": "604a119e3851f76b9e8fba61d0315682"
  },
  {
    "url": "senior/2.typescript/8.compatible.html",
    "revision": "ec19429deea11c372af7c9c9ba2883bf"
  },
  {
    "url": "senior/2.typescript/9.protect.html",
    "revision": "029c62651da745c28ed4a96e0b345a25"
  },
  {
    "url": "senior/3.deploy/1.index.html",
    "revision": "c375bb0ce719768b2708540903f8825e"
  },
  {
    "url": "senior/3.deploy/1.local.html",
    "revision": "927e6f0d4ba5e35bf9ca8b0a62ad7e51"
  },
  {
    "url": "senior/3.deploy/2.gitlab.html",
    "revision": "7a0ed1aa7ef7eb23a5c11c7ff44d3a6f"
  },
  {
    "url": "senior/3.deploy/3.genkins.html",
    "revision": "4ae501775977f19b8be67498ce0906c3"
  },
  {
    "url": "senior/3.deploy/4.centos.html",
    "revision": "44b0fec2e08903235c85d27344cf394e"
  },
  {
    "url": "senior/3.deploy/5.nginx.html",
    "revision": "9444a851812a8f1b3884b0aeb51fc33b"
  },
  {
    "url": "senior/4.component/1.button.html",
    "revision": "8950944d2f1c34bee780d8c23ddd220c"
  },
  {
    "url": "senior/4.component/1.env.html",
    "revision": "c6199f8f5a16cd8e8cfca7bbaf135289"
  },
  {
    "url": "senior/4.component/1.index.html",
    "revision": "862201b0a8d148637dc95c52256bb059"
  },
  {
    "url": "senior/4.component/1.recursion.html",
    "revision": "57d4605de9b3cb36e5bde3a6ce260cb9"
  },
  {
    "url": "senior/4.component/10.tree.html",
    "revision": "9bee55eed8fe6a8f73b3775175140908"
  },
  {
    "url": "senior/4.component/12.table.html",
    "revision": "ae6ad5217d554e792fc4b0280a94e303"
  },
  {
    "url": "senior/4.component/13.publish.html",
    "revision": "faec68b44d6e70cf5878101ffd924ea0"
  },
  {
    "url": "senior/4.component/2.dropdown.html",
    "revision": "2a67f8f3dba716c75d85f016af85053a"
  },
  {
    "url": "senior/4.component/3.dialog.html",
    "revision": "fc1a11bbc04e68b98b10e15d76fb62b2"
  },
  {
    "url": "senior/4.component/3.form.html",
    "revision": "c15ac264c7c3352bbece69de00b539b6"
  },
  {
    "url": "senior/4.component/4.input.html",
    "revision": "43b4a56fbcfbe0cbdd2c2d68f45dbd82"
  },
  {
    "url": "senior/4.component/4.render.html",
    "revision": "9541eceaba16c3d75197e614e1eac951"
  },
  {
    "url": "senior/4.component/5.checkBox.html",
    "revision": "58f5cbfb0784d9457c5070b17252bf72"
  },
  {
    "url": "senior/4.component/6.cascader.html",
    "revision": "c2df218dfac117730708da578f870ff7"
  },
  {
    "url": "senior/4.component/7.date.html",
    "revision": "6c58c4cdfa099f0447bcc8a779352437"
  },
  {
    "url": "senior/4.component/8.dispaly.html",
    "revision": "2c1088d276a378c8fa4b7598d5105982"
  },
  {
    "url": "senior/4.component/9.alert.html",
    "revision": "2b1248a6ed6794283c78c370a4b7dac9"
  },
  {
    "url": "senior/4.component/9.dynamics.html",
    "revision": "4bbf5b13ced948506a934070d59fd8ee"
  },
  {
    "url": "source/vue-cli2.x/1.index.html",
    "revision": "bef2a013ef278b9f7206e9f0e16ff4fd"
  },
  {
    "url": "source/vue-cli3.x/1.index.html",
    "revision": "9d7aba0d8333a138473a35c434efd3be"
  },
  {
    "url": "source/vue-router3.x/1.index.html",
    "revision": "6af5feaa4e39ca71bfc5d78a9d6e4326"
  },
  {
    "url": "source/vue-router3.x/2.origin.html",
    "revision": "c4bfe2400095b5bde60650a61e3c4cba"
  },
  {
    "url": "source/vue-router4.x/1.index.html",
    "revision": "15fba9a823efbf4eb8592859d62f9284"
  },
  {
    "url": "source/vue2.x/1.index.html",
    "revision": "c1e155403132316cfecc1f6fa9fa0b5b"
  },
  {
    "url": "source/vue2.x/10.optimize.html",
    "revision": "06ba31c3429c5c7eabe0f9123860b430"
  },
  {
    "url": "source/vue2.x/11.gencode.html",
    "revision": "6accb09a165e13a2a5f89445de75c070"
  },
  {
    "url": "source/vue2.x/12.mount.html",
    "revision": "e6e84af782b4852932551c4bca421fd5"
  },
  {
    "url": "source/vue2.x/13._render.html",
    "revision": "374f0f736182e1c424675262595cfe8f"
  },
  {
    "url": "source/vue2.x/14._update.html",
    "revision": "46610efd7c0de3e6419f5e636a6f9a1c"
  },
  {
    "url": "source/vue2.x/2.initGlobalAPI.html",
    "revision": "4aa00233bb9ab22969f0c4b078f7cfd2"
  },
  {
    "url": "source/vue2.x/3.initMixin.html",
    "revision": "44e8e34ef04006ab6926f599a7bbde43"
  },
  {
    "url": "source/vue2.x/4.stateMixin.html",
    "revision": "324be7a833e8efcd0985d3ce9f41fa10"
  },
  {
    "url": "source/vue2.x/5.eventsMixin.html",
    "revision": "64aa5f8f0e696dd06dabd75a1b5b4e32"
  },
  {
    "url": "source/vue2.x/6.lifecycleMixin.html",
    "revision": "41626198f804ae6a3269ba467ea1ebb1"
  },
  {
    "url": "source/vue2.x/7.renderMixin.html",
    "revision": "ddff68e909a7fc7f5076aaeec6de6e45"
  },
  {
    "url": "source/vue2.x/8.mount.html",
    "revision": "e09a87b39add85d242d4c42ff40359eb"
  },
  {
    "url": "source/vue2.x/9.ast.html",
    "revision": "4aa8623b954fe1501537d4d3dcf46bc5"
  },
  {
    "url": "source/vue3.x/1.index.html",
    "revision": "b56820025478d0c7cf23c94fc326131b"
  },
  {
    "url": "source/vue3.x/10.optimize.html",
    "revision": "4a41b39d1140bc382b93279268399a7c"
  },
  {
    "url": "source/vue3.x/11.gencode.html",
    "revision": "9b3a96acf6092bab5c34a3673b6b9e24"
  },
  {
    "url": "source/vue3.x/12.mount.html",
    "revision": "35e2c195eb78de4d2ec2b428279ef493"
  },
  {
    "url": "source/vue3.x/13._render.html",
    "revision": "bc182330779cae254efe8015e5a277ea"
  },
  {
    "url": "source/vue3.x/14._update.html",
    "revision": "ed6f9bfdc453ae7e68a2081c73d85436"
  },
  {
    "url": "source/vue3.x/2.initGlobalAPI.html",
    "revision": "9149b83f7e3b895b4ac0bb8fc2fdf7de"
  },
  {
    "url": "source/vue3.x/3.initMixin.html",
    "revision": "12180088690b41ee1307627107ad3467"
  },
  {
    "url": "source/vue3.x/4.stateMixin.html",
    "revision": "cafda209eb4f18d75c0a9c7d72224d44"
  },
  {
    "url": "source/vue3.x/5.eventsMixin.html",
    "revision": "852b857fe0c2d3f390ee7d7ba774a22a"
  },
  {
    "url": "source/vue3.x/6.lifecycleMixin.html",
    "revision": "6cbd1709f900b3ab7ce983761baf5940"
  },
  {
    "url": "source/vue3.x/7.renderMixin.html",
    "revision": "b79be4e642a2318520dd49d505226ebe"
  },
  {
    "url": "source/vue3.x/8.mount.html",
    "revision": "4ceeebf28db789cce114c66a17e1137c"
  },
  {
    "url": "source/vue3.x/9.ast.html",
    "revision": "43757d7c71e4eb582e0932dde14c6c6f"
  },
  {
    "url": "source/vuex3.x/1.index.html",
    "revision": "7ffdedca3ccf74108eec93caea7f690a"
  },
  {
    "url": "source/vuex3.x/2.use.html",
    "revision": "c8127a1b3be866bfad8750beb7a9b1fb"
  },
  {
    "url": "source/vuex3.x/3.origin.html",
    "revision": "55d5446dbdbae228a2c1dada759e0853"
  },
  {
    "url": "source/vuex4.x/1.index.html",
    "revision": "2e2510cc9b8d1e3250a95aa28f64ae09"
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
