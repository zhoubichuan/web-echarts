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
    "revision": "d693cbab2c13c07ec3f6d8040c737081"
  },
  {
    "url": "assets/css/0.styles.c80d39f6.css",
    "revision": "9ab13416bc502acdf736956ea8aacc26"
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
    "url": "assets/js/10.32f3cb5f.js",
    "revision": "de625049dd517952109e019718487e9b"
  },
  {
    "url": "assets/js/100.47315472.js",
    "revision": "4a80dd1301f3108314317d37a3acadf0"
  },
  {
    "url": "assets/js/101.bb6e3575.js",
    "revision": "162bcee5efdd0d5499b7903ec6c8e7a9"
  },
  {
    "url": "assets/js/102.a7b0818a.js",
    "revision": "808b188b5f63af42b4144e75da1db7be"
  },
  {
    "url": "assets/js/103.cbd9abbe.js",
    "revision": "f60a30f6d147177f5213e5e1ffe76b3f"
  },
  {
    "url": "assets/js/104.a93dcda0.js",
    "revision": "18ee4eebf75bcde91423632818b52310"
  },
  {
    "url": "assets/js/105.e3eafbc3.js",
    "revision": "793eac61e06217b1ca99b4251fd7dbfe"
  },
  {
    "url": "assets/js/106.c82b2c60.js",
    "revision": "f19d69ca4080fab5761669ea70e497fc"
  },
  {
    "url": "assets/js/107.228feb21.js",
    "revision": "f9aa9175ca34cd758a83fd0d3c996edc"
  },
  {
    "url": "assets/js/108.e15d2c46.js",
    "revision": "0e34ed478190c6ffe88ec9da5022ee9a"
  },
  {
    "url": "assets/js/109.d29eba9d.js",
    "revision": "dca43b1268ce5221efa8db54e578932a"
  },
  {
    "url": "assets/js/11.1ce069c6.js",
    "revision": "c160518b08b8841508c4b81535dc07a0"
  },
  {
    "url": "assets/js/110.9207695b.js",
    "revision": "bdb1d66761da44261ac2a39212870ea3"
  },
  {
    "url": "assets/js/111.cca34d58.js",
    "revision": "d64af7c58357ad68911c55a790f8f4dc"
  },
  {
    "url": "assets/js/112.3012c390.js",
    "revision": "a9ae0b15fb8193201589e98b50391c1d"
  },
  {
    "url": "assets/js/113.293e2686.js",
    "revision": "54e2b5065e38233a1bb58ef1997b5091"
  },
  {
    "url": "assets/js/114.7f37a48e.js",
    "revision": "f8c40e7843b208df8a3a090383ab4c52"
  },
  {
    "url": "assets/js/115.b0d6af24.js",
    "revision": "febde8334f30dcd86b0bc3f2bc05afbd"
  },
  {
    "url": "assets/js/116.d87908f3.js",
    "revision": "c5ef47603e9b6b0df20e27ce93193763"
  },
  {
    "url": "assets/js/117.5285e52d.js",
    "revision": "d694ef78ac7dcc4332d0ae24d777203f"
  },
  {
    "url": "assets/js/118.a8c0f9cd.js",
    "revision": "c3a8cb8ba836038b3840e052d5b4bfcd"
  },
  {
    "url": "assets/js/119.a3d30f84.js",
    "revision": "fe67c4e8f3bc2ea02fb0026b4d9fefb4"
  },
  {
    "url": "assets/js/12.d362313a.js",
    "revision": "89362d5f7de0d741220cfbc56e5b9571"
  },
  {
    "url": "assets/js/120.03278467.js",
    "revision": "3a2fa4b02e4077714f879a19b7c91a0c"
  },
  {
    "url": "assets/js/121.0370cd9f.js",
    "revision": "74157291357bda65b22f55debcab1afd"
  },
  {
    "url": "assets/js/122.14a29568.js",
    "revision": "33d2bdbc9ffc56acc6bd6ea3e70eab4d"
  },
  {
    "url": "assets/js/123.f7af57ca.js",
    "revision": "8aad7b14fc2c976097d2d3215ca0d220"
  },
  {
    "url": "assets/js/124.7076a525.js",
    "revision": "611953e285f7d127ea2d3af1a4f5beb9"
  },
  {
    "url": "assets/js/125.619a46d4.js",
    "revision": "ba7b70ec45eb0e01435878adbc805c51"
  },
  {
    "url": "assets/js/126.1941fb33.js",
    "revision": "4b7dffceb997ad203638e46906d7c12d"
  },
  {
    "url": "assets/js/127.5d9725e2.js",
    "revision": "667c8b242e5367c65f63da7aed4cf67b"
  },
  {
    "url": "assets/js/128.4773e525.js",
    "revision": "cb304aa74e3495548402c971db9bbadc"
  },
  {
    "url": "assets/js/129.aadd769e.js",
    "revision": "dd63a930dccf775140ecc05c571a77ef"
  },
  {
    "url": "assets/js/13.98ee890a.js",
    "revision": "46c9fa90b26ab6de49998d8cbd4035f7"
  },
  {
    "url": "assets/js/130.7139e3a8.js",
    "revision": "c68247e5ed5035d7af134d7233543a12"
  },
  {
    "url": "assets/js/131.659e8353.js",
    "revision": "9e5c4c2ef09d7868552f2e41de55125e"
  },
  {
    "url": "assets/js/132.f59ed97e.js",
    "revision": "42f419c1472584a721838e17f6d22ad9"
  },
  {
    "url": "assets/js/133.00842dfc.js",
    "revision": "85321414eeac41fa647c97664d30904c"
  },
  {
    "url": "assets/js/134.5e9cc69a.js",
    "revision": "b00bb112fff992087ddc921e2af7ea59"
  },
  {
    "url": "assets/js/135.5f8cd6ae.js",
    "revision": "584dcb2861c2fdb1c4a4fbbe88423561"
  },
  {
    "url": "assets/js/136.8ef8d496.js",
    "revision": "d17c69d167d79799557653626ab3a681"
  },
  {
    "url": "assets/js/137.d098dce7.js",
    "revision": "469509dead94ff8b0b1d68225c283fdc"
  },
  {
    "url": "assets/js/138.817b6579.js",
    "revision": "f0fcb0bc04c80beca5df36653e38eefc"
  },
  {
    "url": "assets/js/139.f36fbc7f.js",
    "revision": "ec1d41863239e64ab162e651733f6b12"
  },
  {
    "url": "assets/js/14.7b41387a.js",
    "revision": "2eea1c89a5192b6cfd528b9a57614a7f"
  },
  {
    "url": "assets/js/140.7d61787b.js",
    "revision": "303661005e29b81383184d16abcdd0f0"
  },
  {
    "url": "assets/js/141.d40e0fce.js",
    "revision": "f170d8ea3b336de405e27e1ce4a1002a"
  },
  {
    "url": "assets/js/142.4c9c4486.js",
    "revision": "41d72ed85cb245cd7935635c22f51b72"
  },
  {
    "url": "assets/js/143.b33ad96c.js",
    "revision": "78dc9b0a3175f58d02a58d996f7d97f2"
  },
  {
    "url": "assets/js/144.69e3af3a.js",
    "revision": "79757acb7a01fc59b516ec8b249c08e1"
  },
  {
    "url": "assets/js/145.1ec6e6ce.js",
    "revision": "80c3ada67ac9645eca918e2a901e13e2"
  },
  {
    "url": "assets/js/146.249e0612.js",
    "revision": "e562f376714c27a21986ec7bd44ea88f"
  },
  {
    "url": "assets/js/147.9c47ecf0.js",
    "revision": "b1279d257a60a8ca3a5e282072b6f266"
  },
  {
    "url": "assets/js/148.36829ace.js",
    "revision": "f5c2881fd95a10a79fe4fe2a27ff2ab2"
  },
  {
    "url": "assets/js/149.5fba117d.js",
    "revision": "5d3aaa44ae29f840d357b36153851aff"
  },
  {
    "url": "assets/js/15.9a883141.js",
    "revision": "b9050eee497d53bd0131183e12dd9fce"
  },
  {
    "url": "assets/js/150.f1ae8f1e.js",
    "revision": "cc42b3af8d2c777c64ee2243cf16c99a"
  },
  {
    "url": "assets/js/151.bceb9078.js",
    "revision": "ea98da1b91b9a025d97c5803e33f7db9"
  },
  {
    "url": "assets/js/152.1da50560.js",
    "revision": "e679491136e3e8ced0172aab3c9cf8cb"
  },
  {
    "url": "assets/js/153.787e9807.js",
    "revision": "8408450ff36defc60ded136334d3817b"
  },
  {
    "url": "assets/js/154.45d5eab5.js",
    "revision": "688231d5c89662fa99b393547e22b20f"
  },
  {
    "url": "assets/js/155.019c4f54.js",
    "revision": "bb51db747df9d9d77356ba3dec58bfd4"
  },
  {
    "url": "assets/js/16.18f5cd90.js",
    "revision": "4d77e319c2ace5f26abbdb19cf92b9ed"
  },
  {
    "url": "assets/js/17.70d145cc.js",
    "revision": "5df9d0894c0bb0d045053e69e104bf37"
  },
  {
    "url": "assets/js/18.108a55f2.js",
    "revision": "9bfc6b1a6711c29dd0edc5c45ef6fdbd"
  },
  {
    "url": "assets/js/19.98c8ce5f.js",
    "revision": "85b9a116b6b51cb154cc7d8a4307d94e"
  },
  {
    "url": "assets/js/2.3d3c7f91.js",
    "revision": "b51182096d03c1e08f1e9a147a1d8c88"
  },
  {
    "url": "assets/js/20.e3c81fe2.js",
    "revision": "b5462ad14214085959832ad87aacce77"
  },
  {
    "url": "assets/js/21.e1ef2c19.js",
    "revision": "adb174a370a8ab7fa4b3d55a055cab69"
  },
  {
    "url": "assets/js/22.82a3117b.js",
    "revision": "7c437b923cb6cb09e00fe5e149e7258a"
  },
  {
    "url": "assets/js/23.1db2cef6.js",
    "revision": "1cb46c66cf9b83d522797bcabf123f5a"
  },
  {
    "url": "assets/js/24.f3b10dac.js",
    "revision": "4ece218cf94b92715da5897f0c3a60e5"
  },
  {
    "url": "assets/js/25.60a20430.js",
    "revision": "c93783fbe55accd60cce46c9303673f2"
  },
  {
    "url": "assets/js/26.a3e3223c.js",
    "revision": "e600ab5e6e352f99400bc74d4e99fb03"
  },
  {
    "url": "assets/js/27.7f785ea9.js",
    "revision": "93a8f033b01eb0b3303eabbbf449ff43"
  },
  {
    "url": "assets/js/28.13d820b8.js",
    "revision": "45503a302da0341da6810b34c116916a"
  },
  {
    "url": "assets/js/29.d0c768b4.js",
    "revision": "fac9be21b97bf64dac38129f4b89e8be"
  },
  {
    "url": "assets/js/3.39296715.js",
    "revision": "581fc2358af26dc3404599aa02997fd9"
  },
  {
    "url": "assets/js/30.3a7f2a65.js",
    "revision": "a99b2a695f55ea3422f79bba28bab7be"
  },
  {
    "url": "assets/js/31.6ecea4ea.js",
    "revision": "bfe33a24705e7c8d50d52858a83d7982"
  },
  {
    "url": "assets/js/32.55e33bae.js",
    "revision": "2603339481fdf6dedec0e7647115a4b3"
  },
  {
    "url": "assets/js/33.1e5f88c2.js",
    "revision": "d891460b07b6bb75c2ee522b16e254dc"
  },
  {
    "url": "assets/js/34.52f2515a.js",
    "revision": "df597a6029224ae1900c412a297869a9"
  },
  {
    "url": "assets/js/35.df2da8f2.js",
    "revision": "790d5a0ec918996092ad5a1526f2c968"
  },
  {
    "url": "assets/js/36.da203579.js",
    "revision": "b248a3364b3094f5d8414bdec6475661"
  },
  {
    "url": "assets/js/37.d9996bfa.js",
    "revision": "fccb0186172a89d4d01e7559d7cd5574"
  },
  {
    "url": "assets/js/38.11e8e01f.js",
    "revision": "3438c1a9e5ff9369ce5ef9718a65c0ec"
  },
  {
    "url": "assets/js/39.545746b7.js",
    "revision": "8924cdfeed4d27c320b7ce70c14b79bd"
  },
  {
    "url": "assets/js/4.1ae26aed.js",
    "revision": "ff21dbda869de0910f7df7d8f5972e4e"
  },
  {
    "url": "assets/js/40.8da5c074.js",
    "revision": "ce9932649ecd900c99c5409f794387a0"
  },
  {
    "url": "assets/js/41.9d1ddad0.js",
    "revision": "8a9074f65928f4fad350794a1cbad7bd"
  },
  {
    "url": "assets/js/42.0d356ac0.js",
    "revision": "20ca03f74783d6fcd0e5b753e6158fea"
  },
  {
    "url": "assets/js/43.31d34d33.js",
    "revision": "e59b3544939dc9a9dac14126341aef4f"
  },
  {
    "url": "assets/js/44.d02a1dd1.js",
    "revision": "a49d1e47ba6bc68c9246bffc4d6ed543"
  },
  {
    "url": "assets/js/45.ad875889.js",
    "revision": "44a5567c08a990be4765d3a5c8a002b8"
  },
  {
    "url": "assets/js/46.e6831be6.js",
    "revision": "488f70811fd1c057e4bf2e97c72a87e7"
  },
  {
    "url": "assets/js/47.43bb6612.js",
    "revision": "47496003471b7870a306e42ea8b03b4c"
  },
  {
    "url": "assets/js/48.5ff5daf6.js",
    "revision": "d4ac60e9f565730f8a4035f5a0dbf346"
  },
  {
    "url": "assets/js/49.4b91e6f7.js",
    "revision": "a559dc4dfa726e30d5864b7361c1f9ac"
  },
  {
    "url": "assets/js/5.d7a4f379.js",
    "revision": "2b1cd2540d5d2299e4115150629ac40a"
  },
  {
    "url": "assets/js/50.68ea868a.js",
    "revision": "20d1d9c12c428a188478e97c896f02bf"
  },
  {
    "url": "assets/js/51.eea65d76.js",
    "revision": "bd0acf0da46b0a0e6bf1ce0ea1e7eed8"
  },
  {
    "url": "assets/js/52.6930a4e5.js",
    "revision": "573059b153c0f5772937352610dccc9a"
  },
  {
    "url": "assets/js/53.a27f42e0.js",
    "revision": "852db6b4c81dfbc0dea2e6884798338d"
  },
  {
    "url": "assets/js/54.40979e1f.js",
    "revision": "8eee3a3a82da2eb2b6ef62ddfe4c2015"
  },
  {
    "url": "assets/js/55.2a5600fb.js",
    "revision": "961c30d415542113a5a9484ce9c2eba6"
  },
  {
    "url": "assets/js/56.9edda34a.js",
    "revision": "b25264d2c9514506a30e6897364f390a"
  },
  {
    "url": "assets/js/57.87302b0e.js",
    "revision": "4f671065e53b458e294f8aeeab3b9a26"
  },
  {
    "url": "assets/js/58.4775485b.js",
    "revision": "af54a3274d58a66b4f25258b26390fc6"
  },
  {
    "url": "assets/js/59.5acecbdf.js",
    "revision": "f994649ead6d024e89b089ddd0db3e79"
  },
  {
    "url": "assets/js/6.4c0be37d.js",
    "revision": "84471b1e7560d41ef012587ffe8282a1"
  },
  {
    "url": "assets/js/60.bcba7d58.js",
    "revision": "8e0eb6d43f7a09ed4f883261add5f6df"
  },
  {
    "url": "assets/js/61.24e4eedd.js",
    "revision": "13febb0f419fbc87000f1641324fd852"
  },
  {
    "url": "assets/js/62.add82f9c.js",
    "revision": "a2aa4f17c8934be215259bcdbb88526f"
  },
  {
    "url": "assets/js/63.d0f7c687.js",
    "revision": "03cbd0bd27a7910865691e7aa4df4654"
  },
  {
    "url": "assets/js/64.3ac8ac15.js",
    "revision": "e728643bc55ed836c31725888abf37cb"
  },
  {
    "url": "assets/js/65.603135ea.js",
    "revision": "a8db9d24aea7b1b135e72246aa62b03a"
  },
  {
    "url": "assets/js/66.349b8cc1.js",
    "revision": "3ba134e2fbb3efb00fb9e16db5f56cef"
  },
  {
    "url": "assets/js/67.d9b09a13.js",
    "revision": "f2a4a82e9ec7ff333006e6a3949fcfee"
  },
  {
    "url": "assets/js/68.da6a513d.js",
    "revision": "5510ba1e03a1bc4e56a79c87d747fbe1"
  },
  {
    "url": "assets/js/69.014b3881.js",
    "revision": "9189ad0a74ea115d6d7dcfa0287751ad"
  },
  {
    "url": "assets/js/7.1bafd912.js",
    "revision": "4133208ad387b423556cd644f93dec98"
  },
  {
    "url": "assets/js/70.96485d0d.js",
    "revision": "3bb7f2867e2e8395766c8f66ef8bc063"
  },
  {
    "url": "assets/js/71.a3c1c242.js",
    "revision": "995f1fd5d95ed11b54693584506ff331"
  },
  {
    "url": "assets/js/72.3d366b71.js",
    "revision": "e11e11c15f27decf0d3da862e0db66ea"
  },
  {
    "url": "assets/js/73.4a3e1f22.js",
    "revision": "fa6cad507bf76e08bdcfa467c92ee666"
  },
  {
    "url": "assets/js/74.d2a0fba0.js",
    "revision": "a0d5765a6e83f6e9123e1bd6b9a7367c"
  },
  {
    "url": "assets/js/75.8dd4572d.js",
    "revision": "796061b1d90dd20cad2add4358794b6b"
  },
  {
    "url": "assets/js/76.a1750c26.js",
    "revision": "3fa5d37a0df6abca4349e5be42819d9a"
  },
  {
    "url": "assets/js/77.3c09b2a0.js",
    "revision": "491e8258649000c77b3d6a931286c164"
  },
  {
    "url": "assets/js/78.1fc26170.js",
    "revision": "66729612064896b23b1f41eb43f0f752"
  },
  {
    "url": "assets/js/79.10500166.js",
    "revision": "daff7716acd109775cdcb8f0195e6454"
  },
  {
    "url": "assets/js/8.b13304b5.js",
    "revision": "65def5170fab06049ba43d75c9386c65"
  },
  {
    "url": "assets/js/80.b6d18026.js",
    "revision": "b22e0f64dd50f16cadff46afb5281569"
  },
  {
    "url": "assets/js/81.93680a77.js",
    "revision": "e3cc2aff9f9adccd0d244b2aa27c44dd"
  },
  {
    "url": "assets/js/82.5a4f7d80.js",
    "revision": "3ed576ebdbd10d881b18ad7228ebc5af"
  },
  {
    "url": "assets/js/83.eb5a7f19.js",
    "revision": "5aeffeafd4c96b57dd3bf152396d4aad"
  },
  {
    "url": "assets/js/84.1bcacf7f.js",
    "revision": "0a306d13be6946cab208460503906831"
  },
  {
    "url": "assets/js/85.eaa97bb6.js",
    "revision": "189263ac7b6e0bc6e294c8fa1f0ec2d9"
  },
  {
    "url": "assets/js/86.f05dc2f8.js",
    "revision": "670142b4631ee66ff53ca87c55904744"
  },
  {
    "url": "assets/js/87.05906ed0.js",
    "revision": "af1e32a85da552c5f4317d27644091ba"
  },
  {
    "url": "assets/js/88.6ab6d617.js",
    "revision": "3353c4c1a16372b31aad0ec29133298a"
  },
  {
    "url": "assets/js/89.38b73b6a.js",
    "revision": "a0623d39f52749801b71622f11d30e59"
  },
  {
    "url": "assets/js/9.81259956.js",
    "revision": "0ad203f49c525318b908f770acebcfa1"
  },
  {
    "url": "assets/js/90.b0fbb5f9.js",
    "revision": "b260256a7cc2407b19aa6e691a232a7f"
  },
  {
    "url": "assets/js/91.236c1fd8.js",
    "revision": "b2a321257196b442ad4a6d1ba71b272e"
  },
  {
    "url": "assets/js/92.39e03f6b.js",
    "revision": "06fee731bbfa5fb389fccc23b6603901"
  },
  {
    "url": "assets/js/93.fcb7f6fe.js",
    "revision": "8c9c76974c722ebc5cebaabcbc82fb2f"
  },
  {
    "url": "assets/js/94.c0934dba.js",
    "revision": "a78537bdb553a2326b00ab4dc5765cf0"
  },
  {
    "url": "assets/js/95.a04cec7c.js",
    "revision": "39cc6b0e8b1644c19972330266c03c6e"
  },
  {
    "url": "assets/js/96.a188ed7e.js",
    "revision": "5f9c5446e0a6460128a1bd9e4c37a153"
  },
  {
    "url": "assets/js/97.163adb9b.js",
    "revision": "9b2b2fc4a579e321e8666fbebb78c816"
  },
  {
    "url": "assets/js/98.d7620dc9.js",
    "revision": "0aca4781a9d5b2ce08f3fccbf242a4c1"
  },
  {
    "url": "assets/js/99.de5d6fd7.js",
    "revision": "4b9f91e812e99f7edbc0d6fe93a284b2"
  },
  {
    "url": "base/api/1.echarts.html",
    "revision": "c0da189e657a5a443c6e74234686522a"
  },
  {
    "url": "base/api/1.index.html",
    "revision": "7fc095ec8ed827e8bb30a0dccd200f09"
  },
  {
    "url": "base/api/2.echartsInstance.html",
    "revision": "ea278e7ac43c21820963d93520d15e72"
  },
  {
    "url": "base/api/3.action.html",
    "revision": "7e554ff55a253ae7ad7939b547b8175f"
  },
  {
    "url": "base/api/4.events.html",
    "revision": "a17deb7d0e54b9d922fad5da1e44f3bb"
  },
  {
    "url": "base/components/1.index.html",
    "revision": "14ec75e6552d43f78380f5846d84fc69"
  },
  {
    "url": "base/components/1.legend.html",
    "revision": "b318d513671f696d925ff0e445910076"
  },
  {
    "url": "base/components/2.grid.html",
    "revision": "91d68ba8bf42287a7a9f510ccbb3fe28"
  },
  {
    "url": "base/components/2.polar.html",
    "revision": "98ebfbfdf1e94b6dce13b0fd53f894d1"
  },
  {
    "url": "base/components/2.radiusAxis.html",
    "revision": "16c80723c4af58cfc3d9b0e5726695c9"
  },
  {
    "url": "base/components/2.xAxis.html",
    "revision": "200d6b6033f0a610bfbedf3943b283b5"
  },
  {
    "url": "base/components/2.yAxis.html",
    "revision": "1083fd163722aeaffc361b2ac99da5b3"
  },
  {
    "url": "base/components/3.angleAxis.html",
    "revision": "a934e437e48262ef854bb1735085fa50"
  },
  {
    "url": "base/components/4.radar.html",
    "revision": "2c3f4dc39a575277d980f4bcc7e7f5be"
  },
  {
    "url": "base/components/5.dataZoom.html",
    "revision": "4a71dbcb2408b29e33c097a647578797"
  },
  {
    "url": "base/components/6.visualMap.html",
    "revision": "02a73d6c55837ca02eb56aab80cf865d"
  },
  {
    "url": "base/components/7.tooltip.html",
    "revision": "240a2d088ed950164032cc31ca1a04a6"
  },
  {
    "url": "base/components/8.geo.html",
    "revision": "4aff7257aafb6ffe89bd507fcd7076ae"
  },
  {
    "url": "base/gl/1.index.html",
    "revision": "3a487516dfbf6e93cf0c2681ebe67bb3"
  },
  {
    "url": "base/gl/1.scatter3D.html",
    "revision": "3e1d51bfb96b1840d5cae2ca56283d6b"
  },
  {
    "url": "base/gl/10.flowGL.html",
    "revision": "8a036bd7a2113cb9b72cd18d7944c25d"
  },
  {
    "url": "base/gl/2.bar3D.html",
    "revision": "3614fa4c3417ab2381cd8e29a31f0c74"
  },
  {
    "url": "base/gl/3.line3D.html",
    "revision": "7b4ea52dcd2529b046a46183f410b961"
  },
  {
    "url": "base/gl/4.lines3D.html",
    "revision": "b68368266c7c894d6e7c279bce33c98c"
  },
  {
    "url": "base/gl/5.map3D.html",
    "revision": "03d8d8f005ef8e46ef7266fd40aaf21f"
  },
  {
    "url": "base/gl/6.surface.html",
    "revision": "60d4ed67d3d1c5b9bfa7ab8aec8b5c10"
  },
  {
    "url": "base/gl/7.polygons3D.html",
    "revision": "be0bef6dfe072b5731e1e1774925719d"
  },
  {
    "url": "base/gl/8.scatterGL.html",
    "revision": "8a3350080597e8a45c6b1c6577b8ce76"
  },
  {
    "url": "base/gl/9.graphGL.html",
    "revision": "18cb13d0c9061741756f3fa0572a08bd"
  },
  {
    "url": "base/series/1.index.html",
    "revision": "6db3c89b3e6234f38472edf098680a02"
  },
  {
    "url": "base/series/1.line.html",
    "revision": "5f974ac38a859ae2ef76447dbe798931"
  },
  {
    "url": "base/series/10.boxplot.html",
    "revision": "c230b3e6a21a06d95ffd16931768e9d4"
  },
  {
    "url": "base/series/11.candlestick.html",
    "revision": "c8f70024328e60a815769caa53ec07a5"
  },
  {
    "url": "base/series/12.heatmap.html",
    "revision": "ad3a54dc3e97a07a9d524bc5d937a5c3"
  },
  {
    "url": "base/series/13.map.html",
    "revision": "3e628cb7434ebaaff67ca649c76c1c21"
  },
  {
    "url": "base/series/14.parallel.html",
    "revision": "afb3565a9b559506f6804574cc0b68e9"
  },
  {
    "url": "base/series/15.lines.html",
    "revision": "9ef8e252798cf430e65783fd04a5bae2"
  },
  {
    "url": "base/series/16.graph.html",
    "revision": "65d55dcbc0bea876ba9a4c5f3a1d1639"
  },
  {
    "url": "base/series/17.sankey.html",
    "revision": "71751e3f9658f9acbcb01e57aabaaff3"
  },
  {
    "url": "base/series/18.funnel.html",
    "revision": "d3ca2af728b7c624ce5142da5fc58566"
  },
  {
    "url": "base/series/19.gauge.html",
    "revision": "e0e5df66fd1ba7d866d94493c76e0482"
  },
  {
    "url": "base/series/2.bar.html",
    "revision": "f2adf9770c4ec5a469fcd4cfedd9a9f4"
  },
  {
    "url": "base/series/20.pictorialBar.html",
    "revision": "a78ac28127527705f69d0f4ebe1fd9db"
  },
  {
    "url": "base/series/21.themeRiver.html",
    "revision": "342712619eda82cef87b1444ac4c9ad5"
  },
  {
    "url": "base/series/22.custom.html",
    "revision": "a5152089847be1659db5581d47af5b16"
  },
  {
    "url": "base/series/3.pie.html",
    "revision": "aa4c5ee2247abcda3878cce5c414ee2b"
  },
  {
    "url": "base/series/4.scatter.html",
    "revision": "331d35af5ab182c56c1f2cbfb57f4574"
  },
  {
    "url": "base/series/5.effectScatter.html",
    "revision": "785e220fd88101b46848da40dda67681"
  },
  {
    "url": "base/series/6.radar.html",
    "revision": "f310a4769a4b54a59ee18141d75057cb"
  },
  {
    "url": "base/series/7.tree.html",
    "revision": "0b3919fa5eab89f279cd9b22f71b173c"
  },
  {
    "url": "base/series/8.treemap.html",
    "revision": "fd6676fad0fec54054702df761e90658"
  },
  {
    "url": "base/series/9.sunburst.html",
    "revision": "af9e4378f0dc1e6415065d9d5c5c9c74"
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
    "revision": "f343379b47f986157f7a018c26dca8ac"
  },
  {
    "url": "mock/http.js",
    "revision": "a219140640bec4dfbe8f4fe88d351ed8"
  },
  {
    "url": "senior/1.micro/1.index.html",
    "revision": "0fc427ac8dbea9da73074c344f1cdd9c"
  },
  {
    "url": "senior/1.micro/1.singlespa.html",
    "revision": "00a75d2092a7183435d6f5395f2dedd8"
  },
  {
    "url": "senior/1.micro/1.singlespa2.html",
    "revision": "99c2fced5be979e73b253dc76cb69b0e"
  },
  {
    "url": "senior/1.micro/2.qiankun.html",
    "revision": "04e84ea6c19fa16c8d7f791b244ea9b0"
  },
  {
    "url": "senior/1.micro/2.qiankun2.html",
    "revision": "253b47cad37970e026ff4e923089e5a9"
  },
  {
    "url": "senior/1.micro/3.share.html",
    "revision": "2f6c8fb9f331958d601bcebfdee91c2c"
  },
  {
    "url": "senior/1.micro/4.dev.html",
    "revision": "d164092d38f17dd2fc05597c056e7499"
  },
  {
    "url": "senior/2.typescript/1.env.html",
    "revision": "b0fe192fad86ee4a9be23873811bf160"
  },
  {
    "url": "senior/2.typescript/1.index.html",
    "revision": "68825678cbd44ac38908750210ce74e4"
  },
  {
    "url": "senior/2.typescript/10.infer.html",
    "revision": "a685e9115d64199338cba7a7c81e204b"
  },
  {
    "url": "senior/2.typescript/11.overlapping.html",
    "revision": "97e723b560259ff37c3452ba0178e269"
  },
  {
    "url": "senior/2.typescript/12.condition.html",
    "revision": "f94edde6c0f4caeb433ef3b309c0f46f"
  },
  {
    "url": "senior/2.typescript/13.builtin.html",
    "revision": "faeb9fc76769e786741b4813e1d2f8ab"
  },
  {
    "url": "senior/2.typescript/14.package.html",
    "revision": "287d295e704ea3c9ec03ceba9b134d75"
  },
  {
    "url": "senior/2.typescript/15.custom.html",
    "revision": "484b8e80a5ac81d1106548a3fd6c779e"
  },
  {
    "url": "senior/2.typescript/16.unknown.html",
    "revision": "6c965ee453f381f43029a89dd05f132c"
  },
  {
    "url": "senior/2.typescript/17.module.html",
    "revision": "a54d78906fe979a3f7d8f1b3ede313fb"
  },
  {
    "url": "senior/2.typescript/18.statement.html",
    "revision": "dd69bc4be21e6c4c23db8abe97c48dae"
  },
  {
    "url": "senior/2.typescript/19.extend.html",
    "revision": "43c2f77b64ea489c75a22c33a850d139"
  },
  {
    "url": "senior/2.typescript/2.base.html",
    "revision": "8cd4ff1ef2bc270321321609e8725894"
  },
  {
    "url": "senior/2.typescript/3.deduction.html",
    "revision": "44064e72fd9f605ae71119d409af8ba4"
  },
  {
    "url": "senior/2.typescript/4.type.html",
    "revision": "b12dc03a27891d2047dfcf92b723263c"
  },
  {
    "url": "senior/2.typescript/5.class.html",
    "revision": "580d7ebd455a4011fdff335f2df2f701"
  },
  {
    "url": "senior/2.typescript/6.interface.html",
    "revision": "a13fd466cdd3628bc59f5a28e882b333"
  },
  {
    "url": "senior/2.typescript/7.generic.html",
    "revision": "0694b085bd6ad3cc8ba623e5568fca6b"
  },
  {
    "url": "senior/2.typescript/8.compatible.html",
    "revision": "2583ec3a64d1f6806975df2a7d3492dd"
  },
  {
    "url": "senior/2.typescript/9.protect.html",
    "revision": "6d6801cbac0ef65f82a71a87f4b595f0"
  },
  {
    "url": "senior/3.deploy/1.index.html",
    "revision": "03898a151e968c2de482ab052dae06e7"
  },
  {
    "url": "senior/3.deploy/1.local.html",
    "revision": "5d383a6cee1cd14bfc6e220fecde9d17"
  },
  {
    "url": "senior/3.deploy/2.gitlab.html",
    "revision": "05d0aff593ac0bc2db05f7934a57964c"
  },
  {
    "url": "senior/3.deploy/3.genkins.html",
    "revision": "7de7f2f923cffa8409e0ccdd819e7c18"
  },
  {
    "url": "senior/3.deploy/4.centos.html",
    "revision": "dd52c7e6288c3c1234146537a8fc3688"
  },
  {
    "url": "senior/3.deploy/5.nginx.html",
    "revision": "06dc4e9448375a3430ceab438116f32b"
  },
  {
    "url": "senior/4.component/1.button.html",
    "revision": "4e5ecd15360da5bb866193d8f4430446"
  },
  {
    "url": "senior/4.component/1.env.html",
    "revision": "f88bfa9c7c4bad65cb0e4005f4ad4615"
  },
  {
    "url": "senior/4.component/1.index.html",
    "revision": "ddd41b58233661ad76a3aa6ebd90d4a8"
  },
  {
    "url": "senior/4.component/1.recursion.html",
    "revision": "fcc39da68e83e1100d7d1fb5a435cbdb"
  },
  {
    "url": "senior/4.component/10.tree.html",
    "revision": "9e1ce0d958afa720de7007ebe783ca3c"
  },
  {
    "url": "senior/4.component/12.table.html",
    "revision": "5d78f0896bfc3c56167dee9691297fec"
  },
  {
    "url": "senior/4.component/13.publish.html",
    "revision": "b0cf5d455ea9f4daa11f8329f8f3b571"
  },
  {
    "url": "senior/4.component/2.dropdown.html",
    "revision": "d94d5846d7c4d9d8f782d3c4d118ad35"
  },
  {
    "url": "senior/4.component/3.dialog.html",
    "revision": "9cc114036cd2a99347fe5654d3e0b4e2"
  },
  {
    "url": "senior/4.component/3.form.html",
    "revision": "26dcefd6f2f09cd256de6dd53d759346"
  },
  {
    "url": "senior/4.component/4.input.html",
    "revision": "03e78bba9e050ba76e2945dbc9948799"
  },
  {
    "url": "senior/4.component/4.render.html",
    "revision": "a93a6b9e34576ca65e9fbf4636590e51"
  },
  {
    "url": "senior/4.component/5.checkBox.html",
    "revision": "1b1f00c48fbbb90f2dd7c40a9d430d5f"
  },
  {
    "url": "senior/4.component/6.cascader.html",
    "revision": "c791f74547db6aa53c9bb4dea18883e3"
  },
  {
    "url": "senior/4.component/7.date.html",
    "revision": "40bdb93d64961876599d9d804b4d32e9"
  },
  {
    "url": "senior/4.component/8.dispaly.html",
    "revision": "4b56b4b25fffbd9090a3ef1f8b0184ef"
  },
  {
    "url": "senior/4.component/9.alert.html",
    "revision": "614cf8f689916795cfe0d120fd92f1e9"
  },
  {
    "url": "senior/4.component/9.dynamics.html",
    "revision": "bcfedd5b880de225cf284fa52c1d2bac"
  },
  {
    "url": "source/vue-cli2.x/1.index.html",
    "revision": "2f12df03e1809a6732999a3372f5cffc"
  },
  {
    "url": "source/vue-cli3.x/1.index.html",
    "revision": "501211fe1f51f6f0c3dd6d3f24f233ac"
  },
  {
    "url": "source/vue-router3.x/1.index.html",
    "revision": "10995526a87410ede3eaf468307b9a94"
  },
  {
    "url": "source/vue-router3.x/2.origin.html",
    "revision": "56191098548229565ea5f92b8660c652"
  },
  {
    "url": "source/vue-router4.x/1.index.html",
    "revision": "030c858ec137585901b21578f325ac14"
  },
  {
    "url": "source/vue2.x/1.index.html",
    "revision": "14a3d1d6794975d00c441d7699fa0cb8"
  },
  {
    "url": "source/vue2.x/10.optimize.html",
    "revision": "6bad792c569525c4077ed8fb2c47cf2a"
  },
  {
    "url": "source/vue2.x/11.gencode.html",
    "revision": "a38fd7b886e6d7be7b4e9afda67c995a"
  },
  {
    "url": "source/vue2.x/12.mount.html",
    "revision": "f454769a83fc8e76e868a470b7b783e4"
  },
  {
    "url": "source/vue2.x/13._render.html",
    "revision": "206e6fb8f37f4cbb896ea4fdaee28320"
  },
  {
    "url": "source/vue2.x/14._update.html",
    "revision": "040565ef02478b130f086d8b75f9fdb0"
  },
  {
    "url": "source/vue2.x/2.initGlobalAPI.html",
    "revision": "96363a66ebb323d723233dadf42434c2"
  },
  {
    "url": "source/vue2.x/3.initMixin.html",
    "revision": "338a233ced301b696d25dae2ab0c11c5"
  },
  {
    "url": "source/vue2.x/4.stateMixin.html",
    "revision": "8cf93f67ed27d49db6146b4e54d881a1"
  },
  {
    "url": "source/vue2.x/5.eventsMixin.html",
    "revision": "58114be0628dffbf329226d71a38c679"
  },
  {
    "url": "source/vue2.x/6.lifecycleMixin.html",
    "revision": "1edd48dd116a7200d45d9a1f0a44bc93"
  },
  {
    "url": "source/vue2.x/7.renderMixin.html",
    "revision": "547282216f647a992c2be26aefbc1ebe"
  },
  {
    "url": "source/vue2.x/8.mount.html",
    "revision": "c2aebceab536a78622a0f6e91f844707"
  },
  {
    "url": "source/vue2.x/9.ast.html",
    "revision": "c215f34df5ecdba23eb7188d32feb398"
  },
  {
    "url": "source/vue3.x/1.index.html",
    "revision": "6bcb59667aaa1af5091c4eddce4b6af1"
  },
  {
    "url": "source/vue3.x/10.optimize.html",
    "revision": "43cf32ab68e08c67e7c880ee99d0eeae"
  },
  {
    "url": "source/vue3.x/11.gencode.html",
    "revision": "646858cb50c1648e2205bc13bbc409fc"
  },
  {
    "url": "source/vue3.x/12.mount.html",
    "revision": "7d3e66d28773a812a7ecc2266b613ca5"
  },
  {
    "url": "source/vue3.x/13._render.html",
    "revision": "9269a7bc1797f3b637d9769c94c9be89"
  },
  {
    "url": "source/vue3.x/14._update.html",
    "revision": "228c3460fc3f5aaba9323061587f5022"
  },
  {
    "url": "source/vue3.x/2.initGlobalAPI.html",
    "revision": "489f91118d03b117bb6921d073bed673"
  },
  {
    "url": "source/vue3.x/3.initMixin.html",
    "revision": "4814c6e7c2d8e4346b981d3d5ca91e6d"
  },
  {
    "url": "source/vue3.x/4.stateMixin.html",
    "revision": "f163000a36d29a02e4e69b7a72c26206"
  },
  {
    "url": "source/vue3.x/5.eventsMixin.html",
    "revision": "e1f7f43fb3c8ddfcd229ba2cef80a9d5"
  },
  {
    "url": "source/vue3.x/6.lifecycleMixin.html",
    "revision": "cbe19975aee5d916604f723e47d4178e"
  },
  {
    "url": "source/vue3.x/7.renderMixin.html",
    "revision": "5d153af2a9735a340fa89ccecd39fa04"
  },
  {
    "url": "source/vue3.x/8.mount.html",
    "revision": "5b5de06a95b6a2f75b9191a1bcca32c4"
  },
  {
    "url": "source/vue3.x/9.ast.html",
    "revision": "298d391e09269a05a8cf93187efb79e5"
  },
  {
    "url": "source/vuex3.x/1.index.html",
    "revision": "4857e8e7752e0a0eb2cecbc34a890348"
  },
  {
    "url": "source/vuex3.x/2.use.html",
    "revision": "c16c34644b94fafab34de0b3065b5807"
  },
  {
    "url": "source/vuex3.x/3.origin.html",
    "revision": "483b462660ec9e229ff20b35385845e6"
  },
  {
    "url": "source/vuex4.x/1.index.html",
    "revision": "235ab67feebe7acbb59d78fc6a12ab87"
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
