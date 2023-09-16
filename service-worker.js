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
    "revision": "30c72edf365354b0b448bf9d08afa657"
  },
  {
    "url": "assets/css/0.styles.7692da92.css",
    "revision": "a9ddd57d80e97af77f70be1f90f15362"
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
    "url": "assets/js/10.07bc5074.js",
    "revision": "e45d5cfbd22acb8905ae74402a83f58f"
  },
  {
    "url": "assets/js/100.7d6d11f6.js",
    "revision": "e3bfbe085beee717c9da2f60fffde638"
  },
  {
    "url": "assets/js/101.6a94532c.js",
    "revision": "68b55350b6ad102f7c47ad4f29cab40c"
  },
  {
    "url": "assets/js/102.01f9b3f6.js",
    "revision": "43b9268cc7138d755c404286cb7edb11"
  },
  {
    "url": "assets/js/103.443d49ce.js",
    "revision": "aa66f1c3fb485d665866b12c1412c8f6"
  },
  {
    "url": "assets/js/104.d7ce5462.js",
    "revision": "bd0aca1cc457edea5d5d2965a72a0f83"
  },
  {
    "url": "assets/js/105.264467c4.js",
    "revision": "cedbd969b0abf097dc7ba02421016964"
  },
  {
    "url": "assets/js/106.9fc4e9a7.js",
    "revision": "29a87362814b1fec5dac25c481bea538"
  },
  {
    "url": "assets/js/107.9bd673a7.js",
    "revision": "b699ce5806a41bd97b6dbf34894fb3f1"
  },
  {
    "url": "assets/js/108.59445f13.js",
    "revision": "0a89dd78a9f7165eec804c8ee4be1508"
  },
  {
    "url": "assets/js/109.7401dcda.js",
    "revision": "64894b6a436834f8cdb0a32d1da59ac6"
  },
  {
    "url": "assets/js/11.68b428e3.js",
    "revision": "4235353c4f18841b0aab208b8e54d1f7"
  },
  {
    "url": "assets/js/110.1722b760.js",
    "revision": "d8a524739b81d1432b53bb430161ef8d"
  },
  {
    "url": "assets/js/111.eeba8acd.js",
    "revision": "3eca8a26263e173253fe6c2e280c37dc"
  },
  {
    "url": "assets/js/112.e4c640b4.js",
    "revision": "c93b260a912cf896687577c388b94218"
  },
  {
    "url": "assets/js/113.46877bf2.js",
    "revision": "6d321a2eb0ae13f6d2f0d8a7ad6ac6ce"
  },
  {
    "url": "assets/js/114.485ce8c2.js",
    "revision": "c8a1e3a8ad4974a41b4844e46eeecf63"
  },
  {
    "url": "assets/js/115.ab21a364.js",
    "revision": "ecebe9990ffc47da5d65f767a0a0eafc"
  },
  {
    "url": "assets/js/116.034950ba.js",
    "revision": "ec02a797d8b518846f0a40ba0623e17c"
  },
  {
    "url": "assets/js/117.60eba436.js",
    "revision": "ed8bc27062d7df8759c7ea047a807f7f"
  },
  {
    "url": "assets/js/118.b67e2587.js",
    "revision": "7ced68cf6acde095fa7754c3d800046f"
  },
  {
    "url": "assets/js/119.f6d1439f.js",
    "revision": "d84c0b3e868db66bd4cf281d178f00aa"
  },
  {
    "url": "assets/js/12.322af9f3.js",
    "revision": "112df8849f9ea9ef733123917e230fdc"
  },
  {
    "url": "assets/js/120.8de77678.js",
    "revision": "7f526b1643c3e79f7060595ea70ce3a5"
  },
  {
    "url": "assets/js/121.2b1504b9.js",
    "revision": "0de3ca9314bf184547f7fc8fa4455c18"
  },
  {
    "url": "assets/js/122.6f200c68.js",
    "revision": "5bb01f89fb5d6985fb5c6b96e4429662"
  },
  {
    "url": "assets/js/123.40c76f8d.js",
    "revision": "3a21a5d365bcd0315bb5184b61103609"
  },
  {
    "url": "assets/js/124.f7b31190.js",
    "revision": "d32ef05a208293843bc48ca711c5680d"
  },
  {
    "url": "assets/js/125.1b1622a6.js",
    "revision": "ba3f26ccf756a907c325a508af3b6bfd"
  },
  {
    "url": "assets/js/126.5da591f7.js",
    "revision": "394344e0e08b4182418f59ca987e8981"
  },
  {
    "url": "assets/js/127.5dffefe6.js",
    "revision": "6e46bfeb70c43256f104d366cce494d6"
  },
  {
    "url": "assets/js/128.68a899f9.js",
    "revision": "1e0ed5597e72b4dd6ea47199e7fdab40"
  },
  {
    "url": "assets/js/129.3647661f.js",
    "revision": "c630a5cfdeebdcb8a15f6237ac84ebd2"
  },
  {
    "url": "assets/js/13.bf085cbd.js",
    "revision": "d5eb51d0cdd3128fc9632e6e4e69473f"
  },
  {
    "url": "assets/js/130.a01aa641.js",
    "revision": "0f2f85c37091cf1845111ef48c01dfd2"
  },
  {
    "url": "assets/js/131.6c39fe1f.js",
    "revision": "f1a83020937dc8db883d4088185d040b"
  },
  {
    "url": "assets/js/132.ff16eea1.js",
    "revision": "cf7c06d35ee5ba32573e9d580861e792"
  },
  {
    "url": "assets/js/133.35577523.js",
    "revision": "30ac6b7a7de89acc77760715dd1c5eb4"
  },
  {
    "url": "assets/js/134.c72afb15.js",
    "revision": "67030b670014bde9afc32792a2491023"
  },
  {
    "url": "assets/js/135.119738f0.js",
    "revision": "9aa6f00d584a2e9097a9a32f045b7cdd"
  },
  {
    "url": "assets/js/136.e5d01f0c.js",
    "revision": "b6f48d0dac91ea99ca46e1d315c12cc2"
  },
  {
    "url": "assets/js/137.e23f1fee.js",
    "revision": "ad5641cba88e5020390747bb865075ef"
  },
  {
    "url": "assets/js/138.2e4c1957.js",
    "revision": "7ef0ef796f35aadc1cc0026fe71a426f"
  },
  {
    "url": "assets/js/139.9c78039f.js",
    "revision": "1a4f98def24b578a8e69fd5e116fcf20"
  },
  {
    "url": "assets/js/14.597244f1.js",
    "revision": "4203302c8f069600afd9d9b4339a7b90"
  },
  {
    "url": "assets/js/140.632d5917.js",
    "revision": "eaf04397d948043212d7d1037131c8fb"
  },
  {
    "url": "assets/js/141.82174d84.js",
    "revision": "d3dfea1eafe97d2adff6f4dd8deec815"
  },
  {
    "url": "assets/js/142.945f0c1e.js",
    "revision": "6c7d6f6a5c5863ae7891ca37e3d3b547"
  },
  {
    "url": "assets/js/143.765816c3.js",
    "revision": "57de6f3cc6aa30df93d30db114eb80bc"
  },
  {
    "url": "assets/js/144.25ef3a89.js",
    "revision": "d84d1e5fb86f57268d9e8e0d1dc493cb"
  },
  {
    "url": "assets/js/145.75452a19.js",
    "revision": "546a956f631a73cc0def7b1b93fd372a"
  },
  {
    "url": "assets/js/146.f2ad3dd9.js",
    "revision": "28bbc26bc192975d38276fb09e7c179d"
  },
  {
    "url": "assets/js/147.7a0c6220.js",
    "revision": "b933753e49b90f3170eff91cd091d55d"
  },
  {
    "url": "assets/js/148.0731c5ce.js",
    "revision": "b71243534e03a15a923ec64bb48e8034"
  },
  {
    "url": "assets/js/149.51999036.js",
    "revision": "81128b22cf60d4e042f65c5a7c42e056"
  },
  {
    "url": "assets/js/15.27ac3106.js",
    "revision": "475c3ad66e72506f9dfcb6a61a0cfc28"
  },
  {
    "url": "assets/js/150.df18a1ba.js",
    "revision": "76529b62adb440e616d5975405c2ae4e"
  },
  {
    "url": "assets/js/151.813bbcf3.js",
    "revision": "93bf23ed92b34a2d521d639618c3736e"
  },
  {
    "url": "assets/js/152.c46a0a60.js",
    "revision": "53fb9555fd424696ec4acd15b533b969"
  },
  {
    "url": "assets/js/153.4ebf5597.js",
    "revision": "c095eecdb2bc403d5614e0b849ae39be"
  },
  {
    "url": "assets/js/154.5ae41060.js",
    "revision": "944e99c503d130527862bf664e46af1f"
  },
  {
    "url": "assets/js/155.6a0e42bf.js",
    "revision": "c78922dd5f0848757f9a93475fc8d336"
  },
  {
    "url": "assets/js/16.bd1cf22e.js",
    "revision": "fe04d1aa41b0173e4b056d879be0dcf4"
  },
  {
    "url": "assets/js/17.484bd5af.js",
    "revision": "7afc0a897fe614ce95e5d232f90b9483"
  },
  {
    "url": "assets/js/18.b2a0a43a.js",
    "revision": "5dadbc1f4d4f5ad521c181152fed4682"
  },
  {
    "url": "assets/js/19.abfdf631.js",
    "revision": "0aa2827760448ee38e3b739fb8853f52"
  },
  {
    "url": "assets/js/2.1cba4322.js",
    "revision": "ef950104f0c96be16b6ac16d3fef7b04"
  },
  {
    "url": "assets/js/20.ae613a1e.js",
    "revision": "1bb6891e3cb06bfddf07eea9da8c954f"
  },
  {
    "url": "assets/js/21.b8912fb7.js",
    "revision": "4086bc562e6efd9837863993bb7373aa"
  },
  {
    "url": "assets/js/22.c26624f2.js",
    "revision": "00d5a0debba657ce04ae0dea517525b6"
  },
  {
    "url": "assets/js/23.5a1fcf25.js",
    "revision": "d6273b98ae4d3ddf37d1ebe8a8bb1d16"
  },
  {
    "url": "assets/js/24.49865779.js",
    "revision": "95cf35f22fefcc5317f4d5e94bbbaff5"
  },
  {
    "url": "assets/js/25.edecfc0b.js",
    "revision": "662318e1835e617fabb085fd044285b6"
  },
  {
    "url": "assets/js/26.6873c04f.js",
    "revision": "f1222305942fabd49eb2d53fc9a19bb5"
  },
  {
    "url": "assets/js/27.908602e8.js",
    "revision": "52899e260053bcadf1cb74dd32ae9e2b"
  },
  {
    "url": "assets/js/28.458f74c3.js",
    "revision": "020f73b1318b5c4798df8cfb44532b43"
  },
  {
    "url": "assets/js/29.66d57d3c.js",
    "revision": "6fd7b4f1a7b1222d0662f324737b2435"
  },
  {
    "url": "assets/js/3.3c7aa3ab.js",
    "revision": "2210cbb9a0eacedca534dae789165c36"
  },
  {
    "url": "assets/js/30.69e8e6e8.js",
    "revision": "2b09edbd258fc2261f899afdb566a5c6"
  },
  {
    "url": "assets/js/31.e19264b7.js",
    "revision": "18c1ab670e47cf854eff46ce00b6904c"
  },
  {
    "url": "assets/js/32.9d352dd2.js",
    "revision": "4d505fd7776763fdf37164d32f7996e2"
  },
  {
    "url": "assets/js/33.52f5ae56.js",
    "revision": "bd86db16a2faa97e948d5b36460d859e"
  },
  {
    "url": "assets/js/34.dc71f0d9.js",
    "revision": "0b39fbaf9458c07669a7290d442d463e"
  },
  {
    "url": "assets/js/35.a57d2365.js",
    "revision": "ae0ef156e60318f7462cbf886078253b"
  },
  {
    "url": "assets/js/36.7cb1760d.js",
    "revision": "0bc6c9b823a6f4717224c5a7ce2f07c0"
  },
  {
    "url": "assets/js/37.f8c4dca3.js",
    "revision": "10b07f4a3d7b37172ef66ea2f78a0e59"
  },
  {
    "url": "assets/js/38.b24e89cd.js",
    "revision": "f4061d30a55e37a5adef6ef72c9bd78b"
  },
  {
    "url": "assets/js/39.f481e2f4.js",
    "revision": "b527e8683396632ff471fb0cee1c397d"
  },
  {
    "url": "assets/js/4.8dff48a7.js",
    "revision": "d2bbbe17f5f5db8b8436fff36c24bf1e"
  },
  {
    "url": "assets/js/40.bc9f5a37.js",
    "revision": "26af3e6dae18ac18f6d691255bab4e89"
  },
  {
    "url": "assets/js/41.7581af01.js",
    "revision": "bf503202056f87279012ccce6261ec4e"
  },
  {
    "url": "assets/js/42.b2659d68.js",
    "revision": "559d74e32e21fbe99cf97681d0e4f14a"
  },
  {
    "url": "assets/js/43.adec1d1d.js",
    "revision": "c93a2aa66cc09ab95b1f67e13d13445c"
  },
  {
    "url": "assets/js/44.fccd1520.js",
    "revision": "a9d31ba1b040db29357495f64567080d"
  },
  {
    "url": "assets/js/45.5abdfaf6.js",
    "revision": "15fbf69d5eae9ff2a1808d9996e5f823"
  },
  {
    "url": "assets/js/46.e0a43547.js",
    "revision": "9e8993e7b7afa5a0c028f30522385903"
  },
  {
    "url": "assets/js/47.40e44a74.js",
    "revision": "80f74f78dc77e3ab00d8039796dfe8c6"
  },
  {
    "url": "assets/js/48.d27687c6.js",
    "revision": "f086d4f6d7b61359818dfff42e29cc06"
  },
  {
    "url": "assets/js/49.3b7fdecf.js",
    "revision": "7b373d0023128ad7a1ccec4bb2810a51"
  },
  {
    "url": "assets/js/5.d38b9e37.js",
    "revision": "46eba0bd09e60417a0b28ff779ad0bbd"
  },
  {
    "url": "assets/js/50.9aede2ec.js",
    "revision": "c902862617d502fa47f04304d6e59cb0"
  },
  {
    "url": "assets/js/51.06eb85d4.js",
    "revision": "6450edb4f860907b2dcc5412925f66e9"
  },
  {
    "url": "assets/js/52.badd47ce.js",
    "revision": "9e136ccf984394605039c30a3cd6b176"
  },
  {
    "url": "assets/js/53.ac97ff9c.js",
    "revision": "12017789aa6d118b909fc4e39708cfaa"
  },
  {
    "url": "assets/js/54.0d90122a.js",
    "revision": "23b5fdca4d16dfe090c9918f12b3575d"
  },
  {
    "url": "assets/js/55.ab76f30e.js",
    "revision": "ceb59ea0a93be54860601c41adfef0be"
  },
  {
    "url": "assets/js/56.e27d63dd.js",
    "revision": "1ce436a646d997a4193a6159bf898b9c"
  },
  {
    "url": "assets/js/57.ef7aa6d2.js",
    "revision": "eb36429af9fc14a1df675d6b298dd5a3"
  },
  {
    "url": "assets/js/58.c20cdab4.js",
    "revision": "ec537d2f82a2ba34c0db69a8795806a4"
  },
  {
    "url": "assets/js/59.910cd292.js",
    "revision": "47fb70d3316a120d97a8a5e34726d970"
  },
  {
    "url": "assets/js/6.8f4e9d05.js",
    "revision": "5d2d500725b0fd3157b3099ee733fa7b"
  },
  {
    "url": "assets/js/60.90bc4727.js",
    "revision": "f7f503b9d0d0200328809b233810e3d1"
  },
  {
    "url": "assets/js/61.8c741871.js",
    "revision": "199143220b5a0cc61903d3aa12e1595e"
  },
  {
    "url": "assets/js/62.203de98d.js",
    "revision": "da474917db60df267686f5a140475017"
  },
  {
    "url": "assets/js/63.e0b9512d.js",
    "revision": "04a1cf7cf7b8c3b7ff3895f7043b7029"
  },
  {
    "url": "assets/js/64.0d5ae9c8.js",
    "revision": "32c03597fce3e26adb29fe4706a5a0f3"
  },
  {
    "url": "assets/js/65.706f5115.js",
    "revision": "233f19f5cce30f01e7f25c825ccf0fdb"
  },
  {
    "url": "assets/js/66.d6683f3f.js",
    "revision": "a6d3ebe2b84fc627b8a35105cb4b155d"
  },
  {
    "url": "assets/js/67.5bc8a280.js",
    "revision": "56d6ec847fd8988aca55e41f5f17b075"
  },
  {
    "url": "assets/js/68.b8d3aabb.js",
    "revision": "7916de28bdffb4f78e7197e937911d6d"
  },
  {
    "url": "assets/js/69.c2fdc93b.js",
    "revision": "5f2b7ce77ef39ffcef749de511a2ca11"
  },
  {
    "url": "assets/js/7.fcc6e5ec.js",
    "revision": "bb435c95b034ade1f30a43370fbd536a"
  },
  {
    "url": "assets/js/70.e8874f99.js",
    "revision": "94cbc942093cd60111c1d5dcd5aefdb3"
  },
  {
    "url": "assets/js/71.d400e0cc.js",
    "revision": "1da4cae03204ce0bae252fe64e42cda1"
  },
  {
    "url": "assets/js/72.c28142a0.js",
    "revision": "f40d377bad27ef1b931934361bb6c85d"
  },
  {
    "url": "assets/js/73.1fc48466.js",
    "revision": "09e621eddaa8151b7f506a1faf36b3e8"
  },
  {
    "url": "assets/js/74.7d449b99.js",
    "revision": "2d42cd429cc8c6780d8f365a4c0ac99e"
  },
  {
    "url": "assets/js/75.db372a9d.js",
    "revision": "960d7a8475419e842bee9c5bba2376cf"
  },
  {
    "url": "assets/js/76.44c9a394.js",
    "revision": "5e837ecbf297417cb645d2a732cc57d4"
  },
  {
    "url": "assets/js/77.39d1d54e.js",
    "revision": "7529adbcef6e50a27e45091a7f4adf7e"
  },
  {
    "url": "assets/js/78.844bc46f.js",
    "revision": "45099ba2f44fc84f842878c96325a1c9"
  },
  {
    "url": "assets/js/79.7f27a812.js",
    "revision": "3f69c624c97d2fcfb528012fb3f5b0ad"
  },
  {
    "url": "assets/js/8.81858975.js",
    "revision": "eaf640541d3a1ce124b7c45ab5ce7e54"
  },
  {
    "url": "assets/js/80.9e2a257c.js",
    "revision": "492920bce6b5990a1c9997ef67120e2d"
  },
  {
    "url": "assets/js/81.dad3d8db.js",
    "revision": "677f94e92a07663240c4393b88336c90"
  },
  {
    "url": "assets/js/82.46ef23fe.js",
    "revision": "57bd263bbbf65fdf889f9845aaeac2de"
  },
  {
    "url": "assets/js/83.3c9269d7.js",
    "revision": "f3de260ed2c82a11efe68bf04b9aa310"
  },
  {
    "url": "assets/js/84.f3960d7e.js",
    "revision": "225fb2d3cf7b332ca89369be07bdc802"
  },
  {
    "url": "assets/js/85.ab420108.js",
    "revision": "05d1b75d78055f65b7cbec9b0243efae"
  },
  {
    "url": "assets/js/86.d11459f2.js",
    "revision": "8162e704c8607346822d29a2c0b5d7b3"
  },
  {
    "url": "assets/js/87.37610c00.js",
    "revision": "cfbbdca391a456300a931a4627ce0b1e"
  },
  {
    "url": "assets/js/88.4680f9d6.js",
    "revision": "6ddc2646f0c109d9c9f45a4e1190b0a5"
  },
  {
    "url": "assets/js/89.b4684b79.js",
    "revision": "939ced68b1142de948806f8daabb30de"
  },
  {
    "url": "assets/js/9.8d68e3d6.js",
    "revision": "d034408d4bbff0c7220a7f0319e8e143"
  },
  {
    "url": "assets/js/90.6db2cfa9.js",
    "revision": "c739d63a279a321812b0f41c0d80a47a"
  },
  {
    "url": "assets/js/91.85961b40.js",
    "revision": "ed55cd5b74468626b4a648237fc951e4"
  },
  {
    "url": "assets/js/92.e026e1d7.js",
    "revision": "4d9108938a628cf2be7cb0dceaf18c0f"
  },
  {
    "url": "assets/js/93.16bd3151.js",
    "revision": "d65ce2723de3a95ac844969e068fe832"
  },
  {
    "url": "assets/js/94.c60af2d4.js",
    "revision": "b23ed3d7f6a41b628eb0f4fb2066a753"
  },
  {
    "url": "assets/js/95.f2052368.js",
    "revision": "9695aaa41cc847c7f36e566c9c22b78a"
  },
  {
    "url": "assets/js/96.a6f09b86.js",
    "revision": "68528a92f049027ecbf5cd1dd81c45b3"
  },
  {
    "url": "assets/js/97.4c3c791c.js",
    "revision": "7dc022165beef0f20eb66e9762b3215a"
  },
  {
    "url": "assets/js/98.0696c554.js",
    "revision": "5c2863e179db2caecea6c03890b36520"
  },
  {
    "url": "assets/js/99.7de08db3.js",
    "revision": "0ba07a7878cc0c17ff35f1ff3d5e483e"
  },
  {
    "url": "base/api/1.echarts.html",
    "revision": "2625d7e8d04472ff164a8352f6721046"
  },
  {
    "url": "base/api/1.index.html",
    "revision": "cdc88ceb3256ae05bffd65e091a35ae1"
  },
  {
    "url": "base/api/2.echartsInstance.html",
    "revision": "c25606bff70791d6f7b2fcebe4c271d4"
  },
  {
    "url": "base/api/3.action.html",
    "revision": "22f6a055739e95a39930e583eb64320e"
  },
  {
    "url": "base/api/4.events.html",
    "revision": "55b8a0f2fc5aea4b9d572d4fdc0dacb2"
  },
  {
    "url": "base/components/1.index.html",
    "revision": "3e4130591ef16c1e7447a65899b07a68"
  },
  {
    "url": "base/components/1.legend.html",
    "revision": "852e604c96074d2451b47c43027849a4"
  },
  {
    "url": "base/components/2.grid.html",
    "revision": "96c5fb0f68f75f08316b9cb5da3a043a"
  },
  {
    "url": "base/components/2.polar.html",
    "revision": "9c45e07249121b78993bf862eaf26b5e"
  },
  {
    "url": "base/components/2.radiusAxis.html",
    "revision": "8972a872cabeacb1cfb48a176cc4b0d6"
  },
  {
    "url": "base/components/2.xAxis.html",
    "revision": "41675aad1737dfeaa0b2bbad89ae82af"
  },
  {
    "url": "base/components/2.yAxis.html",
    "revision": "4da6807294cc4514e85200b296cf2af2"
  },
  {
    "url": "base/components/3.angleAxis.html",
    "revision": "9a2f4cbdad665b28a2308d4a855c8d3f"
  },
  {
    "url": "base/components/4.radar.html",
    "revision": "752e9b48491d4c308349c3b8ae9f69a0"
  },
  {
    "url": "base/components/5.dataZoom.html",
    "revision": "872de1c6c5e64e25ead83a3db979bf10"
  },
  {
    "url": "base/components/6.visualMap.html",
    "revision": "cea6f7a6df07036b37282a73acbe8689"
  },
  {
    "url": "base/components/7.tooltip.html",
    "revision": "876bd075b1e8eecc528814bb791d26ae"
  },
  {
    "url": "base/components/8.geo.html",
    "revision": "02a7810398c2115f4365535b4e184462"
  },
  {
    "url": "base/gl/1.index.html",
    "revision": "534954067146fd5661b4699123e0529c"
  },
  {
    "url": "base/gl/1.scatter3D.html",
    "revision": "718a54391a7c5b5946ab2a405dc13832"
  },
  {
    "url": "base/gl/10.flowGL.html",
    "revision": "e0b674dfb855fe74d072be7298531c2d"
  },
  {
    "url": "base/gl/2.bar3D.html",
    "revision": "9d24f7faf0f9b4d37a3f76ad6d77c0b1"
  },
  {
    "url": "base/gl/3.line3D.html",
    "revision": "b24c69eaf59456e6290d6dab638f70bc"
  },
  {
    "url": "base/gl/4.lines3D.html",
    "revision": "c845e441960b160904b6a81e201f7808"
  },
  {
    "url": "base/gl/5.map3D.html",
    "revision": "86b1bacb314576c648b11fde69d8990b"
  },
  {
    "url": "base/gl/6.surface.html",
    "revision": "61341cf559eb0e59888aa06c8254923b"
  },
  {
    "url": "base/gl/7.polygons3D.html",
    "revision": "383b274215ceb9a29bad7768dbbe9b77"
  },
  {
    "url": "base/gl/8.scatterGL.html",
    "revision": "f16cb8474d00d0b719ff1b6f08e56b3a"
  },
  {
    "url": "base/gl/9.graphGL.html",
    "revision": "05244f9f85e1be3ac63b84674bd3bd2c"
  },
  {
    "url": "base/series/1.index.html",
    "revision": "ec64d2c097e6432889db168e255abb0f"
  },
  {
    "url": "base/series/1.line.html",
    "revision": "a828060aad1e6ff9c8f793d9406e8f8c"
  },
  {
    "url": "base/series/10.boxplot.html",
    "revision": "fabccfbc46d12be891d0aaebdbbf2a30"
  },
  {
    "url": "base/series/11.candlestick.html",
    "revision": "2724df5cda15f0f086eced061d36b04a"
  },
  {
    "url": "base/series/12.heatmap.html",
    "revision": "a82cfa29327c0a86548520a0edfa41cc"
  },
  {
    "url": "base/series/13.map.html",
    "revision": "04b037b6a6b8da83b28f9c7eea91d40a"
  },
  {
    "url": "base/series/14.parallel.html",
    "revision": "ce0e11c3a29995c4a405b4098469536a"
  },
  {
    "url": "base/series/15.lines.html",
    "revision": "5272820fd3ffc9bc244d4d237ee4ebd1"
  },
  {
    "url": "base/series/16.graph.html",
    "revision": "b3964ae6a9a9bece04231162bbee83e5"
  },
  {
    "url": "base/series/17.sankey.html",
    "revision": "643720bf4dbdca7ca2c4c7d5551f943a"
  },
  {
    "url": "base/series/18.funnel.html",
    "revision": "ce39f2407025b927677ae5f4e11c3ce0"
  },
  {
    "url": "base/series/19.gauge.html",
    "revision": "f27e2cd1c22d905606454ac2fb61b8ef"
  },
  {
    "url": "base/series/2.bar.html",
    "revision": "ff28b9dca915153b37449667f6051d12"
  },
  {
    "url": "base/series/20.pictorialBar.html",
    "revision": "6fa455d2497590ca150685d5af50a8d1"
  },
  {
    "url": "base/series/21.themeRiver.html",
    "revision": "f8a21a61c588c1aa6ca4f8af8e40311b"
  },
  {
    "url": "base/series/22.custom.html",
    "revision": "91242a2e6bd88e0e63fee2ed8cdb4d98"
  },
  {
    "url": "base/series/3.pie.html",
    "revision": "2a21648d7eccb1b1be107366175ae239"
  },
  {
    "url": "base/series/4.scatter.html",
    "revision": "92452af130ff9a593df57cd2364a5346"
  },
  {
    "url": "base/series/5.effectScatter.html",
    "revision": "a22cd0abd00cf0f67f5a5e93922b1662"
  },
  {
    "url": "base/series/6.radar.html",
    "revision": "a7e6d93e0c78a6249cd0cf5ac7c1e58f"
  },
  {
    "url": "base/series/7.tree.html",
    "revision": "5c7036e58b1ee4da633e7dff1f8736a2"
  },
  {
    "url": "base/series/8.treemap.html",
    "revision": "a54faad27adbf289b3f5f67ef619729e"
  },
  {
    "url": "base/series/9.sunburst.html",
    "revision": "589148cba4fbb569e4d1600a6ce3bb1f"
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
    "revision": "403fe45ff992f1d4c84e38c8f41e183b"
  },
  {
    "url": "mock/http.js",
    "revision": "a219140640bec4dfbe8f4fe88d351ed8"
  },
  {
    "url": "senior/1.micro/1.index.html",
    "revision": "490d57635c1fc5debc825ea48cd4f8c1"
  },
  {
    "url": "senior/1.micro/1.singlespa.html",
    "revision": "8d50c30bba79d49c7d1fcdf716f71ada"
  },
  {
    "url": "senior/1.micro/1.singlespa2.html",
    "revision": "1bb0087a475219ad7f6e36ff09cdb73a"
  },
  {
    "url": "senior/1.micro/2.qiankun.html",
    "revision": "2ebc66dc85545f2999c47a67ef8cc19e"
  },
  {
    "url": "senior/1.micro/2.qiankun2.html",
    "revision": "1a2622c8777ea31c2d5a4701f01bd7d7"
  },
  {
    "url": "senior/1.micro/3.share.html",
    "revision": "c814e4ca078e1b4c060c61b8498dbe44"
  },
  {
    "url": "senior/1.micro/4.dev.html",
    "revision": "682301d43b381ef2c67ac7e81687d611"
  },
  {
    "url": "senior/2.typescript/1.env.html",
    "revision": "239a58e0e6533bb92d0ff3f2df04b217"
  },
  {
    "url": "senior/2.typescript/1.index.html",
    "revision": "29d1b4996699cfca159c10276a75d669"
  },
  {
    "url": "senior/2.typescript/10.infer.html",
    "revision": "8142823eb8d7bdd8c6ca984f62b82020"
  },
  {
    "url": "senior/2.typescript/11.overlapping.html",
    "revision": "8170398e93e6f5896ad0f4b0b0c63efb"
  },
  {
    "url": "senior/2.typescript/12.condition.html",
    "revision": "6aa4d1bd9efaffc87379b1de49e737e9"
  },
  {
    "url": "senior/2.typescript/13.builtin.html",
    "revision": "e32f9e2b80567472036e2a17ec6fbcbc"
  },
  {
    "url": "senior/2.typescript/14.package.html",
    "revision": "7fed57f0e47b9a1603022afc57962b32"
  },
  {
    "url": "senior/2.typescript/15.custom.html",
    "revision": "f653dd3c6f1b52e66cb6f29a0417c229"
  },
  {
    "url": "senior/2.typescript/16.unknown.html",
    "revision": "9434248f2c51824f1f29c4b0662636ab"
  },
  {
    "url": "senior/2.typescript/17.module.html",
    "revision": "abe0f026a5ef049f2dac969e6d6c7db7"
  },
  {
    "url": "senior/2.typescript/18.statement.html",
    "revision": "384e7194d766d0155c0818445ca32249"
  },
  {
    "url": "senior/2.typescript/19.extend.html",
    "revision": "d51a2cc2608eaf84f79d9369892ff4c0"
  },
  {
    "url": "senior/2.typescript/2.base.html",
    "revision": "c8b4aa02ef824b362c13844d54e46476"
  },
  {
    "url": "senior/2.typescript/3.deduction.html",
    "revision": "b9c2cf0dc26d0c7a1df1db31c45e980e"
  },
  {
    "url": "senior/2.typescript/4.type.html",
    "revision": "62e1f2ce3535cd76d7eddde9259f0a63"
  },
  {
    "url": "senior/2.typescript/5.class.html",
    "revision": "518ce230aaab5a8941d30802f41fd04f"
  },
  {
    "url": "senior/2.typescript/6.interface.html",
    "revision": "6b7ff7c72a2d86f60ed6f6885856603b"
  },
  {
    "url": "senior/2.typescript/7.generic.html",
    "revision": "d1afe4cf1a89957c2456466a3aab7e68"
  },
  {
    "url": "senior/2.typescript/8.compatible.html",
    "revision": "662a293e327621cae92ef3af4926d08d"
  },
  {
    "url": "senior/2.typescript/9.protect.html",
    "revision": "3fb8d8c24ae0ddc74187125f5da1d7a9"
  },
  {
    "url": "senior/3.deploy/1.index.html",
    "revision": "22ba0d182de61c933974e1fd4f167b09"
  },
  {
    "url": "senior/3.deploy/1.local.html",
    "revision": "9f7ae4d751c4ac9d794b614c9d555e04"
  },
  {
    "url": "senior/3.deploy/2.gitlab.html",
    "revision": "a11fd6b159a8b7e8c0f7586a10de79fb"
  },
  {
    "url": "senior/3.deploy/3.genkins.html",
    "revision": "c74024dcd63ff58a43f347e45f8b02eb"
  },
  {
    "url": "senior/3.deploy/4.centos.html",
    "revision": "1fbc4248d97fd46f0a8ee0eac3de3af8"
  },
  {
    "url": "senior/3.deploy/5.nginx.html",
    "revision": "cf4adad7b6a54ba295e28039d0346e3a"
  },
  {
    "url": "senior/4.component/1.button.html",
    "revision": "467f346365c03db2e8ec6c843ac73f8f"
  },
  {
    "url": "senior/4.component/1.env.html",
    "revision": "e07bc4940efa395322b5b8e96f9f035a"
  },
  {
    "url": "senior/4.component/1.index.html",
    "revision": "84a1a2db34cf5d46bf940a40af669e9a"
  },
  {
    "url": "senior/4.component/1.recursion.html",
    "revision": "3775c9b6de2bc6218354a6f198a911a9"
  },
  {
    "url": "senior/4.component/10.tree.html",
    "revision": "fb53ee80ac74a4972e80fa656f20117f"
  },
  {
    "url": "senior/4.component/12.table.html",
    "revision": "c55d44e55bd650d47ae440d1d3c8898e"
  },
  {
    "url": "senior/4.component/13.publish.html",
    "revision": "f8df68de46a92c989159cab81afb9ee7"
  },
  {
    "url": "senior/4.component/2.dropdown.html",
    "revision": "a1234ef985cf1a7ac8836b0b768ff5f8"
  },
  {
    "url": "senior/4.component/3.dialog.html",
    "revision": "1510ef5800af58920392d89f63d16c29"
  },
  {
    "url": "senior/4.component/3.form.html",
    "revision": "64baa0a8ba3c4b6dcefbd8ffbd04df0e"
  },
  {
    "url": "senior/4.component/4.input.html",
    "revision": "cabebe813dbbe00ef8329f065ed80f18"
  },
  {
    "url": "senior/4.component/4.render.html",
    "revision": "a968f4c0009bc1a00771412463e1cc18"
  },
  {
    "url": "senior/4.component/5.checkBox.html",
    "revision": "0b824320250ef7bc200aaeeb84cd1d6f"
  },
  {
    "url": "senior/4.component/6.cascader.html",
    "revision": "7d01c520e8a8fa92e328d0cb1e925dce"
  },
  {
    "url": "senior/4.component/7.date.html",
    "revision": "7009b556ef412a233891f3b8e3543564"
  },
  {
    "url": "senior/4.component/8.dispaly.html",
    "revision": "44da6c43878545e737b9eb08fc440386"
  },
  {
    "url": "senior/4.component/9.alert.html",
    "revision": "e3836b6f9dbf77be1afadcd01056b2b3"
  },
  {
    "url": "senior/4.component/9.dynamics.html",
    "revision": "c07550a05dc553935d363505c45db832"
  },
  {
    "url": "source/vue-cli2.x/1.index.html",
    "revision": "d7873c1b283c07e5b0f805ebbc50c2e1"
  },
  {
    "url": "source/vue-cli3.x/1.index.html",
    "revision": "366604ce7f41523ff77865d2c32acc95"
  },
  {
    "url": "source/vue-router3.x/1.index.html",
    "revision": "574a242b73ea192f21cc6579341153d0"
  },
  {
    "url": "source/vue-router3.x/2.origin.html",
    "revision": "a946c6d8c75b06bedfc56d24b19bd7c2"
  },
  {
    "url": "source/vue-router4.x/1.index.html",
    "revision": "f84e9016acc019aefda0d1075cd0bc69"
  },
  {
    "url": "source/vue2.x/1.index.html",
    "revision": "03a509916923dfb6f134c101d92b6d86"
  },
  {
    "url": "source/vue2.x/10.optimize.html",
    "revision": "12074c65ca398450fde363561cfb8291"
  },
  {
    "url": "source/vue2.x/11.gencode.html",
    "revision": "69566a589de2a1ffee99f135fc08b2cc"
  },
  {
    "url": "source/vue2.x/12.mount.html",
    "revision": "cf9d91a3a7d4827bab0dab4b9e6efca3"
  },
  {
    "url": "source/vue2.x/13._render.html",
    "revision": "e1f54e1c2902afad8ec7991120eea847"
  },
  {
    "url": "source/vue2.x/14._update.html",
    "revision": "0e83eab141dc621da40a6aee84bae750"
  },
  {
    "url": "source/vue2.x/2.initGlobalAPI.html",
    "revision": "a264c72de66e8b0d562d7f56e17b58ae"
  },
  {
    "url": "source/vue2.x/3.initMixin.html",
    "revision": "3aa05df5c88edf99cbdcd3af1df6af90"
  },
  {
    "url": "source/vue2.x/4.stateMixin.html",
    "revision": "27e216a2c05d328224f62df5ba5f18a2"
  },
  {
    "url": "source/vue2.x/5.eventsMixin.html",
    "revision": "2acbb646e41916b12e31682c331ab3e0"
  },
  {
    "url": "source/vue2.x/6.lifecycleMixin.html",
    "revision": "288b4dec332755083405b02a8c5002f2"
  },
  {
    "url": "source/vue2.x/7.renderMixin.html",
    "revision": "54d8c8c3b9799fdbd5134ad29a185868"
  },
  {
    "url": "source/vue2.x/8.mount.html",
    "revision": "3461386b0ad06d080d6e6d2a1c9a2cc2"
  },
  {
    "url": "source/vue2.x/9.ast.html",
    "revision": "f051429a3b2a5e2f9cc6b36140741895"
  },
  {
    "url": "source/vue3.x/1.index.html",
    "revision": "3ee6874b04d383fc5f8cc97255d358aa"
  },
  {
    "url": "source/vue3.x/10.optimize.html",
    "revision": "4cc2970354ef87ef3993b8b4d775ce35"
  },
  {
    "url": "source/vue3.x/11.gencode.html",
    "revision": "392d9ca008aba983ac8d1a05fb9d737b"
  },
  {
    "url": "source/vue3.x/12.mount.html",
    "revision": "f18161c0f982b5371167b9a923986dc5"
  },
  {
    "url": "source/vue3.x/13._render.html",
    "revision": "a8d5bddd18c4e45b671e66b07d5fa310"
  },
  {
    "url": "source/vue3.x/14._update.html",
    "revision": "da88f9754f5925d3d1ae514fbf7c3b9e"
  },
  {
    "url": "source/vue3.x/2.initGlobalAPI.html",
    "revision": "d15460aaef5e3da1d8a01904a3a0a243"
  },
  {
    "url": "source/vue3.x/3.initMixin.html",
    "revision": "602e35b863902a0ace770d94a12f602f"
  },
  {
    "url": "source/vue3.x/4.stateMixin.html",
    "revision": "149f4b4630207f6522413523b71cc866"
  },
  {
    "url": "source/vue3.x/5.eventsMixin.html",
    "revision": "8cde954949b5f8743b091968322ba705"
  },
  {
    "url": "source/vue3.x/6.lifecycleMixin.html",
    "revision": "44f587955790f97f9114739fa9fe3106"
  },
  {
    "url": "source/vue3.x/7.renderMixin.html",
    "revision": "582e1e3d0106fed2ec8c0f206c25ddb8"
  },
  {
    "url": "source/vue3.x/8.mount.html",
    "revision": "6422b29126674df6370144fec34734dd"
  },
  {
    "url": "source/vue3.x/9.ast.html",
    "revision": "84ad5f13d5123d56c526f3d5f1c63371"
  },
  {
    "url": "source/vuex3.x/1.index.html",
    "revision": "b5fb9eba48cf9cba05a6b8e596dbae34"
  },
  {
    "url": "source/vuex3.x/2.use.html",
    "revision": "c0a98f8c606450c7998f83e4f6dd5865"
  },
  {
    "url": "source/vuex3.x/3.origin.html",
    "revision": "9d13978e8a7f5c70f6f026eb0c68a43e"
  },
  {
    "url": "source/vuex4.x/1.index.html",
    "revision": "51400f2acde16387d7c96bdf6d619a21"
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
