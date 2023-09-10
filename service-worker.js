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
    "revision": "f16e71236b21b52d9f150a56837129dd"
  },
  {
    "url": "assets/css/0.styles.4364465c.css",
    "revision": "7ce70421f70db207fca5994776f135d1"
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
    "url": "assets/js/10.84aa20b4.js",
    "revision": "24d3d36bfe699a204aab440ca1366b8e"
  },
  {
    "url": "assets/js/100.9da87527.js",
    "revision": "cce9b31c0a1d8ec0d6419d8f42c021db"
  },
  {
    "url": "assets/js/101.5ea0e8fc.js",
    "revision": "ab21242583c8ce003d9164adb338e84e"
  },
  {
    "url": "assets/js/102.34332258.js",
    "revision": "b861d6de21faff5146c4d09d165d3a44"
  },
  {
    "url": "assets/js/103.5531ec7e.js",
    "revision": "e6bb4b9dbebc9e024918fdf7b6971845"
  },
  {
    "url": "assets/js/104.98273316.js",
    "revision": "f78a532def44827d278f420ddd9ab6d7"
  },
  {
    "url": "assets/js/105.602aef3d.js",
    "revision": "5a67ed31eea12369adac529dfb0547d7"
  },
  {
    "url": "assets/js/106.d82ed1a7.js",
    "revision": "ac675202216e653db1dd3a0eadcb7cde"
  },
  {
    "url": "assets/js/107.dbabd144.js",
    "revision": "011812dde9d24c83a472c03a5e327dbf"
  },
  {
    "url": "assets/js/108.cf1ff992.js",
    "revision": "231239400cd010bd7b1a33b449fa85fc"
  },
  {
    "url": "assets/js/109.55f1d4e0.js",
    "revision": "b904d04958b74d0f1925f78c1af67ae2"
  },
  {
    "url": "assets/js/11.b801d6fc.js",
    "revision": "7f7dbbb03a576c4eb9a186b9b118ffb7"
  },
  {
    "url": "assets/js/110.6e5b264f.js",
    "revision": "596934d0ae1c9f19ef9a269dc5f64676"
  },
  {
    "url": "assets/js/111.02c4271d.js",
    "revision": "5ac345d1fdda426a829f05d237ff7bce"
  },
  {
    "url": "assets/js/112.0828161b.js",
    "revision": "0d5803e34b51891420c69066074e27fd"
  },
  {
    "url": "assets/js/113.fe45f1a7.js",
    "revision": "a6280913a62e1ce5a2015dfe505c112d"
  },
  {
    "url": "assets/js/114.d02dfb08.js",
    "revision": "6313b279a2803f921e73b925465b795c"
  },
  {
    "url": "assets/js/115.6f1bd229.js",
    "revision": "8321d074a6a2c7281c4c9b5e7d04fd70"
  },
  {
    "url": "assets/js/116.a2eb1df1.js",
    "revision": "7749ce8da0bd835defaf57bf6c6248ba"
  },
  {
    "url": "assets/js/117.e357d28a.js",
    "revision": "38cf874a81c1ddf037cae66531d3e810"
  },
  {
    "url": "assets/js/118.0b37c524.js",
    "revision": "8f6c95e54fbaf7f391e28c70de9ee11b"
  },
  {
    "url": "assets/js/119.e030b5c5.js",
    "revision": "49b0e3276c4e63d6c88640933aff1d28"
  },
  {
    "url": "assets/js/12.d325f100.js",
    "revision": "aaa4f9e250e331bdedd270d9efc2d348"
  },
  {
    "url": "assets/js/120.a906ca55.js",
    "revision": "ec3f773fa366b32a5dbcb4014b7f7223"
  },
  {
    "url": "assets/js/121.43c45762.js",
    "revision": "9a863803c80bafea2019087c7dc2c0e8"
  },
  {
    "url": "assets/js/122.dc2df8ef.js",
    "revision": "7b06b5637276066dc56882ac573bb046"
  },
  {
    "url": "assets/js/123.e3e12760.js",
    "revision": "182ff5679b66873c23b3b6a1db7f9912"
  },
  {
    "url": "assets/js/124.237c2651.js",
    "revision": "6295effd1957e1c3f75b194d8c571f61"
  },
  {
    "url": "assets/js/125.7cbc6cc0.js",
    "revision": "3560cb2a2c20dc1ac97cd1308a10efc5"
  },
  {
    "url": "assets/js/126.008574d1.js",
    "revision": "b7b79494b1c02126c871266f114b5ba1"
  },
  {
    "url": "assets/js/127.532f674b.js",
    "revision": "65c333f87019e60c3cb319019daa6166"
  },
  {
    "url": "assets/js/128.b13f6427.js",
    "revision": "bf10afc8c300a30e097e3f060f9fb168"
  },
  {
    "url": "assets/js/129.d950d466.js",
    "revision": "1ad3d2788ee6d9a5e2a6909d13a8916f"
  },
  {
    "url": "assets/js/13.7a6d74d3.js",
    "revision": "02c5608a8eb2fb3780c09e1fe80322bc"
  },
  {
    "url": "assets/js/130.7d351767.js",
    "revision": "05aefc9337414e5a5bf3a6404d5eebd4"
  },
  {
    "url": "assets/js/131.ffdad5cf.js",
    "revision": "d88d89552e9915a6d0e35dd0a5b0ccb4"
  },
  {
    "url": "assets/js/132.034911af.js",
    "revision": "d94cd8ec2006f6ad771d53ee57e2b136"
  },
  {
    "url": "assets/js/133.e90b7388.js",
    "revision": "1225c54e316bbdecd30eaa1b2d733191"
  },
  {
    "url": "assets/js/134.830716fc.js",
    "revision": "bfe74bb55c6b5de658a2c48c9d6471e7"
  },
  {
    "url": "assets/js/135.b945a424.js",
    "revision": "d61264a796a9dd91a1a56f290c45bc09"
  },
  {
    "url": "assets/js/136.b3ab792f.js",
    "revision": "0fd39602daefb1bfc38c112d0378d033"
  },
  {
    "url": "assets/js/137.9617c62a.js",
    "revision": "7e45ca96b5c684d88aaf83dd1e0096a1"
  },
  {
    "url": "assets/js/138.54c7de0e.js",
    "revision": "8432ae6bcbee147aa68def7a860b9604"
  },
  {
    "url": "assets/js/139.fbae5a82.js",
    "revision": "7eebb7205eebc309a3024afb6f8f2250"
  },
  {
    "url": "assets/js/14.faf51518.js",
    "revision": "515aae201352d0ce0c0ddc49636ed1d5"
  },
  {
    "url": "assets/js/140.8ca16860.js",
    "revision": "d4e156fbac300b7342f784bc5a917429"
  },
  {
    "url": "assets/js/141.a6a2a8e2.js",
    "revision": "3f41fe1ccf9ddf4b991be336b2b189d6"
  },
  {
    "url": "assets/js/142.c8101ddb.js",
    "revision": "9a618c0e9c2de3b88eedb71e4f6e35e2"
  },
  {
    "url": "assets/js/143.09ff8c07.js",
    "revision": "448bb461311bbb5f7dffb24f38fd52f9"
  },
  {
    "url": "assets/js/144.f3fa213a.js",
    "revision": "d49c21b6ca63d44811eb1d50a087b361"
  },
  {
    "url": "assets/js/145.cfd3a289.js",
    "revision": "53a4b5c3277abe80141066775eb7d572"
  },
  {
    "url": "assets/js/146.dae0af53.js",
    "revision": "f3513cc640e8a56a68802c2313b07fe7"
  },
  {
    "url": "assets/js/147.8942cdba.js",
    "revision": "46a694f91b80f07e51fc69c5bf0f0e5e"
  },
  {
    "url": "assets/js/148.f786c887.js",
    "revision": "5e125937a90165eafad7bfe80e80cde6"
  },
  {
    "url": "assets/js/149.d3af6d8f.js",
    "revision": "d8ba596fb047bef23d4e1b0e63627f84"
  },
  {
    "url": "assets/js/15.e4966097.js",
    "revision": "2aae8808cd70ddbe98607a44f8b0f51f"
  },
  {
    "url": "assets/js/150.9536724a.js",
    "revision": "32fe1f29669e390b57cf96cab2f48f53"
  },
  {
    "url": "assets/js/151.e934636b.js",
    "revision": "0955359617b292127b6358452a1c7fbe"
  },
  {
    "url": "assets/js/152.e3894758.js",
    "revision": "defdd026f89ba5bcbd5f6b4de34bc23c"
  },
  {
    "url": "assets/js/153.6e853d0f.js",
    "revision": "e242084f2e17fdfeb8a45d85de8688b0"
  },
  {
    "url": "assets/js/154.2b8aa951.js",
    "revision": "4f835935c6ecb97d18c375f4fd60e7aa"
  },
  {
    "url": "assets/js/155.f68fc657.js",
    "revision": "aa1f3e3856dc04a76638b7a0959188b9"
  },
  {
    "url": "assets/js/16.9cc8cc98.js",
    "revision": "2add8d3f8411b2d21d895b8c8d785037"
  },
  {
    "url": "assets/js/17.f5a59807.js",
    "revision": "ec691efe6a85cefa6097b8ac7e9b6c22"
  },
  {
    "url": "assets/js/18.35d608ad.js",
    "revision": "c998d5a22471e0730b4700b291ecf43a"
  },
  {
    "url": "assets/js/19.c32b8699.js",
    "revision": "3cd886dc92e6164df4419270e9d716b5"
  },
  {
    "url": "assets/js/2.bf03e186.js",
    "revision": "6de6b37569bc890ac3a7496c3dfd52b8"
  },
  {
    "url": "assets/js/20.d2112141.js",
    "revision": "a2e94c50998a83ebb58cfe64d51fa8cf"
  },
  {
    "url": "assets/js/21.31747bb7.js",
    "revision": "07598364c6256c7a636e0f9758a5b21f"
  },
  {
    "url": "assets/js/22.064caf35.js",
    "revision": "cbdda305a74f20ce3b0251ddbb92a025"
  },
  {
    "url": "assets/js/23.b6ad3599.js",
    "revision": "4948555999e9cb8d4d92924a49ce6b37"
  },
  {
    "url": "assets/js/24.32928699.js",
    "revision": "97cb902f3794556f190a8e630f4e5754"
  },
  {
    "url": "assets/js/25.0c99c06c.js",
    "revision": "fbe1b7b2587e7109014f2cfb9202e8fb"
  },
  {
    "url": "assets/js/26.2e1bbd51.js",
    "revision": "6306f8e30757901bdd81bf795c89b6ae"
  },
  {
    "url": "assets/js/27.b5518060.js",
    "revision": "7941c52df1752add8d1cdbd3166489e8"
  },
  {
    "url": "assets/js/28.29a2bf30.js",
    "revision": "2026d4c8085e572dbbbbc4464d7e77cd"
  },
  {
    "url": "assets/js/29.4e963f5b.js",
    "revision": "c79d721aced56e88097d9b3a717d9287"
  },
  {
    "url": "assets/js/3.fec50937.js",
    "revision": "ce2c017ec51da0a96f90919b3c9ba064"
  },
  {
    "url": "assets/js/30.063dc576.js",
    "revision": "4b3bbc2e420beb68cc5e99d1eeeb74b2"
  },
  {
    "url": "assets/js/31.d98aba5e.js",
    "revision": "e29019e3d0361b5a2da47a693508e43d"
  },
  {
    "url": "assets/js/32.dd1e11fa.js",
    "revision": "a3518aab0fb8ca0522ba24eb42fd7d61"
  },
  {
    "url": "assets/js/33.7fdd788f.js",
    "revision": "af462baddbda1a4b6811bacd19e52955"
  },
  {
    "url": "assets/js/34.1899265a.js",
    "revision": "6b39aeebe0378aeeeeda08d3b37db9bd"
  },
  {
    "url": "assets/js/35.7d0c3c55.js",
    "revision": "c6543a9310ab0f148a9817e1c28b535c"
  },
  {
    "url": "assets/js/36.cfc9d8aa.js",
    "revision": "c4d04f532270535e3cf48c2ef82ccf7e"
  },
  {
    "url": "assets/js/37.8108ceb7.js",
    "revision": "e6287623301e22ca895caa6f36a482d6"
  },
  {
    "url": "assets/js/38.ab3a76df.js",
    "revision": "d9e2119849c9551229cd04db67a4c052"
  },
  {
    "url": "assets/js/39.cd0e55fd.js",
    "revision": "7ac732197bdd0a46aab798df1319548b"
  },
  {
    "url": "assets/js/4.57d7f6d9.js",
    "revision": "a0d6ac68c6fbe0766053cc87c23c822d"
  },
  {
    "url": "assets/js/40.f201560b.js",
    "revision": "97ef5c4ee4da5c9261b20afc01bb38eb"
  },
  {
    "url": "assets/js/41.6630c499.js",
    "revision": "143d4fc84cf880412243571ca2700d0d"
  },
  {
    "url": "assets/js/42.58b5361a.js",
    "revision": "fd1f022f9b0f3df31b402c913aafae87"
  },
  {
    "url": "assets/js/43.990aeac0.js",
    "revision": "87f9990ab7f7296cd267d28dfd694556"
  },
  {
    "url": "assets/js/44.f7bdb2a3.js",
    "revision": "3d54c5d6856dac4c87ba355e458dc021"
  },
  {
    "url": "assets/js/45.6c4dde20.js",
    "revision": "ff5a401c94d4b8a3bdc4e19ae87ffaf7"
  },
  {
    "url": "assets/js/46.f0b34f08.js",
    "revision": "62d8c88c0733624aeb46f1a0e9f1d223"
  },
  {
    "url": "assets/js/47.9cf41f31.js",
    "revision": "8bd42fb6a8119503ef4ae700e0529679"
  },
  {
    "url": "assets/js/48.6e52dab8.js",
    "revision": "c03169f695af420813ecd08bb5337057"
  },
  {
    "url": "assets/js/49.0e085e4b.js",
    "revision": "2815f50ac4e0a0f938610c66527d6fb9"
  },
  {
    "url": "assets/js/5.aaf540be.js",
    "revision": "a96166c04c9cf4aae1ada9d9fe70ac34"
  },
  {
    "url": "assets/js/50.9b63a2a5.js",
    "revision": "f76f3022f40df535c9f705bb9a0a7279"
  },
  {
    "url": "assets/js/51.fd703588.js",
    "revision": "153c7ceee5f7eae6e72cb401dc24d6ae"
  },
  {
    "url": "assets/js/52.11ac4cf6.js",
    "revision": "55133f43bb1cf101c2d6b237510ecaa5"
  },
  {
    "url": "assets/js/53.c7816a13.js",
    "revision": "55104515ce928edd53a0a1fe6b7d8157"
  },
  {
    "url": "assets/js/54.66297cce.js",
    "revision": "bf44d239c2156831504331591875c07e"
  },
  {
    "url": "assets/js/55.3353e785.js",
    "revision": "52638d2816ce813301773bc46ff33d7c"
  },
  {
    "url": "assets/js/56.0b1c8414.js",
    "revision": "5b004bced4a51e4e7163ad52950941af"
  },
  {
    "url": "assets/js/57.ebe8156a.js",
    "revision": "7421734bdae9c1419a7c717fa61c774f"
  },
  {
    "url": "assets/js/58.4a8079b4.js",
    "revision": "9081ca10db782330fd3fae61f304b6ac"
  },
  {
    "url": "assets/js/59.2b91724e.js",
    "revision": "e07d97f70ac2cc55ce32e0b1ac2ed782"
  },
  {
    "url": "assets/js/6.533a44d6.js",
    "revision": "c9c8e3384fb3b4db729ca34832a92ab1"
  },
  {
    "url": "assets/js/60.bafb134e.js",
    "revision": "3db6953bcdc16865b291b441b87f0162"
  },
  {
    "url": "assets/js/61.8eb1f76f.js",
    "revision": "0546eb1cfa4feda63de1adbec5ccaab8"
  },
  {
    "url": "assets/js/62.a4e63ab8.js",
    "revision": "a934b41e1af7312c791130e0698cb031"
  },
  {
    "url": "assets/js/63.836926b5.js",
    "revision": "f164b0513efb3baf888b82f761c7dbc8"
  },
  {
    "url": "assets/js/64.220c6ab2.js",
    "revision": "b236f9d1f0e3cd21cffa786cb76c9995"
  },
  {
    "url": "assets/js/65.786dd5d6.js",
    "revision": "b9076de178fcdeed36cc5b009999435a"
  },
  {
    "url": "assets/js/66.21d6dc41.js",
    "revision": "347d1f37752152a2327965b531a08459"
  },
  {
    "url": "assets/js/67.95cd20b5.js",
    "revision": "9cbce3779e4b4aa10389cd6708777d1a"
  },
  {
    "url": "assets/js/68.374d21f2.js",
    "revision": "2de33fdee66fbd8ead4647095b4cb88e"
  },
  {
    "url": "assets/js/69.e9a77615.js",
    "revision": "768c0e22d496c49b0295251d575ecf78"
  },
  {
    "url": "assets/js/7.adbf86a3.js",
    "revision": "6c8980dfa16398561f8a86c8f6cc64f5"
  },
  {
    "url": "assets/js/70.57a9b1bc.js",
    "revision": "26afd4f51022554e167a5361abd239c3"
  },
  {
    "url": "assets/js/71.43c25afc.js",
    "revision": "dd573a0ba97ca6c6cfb24ed13b92c4ec"
  },
  {
    "url": "assets/js/72.5a22dfb2.js",
    "revision": "529ebff9946e256f1347060bedd9cbca"
  },
  {
    "url": "assets/js/73.9a21a27b.js",
    "revision": "a1d366cb4e8105c64138458003c80dd9"
  },
  {
    "url": "assets/js/74.9165d7ca.js",
    "revision": "bbefb7c2737c98f5809eba9efed70f7d"
  },
  {
    "url": "assets/js/75.a81a19db.js",
    "revision": "ae3dac12acfae546839b156560ec96ea"
  },
  {
    "url": "assets/js/76.d36234b9.js",
    "revision": "a26fcfbb6b0069d6507f02c6fcb3c8a1"
  },
  {
    "url": "assets/js/77.eb054cf8.js",
    "revision": "b033d24e0e8d95ebb64d980b563bedbf"
  },
  {
    "url": "assets/js/78.9141680e.js",
    "revision": "bd701eb693c55955f1ca442ad8e1bc49"
  },
  {
    "url": "assets/js/79.f315976a.js",
    "revision": "4b219fa8887764a26a933f83b443c102"
  },
  {
    "url": "assets/js/8.cd727d60.js",
    "revision": "2d490b429c40d917fa579e37b7060e62"
  },
  {
    "url": "assets/js/80.91adb1ad.js",
    "revision": "e46ad079af93935435bd2bf83dd52200"
  },
  {
    "url": "assets/js/81.c68b81a9.js",
    "revision": "e3afa25e61be0d2096f196f7360db68d"
  },
  {
    "url": "assets/js/82.400fd8c9.js",
    "revision": "a41873ba1379d86780c1b678c3e07a69"
  },
  {
    "url": "assets/js/83.62acdc6d.js",
    "revision": "07e95db0cb3de0844107d2266b42351e"
  },
  {
    "url": "assets/js/84.88c12c8b.js",
    "revision": "3312285222208887e95a916e9e9864b3"
  },
  {
    "url": "assets/js/85.ede4b801.js",
    "revision": "2a06137924883c6c545400fb2b0a76a2"
  },
  {
    "url": "assets/js/86.ec22db6d.js",
    "revision": "59bb90fc8ba4f93cdf5384d4e621a9c8"
  },
  {
    "url": "assets/js/87.3b03a687.js",
    "revision": "24950f8f772f5d98b35cd97786fcae16"
  },
  {
    "url": "assets/js/88.ffb788ce.js",
    "revision": "3bfb2db3ef4dca7adb4e36565c2f84c0"
  },
  {
    "url": "assets/js/89.db3207a0.js",
    "revision": "7042a4e45654ae006f2495527b05b37b"
  },
  {
    "url": "assets/js/9.58e4e577.js",
    "revision": "702f2f1b444d52ecac17c5017ed534c1"
  },
  {
    "url": "assets/js/90.e98d9046.js",
    "revision": "a6846046d25a9f8e09979f10337bd8ff"
  },
  {
    "url": "assets/js/91.988be953.js",
    "revision": "9172d0f977b6fd7b6ac05565b05f53c0"
  },
  {
    "url": "assets/js/92.ecca1aee.js",
    "revision": "4cd812aca6ffa6dc07dec5a13beccc46"
  },
  {
    "url": "assets/js/93.f8dc2921.js",
    "revision": "66da284ba42bb1255178016aa11f12a4"
  },
  {
    "url": "assets/js/94.d616cb13.js",
    "revision": "90a79ded0cbca831c930af9157436323"
  },
  {
    "url": "assets/js/95.dcbcbf23.js",
    "revision": "6beacaf932cdb1215ccff41fb85d5e47"
  },
  {
    "url": "assets/js/96.5d19fe8d.js",
    "revision": "85536177c69209ba214f3843ea5c015f"
  },
  {
    "url": "assets/js/97.3a19d0ee.js",
    "revision": "983510ad486d6a3d7987db50169202c5"
  },
  {
    "url": "assets/js/98.2d874801.js",
    "revision": "6f4f6c8929df6a272cbeec4c621b6795"
  },
  {
    "url": "assets/js/99.a1531aa0.js",
    "revision": "e1a74c57b8b404e684d97e66a16d63e9"
  },
  {
    "url": "base/api/1.echarts.html",
    "revision": "bfce6261619ed0dc2fc37abeda30def3"
  },
  {
    "url": "base/api/1.index.html",
    "revision": "d98ea43ff6a84691c6b479655ef6a5b3"
  },
  {
    "url": "base/api/2.echartsInstance.html",
    "revision": "88e01d02d8373b9e74b13ed7dbfa6ac5"
  },
  {
    "url": "base/api/3.action.html",
    "revision": "ec67a4611b8959de5a2279af6a1a0ab9"
  },
  {
    "url": "base/api/4.events.html",
    "revision": "622c342444db9d8de56d0a79759b2a0f"
  },
  {
    "url": "base/components/1.index.html",
    "revision": "c998dea22251737e6d820d9bb3384497"
  },
  {
    "url": "base/components/1.legend.html",
    "revision": "2cebc6fdc40023d7fbd735d392fa55ea"
  },
  {
    "url": "base/components/2.grid.html",
    "revision": "3cff98756211b489fe5fb65f9690a656"
  },
  {
    "url": "base/components/2.polar.html",
    "revision": "5e4ff40db4c76172bed9a1496bc7c664"
  },
  {
    "url": "base/components/2.radiusAxis.html",
    "revision": "ffb44abccd74874e82f0a6a099099665"
  },
  {
    "url": "base/components/2.xAxis.html",
    "revision": "99ab4f483ff20733ee91b51905cd8c13"
  },
  {
    "url": "base/components/2.yAxis.html",
    "revision": "485212233c89f4c70e9b3069fec3c424"
  },
  {
    "url": "base/components/3.angleAxis.html",
    "revision": "0cb33aeaf1e2f6a1867f71cc52fe1ad6"
  },
  {
    "url": "base/components/4.radar.html",
    "revision": "8c69a4888eb4f97dc266fb7ab4b50e6d"
  },
  {
    "url": "base/components/5.dataZoom.html",
    "revision": "bd92b14b6d1f6ac731435327bffece80"
  },
  {
    "url": "base/components/6.visualMap.html",
    "revision": "2ae449ff2ffce71c7a2a18f428e95350"
  },
  {
    "url": "base/components/7.tooltip.html",
    "revision": "60bfa0c6ac3fb12b2d29ebb571d92599"
  },
  {
    "url": "base/components/8.geo.html",
    "revision": "68082d8c0cfb744d902b8dec79cabc16"
  },
  {
    "url": "base/gl/1.index.html",
    "revision": "bae1efd06c1b1da10052875032bfda43"
  },
  {
    "url": "base/gl/1.scatter3D.html",
    "revision": "b6395805af153e371c145ae193a48936"
  },
  {
    "url": "base/gl/10.flowGL.html",
    "revision": "99eb9f7646396f2f67a12fb8eae2adba"
  },
  {
    "url": "base/gl/2.bar3D.html",
    "revision": "a2d4b2295b835e4d4d95022f31d1cbe9"
  },
  {
    "url": "base/gl/3.line3D.html",
    "revision": "2e371f9ff86b909abf5937453e4bf111"
  },
  {
    "url": "base/gl/4.lines3D.html",
    "revision": "cc78b41f52d4b6e7993671aeda880960"
  },
  {
    "url": "base/gl/5.map3D.html",
    "revision": "91143f79a97232e4958ac1581f054058"
  },
  {
    "url": "base/gl/6.surface.html",
    "revision": "67e1cdf48ee9ed748a70b1ebd204c166"
  },
  {
    "url": "base/gl/7.polygons3D.html",
    "revision": "617ff1b408bd469a667b7abe7fac3716"
  },
  {
    "url": "base/gl/8.scatterGL.html",
    "revision": "fb4a4aea2bcc2ab8d6104ce6b079997c"
  },
  {
    "url": "base/gl/9.graphGL.html",
    "revision": "ff6ad2270be594c9611c20262307e3cd"
  },
  {
    "url": "base/series/1.index.html",
    "revision": "bedcab5b3cddc20915352800647deee1"
  },
  {
    "url": "base/series/1.line.html",
    "revision": "305cbb9eaaae37c346fe5da5071b2544"
  },
  {
    "url": "base/series/10.boxplot.html",
    "revision": "8a404dbe00291da3eef55e6aced0f7c1"
  },
  {
    "url": "base/series/11.candlestick.html",
    "revision": "71f5bd734870fde69c7811c8abbec034"
  },
  {
    "url": "base/series/12.heatmap.html",
    "revision": "e8b60a4f712f8ef8463383a131a1e65b"
  },
  {
    "url": "base/series/13.map.html",
    "revision": "d8fab0128c832702c6e4359561fc992b"
  },
  {
    "url": "base/series/14.parallel.html",
    "revision": "48489fcf24ddd5a18d5e590a87add5a5"
  },
  {
    "url": "base/series/15.lines.html",
    "revision": "6f9041c5bfa062f71edfacd31c14a593"
  },
  {
    "url": "base/series/16.graph.html",
    "revision": "24d37c9d6f4a8c14f8782233d6a735fb"
  },
  {
    "url": "base/series/17.sankey.html",
    "revision": "1f528d64a4e6d452995f5e11919ccb70"
  },
  {
    "url": "base/series/18.funnel.html",
    "revision": "87ebc3545f39d68648fb1f7b9d659f6f"
  },
  {
    "url": "base/series/19.gauge.html",
    "revision": "c7184d30757cc8de396945fece12454a"
  },
  {
    "url": "base/series/2.bar.html",
    "revision": "7736c057d141a461621a0be32574742b"
  },
  {
    "url": "base/series/20.pictorialBar.html",
    "revision": "9f7fa48c5073abe2cefd3d9e517d70d4"
  },
  {
    "url": "base/series/21.themeRiver.html",
    "revision": "e1d9112febe32871a3d1f71ada4befdd"
  },
  {
    "url": "base/series/22.custom.html",
    "revision": "6f21d47847ec80773e75b401f357347c"
  },
  {
    "url": "base/series/3.pie.html",
    "revision": "9b51063c3540d929a369173b2ace789c"
  },
  {
    "url": "base/series/4.scatter.html",
    "revision": "57b0a6bc1f09562056b9eb904ac0f860"
  },
  {
    "url": "base/series/5.effectScatter.html",
    "revision": "64e43ae6bf3984ff3d312e2563d539ff"
  },
  {
    "url": "base/series/6.radar.html",
    "revision": "3077a1b4decb1aa54479960fdd3a020b"
  },
  {
    "url": "base/series/7.tree.html",
    "revision": "234f33ec2650421036824e317ca94cca"
  },
  {
    "url": "base/series/8.treemap.html",
    "revision": "30ea986517e6ef8f77f0599f072a5ce6"
  },
  {
    "url": "base/series/9.sunburst.html",
    "revision": "2b6cbe16fec6ae8c7e33ab2f5e8d4226"
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
    "revision": "b6222bf58cf90ee8e4e88e12c29368fe"
  },
  {
    "url": "mock/http.js",
    "revision": "a219140640bec4dfbe8f4fe88d351ed8"
  },
  {
    "url": "senior/1.micro/1.index.html",
    "revision": "ec2c7ac48c23396993ccd2f5f1c51819"
  },
  {
    "url": "senior/1.micro/1.singlespa.html",
    "revision": "95f75a5a95ec3ee88599b2cd58ee53f9"
  },
  {
    "url": "senior/1.micro/1.singlespa2.html",
    "revision": "5804d63dbfcc63e948202d2216fb944d"
  },
  {
    "url": "senior/1.micro/2.qiankun.html",
    "revision": "8dd4e3de6af19b7b3e3ff36a52cf7d45"
  },
  {
    "url": "senior/1.micro/2.qiankun2.html",
    "revision": "e0bd4d73e13ab4cdbe7a91a4f7322b91"
  },
  {
    "url": "senior/1.micro/3.share.html",
    "revision": "2d10f43446ae7cff5ce0043c243426a5"
  },
  {
    "url": "senior/1.micro/4.dev.html",
    "revision": "12356c762bdfe8dda7b09d31db278190"
  },
  {
    "url": "senior/2.typescript/1.env.html",
    "revision": "28bd7e63ac62d80109f7fa43dafb66a0"
  },
  {
    "url": "senior/2.typescript/1.index.html",
    "revision": "1bd50e726729319dd18d68581c056bff"
  },
  {
    "url": "senior/2.typescript/10.infer.html",
    "revision": "99226cc5cfa6385c05be681b6afc8534"
  },
  {
    "url": "senior/2.typescript/11.overlapping.html",
    "revision": "96fea37f738ed6ce5b7d3c66fc31f294"
  },
  {
    "url": "senior/2.typescript/12.condition.html",
    "revision": "37a013f9ea876d529b668754c338cfce"
  },
  {
    "url": "senior/2.typescript/13.builtin.html",
    "revision": "b54db57facd896548a60babd11a15410"
  },
  {
    "url": "senior/2.typescript/14.package.html",
    "revision": "72a011387eb4784f0d57e2a6938e14c7"
  },
  {
    "url": "senior/2.typescript/15.custom.html",
    "revision": "d15e03e7aa1c506bf96d9725bccab303"
  },
  {
    "url": "senior/2.typescript/16.unknown.html",
    "revision": "e7cf7d79a101a21785b76ec57f548bb0"
  },
  {
    "url": "senior/2.typescript/17.module.html",
    "revision": "408bd1afb711d30cadf282882408c905"
  },
  {
    "url": "senior/2.typescript/18.statement.html",
    "revision": "ec05cfc19a5fb1f5396a7ee2e5ec1908"
  },
  {
    "url": "senior/2.typescript/19.extend.html",
    "revision": "27c9d101927be2c2d36e48a9986a8557"
  },
  {
    "url": "senior/2.typescript/2.base.html",
    "revision": "f8e05a47b917e6e59108fa137b37fcf2"
  },
  {
    "url": "senior/2.typescript/3.deduction.html",
    "revision": "b97355460a0ed2fb8aef62b972aad3ac"
  },
  {
    "url": "senior/2.typescript/4.type.html",
    "revision": "86aaa60b9418483735f39edde01cd037"
  },
  {
    "url": "senior/2.typescript/5.class.html",
    "revision": "334695f370a8f971351815fbb78878d3"
  },
  {
    "url": "senior/2.typescript/6.interface.html",
    "revision": "36c4101d89d253dd297f410ac097810a"
  },
  {
    "url": "senior/2.typescript/7.generic.html",
    "revision": "bb7f573b5a9ed43259cd8c03289e2517"
  },
  {
    "url": "senior/2.typescript/8.compatible.html",
    "revision": "9bb771cf32c0f8fc19939fd1ddd15718"
  },
  {
    "url": "senior/2.typescript/9.protect.html",
    "revision": "f1b563c2fdf56bdbbb5348feed20c831"
  },
  {
    "url": "senior/3.deploy/1.index.html",
    "revision": "aa9520e30df15813eac7be3edf35af0c"
  },
  {
    "url": "senior/3.deploy/1.local.html",
    "revision": "ebe9650abf566a72fbb9dee32fe0dab8"
  },
  {
    "url": "senior/3.deploy/2.gitlab.html",
    "revision": "a96cc37b027148bae4cb854697f65299"
  },
  {
    "url": "senior/3.deploy/3.genkins.html",
    "revision": "9e802e8c9d7ba8167bbec4a12fd4dc2c"
  },
  {
    "url": "senior/3.deploy/4.centos.html",
    "revision": "f577e10fb792eda71eeb0454fa3887fe"
  },
  {
    "url": "senior/3.deploy/5.nginx.html",
    "revision": "10419228beccad1bb3172588022f3d9f"
  },
  {
    "url": "senior/4.component/1.button.html",
    "revision": "4b7503331d9e9f219dfe0e4958246647"
  },
  {
    "url": "senior/4.component/1.env.html",
    "revision": "c76a36e79368b17fad9f6d0c31e058aa"
  },
  {
    "url": "senior/4.component/1.index.html",
    "revision": "0185dc0e16ed343ed779f856d97089e0"
  },
  {
    "url": "senior/4.component/1.recursion.html",
    "revision": "0fbe9e55020d06a0370862572f6e7ba5"
  },
  {
    "url": "senior/4.component/10.tree.html",
    "revision": "348dfcc71a9030c590e6a2414b89454d"
  },
  {
    "url": "senior/4.component/12.table.html",
    "revision": "557b393a994fcf1db19b0235cf35340b"
  },
  {
    "url": "senior/4.component/13.publish.html",
    "revision": "4e79d09bf532fdc66515deea022f4507"
  },
  {
    "url": "senior/4.component/2.dropdown.html",
    "revision": "0fec51844fd83f162cc40cf06b1435a2"
  },
  {
    "url": "senior/4.component/3.dialog.html",
    "revision": "18a38a0db75d6d00bbadf428232c08c8"
  },
  {
    "url": "senior/4.component/3.form.html",
    "revision": "cd636209e615087e1629e111850ee8ab"
  },
  {
    "url": "senior/4.component/4.input.html",
    "revision": "2575c13dadac4dacc308108814ea682c"
  },
  {
    "url": "senior/4.component/4.render.html",
    "revision": "b12b1bf9392286e5dc9132d21fd78973"
  },
  {
    "url": "senior/4.component/5.checkBox.html",
    "revision": "c1ece2eb41f9580b9550fe57ab7ff9fe"
  },
  {
    "url": "senior/4.component/6.cascader.html",
    "revision": "9ba85e10a45dd2e32ed4523ad45956fc"
  },
  {
    "url": "senior/4.component/7.date.html",
    "revision": "2ffe02422382fb1636041f5c8865d146"
  },
  {
    "url": "senior/4.component/8.dispaly.html",
    "revision": "47fafa1503039444af8a5b33a4403900"
  },
  {
    "url": "senior/4.component/9.alert.html",
    "revision": "d5515b77c1bdc2ca770788afccba7b3e"
  },
  {
    "url": "senior/4.component/9.dynamics.html",
    "revision": "b048118db36fc04a1279d7e95fa52971"
  },
  {
    "url": "source/vue-cli2.x/1.index.html",
    "revision": "ede09578a3ffb8b79bbb9c466c9907d6"
  },
  {
    "url": "source/vue-cli3.x/1.index.html",
    "revision": "05a220d1d1cc3c65d75b5bf883d6d31b"
  },
  {
    "url": "source/vue-router3.x/1.index.html",
    "revision": "3c8337f9fe3a3364d5654fbffafffe8b"
  },
  {
    "url": "source/vue-router3.x/2.origin.html",
    "revision": "89716b4a3bcab0571c104b5adc26f7f5"
  },
  {
    "url": "source/vue-router4.x/1.index.html",
    "revision": "8f8294a93156f0f8eb824d7f6b2a833e"
  },
  {
    "url": "source/vue2.x/1.index.html",
    "revision": "fdcf243824ec3fddcf2f7ef31a0f6947"
  },
  {
    "url": "source/vue2.x/10.optimize.html",
    "revision": "ec6e064be5ebc5ee39b5dfdf1f79af21"
  },
  {
    "url": "source/vue2.x/11.gencode.html",
    "revision": "5fce53377e10d7b93924fef29f776150"
  },
  {
    "url": "source/vue2.x/12.mount.html",
    "revision": "9e24ee81e7bb6868dbdf962029591372"
  },
  {
    "url": "source/vue2.x/13._render.html",
    "revision": "edef62403dded4c15e4c2c6d77813dcf"
  },
  {
    "url": "source/vue2.x/14._update.html",
    "revision": "db8ceac64097a46fc4c38e6030e0806d"
  },
  {
    "url": "source/vue2.x/2.initGlobalAPI.html",
    "revision": "f5bfe41245001ecafe1096e3863f0ee2"
  },
  {
    "url": "source/vue2.x/3.initMixin.html",
    "revision": "40945321a37483f2576c86f4ae17d83c"
  },
  {
    "url": "source/vue2.x/4.stateMixin.html",
    "revision": "d41e9d1f8769a22d9458138bd5eb30e2"
  },
  {
    "url": "source/vue2.x/5.eventsMixin.html",
    "revision": "079896c4e2033e61cce67738f36a0328"
  },
  {
    "url": "source/vue2.x/6.lifecycleMixin.html",
    "revision": "451fb9cc3b410964bbb4929e64052d07"
  },
  {
    "url": "source/vue2.x/7.renderMixin.html",
    "revision": "576745ae7eb4df8c0971a77a67ed2a61"
  },
  {
    "url": "source/vue2.x/8.mount.html",
    "revision": "c6b20949c99405778766848ffd2bd437"
  },
  {
    "url": "source/vue2.x/9.ast.html",
    "revision": "bb37637e5420cd3c2326a31993b11437"
  },
  {
    "url": "source/vue3.x/1.index.html",
    "revision": "af6b4e202142c98b070acff444c88df3"
  },
  {
    "url": "source/vue3.x/10.optimize.html",
    "revision": "e8a6065688120384d2086dc91f7f18cf"
  },
  {
    "url": "source/vue3.x/11.gencode.html",
    "revision": "ad3bb98964fcdbe8b0d31ce59f7f9e3e"
  },
  {
    "url": "source/vue3.x/12.mount.html",
    "revision": "efdf4d235afcea115785ff2f77dfcf3e"
  },
  {
    "url": "source/vue3.x/13._render.html",
    "revision": "0069cba9b3b2a77836cb98cbb693578d"
  },
  {
    "url": "source/vue3.x/14._update.html",
    "revision": "d0142796597322e538cf85b016741750"
  },
  {
    "url": "source/vue3.x/2.initGlobalAPI.html",
    "revision": "09f06d50607034a991c8de280ac768ff"
  },
  {
    "url": "source/vue3.x/3.initMixin.html",
    "revision": "8fcf5998f42682494b8b2e91640f8c1c"
  },
  {
    "url": "source/vue3.x/4.stateMixin.html",
    "revision": "63c61df736618b1d38b09648c5020ea6"
  },
  {
    "url": "source/vue3.x/5.eventsMixin.html",
    "revision": "475e45ee7b36f9f593edcfc85ae6bd1c"
  },
  {
    "url": "source/vue3.x/6.lifecycleMixin.html",
    "revision": "1d0eb7705e19305eb7f38569aa63fdea"
  },
  {
    "url": "source/vue3.x/7.renderMixin.html",
    "revision": "57739cc2d482ffa2ddd5003118ba2e09"
  },
  {
    "url": "source/vue3.x/8.mount.html",
    "revision": "cedd457736e3a8046141c6a8669ef97b"
  },
  {
    "url": "source/vue3.x/9.ast.html",
    "revision": "e25637851132ea30d3e06b8aaad798d6"
  },
  {
    "url": "source/vuex3.x/1.index.html",
    "revision": "1d5e1eba9769b3a935f0f2517ce26b39"
  },
  {
    "url": "source/vuex3.x/2.use.html",
    "revision": "05f20b36027931d41b04ddcd87d8e53d"
  },
  {
    "url": "source/vuex3.x/3.origin.html",
    "revision": "0374532353a821f384298ec72fb925de"
  },
  {
    "url": "source/vuex4.x/1.index.html",
    "revision": "9ed3497344b6d39b1982efcb9f95ab38"
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
