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
    "revision": "b1ad9f42f78cb88749d53fd59fc0bc85"
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
    "url": "assets/js/46.6a31c675.js",
    "revision": "efd51185d797cb8ebaa9e0eb5bd5bc96"
  },
  {
    "url": "assets/js/47.e21c656c.js",
    "revision": "66669637531768c5b642a13558b41c86"
  },
  {
    "url": "assets/js/48.ef984163.js",
    "revision": "28996973531f434ce1a8bd90c6542210"
  },
  {
    "url": "assets/js/49.22966f46.js",
    "revision": "4c5298c177daf5f41788a2684e921008"
  },
  {
    "url": "assets/js/5.cda74fd5.js",
    "revision": "1dcbf08f0f3d751419e671163ff7f7c7"
  },
  {
    "url": "assets/js/50.2cda3208.js",
    "revision": "f19bb673379834e929b0a9e952866393"
  },
  {
    "url": "assets/js/51.711fe1f1.js",
    "revision": "0fbe3051fe6e3c4b40575523f35c08d0"
  },
  {
    "url": "assets/js/52.628b3939.js",
    "revision": "e1d81f55287b2d8184b27ea657aaa3ea"
  },
  {
    "url": "assets/js/53.12bd699a.js",
    "revision": "788c2f9450690b8ece77b35998ae469d"
  },
  {
    "url": "assets/js/54.b08a4950.js",
    "revision": "c67d5fe9acde3d8c859bbc6f7211690d"
  },
  {
    "url": "assets/js/55.5d67c9e9.js",
    "revision": "d7c8d4f5c1203852508069460f252fc3"
  },
  {
    "url": "assets/js/56.e45e7aeb.js",
    "revision": "8d94121d41489d2d30cc04c89049f3c0"
  },
  {
    "url": "assets/js/57.77005290.js",
    "revision": "9e68a8822e3fde31fb604f7da1c4c3c7"
  },
  {
    "url": "assets/js/58.4cea7f71.js",
    "revision": "9c19fc304b400d627c328695d8f037b4"
  },
  {
    "url": "assets/js/59.2a7494f7.js",
    "revision": "c5e56d3a48a134eb836ecf5fd41cbfe8"
  },
  {
    "url": "assets/js/6.f2a9d0ac.js",
    "revision": "84137b506a213a72a194d009da2b09c3"
  },
  {
    "url": "assets/js/60.8d19dc13.js",
    "revision": "1d1ec4fee6c561b517591935379f69c4"
  },
  {
    "url": "assets/js/61.45501a23.js",
    "revision": "de187217a5f147e77b50a908c77b744b"
  },
  {
    "url": "assets/js/62.341678a6.js",
    "revision": "faf5e06014be4e480920299a4f820a93"
  },
  {
    "url": "assets/js/63.4ae0cace.js",
    "revision": "e1d4c14c796ca41bd6d272c3ba09295e"
  },
  {
    "url": "assets/js/64.abbddc85.js",
    "revision": "db63486008fef4d6119446d9a2448498"
  },
  {
    "url": "assets/js/65.8ba7c8b4.js",
    "revision": "144b5481b3ed28818ab7f528eaf13487"
  },
  {
    "url": "assets/js/66.2cb74b08.js",
    "revision": "3c73089908b38f8ad983ea2f8e307f84"
  },
  {
    "url": "assets/js/67.9990acd0.js",
    "revision": "2c2fdb131632a916d6038c1ebd37d6f6"
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
    "revision": "b0fc2191a6d7d9707bd21fab114f3fdd"
  },
  {
    "url": "base/api/1.index.html",
    "revision": "c8d9bfb561f2df03286930153ef98450"
  },
  {
    "url": "base/api/2.echartsInstance.html",
    "revision": "38acd3ae4c12d876b4abb4499f0efc86"
  },
  {
    "url": "base/api/3.action.html",
    "revision": "38203a1d5cedc9b680180bf7919964c7"
  },
  {
    "url": "base/api/4.events.html",
    "revision": "f5bad354d655ecd23911e541de0e60a5"
  },
  {
    "url": "base/components/1.index.html",
    "revision": "5aa2384796ad7573f9dd4cc514be2f9c"
  },
  {
    "url": "base/components/1.legend.html",
    "revision": "7fb6899a71ed4a6c4f7b2071701c701a"
  },
  {
    "url": "base/components/2.grid.html",
    "revision": "d7f1822b991a366d2b33b11994bb8806"
  },
  {
    "url": "base/components/2.polar.html",
    "revision": "50f77d379d09c9d7fce78ebbcb8953ce"
  },
  {
    "url": "base/components/2.radiusAxis.html",
    "revision": "9263af2055581b45d1c2fc036506e77e"
  },
  {
    "url": "base/components/2.xAxis.html",
    "revision": "ccf82dc77c07e635361b489c32a3484b"
  },
  {
    "url": "base/components/2.yAxis.html",
    "revision": "118dd4c1165a0bc1117aa993d7487fba"
  },
  {
    "url": "base/components/3.angleAxis.html",
    "revision": "487b598910fa1f6529e26298d042105b"
  },
  {
    "url": "base/components/4.radar.html",
    "revision": "234d4cf9a71392185cfb2bece6b84050"
  },
  {
    "url": "base/components/5.dataZoom.html",
    "revision": "eae49c45df805bdc7da6ad4c38ff8b26"
  },
  {
    "url": "base/components/6.visualMap.html",
    "revision": "19a27139da65e3bede8b6dda3a47935e"
  },
  {
    "url": "base/components/7.tooltip.html",
    "revision": "12642ce21c9b8c477cb773b66a39d79c"
  },
  {
    "url": "base/components/8.geo.html",
    "revision": "5e2bb9f8982e5c155bb94dedeb3ce5c8"
  },
  {
    "url": "base/gl/1.index.html",
    "revision": "0dfbf3d91b49654246868977c59059b1"
  },
  {
    "url": "base/gl/1.scatter3D.html",
    "revision": "1aeacc94ec108ae85c565eff5b0d9e16"
  },
  {
    "url": "base/gl/10.flowGL.html",
    "revision": "05cb54c165de3a845946a16c400533d4"
  },
  {
    "url": "base/gl/2.bar3D.html",
    "revision": "8372ea30b5348d9e9387c6c92fae8127"
  },
  {
    "url": "base/gl/3.line3D.html",
    "revision": "35426f1611d7ae56da9666417ecf4cb1"
  },
  {
    "url": "base/gl/4.lines3D.html",
    "revision": "ca580c3b237c1864964161d568ae5a7e"
  },
  {
    "url": "base/gl/5.map3D.html",
    "revision": "ef3360681810465923d491c875bd9898"
  },
  {
    "url": "base/gl/6.surface.html",
    "revision": "a70fcece7098a86bdaff39f9a6242ac6"
  },
  {
    "url": "base/gl/7.polygons3D.html",
    "revision": "86f57904ec4e04ab78fea60454456c3d"
  },
  {
    "url": "base/gl/8.scatterGL.html",
    "revision": "5c4a862ce668b2cf6cc38ba70ccdb254"
  },
  {
    "url": "base/gl/9.graphGL.html",
    "revision": "f1a24ac9478ca07e80a6e478fb65c128"
  },
  {
    "url": "base/series/1.index.html",
    "revision": "bdd87207d85198b86fbbff85c6b49671"
  },
  {
    "url": "base/series/1.line.html",
    "revision": "813058c423ef5317e309b49d4d337246"
  },
  {
    "url": "base/series/10.boxplot.html",
    "revision": "f47db6c47e7eac7018602dea990f3b39"
  },
  {
    "url": "base/series/11.candlestick.html",
    "revision": "8c41e359bd617bec6a0b91c1415797aa"
  },
  {
    "url": "base/series/12.heatmap.html",
    "revision": "35c1cfc018109633c326c10ad200fd43"
  },
  {
    "url": "base/series/13.map.html",
    "revision": "450fc9448d88dc7557041585e111c02c"
  },
  {
    "url": "base/series/14.parallel.html",
    "revision": "3a5bd704ac66ddd4b8264045c834d3ab"
  },
  {
    "url": "base/series/15.lines.html",
    "revision": "9813bcadb001bbd11c2e11deae022f6b"
  },
  {
    "url": "base/series/16.graph.html",
    "revision": "283e2cc37acc712619454dbb03c3e554"
  },
  {
    "url": "base/series/17.sankey.html",
    "revision": "7b876b00abfe361fcfa6443ce5bcbd9f"
  },
  {
    "url": "base/series/18.funnel.html",
    "revision": "3f56b9018138f7d89c5fb0c3de5a38f3"
  },
  {
    "url": "base/series/19.gauge.html",
    "revision": "f25d420c9ec0b90f0a42a5809308da83"
  },
  {
    "url": "base/series/2.bar.html",
    "revision": "e1996b2cba1903d8225354dfd44697c2"
  },
  {
    "url": "base/series/20.pictorialBar.html",
    "revision": "d2788de84342609ebbc8a17e80d20df6"
  },
  {
    "url": "base/series/21.themeRiver.html",
    "revision": "89068d5c1563576beaf351c0e8785ee0"
  },
  {
    "url": "base/series/22.custom.html",
    "revision": "db5fdbe4a88c1b3740cf50a507c159b2"
  },
  {
    "url": "base/series/3.pie.html",
    "revision": "bd8bcc4563e9f261d33c103e0264348d"
  },
  {
    "url": "base/series/4.scatter.html",
    "revision": "46d28b314da5553567c363bb308548ea"
  },
  {
    "url": "base/series/5.effectScatter.html",
    "revision": "d6d849bc81a83b6a321cce85f13b157b"
  },
  {
    "url": "base/series/6.radar.html",
    "revision": "707bb63954277aa9a54d32d41425f84d"
  },
  {
    "url": "base/series/7.tree.html",
    "revision": "5167f505298c0f52f97b4dc00b3558ab"
  },
  {
    "url": "base/series/8.treemap.html",
    "revision": "1db83addebbc9c17e33bc991109d30d0"
  },
  {
    "url": "base/series/9.sunburst.html",
    "revision": "d2113d4ae6bf68c6da768152bb2d4224"
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
    "revision": "0eb7eb37ae1f27c42aa17ae99faaca68"
  },
  {
    "url": "mock/http.js",
    "revision": "a219140640bec4dfbe8f4fe88d351ed8"
  },
  {
    "url": "senior/1.micro/1.index.html",
    "revision": "81990f68b83bf0eb56dcc030eb61984d"
  },
  {
    "url": "senior/1.micro/1.singlespa.html",
    "revision": "5bc7e548c76bf7f014ec43f5244ca2e0"
  },
  {
    "url": "senior/1.micro/1.singlespa2.html",
    "revision": "ab7883715240a2b217058a2c303dcbec"
  },
  {
    "url": "senior/1.micro/2.qiankun.html",
    "revision": "62274f3714b3a9edff10eb6456619fde"
  },
  {
    "url": "senior/1.micro/2.qiankun2.html",
    "revision": "f8bfd4d45ff853a9f4a6cb3fbfeba398"
  },
  {
    "url": "senior/1.micro/3.share.html",
    "revision": "8977f44f066cfabb53216c4253d058ec"
  },
  {
    "url": "senior/1.micro/4.dev.html",
    "revision": "97f9275dfcc69f75f45303e7f23a7b3f"
  },
  {
    "url": "senior/2.typescript/1.env.html",
    "revision": "f7671a7caa9bdf0f60214bb1c8098059"
  },
  {
    "url": "senior/2.typescript/1.index.html",
    "revision": "09d44f75518a16ca0e1622e75bb262b4"
  },
  {
    "url": "senior/2.typescript/10.infer.html",
    "revision": "e51237758ab15b155fbfd18f5bcc23fe"
  },
  {
    "url": "senior/2.typescript/11.overlapping.html",
    "revision": "9dd2ad7ef010a2df22f575d2f3a9fea5"
  },
  {
    "url": "senior/2.typescript/12.condition.html",
    "revision": "3d53891742dfd7b64a786d875e334061"
  },
  {
    "url": "senior/2.typescript/13.builtin.html",
    "revision": "a2afe5bc644817928db1d588e949283a"
  },
  {
    "url": "senior/2.typescript/14.package.html",
    "revision": "390eb41436814cac3985d6748a0307a5"
  },
  {
    "url": "senior/2.typescript/15.custom.html",
    "revision": "f440bd7203fb232a841ada846700bfd8"
  },
  {
    "url": "senior/2.typescript/16.unknown.html",
    "revision": "ba96c112ecfe7b5b68dae8b70b0365d6"
  },
  {
    "url": "senior/2.typescript/17.module.html",
    "revision": "7c5319060fceb54ce632a43b9934bc5d"
  },
  {
    "url": "senior/2.typescript/18.statement.html",
    "revision": "1715ace3ff4a34b974f6bd25e9757ecc"
  },
  {
    "url": "senior/2.typescript/19.extend.html",
    "revision": "afccb0fae833b6c0c34623b6493602ca"
  },
  {
    "url": "senior/2.typescript/2.base.html",
    "revision": "107e64c7b614af0ac3f9d008e6edb017"
  },
  {
    "url": "senior/2.typescript/3.deduction.html",
    "revision": "ee775bf468cdc228ca84ddbf292eab2e"
  },
  {
    "url": "senior/2.typescript/4.type.html",
    "revision": "0cbe6265f69e38c4a4e1a9698d30b975"
  },
  {
    "url": "senior/2.typescript/5.class.html",
    "revision": "760009ada2fcfdabdb3e323315c12ced"
  },
  {
    "url": "senior/2.typescript/6.interface.html",
    "revision": "6be58f647c981e51ea3c80420a83d06b"
  },
  {
    "url": "senior/2.typescript/7.generic.html",
    "revision": "1ea4da99922924597d0981dc4c738bf8"
  },
  {
    "url": "senior/2.typescript/8.compatible.html",
    "revision": "53ab1d6cd5921474848f2d13aae732ba"
  },
  {
    "url": "senior/2.typescript/9.protect.html",
    "revision": "0592bacbbe3968f82262bb69b1d20782"
  },
  {
    "url": "senior/3.deploy/1.index.html",
    "revision": "324cee5fa6abddb62153d78a48abd776"
  },
  {
    "url": "senior/3.deploy/1.local.html",
    "revision": "e87eb50419217860a51a5905ff2ca3a1"
  },
  {
    "url": "senior/3.deploy/2.gitlab.html",
    "revision": "7f493c4a668878c4e0d9c0f2a2404071"
  },
  {
    "url": "senior/3.deploy/3.genkins.html",
    "revision": "c8bc425e2aec214478e3c9a78780eac7"
  },
  {
    "url": "senior/3.deploy/4.centos.html",
    "revision": "0c9586e8eeb96a266143fddebb6d0388"
  },
  {
    "url": "senior/3.deploy/5.nginx.html",
    "revision": "81a3743191ebf0952584a2b9aa3475af"
  },
  {
    "url": "senior/4.component/1.button.html",
    "revision": "6cc15cff7ad15f5c6e870e60fcc83a95"
  },
  {
    "url": "senior/4.component/1.env.html",
    "revision": "2db8f4093d032eadecd2e157c82264ce"
  },
  {
    "url": "senior/4.component/1.index.html",
    "revision": "87d2f83f688e3ee9d9daae2746728bcb"
  },
  {
    "url": "senior/4.component/1.recursion.html",
    "revision": "be3ec256037e8f17de04ae6109b7575b"
  },
  {
    "url": "senior/4.component/10.tree.html",
    "revision": "d68393d98acf160ba5ccc3f4ff933612"
  },
  {
    "url": "senior/4.component/12.table.html",
    "revision": "2195cdf3bdf77d1319ed3ece9cb8b8e4"
  },
  {
    "url": "senior/4.component/13.publish.html",
    "revision": "8dfbd8c6ba2182992fbf4986b0f88786"
  },
  {
    "url": "senior/4.component/2.dropdown.html",
    "revision": "2d60c82389c6fddc1979456d3089692d"
  },
  {
    "url": "senior/4.component/3.dialog.html",
    "revision": "8dcf34459b5aec2e26405ecb7483ed88"
  },
  {
    "url": "senior/4.component/3.form.html",
    "revision": "237f8920a8ed3113601d9a1f8da06523"
  },
  {
    "url": "senior/4.component/4.input.html",
    "revision": "4fe4ca5489d250915cbcc7f182ba74e5"
  },
  {
    "url": "senior/4.component/4.render.html",
    "revision": "7f465e85a22a54ecab1efff106119e7e"
  },
  {
    "url": "senior/4.component/5.checkBox.html",
    "revision": "9ee5f8778c2825a2bbf1c5117c482931"
  },
  {
    "url": "senior/4.component/6.cascader.html",
    "revision": "e97da12e6628ce75b47421b939bf60d2"
  },
  {
    "url": "senior/4.component/7.date.html",
    "revision": "cc3d7534276c17dbb372f8087eac2eb7"
  },
  {
    "url": "senior/4.component/8.dispaly.html",
    "revision": "d294f673a95cd27c69d592e9bfb5fc77"
  },
  {
    "url": "senior/4.component/9.alert.html",
    "revision": "f17410d896aff99667137275d389ba4e"
  },
  {
    "url": "senior/4.component/9.dynamics.html",
    "revision": "530f34b29c45f0df4351991b4fcce313"
  },
  {
    "url": "source/vue-cli2.x/1.index.html",
    "revision": "9f6446e26555b9950c7ad98ab7576430"
  },
  {
    "url": "source/vue-cli3.x/1.index.html",
    "revision": "cc619a8ee8a07a858863ee9c7283d189"
  },
  {
    "url": "source/vue-router3.x/1.index.html",
    "revision": "18ab3e2ba67625ad78bed4f4f91eb43e"
  },
  {
    "url": "source/vue-router3.x/2.origin.html",
    "revision": "af55043203e00a33baf712a591dcf0af"
  },
  {
    "url": "source/vue-router4.x/1.index.html",
    "revision": "980cddccec30c913d022ce6b6eb7f0cf"
  },
  {
    "url": "source/vue2.x/1.index.html",
    "revision": "4dab08d751ed139c2b5fd3215c8fe2f1"
  },
  {
    "url": "source/vue2.x/10.optimize.html",
    "revision": "4538e30675e231e477ce42584a6774b7"
  },
  {
    "url": "source/vue2.x/11.gencode.html",
    "revision": "a00196a35a23c662a28f69c5daec16ca"
  },
  {
    "url": "source/vue2.x/12.mount.html",
    "revision": "bd0306cd14894a19fbb8734b1f0640f3"
  },
  {
    "url": "source/vue2.x/13._render.html",
    "revision": "c22df53bcb661eb7c01bb7b1ae603b81"
  },
  {
    "url": "source/vue2.x/14._update.html",
    "revision": "489941a13ea806cb5c46226c36ad6f81"
  },
  {
    "url": "source/vue2.x/2.initGlobalAPI.html",
    "revision": "3b232521aa02fa5cf45de2cba67f428d"
  },
  {
    "url": "source/vue2.x/3.initMixin.html",
    "revision": "b2737fb71c56c2e41aadb1f99f1be1f1"
  },
  {
    "url": "source/vue2.x/4.stateMixin.html",
    "revision": "01cb2fe9c818a79d16d2a5a9f1d51ffe"
  },
  {
    "url": "source/vue2.x/5.eventsMixin.html",
    "revision": "c85b15197e8b91f3dfc22cf367edf806"
  },
  {
    "url": "source/vue2.x/6.lifecycleMixin.html",
    "revision": "6fcabd07a3df19f45b4235dc5d95e2d5"
  },
  {
    "url": "source/vue2.x/7.renderMixin.html",
    "revision": "1f366c895672ffc2fa40c5763a0caef5"
  },
  {
    "url": "source/vue2.x/8.mount.html",
    "revision": "473e582f3f697e5fb6fc6b83d660fe6e"
  },
  {
    "url": "source/vue2.x/9.ast.html",
    "revision": "581b3fbed1e9c3fb61daa06861dcdd4b"
  },
  {
    "url": "source/vue3.x/1.index.html",
    "revision": "95477bad6a5f6d8078477a7f8498d137"
  },
  {
    "url": "source/vue3.x/10.optimize.html",
    "revision": "bbbb9f9f32de11f9c77e6e00107c89e0"
  },
  {
    "url": "source/vue3.x/11.gencode.html",
    "revision": "36bfc818b7935bf96fa30a8fa9b5fb57"
  },
  {
    "url": "source/vue3.x/12.mount.html",
    "revision": "7f941c6cbea6684c994d13f890597117"
  },
  {
    "url": "source/vue3.x/13._render.html",
    "revision": "ae8cc823f5020cbd49e2b8fa5cbf3842"
  },
  {
    "url": "source/vue3.x/14._update.html",
    "revision": "81caab86776b809c3000da6d8c2490ee"
  },
  {
    "url": "source/vue3.x/2.initGlobalAPI.html",
    "revision": "6628099e91a9b638c70752d16bd0135d"
  },
  {
    "url": "source/vue3.x/3.initMixin.html",
    "revision": "1ce8f55237a18a35609669c37de2f3dd"
  },
  {
    "url": "source/vue3.x/4.stateMixin.html",
    "revision": "01b5fd1e2cfd6fd92a01c75eaa905a72"
  },
  {
    "url": "source/vue3.x/5.eventsMixin.html",
    "revision": "ebf25a406262c4876cb442d6de64c542"
  },
  {
    "url": "source/vue3.x/6.lifecycleMixin.html",
    "revision": "210ec4f5034e0e0cdce8caa95cbd4ab5"
  },
  {
    "url": "source/vue3.x/7.renderMixin.html",
    "revision": "a719e8b52c33e7dd5209d8b5d1612397"
  },
  {
    "url": "source/vue3.x/8.mount.html",
    "revision": "0b68528893c2d2870befb363477cbd23"
  },
  {
    "url": "source/vue3.x/9.ast.html",
    "revision": "5a7dced5b7c2a17c49e6ab7cd6637749"
  },
  {
    "url": "source/vuex3.x/1.index.html",
    "revision": "6dc380ee8f0d7973a8dc58bf3a8b8af8"
  },
  {
    "url": "source/vuex3.x/2.use.html",
    "revision": "e25c2973ef50c21eea51c5da4ab0f4bd"
  },
  {
    "url": "source/vuex3.x/3.origin.html",
    "revision": "719e6de6e02cec79cc6b174e3b735c8a"
  },
  {
    "url": "source/vuex4.x/1.index.html",
    "revision": "9a0702aafcd7fac72787d8275f89227a"
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
