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
    "revision": "fea6154db28ca2a127ebef392ec464b0"
  },
  {
    "url": "assets/css/0.styles.feb6ee6a.css",
    "revision": "2450395fe091378006354d6cbf0ac72c"
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
    "url": "assets/js/10.4ac3847b.js",
    "revision": "005990bd82468bee48bf2e17e93397d3"
  },
  {
    "url": "assets/js/100.bc6e4f2c.js",
    "revision": "42785b4547205af248e3d383b12986c0"
  },
  {
    "url": "assets/js/101.7ded009c.js",
    "revision": "f86e6d992d4afb3c486fd5f14f28acd4"
  },
  {
    "url": "assets/js/102.2833b85a.js",
    "revision": "43ca0efac0f0183cb4b5957bb9bab2ee"
  },
  {
    "url": "assets/js/103.3471bdb9.js",
    "revision": "fe85e356d266687ae1dabc885fc79bae"
  },
  {
    "url": "assets/js/104.4bb0f946.js",
    "revision": "bbe63dcd486712fcbdd0c090cf53ce6e"
  },
  {
    "url": "assets/js/105.75c4b7e2.js",
    "revision": "6487c8f2b6aa882093c9f617076e0808"
  },
  {
    "url": "assets/js/106.496eacdd.js",
    "revision": "b8036ede0601cbb9981e6f85bb19e131"
  },
  {
    "url": "assets/js/107.fe480592.js",
    "revision": "535d000a2e26e6ac0a6c13eff8a79d43"
  },
  {
    "url": "assets/js/108.4b31355b.js",
    "revision": "41e12aed7e5b75d1988b13b187ceb0b2"
  },
  {
    "url": "assets/js/109.003783b3.js",
    "revision": "29d740915946ec5c910c9e61b2d31eb9"
  },
  {
    "url": "assets/js/11.8cbde94a.js",
    "revision": "f3b188da117ca1835dbf1e4debec1bd7"
  },
  {
    "url": "assets/js/110.de1f037d.js",
    "revision": "84ec1530d57eac50e3be22a605c27c45"
  },
  {
    "url": "assets/js/111.9f955d18.js",
    "revision": "85f0556c919f44352ac22b4c023a8454"
  },
  {
    "url": "assets/js/112.9ff956ad.js",
    "revision": "2dd803e7f631713d4f1ab143d06472ff"
  },
  {
    "url": "assets/js/113.51594e30.js",
    "revision": "5edd03b4fc2fa864734b646d60d075ed"
  },
  {
    "url": "assets/js/114.71fc1554.js",
    "revision": "fa3fd60d5c699cc884da2fb1c2bec057"
  },
  {
    "url": "assets/js/115.b858615a.js",
    "revision": "ba604ee75be9e1b6369db5e8ee76b5e5"
  },
  {
    "url": "assets/js/116.9f9cd6bd.js",
    "revision": "4490a5e26add1906ebc4f6a025e18530"
  },
  {
    "url": "assets/js/117.e7ce82dc.js",
    "revision": "d781ced140cca6136809083fead2404e"
  },
  {
    "url": "assets/js/118.2991c89d.js",
    "revision": "25e5f5f9a2f5a11a1b599045d4a1cf15"
  },
  {
    "url": "assets/js/119.cdb17d7f.js",
    "revision": "48ae3182106c0f4293f1e2cd437e44f2"
  },
  {
    "url": "assets/js/12.55833a57.js",
    "revision": "5f68a568a02097a29b804d4989b75e00"
  },
  {
    "url": "assets/js/120.40f20665.js",
    "revision": "9221c3570b77757e3c9fe0dfc46378bd"
  },
  {
    "url": "assets/js/121.ac58cece.js",
    "revision": "d3fa1b65c2894757ca853265dc15dfe7"
  },
  {
    "url": "assets/js/122.b1f2abe2.js",
    "revision": "c73ddc41554c64491a1f1ae62ddfa657"
  },
  {
    "url": "assets/js/123.8cb963ae.js",
    "revision": "e8c0e5b17e5a4dabcce23d621acc98b8"
  },
  {
    "url": "assets/js/124.7b2d5188.js",
    "revision": "3af172185371c44e5349935e9d12f6a0"
  },
  {
    "url": "assets/js/125.63412766.js",
    "revision": "63a50efd1d7d07df94817d5f29cb0a27"
  },
  {
    "url": "assets/js/126.1e3fd51b.js",
    "revision": "5bfd51a8c47f8f9b6b4863ccbb0b8d67"
  },
  {
    "url": "assets/js/127.d8423e24.js",
    "revision": "311bc15948267b0c4cc27123d1c15e55"
  },
  {
    "url": "assets/js/128.63158720.js",
    "revision": "e9a1b7a186555160e83e7afd7965213e"
  },
  {
    "url": "assets/js/129.4933ea12.js",
    "revision": "30bc039470b192f9f64852da90454f47"
  },
  {
    "url": "assets/js/13.696d7318.js",
    "revision": "da149115706b623a536a20b89fe887dd"
  },
  {
    "url": "assets/js/130.f09d145f.js",
    "revision": "beb4da5db35c08ca9fa7ff2f9cf420b6"
  },
  {
    "url": "assets/js/131.5760a105.js",
    "revision": "958e378bbefae5c399d53fc382b84249"
  },
  {
    "url": "assets/js/132.c6a43183.js",
    "revision": "8e94450d47c9406e0a3315e6e460b19e"
  },
  {
    "url": "assets/js/133.ba13fe3b.js",
    "revision": "393e1171e16b77fdf7f7d4ef4319dd8b"
  },
  {
    "url": "assets/js/134.c3d212b4.js",
    "revision": "d9db2641732686c347992598988f6aba"
  },
  {
    "url": "assets/js/135.d353eaf8.js",
    "revision": "af3bdf4dbd99d4d11b5ef2814ecfc11b"
  },
  {
    "url": "assets/js/136.5656db94.js",
    "revision": "5b9435aa3ff3d00b731e5eb78dcd11cc"
  },
  {
    "url": "assets/js/137.c3c3dc4d.js",
    "revision": "867c1412b38831b5f07f630d187fcb11"
  },
  {
    "url": "assets/js/138.c3e3aa17.js",
    "revision": "b2b46a5ef7d3e8fe74e3ff333b457be7"
  },
  {
    "url": "assets/js/139.609056b2.js",
    "revision": "8d049b98879a861cf1b9b14d4dbaf140"
  },
  {
    "url": "assets/js/14.ec761b2f.js",
    "revision": "8cd52fb1ce44b93cfd1c6b2b7a82902f"
  },
  {
    "url": "assets/js/140.fdcacd29.js",
    "revision": "692eb7935f982eb2834663fa994217f9"
  },
  {
    "url": "assets/js/141.a4866c7e.js",
    "revision": "b799eaa1b73200d3387058520d0f29b5"
  },
  {
    "url": "assets/js/142.f7f409ad.js",
    "revision": "1164930de214733a487c8c915b5c7cdd"
  },
  {
    "url": "assets/js/143.416ba0f1.js",
    "revision": "ebc49814889eea323d44ea2ade94beb2"
  },
  {
    "url": "assets/js/144.cd56637e.js",
    "revision": "0f0986d0db1f9930a208c16a1c794710"
  },
  {
    "url": "assets/js/145.72840d81.js",
    "revision": "a498d1c9f9ab4c0fee55237d0a660a5b"
  },
  {
    "url": "assets/js/146.561b0ca3.js",
    "revision": "a5888694ab5018a03664ab9a3890be4a"
  },
  {
    "url": "assets/js/147.dd95849a.js",
    "revision": "2561a28b96fe46c75b71afaf15855601"
  },
  {
    "url": "assets/js/148.e9f75607.js",
    "revision": "0311ee3ce2ba2bef260054be00d50d74"
  },
  {
    "url": "assets/js/149.bb8c8b21.js",
    "revision": "804b0607e49a0cb1269f97ea2fd0ea7e"
  },
  {
    "url": "assets/js/15.ed438b4d.js",
    "revision": "7e66c7560ec236dc8f2c0cd6c81bd88a"
  },
  {
    "url": "assets/js/150.361dd30e.js",
    "revision": "5852f4902835117effb1f8f97dc2f640"
  },
  {
    "url": "assets/js/151.e79ae0a2.js",
    "revision": "9f96658dbedc1e627749e8c8f4f017eb"
  },
  {
    "url": "assets/js/152.4171cf09.js",
    "revision": "ae4cc232d8ed69c4092f6549e748e6f8"
  },
  {
    "url": "assets/js/153.bed25679.js",
    "revision": "381ec17eeac8f1a1feacbaa841e6e697"
  },
  {
    "url": "assets/js/154.268352a6.js",
    "revision": "650bae4cd2a69ffbd576d9407733683e"
  },
  {
    "url": "assets/js/155.97001c6b.js",
    "revision": "d5c36d6e762557c2f07db51064963f52"
  },
  {
    "url": "assets/js/156.5f063f06.js",
    "revision": "9501211b9523d656ea7ecf8d34d44258"
  },
  {
    "url": "assets/js/16.5ed38a52.js",
    "revision": "efb502995639f5cb4ab1d775e343522a"
  },
  {
    "url": "assets/js/17.957a3581.js",
    "revision": "fe9b5fa88961ebe5375bdfd451e7274d"
  },
  {
    "url": "assets/js/18.04e81d41.js",
    "revision": "50a5ae63e34e506d93c2c1e8688bb1c2"
  },
  {
    "url": "assets/js/19.8287edd2.js",
    "revision": "19ed4fbd796321c442e5e55adb4932fe"
  },
  {
    "url": "assets/js/2.4b75ea7a.js",
    "revision": "79078cd517a34ca3755b5d5c0527bfc1"
  },
  {
    "url": "assets/js/20.d9ba1781.js",
    "revision": "ddb2e4191221d67bdc3668498a941358"
  },
  {
    "url": "assets/js/21.0573a69f.js",
    "revision": "acbe7f79a42656fc20c3a4d6e9b5dbef"
  },
  {
    "url": "assets/js/22.7c3feb3a.js",
    "revision": "7d6b7d9e67b262139b2b4b136c9c4cfc"
  },
  {
    "url": "assets/js/23.f8764fe5.js",
    "revision": "4dd669fa4ae48dd531a4f29de3a6d84b"
  },
  {
    "url": "assets/js/24.2e832c80.js",
    "revision": "746594c4b62c0c929a1f76eaeac4fb2e"
  },
  {
    "url": "assets/js/25.bf82bb55.js",
    "revision": "fcd0afb52f6600d9f090f561b055fbe2"
  },
  {
    "url": "assets/js/26.3cc6b1d3.js",
    "revision": "3fcdfbb7c1faf39b68b71c20946603a6"
  },
  {
    "url": "assets/js/27.73be1e37.js",
    "revision": "2b0d8cfb7bd0a239027228aeb34c6f1b"
  },
  {
    "url": "assets/js/28.cc88b5a9.js",
    "revision": "cc91efa5ed1bd575d6c732cb66a548d7"
  },
  {
    "url": "assets/js/29.28ed0536.js",
    "revision": "8c8f646455ef1cb23964da9aa6e0cf1d"
  },
  {
    "url": "assets/js/3.cf65085c.js",
    "revision": "54dad147ab10d8a14601b78b306e5426"
  },
  {
    "url": "assets/js/30.6efc9632.js",
    "revision": "d67b551f2e48cc47f5d4ce01b85a37b5"
  },
  {
    "url": "assets/js/31.fb2b9723.js",
    "revision": "f938d5db618cc2f5e83ae0cd9f6ca868"
  },
  {
    "url": "assets/js/32.1abb08a9.js",
    "revision": "52d940bc8330af32763c7de130cb0ce4"
  },
  {
    "url": "assets/js/33.5762a99f.js",
    "revision": "98e38aa523e16b292ff35d33c65c4206"
  },
  {
    "url": "assets/js/34.264977d6.js",
    "revision": "8c022080c8c2c0af60d8c86aa4542d8d"
  },
  {
    "url": "assets/js/35.a13358a5.js",
    "revision": "7960dde6a4308654fca88622159045e2"
  },
  {
    "url": "assets/js/36.93043b96.js",
    "revision": "7e9ce66af345a153d62b298e63cbb9bb"
  },
  {
    "url": "assets/js/37.e9b00f4f.js",
    "revision": "cb60c056f6a058bf519558fd297b71e5"
  },
  {
    "url": "assets/js/38.6b190f20.js",
    "revision": "5c678cc310627c39a9e8251543a0a0e8"
  },
  {
    "url": "assets/js/39.e0a727fd.js",
    "revision": "e0e34dc4234dbe97cb65314376401530"
  },
  {
    "url": "assets/js/4.b5c059dc.js",
    "revision": "9e3b4a72624097aaa4c075588e8a3e0f"
  },
  {
    "url": "assets/js/40.dae78e6b.js",
    "revision": "5978b350e1fdc580b7ab130b5e67cba5"
  },
  {
    "url": "assets/js/41.7d407455.js",
    "revision": "f60569fb5d7c6137b604797c88196b18"
  },
  {
    "url": "assets/js/42.d4750249.js",
    "revision": "65f20bf166698101730fc7d34e9a438d"
  },
  {
    "url": "assets/js/43.49658032.js",
    "revision": "5fe29f7f4ed8c4a2c74cf0091789ba32"
  },
  {
    "url": "assets/js/44.214cb59a.js",
    "revision": "2bd781c1c4576f25e0b9c772f8b104c8"
  },
  {
    "url": "assets/js/45.4b2abf8e.js",
    "revision": "c281d1ed6e7acda2ac2aeb3b2be1a095"
  },
  {
    "url": "assets/js/46.eaf34dce.js",
    "revision": "cfceaf7f4ab30f12646a91755bdb7867"
  },
  {
    "url": "assets/js/47.8c3757e9.js",
    "revision": "aa94f710d04661f2ab9775d0a9dca8cc"
  },
  {
    "url": "assets/js/48.737909a7.js",
    "revision": "3a90c0c4a97cb2bef55f24db18b59c2d"
  },
  {
    "url": "assets/js/49.27fe6e16.js",
    "revision": "5814b545aad62ae871a6ffe13b14786e"
  },
  {
    "url": "assets/js/5.3da9d424.js",
    "revision": "f731ecb1ea081e87e91ec42ef8f8cc2d"
  },
  {
    "url": "assets/js/50.7d1a9089.js",
    "revision": "c301feb09e14022e0a8c06e5118a6c34"
  },
  {
    "url": "assets/js/51.94ecce8d.js",
    "revision": "0088be34f0e87cb63a51868fece4a738"
  },
  {
    "url": "assets/js/52.e5c2399c.js",
    "revision": "897eef4793676258dcdbdbcbfec006f8"
  },
  {
    "url": "assets/js/53.7c6cf46b.js",
    "revision": "c2d85c4a9bdae1318b4909d78808957d"
  },
  {
    "url": "assets/js/54.d30a878f.js",
    "revision": "d19ccb110774f196eef7e7a10ee36d6a"
  },
  {
    "url": "assets/js/55.c79b60b3.js",
    "revision": "7c2e6d089f24d44f6892c7d818e8bce1"
  },
  {
    "url": "assets/js/56.e441b102.js",
    "revision": "e6f66514f102c876485b806cf0366086"
  },
  {
    "url": "assets/js/57.d43c8418.js",
    "revision": "968c97f4489e15a268ce1160f9d96fb7"
  },
  {
    "url": "assets/js/58.511cf944.js",
    "revision": "1ab511002095fc28c76548f0f2aede4d"
  },
  {
    "url": "assets/js/59.d978cfb2.js",
    "revision": "fe5617cf46ee32358723f95ad35632dc"
  },
  {
    "url": "assets/js/6.4040d6c6.js",
    "revision": "a912cb59a461bf806186da2d37c9f70d"
  },
  {
    "url": "assets/js/60.b441b83b.js",
    "revision": "144aba5423bb88f37e87417fa0f329a3"
  },
  {
    "url": "assets/js/61.a0e24486.js",
    "revision": "b409a66fe032b916315e5358702442ef"
  },
  {
    "url": "assets/js/62.3c87fe8b.js",
    "revision": "93e9db5b6266eac61d64061f36f61acd"
  },
  {
    "url": "assets/js/63.e02f3605.js",
    "revision": "85a28dafe264e82519060c77fb89518e"
  },
  {
    "url": "assets/js/64.a73cd52e.js",
    "revision": "dbd29a624ac323223f2590229291bfb0"
  },
  {
    "url": "assets/js/65.0da8312b.js",
    "revision": "91aeb860c287dd77535fa16bcdc3dca6"
  },
  {
    "url": "assets/js/66.3b1c24c6.js",
    "revision": "808224fd90a1de01c006956c0b3a135b"
  },
  {
    "url": "assets/js/67.7d6f6f73.js",
    "revision": "790cbae235279f0f9e6c8e0516c67db0"
  },
  {
    "url": "assets/js/68.3242873c.js",
    "revision": "371c32ce5fcd8f11039f00f7db36c710"
  },
  {
    "url": "assets/js/69.c6c8079b.js",
    "revision": "2dc0eda2e2e6e1c45a1ff8e7bd605269"
  },
  {
    "url": "assets/js/7.594e8322.js",
    "revision": "335139cc884a0daf61d2ba03289f7bc5"
  },
  {
    "url": "assets/js/70.f951d3eb.js",
    "revision": "34d8fa16e50e03e9fce1c1e9d77da229"
  },
  {
    "url": "assets/js/71.973ca89a.js",
    "revision": "61fcef36a33270c51c8adf359975dfb1"
  },
  {
    "url": "assets/js/72.c39fb1b2.js",
    "revision": "77ae5e991af04d113e08064b7d63cafc"
  },
  {
    "url": "assets/js/73.702db35b.js",
    "revision": "953893428ebd74a55273eb3ec742aedc"
  },
  {
    "url": "assets/js/74.61837b92.js",
    "revision": "38816df9b5adb50cbf18609aa2566045"
  },
  {
    "url": "assets/js/75.375549ff.js",
    "revision": "7f3d887895944b75341c06655ebbdea1"
  },
  {
    "url": "assets/js/76.64712cf2.js",
    "revision": "1aa020343df0e11222b4743b8dc4754d"
  },
  {
    "url": "assets/js/77.c8ce9a8c.js",
    "revision": "58163c2cbc41662872101ca81dc6eda7"
  },
  {
    "url": "assets/js/78.c96c9744.js",
    "revision": "bfa1f72b2be004693c81f518dc2bd9b9"
  },
  {
    "url": "assets/js/79.6af1f8da.js",
    "revision": "c78795b426d545c78651564458edc7c3"
  },
  {
    "url": "assets/js/8.b79ee4e5.js",
    "revision": "9fe363c190b7f38b7f9dacc8ea82f8a0"
  },
  {
    "url": "assets/js/80.551d68a4.js",
    "revision": "0fca57f783623aa08f05abc5222b8b7f"
  },
  {
    "url": "assets/js/81.7a0b7d6b.js",
    "revision": "c289c7ac1673a0b62acc0de780ebb5f1"
  },
  {
    "url": "assets/js/82.5a218210.js",
    "revision": "470f9039d6e244137cd9d827eaa29780"
  },
  {
    "url": "assets/js/83.f5292d86.js",
    "revision": "12464d1f6a48d8563aafaf9411410f4a"
  },
  {
    "url": "assets/js/84.74d6ba2d.js",
    "revision": "b3db82ab4456462d21ad8567adf38b6e"
  },
  {
    "url": "assets/js/85.19999303.js",
    "revision": "fc1991849dfc25a26fb9a4ac134160bd"
  },
  {
    "url": "assets/js/86.3d71ebbc.js",
    "revision": "9fc27865c5f2fe121df8b08efe983eb6"
  },
  {
    "url": "assets/js/87.f0e5cfbd.js",
    "revision": "58b4a2032d04571225458d2d6bc3f4cc"
  },
  {
    "url": "assets/js/88.8f78ae14.js",
    "revision": "5fc00a5f652e6ae0571616d5dd134aee"
  },
  {
    "url": "assets/js/89.904cf2ec.js",
    "revision": "e8038e7f4ee6ca1de3a3e8f0a91510a0"
  },
  {
    "url": "assets/js/9.8743a524.js",
    "revision": "e464600a49c876e849c24f578ee49e83"
  },
  {
    "url": "assets/js/90.416fb737.js",
    "revision": "2b36e71cebaf74041c5419fc47ef3d4d"
  },
  {
    "url": "assets/js/91.8aa8876b.js",
    "revision": "8449f2f92ff0ac6d9336b81d1c615678"
  },
  {
    "url": "assets/js/92.beeb3ff9.js",
    "revision": "8614c9cfff7ad0dc7a115b373ee1d06d"
  },
  {
    "url": "assets/js/93.f034b704.js",
    "revision": "bf6979107c22edc3f940b5436dff1a06"
  },
  {
    "url": "assets/js/94.fbd9cb0d.js",
    "revision": "0babc25db5b1ed53086fb08c0c804502"
  },
  {
    "url": "assets/js/95.edc69956.js",
    "revision": "4c5bea99f18649c80a89c10d7c41befa"
  },
  {
    "url": "assets/js/96.3de15470.js",
    "revision": "463d9092fabe44bb483bf717a73a9b87"
  },
  {
    "url": "assets/js/97.2468e850.js",
    "revision": "9f9eeaf9c578f1c5af0fd4610f585fc3"
  },
  {
    "url": "assets/js/98.ccc6fc92.js",
    "revision": "1cb92190b1e326f0ce66fde94817d840"
  },
  {
    "url": "assets/js/99.3806b0ce.js",
    "revision": "80c48df40fe03417935587e5ed150427"
  },
  {
    "url": "base/api/1.echarts.html",
    "revision": "57d5502642d6bc14206711d59f0cd653"
  },
  {
    "url": "base/api/1.index.html",
    "revision": "85607cab27aef09975f42ad30cbb9d84"
  },
  {
    "url": "base/api/2.echartsInstance.html",
    "revision": "2ae55d24bedb41a16cea4c88a5d46404"
  },
  {
    "url": "base/api/3.action.html",
    "revision": "61ace881cd2ea2fef4c92af5dc62fd98"
  },
  {
    "url": "base/api/4.events.html",
    "revision": "bb8e32514adaacd38c972169a1aceb3f"
  },
  {
    "url": "base/components/1.index.html",
    "revision": "6399c2b56dd19389c0d780f2f8c4d361"
  },
  {
    "url": "base/components/1.legend.html",
    "revision": "406ca6756b9d82168cc2df3f1e59bf59"
  },
  {
    "url": "base/components/2.grid.html",
    "revision": "cf1345638609f4f7e526b8acde1def92"
  },
  {
    "url": "base/components/2.polar.html",
    "revision": "1906bff075651c72f26a5a7e087f2f11"
  },
  {
    "url": "base/components/2.radiusAxis.html",
    "revision": "4d680aa04b790eb6be41e4822675ffd5"
  },
  {
    "url": "base/components/2.xAxis.html",
    "revision": "44561eb1469b7eba5ba93fa0ec1cca27"
  },
  {
    "url": "base/components/2.yAxis.html",
    "revision": "e1c40bad82ca7425b38cd262a4aa1814"
  },
  {
    "url": "base/components/3.angleAxis.html",
    "revision": "50fe7e1746e6153fe6c0c0670f5a5578"
  },
  {
    "url": "base/components/4.radar.html",
    "revision": "94bc855d695ce0f316a6ddc9ea17b311"
  },
  {
    "url": "base/components/5.dataZoom.html",
    "revision": "ffe503427d585b1bde6a6438ef3ee37e"
  },
  {
    "url": "base/components/6.visualMap.html",
    "revision": "5ccea51d430e723c9a19ac0921a3096c"
  },
  {
    "url": "base/components/7.tooltip.html",
    "revision": "ef05621716ecb8139fc9e296c7077193"
  },
  {
    "url": "base/components/8.geo.html",
    "revision": "e11efb4cf17862b9d70eca2d17426cc8"
  },
  {
    "url": "base/gl/1.index.html",
    "revision": "6cfbd88fea87dd5f96ff948842a58d95"
  },
  {
    "url": "base/gl/1.scatter3D.html",
    "revision": "062de7495d9f766c65f710ad76c45f65"
  },
  {
    "url": "base/gl/10.flowGL.html",
    "revision": "fc6fdb8951d3499ddf224b0cc788cd84"
  },
  {
    "url": "base/gl/2.bar3D.html",
    "revision": "a1825fd2429729927e7da76ec71d0030"
  },
  {
    "url": "base/gl/3.line3D.html",
    "revision": "f83a65d4f44fdbf4796664b4b12fc921"
  },
  {
    "url": "base/gl/4.lines3D.html",
    "revision": "5c2aecac0089ca69eea81d21a04bc3ab"
  },
  {
    "url": "base/gl/5.map3D.html",
    "revision": "98ae0649149e9ebb5993815f5aabacac"
  },
  {
    "url": "base/gl/6.surface.html",
    "revision": "9ef95c10dcdc36242aef6562a535c8e6"
  },
  {
    "url": "base/gl/7.polygons3D.html",
    "revision": "0455e772637a3ef53d8410de6e17d50c"
  },
  {
    "url": "base/gl/8.scatterGL.html",
    "revision": "1e6bbc2db8462bbd7cb6ff17b1f4d3f5"
  },
  {
    "url": "base/gl/9.graphGL.html",
    "revision": "6de2f40899add0ebbd656e5087286bed"
  },
  {
    "url": "base/series/1.index.html",
    "revision": "bb1438e7fb8d4120cba30fb6e98e7880"
  },
  {
    "url": "base/series/1.line.html",
    "revision": "267ddd4be1603545af4568b76bb8688a"
  },
  {
    "url": "base/series/10.boxplot.html",
    "revision": "c17b12d1985538960d57f4529e907e71"
  },
  {
    "url": "base/series/11.candlestick.html",
    "revision": "7aac938117f1a4009d10b56b10e47d42"
  },
  {
    "url": "base/series/12.heatmap.html",
    "revision": "64d0c4d18c7f7acf5bcd40789935dff5"
  },
  {
    "url": "base/series/13.map.html",
    "revision": "b9b1907f15df44f67c77fbd2bec44aea"
  },
  {
    "url": "base/series/14.parallel.html",
    "revision": "c8f6c1b44aca5f746ca2b2a8c3158e0c"
  },
  {
    "url": "base/series/15.lines.html",
    "revision": "49d8bfd82d34dfb4d9c2294415aa4033"
  },
  {
    "url": "base/series/16.graph.html",
    "revision": "84c850dc42770372a1620ecb0236eb0f"
  },
  {
    "url": "base/series/17.sankey.html",
    "revision": "94921f8b345eeb65bbf57e95183d0f1b"
  },
  {
    "url": "base/series/18.funnel.html",
    "revision": "b3a5959626bbfd82b089d65ea50acca0"
  },
  {
    "url": "base/series/19.gauge.html",
    "revision": "b694f47a550214ddfae6a08f1f687c16"
  },
  {
    "url": "base/series/2.bar.html",
    "revision": "12c14baa2a1cbc4475291da753660970"
  },
  {
    "url": "base/series/20.pictorialBar.html",
    "revision": "ebbb85f19a03e279897a768076210346"
  },
  {
    "url": "base/series/21.themeRiver.html",
    "revision": "4d6289423d6b0c5f3729f90ee564a7da"
  },
  {
    "url": "base/series/22.custom.html",
    "revision": "459b6d4b2942aae9bd87be051e8fee2b"
  },
  {
    "url": "base/series/3.pie.html",
    "revision": "78d9466182610e1131e46e236e75eee7"
  },
  {
    "url": "base/series/4.scatter.html",
    "revision": "c3823a82a1b01dbf7569a3d9d9ef7f8d"
  },
  {
    "url": "base/series/5.effectScatter.html",
    "revision": "cd8743e1c4b3323f5a9d45f024b0e202"
  },
  {
    "url": "base/series/6.radar.html",
    "revision": "026c0ebd143f7e0be0ccf73f43a8428a"
  },
  {
    "url": "base/series/7.tree.html",
    "revision": "7b99683ad0552d0da13ac56e94aa8f92"
  },
  {
    "url": "base/series/8.treemap.html",
    "revision": "9a55f8148807bac0fafe7c79289498ff"
  },
  {
    "url": "base/series/9.sunburst.html",
    "revision": "7b6c75e58ba5a66f32a4e32f1fc0dab7"
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
    "revision": "35497c186187fc1f99a01f2169b43af5"
  },
  {
    "url": "mock/http.js",
    "revision": "a219140640bec4dfbe8f4fe88d351ed8"
  },
  {
    "url": "senior/1.micro/1.index.html",
    "revision": "23aa488f1b1e5d06c0e7df02a9ee1b4d"
  },
  {
    "url": "senior/1.micro/1.singlespa.html",
    "revision": "4a9efdcc9504bc9c8cf4f6705c94af44"
  },
  {
    "url": "senior/1.micro/1.singlespa2.html",
    "revision": "2e61f14973c990ec0596ab1e0e9993ca"
  },
  {
    "url": "senior/1.micro/2.qiankun.html",
    "revision": "02a640cab32887f073f22b58889a1125"
  },
  {
    "url": "senior/1.micro/2.qiankun2.html",
    "revision": "53943fb4f6d1ea64f15e4ca28c9eeaa2"
  },
  {
    "url": "senior/1.micro/3.share.html",
    "revision": "56a69bf8c2d2a1334cbf5eb08d8dd659"
  },
  {
    "url": "senior/1.micro/4.dev.html",
    "revision": "c04af4605de76b5c50d3bf61c5e41197"
  },
  {
    "url": "senior/2.typescript/1.env.html",
    "revision": "26c8c7b4f51d8f1b23934b0d98f8597d"
  },
  {
    "url": "senior/2.typescript/1.index.html",
    "revision": "0448b5067b3cbc2d45918ba49fb4d1ed"
  },
  {
    "url": "senior/2.typescript/10.infer.html",
    "revision": "ef163fb5d21705308d130501b0c577ad"
  },
  {
    "url": "senior/2.typescript/11.overlapping.html",
    "revision": "158d70c697c6fa4497656a22cc4db094"
  },
  {
    "url": "senior/2.typescript/12.condition.html",
    "revision": "9792a82efcbdf2c6bd14bdda88ecf430"
  },
  {
    "url": "senior/2.typescript/13.builtin.html",
    "revision": "df0db4fd3875fa7651ab9d9eb9bb1fb3"
  },
  {
    "url": "senior/2.typescript/14.package.html",
    "revision": "922327dc9747a89c599b57663b3c79d9"
  },
  {
    "url": "senior/2.typescript/15.custom.html",
    "revision": "77940ae6ae5b2df64fe0fc39973ba2c9"
  },
  {
    "url": "senior/2.typescript/16.unknown.html",
    "revision": "901f437abfda1a9fb53e6c997b87c121"
  },
  {
    "url": "senior/2.typescript/17.module.html",
    "revision": "c4ef426c1972478de00c21249836a385"
  },
  {
    "url": "senior/2.typescript/18.statement.html",
    "revision": "f7c2a3efbe4589a1e57dc42f278233dd"
  },
  {
    "url": "senior/2.typescript/19.extend.html",
    "revision": "b9fefb80712f8899728cf3f39733ad2c"
  },
  {
    "url": "senior/2.typescript/2.base.html",
    "revision": "784c47773df28fd18753a34de6833507"
  },
  {
    "url": "senior/2.typescript/3.deduction.html",
    "revision": "7911aa55fbd63807a16fa74eaae06106"
  },
  {
    "url": "senior/2.typescript/4.type.html",
    "revision": "4b2234bc8e26a0769ef92004a4ac7ef1"
  },
  {
    "url": "senior/2.typescript/5.class.html",
    "revision": "26a205912593a89675fbf699f8253d21"
  },
  {
    "url": "senior/2.typescript/6.interface.html",
    "revision": "6bc169cc3781e1a2e6a28bfbb7033f7d"
  },
  {
    "url": "senior/2.typescript/7.generic.html",
    "revision": "75798a2c55b3ac4dc61ae0bbd59c1542"
  },
  {
    "url": "senior/2.typescript/8.compatible.html",
    "revision": "e1faafb47c247fe8c9f0fa61ad2dbf0d"
  },
  {
    "url": "senior/2.typescript/9.protect.html",
    "revision": "6a2877a3748cbe11b8e12563e1c59809"
  },
  {
    "url": "senior/3.deploy/1.index.html",
    "revision": "2b0d318657651c348192699863b6f027"
  },
  {
    "url": "senior/3.deploy/1.local.html",
    "revision": "39b204ea05e6a10dd944454ae140f2c5"
  },
  {
    "url": "senior/3.deploy/2.gitlab.html",
    "revision": "1b1c307927824b8c15caa7784821d90d"
  },
  {
    "url": "senior/3.deploy/3.genkins.html",
    "revision": "537caa9fb397ad7ee5535b16e7c61f30"
  },
  {
    "url": "senior/3.deploy/4.centos.html",
    "revision": "0cf982811af3aa4e51aa017171aec3ad"
  },
  {
    "url": "senior/3.deploy/5.nginx.html",
    "revision": "4473c036669c1046330c29547fd355dd"
  },
  {
    "url": "senior/4.component/1.button.html",
    "revision": "4b2b99c7873bf83f18f3e72cf43417cd"
  },
  {
    "url": "senior/4.component/1.env.html",
    "revision": "9b9202a4709085caed35d562e20ab328"
  },
  {
    "url": "senior/4.component/1.index.html",
    "revision": "0f10fd80cbfd715b8e21eca16f12c3b5"
  },
  {
    "url": "senior/4.component/1.recursion.html",
    "revision": "98cdd6523aa71126011987931793bd63"
  },
  {
    "url": "senior/4.component/10.tree.html",
    "revision": "366cc2ed8f635876c72cca5847156e6b"
  },
  {
    "url": "senior/4.component/12.table.html",
    "revision": "8e8e763f6440c633e40f47bea167b3c1"
  },
  {
    "url": "senior/4.component/13.publish.html",
    "revision": "aed757f7259c8c3fe6c50741b582befc"
  },
  {
    "url": "senior/4.component/2.dropdown.html",
    "revision": "f7d9eb247a1c3d4022ef16955e99bc1f"
  },
  {
    "url": "senior/4.component/3.dialog.html",
    "revision": "2661081beb9014f0436e4b511a024659"
  },
  {
    "url": "senior/4.component/3.form.html",
    "revision": "a82730f55c53a23979dcbd9dc3dc95c0"
  },
  {
    "url": "senior/4.component/4.input.html",
    "revision": "d93d9716cb219119c6e66e6c83516808"
  },
  {
    "url": "senior/4.component/4.render.html",
    "revision": "62246ee2fe1675e0a3c4c34a7cef29fc"
  },
  {
    "url": "senior/4.component/5.checkBox.html",
    "revision": "0bd55813c3d153f7a7c85aa33f272f5d"
  },
  {
    "url": "senior/4.component/6.cascader.html",
    "revision": "3e73980595914cc807d49ee81ea60335"
  },
  {
    "url": "senior/4.component/7.date.html",
    "revision": "1e6beda7e4ce96846a6d771975720981"
  },
  {
    "url": "senior/4.component/8.dispaly.html",
    "revision": "d5dd95cf12deb7ae13261df563769b4c"
  },
  {
    "url": "senior/4.component/9.alert.html",
    "revision": "b8f7e6f20c223688af67724ea7674bf7"
  },
  {
    "url": "senior/4.component/9.dynamics.html",
    "revision": "3ea4e8582d0c5542dc79074800802e6a"
  },
  {
    "url": "source/vue-cli2.x/1.index.html",
    "revision": "f7a0af2267dff07b8665e823f2dbff81"
  },
  {
    "url": "source/vue-cli3.x/1.index.html",
    "revision": "5c26e76dab438c119703756c007bf211"
  },
  {
    "url": "source/vue-router3.x/1.index.html",
    "revision": "4e67d1a35f88c298c344bbee9705c5a8"
  },
  {
    "url": "source/vue-router3.x/2.origin.html",
    "revision": "c594650e71455028533141f1325a1e70"
  },
  {
    "url": "source/vue-router4.x/1.index.html",
    "revision": "3f9d7f8b3357c6921053cad5f6aea1b9"
  },
  {
    "url": "source/vue2.x/1.index.html",
    "revision": "eae87d2f5ac38b3481e55460bfb09ceb"
  },
  {
    "url": "source/vue2.x/10.optimize.html",
    "revision": "930b287b2f9220f80f549d05c3dd1181"
  },
  {
    "url": "source/vue2.x/11.gencode.html",
    "revision": "19b2370b0520da948bd38f44dd9e1a90"
  },
  {
    "url": "source/vue2.x/12.mount.html",
    "revision": "ca0be7ce0f77d4f485f40f1045748ad0"
  },
  {
    "url": "source/vue2.x/13._render.html",
    "revision": "431b19cc03f9ab2f1a9abc0ed41a9bd4"
  },
  {
    "url": "source/vue2.x/14._update.html",
    "revision": "d94bab2fa093e14c46ab60585ee937ee"
  },
  {
    "url": "source/vue2.x/2.initGlobalAPI.html",
    "revision": "b83d53dae6bf7e31b258df3f7ad22ef3"
  },
  {
    "url": "source/vue2.x/3.initMixin.html",
    "revision": "07727cd5dfb728939571279790cc634d"
  },
  {
    "url": "source/vue2.x/4.stateMixin.html",
    "revision": "c630264ffef22a825f2acb275f661735"
  },
  {
    "url": "source/vue2.x/5.eventsMixin.html",
    "revision": "b8cfba6d811fc7b1aea377523cb34e88"
  },
  {
    "url": "source/vue2.x/6.lifecycleMixin.html",
    "revision": "8bcb96abf7376f803353d7978d66d1ba"
  },
  {
    "url": "source/vue2.x/7.renderMixin.html",
    "revision": "ce92849c0ac4d1f3129269befaa3d91f"
  },
  {
    "url": "source/vue2.x/8.mount.html",
    "revision": "b59050ed1360fee56e64ba81e492cd10"
  },
  {
    "url": "source/vue2.x/9.ast.html",
    "revision": "4807f3c61da16b3ebebba119ed5a1bde"
  },
  {
    "url": "source/vue3.x/1.index.html",
    "revision": "729b30b6530f7162de0b4dff6ce82a66"
  },
  {
    "url": "source/vue3.x/10.optimize.html",
    "revision": "33e5b0348192e11bf288493de459cb86"
  },
  {
    "url": "source/vue3.x/11.gencode.html",
    "revision": "836fa522d4d28fb27faea41448487947"
  },
  {
    "url": "source/vue3.x/12.mount.html",
    "revision": "deb7ee673e331801ef67a28a1c3f32ae"
  },
  {
    "url": "source/vue3.x/13._render.html",
    "revision": "6d63a131f563234c8f308a5e6d9f0657"
  },
  {
    "url": "source/vue3.x/14._update.html",
    "revision": "7e97d1220cb1631c7a6d3bd37e19ed6f"
  },
  {
    "url": "source/vue3.x/2.initGlobalAPI.html",
    "revision": "1c725195ace7467c946f7e8a7636c08c"
  },
  {
    "url": "source/vue3.x/3.initMixin.html",
    "revision": "98651feefebd84f89cdea66dc0b5cb95"
  },
  {
    "url": "source/vue3.x/4.stateMixin.html",
    "revision": "c89fbdc4279a1639fcc6bcd8463d8698"
  },
  {
    "url": "source/vue3.x/5.eventsMixin.html",
    "revision": "da8473824a7e0987bf57652c2451e7ab"
  },
  {
    "url": "source/vue3.x/6.lifecycleMixin.html",
    "revision": "2f0c25bbca3e87a4f436013af0dd17e5"
  },
  {
    "url": "source/vue3.x/7.renderMixin.html",
    "revision": "de0607a0860ef95469b1ef50dcace04c"
  },
  {
    "url": "source/vue3.x/8.mount.html",
    "revision": "2e7988e75a6585acc2cea0ed23b0bf27"
  },
  {
    "url": "source/vue3.x/9.ast.html",
    "revision": "3aa0d0e6670c5ddf2f4ddccc81617446"
  },
  {
    "url": "source/vuex3.x/1.index.html",
    "revision": "f34453bb337320727cdf9f22dade10da"
  },
  {
    "url": "source/vuex3.x/2.use.html",
    "revision": "1ecd18882b34268b9e2dce236f31bb0d"
  },
  {
    "url": "source/vuex3.x/3.origin.html",
    "revision": "f8697e1b4bcd5221dc43fc5b6034f004"
  },
  {
    "url": "source/vuex4.x/1.index.html",
    "revision": "9654939312bafb35da047d976bfdecce"
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
