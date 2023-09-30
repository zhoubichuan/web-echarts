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
    "revision": "058c9e52d7913f0e27d1a270e9e290cb"
  },
  {
    "url": "assets/css/0.styles.01252368.css",
    "revision": "fc7108e6e17427a766dc5ffebde23faf"
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
    "url": "assets/js/10.09d798c8.js",
    "revision": "04eaea6354c9f2be166e8984c028039d"
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
    "url": "assets/js/105.84bdf7d1.js",
    "revision": "6906f0294d0e84b7cd0a64cbaa6f93e0"
  },
  {
    "url": "assets/js/106.08724714.js",
    "revision": "3fd2331f47eb731e88fe4c84680b43f6"
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
    "url": "assets/js/11.d19e648c.js",
    "revision": "4a8a43ae4167675d3ee172ef25a92ae9"
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
    "url": "assets/js/12.cf90f1a6.js",
    "revision": "7f192620f0c85596fb90ef3fb287c26e"
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
    "url": "assets/js/122.5752a259.js",
    "revision": "b038c6e6e47788e205089de2f8e09267"
  },
  {
    "url": "assets/js/123.8baa3a91.js",
    "revision": "d320528a298cac25c865e97c67f844a8"
  },
  {
    "url": "assets/js/124.6459498d.js",
    "revision": "4714acc71b1bb2692084837fba9d74d7"
  },
  {
    "url": "assets/js/125.2febebfa.js",
    "revision": "52a7cc9a82698cb1b1f44730fecffef9"
  },
  {
    "url": "assets/js/126.7308ac56.js",
    "revision": "917770ac7bc882aaff60bac931574550"
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
    "url": "assets/js/13.55842a5d.js",
    "revision": "fdb4e6b800035fd33fcac4e21fe785ea"
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
    "url": "assets/js/135.df04469a.js",
    "revision": "e223616f014cae4937c8195bbf5523fc"
  },
  {
    "url": "assets/js/136.04a7f987.js",
    "revision": "20227c74ff42c4d70d79fe603a5e13d3"
  },
  {
    "url": "assets/js/137.73f51472.js",
    "revision": "d5246433417d8a85798f3ec37e2fc7f2"
  },
  {
    "url": "assets/js/138.7547e007.js",
    "revision": "dc48b27bdd892ee7f6b05fb2789ad2e9"
  },
  {
    "url": "assets/js/139.f7102515.js",
    "revision": "a91d91f9940490c3344247e582564286"
  },
  {
    "url": "assets/js/14.518e193d.js",
    "revision": "000856f75b0a087f3326f0ba3471b94d"
  },
  {
    "url": "assets/js/140.caee2ef8.js",
    "revision": "220ef276e508f777da1f61975473b055"
  },
  {
    "url": "assets/js/141.31e4ace8.js",
    "revision": "2994aafad254f8eba2cf4dd813e75e01"
  },
  {
    "url": "assets/js/142.b33a5729.js",
    "revision": "dbba101b684b9a704bf41e4e2c85e415"
  },
  {
    "url": "assets/js/143.f29a5bf8.js",
    "revision": "2694a3bfd3061e2767e059c790f715e0"
  },
  {
    "url": "assets/js/144.29d5af84.js",
    "revision": "506d212213b276f584a3e22d5e834643"
  },
  {
    "url": "assets/js/145.cfaac531.js",
    "revision": "ec7a871ab5a5c461a71e1d9eb9640ac8"
  },
  {
    "url": "assets/js/146.b7a61625.js",
    "revision": "77c58a9c178e4df1706c7056ac9c44ad"
  },
  {
    "url": "assets/js/147.951bccd9.js",
    "revision": "4f4a9380e775fc7c905d3ed4ad89557f"
  },
  {
    "url": "assets/js/148.c3e82cd2.js",
    "revision": "494bb56b502a85a20b6da76e7290a7a9"
  },
  {
    "url": "assets/js/149.35506154.js",
    "revision": "9bb591fc980c9b2e528754bfa12668eb"
  },
  {
    "url": "assets/js/15.df643336.js",
    "revision": "934b606fa4fef89c7b85d4a0c9111b96"
  },
  {
    "url": "assets/js/150.505b7fd1.js",
    "revision": "b4199cf40786044f243efc06fb0633a0"
  },
  {
    "url": "assets/js/151.6fc84cfb.js",
    "revision": "8a983e0f974fbc1e5f2b4f64adc5452b"
  },
  {
    "url": "assets/js/152.07c573c8.js",
    "revision": "667a2307b825b4a1e249c9b190e1fef4"
  },
  {
    "url": "assets/js/153.6552e4a5.js",
    "revision": "da44797689b450f59f0557ca7bee1ceb"
  },
  {
    "url": "assets/js/154.b676f572.js",
    "revision": "d36c79d2199cc9c16cfe230a8dd5d517"
  },
  {
    "url": "assets/js/155.02af380c.js",
    "revision": "b13c6da2faae7647ec5445b56ffcf0b8"
  },
  {
    "url": "assets/js/156.89d3d3c3.js",
    "revision": "c53dbdeaa1ced951f9cf741fa9a694a1"
  },
  {
    "url": "assets/js/16.30643072.js",
    "revision": "4e91ec77e637e97e075e931891296810"
  },
  {
    "url": "assets/js/17.50cc21ae.js",
    "revision": "ea0a937e1f4d318c9ab98765ea7fee6d"
  },
  {
    "url": "assets/js/18.85b24d54.js",
    "revision": "f403c478caa9810ca286216099614e33"
  },
  {
    "url": "assets/js/19.caa8a861.js",
    "revision": "a966009eea13f7d6a74b709600bc0b29"
  },
  {
    "url": "assets/js/2.a9b66600.js",
    "revision": "cb58ae1a9b19fdc7ee385ce95b9e96c5"
  },
  {
    "url": "assets/js/20.c2a9d055.js",
    "revision": "3ef4e0cc3c923d92072f04e7ed213740"
  },
  {
    "url": "assets/js/21.3f9beecf.js",
    "revision": "7ef868df19254d75acfb15b4b7a8ee9d"
  },
  {
    "url": "assets/js/22.5b99ba1c.js",
    "revision": "eefba4c4291d915d7ae44b56e6d14040"
  },
  {
    "url": "assets/js/23.32e09c6c.js",
    "revision": "d869fbe4c320ca014fc019226c0d846d"
  },
  {
    "url": "assets/js/24.7c66e7bd.js",
    "revision": "279f0c89b6a4447ea27b676c57705cbc"
  },
  {
    "url": "assets/js/25.fa6966de.js",
    "revision": "45f2d168e7259f520100132c2de1cf27"
  },
  {
    "url": "assets/js/26.dbf09c5e.js",
    "revision": "66ec965ad99a8b1617da4258e2bc12ed"
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
    "url": "assets/js/3.2c8646b2.js",
    "revision": "1c46c1e2c2cd2626b0722481db86f32f"
  },
  {
    "url": "assets/js/30.c5c51298.js",
    "revision": "7131e1f3a18121e230177482eb095aca"
  },
  {
    "url": "assets/js/31.a87445ca.js",
    "revision": "f89c5f19b976f3528b336e82a06ad993"
  },
  {
    "url": "assets/js/32.4f1d376d.js",
    "revision": "9eb79bd77921ac612b2bed7b83f0f1cf"
  },
  {
    "url": "assets/js/33.6d3326f5.js",
    "revision": "bb0c23540187c5a451213c75c4b2a664"
  },
  {
    "url": "assets/js/34.85427ade.js",
    "revision": "c8b5444608fa0e3f179450f4ac3b3685"
  },
  {
    "url": "assets/js/35.59c103d1.js",
    "revision": "8445feb1ed09ee1808c8ec85566627fb"
  },
  {
    "url": "assets/js/36.39721afd.js",
    "revision": "3e9e878930e42e275c6848618b365e6f"
  },
  {
    "url": "assets/js/37.45df45ad.js",
    "revision": "b31385a5beafdb98abd9ed556fdc97c7"
  },
  {
    "url": "assets/js/38.4c512a63.js",
    "revision": "2117176e518ec606ffaa8bb7b0cb0cbf"
  },
  {
    "url": "assets/js/39.971c04c9.js",
    "revision": "b74e053ac4986fbff05aa1733d177933"
  },
  {
    "url": "assets/js/4.89986aae.js",
    "revision": "3416779e92913e6e90ab523262fbf336"
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
    "url": "assets/js/45.4759a8be.js",
    "revision": "ecc6776834e1f532dc5fa5f4ae4ab2e7"
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
    "url": "assets/js/5.c672d7bf.js",
    "revision": "42cbea668b1d7f63d44082ba250687f7"
  },
  {
    "url": "assets/js/50.55875b26.js",
    "revision": "9381c808108f1b1b4372d59f8b63aa3a"
  },
  {
    "url": "assets/js/51.9e4266ad.js",
    "revision": "c18504bf9c9285a0c84059c6e4c16024"
  },
  {
    "url": "assets/js/52.2684285b.js",
    "revision": "5b0e536f85b12c7d5679d7257618c43b"
  },
  {
    "url": "assets/js/53.c9028a65.js",
    "revision": "92eb88c14068912f4015c1f9678411ca"
  },
  {
    "url": "assets/js/54.e91455a5.js",
    "revision": "f36f15afc7fb0f7b03df39de8653a432"
  },
  {
    "url": "assets/js/55.3b9aa945.js",
    "revision": "d4088eab0df625ff7c710b47da50024d"
  },
  {
    "url": "assets/js/56.093ea2aa.js",
    "revision": "520f8cb5fa18f2b7199269909de3e6b1"
  },
  {
    "url": "assets/js/57.782eecd3.js",
    "revision": "5a66dce41e0ec2d4cd1f5686bf46aaad"
  },
  {
    "url": "assets/js/58.839b0fda.js",
    "revision": "7ef75c14e07be885457be5e978e92620"
  },
  {
    "url": "assets/js/59.84ad1751.js",
    "revision": "cfc980e647594cc9aee452717efdbbf6"
  },
  {
    "url": "assets/js/6.3ec1c7c1.js",
    "revision": "a34f612c3db5ac628bad47db78f76e37"
  },
  {
    "url": "assets/js/60.7ba871ec.js",
    "revision": "de414c6edcd1afd64a792dd34c6f494a"
  },
  {
    "url": "assets/js/61.2c9ce505.js",
    "revision": "edf3339be6712c2788e399832c55109e"
  },
  {
    "url": "assets/js/62.5af63c6e.js",
    "revision": "a176ffc2a69e71fbed09c0bbd9f8757e"
  },
  {
    "url": "assets/js/63.eddb9fd1.js",
    "revision": "95a8017e82cad0bb87fbf883ed1466bd"
  },
  {
    "url": "assets/js/64.af21d49f.js",
    "revision": "d06a05fc4d18b90475b86f2e4e5f6d15"
  },
  {
    "url": "assets/js/65.eb9e8e22.js",
    "revision": "c7ea9be1cbdc3e75e6e8904e1e014555"
  },
  {
    "url": "assets/js/66.879fc491.js",
    "revision": "f7625966367c8b911bc80c7478795d34"
  },
  {
    "url": "assets/js/67.33100487.js",
    "revision": "27e58e2a433d68acd1dead574ab0dedf"
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
    "url": "assets/js/7.596b55d9.js",
    "revision": "14ab8acabb7f9fc59c380a25729b7e28"
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
    "url": "assets/js/76.cee6b352.js",
    "revision": "943da9caa54070705fea7caa4a211c29"
  },
  {
    "url": "assets/js/77.5d3977be.js",
    "revision": "c8c00c0e1012590cf9216966ee98bd54"
  },
  {
    "url": "assets/js/78.39b89caa.js",
    "revision": "932d1e5189e7646794df72b91bddefe7"
  },
  {
    "url": "assets/js/79.c2f61764.js",
    "revision": "83258d6fbee621de3bd4529af72096bd"
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
    "revision": "dbfdf12f3cf2e967698a3c0c5ad7d5fd"
  },
  {
    "url": "base/api/1.index.html",
    "revision": "3fd8efbab3af2d32c101dc2ee460fcbb"
  },
  {
    "url": "base/api/2.echartsInstance.html",
    "revision": "da5737e05ac918b77dc737db9522c396"
  },
  {
    "url": "base/api/3.action.html",
    "revision": "fa1dc657484b33b2cffa2ab40ba49b5a"
  },
  {
    "url": "base/api/4.events.html",
    "revision": "397a9e20ff95fe306d7ebd422d7e2d30"
  },
  {
    "url": "base/components/1.index.html",
    "revision": "4370a77949a4179ab289434436081d4d"
  },
  {
    "url": "base/components/1.legend.html",
    "revision": "1cf1406ad0a6ab3c87b842c6beefcfaa"
  },
  {
    "url": "base/components/2.grid.html",
    "revision": "8aea74f47f499464a50d6468dd14bb62"
  },
  {
    "url": "base/components/2.polar.html",
    "revision": "e059487b98f783c6184fa7b653568fba"
  },
  {
    "url": "base/components/2.radiusAxis.html",
    "revision": "c624285d10122d05ef252b6ad33cfebb"
  },
  {
    "url": "base/components/2.xAxis.html",
    "revision": "3bc61b1ffbdd48b82d6d6144950fa28c"
  },
  {
    "url": "base/components/2.yAxis.html",
    "revision": "06e07489d2053a40b2faabde03f3d7a3"
  },
  {
    "url": "base/components/3.angleAxis.html",
    "revision": "9f16dea16342df2568c2ffdceb2c0f9a"
  },
  {
    "url": "base/components/4.radar.html",
    "revision": "7591ced83cc10ca02c2bce9f52bdfe9e"
  },
  {
    "url": "base/components/5.dataZoom.html",
    "revision": "bd9ccad9ac4f7a9a80241a1df3dcf516"
  },
  {
    "url": "base/components/6.visualMap.html",
    "revision": "bd02fd2850f44c127dd6785a2990f470"
  },
  {
    "url": "base/components/7.tooltip.html",
    "revision": "d92e3cefac46a3889ddb35dcf2308d05"
  },
  {
    "url": "base/components/8.geo.html",
    "revision": "57235df90a21b371549971688a291a48"
  },
  {
    "url": "base/gl/1.index.html",
    "revision": "5a8755dc4ff051e03df598b9e5a82d2b"
  },
  {
    "url": "base/gl/1.scatter3D.html",
    "revision": "6d8694fe382b14aa2917801181f68f85"
  },
  {
    "url": "base/gl/10.flowGL.html",
    "revision": "413be21f006fd17a184a7aab61c2a7f6"
  },
  {
    "url": "base/gl/2.bar3D.html",
    "revision": "1c13de5b9e405e470f1cbecacdc29f7f"
  },
  {
    "url": "base/gl/3.line3D.html",
    "revision": "9735a6fcc4a72e28c6b06492affe898a"
  },
  {
    "url": "base/gl/4.lines3D.html",
    "revision": "dc3c755fe3c3a08a04418da00c2cb922"
  },
  {
    "url": "base/gl/5.map3D.html",
    "revision": "7a79078dd0972a1c286c58140488ac48"
  },
  {
    "url": "base/gl/6.surface.html",
    "revision": "4ac0032d1fd67373e9c0bab8d0f17342"
  },
  {
    "url": "base/gl/7.polygons3D.html",
    "revision": "8c1f71ea7dc20836cf7ef030dcbaf16b"
  },
  {
    "url": "base/gl/8.scatterGL.html",
    "revision": "92a8952a78e335e2e7bcaa239a300d95"
  },
  {
    "url": "base/gl/9.graphGL.html",
    "revision": "e67e312222b02533fdec72aa6f755896"
  },
  {
    "url": "base/series/1.index.html",
    "revision": "49a9c3059713a7900d29fa8f197f183f"
  },
  {
    "url": "base/series/1.line.html",
    "revision": "1b5445d37667447e2442890c81088887"
  },
  {
    "url": "base/series/10.boxplot.html",
    "revision": "7632cf7545e91ec16ef79f6c304af441"
  },
  {
    "url": "base/series/11.candlestick.html",
    "revision": "1884881ce602443bf3cad88dccec3833"
  },
  {
    "url": "base/series/12.heatmap.html",
    "revision": "b9784901066a1c8ae1c8cf0a8eca04ca"
  },
  {
    "url": "base/series/13.1.html",
    "revision": "eaeeea9a8eb0fbcc34c45e26b5ff7783"
  },
  {
    "url": "base/series/13.map.html",
    "revision": "7cd51f5ddfe2f33ff75c4d73cc8803ae"
  },
  {
    "url": "base/series/14.parallel.html",
    "revision": "8652a15fc866684182253d46e284f188"
  },
  {
    "url": "base/series/15.lines.html",
    "revision": "be31d79038e2892715a8480e92b0a963"
  },
  {
    "url": "base/series/16.graph.html",
    "revision": "02a50e4394c700501c79ad86530de475"
  },
  {
    "url": "base/series/17.sankey.html",
    "revision": "c2476be2d84566d615026020dffd1c75"
  },
  {
    "url": "base/series/18.funnel.html",
    "revision": "4f92974b401d2b9e7f0d05e1194a9159"
  },
  {
    "url": "base/series/19.gauge.html",
    "revision": "3afbf1e03dccaff0835ffb52eee27944"
  },
  {
    "url": "base/series/2.bar.html",
    "revision": "a3d0a5d3cd14de7fee75a477fa44c4e0"
  },
  {
    "url": "base/series/20.pictorialBar.html",
    "revision": "829b9408596925bc6fada3acf7a7dbb0"
  },
  {
    "url": "base/series/21.themeRiver.html",
    "revision": "7d60305fe0ca94924cd0bd246df0b381"
  },
  {
    "url": "base/series/22.custom.html",
    "revision": "a9b44f6a61acf2ef74772f1bc659a824"
  },
  {
    "url": "base/series/3.pie.html",
    "revision": "656e83c9d0f824d190f9da64b6fec00b"
  },
  {
    "url": "base/series/4.scatter.html",
    "revision": "61a811c1ad237eb90958ad9ed8c89809"
  },
  {
    "url": "base/series/5.effectScatter.html",
    "revision": "d56157b851b603da57ae9d9b6ad61b8f"
  },
  {
    "url": "base/series/6.radar.html",
    "revision": "ac63fbaeab9de36dfdf9e81e89742ff6"
  },
  {
    "url": "base/series/7.tree.html",
    "revision": "9d2d8310fa1d40641230f4e2ab3c96c3"
  },
  {
    "url": "base/series/8.treemap.html",
    "revision": "97c8e05fa0a4357059026ebbbf46e001"
  },
  {
    "url": "base/series/9.sunburst.html",
    "revision": "d967e2e6d0f90db89a353513c23ce9ed"
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
    "revision": "84827ba81dfe08d493d0a87c64c7f9fd"
  },
  {
    "url": "mock/http.js",
    "revision": "a219140640bec4dfbe8f4fe88d351ed8"
  },
  {
    "url": "senior/1.micro/1.index.html",
    "revision": "82bcc8a6c694b14ee499396d6bee093b"
  },
  {
    "url": "senior/1.micro/1.singlespa.html",
    "revision": "e58ca005908a0e22f2b61d8111de7a71"
  },
  {
    "url": "senior/1.micro/1.singlespa2.html",
    "revision": "94ca4b382f5fb586e2a37e342821c567"
  },
  {
    "url": "senior/1.micro/2.qiankun.html",
    "revision": "909fe165260bbbf85bfd69b5ae2ff89a"
  },
  {
    "url": "senior/1.micro/2.qiankun2.html",
    "revision": "e4eba6d508d52bb9c15c8598372104c0"
  },
  {
    "url": "senior/1.micro/3.share.html",
    "revision": "3974a95ead0f8817a39aeb98f4185939"
  },
  {
    "url": "senior/1.micro/4.dev.html",
    "revision": "2e0b67339acba5123fbf164b9f40a047"
  },
  {
    "url": "senior/2.typescript/1.env.html",
    "revision": "627505f5b8247cd8881383f350f3c247"
  },
  {
    "url": "senior/2.typescript/1.index.html",
    "revision": "52539c0bca8bcb898a6430c492dd8be4"
  },
  {
    "url": "senior/2.typescript/10.infer.html",
    "revision": "03f6a2b860474198915b64d8b257ad4b"
  },
  {
    "url": "senior/2.typescript/11.overlapping.html",
    "revision": "416dc20cdfbcab78a10e7b8a6c736831"
  },
  {
    "url": "senior/2.typescript/12.condition.html",
    "revision": "a2769048064d25b3729515da3710870f"
  },
  {
    "url": "senior/2.typescript/13.builtin.html",
    "revision": "4d2b5d68bf0fa6f818569e349c8ab774"
  },
  {
    "url": "senior/2.typescript/14.package.html",
    "revision": "b716200ce30b230e942b02e9c2230c16"
  },
  {
    "url": "senior/2.typescript/15.custom.html",
    "revision": "ce640ecaaf36b618919180e6601fcc49"
  },
  {
    "url": "senior/2.typescript/16.unknown.html",
    "revision": "dbb55dc22afaa3dd5649acade03803a8"
  },
  {
    "url": "senior/2.typescript/17.module.html",
    "revision": "2bea3bbfd2f3df00ab24a50a0a9fe640"
  },
  {
    "url": "senior/2.typescript/18.statement.html",
    "revision": "3e8d37a11e5a0df89df3b9006244b853"
  },
  {
    "url": "senior/2.typescript/19.extend.html",
    "revision": "0e948e1bc168adfc4499ec37f42efa4e"
  },
  {
    "url": "senior/2.typescript/2.base.html",
    "revision": "cce671cff91b227f6c992691804d8e6d"
  },
  {
    "url": "senior/2.typescript/3.deduction.html",
    "revision": "b9a99aff2582c8388af984260f286f2d"
  },
  {
    "url": "senior/2.typescript/4.type.html",
    "revision": "b20d8e4daca4d37b07a74c8448f7fa8a"
  },
  {
    "url": "senior/2.typescript/5.class.html",
    "revision": "0b4ccbfadf0303ed0974730404e7ea6b"
  },
  {
    "url": "senior/2.typescript/6.interface.html",
    "revision": "77d90962bdb5476886fd9c43325f4831"
  },
  {
    "url": "senior/2.typescript/7.generic.html",
    "revision": "7b4299c5092b1fcdd600ee5eb0019875"
  },
  {
    "url": "senior/2.typescript/8.compatible.html",
    "revision": "89160b9f8b363646589ad42888b3a711"
  },
  {
    "url": "senior/2.typescript/9.protect.html",
    "revision": "4a7c4424d5ed7d5e3ded24eea8d6eb1a"
  },
  {
    "url": "senior/3.deploy/1.index.html",
    "revision": "6c620de425c146b87d03cd59a8b6b653"
  },
  {
    "url": "senior/3.deploy/1.local.html",
    "revision": "400a8b5fe43bd4040691ba392e8c1652"
  },
  {
    "url": "senior/3.deploy/2.gitlab.html",
    "revision": "a3adadd72a32cf1bd93d9a97b25fb6ba"
  },
  {
    "url": "senior/3.deploy/3.genkins.html",
    "revision": "1cb7cd2690ee71f2d25e5439d1c2b77e"
  },
  {
    "url": "senior/3.deploy/4.centos.html",
    "revision": "b3437da64da6f70159a9b33837854558"
  },
  {
    "url": "senior/3.deploy/5.nginx.html",
    "revision": "afc04ff2ec3d76a7fa6f50610f8fe136"
  },
  {
    "url": "senior/4.component/1.button.html",
    "revision": "30e7a736e5613cf8395f4374e683b012"
  },
  {
    "url": "senior/4.component/1.env.html",
    "revision": "da5e4ccafe5903fa03921928b594623c"
  },
  {
    "url": "senior/4.component/1.index.html",
    "revision": "78380057e4a03e9ae1a58c3103cc1dc6"
  },
  {
    "url": "senior/4.component/1.recursion.html",
    "revision": "52fbd605c4265eef77720f2f68d2ba71"
  },
  {
    "url": "senior/4.component/10.tree.html",
    "revision": "2cf9390c010b452427c2d9b8efff966f"
  },
  {
    "url": "senior/4.component/12.table.html",
    "revision": "7e1e4681386b2ea8a43437e4cf249f7c"
  },
  {
    "url": "senior/4.component/13.publish.html",
    "revision": "1843ecd55cf9cee1e12ee00ab1f056bc"
  },
  {
    "url": "senior/4.component/2.dropdown.html",
    "revision": "de7a8e1865deda8f2ca74ebaea90b9a2"
  },
  {
    "url": "senior/4.component/3.dialog.html",
    "revision": "9156d5e688c7f6f00c7af8c6a48f183e"
  },
  {
    "url": "senior/4.component/3.form.html",
    "revision": "c0e635f6fd73dcfc742950994b05d2f9"
  },
  {
    "url": "senior/4.component/4.input.html",
    "revision": "ed27ddb3725dd0ece14915f4268ba0c5"
  },
  {
    "url": "senior/4.component/4.render.html",
    "revision": "d01dfc546bf6d15421e141bf725e97a3"
  },
  {
    "url": "senior/4.component/5.checkBox.html",
    "revision": "357075c65d22bf21a7f435db0d19f7da"
  },
  {
    "url": "senior/4.component/6.cascader.html",
    "revision": "266f3cde4080f459e9c55e418ee9a8d1"
  },
  {
    "url": "senior/4.component/7.date.html",
    "revision": "c461afdb8ea193d4f68193ae6b36ca33"
  },
  {
    "url": "senior/4.component/8.dispaly.html",
    "revision": "82fb37f6dc8a17ec49dab6768c3a3086"
  },
  {
    "url": "senior/4.component/9.alert.html",
    "revision": "5220c5081e05074960291b19f4b4e133"
  },
  {
    "url": "senior/4.component/9.dynamics.html",
    "revision": "c9f19e5607fff8d20fd6f8f0db61f434"
  },
  {
    "url": "source/vue-cli2.x/1.index.html",
    "revision": "2690a650af2b6962478964efc649c6a6"
  },
  {
    "url": "source/vue-cli3.x/1.index.html",
    "revision": "643fdfb2a2c4375d8c31e2d481b8c5cf"
  },
  {
    "url": "source/vue-router3.x/1.index.html",
    "revision": "210747693dd5ea68814bb5fa6c2fb633"
  },
  {
    "url": "source/vue-router3.x/2.origin.html",
    "revision": "7d8ef3f95f02db426162c6c3d6178e4d"
  },
  {
    "url": "source/vue-router4.x/1.index.html",
    "revision": "e11407398ae65df6fa54892273f4b37a"
  },
  {
    "url": "source/vue2.x/1.index.html",
    "revision": "34a0eb7426e35f67fedf6e8cf0320e26"
  },
  {
    "url": "source/vue2.x/10.optimize.html",
    "revision": "e731cd10000033d8f986e9aef131bd66"
  },
  {
    "url": "source/vue2.x/11.gencode.html",
    "revision": "68f1ce595a11482162163243a2eb9504"
  },
  {
    "url": "source/vue2.x/12.mount.html",
    "revision": "646c57ce1dc1c9c6490b26c0ad7892d5"
  },
  {
    "url": "source/vue2.x/13._render.html",
    "revision": "7873e683180a247be5a431930f902c51"
  },
  {
    "url": "source/vue2.x/14._update.html",
    "revision": "1d80f17f9e2e3152c6216ba6e212ce0d"
  },
  {
    "url": "source/vue2.x/2.initGlobalAPI.html",
    "revision": "afba4429346662b2156ff5dd0a2d570e"
  },
  {
    "url": "source/vue2.x/3.initMixin.html",
    "revision": "d3fe17002e0497af84d61a4f9a827b63"
  },
  {
    "url": "source/vue2.x/4.stateMixin.html",
    "revision": "f479123c51480efc2112a2a36540015d"
  },
  {
    "url": "source/vue2.x/5.eventsMixin.html",
    "revision": "6bf0c7a1e8480a11966e3b464de73a09"
  },
  {
    "url": "source/vue2.x/6.lifecycleMixin.html",
    "revision": "34ce86d8e78b924e6e5e8391ed261d98"
  },
  {
    "url": "source/vue2.x/7.renderMixin.html",
    "revision": "a95f7a494556967e847a5140d5f9cef8"
  },
  {
    "url": "source/vue2.x/8.mount.html",
    "revision": "6681462b5165b7a9efc5c39495485806"
  },
  {
    "url": "source/vue2.x/9.ast.html",
    "revision": "3e94f2a456e65ce27d9518a60a0d229f"
  },
  {
    "url": "source/vue3.x/1.index.html",
    "revision": "e251ec4292ef51ae0563a5aa4b432212"
  },
  {
    "url": "source/vue3.x/10.optimize.html",
    "revision": "6e5a5ae15be0d45ecd1bca7df1317681"
  },
  {
    "url": "source/vue3.x/11.gencode.html",
    "revision": "839c64dfd3211812fed50135d6ddcfd6"
  },
  {
    "url": "source/vue3.x/12.mount.html",
    "revision": "fd422080e5f562146189ced9414e27b5"
  },
  {
    "url": "source/vue3.x/13._render.html",
    "revision": "54331495aab2bac1d69874ef9fafaca2"
  },
  {
    "url": "source/vue3.x/14._update.html",
    "revision": "0449cd0e2530500ad7dc17e103caa499"
  },
  {
    "url": "source/vue3.x/2.initGlobalAPI.html",
    "revision": "df16e9994cd076c2a937fa02c5e0385d"
  },
  {
    "url": "source/vue3.x/3.initMixin.html",
    "revision": "13c1613e191544f9d4540ba9fbefaac5"
  },
  {
    "url": "source/vue3.x/4.stateMixin.html",
    "revision": "8446d4a53508cb9d337c05a5e7361acf"
  },
  {
    "url": "source/vue3.x/5.eventsMixin.html",
    "revision": "41ce4b304be2a724efb1c58bb44b3328"
  },
  {
    "url": "source/vue3.x/6.lifecycleMixin.html",
    "revision": "1a059d648e180c88cae7151e424c3b2d"
  },
  {
    "url": "source/vue3.x/7.renderMixin.html",
    "revision": "c095a46ca7894f163cf7c09faee5c783"
  },
  {
    "url": "source/vue3.x/8.mount.html",
    "revision": "ca1d4140da3c8c17710163c5383a44f0"
  },
  {
    "url": "source/vue3.x/9.ast.html",
    "revision": "df504e24b80d9a8f1826b9803f5d83f4"
  },
  {
    "url": "source/vuex3.x/1.index.html",
    "revision": "0019af13d2933e5f09eef5ae1e2a5c86"
  },
  {
    "url": "source/vuex3.x/2.use.html",
    "revision": "8ef7db1b696d96b847c5dd66490a67b3"
  },
  {
    "url": "source/vuex3.x/3.origin.html",
    "revision": "364b496e59cceadafd637e8cfcac3758"
  },
  {
    "url": "source/vuex4.x/1.index.html",
    "revision": "cb22e8b2c01dd31dc1ed549e957a8bba"
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
