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
    "revision": "43f27435c332e99b0ac165c122b8a732"
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
    "url": "assets/js/10.2ed45528.js",
    "revision": "65ffcbad8a6f1b5890ebe5988d8f580f"
  },
  {
    "url": "assets/js/100.9da87527.js",
    "revision": "cce9b31c0a1d8ec0d6419d8f42c021db"
  },
  {
    "url": "assets/js/101.18208caf.js",
    "revision": "259d2871189cd12712925924d8b35090"
  },
  {
    "url": "assets/js/102.cdf697a4.js",
    "revision": "182a3ca09bbf08549547ca73d6aee1f7"
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
    "url": "assets/js/105.681567f6.js",
    "revision": "daf32599e157b276852af989da0902e5"
  },
  {
    "url": "assets/js/106.0edcaca2.js",
    "revision": "8d87adbc60339d7765fcace1d34a4672"
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
    "url": "assets/js/11.2c7607b3.js",
    "revision": "7525cdc74a0a32b6abe8f12d45c19745"
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
    "url": "assets/js/12.64909ff4.js",
    "revision": "5de6266b8fbc8b2865ca967dd1f19402"
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
    "url": "assets/js/123.39af801c.js",
    "revision": "4cd33cadf6298be7c7cc70e9fab3080f"
  },
  {
    "url": "assets/js/124.97234d7b.js",
    "revision": "bb256fb2d7cc82a0a450048f9b4d416d"
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
    "url": "assets/js/134.a335f71d.js",
    "revision": "165c4486b39df6573f8e9068b95dbcfd"
  },
  {
    "url": "assets/js/135.53ff0e10.js",
    "revision": "28c9aeff4ee7ee02c4b498462a288881"
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
    "url": "assets/js/14.daef5dfb.js",
    "revision": "15837a9d56a47aaeb934ce66b99df60c"
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
    "url": "assets/js/148.f670845f.js",
    "revision": "55d4f751cfd27352d873e704cdf3252e"
  },
  {
    "url": "assets/js/149.54dfdb22.js",
    "revision": "37af11877ff4f607080a5ede0a143ea3"
  },
  {
    "url": "assets/js/15.69e7c648.js",
    "revision": "95c37d93034dbbd8c9a95f02c02a2b6f"
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
    "url": "assets/js/152.244dd65c.js",
    "revision": "45a84cecf0100813d6f287be81e674ea"
  },
  {
    "url": "assets/js/153.398292e3.js",
    "revision": "74ef710df66328a0247e50718d8c6121"
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
    "url": "assets/js/16.62541d35.js",
    "revision": "0a818caf9643eaf1fa522f8c6bbc39d4"
  },
  {
    "url": "assets/js/17.4d5f3511.js",
    "revision": "1eeb7d913c4c11b47ed389ee435bcf62"
  },
  {
    "url": "assets/js/18.40e29fdc.js",
    "revision": "43ff27e744b78254ac0d66a9dc8ec4b1"
  },
  {
    "url": "assets/js/19.f2573d96.js",
    "revision": "1a3d06e61e5c529e03a2f47876d67343"
  },
  {
    "url": "assets/js/2.bf03e186.js",
    "revision": "6de6b37569bc890ac3a7496c3dfd52b8"
  },
  {
    "url": "assets/js/20.427058ea.js",
    "revision": "d6ba9b435f7964fce4ec796ab85ad01e"
  },
  {
    "url": "assets/js/21.4b74c6b3.js",
    "revision": "273c577c90e96bcda18b5486a22495e2"
  },
  {
    "url": "assets/js/22.2eed5aec.js",
    "revision": "0f11f670feab1e696ab316f34ee10825"
  },
  {
    "url": "assets/js/23.bbb1eab6.js",
    "revision": "a0003c1a0470558dce4d73caffbc42c3"
  },
  {
    "url": "assets/js/24.95d2297f.js",
    "revision": "b9aa4851edca17d21f186006c72a6422"
  },
  {
    "url": "assets/js/25.c7ab1c1f.js",
    "revision": "57f88ada52295dff811a0286cdef1e31"
  },
  {
    "url": "assets/js/26.fcd9118b.js",
    "revision": "c87e4701e2d935b2462c1a7c11ca6ee3"
  },
  {
    "url": "assets/js/27.f8cfb904.js",
    "revision": "5a650515dfafdc4a5161c655e736c8ef"
  },
  {
    "url": "assets/js/28.1acb413a.js",
    "revision": "ce4a33cb51c92343b724471656994527"
  },
  {
    "url": "assets/js/29.3e085b19.js",
    "revision": "2c911420ad4c08f9d75628287cae1eef"
  },
  {
    "url": "assets/js/3.c022cec5.js",
    "revision": "41e315a1540bdfc28c8b9f18c55f8043"
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
    "url": "assets/js/37.6266561a.js",
    "revision": "4b0ae21f2722e004938e249a4fe89587"
  },
  {
    "url": "assets/js/38.ab3a76df.js",
    "revision": "d9e2119849c9551229cd04db67a4c052"
  },
  {
    "url": "assets/js/39.0da01937.js",
    "revision": "e4eabf8389f09a31ed51fbc52cd0486b"
  },
  {
    "url": "assets/js/4.c45dc2fd.js",
    "revision": "c6dcfd3e7e196ce31206808018ee517a"
  },
  {
    "url": "assets/js/40.957da85d.js",
    "revision": "12d1dec2d137da994951ab7efad7aa2d"
  },
  {
    "url": "assets/js/41.a659290d.js",
    "revision": "1e703bcc906b7775b3103270c92d889b"
  },
  {
    "url": "assets/js/42.d91ead01.js",
    "revision": "09dfed19b7452f7598d793c2371d3c01"
  },
  {
    "url": "assets/js/43.928d260b.js",
    "revision": "6ad500ac79edc7242abd9c03bd4242c5"
  },
  {
    "url": "assets/js/44.f7bdb2a3.js",
    "revision": "3d54c5d6856dac4c87ba355e458dc021"
  },
  {
    "url": "assets/js/45.4a761dfd.js",
    "revision": "668fc36f354033f30b4619d297baffe0"
  },
  {
    "url": "assets/js/46.e2c432d6.js",
    "revision": "ec33acfbb841a030acd65dfbf35329ed"
  },
  {
    "url": "assets/js/47.089cf1d1.js",
    "revision": "d61bb4a6e6cfc370f4d2303b251f68f0"
  },
  {
    "url": "assets/js/48.0f16e2db.js",
    "revision": "0bbc6488c77d26f6f4195b238f1356a7"
  },
  {
    "url": "assets/js/49.f1a3aac9.js",
    "revision": "b8668c09d2f747ad67775b7f59d85253"
  },
  {
    "url": "assets/js/5.37213e93.js",
    "revision": "90f0e71bfe5d5118b65c8183b03f6aa6"
  },
  {
    "url": "assets/js/50.f5496c33.js",
    "revision": "baee6bc81454f1f2a3550eb5786d59a5"
  },
  {
    "url": "assets/js/51.09aabb13.js",
    "revision": "4348a12438eb1d5982cd8a18457089c3"
  },
  {
    "url": "assets/js/52.7cf59dd8.js",
    "revision": "b5e46d0af0f6df2f325942ee62d0cd27"
  },
  {
    "url": "assets/js/53.fe7f3e4a.js",
    "revision": "e6329cce58f45e8408c51bfc2d82c00b"
  },
  {
    "url": "assets/js/54.8403380d.js",
    "revision": "a41319b7aab6869594cf4fbd2af21e94"
  },
  {
    "url": "assets/js/55.951b047d.js",
    "revision": "0f0fa00f6075fb08bb789efb03b7d6a1"
  },
  {
    "url": "assets/js/56.2f60f029.js",
    "revision": "8ccf7ea419065d9b7122799302664cf8"
  },
  {
    "url": "assets/js/57.a152cd89.js",
    "revision": "51052f01e3280a9795f61b4ee45d61ef"
  },
  {
    "url": "assets/js/58.0ffeba21.js",
    "revision": "badf178986a77a304be999bb6633bcc7"
  },
  {
    "url": "assets/js/59.adf804ff.js",
    "revision": "7bcf0156139c3715040822f288bce208"
  },
  {
    "url": "assets/js/6.3ac93645.js",
    "revision": "60a08d54124f46963d8986901a40197e"
  },
  {
    "url": "assets/js/60.5604fc88.js",
    "revision": "b3f18df5711418f869f4dbe094779660"
  },
  {
    "url": "assets/js/61.343cee6d.js",
    "revision": "c3c2cfb34c57e296acca540eddddbebe"
  },
  {
    "url": "assets/js/62.e0113ae4.js",
    "revision": "f5f108c10b248b4ced64f22e36d6626b"
  },
  {
    "url": "assets/js/63.04f56db4.js",
    "revision": "4bcdcf059a32f97522c644a7d0f84f7d"
  },
  {
    "url": "assets/js/64.facba378.js",
    "revision": "14d0f8bab3a136ca7b31bfe5fa79668a"
  },
  {
    "url": "assets/js/65.355da349.js",
    "revision": "ea620b8c5f444f4f5ffedf0a3faacb99"
  },
  {
    "url": "assets/js/66.ad1be571.js",
    "revision": "cc5e5fd8dbde8e3b451505f8f77d48fa"
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
    "url": "assets/js/7.2ea393af.js",
    "revision": "de60dbfbdded3f48a86010028952f8f7"
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
    "url": "assets/js/75.77ea05d8.js",
    "revision": "14215bbbd2b5a4a9007b114b529e05be"
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
    "url": "assets/js/95.d83b23a6.js",
    "revision": "8dc984c63764df5c96f7a6e42c4ee935"
  },
  {
    "url": "assets/js/96.03ca1006.js",
    "revision": "0a8da78b25acbb72854f5e9e1dd78404"
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
    "revision": "a27da31e101728f8a255adf2dc3451b3"
  },
  {
    "url": "base/api/1.index.html",
    "revision": "ca85dba501ded5e40d69a026df613447"
  },
  {
    "url": "base/api/2.echartsInstance.html",
    "revision": "b33232f8edbae6ed932220cb08834b46"
  },
  {
    "url": "base/api/3.action.html",
    "revision": "4779b5c16d8d02094d8cb8e4db732260"
  },
  {
    "url": "base/api/4.events.html",
    "revision": "37ed25ad915a6598b66663fdd6e915b0"
  },
  {
    "url": "base/components/1.index.html",
    "revision": "9ff3b02d5939c91ddc0a9cb76312ce0f"
  },
  {
    "url": "base/components/1.legend.html",
    "revision": "1268f1325a88dc5d2d2ca370b90d604e"
  },
  {
    "url": "base/components/2.grid.html",
    "revision": "72af95363f2bb999478041d40b33333d"
  },
  {
    "url": "base/components/2.polar.html",
    "revision": "54786de0b6d1e4bb1a64d1b2e44d8bc8"
  },
  {
    "url": "base/components/2.radiusAxis.html",
    "revision": "a8cfd3c670e27573ac51463c80292aa2"
  },
  {
    "url": "base/components/2.xAxis.html",
    "revision": "bf0d5ee7a2e0e50d6a03263ec629a69d"
  },
  {
    "url": "base/components/2.yAxis.html",
    "revision": "c548e5bf555d4653bff8ea8723e669b6"
  },
  {
    "url": "base/components/3.angleAxis.html",
    "revision": "01d9bc486ab96217ed7261949a073f1f"
  },
  {
    "url": "base/components/4.radar.html",
    "revision": "f3c1bfbf4540cd69315d26d7c856a7c9"
  },
  {
    "url": "base/components/5.dataZoom.html",
    "revision": "968ee28db0e6eb5ec883edd5fa8b328e"
  },
  {
    "url": "base/components/6.visualMap.html",
    "revision": "367d016f6ed380ba88f3b92422967090"
  },
  {
    "url": "base/components/7.tooltip.html",
    "revision": "b6a54a5c0ad4c5a9b1a5250fa4dceb53"
  },
  {
    "url": "base/components/8.geo.html",
    "revision": "06620941625fb09c684a9af8aa592832"
  },
  {
    "url": "base/gl/1.index.html",
    "revision": "d92b8f4194488df0d772b57fcc3818b3"
  },
  {
    "url": "base/gl/1.scatter3D.html",
    "revision": "c468a5388e6634d055550d059244748e"
  },
  {
    "url": "base/gl/10.flowGL.html",
    "revision": "f371a7251f6bc37c35c27b69c59764c2"
  },
  {
    "url": "base/gl/2.bar3D.html",
    "revision": "e62fba9083424a4fb14df6a6122f42eb"
  },
  {
    "url": "base/gl/3.line3D.html",
    "revision": "0c4f023d245c0a614d02498d94226593"
  },
  {
    "url": "base/gl/4.lines3D.html",
    "revision": "13d540c34df15a70d5abb8fbc9cdaecd"
  },
  {
    "url": "base/gl/5.map3D.html",
    "revision": "c92f081d35ba70857d13b8176fd076cc"
  },
  {
    "url": "base/gl/6.surface.html",
    "revision": "44ed81e6677000dc7576aa97ee76cdea"
  },
  {
    "url": "base/gl/7.polygons3D.html",
    "revision": "fa97d239c154200572b08a52494958d3"
  },
  {
    "url": "base/gl/8.scatterGL.html",
    "revision": "3f5c1c1a905689d3e26f25fcb283e814"
  },
  {
    "url": "base/gl/9.graphGL.html",
    "revision": "50820f80ae1e79afc614a70fb12999d0"
  },
  {
    "url": "base/series/1.index.html",
    "revision": "bb08f7618da3ea2d7f9e0b2a0ee23634"
  },
  {
    "url": "base/series/1.line.html",
    "revision": "2775a05d289d1fb41601b85fdeb0417a"
  },
  {
    "url": "base/series/10.boxplot.html",
    "revision": "b11adbb4ff158d9446f931d0fd2b9bfc"
  },
  {
    "url": "base/series/11.candlestick.html",
    "revision": "4f8078f67609ed7e2409e9039fc447e4"
  },
  {
    "url": "base/series/12.heatmap.html",
    "revision": "55204a67fb99dec30e86590e071001ae"
  },
  {
    "url": "base/series/13.map.html",
    "revision": "72d6bc62a5062baf83b940233d947185"
  },
  {
    "url": "base/series/14.parallel.html",
    "revision": "f996ba425529b9c750ab48de92063d40"
  },
  {
    "url": "base/series/15.lines.html",
    "revision": "2a50a7fe82d39f5c86eee052cb3c313c"
  },
  {
    "url": "base/series/16.graph.html",
    "revision": "fed5ec6b1c1934a26e08e1c1ed0f961f"
  },
  {
    "url": "base/series/17.sankey.html",
    "revision": "691c891b77620869d46696aa45d8d995"
  },
  {
    "url": "base/series/18.funnel.html",
    "revision": "bed5724b708e6be22cb59827f8afe503"
  },
  {
    "url": "base/series/19.gauge.html",
    "revision": "30f051a8d73758d97bfe1d8dd73be190"
  },
  {
    "url": "base/series/2.bar.html",
    "revision": "778aa2d5be61b3c85f12faa4e0d34382"
  },
  {
    "url": "base/series/20.pictorialBar.html",
    "revision": "2706576fda80ed515c8993cd01d938b8"
  },
  {
    "url": "base/series/21.themeRiver.html",
    "revision": "4c2b6807a013a39a6651714129d616d7"
  },
  {
    "url": "base/series/22.custom.html",
    "revision": "f06e60e682234cbeb8671a1b4db4baee"
  },
  {
    "url": "base/series/3.pie.html",
    "revision": "41c0fbf4ff954717f479254ea992573e"
  },
  {
    "url": "base/series/4.scatter.html",
    "revision": "9c25564cd562edc21f478761c0c25e82"
  },
  {
    "url": "base/series/5.effectScatter.html",
    "revision": "6d8ad7cee6cb77fc8255953053a4b2f0"
  },
  {
    "url": "base/series/6.radar.html",
    "revision": "c9ee5801910f86fb9abfb955f1f843d6"
  },
  {
    "url": "base/series/7.tree.html",
    "revision": "3a9d77e1066a12f8675c4ea308311e87"
  },
  {
    "url": "base/series/8.treemap.html",
    "revision": "2690c268542641f59faf4bb22371ba9c"
  },
  {
    "url": "base/series/9.sunburst.html",
    "revision": "63f7c60986584cd36f7982113db4f826"
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
    "revision": "178ee213b25ccede67fe6bfdc6d53ad3"
  },
  {
    "url": "mock/http.js",
    "revision": "a219140640bec4dfbe8f4fe88d351ed8"
  },
  {
    "url": "senior/1.micro/1.index.html",
    "revision": "f4ee134682c935fdd4a796b762a0602f"
  },
  {
    "url": "senior/1.micro/1.singlespa.html",
    "revision": "b339c9242314169c34ecf18c0ad8abd0"
  },
  {
    "url": "senior/1.micro/1.singlespa2.html",
    "revision": "b75f90e56512338742a32b2720ae6487"
  },
  {
    "url": "senior/1.micro/2.qiankun.html",
    "revision": "da1cbee68d1a0b9eb4cdbacc4bc54e3c"
  },
  {
    "url": "senior/1.micro/2.qiankun2.html",
    "revision": "4b4952cd47a0936f5526face1d872840"
  },
  {
    "url": "senior/1.micro/3.share.html",
    "revision": "430bd6f31e0154e78cdfdf78f1832e4c"
  },
  {
    "url": "senior/1.micro/4.dev.html",
    "revision": "1992c65c884877c16fae80288ea96369"
  },
  {
    "url": "senior/2.typescript/1.env.html",
    "revision": "446e65ccf17eec9e8c73df6bbb09b588"
  },
  {
    "url": "senior/2.typescript/1.index.html",
    "revision": "b9a2bfe400a47b95dda623a50280f587"
  },
  {
    "url": "senior/2.typescript/10.infer.html",
    "revision": "25a0f01a3b774f543961a2fbb48317d2"
  },
  {
    "url": "senior/2.typescript/11.overlapping.html",
    "revision": "06973b3da888f22d485d1f4794cf3790"
  },
  {
    "url": "senior/2.typescript/12.condition.html",
    "revision": "9bc48c7e94365ade3ccc179c6f6aa04a"
  },
  {
    "url": "senior/2.typescript/13.builtin.html",
    "revision": "87f0474852a9eae0d29f62fa5517fb4b"
  },
  {
    "url": "senior/2.typescript/14.package.html",
    "revision": "a2c448b34d47578ae78c08f9a19b4e0d"
  },
  {
    "url": "senior/2.typescript/15.custom.html",
    "revision": "e4fc89688c90cfe609cf147a8a558925"
  },
  {
    "url": "senior/2.typescript/16.unknown.html",
    "revision": "a8410d272e5e00d5dd81b3a4134009e7"
  },
  {
    "url": "senior/2.typescript/17.module.html",
    "revision": "c87bd2057f452c9409c6719189c36622"
  },
  {
    "url": "senior/2.typescript/18.statement.html",
    "revision": "f57dd03bc458f8c4d6dff32b221aca8e"
  },
  {
    "url": "senior/2.typescript/19.extend.html",
    "revision": "e2eacdb351e34551ea0a77b4b14ec3ac"
  },
  {
    "url": "senior/2.typescript/2.base.html",
    "revision": "755684aaef75216c164ceb5597179f05"
  },
  {
    "url": "senior/2.typescript/3.deduction.html",
    "revision": "02494f7cd4d34b97650867345a0e8465"
  },
  {
    "url": "senior/2.typescript/4.type.html",
    "revision": "30d39fa48a2c813f4f5eadd265822893"
  },
  {
    "url": "senior/2.typescript/5.class.html",
    "revision": "3a92348a199474b5bc198a80ffcbcc2d"
  },
  {
    "url": "senior/2.typescript/6.interface.html",
    "revision": "3f3f45d40680b83e81753b420c07e157"
  },
  {
    "url": "senior/2.typescript/7.generic.html",
    "revision": "d130dac9c7f3b9a7f73ebee04c05fe24"
  },
  {
    "url": "senior/2.typescript/8.compatible.html",
    "revision": "c37529dc5f7e885eb4de5285c16f0a50"
  },
  {
    "url": "senior/2.typescript/9.protect.html",
    "revision": "591eb737e2ba68ef244ca61552ccc6ad"
  },
  {
    "url": "senior/3.deploy/1.index.html",
    "revision": "686574e07e568c80b7ec7cd0895606c7"
  },
  {
    "url": "senior/3.deploy/1.local.html",
    "revision": "f8b9ef79eb6f7db6b2ef427a86285f52"
  },
  {
    "url": "senior/3.deploy/2.gitlab.html",
    "revision": "6c100e4d97f32b9c424cb63ead6eb352"
  },
  {
    "url": "senior/3.deploy/3.genkins.html",
    "revision": "40dd4ee174d35ce000349614541cc0d3"
  },
  {
    "url": "senior/3.deploy/4.centos.html",
    "revision": "be86e2ad9af634bb14a6e48e0b046fa7"
  },
  {
    "url": "senior/3.deploy/5.nginx.html",
    "revision": "52d904d42909cfc48611cb3bdc8314b6"
  },
  {
    "url": "senior/4.component/1.button.html",
    "revision": "3bd1dc30a8efc623e29bfc02b62e5bd6"
  },
  {
    "url": "senior/4.component/1.env.html",
    "revision": "e443331af5f43987c973a158c3edbe78"
  },
  {
    "url": "senior/4.component/1.index.html",
    "revision": "2635314cc28319e80f87420d31a65f88"
  },
  {
    "url": "senior/4.component/1.recursion.html",
    "revision": "0f92bebf481ef0ef3f6683a9e035f855"
  },
  {
    "url": "senior/4.component/10.tree.html",
    "revision": "9294c3d5b63411ef487fc6fc80a48dd8"
  },
  {
    "url": "senior/4.component/12.table.html",
    "revision": "b667bc4673fd42676c558bcbfe5ed02f"
  },
  {
    "url": "senior/4.component/13.publish.html",
    "revision": "7eb9bf9838e78cfdf5dc0f79d8fc04ed"
  },
  {
    "url": "senior/4.component/2.dropdown.html",
    "revision": "fe30407297a7fad50a2970340b8e61b9"
  },
  {
    "url": "senior/4.component/3.dialog.html",
    "revision": "82e92a4de1d3f3ab651ad6cd245eb91e"
  },
  {
    "url": "senior/4.component/3.form.html",
    "revision": "f9bd067c3c7ad227a4a7e5da3a4b6a6e"
  },
  {
    "url": "senior/4.component/4.input.html",
    "revision": "624a96a7380b692873d4bf68e3f8dc6f"
  },
  {
    "url": "senior/4.component/4.render.html",
    "revision": "d7e1718149806223143351346d2cdbc9"
  },
  {
    "url": "senior/4.component/5.checkBox.html",
    "revision": "fb571cd347b325d053c275cdecedcb1f"
  },
  {
    "url": "senior/4.component/6.cascader.html",
    "revision": "baf15c65206a4b94a2c708b83b6b8124"
  },
  {
    "url": "senior/4.component/7.date.html",
    "revision": "13d34b1e97af5b5c58866a8a85c58b8d"
  },
  {
    "url": "senior/4.component/8.dispaly.html",
    "revision": "c55eba19ad0fd862882a41018d2a709e"
  },
  {
    "url": "senior/4.component/9.alert.html",
    "revision": "f9153bca2d8310ef03f4c8208622c7ac"
  },
  {
    "url": "senior/4.component/9.dynamics.html",
    "revision": "cd407ba8afd58b4f8ddf496badaf06f2"
  },
  {
    "url": "source/vue-cli2.x/1.index.html",
    "revision": "1b9d1595f3a2cffcff9ae3e9c46c3628"
  },
  {
    "url": "source/vue-cli3.x/1.index.html",
    "revision": "c9828ab11f504cbdd810748bb3e6b78e"
  },
  {
    "url": "source/vue-router3.x/1.index.html",
    "revision": "68b98b5f98f629ac6ac353a4d02c42d5"
  },
  {
    "url": "source/vue-router3.x/2.origin.html",
    "revision": "e0bb751a53e182c06f2add3c8bcd9296"
  },
  {
    "url": "source/vue-router4.x/1.index.html",
    "revision": "50dece376be787a377682354b8034b12"
  },
  {
    "url": "source/vue2.x/1.index.html",
    "revision": "0d3234a49ef26d4e1964777df82fd09e"
  },
  {
    "url": "source/vue2.x/10.optimize.html",
    "revision": "5ad8d9d5ac93a1acaadb0dea26b78fe6"
  },
  {
    "url": "source/vue2.x/11.gencode.html",
    "revision": "314dc7d1add3fbb46fe234bb66119a36"
  },
  {
    "url": "source/vue2.x/12.mount.html",
    "revision": "462535a893c001f06acce0d6930dae41"
  },
  {
    "url": "source/vue2.x/13._render.html",
    "revision": "18a026f29368a4f43f5adf9702c8c2b3"
  },
  {
    "url": "source/vue2.x/14._update.html",
    "revision": "5fb4fb1f67b54afe921356ef69b739be"
  },
  {
    "url": "source/vue2.x/2.initGlobalAPI.html",
    "revision": "1a3f3a99c4fbdb72d4b576fca019c4e9"
  },
  {
    "url": "source/vue2.x/3.initMixin.html",
    "revision": "1f605bac56726714e9a902bb7b8c2245"
  },
  {
    "url": "source/vue2.x/4.stateMixin.html",
    "revision": "4452d0264846c6e06f174ee830200118"
  },
  {
    "url": "source/vue2.x/5.eventsMixin.html",
    "revision": "8f0b8f138212f212dd16a7c2ec6b5dad"
  },
  {
    "url": "source/vue2.x/6.lifecycleMixin.html",
    "revision": "ed9f7e37d9240e3abae15e5b1cafe6fc"
  },
  {
    "url": "source/vue2.x/7.renderMixin.html",
    "revision": "47b0e7c83b087f5b521d650b2736b76c"
  },
  {
    "url": "source/vue2.x/8.mount.html",
    "revision": "476637e8615170fad86fc2e59218b7b9"
  },
  {
    "url": "source/vue2.x/9.ast.html",
    "revision": "8fb0d5c1bb6af5ca3c6a27fa507816d5"
  },
  {
    "url": "source/vue3.x/1.index.html",
    "revision": "ac932a2aad6c70ce1c5042f256476070"
  },
  {
    "url": "source/vue3.x/10.optimize.html",
    "revision": "492ec3776028dadc25a1c0fb2c8b3ba1"
  },
  {
    "url": "source/vue3.x/11.gencode.html",
    "revision": "7b9198de31d920fef0b57047430979a1"
  },
  {
    "url": "source/vue3.x/12.mount.html",
    "revision": "224485463a4827bb240c7a0ebf9aecd3"
  },
  {
    "url": "source/vue3.x/13._render.html",
    "revision": "26b0e4f82cd45f2f82f7d6ea60d1d59a"
  },
  {
    "url": "source/vue3.x/14._update.html",
    "revision": "51568ec7a395a25f4d22c154cc41ef4f"
  },
  {
    "url": "source/vue3.x/2.initGlobalAPI.html",
    "revision": "bfee5ee2050ae65127a0400121c4d49e"
  },
  {
    "url": "source/vue3.x/3.initMixin.html",
    "revision": "b97b8e0ec30c7b50b49f7cb52451e880"
  },
  {
    "url": "source/vue3.x/4.stateMixin.html",
    "revision": "1e07d12453c885a106b0f8fdfce9131c"
  },
  {
    "url": "source/vue3.x/5.eventsMixin.html",
    "revision": "2eb4d2ad9588d3caa92460b1913a4ed4"
  },
  {
    "url": "source/vue3.x/6.lifecycleMixin.html",
    "revision": "dd255a34645d935a98823c777481bd3d"
  },
  {
    "url": "source/vue3.x/7.renderMixin.html",
    "revision": "85c42f576cb31d7b2ff7ccda35f22be2"
  },
  {
    "url": "source/vue3.x/8.mount.html",
    "revision": "208721cc575333a244376feba37fd163"
  },
  {
    "url": "source/vue3.x/9.ast.html",
    "revision": "68888101cf9c51bb24f8b2bd2181cd4a"
  },
  {
    "url": "source/vuex3.x/1.index.html",
    "revision": "f75d5d565a91275c92d25dee5df984a5"
  },
  {
    "url": "source/vuex3.x/2.use.html",
    "revision": "175e27549655f3a4f8bfbdb28d3d021a"
  },
  {
    "url": "source/vuex3.x/3.origin.html",
    "revision": "0ef90a3c256819940f704488a9620949"
  },
  {
    "url": "source/vuex4.x/1.index.html",
    "revision": "877bc15dd93d333bf7d7407b706f088c"
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
