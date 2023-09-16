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
    "revision": "e42a79237c4b5c5e698477f632d10fe8"
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
    "url": "assets/js/125.fad1be34.js",
    "revision": "3c51f8774f7920d4a1e7eb0ca92690c0"
  },
  {
    "url": "assets/js/126.ebe241de.js",
    "revision": "1e76ed696a35a07964e4ef0a36c2a47e"
  },
  {
    "url": "assets/js/127.e7d6bbaa.js",
    "revision": "274c14684c600393895cf5871b691af9"
  },
  {
    "url": "assets/js/128.4773e525.js",
    "revision": "cb304aa74e3495548402c971db9bbadc"
  },
  {
    "url": "assets/js/129.5c03a1b1.js",
    "revision": "3dd541ba41e7d17309bfc66a9c39525a"
  },
  {
    "url": "assets/js/13.98ee890a.js",
    "revision": "46c9fa90b26ab6de49998d8cbd4035f7"
  },
  {
    "url": "assets/js/130.5df02cc2.js",
    "revision": "13eb52972782907ce1563037a3a478ab"
  },
  {
    "url": "assets/js/131.3d47d675.js",
    "revision": "5f88674de3387e22387a1a82c3089e68"
  },
  {
    "url": "assets/js/132.fd53d6e2.js",
    "revision": "f152ffc8152f971f4bdfbf7c1f654ac3"
  },
  {
    "url": "assets/js/133.1f493a31.js",
    "revision": "705eac9bf046aa473127a1b2ee39ee6c"
  },
  {
    "url": "assets/js/134.3c7cd4c2.js",
    "revision": "06680fdfcdd109c63097c7b25f075465"
  },
  {
    "url": "assets/js/135.b39eb6c7.js",
    "revision": "382262c2b6b4fca5bef36929769efcef"
  },
  {
    "url": "assets/js/136.4ced9153.js",
    "revision": "c444b0f7891d6b4b19996dff1fe8e747"
  },
  {
    "url": "assets/js/137.c272ce3c.js",
    "revision": "936ea9b1f4da8af313e7f68e51bfd176"
  },
  {
    "url": "assets/js/138.738e9f6e.js",
    "revision": "394953408e0c214d3b2bdfa84a1600b1"
  },
  {
    "url": "assets/js/139.891ab7c1.js",
    "revision": "6abb2edf8515458ccba428a4178fff7c"
  },
  {
    "url": "assets/js/14.7b41387a.js",
    "revision": "2eea1c89a5192b6cfd528b9a57614a7f"
  },
  {
    "url": "assets/js/140.e75ad028.js",
    "revision": "e9f1fc9c31297e8e3817a3b3e23bbc70"
  },
  {
    "url": "assets/js/141.8fd6e8ba.js",
    "revision": "604fc808f231f19d26c7217caa4d7c85"
  },
  {
    "url": "assets/js/142.06e678c4.js",
    "revision": "e39ba4b637f3dae0873cfbbdbaede4b4"
  },
  {
    "url": "assets/js/143.b33ad96c.js",
    "revision": "78dc9b0a3175f58d02a58d996f7d97f2"
  },
  {
    "url": "assets/js/144.0bc3737a.js",
    "revision": "3fd33e6f6f92b2b4ea7d91fbe8b2aba4"
  },
  {
    "url": "assets/js/145.c2e01b60.js",
    "revision": "a930db5e63f5be8521fcb1f3ed79b057"
  },
  {
    "url": "assets/js/146.780f1e0e.js",
    "revision": "62a345035073b9c2c1050fdb0cd49351"
  },
  {
    "url": "assets/js/147.a886e857.js",
    "revision": "d755a4b8b82c008b0e3d75c66298e835"
  },
  {
    "url": "assets/js/148.f33659f1.js",
    "revision": "443c7c60f46e7227a4e8e892c6dba765"
  },
  {
    "url": "assets/js/149.15dd5bbf.js",
    "revision": "2479700f0b7e518b31960956f7198e54"
  },
  {
    "url": "assets/js/15.9a883141.js",
    "revision": "b9050eee497d53bd0131183e12dd9fce"
  },
  {
    "url": "assets/js/150.8f7888c8.js",
    "revision": "7ffdbe6248f47c209100e95ae5170197"
  },
  {
    "url": "assets/js/151.80a40ba8.js",
    "revision": "f6788884931d1b59cee8127cc9222a57"
  },
  {
    "url": "assets/js/152.363c32e3.js",
    "revision": "80d084e5450c363a60d38254712d3cba"
  },
  {
    "url": "assets/js/153.74e7c97b.js",
    "revision": "18718510715725e15231c7c3286ddd1c"
  },
  {
    "url": "assets/js/154.6ee31e53.js",
    "revision": "73e0ec6d9e9d241ff65c884e96322e8f"
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
    "url": "assets/js/37.e707548b.js",
    "revision": "6647cd625c536c6db3735b1707b82d8a"
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
    "url": "assets/js/40.25d25369.js",
    "revision": "7bcba3d795b7aad200dac4cf65236785"
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
    "url": "assets/js/49.de28454c.js",
    "revision": "1f3959e7515ccde44f5851103dc1ceb9"
  },
  {
    "url": "assets/js/5.6b5c109f.js",
    "revision": "37fd284cfff1bd6d59535a8f9cd884ac"
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
    "url": "assets/js/89.01f0694d.js",
    "revision": "599d50350c7dd840b36637a85e7e27f4"
  },
  {
    "url": "assets/js/9.81259956.js",
    "revision": "0ad203f49c525318b908f770acebcfa1"
  },
  {
    "url": "assets/js/90.acfaa473.js",
    "revision": "79174ee43cf18f749c6eca6775a7574e"
  },
  {
    "url": "assets/js/91.89ae7391.js",
    "revision": "2a0f94f67f7e5d41aa455e49224778bf"
  },
  {
    "url": "assets/js/92.e1d16ff7.js",
    "revision": "4f0061b5e6c4c9d99b5bd8086633370b"
  },
  {
    "url": "assets/js/93.4bb5d071.js",
    "revision": "e33565fff2b91fa0e80b3ee465cb54d8"
  },
  {
    "url": "assets/js/94.effd8b4f.js",
    "revision": "847252bd37370d59d1dfea4154bd6add"
  },
  {
    "url": "assets/js/95.300cf29f.js",
    "revision": "df0fb791a47ebed6676408b09baffc22"
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
    "revision": "ddd645addb16bd26c37d840a3e3e34cc"
  },
  {
    "url": "base/api/1.index.html",
    "revision": "69c3d30967a1cac25bd2a91853e298f0"
  },
  {
    "url": "base/api/2.echartsInstance.html",
    "revision": "db33e23f6737f8f026d5fc456da3342b"
  },
  {
    "url": "base/api/3.action.html",
    "revision": "1238864627469e7d15d7fc52978b9580"
  },
  {
    "url": "base/api/4.events.html",
    "revision": "24d637c7608c38de1525e21e7033d60c"
  },
  {
    "url": "base/components/1.index.html",
    "revision": "0a540b8b07f2c8c05a310b4d22a63bae"
  },
  {
    "url": "base/components/1.legend.html",
    "revision": "8f4cf71790c3b507d9897659b7af9f8d"
  },
  {
    "url": "base/components/2.grid.html",
    "revision": "6ddca335bae3c2fdf6d93581d5354065"
  },
  {
    "url": "base/components/2.polar.html",
    "revision": "41d9355b0e43e2cd994cfd9160d70859"
  },
  {
    "url": "base/components/2.radiusAxis.html",
    "revision": "1553247ab99fee6682a16b0422caeb5e"
  },
  {
    "url": "base/components/2.xAxis.html",
    "revision": "d5a45721eb1b03ee5f347baf1f0d376d"
  },
  {
    "url": "base/components/2.yAxis.html",
    "revision": "134602f33d3ad2ba1812ef93e51d55b2"
  },
  {
    "url": "base/components/3.angleAxis.html",
    "revision": "516eaf7acf4f42daa025d1a9d334f33e"
  },
  {
    "url": "base/components/4.radar.html",
    "revision": "4d19e55161713af3d32797ffb4fa0718"
  },
  {
    "url": "base/components/5.dataZoom.html",
    "revision": "26da6aea9464fc09c18c68bd9b460a97"
  },
  {
    "url": "base/components/6.visualMap.html",
    "revision": "b495d0881e068cd9f9a7ae899dbf8741"
  },
  {
    "url": "base/components/7.tooltip.html",
    "revision": "2a31ab428cdea3d79f17b1405436b759"
  },
  {
    "url": "base/components/8.geo.html",
    "revision": "1e23b88452093501a04f9a1dbff56fb6"
  },
  {
    "url": "base/gl/1.index.html",
    "revision": "ef3c7f0ca7f9f374d863bacdb51b980f"
  },
  {
    "url": "base/gl/1.scatter3D.html",
    "revision": "a8383fee757e660495cdb1632d6e5520"
  },
  {
    "url": "base/gl/10.flowGL.html",
    "revision": "b3174bbe0de438c6e1e8d7ffb3d16d6b"
  },
  {
    "url": "base/gl/2.bar3D.html",
    "revision": "246ecf14a4c002c1f3f04fb4f158013b"
  },
  {
    "url": "base/gl/3.line3D.html",
    "revision": "d2418950eeec581e5b8f7cdb02432ce7"
  },
  {
    "url": "base/gl/4.lines3D.html",
    "revision": "e5cda34b73493cd94fb94afa75ab68a1"
  },
  {
    "url": "base/gl/5.map3D.html",
    "revision": "339181dc22d5f98562570a6b6557c313"
  },
  {
    "url": "base/gl/6.surface.html",
    "revision": "fbf0e7b3ab717d74e3a6abe6db979b01"
  },
  {
    "url": "base/gl/7.polygons3D.html",
    "revision": "457acee82bad3a74228e1f7d55e5e9be"
  },
  {
    "url": "base/gl/8.scatterGL.html",
    "revision": "61b0abea3fe53e8ad1d3706823cc1de0"
  },
  {
    "url": "base/gl/9.graphGL.html",
    "revision": "dfdebd75ad6d4996cd85690c4a770d1b"
  },
  {
    "url": "base/series/1.index.html",
    "revision": "b7e4383ae0ec0e39a75ea0e8455a8352"
  },
  {
    "url": "base/series/1.line.html",
    "revision": "97294574e63a7d2f754d979ebbdb5803"
  },
  {
    "url": "base/series/10.boxplot.html",
    "revision": "f18d24755fbf18941239908d7f175612"
  },
  {
    "url": "base/series/11.candlestick.html",
    "revision": "618ba44f744602e517deff68269f6944"
  },
  {
    "url": "base/series/12.heatmap.html",
    "revision": "1bb7e7dfaa230fa8b325ac7ccb82f0f7"
  },
  {
    "url": "base/series/13.map.html",
    "revision": "d355fc5cabe6b3f4ed988135d46c8dc3"
  },
  {
    "url": "base/series/14.parallel.html",
    "revision": "9ccd98ba0c65c6b5955e220dee43cf46"
  },
  {
    "url": "base/series/15.lines.html",
    "revision": "f15468292d88c0a2182d6639dbb7c650"
  },
  {
    "url": "base/series/16.graph.html",
    "revision": "d45c307d12a300974e15c2c1914edce3"
  },
  {
    "url": "base/series/17.sankey.html",
    "revision": "2b1dfebcacc56f7bd0009d93d01fd66e"
  },
  {
    "url": "base/series/18.funnel.html",
    "revision": "ba202bcd9fc3110ee79624e1d1d30c8c"
  },
  {
    "url": "base/series/19.gauge.html",
    "revision": "5b569b5b08f87d23e507dc350b7a4040"
  },
  {
    "url": "base/series/2.bar.html",
    "revision": "e6e1756fac7c2e46af592e89bf020215"
  },
  {
    "url": "base/series/20.pictorialBar.html",
    "revision": "ae1ac31a5dafdf63eddaa58602f267a8"
  },
  {
    "url": "base/series/21.themeRiver.html",
    "revision": "150fc90ef96b169f1d3d86ae0707e2b8"
  },
  {
    "url": "base/series/22.custom.html",
    "revision": "8ad9a8f72305ed85aee69345e6ae178e"
  },
  {
    "url": "base/series/3.pie.html",
    "revision": "4ff97a0dcc36bdb0d8620763f5188acd"
  },
  {
    "url": "base/series/4.scatter.html",
    "revision": "f55b752d281a01037c7ac27156c17a22"
  },
  {
    "url": "base/series/5.effectScatter.html",
    "revision": "c75d95852e9841b18f71f2ee6bbfd076"
  },
  {
    "url": "base/series/6.radar.html",
    "revision": "d05f0f38313db1552d1b44778b2e1f3d"
  },
  {
    "url": "base/series/7.tree.html",
    "revision": "06166dfa5083d02235978dd0d6978391"
  },
  {
    "url": "base/series/8.treemap.html",
    "revision": "301a1fd35742e3af6e1270aa078fc760"
  },
  {
    "url": "base/series/9.sunburst.html",
    "revision": "37feca5b2dbebae415fcf1b06d38701b"
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
    "revision": "a65a97dace3633cd09c98d428c1bf82c"
  },
  {
    "url": "mock/http.js",
    "revision": "a219140640bec4dfbe8f4fe88d351ed8"
  },
  {
    "url": "senior/1.micro/1.index.html",
    "revision": "7031e891f1d027d2a0b0c3f1aba4d890"
  },
  {
    "url": "senior/1.micro/1.singlespa.html",
    "revision": "7e904188f193b699be7abf41b222b52a"
  },
  {
    "url": "senior/1.micro/1.singlespa2.html",
    "revision": "6ca528f11f881efaa63153816fd41077"
  },
  {
    "url": "senior/1.micro/2.qiankun.html",
    "revision": "0a47146df55104f3dc3d94e1b90e924b"
  },
  {
    "url": "senior/1.micro/2.qiankun2.html",
    "revision": "9a991acedd9f87226763435cb5bdade8"
  },
  {
    "url": "senior/1.micro/3.share.html",
    "revision": "c5fad14e4e01c3801ff6b2d2f6e38aa2"
  },
  {
    "url": "senior/1.micro/4.dev.html",
    "revision": "4cd373638a3c6eeb3bad61bec4b8a413"
  },
  {
    "url": "senior/2.typescript/1.env.html",
    "revision": "8b5f34825f00a792a7f31c8d9f629ff5"
  },
  {
    "url": "senior/2.typescript/1.index.html",
    "revision": "d7c4c896d1449b824b4d4b0d79863877"
  },
  {
    "url": "senior/2.typescript/10.infer.html",
    "revision": "5a5ab86a62ba993d5942ca56998a1ed4"
  },
  {
    "url": "senior/2.typescript/11.overlapping.html",
    "revision": "6fe4b6093090b2342da1cc0ee1067501"
  },
  {
    "url": "senior/2.typescript/12.condition.html",
    "revision": "2431f9fb7ccb7143715809c5c0b449cb"
  },
  {
    "url": "senior/2.typescript/13.builtin.html",
    "revision": "c298aba5e302bf7c995e1fa989f4893a"
  },
  {
    "url": "senior/2.typescript/14.package.html",
    "revision": "68b3578e5dca2a206ac9a58ad949c5f7"
  },
  {
    "url": "senior/2.typescript/15.custom.html",
    "revision": "ae2acd35957067370b0568b530ce2232"
  },
  {
    "url": "senior/2.typescript/16.unknown.html",
    "revision": "bcd1ba26e8bace0183ac843786aa554b"
  },
  {
    "url": "senior/2.typescript/17.module.html",
    "revision": "49158d01b475f9ad30190dea1833d2ba"
  },
  {
    "url": "senior/2.typescript/18.statement.html",
    "revision": "2c95fc3715ca9ecf930fbe1e64c4c9d3"
  },
  {
    "url": "senior/2.typescript/19.extend.html",
    "revision": "a9e48651ab0c5fee7913421b1c3876c3"
  },
  {
    "url": "senior/2.typescript/2.base.html",
    "revision": "d0e57d12f787e6458eaa5616328aee0c"
  },
  {
    "url": "senior/2.typescript/3.deduction.html",
    "revision": "2d991c4b7559b171a9a2035d7ee24557"
  },
  {
    "url": "senior/2.typescript/4.type.html",
    "revision": "aaa970774ae5b2a11b1080121e253772"
  },
  {
    "url": "senior/2.typescript/5.class.html",
    "revision": "9fe3cf984a68fe87f1bc02281d32019b"
  },
  {
    "url": "senior/2.typescript/6.interface.html",
    "revision": "6c9504393445777fa315d5fe4014960c"
  },
  {
    "url": "senior/2.typescript/7.generic.html",
    "revision": "fcdc41b2c4e3362e6c59c44c6292dc45"
  },
  {
    "url": "senior/2.typescript/8.compatible.html",
    "revision": "a17316adc7f6126a0df77ce1e184b546"
  },
  {
    "url": "senior/2.typescript/9.protect.html",
    "revision": "3e0bb71a77c2bb1604b123bbb56cff73"
  },
  {
    "url": "senior/3.deploy/1.index.html",
    "revision": "a394c2de0e32430a6a749dfd84bf0dc7"
  },
  {
    "url": "senior/3.deploy/1.local.html",
    "revision": "458aebc68b8e51ade936b4f1b71e4a67"
  },
  {
    "url": "senior/3.deploy/2.gitlab.html",
    "revision": "bf25179aa0b8996c21cadca53a2c0b43"
  },
  {
    "url": "senior/3.deploy/3.genkins.html",
    "revision": "4d617115bdaf067de2ab522993230d97"
  },
  {
    "url": "senior/3.deploy/4.centos.html",
    "revision": "389ea52aa6ecc4265b786068e27ec32c"
  },
  {
    "url": "senior/3.deploy/5.nginx.html",
    "revision": "006628ab5e5e3a1cdf88c7990b5a13fe"
  },
  {
    "url": "senior/4.component/1.button.html",
    "revision": "a71335c483ee41ec5fc7895b59eb3b60"
  },
  {
    "url": "senior/4.component/1.env.html",
    "revision": "68b0b9b45d7020f4001115bbce0a72b0"
  },
  {
    "url": "senior/4.component/1.index.html",
    "revision": "79a88ca562265788a5fec9959ca4e38c"
  },
  {
    "url": "senior/4.component/1.recursion.html",
    "revision": "81ffc9b815035d273539621a1737ae02"
  },
  {
    "url": "senior/4.component/10.tree.html",
    "revision": "ddd0c806e3ae102b2d1377a9272f9979"
  },
  {
    "url": "senior/4.component/12.table.html",
    "revision": "29739d848bf66089819c7a6b458b7892"
  },
  {
    "url": "senior/4.component/13.publish.html",
    "revision": "951d3dc3cadab45cf71ba0d9ac2eda5b"
  },
  {
    "url": "senior/4.component/2.dropdown.html",
    "revision": "011f53af88b06613235ac32fbe338f4c"
  },
  {
    "url": "senior/4.component/3.dialog.html",
    "revision": "9158a4c3f2cd6a2f373be1b1a933618e"
  },
  {
    "url": "senior/4.component/3.form.html",
    "revision": "b1eb8fb40586117c85238b3059c04c26"
  },
  {
    "url": "senior/4.component/4.input.html",
    "revision": "4889c80734683ace55cc2dc701b496e3"
  },
  {
    "url": "senior/4.component/4.render.html",
    "revision": "e0b3f158466266d60764244a300e8118"
  },
  {
    "url": "senior/4.component/5.checkBox.html",
    "revision": "3781476a49ef2f5aaa3744f6a4a71311"
  },
  {
    "url": "senior/4.component/6.cascader.html",
    "revision": "031ff94c6bfeef1661e930b2a62216e3"
  },
  {
    "url": "senior/4.component/7.date.html",
    "revision": "2be3f8c5dc3c12f8e5ff4e0e1683cef8"
  },
  {
    "url": "senior/4.component/8.dispaly.html",
    "revision": "a20abf69a011043b7644de999b18e30e"
  },
  {
    "url": "senior/4.component/9.alert.html",
    "revision": "8fd72dd68b6fda80781dd8ed26d4aed7"
  },
  {
    "url": "senior/4.component/9.dynamics.html",
    "revision": "c5813a1d42aa0c532eb1db1bc3e0eafc"
  },
  {
    "url": "source/vue-cli2.x/1.index.html",
    "revision": "887ab68bf9652bcb51073d59782427bd"
  },
  {
    "url": "source/vue-cli3.x/1.index.html",
    "revision": "7c0046a2a7bd8b71a4ef6de790970949"
  },
  {
    "url": "source/vue-router3.x/1.index.html",
    "revision": "12f092d2f2c97a7ec7d71c5622400d62"
  },
  {
    "url": "source/vue-router3.x/2.origin.html",
    "revision": "cde4a100fed453368e15c28a8b9c0e90"
  },
  {
    "url": "source/vue-router4.x/1.index.html",
    "revision": "c596bc6ee1109065a5d8b18c6477e68d"
  },
  {
    "url": "source/vue2.x/1.index.html",
    "revision": "f6daaa193ab3f93e5793546410c5afa9"
  },
  {
    "url": "source/vue2.x/10.optimize.html",
    "revision": "82aeb8246482bd226a7f8f1e94217474"
  },
  {
    "url": "source/vue2.x/11.gencode.html",
    "revision": "1df2d132252b4ca39fd187c8109a7476"
  },
  {
    "url": "source/vue2.x/12.mount.html",
    "revision": "d23794c385ab73e243abc3bec347af83"
  },
  {
    "url": "source/vue2.x/13._render.html",
    "revision": "ae753f2269e29c7b9a4c77124e577ae2"
  },
  {
    "url": "source/vue2.x/14._update.html",
    "revision": "13856114e6d123f1891b6fa1a60f427d"
  },
  {
    "url": "source/vue2.x/2.initGlobalAPI.html",
    "revision": "c7bbffaeadb413690009b2ec8b3c565b"
  },
  {
    "url": "source/vue2.x/3.initMixin.html",
    "revision": "94fa474d8322851a43e633494c2cad84"
  },
  {
    "url": "source/vue2.x/4.stateMixin.html",
    "revision": "8754c0e2453622865ae926606aa46875"
  },
  {
    "url": "source/vue2.x/5.eventsMixin.html",
    "revision": "d979cefbc4d9676e39abd430b13e5f71"
  },
  {
    "url": "source/vue2.x/6.lifecycleMixin.html",
    "revision": "6cb6b4ba9f31ea78d30eafe51cb4c2f7"
  },
  {
    "url": "source/vue2.x/7.renderMixin.html",
    "revision": "60295c57bb997600c633e653c8588f70"
  },
  {
    "url": "source/vue2.x/8.mount.html",
    "revision": "cab300a08dd80af62fe8c87e5cb63601"
  },
  {
    "url": "source/vue2.x/9.ast.html",
    "revision": "ffd38ee277b488745b3d235be726ed27"
  },
  {
    "url": "source/vue3.x/1.index.html",
    "revision": "b9d929441a0aaf9c3be82ad399f2b71a"
  },
  {
    "url": "source/vue3.x/10.optimize.html",
    "revision": "0dc708fc04dbf394396702a8015f85e6"
  },
  {
    "url": "source/vue3.x/11.gencode.html",
    "revision": "0500e95e9d4b0a2d090eb8e0b7e37428"
  },
  {
    "url": "source/vue3.x/12.mount.html",
    "revision": "3647db5bcd3c9fe01815ddf225735f5d"
  },
  {
    "url": "source/vue3.x/13._render.html",
    "revision": "4f832183f9595a16864fd767abf53e11"
  },
  {
    "url": "source/vue3.x/14._update.html",
    "revision": "10e93b9822b564013a830d11c4c7a37a"
  },
  {
    "url": "source/vue3.x/2.initGlobalAPI.html",
    "revision": "18a89ad4ef89e767717839432aba7a44"
  },
  {
    "url": "source/vue3.x/3.initMixin.html",
    "revision": "b325435facee9b9610bb59cc54047fca"
  },
  {
    "url": "source/vue3.x/4.stateMixin.html",
    "revision": "591e6184d4bbe77125a82be367e1b583"
  },
  {
    "url": "source/vue3.x/5.eventsMixin.html",
    "revision": "9f2aec3addd60c6da670965cbc4b28b4"
  },
  {
    "url": "source/vue3.x/6.lifecycleMixin.html",
    "revision": "ce7a7f3eb30947986ec5850a54e1a63c"
  },
  {
    "url": "source/vue3.x/7.renderMixin.html",
    "revision": "8838ce0d2dc7836d7b797d6e166b6f23"
  },
  {
    "url": "source/vue3.x/8.mount.html",
    "revision": "6fbbe9ce6bbca749b113d2f93fdc9b05"
  },
  {
    "url": "source/vue3.x/9.ast.html",
    "revision": "e2261e94a89b964e76bdbe2c3cce44ee"
  },
  {
    "url": "source/vuex3.x/1.index.html",
    "revision": "aec5e8f745a002a9194e41b65f39d269"
  },
  {
    "url": "source/vuex3.x/2.use.html",
    "revision": "7dc0d0ca56b0d54e63e62731cd122c2b"
  },
  {
    "url": "source/vuex3.x/3.origin.html",
    "revision": "c4cfd10d1ef66f2a917d7cfca8346052"
  },
  {
    "url": "source/vuex4.x/1.index.html",
    "revision": "d72f59e48fa1f20feb9dc89a87454ae0"
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
