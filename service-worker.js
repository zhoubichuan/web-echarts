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
    "revision": "d501b3f9e8443a239953afd0205bfc3e"
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
    "url": "assets/js/10.f4e2ed61.js",
    "revision": "9bb65abcd39f1bb6cd49d44998979197"
  },
  {
    "url": "assets/js/100.12496994.js",
    "revision": "c9b5b77084e5c03edebe34c3eeb2195f"
  },
  {
    "url": "assets/js/101.f1ad968c.js",
    "revision": "182eb4fa9910624ab0b991b2def36feb"
  },
  {
    "url": "assets/js/102.65dd2d70.js",
    "revision": "6e75b2a8100b6376b524f774467699b6"
  },
  {
    "url": "assets/js/103.528d0eb5.js",
    "revision": "ada54cbb41f76197592c93a411cd17ec"
  },
  {
    "url": "assets/js/104.57d88fcd.js",
    "revision": "40f8ff996cf6b2046e15e9e5b6b209e9"
  },
  {
    "url": "assets/js/105.76e61913.js",
    "revision": "19b223fa0a00d607800e7f1108c7ace0"
  },
  {
    "url": "assets/js/106.9aed140b.js",
    "revision": "d2219d73f3bc42c8dfac78726a50ff6a"
  },
  {
    "url": "assets/js/107.32e06176.js",
    "revision": "6f3ba524685af1baca4850cd23c0b93f"
  },
  {
    "url": "assets/js/108.8cf8f0ba.js",
    "revision": "0bb3616a23874a416deaa3adae012ece"
  },
  {
    "url": "assets/js/109.d2fc1f5e.js",
    "revision": "56d1e5672b0525cea6d2bf550952c082"
  },
  {
    "url": "assets/js/11.1336a7ff.js",
    "revision": "7d1e551e9836f64fa5b8709934c27f44"
  },
  {
    "url": "assets/js/110.faa88dda.js",
    "revision": "58a389489132433b417c5f8e842dfcb4"
  },
  {
    "url": "assets/js/111.3b134bfc.js",
    "revision": "f2fd04727e333d26aa649140065049f3"
  },
  {
    "url": "assets/js/112.14912df9.js",
    "revision": "854063a2bd839eef8d20664ec65b147c"
  },
  {
    "url": "assets/js/113.5ae4d15f.js",
    "revision": "4b760097c03000ee88542bbf0af1159f"
  },
  {
    "url": "assets/js/114.6a9f39f0.js",
    "revision": "8d89786313fb027c57b33fdc9e216910"
  },
  {
    "url": "assets/js/115.c208d779.js",
    "revision": "022868e5307d8e54f0107edb99358bfd"
  },
  {
    "url": "assets/js/116.c9cab9a7.js",
    "revision": "8b4deb411163bcb4f7b738d0660c10b5"
  },
  {
    "url": "assets/js/117.fcc0b189.js",
    "revision": "e464756610f55a14fb36c88b0be4ba61"
  },
  {
    "url": "assets/js/118.2d3cb0c5.js",
    "revision": "18e9cd2bde7274bd87858bb875fd2c80"
  },
  {
    "url": "assets/js/119.a0ee8461.js",
    "revision": "ca47bef70c1d04687b1d1ffd3c717cfb"
  },
  {
    "url": "assets/js/12.740d07e3.js",
    "revision": "036a61eb520f33cfd41f946f350c653d"
  },
  {
    "url": "assets/js/120.62c9bd8f.js",
    "revision": "55bdbf7b46597ac0a887fd93816fbce3"
  },
  {
    "url": "assets/js/121.ba1a38d1.js",
    "revision": "2b5551dfb5e12c0e5aef9c1d2e3713f4"
  },
  {
    "url": "assets/js/122.55a913b2.js",
    "revision": "c6e7496d98ab775a39ad1b78458fcf9e"
  },
  {
    "url": "assets/js/123.1596b757.js",
    "revision": "8135be7cef0dcf76ec9e6930b9bad9a6"
  },
  {
    "url": "assets/js/124.9a2d80ae.js",
    "revision": "8493eac73d99b860b00515ccba294ab3"
  },
  {
    "url": "assets/js/125.1ba43c2a.js",
    "revision": "9a22d2d4c8277b1b3c44cd6ece14eb6f"
  },
  {
    "url": "assets/js/126.56afe3ab.js",
    "revision": "608c16d4afd0c37ba7f1e13791346abc"
  },
  {
    "url": "assets/js/127.9ef8cad1.js",
    "revision": "bab2de1b8f0262d40f2cb39c3032356c"
  },
  {
    "url": "assets/js/128.76d860b7.js",
    "revision": "bd97e276387e2c91ed33aad6d754d9b5"
  },
  {
    "url": "assets/js/129.e9b6af96.js",
    "revision": "fe840e04662e5686a9617da3b2ddb389"
  },
  {
    "url": "assets/js/13.1c7aaeea.js",
    "revision": "a4dff24cc0b3686a92f608baa3295e3a"
  },
  {
    "url": "assets/js/130.fba68a1b.js",
    "revision": "e8c3fc169818b29d3d3f3b5aa5cee34e"
  },
  {
    "url": "assets/js/131.2d333efe.js",
    "revision": "c7d0ac447d9b66a916a2a9f3937d66a0"
  },
  {
    "url": "assets/js/132.3f3eaf15.js",
    "revision": "9bef09ba18378855e43540624d53caa6"
  },
  {
    "url": "assets/js/133.a0fbd5bd.js",
    "revision": "55fff017e3d549d983821ca54f77d24b"
  },
  {
    "url": "assets/js/134.9a233163.js",
    "revision": "2f771ca79ce4ddd5132304409e6723d7"
  },
  {
    "url": "assets/js/135.f953140b.js",
    "revision": "1999d16e6783417f4211376bc15dd95b"
  },
  {
    "url": "assets/js/136.d39018a1.js",
    "revision": "3e23cdf42879329e1b5e5ef619b6c873"
  },
  {
    "url": "assets/js/137.17fa3f2e.js",
    "revision": "379a36af4e18c5ff757de0f666f4f5d4"
  },
  {
    "url": "assets/js/138.e373a3b8.js",
    "revision": "a57576505e309595096ec5fbd17d9219"
  },
  {
    "url": "assets/js/139.56d4f96d.js",
    "revision": "6166c5a5b7f96561af65e6f18ef5b2a3"
  },
  {
    "url": "assets/js/14.0188cec7.js",
    "revision": "7270dcad850a168a11a95ac22cde73ca"
  },
  {
    "url": "assets/js/140.648397b9.js",
    "revision": "e52e322c9866028e1c567d2beeae6c2a"
  },
  {
    "url": "assets/js/141.d9a31b11.js",
    "revision": "72d28bbe5c6ab19ee1ce98fa224c39d1"
  },
  {
    "url": "assets/js/142.deb4c756.js",
    "revision": "85f433d8c9ae37566dc890bf8bd8bd13"
  },
  {
    "url": "assets/js/143.17f98d3b.js",
    "revision": "2e5ed417f65e6c13d070027818a64fd9"
  },
  {
    "url": "assets/js/144.d87f27fc.js",
    "revision": "9a6c76881e9dde78abb0b9640b335378"
  },
  {
    "url": "assets/js/145.1f2cebcd.js",
    "revision": "71041d00e03aaddec527c40cb6790cc1"
  },
  {
    "url": "assets/js/146.7e6a8374.js",
    "revision": "1dd57fa3c59f74167483bc7af530fc0d"
  },
  {
    "url": "assets/js/147.e273cc44.js",
    "revision": "f12458450d64384d9a5a5128984af3d5"
  },
  {
    "url": "assets/js/148.77b83fb2.js",
    "revision": "50c592c4022b9b4d877c472ba429cbd6"
  },
  {
    "url": "assets/js/149.c0a6a0df.js",
    "revision": "39ab6d3e08408c8249279365d2720385"
  },
  {
    "url": "assets/js/15.b473627f.js",
    "revision": "0b18d077edbca3d7ebd1f84e33f6b9d7"
  },
  {
    "url": "assets/js/150.ff60f8b4.js",
    "revision": "82218aae96d39f9e25f26844403046ed"
  },
  {
    "url": "assets/js/151.91aea705.js",
    "revision": "f6e154e63a5546eabd4df23c513a89a1"
  },
  {
    "url": "assets/js/152.81bceaa0.js",
    "revision": "b318a5de21f184296db70f2809e76d1a"
  },
  {
    "url": "assets/js/153.12087206.js",
    "revision": "6dc9ac2763eba9b9f405248797af8faa"
  },
  {
    "url": "assets/js/154.d84be24b.js",
    "revision": "bef242b6d702a269838bcabfb3d110e2"
  },
  {
    "url": "assets/js/155.d0655d61.js",
    "revision": "b5f526157818f04a5dd4ba974d136015"
  },
  {
    "url": "assets/js/156.25418a00.js",
    "revision": "a58c3a5cea62c756bfe77af183f7a5ab"
  },
  {
    "url": "assets/js/16.75b08b0b.js",
    "revision": "6ca7081da94549e3b0e852f77e33fd34"
  },
  {
    "url": "assets/js/17.ff6e98d1.js",
    "revision": "c5aac4c5d78c8abad78b997a5ff1fcfe"
  },
  {
    "url": "assets/js/18.18f508b9.js",
    "revision": "ef457bf9bace42f4fd6e560013d2e9a3"
  },
  {
    "url": "assets/js/19.f068bf80.js",
    "revision": "dd318227c8d33df0c0f76f111f4157ad"
  },
  {
    "url": "assets/js/2.112b4fa0.js",
    "revision": "02519102b5f99e931b052c92eb499c9f"
  },
  {
    "url": "assets/js/20.d21c9372.js",
    "revision": "82de5fa2822ef3268c8b53114f217dac"
  },
  {
    "url": "assets/js/21.b7b40f00.js",
    "revision": "4579f8f70beca9765035343738e77788"
  },
  {
    "url": "assets/js/22.fcf6ecac.js",
    "revision": "c734918d22807e2df4e91ab69a8a240f"
  },
  {
    "url": "assets/js/23.649c9573.js",
    "revision": "5cf7aa282619d44f9ec5b375be411bc4"
  },
  {
    "url": "assets/js/24.11be9037.js",
    "revision": "1767f29f094b65c547f15c7dbf2859e3"
  },
  {
    "url": "assets/js/25.c19d31fd.js",
    "revision": "e0055dd370c7a5fb8e07c77a1f70f08d"
  },
  {
    "url": "assets/js/26.cd0f6a1a.js",
    "revision": "e272019d8db4e1b205de6385b4e66185"
  },
  {
    "url": "assets/js/27.819a7671.js",
    "revision": "202a7b8beaf9419bc10be699e3458233"
  },
  {
    "url": "assets/js/28.68868801.js",
    "revision": "8597215356152c596e38f08289b87039"
  },
  {
    "url": "assets/js/29.30b79a04.js",
    "revision": "589520d22527fbf3c5747ca3b380e313"
  },
  {
    "url": "assets/js/3.4fd73192.js",
    "revision": "ce2f727f7c1abc9e9d957aaa8f223fbb"
  },
  {
    "url": "assets/js/30.1429403c.js",
    "revision": "9792bb9a11142282073ee61dec16e8af"
  },
  {
    "url": "assets/js/31.0ee3f471.js",
    "revision": "b7fe1d8448770e9d537af923ed9e5929"
  },
  {
    "url": "assets/js/32.1ac910a9.js",
    "revision": "b0ff45716cf48ed04316a9cc7ef4636f"
  },
  {
    "url": "assets/js/33.0a7068c9.js",
    "revision": "14f9376002e2c6854a2835b9c6d6e685"
  },
  {
    "url": "assets/js/34.d9bbd3ca.js",
    "revision": "19849fb2b79b936eb021814eda6c601d"
  },
  {
    "url": "assets/js/35.102eeb9c.js",
    "revision": "43e697e123674f6dcb8725cc3d6d95a4"
  },
  {
    "url": "assets/js/36.dbe2a493.js",
    "revision": "e425fb43662693737f63234ff49b480f"
  },
  {
    "url": "assets/js/37.0ccaafc0.js",
    "revision": "4bbf466d41033b75907b2fa9c79d97a9"
  },
  {
    "url": "assets/js/38.bb7889c1.js",
    "revision": "a0db67663ba4e07c4d34ebe34cdfe198"
  },
  {
    "url": "assets/js/39.03b46299.js",
    "revision": "de152f7d5608979a199e3aa87326c405"
  },
  {
    "url": "assets/js/4.15f2bdfa.js",
    "revision": "3e4fe47f127b0d117336d530acbbaa6c"
  },
  {
    "url": "assets/js/40.e730425c.js",
    "revision": "3b66322b204c4b734e3f1b2f4aa8d6cf"
  },
  {
    "url": "assets/js/41.0a714f3d.js",
    "revision": "91d677ece56765c45306d2c2f7324137"
  },
  {
    "url": "assets/js/42.cef236a8.js",
    "revision": "e02a9e6edb91cc3aa49eff7b70cd1e11"
  },
  {
    "url": "assets/js/43.7e4a0862.js",
    "revision": "a973c581e4f7e46c2d0c929b5100f76c"
  },
  {
    "url": "assets/js/44.bab98857.js",
    "revision": "6b15ba209c17f06934693a5c9b946e7c"
  },
  {
    "url": "assets/js/45.f02b22c9.js",
    "revision": "e0491107e3e3c6007cd3831ebd0d3c25"
  },
  {
    "url": "assets/js/46.68efb003.js",
    "revision": "e1a7bcd7418a538987edb75e57d8c053"
  },
  {
    "url": "assets/js/47.26f2584b.js",
    "revision": "d1ab461a61409dbc6c21fbd8d609f508"
  },
  {
    "url": "assets/js/48.665a18db.js",
    "revision": "a23df9a34f503391a8d5c01e9b4f7253"
  },
  {
    "url": "assets/js/49.9aea7cab.js",
    "revision": "51db4b41f93b8095a7b58cae82c7d146"
  },
  {
    "url": "assets/js/5.cda74fd5.js",
    "revision": "1dcbf08f0f3d751419e671163ff7f7c7"
  },
  {
    "url": "assets/js/50.621189dd.js",
    "revision": "3839a8303afb0dfa07e90fa5a7cfb32c"
  },
  {
    "url": "assets/js/51.3a013d93.js",
    "revision": "2ae53b5cd5007af306c460152a44e5eb"
  },
  {
    "url": "assets/js/52.e4405e3b.js",
    "revision": "07a4951e37266f1e6ec5997a1cd0c0b7"
  },
  {
    "url": "assets/js/53.faed5bba.js",
    "revision": "cce37ab3d5147077bf8a842c86cd208a"
  },
  {
    "url": "assets/js/54.9d298408.js",
    "revision": "afe21f05adf497086314c7b4d5aa0b1a"
  },
  {
    "url": "assets/js/55.8f01e9be.js",
    "revision": "37db30879b20b7a0d50bf68318101716"
  },
  {
    "url": "assets/js/56.ed431419.js",
    "revision": "f4fb0c4bf97087afa9b379e535912395"
  },
  {
    "url": "assets/js/57.b6624b08.js",
    "revision": "867fa09e93d064f089a66236279e31a0"
  },
  {
    "url": "assets/js/58.d0518136.js",
    "revision": "c1cedcfc7a9675077829571fef1882a0"
  },
  {
    "url": "assets/js/59.f581f996.js",
    "revision": "7e216e09250d1bf90995c8b5e08f27eb"
  },
  {
    "url": "assets/js/6.f2a9d0ac.js",
    "revision": "84137b506a213a72a194d009da2b09c3"
  },
  {
    "url": "assets/js/60.d4a32c59.js",
    "revision": "03a80d94e918e4902992a1ed4a7b9e1e"
  },
  {
    "url": "assets/js/61.7336856f.js",
    "revision": "72de86c9fd21ddd3ecfdfa4c606bde7b"
  },
  {
    "url": "assets/js/62.b127346d.js",
    "revision": "56228dd3d4ffa6ca6a923cf185bfafb6"
  },
  {
    "url": "assets/js/63.80d0cd76.js",
    "revision": "1f45f902f6df8ba78e55be3a1d114183"
  },
  {
    "url": "assets/js/64.6f485e45.js",
    "revision": "6784039e5d317d71c660eafd74bb7e58"
  },
  {
    "url": "assets/js/65.b6b53e51.js",
    "revision": "bb4fd517451e7cb5b4ecdb026d52ac90"
  },
  {
    "url": "assets/js/66.c81cf767.js",
    "revision": "9dd0519875e0f5273bc2381d00fb672f"
  },
  {
    "url": "assets/js/67.e713852e.js",
    "revision": "b28724be0b97b941d2c73292fc3086ec"
  },
  {
    "url": "assets/js/68.03255d8c.js",
    "revision": "2e40d5b0035415351d27db091010cdde"
  },
  {
    "url": "assets/js/69.105d5a55.js",
    "revision": "c4d2c0e533805b619919218442c2fc9c"
  },
  {
    "url": "assets/js/7.bac8d555.js",
    "revision": "eb6587069a8aca56eab78a6efa13b0ab"
  },
  {
    "url": "assets/js/70.af5cfebe.js",
    "revision": "efcfa56ffa9f639f1ceb8abeb23fd4ed"
  },
  {
    "url": "assets/js/71.56a09e23.js",
    "revision": "691847f097aa89d5e8a8331c1fa3826c"
  },
  {
    "url": "assets/js/72.854d7b84.js",
    "revision": "b05b4ce5a45c565e339f6975e40becc0"
  },
  {
    "url": "assets/js/73.0be3eeaa.js",
    "revision": "2066fa270f812d8560edefd583a4b41b"
  },
  {
    "url": "assets/js/74.ddcfa966.js",
    "revision": "8e8e3cf509955f3f07c1d40e3eaf1315"
  },
  {
    "url": "assets/js/75.8cdf5eda.js",
    "revision": "b4c3d424298999634c177df760eb73f6"
  },
  {
    "url": "assets/js/76.60a48882.js",
    "revision": "d69b06ed780ae909beafc8333cabf67c"
  },
  {
    "url": "assets/js/77.ec823ffd.js",
    "revision": "f52a81a7ca2d0d85b36b731f27cac17b"
  },
  {
    "url": "assets/js/78.45d4a7cb.js",
    "revision": "ca6ca637edd55fc808c618327f944e22"
  },
  {
    "url": "assets/js/79.44ef0448.js",
    "revision": "e30c4be9763f7a51ce71a8bc3f7f4501"
  },
  {
    "url": "assets/js/8.35291961.js",
    "revision": "8949d917cbfd94e59c7da5f0a7ffccc6"
  },
  {
    "url": "assets/js/80.4badf2d0.js",
    "revision": "7b286634b08f4a451c33dd7a9c80e671"
  },
  {
    "url": "assets/js/81.cd14ea8b.js",
    "revision": "4d27c1b1d20225063cec22b73c2dca7c"
  },
  {
    "url": "assets/js/82.678441a9.js",
    "revision": "97cf4e6acc72ea46549ef28c86be7f61"
  },
  {
    "url": "assets/js/83.1d8c39f7.js",
    "revision": "d6a5088c2f3d175c6e772db0d0b62096"
  },
  {
    "url": "assets/js/84.f19a3a74.js",
    "revision": "9c9cbf1ac3d0cb2a2ef13ee1a56fd65f"
  },
  {
    "url": "assets/js/85.2dfa2fd2.js",
    "revision": "8c05add2319f4a55ec129dcfbb96059e"
  },
  {
    "url": "assets/js/86.36fe4892.js",
    "revision": "ef91ddafc4ab04c54f372584b2dea1bb"
  },
  {
    "url": "assets/js/87.d6df7609.js",
    "revision": "16ca3a0016f9384ea78941e6a022397c"
  },
  {
    "url": "assets/js/88.a326a318.js",
    "revision": "b5ec1274da73a0bc811661e74465bbc5"
  },
  {
    "url": "assets/js/89.e5b73123.js",
    "revision": "c66c58c1ba5621a114b862556da7b080"
  },
  {
    "url": "assets/js/9.4f7c05dd.js",
    "revision": "49cc5cadaead7a4bfab173bb4956d775"
  },
  {
    "url": "assets/js/90.9b816615.js",
    "revision": "8b2248833d3cbb2ecd172b3c3f6eef62"
  },
  {
    "url": "assets/js/91.142d80b3.js",
    "revision": "5797d11ab6ae18311e5734243ae4a7a3"
  },
  {
    "url": "assets/js/92.87e7e610.js",
    "revision": "d14545427b094258352ed8cd3309c2b3"
  },
  {
    "url": "assets/js/93.51993c36.js",
    "revision": "0231b4b1d0d09ea807ed000115a7cf26"
  },
  {
    "url": "assets/js/94.ae4c1c86.js",
    "revision": "6c940c85c63ccba921187bbfdacbdfef"
  },
  {
    "url": "assets/js/95.c90c3229.js",
    "revision": "94a098ac9bc08681bfd29bec56034eae"
  },
  {
    "url": "assets/js/96.f7e68811.js",
    "revision": "887ec078157fa563321179d821e43a74"
  },
  {
    "url": "assets/js/97.67a5729e.js",
    "revision": "fcf806ad28dd5fe905c6e1701282e78c"
  },
  {
    "url": "assets/js/98.dbd0273f.js",
    "revision": "2f13acde7bb648782845840a85a93998"
  },
  {
    "url": "assets/js/99.7122ad74.js",
    "revision": "019e83d4e98f16fbb15dea27a1fa5303"
  },
  {
    "url": "base/api/1.echarts.html",
    "revision": "de02720b242eb0031c875b32c95ef95d"
  },
  {
    "url": "base/api/1.index.html",
    "revision": "6b7bb19a57da3901842c4585eca74932"
  },
  {
    "url": "base/api/2.echartsInstance.html",
    "revision": "9d12af232891b90a2833ef964c021156"
  },
  {
    "url": "base/api/3.action.html",
    "revision": "4c1241c52c9b167248c47cc0c48b521b"
  },
  {
    "url": "base/api/4.events.html",
    "revision": "8c2abe7acf4eb4506ded8d6fe1c9f335"
  },
  {
    "url": "base/components/1.index.html",
    "revision": "ec04fbe5984186b61651f30b4e99dc44"
  },
  {
    "url": "base/components/1.legend.html",
    "revision": "07abe07b91ac5083ebc71dc1bceaf7ec"
  },
  {
    "url": "base/components/2.grid.html",
    "revision": "4cc9678dca73ead994001278b6947322"
  },
  {
    "url": "base/components/2.polar.html",
    "revision": "1dbe9cde6e661866082ddbb356a4b297"
  },
  {
    "url": "base/components/2.radiusAxis.html",
    "revision": "2e30f67eedae41369f6a253cdbcfa296"
  },
  {
    "url": "base/components/2.xAxis.html",
    "revision": "cfc7d6cb78d58fb538009168081a0208"
  },
  {
    "url": "base/components/2.yAxis.html",
    "revision": "0046efd9845aebddb5d9ac1a10c40dd2"
  },
  {
    "url": "base/components/3.angleAxis.html",
    "revision": "c1aabb3def65f48ed73fcf09a04a44fc"
  },
  {
    "url": "base/components/4.radar.html",
    "revision": "09ce465c33fdf74be7f7406fd1a75e7c"
  },
  {
    "url": "base/components/5.dataZoom.html",
    "revision": "0abb9d977bd7788d59f1c236f55c5385"
  },
  {
    "url": "base/components/6.visualMap.html",
    "revision": "27bde5bc5da0f18744e6817b26c48fb9"
  },
  {
    "url": "base/components/7.tooltip.html",
    "revision": "6405096325a9290f1c053e93cc79e5a2"
  },
  {
    "url": "base/components/8.geo.html",
    "revision": "12cc2767e3ed6d0c318d4bfea2499a0d"
  },
  {
    "url": "base/gl/1.index.html",
    "revision": "d8b6efcf3f4d45cafc2c0a8bfada020e"
  },
  {
    "url": "base/gl/1.scatter3D.html",
    "revision": "947748d3d7c9d149c2f8f0aaae7c82e9"
  },
  {
    "url": "base/gl/10.flowGL.html",
    "revision": "92e3dd2813dcefbbcef457189b423255"
  },
  {
    "url": "base/gl/2.bar3D.html",
    "revision": "fff6f0b45f2123c090cd26c90d173f33"
  },
  {
    "url": "base/gl/3.line3D.html",
    "revision": "303869e99434e89d80633375eb40026b"
  },
  {
    "url": "base/gl/4.lines3D.html",
    "revision": "0e11e9938487677f9f96357745c706b6"
  },
  {
    "url": "base/gl/5.map3D.html",
    "revision": "207ae03cf89f31d9502e029c08b53351"
  },
  {
    "url": "base/gl/6.surface.html",
    "revision": "3ba1f20d46bd1c40ebd3ff9436296e8f"
  },
  {
    "url": "base/gl/7.polygons3D.html",
    "revision": "3cc155fb47ff7ab453d4912f61babcbd"
  },
  {
    "url": "base/gl/8.scatterGL.html",
    "revision": "89af7ba09fd69ae440d9108ab376505d"
  },
  {
    "url": "base/gl/9.graphGL.html",
    "revision": "10aa7275c9c2323fd0a4cd05b25977cc"
  },
  {
    "url": "base/series/1.index.html",
    "revision": "205c572814e28a7799d36bfe8900bec2"
  },
  {
    "url": "base/series/1.line.html",
    "revision": "95b797e4c62d04aeb2814802a32abfd7"
  },
  {
    "url": "base/series/10.boxplot.html",
    "revision": "9bbdd0444691c1e90d2d34f9574c27b0"
  },
  {
    "url": "base/series/11.candlestick.html",
    "revision": "aaf59eee1f3f59b060b2e9d64de7617c"
  },
  {
    "url": "base/series/12.heatmap.html",
    "revision": "c95a1dfb039af6909f68c49e43efb3ae"
  },
  {
    "url": "base/series/13.map.html",
    "revision": "5e9fa3e343a10f6d14d867bd93c4a027"
  },
  {
    "url": "base/series/14.parallel.html",
    "revision": "c2d9bffeea79cd6fdef4664ae392e161"
  },
  {
    "url": "base/series/15.lines.html",
    "revision": "decc5fccb1aeda280dd3932f9a333abc"
  },
  {
    "url": "base/series/16.graph.html",
    "revision": "72b800ca3908bc984b6b8ee7fc5b1c1d"
  },
  {
    "url": "base/series/17.sankey.html",
    "revision": "865f2722e3c482fc14d47e6df2298cfc"
  },
  {
    "url": "base/series/18.funnel.html",
    "revision": "74abc0de75d3289e33c1e87ea44fdefe"
  },
  {
    "url": "base/series/19.gauge.html",
    "revision": "0228c40829f208738056e9a16b6ef0d2"
  },
  {
    "url": "base/series/2.bar.html",
    "revision": "6d598fca2de02cb057a38a766e2499c8"
  },
  {
    "url": "base/series/20.pictorialBar.html",
    "revision": "25764acb31efb76a1d9a40d035f29603"
  },
  {
    "url": "base/series/21.themeRiver.html",
    "revision": "418065f4a388c31a390847f74841bb5a"
  },
  {
    "url": "base/series/22.custom.html",
    "revision": "9c3d157b4380cbd2f125f50d1cce4109"
  },
  {
    "url": "base/series/3.pie.html",
    "revision": "b6d254df9eb95b8fbb53b4500375a569"
  },
  {
    "url": "base/series/4.scatter.html",
    "revision": "6c2321fa5266471c185925461929ad37"
  },
  {
    "url": "base/series/5.effectScatter.html",
    "revision": "8a000b9aa429c4114bb913ecbac96a77"
  },
  {
    "url": "base/series/6.radar.html",
    "revision": "ad979b9fbfd455d29f1e6c36aa4adf7c"
  },
  {
    "url": "base/series/7.tree.html",
    "revision": "5e7a090ca6784902fc8eb45ee61974a8"
  },
  {
    "url": "base/series/8.treemap.html",
    "revision": "73fbd2ba6e78aa1b76cb0beff1a549d0"
  },
  {
    "url": "base/series/9.sunburst.html",
    "revision": "8e739f34e67f5dc2f14e75e938ee2c8f"
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
    "revision": "2e2d11ffd5fe0912a428daf52c3847a5"
  },
  {
    "url": "mock/http.js",
    "revision": "a219140640bec4dfbe8f4fe88d351ed8"
  },
  {
    "url": "senior/1.micro/1.index.html",
    "revision": "a0d42d6fe5ebf3b303e1463096acd673"
  },
  {
    "url": "senior/1.micro/1.singlespa.html",
    "revision": "615af92d45ff43beb7552aa5ca3fa270"
  },
  {
    "url": "senior/1.micro/1.singlespa2.html",
    "revision": "16698c6a32944ca1ab7430992be279c6"
  },
  {
    "url": "senior/1.micro/2.qiankun.html",
    "revision": "41d1d1c573557e8c0a75555e04e5f092"
  },
  {
    "url": "senior/1.micro/2.qiankun2.html",
    "revision": "3a1601a3057e580e3bf46a43f17b641f"
  },
  {
    "url": "senior/1.micro/3.share.html",
    "revision": "a2ff590113a5d3cfd4eb55cc4c7e65dd"
  },
  {
    "url": "senior/1.micro/4.dev.html",
    "revision": "d92eca296f8aa81461c3c2f019d080b3"
  },
  {
    "url": "senior/2.typescript/1.env.html",
    "revision": "6ca7d973c5dd421e8fa879b84d090c95"
  },
  {
    "url": "senior/2.typescript/1.index.html",
    "revision": "a6a339f73519a154857a75547d089256"
  },
  {
    "url": "senior/2.typescript/10.infer.html",
    "revision": "1f6b6fe32c395694b47b6c8e6807377a"
  },
  {
    "url": "senior/2.typescript/11.overlapping.html",
    "revision": "6501a1efd25772be0a3d8eefa1b1101f"
  },
  {
    "url": "senior/2.typescript/12.condition.html",
    "revision": "c6cb84531e8df877760f87e45ab11516"
  },
  {
    "url": "senior/2.typescript/13.builtin.html",
    "revision": "9e57f110ab080c716d0283fc9e493553"
  },
  {
    "url": "senior/2.typescript/14.package.html",
    "revision": "43b5848d2df3f11075fedf56c168224b"
  },
  {
    "url": "senior/2.typescript/15.custom.html",
    "revision": "3535182ef5719c0e29738a7fd7b10eda"
  },
  {
    "url": "senior/2.typescript/16.unknown.html",
    "revision": "f75e9e0dbeacc2abbbd11f9713b955d3"
  },
  {
    "url": "senior/2.typescript/17.module.html",
    "revision": "35eed0b88164e1d820310ddc5ca562b0"
  },
  {
    "url": "senior/2.typescript/18.statement.html",
    "revision": "d591ff13e65945272ff582ed0437a778"
  },
  {
    "url": "senior/2.typescript/19.extend.html",
    "revision": "03dcf52ce6572f7f630faf1d4c784466"
  },
  {
    "url": "senior/2.typescript/2.base.html",
    "revision": "da907ea290389bc83c17e07b70c96c94"
  },
  {
    "url": "senior/2.typescript/3.deduction.html",
    "revision": "fa5046478a64c9da380b145a064a97d2"
  },
  {
    "url": "senior/2.typescript/4.type.html",
    "revision": "58be34148a520e41f77ed0eb90c61e1e"
  },
  {
    "url": "senior/2.typescript/5.class.html",
    "revision": "fb100c61f80e760ae978002dfeeae08a"
  },
  {
    "url": "senior/2.typescript/6.interface.html",
    "revision": "c59f08f56df4d3f49a53096667417899"
  },
  {
    "url": "senior/2.typescript/7.generic.html",
    "revision": "e29c0b7cc1c6c462b6060362e74a0f6a"
  },
  {
    "url": "senior/2.typescript/8.compatible.html",
    "revision": "2b42ff4da8292f8ea4b830d51d82ea2e"
  },
  {
    "url": "senior/2.typescript/9.protect.html",
    "revision": "5830433f128746d31cc2f05be0da8ace"
  },
  {
    "url": "senior/3.deploy/1.index.html",
    "revision": "40c17e412b37d8a3ca27f8a32dd286a2"
  },
  {
    "url": "senior/3.deploy/1.local.html",
    "revision": "e9575748c059c7975f6aed0e68abc7f8"
  },
  {
    "url": "senior/3.deploy/2.gitlab.html",
    "revision": "c30acd393d8f31df5025848e6751f0a4"
  },
  {
    "url": "senior/3.deploy/3.genkins.html",
    "revision": "700e35f4d1c2b6154d921ab0ce18df26"
  },
  {
    "url": "senior/3.deploy/4.centos.html",
    "revision": "57a984f637ff7aa72ef50187d76163bd"
  },
  {
    "url": "senior/3.deploy/5.nginx.html",
    "revision": "1442c4c2fe2d11dfe6bedfc5c97a650d"
  },
  {
    "url": "senior/4.component/1.button.html",
    "revision": "f82371c12e7b0659ac47ecd34c59015f"
  },
  {
    "url": "senior/4.component/1.env.html",
    "revision": "b1a350262d7194a60de48b5d7a6fc3a8"
  },
  {
    "url": "senior/4.component/1.index.html",
    "revision": "18bd0313ff717c83972ab57e9bd0557e"
  },
  {
    "url": "senior/4.component/1.recursion.html",
    "revision": "74f1b6ca525298cc967211f0c465b135"
  },
  {
    "url": "senior/4.component/10.tree.html",
    "revision": "2ef6568e118bc6ed7c945c8bf52e3d72"
  },
  {
    "url": "senior/4.component/12.table.html",
    "revision": "7ce6b6d2c62b9bcf11799f4d503c2bf9"
  },
  {
    "url": "senior/4.component/13.publish.html",
    "revision": "1f63e5fdabad3f587e4b948fb037996c"
  },
  {
    "url": "senior/4.component/2.dropdown.html",
    "revision": "840c7879e2903f3e3f00ce0b89e07560"
  },
  {
    "url": "senior/4.component/3.dialog.html",
    "revision": "c4ed95da7a12f85bcc0e38511c6dc3bc"
  },
  {
    "url": "senior/4.component/3.form.html",
    "revision": "5ed5d60f250d24ae468d9ac62aefd98e"
  },
  {
    "url": "senior/4.component/4.input.html",
    "revision": "610541e8c41291554fc4e8817a3aa1bc"
  },
  {
    "url": "senior/4.component/4.render.html",
    "revision": "6a7afbda6af5e42683f8c5c8236ae93c"
  },
  {
    "url": "senior/4.component/5.checkBox.html",
    "revision": "fa7976050dc35ad9f44b5f31e92e9bd9"
  },
  {
    "url": "senior/4.component/6.cascader.html",
    "revision": "ac678bccf00c30958d67678ed4dfa1c5"
  },
  {
    "url": "senior/4.component/7.date.html",
    "revision": "b1b91aeafb76b767fcad6409dec612e8"
  },
  {
    "url": "senior/4.component/8.dispaly.html",
    "revision": "ece09dbd9ed25ee1c3036ec7bac343b0"
  },
  {
    "url": "senior/4.component/9.alert.html",
    "revision": "1566e4c0eb0b9b0d3b73dd25a255daba"
  },
  {
    "url": "senior/4.component/9.dynamics.html",
    "revision": "781e1fa3fa45e7d305b701921f9fb0ac"
  },
  {
    "url": "source/vue-cli2.x/1.index.html",
    "revision": "e93dae5ac27baf4eaa55121c9743d4cf"
  },
  {
    "url": "source/vue-cli3.x/1.index.html",
    "revision": "27ecdb22fac0755481c4bf7442d54f58"
  },
  {
    "url": "source/vue-router3.x/1.index.html",
    "revision": "fefbe12c221c1f9b4a89c58c1f8a27e5"
  },
  {
    "url": "source/vue-router3.x/2.origin.html",
    "revision": "f89e1be025326d0932913b9442abe860"
  },
  {
    "url": "source/vue-router4.x/1.index.html",
    "revision": "62188897101e963d2e4f1ff3becc2200"
  },
  {
    "url": "source/vue2.x/1.index.html",
    "revision": "bdc7cdf0c5538ea522d6cb68231ccf82"
  },
  {
    "url": "source/vue2.x/10.optimize.html",
    "revision": "7a099bff26b8b53d36131bcf2bdf07c8"
  },
  {
    "url": "source/vue2.x/11.gencode.html",
    "revision": "70fb84a72337abda552f8d30bf00d56b"
  },
  {
    "url": "source/vue2.x/12.mount.html",
    "revision": "28b28a9639d37769912c56c909d01992"
  },
  {
    "url": "source/vue2.x/13._render.html",
    "revision": "3948dd8e39b9324cdd5318842ea27282"
  },
  {
    "url": "source/vue2.x/14._update.html",
    "revision": "ebd727127b839444b73583198069bad8"
  },
  {
    "url": "source/vue2.x/2.initGlobalAPI.html",
    "revision": "6df97ce986c305efeb60f292e3924c5a"
  },
  {
    "url": "source/vue2.x/3.initMixin.html",
    "revision": "b1cb727e4784bc40ecddae6fae28016c"
  },
  {
    "url": "source/vue2.x/4.stateMixin.html",
    "revision": "df59ecc121e3ce4bd53d569e50bbed16"
  },
  {
    "url": "source/vue2.x/5.eventsMixin.html",
    "revision": "8eda625a2a2ac3d73a33dd41ca2540b8"
  },
  {
    "url": "source/vue2.x/6.lifecycleMixin.html",
    "revision": "4669583c48e014baefeafffe5ca80d39"
  },
  {
    "url": "source/vue2.x/7.renderMixin.html",
    "revision": "de8667bd480f55f2a41e013335a02ce6"
  },
  {
    "url": "source/vue2.x/8.mount.html",
    "revision": "7e3989fda76dad682c3610d0ab831915"
  },
  {
    "url": "source/vue2.x/9.ast.html",
    "revision": "4f95ce1b125c830c384af2c7277d0287"
  },
  {
    "url": "source/vue3.x/1.index.html",
    "revision": "17317c01d9b3d8c1a7e4e7814cf146c9"
  },
  {
    "url": "source/vue3.x/10.optimize.html",
    "revision": "8d47be2394c2628b05b56c18b5786425"
  },
  {
    "url": "source/vue3.x/11.gencode.html",
    "revision": "77c87efef6691e8e1577192ed97bbd7a"
  },
  {
    "url": "source/vue3.x/12.mount.html",
    "revision": "06eddc11ebd80667c518df18ebb9b8c6"
  },
  {
    "url": "source/vue3.x/13._render.html",
    "revision": "a2ca22dc2862504cacc419d4088da95a"
  },
  {
    "url": "source/vue3.x/14._update.html",
    "revision": "971580415ce108e29dfa71aab376806f"
  },
  {
    "url": "source/vue3.x/2.initGlobalAPI.html",
    "revision": "7e156af61739c86a4ea475b11031589e"
  },
  {
    "url": "source/vue3.x/3.initMixin.html",
    "revision": "17d54781c02e034e58e6ff7c2e6d4a8b"
  },
  {
    "url": "source/vue3.x/4.stateMixin.html",
    "revision": "35b28d0cae378d269635185ee04b0ba1"
  },
  {
    "url": "source/vue3.x/5.eventsMixin.html",
    "revision": "a337ebf2dc4ec11ddbbd8642844ad358"
  },
  {
    "url": "source/vue3.x/6.lifecycleMixin.html",
    "revision": "9127fc7c28829da2b187b6b1d5209358"
  },
  {
    "url": "source/vue3.x/7.renderMixin.html",
    "revision": "e14bca6e62a33580950603048670cc85"
  },
  {
    "url": "source/vue3.x/8.mount.html",
    "revision": "6231b3478fa4f8342ecc26a5291a6805"
  },
  {
    "url": "source/vue3.x/9.ast.html",
    "revision": "f91045bb88ff71216d36cc69c67e223f"
  },
  {
    "url": "source/vuex3.x/1.index.html",
    "revision": "a79add795fef8a039051ba4a8a271110"
  },
  {
    "url": "source/vuex3.x/2.use.html",
    "revision": "df78278088a5983618bc8d8432016db5"
  },
  {
    "url": "source/vuex3.x/3.origin.html",
    "revision": "8e080f988a3aa8a7f2b4566700f03f39"
  },
  {
    "url": "source/vuex4.x/1.index.html",
    "revision": "d1e88c11424a847fc40d92a128d2545e"
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
