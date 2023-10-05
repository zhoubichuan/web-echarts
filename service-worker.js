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
    "revision": "71a66c5e5f4349213a47e6d95b079609"
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
    "url": "assets/js/124.4e3cd549.js",
    "revision": "4dca896e37e9d5cdef0d2889bd0249d8"
  },
  {
    "url": "assets/js/125.2beb060b.js",
    "revision": "8aa7c939eb71da313a1027d8aee7790d"
  },
  {
    "url": "assets/js/126.2c7189f6.js",
    "revision": "6be337135e31ac9da31066273397c696"
  },
  {
    "url": "assets/js/127.cb9057c0.js",
    "revision": "9770ba98cbb7c5b57a9737ae905e4ff4"
  },
  {
    "url": "assets/js/128.42bf39ff.js",
    "revision": "39e495415b1758ce3d02ff6e18846601"
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
    "url": "assets/js/130.46989c20.js",
    "revision": "e295cad3be0cc9e603ce993d3001ba6a"
  },
  {
    "url": "assets/js/131.ad0c681d.js",
    "revision": "f4f175b852fd90ac8eea8f6e9adbd721"
  },
  {
    "url": "assets/js/132.0b6586d2.js",
    "revision": "b0b636e95fffbf364f0a4c59e9c9b45b"
  },
  {
    "url": "assets/js/133.3f553124.js",
    "revision": "0a0312d4f45fe64f8e7cb445d9015b99"
  },
  {
    "url": "assets/js/134.eedaa9a5.js",
    "revision": "233ce3b0819b2e47ba9c4bd2c7afaa5a"
  },
  {
    "url": "assets/js/135.ab5e452f.js",
    "revision": "15d70ac25018aef281026a5acc81bf7b"
  },
  {
    "url": "assets/js/136.aa0169ab.js",
    "revision": "82b1a7c603a50c11845d48a7c77dc6ee"
  },
  {
    "url": "assets/js/137.42c36407.js",
    "revision": "b87ee404c93b44b8beeb400bb7e2332b"
  },
  {
    "url": "assets/js/138.62e95c4d.js",
    "revision": "e12800526f3bce0cbcb6f4bd0bb8a1d1"
  },
  {
    "url": "assets/js/139.157fc96f.js",
    "revision": "1d69c6a8cfb2eb9b8f77725637fa2fe6"
  },
  {
    "url": "assets/js/14.0188cec7.js",
    "revision": "7270dcad850a168a11a95ac22cde73ca"
  },
  {
    "url": "assets/js/140.94e4c812.js",
    "revision": "52c4a9cf8404574001bc9c8027ecc873"
  },
  {
    "url": "assets/js/141.3fbaac87.js",
    "revision": "2c15963ff0c37f96845094b106316f13"
  },
  {
    "url": "assets/js/142.fb56aeae.js",
    "revision": "6793e7560f48d00c4d72341dfda23c47"
  },
  {
    "url": "assets/js/143.9badd7be.js",
    "revision": "852d895edc664b78385b83fadc728e0a"
  },
  {
    "url": "assets/js/144.4a9b4848.js",
    "revision": "3e3c2806875c2ad01cbfb34686b0d8a1"
  },
  {
    "url": "assets/js/145.1f2cebcd.js",
    "revision": "71041d00e03aaddec527c40cb6790cc1"
  },
  {
    "url": "assets/js/146.bfee6a2e.js",
    "revision": "a0a3aa315d88910bb6a4cd9ff8266e81"
  },
  {
    "url": "assets/js/147.ee128d01.js",
    "revision": "7c4ecec9954899572582fee0529b399e"
  },
  {
    "url": "assets/js/148.a268f936.js",
    "revision": "e144c6ce5c6257fb1861b4b4d539a2eb"
  },
  {
    "url": "assets/js/149.3cf3e87d.js",
    "revision": "d31c40e0c8706bfb384fc101d51cbc83"
  },
  {
    "url": "assets/js/15.b473627f.js",
    "revision": "0b18d077edbca3d7ebd1f84e33f6b9d7"
  },
  {
    "url": "assets/js/150.47d08e3b.js",
    "revision": "90fcb033e748e4126c996d2a35b87f49"
  },
  {
    "url": "assets/js/151.40f3fd63.js",
    "revision": "e2d45fb0a1a763bd5da8869dd8e117a9"
  },
  {
    "url": "assets/js/152.c85a4a4a.js",
    "revision": "2c5713067d788995100a20f57c5b3839"
  },
  {
    "url": "assets/js/153.9dfd48ca.js",
    "revision": "d25019028b21552b03ac0be1819480f6"
  },
  {
    "url": "assets/js/154.6fa2ad93.js",
    "revision": "d9f98117fcb72e84bf59c8d4b57d9e40"
  },
  {
    "url": "assets/js/155.7a6bb758.js",
    "revision": "6bb1a53400badb13f70d707b0197dc48"
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
    "revision": "e00795000127000979699a9ac6c08ef3"
  },
  {
    "url": "base/api/1.index.html",
    "revision": "1ab261d87c76e8f00411d4565148c791"
  },
  {
    "url": "base/api/2.echartsInstance.html",
    "revision": "f26d80f431c6d667a3593533761b3e28"
  },
  {
    "url": "base/api/3.action.html",
    "revision": "920f6a7f1d528c915d51caec384a8780"
  },
  {
    "url": "base/api/4.events.html",
    "revision": "8619ae7797f340b65a97a71bc3af71ca"
  },
  {
    "url": "base/components/1.index.html",
    "revision": "18bdf95402b1167ace683caea415138b"
  },
  {
    "url": "base/components/1.legend.html",
    "revision": "561250aa8a509208455cf64f11b0b638"
  },
  {
    "url": "base/components/2.grid.html",
    "revision": "69c212b758e3dd06725782901db448a2"
  },
  {
    "url": "base/components/2.polar.html",
    "revision": "2d9b2276747d26b7917c2d19c8a00c4c"
  },
  {
    "url": "base/components/2.radiusAxis.html",
    "revision": "3a88868f47b1450a9e8a533c165a1b32"
  },
  {
    "url": "base/components/2.xAxis.html",
    "revision": "8dccb9adfa10791ce35732fab313bd5f"
  },
  {
    "url": "base/components/2.yAxis.html",
    "revision": "8478586049ec5ee56a4f55d2c702f43b"
  },
  {
    "url": "base/components/3.angleAxis.html",
    "revision": "830b9c9cd0e3f17b5815f685e3d5981f"
  },
  {
    "url": "base/components/4.radar.html",
    "revision": "7cd75cee4a3fd9699e02dfac2adafb07"
  },
  {
    "url": "base/components/5.dataZoom.html",
    "revision": "d9eda7654960ddd2150da84b9810d7e2"
  },
  {
    "url": "base/components/6.visualMap.html",
    "revision": "113b46a876f275545ecd7a7d0f6b3c2e"
  },
  {
    "url": "base/components/7.tooltip.html",
    "revision": "f40622d3cd8b1214440f05c5739f8c0d"
  },
  {
    "url": "base/components/8.geo.html",
    "revision": "4bcf8892128c6a648186e3cb72af1a69"
  },
  {
    "url": "base/gl/1.index.html",
    "revision": "8eac71b474d71b3af1e4f5f17b561e46"
  },
  {
    "url": "base/gl/1.scatter3D.html",
    "revision": "72c0985f1901b225bf979bd4a9e73bdd"
  },
  {
    "url": "base/gl/10.flowGL.html",
    "revision": "87c6c040b56fc7545d6e170a683731d4"
  },
  {
    "url": "base/gl/2.bar3D.html",
    "revision": "635aa89b1991eeb539e04f712bb58707"
  },
  {
    "url": "base/gl/3.line3D.html",
    "revision": "c66048bf02bba84de73dcb2736254ed5"
  },
  {
    "url": "base/gl/4.lines3D.html",
    "revision": "280a228b202e8e911cd90941a08248ed"
  },
  {
    "url": "base/gl/5.map3D.html",
    "revision": "d5a05dc4ff817712b5540d76ee898e76"
  },
  {
    "url": "base/gl/6.surface.html",
    "revision": "1bcbe2172d83eb3df12641532e20b184"
  },
  {
    "url": "base/gl/7.polygons3D.html",
    "revision": "1b11d07d7769010b0b24243fcd369587"
  },
  {
    "url": "base/gl/8.scatterGL.html",
    "revision": "55ffffe4e69f162a5bc2036397e163fc"
  },
  {
    "url": "base/gl/9.graphGL.html",
    "revision": "97ed2bec1e3f280af7088e029b8d7cf2"
  },
  {
    "url": "base/series/1.index.html",
    "revision": "ea367c10350aa57f43b28df6fa98fb4a"
  },
  {
    "url": "base/series/1.line.html",
    "revision": "b102d25a467eda6b1faf1ca271d1b28b"
  },
  {
    "url": "base/series/10.boxplot.html",
    "revision": "18d5880ff27e7003c998ffcad7ce6b85"
  },
  {
    "url": "base/series/11.candlestick.html",
    "revision": "d1f71a3535b8d3f9d654aec995ff7c3a"
  },
  {
    "url": "base/series/12.heatmap.html",
    "revision": "2d0c99736dc35d207c1250966ccfd278"
  },
  {
    "url": "base/series/13.map.html",
    "revision": "5e70dcbde10040765eec4a804d860684"
  },
  {
    "url": "base/series/14.parallel.html",
    "revision": "e4c7f2b21c5fd70df41de7643930a204"
  },
  {
    "url": "base/series/15.lines.html",
    "revision": "bc724ff39e5ec655b655addf864590f9"
  },
  {
    "url": "base/series/16.graph.html",
    "revision": "721cbc6cc39cf75ddef18604fa28234c"
  },
  {
    "url": "base/series/17.sankey.html",
    "revision": "194b2b8c4aef764adbdcb741dd01be08"
  },
  {
    "url": "base/series/18.funnel.html",
    "revision": "8f76d2e277cef1f92f2b1ca1983148c6"
  },
  {
    "url": "base/series/19.gauge.html",
    "revision": "7047d7ce91c5160e53909de2097860a4"
  },
  {
    "url": "base/series/2.bar.html",
    "revision": "2b7ce8f4ba2d7f42222a7473e8e5bb2d"
  },
  {
    "url": "base/series/20.pictorialBar.html",
    "revision": "9e7a02ed0074477c21c56a179e82f433"
  },
  {
    "url": "base/series/21.themeRiver.html",
    "revision": "553deb730d395d33c04a4c8ebf472d3d"
  },
  {
    "url": "base/series/22.custom.html",
    "revision": "97a1cf2733df8505137f89d38f9e0da8"
  },
  {
    "url": "base/series/3.pie.html",
    "revision": "292b0125a3aa0a64543d24a5a431b562"
  },
  {
    "url": "base/series/4.scatter.html",
    "revision": "6b923a650d132d33292e7c948608bf2d"
  },
  {
    "url": "base/series/5.effectScatter.html",
    "revision": "4084824d5750a7fe4b3a73b55d721a2a"
  },
  {
    "url": "base/series/6.radar.html",
    "revision": "022a7b14039f2f75de04ffb7c21657a0"
  },
  {
    "url": "base/series/7.tree.html",
    "revision": "083d2a1bcd54d2aeb3de4f885740089a"
  },
  {
    "url": "base/series/8.treemap.html",
    "revision": "bcf980715956662cf4ba0896cc215c7c"
  },
  {
    "url": "base/series/9.sunburst.html",
    "revision": "39584b904479bdfeb27e3a8e235a538c"
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
    "revision": "d0aa5e0fe133f3831a689365179cbcc3"
  },
  {
    "url": "mock/http.js",
    "revision": "a219140640bec4dfbe8f4fe88d351ed8"
  },
  {
    "url": "senior/1.micro/1.index.html",
    "revision": "c6c47f0743ea778a538381744a3a5ce5"
  },
  {
    "url": "senior/1.micro/1.singlespa.html",
    "revision": "4abac90bb973459a55db13b33d53afc0"
  },
  {
    "url": "senior/1.micro/1.singlespa2.html",
    "revision": "06c1b5230756c3c4473e2d1b51ba8cb4"
  },
  {
    "url": "senior/1.micro/2.qiankun.html",
    "revision": "201a73bb89349de9b63b36fbeb9598ea"
  },
  {
    "url": "senior/1.micro/2.qiankun2.html",
    "revision": "bb6a7a65dcccbcdf2a330be8849f733e"
  },
  {
    "url": "senior/1.micro/3.share.html",
    "revision": "46d7f454ddbd352dee9a8d1d7cf176b3"
  },
  {
    "url": "senior/1.micro/4.dev.html",
    "revision": "4b9f0a3b68e0158d47de2cb04ae974de"
  },
  {
    "url": "senior/2.typescript/1.env.html",
    "revision": "3214bf85aa0227374d99117d41b67db6"
  },
  {
    "url": "senior/2.typescript/1.index.html",
    "revision": "3ed88df694d77fa63f4e73b303bd628d"
  },
  {
    "url": "senior/2.typescript/10.infer.html",
    "revision": "3162a797e042aab5219c09ea6993bcf9"
  },
  {
    "url": "senior/2.typescript/11.overlapping.html",
    "revision": "452e8a233462fecb0d67342241c25fce"
  },
  {
    "url": "senior/2.typescript/12.condition.html",
    "revision": "6f2642b8d5b1578e153e5f0fa8c71614"
  },
  {
    "url": "senior/2.typescript/13.builtin.html",
    "revision": "ed1f87573188ec60fe71467a72775ca2"
  },
  {
    "url": "senior/2.typescript/14.package.html",
    "revision": "984f01878004e8df91f997652a96f7e0"
  },
  {
    "url": "senior/2.typescript/15.custom.html",
    "revision": "47b88a8dece4750600a0dd672e325d96"
  },
  {
    "url": "senior/2.typescript/16.unknown.html",
    "revision": "7e28eaa005131208b52d22250867c600"
  },
  {
    "url": "senior/2.typescript/17.module.html",
    "revision": "b93d4697294dc56de4a10b62dd378239"
  },
  {
    "url": "senior/2.typescript/18.statement.html",
    "revision": "5a335abfd2346e0514eef5317ebcdf30"
  },
  {
    "url": "senior/2.typescript/19.extend.html",
    "revision": "27384e841d5964a2af53d17ea56b158c"
  },
  {
    "url": "senior/2.typescript/2.base.html",
    "revision": "f01d5131c4ebad3f0f1b5402cf81660e"
  },
  {
    "url": "senior/2.typescript/3.deduction.html",
    "revision": "8670d511c08b28d7eae1256aaed89c33"
  },
  {
    "url": "senior/2.typescript/4.type.html",
    "revision": "e3f5eef129389bf2468e0eaca0cbb590"
  },
  {
    "url": "senior/2.typescript/5.class.html",
    "revision": "f21b5ef3472a4c81f5335223a442c3a0"
  },
  {
    "url": "senior/2.typescript/6.interface.html",
    "revision": "b47ded662e3d86acaabcadc7f9b0fb18"
  },
  {
    "url": "senior/2.typescript/7.generic.html",
    "revision": "77fa8da931c6b4134b94fbf47b2ed027"
  },
  {
    "url": "senior/2.typescript/8.compatible.html",
    "revision": "af9db1bf9b22a49ce2919385d9141831"
  },
  {
    "url": "senior/2.typescript/9.protect.html",
    "revision": "a7c45c0ed2fa994252abc461e2804fc3"
  },
  {
    "url": "senior/3.deploy/1.index.html",
    "revision": "fefc52727cf09a0c9ec2ca01187c4ea0"
  },
  {
    "url": "senior/3.deploy/1.local.html",
    "revision": "e5d47298d8539f4eaf0a75ff1e4ca60b"
  },
  {
    "url": "senior/3.deploy/2.gitlab.html",
    "revision": "e6290fc2aeca2a6d496122a98d4a9b2f"
  },
  {
    "url": "senior/3.deploy/3.genkins.html",
    "revision": "922f27eb1b09b7c22c0a2b48f62d3271"
  },
  {
    "url": "senior/3.deploy/4.centos.html",
    "revision": "c4d01f856014070fa9ec4e86fbd91bcd"
  },
  {
    "url": "senior/3.deploy/5.nginx.html",
    "revision": "b2b4c594088f2f10739be47bc4d2c228"
  },
  {
    "url": "senior/4.component/1.button.html",
    "revision": "b29f15b6c2fe12224b29698a79ad72f6"
  },
  {
    "url": "senior/4.component/1.env.html",
    "revision": "0f149a4132956a4f67670b369e478f5f"
  },
  {
    "url": "senior/4.component/1.index.html",
    "revision": "84f66c5a2a9f0167dbb7eab632b357d9"
  },
  {
    "url": "senior/4.component/1.recursion.html",
    "revision": "e95a4edec008ebceeb3dfec5875df4d4"
  },
  {
    "url": "senior/4.component/10.tree.html",
    "revision": "7c1f0b24d1f8f6b28f0d765bba850c61"
  },
  {
    "url": "senior/4.component/12.table.html",
    "revision": "ef33d7ba078721604f03432fe4812e58"
  },
  {
    "url": "senior/4.component/13.publish.html",
    "revision": "8199785151a5ef588b3b37a67da9d9e5"
  },
  {
    "url": "senior/4.component/2.dropdown.html",
    "revision": "3485d1e1b3ca466cb2535adf6a05bb4c"
  },
  {
    "url": "senior/4.component/3.dialog.html",
    "revision": "265569f80388cc41fec6a06cac59ff5d"
  },
  {
    "url": "senior/4.component/3.form.html",
    "revision": "13ddf1c08d647935c061dbb1a6341f20"
  },
  {
    "url": "senior/4.component/4.input.html",
    "revision": "c9b990c24094ad9037518e4aaf65830c"
  },
  {
    "url": "senior/4.component/4.render.html",
    "revision": "88830ae239b11e8b6ddc4a260a768dbc"
  },
  {
    "url": "senior/4.component/5.checkBox.html",
    "revision": "da133f813b681d91cf9d74ee88b2320c"
  },
  {
    "url": "senior/4.component/6.cascader.html",
    "revision": "0230a7acab42874067f1539d4cb0e84e"
  },
  {
    "url": "senior/4.component/7.date.html",
    "revision": "8354875d4dcd67db30062268739f4435"
  },
  {
    "url": "senior/4.component/8.dispaly.html",
    "revision": "ff82113206b6c69a9bb873b77b18f60c"
  },
  {
    "url": "senior/4.component/9.alert.html",
    "revision": "d17870c0566676fbf632d2fefb4fac86"
  },
  {
    "url": "senior/4.component/9.dynamics.html",
    "revision": "c5a96e7d42d9381a7059e37904e1b914"
  },
  {
    "url": "source/vue-cli2.x/1.index.html",
    "revision": "1f7943222511026415249bb49cc236c1"
  },
  {
    "url": "source/vue-cli3.x/1.index.html",
    "revision": "1e1fa5de8226fec37031bab3f8be6f08"
  },
  {
    "url": "source/vue-router3.x/1.index.html",
    "revision": "0a19012b348bcf43f09b415d751c9101"
  },
  {
    "url": "source/vue-router3.x/2.origin.html",
    "revision": "ff2bc41f1c7c7cac23f168b5b818205d"
  },
  {
    "url": "source/vue-router4.x/1.index.html",
    "revision": "06ae137452c85e20e5d60fc5bed26615"
  },
  {
    "url": "source/vue2.x/1.index.html",
    "revision": "e21d0f3e3071184b1eb56198bff41c62"
  },
  {
    "url": "source/vue2.x/10.optimize.html",
    "revision": "e2588cf2dda19496522cc1beffd31d15"
  },
  {
    "url": "source/vue2.x/11.gencode.html",
    "revision": "2fa62eab8a6a5b48c87007e0b9666a91"
  },
  {
    "url": "source/vue2.x/12.mount.html",
    "revision": "ea92446813147a4c70dc8ddcd346b851"
  },
  {
    "url": "source/vue2.x/13._render.html",
    "revision": "4c46e2b969e093ba5a78e26d66b061ee"
  },
  {
    "url": "source/vue2.x/14._update.html",
    "revision": "a7d61d096e99f48e98230cdd7a882616"
  },
  {
    "url": "source/vue2.x/2.initGlobalAPI.html",
    "revision": "e87f62c760e62758f5b6311c807e7fc2"
  },
  {
    "url": "source/vue2.x/3.initMixin.html",
    "revision": "712bd5cffe565cbd90605dd2ee4e9312"
  },
  {
    "url": "source/vue2.x/4.stateMixin.html",
    "revision": "b92a78adb22e6984cd77d8f728d42f49"
  },
  {
    "url": "source/vue2.x/5.eventsMixin.html",
    "revision": "500d831de297be230fa5b483cf2e9fba"
  },
  {
    "url": "source/vue2.x/6.lifecycleMixin.html",
    "revision": "0a301821eec1936d8fa5886384ac1517"
  },
  {
    "url": "source/vue2.x/7.renderMixin.html",
    "revision": "b0157dafbca83bb4cd07f6f6d07a2f6d"
  },
  {
    "url": "source/vue2.x/8.mount.html",
    "revision": "d777a752390b895b7bcb54c2d683167b"
  },
  {
    "url": "source/vue2.x/9.ast.html",
    "revision": "2d0f34e2d443f67ebbb99c1383342872"
  },
  {
    "url": "source/vue3.x/1.index.html",
    "revision": "425f6b0e6ccfce969c98e0ab7326df4d"
  },
  {
    "url": "source/vue3.x/10.optimize.html",
    "revision": "13feb8138245127dd9eb500487380007"
  },
  {
    "url": "source/vue3.x/11.gencode.html",
    "revision": "d443be3673e630465988389e9248b581"
  },
  {
    "url": "source/vue3.x/12.mount.html",
    "revision": "d4052728781e5f964396ef9303a7ec75"
  },
  {
    "url": "source/vue3.x/13._render.html",
    "revision": "3c9f98836a59af3c15e0c1a0f7b0f69c"
  },
  {
    "url": "source/vue3.x/14._update.html",
    "revision": "3dc12a9597ea7db705b96e5a7d2fdb2b"
  },
  {
    "url": "source/vue3.x/2.initGlobalAPI.html",
    "revision": "a1732fae62fa14dd8627e9fb0bf13b29"
  },
  {
    "url": "source/vue3.x/3.initMixin.html",
    "revision": "3c8467c4c17d74d5a1200572e523142b"
  },
  {
    "url": "source/vue3.x/4.stateMixin.html",
    "revision": "db42b9d420eb52c053bf0e7d5bba025f"
  },
  {
    "url": "source/vue3.x/5.eventsMixin.html",
    "revision": "40a0810dcbf1ae076b0a892307d1e240"
  },
  {
    "url": "source/vue3.x/6.lifecycleMixin.html",
    "revision": "8ab4304e7b74fa90ead463994c5c5919"
  },
  {
    "url": "source/vue3.x/7.renderMixin.html",
    "revision": "c3afa10ae9628150d9a231bde0d4178d"
  },
  {
    "url": "source/vue3.x/8.mount.html",
    "revision": "ad425ab598620594302d8bbd0bb9bb4f"
  },
  {
    "url": "source/vue3.x/9.ast.html",
    "revision": "288ff03c4699337ef6cce9b7a01095b5"
  },
  {
    "url": "source/vuex3.x/1.index.html",
    "revision": "259dece31deb7b7f2a361b1efd84044d"
  },
  {
    "url": "source/vuex3.x/2.use.html",
    "revision": "3cfc1b49303a86280699fedbefa54596"
  },
  {
    "url": "source/vuex3.x/3.origin.html",
    "revision": "6da36546ac08a0bf0817963c0524a781"
  },
  {
    "url": "source/vuex4.x/1.index.html",
    "revision": "495361ed28e4151c3042745f852b2db0"
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
