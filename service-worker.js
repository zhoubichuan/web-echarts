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
    "revision": "e403a3dbcfbab8da012ffc0ac256acae"
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
    "url": "assets/js/50.f5b2ce96.js",
    "revision": "2dec5820771e7754b174e7f4deb113b6"
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
    "revision": "13563eb5990e27cfc2e62a41d2c2cf30"
  },
  {
    "url": "base/api/1.index.html",
    "revision": "9add9a4ba215e990f1c7f16657efdf06"
  },
  {
    "url": "base/api/2.echartsInstance.html",
    "revision": "3a711ab4308efcf01ed7d4640993025d"
  },
  {
    "url": "base/api/3.action.html",
    "revision": "b0ebced95fde7ba8b2a33bb9c4235128"
  },
  {
    "url": "base/api/4.events.html",
    "revision": "401abb51814a1b0da21f593c4f1bf9f0"
  },
  {
    "url": "base/components/1.index.html",
    "revision": "bd09ebbd1927178a27fed3c61b611359"
  },
  {
    "url": "base/components/1.legend.html",
    "revision": "6efccd9c7e32004d46fc3457db7d83f3"
  },
  {
    "url": "base/components/2.grid.html",
    "revision": "da83b9af3521dd4e5153fdca8d2bd350"
  },
  {
    "url": "base/components/2.polar.html",
    "revision": "70131b802e3e33f5783e035769782913"
  },
  {
    "url": "base/components/2.radiusAxis.html",
    "revision": "ecf34de7e38370ad3dd490803f099183"
  },
  {
    "url": "base/components/2.xAxis.html",
    "revision": "6b84ab419b69b6eb11bf127a28ff70cf"
  },
  {
    "url": "base/components/2.yAxis.html",
    "revision": "03bfe4af2e6db1ef60ffc11729a8ff4a"
  },
  {
    "url": "base/components/3.angleAxis.html",
    "revision": "80e5be0b05b4942afbc06ffd1b1d199f"
  },
  {
    "url": "base/components/4.radar.html",
    "revision": "e0adcd1f65ff668ffc545e2cd4077edb"
  },
  {
    "url": "base/components/5.dataZoom.html",
    "revision": "0b10222ff592a8f1f5d98203700c07cc"
  },
  {
    "url": "base/components/6.visualMap.html",
    "revision": "9f114597f2f6710f51ab288b87af8839"
  },
  {
    "url": "base/components/7.tooltip.html",
    "revision": "183bbacb5c319689a93f6c0b6a722ebe"
  },
  {
    "url": "base/components/8.geo.html",
    "revision": "e4690db9158f970f913f63f6aaafd828"
  },
  {
    "url": "base/gl/1.index.html",
    "revision": "10f246fb01cc811d60ed95e84045fbf3"
  },
  {
    "url": "base/gl/1.scatter3D.html",
    "revision": "7c665e85ce9f03c0486be73816ecb7bb"
  },
  {
    "url": "base/gl/10.flowGL.html",
    "revision": "122a1868e130c2b20067336f4f16c6ac"
  },
  {
    "url": "base/gl/2.bar3D.html",
    "revision": "8b6fc1e8cc3a26a2fd46366c3711c3a1"
  },
  {
    "url": "base/gl/3.line3D.html",
    "revision": "85f3967e5c96780924975c71f1193e5c"
  },
  {
    "url": "base/gl/4.lines3D.html",
    "revision": "ac29f7515d988c96fa24d75979513a2e"
  },
  {
    "url": "base/gl/5.map3D.html",
    "revision": "7e06a40f6f12afa233f44a7b8506f368"
  },
  {
    "url": "base/gl/6.surface.html",
    "revision": "25cd04ea1afe192c7da12eefeab92dfd"
  },
  {
    "url": "base/gl/7.polygons3D.html",
    "revision": "cf7174a2aecbfa1610502d737647a333"
  },
  {
    "url": "base/gl/8.scatterGL.html",
    "revision": "e4aa76eaefe34682346f415033bacd61"
  },
  {
    "url": "base/gl/9.graphGL.html",
    "revision": "24f0cf4e5e8227590fa62ab66fecfaf7"
  },
  {
    "url": "base/series/1.index.html",
    "revision": "c039f17ffde6290df105cc3c07b9bd1b"
  },
  {
    "url": "base/series/1.line.html",
    "revision": "05719c9ffad5345de403e72d63169fcf"
  },
  {
    "url": "base/series/10.boxplot.html",
    "revision": "ec35bd9df0214c92e0953b4d56d7b004"
  },
  {
    "url": "base/series/11.candlestick.html",
    "revision": "33d8602838fc2c44eb9ae18499e6784c"
  },
  {
    "url": "base/series/12.heatmap.html",
    "revision": "2ed556bab6edfd5dbc747de14b55f46c"
  },
  {
    "url": "base/series/13.map.html",
    "revision": "b9c6bcb2c3f9f9c6289d6941f0b7a715"
  },
  {
    "url": "base/series/14.parallel.html",
    "revision": "0ee6e81b4ef5cb470ea2fdd774ce6c5f"
  },
  {
    "url": "base/series/15.lines.html",
    "revision": "3855ad3e21d9a0169ea9e4e79c32ac0a"
  },
  {
    "url": "base/series/16.graph.html",
    "revision": "059cad148df19a85fb338a459ef7a314"
  },
  {
    "url": "base/series/17.sankey.html",
    "revision": "8b548933dacc4fb1dbdb62471d12d555"
  },
  {
    "url": "base/series/18.funnel.html",
    "revision": "ed4212f1433f4aa45c1ebdb2e9ef6f28"
  },
  {
    "url": "base/series/19.gauge.html",
    "revision": "3227c8365ab0ab62d5bc73f3b50c7588"
  },
  {
    "url": "base/series/2.bar.html",
    "revision": "9958a835b0b9a196bb228fe6159b690f"
  },
  {
    "url": "base/series/20.pictorialBar.html",
    "revision": "924a90a9b65ff07a0ec9000f48fe1507"
  },
  {
    "url": "base/series/21.themeRiver.html",
    "revision": "0c554e94b343bce5c553fab717d7139a"
  },
  {
    "url": "base/series/22.custom.html",
    "revision": "a36d2b534d09967e5570daa428f7ecec"
  },
  {
    "url": "base/series/3.pie.html",
    "revision": "5779d7fadf515a776800440ab6efdf34"
  },
  {
    "url": "base/series/4.scatter.html",
    "revision": "c3bf55ab73b015c8d3b9be70bc0f42cf"
  },
  {
    "url": "base/series/5.effectScatter.html",
    "revision": "675035f4467ecf074f344e26eaf9c238"
  },
  {
    "url": "base/series/6.radar.html",
    "revision": "a06c00497d0afdb97ddc1e7747f41f87"
  },
  {
    "url": "base/series/7.tree.html",
    "revision": "9add352686be18e5036fe11c9325cc91"
  },
  {
    "url": "base/series/8.treemap.html",
    "revision": "05edbb26cb145663cd78879c2f3c10bc"
  },
  {
    "url": "base/series/9.sunburst.html",
    "revision": "a528b65daabc4a8a19a0ae411ed3d214"
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
    "revision": "193845cd45bf54e30682affdc065e098"
  },
  {
    "url": "mock/http.js",
    "revision": "a219140640bec4dfbe8f4fe88d351ed8"
  },
  {
    "url": "senior/1.micro/1.index.html",
    "revision": "b59ae0f2c353ea1bcd0c213a20e6f6f8"
  },
  {
    "url": "senior/1.micro/1.singlespa.html",
    "revision": "3fc305fc35fb3b4c90effa72b418fccc"
  },
  {
    "url": "senior/1.micro/1.singlespa2.html",
    "revision": "9a4a89b9ffbee1104854255e708abc62"
  },
  {
    "url": "senior/1.micro/2.qiankun.html",
    "revision": "61eadd11b627184983f41065d9b601bb"
  },
  {
    "url": "senior/1.micro/2.qiankun2.html",
    "revision": "8f53060ef2a52459cab6ab63077582cc"
  },
  {
    "url": "senior/1.micro/3.share.html",
    "revision": "90bc24ce04121cc61f4f682799fc2a1f"
  },
  {
    "url": "senior/1.micro/4.dev.html",
    "revision": "9d3c84c8ff3ff1d9ecf8de208aba0686"
  },
  {
    "url": "senior/2.typescript/1.env.html",
    "revision": "79c1ca19c03925708100575e216039cc"
  },
  {
    "url": "senior/2.typescript/1.index.html",
    "revision": "799b42ba2b92916c887f8b7274d17dd0"
  },
  {
    "url": "senior/2.typescript/10.infer.html",
    "revision": "62bace3c11773e82fda387043063934f"
  },
  {
    "url": "senior/2.typescript/11.overlapping.html",
    "revision": "abbc928be0a16a4148b4ab7079ac7cf4"
  },
  {
    "url": "senior/2.typescript/12.condition.html",
    "revision": "c36952c5905ac89ffe57b61d5e3b2f2c"
  },
  {
    "url": "senior/2.typescript/13.builtin.html",
    "revision": "7c544905432277bd7643d6d2f9926a06"
  },
  {
    "url": "senior/2.typescript/14.package.html",
    "revision": "3a340cd0968887839407c64f1bfc91f4"
  },
  {
    "url": "senior/2.typescript/15.custom.html",
    "revision": "0a3c14b614e0d12577bf4e3094bcd541"
  },
  {
    "url": "senior/2.typescript/16.unknown.html",
    "revision": "ae26ca4b301a0864214ea2c7e1096ea6"
  },
  {
    "url": "senior/2.typescript/17.module.html",
    "revision": "a5d9768e73161a452c834c929ce989d6"
  },
  {
    "url": "senior/2.typescript/18.statement.html",
    "revision": "eceb84758470ab9e13c5bf527db877d6"
  },
  {
    "url": "senior/2.typescript/19.extend.html",
    "revision": "0dd3c58153d52e69967c0e918333fb81"
  },
  {
    "url": "senior/2.typescript/2.base.html",
    "revision": "db9dc04d6c00653ba5e0eecaa8a0f33d"
  },
  {
    "url": "senior/2.typescript/3.deduction.html",
    "revision": "2ae91a145a4cf9938d8001df2924bf0a"
  },
  {
    "url": "senior/2.typescript/4.type.html",
    "revision": "7b0208e710dc50de462f8d84cdbe4cd2"
  },
  {
    "url": "senior/2.typescript/5.class.html",
    "revision": "9d1e6d0f8b21fa489721645ffb6aa51c"
  },
  {
    "url": "senior/2.typescript/6.interface.html",
    "revision": "4d9d1172ecd7427df530c89b8c5510a7"
  },
  {
    "url": "senior/2.typescript/7.generic.html",
    "revision": "a665f117ff499fdd4ce67643da59b133"
  },
  {
    "url": "senior/2.typescript/8.compatible.html",
    "revision": "9a2825ecefc396a0cca32a621df3954e"
  },
  {
    "url": "senior/2.typescript/9.protect.html",
    "revision": "f6bd6158635f562fc6a073f71363c3f4"
  },
  {
    "url": "senior/3.deploy/1.index.html",
    "revision": "b283f6a07bd493685d82346df7855447"
  },
  {
    "url": "senior/3.deploy/1.local.html",
    "revision": "76dc9ce07a51a437911503d3e5c36ae2"
  },
  {
    "url": "senior/3.deploy/2.gitlab.html",
    "revision": "f4670992bfc5f2520044b2b75a50177e"
  },
  {
    "url": "senior/3.deploy/3.genkins.html",
    "revision": "4d77017290ed386554ca8c986e122a52"
  },
  {
    "url": "senior/3.deploy/4.centos.html",
    "revision": "1d3f2a423b65645cee126fa89b049835"
  },
  {
    "url": "senior/3.deploy/5.nginx.html",
    "revision": "b64528902097b6aa88fb89feda51a2c4"
  },
  {
    "url": "senior/4.component/1.button.html",
    "revision": "4bae1fd072f8f667e94d0fc929117b40"
  },
  {
    "url": "senior/4.component/1.env.html",
    "revision": "7534c208ac0e8fdc4d1fb01a4df9c9c7"
  },
  {
    "url": "senior/4.component/1.index.html",
    "revision": "b83eb5692718334e1e175550e090a2bc"
  },
  {
    "url": "senior/4.component/1.recursion.html",
    "revision": "c15d0abeb39032ac53f810697cc5d21d"
  },
  {
    "url": "senior/4.component/10.tree.html",
    "revision": "576ca15133cb8d96a506e1a010bc26d2"
  },
  {
    "url": "senior/4.component/12.table.html",
    "revision": "56c1f851834b97d4bddd504f9dd0d65b"
  },
  {
    "url": "senior/4.component/13.publish.html",
    "revision": "8e1fc4e5552afa18f24ff2e67efe93ac"
  },
  {
    "url": "senior/4.component/2.dropdown.html",
    "revision": "518707f6f973d57b5ab0c3e8175ac959"
  },
  {
    "url": "senior/4.component/3.dialog.html",
    "revision": "ea7aee4f0ce40a89ff891c0db1d3d488"
  },
  {
    "url": "senior/4.component/3.form.html",
    "revision": "add8fd7d8033f11de877f6a760f9b88d"
  },
  {
    "url": "senior/4.component/4.input.html",
    "revision": "9e3a94a6b294637825c9c07971015633"
  },
  {
    "url": "senior/4.component/4.render.html",
    "revision": "8f6f6e26a69dea145db81d0c70f23bfb"
  },
  {
    "url": "senior/4.component/5.checkBox.html",
    "revision": "b9aa2753ba159f06e5c0136e4c96d26f"
  },
  {
    "url": "senior/4.component/6.cascader.html",
    "revision": "cf9214f420757046355c2dcca9913681"
  },
  {
    "url": "senior/4.component/7.date.html",
    "revision": "bcf407f03032d74e71debee95eebad11"
  },
  {
    "url": "senior/4.component/8.dispaly.html",
    "revision": "d7093e9f2777099ddbc2f85f9fd50dc1"
  },
  {
    "url": "senior/4.component/9.alert.html",
    "revision": "519d666ae38aff74163a417acaf89ee5"
  },
  {
    "url": "senior/4.component/9.dynamics.html",
    "revision": "9a9171b522885929ea4bbdf046832c8c"
  },
  {
    "url": "source/vue-cli2.x/1.index.html",
    "revision": "1377f47d12b05bd09feb4ac53edce659"
  },
  {
    "url": "source/vue-cli3.x/1.index.html",
    "revision": "d5f000c741ebe3eeaf133770e9bff62e"
  },
  {
    "url": "source/vue-router3.x/1.index.html",
    "revision": "1730308570c8f1a44c53486ecbc649f4"
  },
  {
    "url": "source/vue-router3.x/2.origin.html",
    "revision": "912f5641f133f78bcca6c4650fad26cd"
  },
  {
    "url": "source/vue-router4.x/1.index.html",
    "revision": "3ebbbf010a9a0d92e0dff430e98aa06f"
  },
  {
    "url": "source/vue2.x/1.index.html",
    "revision": "20699f100425a775b702d0cb53b3cd44"
  },
  {
    "url": "source/vue2.x/10.optimize.html",
    "revision": "cbe656b1b364c98a71f78fcb7caaf0ae"
  },
  {
    "url": "source/vue2.x/11.gencode.html",
    "revision": "ab870875d9a30de457d3d01112ae8bce"
  },
  {
    "url": "source/vue2.x/12.mount.html",
    "revision": "89403660220463733f8eab6313b7cb23"
  },
  {
    "url": "source/vue2.x/13._render.html",
    "revision": "deb9e31ec045f1bf615f8dc8462fb282"
  },
  {
    "url": "source/vue2.x/14._update.html",
    "revision": "2da7807c9d1117107b471aeba9aac93b"
  },
  {
    "url": "source/vue2.x/2.initGlobalAPI.html",
    "revision": "e4bee4853d06b1d9effc7ad448399f7d"
  },
  {
    "url": "source/vue2.x/3.initMixin.html",
    "revision": "4ed3e3e9cedf04aa3f4fa9ab883568b3"
  },
  {
    "url": "source/vue2.x/4.stateMixin.html",
    "revision": "05d22805f78ed626588e644846c5ddf5"
  },
  {
    "url": "source/vue2.x/5.eventsMixin.html",
    "revision": "c11e6d630b32cf8225e6c2279fb85a64"
  },
  {
    "url": "source/vue2.x/6.lifecycleMixin.html",
    "revision": "0d1c49183faba4d742991204fd22e323"
  },
  {
    "url": "source/vue2.x/7.renderMixin.html",
    "revision": "0140a4aae2b576fbc28180ee98d777fe"
  },
  {
    "url": "source/vue2.x/8.mount.html",
    "revision": "60b76509023c864f917aee4c283ab77a"
  },
  {
    "url": "source/vue2.x/9.ast.html",
    "revision": "09d34ebdedcae32c76fd333dd715bb10"
  },
  {
    "url": "source/vue3.x/1.index.html",
    "revision": "5c5f93a09a0c64f0d045afe696a0266c"
  },
  {
    "url": "source/vue3.x/10.optimize.html",
    "revision": "5a599221fa8e82b7367656ba52e142bf"
  },
  {
    "url": "source/vue3.x/11.gencode.html",
    "revision": "9a4e5d9fe236f10541e40e47f60800b7"
  },
  {
    "url": "source/vue3.x/12.mount.html",
    "revision": "af058d52cd35f39242fd637c63f63d70"
  },
  {
    "url": "source/vue3.x/13._render.html",
    "revision": "fb0be1d015e3be4047af24ef92989585"
  },
  {
    "url": "source/vue3.x/14._update.html",
    "revision": "747b236de6ca3496391638055fa431af"
  },
  {
    "url": "source/vue3.x/2.initGlobalAPI.html",
    "revision": "5b05fc04c75ff7db498d9a606bbf93bb"
  },
  {
    "url": "source/vue3.x/3.initMixin.html",
    "revision": "9d87117610027c36c53e92c338f86144"
  },
  {
    "url": "source/vue3.x/4.stateMixin.html",
    "revision": "27d63cde4c09df7ddbafab0027a7dff6"
  },
  {
    "url": "source/vue3.x/5.eventsMixin.html",
    "revision": "ea879b398a2f5adbbb653265dfef82d8"
  },
  {
    "url": "source/vue3.x/6.lifecycleMixin.html",
    "revision": "03d3d286fef6bc1253bfb90bd08a8558"
  },
  {
    "url": "source/vue3.x/7.renderMixin.html",
    "revision": "6d95792c315bea7bf1537081120d4f86"
  },
  {
    "url": "source/vue3.x/8.mount.html",
    "revision": "d3ae5c9a7c1cad41de3e468e52550194"
  },
  {
    "url": "source/vue3.x/9.ast.html",
    "revision": "eb35ee64f2046ae7d1ad06a908e2abaa"
  },
  {
    "url": "source/vuex3.x/1.index.html",
    "revision": "4737f67b9b6c2ee60f68a74dee523613"
  },
  {
    "url": "source/vuex3.x/2.use.html",
    "revision": "f68f0bc65eaaf790eeb7ee3c68d78f8f"
  },
  {
    "url": "source/vuex3.x/3.origin.html",
    "revision": "35e706ed24c4fac5a8840ebc27fef184"
  },
  {
    "url": "source/vuex4.x/1.index.html",
    "revision": "9e470716c71660445410874d63811bd6"
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
